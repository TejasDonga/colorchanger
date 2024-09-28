const form = document.querySelector('form');
// this is usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('.result')
    const under = document.querySelector('.under').textContent;
    const normal = document.querySelector('.normal').textContent;
    const over = document.querySelector('.over').textContent;

    if (height < 0 || isNaN(height)) {
        results.innerHTML = 'enter a valid height'
    } else if ( weight < 0 || isNaN(weight)) {
        results.innerHTML = 'enter a valid weight'
    } else {
        const bmi = (weight / ((height ** 2) / 10000)).toFixed(2)
        if (bmi < 18.6) {
            results.innerHTML = `your bMI is a ${bmi} and ${under}`
        }
        if (bmi > 18.6 && bmi < 24.9) {
            results.innerHTML = `your bMI is a ${bmi} and ${normal}`
        }
        if (bmi > 24.9) {
            results.innerHTML = `your bMI is a ${bmi} and ${over}`
        }
    }
});