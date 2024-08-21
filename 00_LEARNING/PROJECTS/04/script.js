let randomeNumber=parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaning = document.querySelector('.lastResult');
const lowOrhi = document.querySelector('.lowOrhi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    // Checke range of the guess
    if(isNaN(guess)){
        alert('Please enter a valid number.');
    }else if(guess<1){
        alert('Please enter a number more than 1.');
    }else if(guess>100){
        alert('Please enter a number less than 100.');
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            dispalyGuess(guess)
            displayMessage(`Game Over. Random number was ${randomeNumber}`)
            endGame()
        }else{
            dispalyGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    // higher or lower
    if(guess === randomeNumber){
        displayMessage(`You guessed it right.`)
        endGame()
    }else if(guess<randomeNumber){
        displayMessage('Number is TOOO Low.')
    }else if(guess>randomeNumber){
        displayMessage('Number is TOOO High.')
    }
}

function dispalyGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess},`
    numGuess+=1;
    remaning.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
    // Interracte with DOM
    lowOrhi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    // End the game
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false    
    newGame()
}

function newGame(){ 
    // Start new game
    const newGameBtn=document.querySelector('#newGame')
    newGameBtn.addEventListener('click',function(e){
        randomeNumber=parseInt(Math.random()*100+1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaning.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}




