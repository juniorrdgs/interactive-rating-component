const urlParams = new URLSearchParams(window.location.search);
const rateVote = urlParams.get('rate');
console.log(rateVote)

let rateForm = document.querySelector('form');
let inputs = document.querySelectorAll('.input__rate');
let labels = document.querySelectorAll('label');
let startScreen = document.querySelector('.app__screen');
let thankScreen = document.querySelector('.thanks__screen');
let star = document.querySelector('.star__area');

let checkInputs = () => {
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            labels[i].style.backgroundColor = 'var(--lightGrey)';
            labels[i].style.color = 'var(--white)'
            rateSelected = inputs[i].value;
        } else {
            labels[i].style.backgroundColor = 'var(--mediumDarkBlue)';
            labels[i].style.color = 'var(--lightGrey)'
        }
    }
}

let checkValidation = () => {

}

for (i = 0; i < labels.length; i++) {
    labels[i].addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'var(--orange)';
        event.target.style.color = 'var(--white)';
    })
    labels[i].addEventListener('mouseout', (event) => {
        event.target.style.backgroundColor = 'var(--mediumDarkBlue)';
        event.target.style.color = 'var(--lightGrey)';
        checkInputs();
    });
}

rateForm.onsubmit = (event) => {
    for (i = 0; i < inputs.length; i++) {
        if (!inputs[i].checked) {
            event.preventDefault();
        } else {
            event.preventDefault();
            startScreen.style.display = 'none'
            star.style.display = 'none';
            thankScreen.style.display = 'flex';
            document.querySelector('i').innerText = rateSelected;
        }
    }
}
