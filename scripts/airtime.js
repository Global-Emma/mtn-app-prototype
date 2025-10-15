import { collectAirtime } from "./buy-again.js";

// const inputField = Number(document.querySelector('.js-input').value);
const airtimeButton = document.querySelector('.js-buy');

let message = 0

function collectInput() {
    const inputField = Number(document.querySelector('.js-input').value);
    message = inputField

     if (message >= 50 && message <= 150000) {
        airtimeButton.style.display = 'block';
        document.querySelector('.display').innerHTML = ''
    } else{
        airtimeButton.style.display = 'none'
        document.querySelector('.display').innerHTML = 'Hey There! Please enter an amount between N50 and N150,000.'
    }
}


document.querySelector('.js-input').addEventListener('keyup', (event) => {
    checkInput(event)
})

 function checkInput(event) {
    if(event.key) {
        collectInput();
    }
}

    document.querySelector('.five').addEventListener('click', (event) => {
        const num = Number(document.querySelector('.js-input').value) + 500;
        document.querySelector('.js-input').value = num
        if (num >= 50 && num <= 150000) {
            airtimeButton.style.display = 'block';
            document.querySelector('.display').innerHTML = ''
        }
        else {
            airtimeButton.style.display = 'none'
            document.querySelector('.display').innerHTML = 'Hey There! Please enter an amount between N50 and N150,000.'
        }
    })

    document.querySelector('.ten').addEventListener('click', () => {
        const num = document.querySelector('.js-input').value;
        let con = Number(num);
        let win = con + 1000
        document.querySelector('.js-input').value = win
        if (win >= 50 && win <= 150000) {
            airtimeButton.style.display = 'block';
            document.querySelector('.display').innerHTML = ''
        }
        else {
            airtimeButton.style.display = 'none'
            document.querySelector('.display').innerHTML = 'Hey There! Please enter an amount between N50 and N150,000.'
        }
    })

    document.querySelector('.twenty').addEventListener('click', () => {
        const num = document.querySelector('.js-input').value;
        let con = Number(num);
        let win = con + 2000
        document.querySelector('.js-input').value = win
        if (win >= 50 && win <= 150000) {
            airtimeButton.style.display = 'block';
            document.querySelector('.display').innerHTML = ''
        }
        else {
            airtimeButton.style.display = 'none'
            document.querySelector('.display').innerHTML = 'Hey There! Please enter an amount between N50 and N150,000.'
        }
    })

    document.querySelector('.fifty').addEventListener('click', () => {
        const num = document.querySelector('.js-input').value;
        let con = Number(num);
        let win = con + 5000
        document.querySelector('.js-input').value = win
        if (win >= 50 && win <= 150000) {
            airtimeButton.style.display = 'block';
            document.querySelector('.display').innerHTML = ''
        }
        else {
            airtimeButton.style.display = 'none'
            document.querySelector('.display').innerHTML = 'Hey There! Please enter an amount between N50 and N150,000.'
        }
    })

    document.querySelector('.hundred').addEventListener('click', () => {
        const num = document.querySelector('.js-input').value;
        let con = Number(num);
        let win = con + 10000
        document.querySelector('.js-input').value = win
        if (win >= 50 && win <= 150000) {
            airtimeButton.style.display = 'block';
            document.querySelector('.display').innerHTML = ''
        }
        else {
            airtimeButton.style.display = 'none'
            document.querySelector('.display').innerHTML = 'Hey There! Please enter an amount between N50 and N150,000.'
        }
    })

    document.querySelector('.one-fifty').addEventListener('click', () => {
        const num = document.querySelector('.js-input').value;
        let con = Number(num);
        let win = con + 15000
        document.querySelector('.js-input').value = win
        if (win >= 50 && win <= 150000) {
            airtimeButton.style.display = 'block';
            document.querySelector('.display').innerHTML = ''
        }
        else {
            airtimeButton.style.display = 'none'
            document.querySelector('.display').innerHTML = 'Hey There! Please enter an amount between N50 and N150,000.'
        }
    })
document.querySelector('.js-buy').addEventListener('click', () => {
    collectAirtime();
    collectInput()
});