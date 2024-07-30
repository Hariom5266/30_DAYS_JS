// 🍵, Hanji Kaise ho aap sabhi ,This is 18th day of JS Challenge.I’m back and ready to code,Let's roll the code!

// # ================================= ALGORITHAM ================================= #

// # ================================= ACTIVITY 1: Sorting Algoritham ================================= #

//Implement the bubble sort algoritham to sort an array of numbers in asscending order.Log the sorted array..
// Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap elements
                swapped = true;
            }
        }
        n--; // Each pass through the array, the next largest element is in its correct place
    } while (swapped);
    console.log("Bubble Sort:", arr);
    return arr;
}

let array1 = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(array1);

//Implement the selection sort algoritham to sort an array of numbers in asscending order.Log the sorted array.

// Selection Sort
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap elements
    }
    console.log("Selection Sort:", arr);
    return arr;
}

let array2 = [64, 34, 25, 12, 22, 11, 90];
selectionSort(array2);

//Implement the quicksort algoritham to sort an array of numbers in asscending order.Log the sorted array.
// Quicksort

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[Math.floor(arr.length / 2)];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) continue;
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

// # ================================= ACTIVITY 2: Searching Algoritham ================================= #

//Implement the linear search algoritham to find a target value in an array.Log the index of the target value.

let array3 = [64, 34, 25, 12, 22, 11, 90];
console.log("Quicksort:", quickSort(array3));

// Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log("Linear Search: Target found at index", i);
            return i;
        }
    }
    console.log("Linear Search: Target not found");
    return -1;
}

let array4 = [64, 34, 25, 12, 22, 11, 90];
linearSearch(array4, 25);
linearSearch(array4, 100);

//Implement the binary search algoritham to find a taarget value in a sorted array.Log the index of the target value.

// Binary Search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            console.log("Binary Search: Target found at index", mid);
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    console.log("Binary Search: Target not found");
    return -1;
}

let sortedArray = [11, 12, 22, 25, 34, 64, 90];
binarySearch(sortedArray, 25);
binarySearch(sortedArray, 100);

// Count Character Occurrences
function countCharacterOccurrences(str) {
    const counts = {};
    for (let char of str) {
        counts[char] = (counts[char] || 0) + 1;
    }
    console.log("Character Counts:", counts);
    return counts;
}

countCharacterOccurrences("hello world");

// # ================================= ACTIVITY 3: String Algoritham ================================= #

//Write a fnc to count the occurrences of each character in a string.Log the character counts.

// Length of Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const seenChars = {};

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        if (seenChars[currentChar] >= start) {
            start = seenChars[currentChar] + 1;
        }
        seenChars[currentChar] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }
    console.log("Length of Longest Substring Without Repeating Characters:", maxLength);
    return maxLength;
}

lengthOfLongestSubstring("abcabcbb");

//Write a fnc to find the longest substring without repeating character in a string.Log the length of substring.

// # ================================= ACTIVITY 4: Array Algoritham ================================= #

//Write a fnc to rotate an array by k positions.Log the rotated array.

// Rotate Array by k Positions
function rotateArray(arr, k) {
    k = k % arr.length;
    const rotatedArray = arr.slice(-k).concat(arr.slice(0, -k));
    console.log("Rotated Array:", rotatedArray);
    return rotatedArray;
}

rotateArray([1, 2, 3, 4, 5, 6, 7], 3);
//Write a fnc to merge two sorted array into one sorted array. Log the merged array.

// Merge Two Sorted Arrays
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    console.log("Merged Array:", mergedArray);
    return mergedArray;
}

mergeSortedArrays([1, 3, 5], [2, 4, 6]);

// # ================================= ACTIVITY 5: Dyanamic Programming================================= #

//Write a fnc to solve the Fibonnaci sequence using dynamic programming.Log the Fibonnaci numbers.

// Fibonacci Sequence using Dynamic Programming
function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log("Fibonacci Sequence:", fib);
    return fib;
}

fibonacci(10);

//Write a fnc to solve the knapsack problem using dp.Log the maximum value that can be obtained.

// Knapsack Problem using Dynamic Programming
function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    console.log("Maximum value that can be obtained:", dp[n][capacity]);
    return dp[n][capacity];
}

const weights = [1, 3, 4, 5];
const values = [1, 4, 5, 7];
const capacity = 7;
knapsack(weights, values, capacity);



