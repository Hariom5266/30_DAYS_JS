// 🍵, Hanji Kaise ho aap sabhi ,This is 16th day of JS Challenge.I’m back and ready to code,Let's roll the code!
// # ================================= Recursion ================================= #

// # ================================= ACTIVITY 1: BASIC Recursion ================================= #

//Write a recursive fnc to calculate factorial of a number.Log the result for a few test cases.
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Testing factorial function
console.log(factorial(5));  // Output: 120
console.log(factorial(0));  // Output: 1


//Write a recursive fnc to calculate the nth Fibonnacci nnumber.Log the result for a few test cases.
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Testing fibonacci function
console.log(fibonacci(6));  // Output: 8 (0, 1, 1, 2, 3, 5, 8)
console.log(fibonacci(0));  // Output: 0

// # ================================= ACTIVITY 2: Recursion With Arrays ================================= #

//Write a recursive fnc to find the sum of all elements in an array.Log the result for a few cases.
function arraySum(arr, index = 0) {
    if (index >= arr.length) {
        return 0;
    } else {
        return arr[index] + arraySum(arr, index + 1);
    }
}

// Testing arraySum function
console.log(arraySum([1, 2, 3, 4]));  // Output: 10
console.log(arraySum([]));   

//Write a recursive fnc to find the maximum element in an array.Log the result for a few test cases.
function arrayMax(arr, index = 0) {
    if (index === arr.length - 1) {
        return arr[index];
    } else {
        const maxRest = arrayMax(arr, index + 1);
        return arr[index] > maxRest ? arr[index] : maxRest;
    }
}

// Testing arrayMax function
console.log(arrayMax([1, 7, 3, 9, 4]));  // Output: 9
console.log(arrayMax([-1, -7, -3, -9, -4]));  // Output: -1

// # ================================= ACTIVITY 2: String Manipulation with Recursion ================================= #

//Write a recursive fnc to reverse a string.Log the result for a few test cases.
function reverseString(str) {
    if (str === "") {
        return "";
    } else {
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}

// Testing reverseString function
console.log(reverseString("hello"));  // Output: "olleh"
console.log(reverseString(""));   

//Write a recursive fnc to check if a string is a palindrome.Log the result for a few cases.
function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    } else if (str.charAt(0) !== str.charAt(str.length - 1)) {
        return false;
    } else {
        return isPalindrome(str.substr(1, str.length - 2));
    }
}

// Testing isPalindrome function
console.log(isPalindrome("racecar"));   // Output: true
console.log(isPalindrome("hello"));     // Output: false

// # ================================= ACTIVITY 4: Recursive Search ================================= #

//Write recursive fnc to perform a binary seacrh in sorted array.Log the index of the largest element for a few test cases.
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) {
        return -1;
    }
    
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, low, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, high);
    }
}

// Testing binarySearch function
console.log(binarySearch([1, 3, 5, 7, 9], 7));  // Output: 3
console.log(binarySearch([1, 3, 5, 7, 9], 2));  // Output: -1

//Write a recursive fnc to count the occurrences of a target element in an array.Log the result for a few test cases.
function countOccurrences(arr, target) {
    if (arr.length === 0) {
        return 0;
    }
    
    const first = arr[0];
    const rest = arr.slice(1);
    return (first === target ? 1 : 0) + countOccurrences(rest, target);
}

// Testing countOccurrences function
console.log(countOccurrences([1, 2, 2, 3, 2], 2));  // Output: 3
console.log(countOccurrences([1, 2, 3, 4, 5], 6));  // Output: 0

// # ================================= ACTIVITY 5: Tree Traversal ================================= #

//Write a recursive fnc to perform an in-order traversal of a binary tree.Log the nodes as they are visited.
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(node) {
    if (node !== null) {
        inOrderTraversal(node.left);
        console.log(node.value);
        inOrderTraversal(node.right);
    }
}

// Example tree
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Testing inOrderTraversal function
console.log("In-order traversal:");
inOrderTraversal(root);
// Output: 4, 2, 5, 1, 3 (printed in sequence)

//Write a recursive fnc to calculate the depth of a binary tree.Lpg the result for a few test cases.    
function maxDepth(node) {
    if (node === null) {
        return 0;
    }
    
    let leftDepth = maxDepth(node.left);
    let rightDepth = maxDepth(node.right);
    
    return 1 + Math.max(leftDepth, rightDepth);
}

// Continuing with the same tree example

// Testing maxDepth function
console.log("Max depth of the tree:");
console.log(maxDepth(root));  // Output: 3 (depth of the tree)

