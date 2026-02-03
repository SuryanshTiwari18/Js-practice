const form = document.querySelector('form')
//this use case will give you empty value
//const height = parseFloat(document.querySelector('#height').value)

form.addEventListener('submit', function (e){
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value)
    const weight = parseFloat(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || isNaN(height) || height <= 0){
        results.innerText = 'Please enter a valid height'
        return
    }
    if(weight === '' || isNaN(weight) || weight <= 0){
        results.innerText = 'Please enter a valid weight'
        return
    }
    const bmi = (weight / ((height * height)/10000)).toFixed(2)
    let status = ''
    if(bmi < 18.5){
        status = 'Underweight'
    } else if(bmi >= 18.5 && bmi < 24.9){
        status = 'Normal weight'
    } else if(bmi >= 25 && bmi < 29.9){
        status = 'Overweight'
    } else{
        status = 'Obesity'
    }

    results.innerHTML = `BMI: ${bmi} (${status})`
})