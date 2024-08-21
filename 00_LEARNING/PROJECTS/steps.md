# Projects

## Background Color Picker

## [click] https://www.google.com

```Javascript
const form = document.querySelector('form')

//This usecase will give you empty
const height=parseInt(document.querySelector('#height').value)

// Form submitted as POST or GET Method

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector("#result")

    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML=`Please give a valid height ${height}`
    }else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML=`Please give a valid weight ${weight}`
    }else{
        const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        if(bmi<19){
            results.innerHTML=`${bmi}:Underwighted`
        }else if(bmi>25){
            results.innerHTML=`${bmi}:Overweigted`
        }else{
            results.innerHTML=`${bmi}:Normal`
        }
    };
});


```