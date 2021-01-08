const display = document.getElementById('solution');
const input = document.getElementById('myNumber');
const plus = document.getElementById('addition');
const minus = document.getElementById('subtraction');

let num = 0;

function addNum(e) {
    e.preventDefault();
    num += parseInt(input.value);
    display.innerText = num;
    if (num >= 0) {
        display.style.color = 'black';
    }
}



function subtractNum(e) {
    e.preventDefault();
    num -= parseInt(input.value);
    display.innerText = num;
    if(num < 0) {
        display.style.color = 'red';
    } else {
        display.style.color = 'black';
    }
}

plus.addEventListener('click', (e)=> addNum(e))
minus.addEventListener('click', (e)=> subtractNum(e))


function changePlus(e) {
    e.preventDefault();
    if ('mouseover') {
    plus.style.backgroundColor = 'white';
    plus.style.color = 'grey';
    } else (plus.style.backgroundColor == 'grey' &&
            plus.style.color == 'white')
}  

function changeMinus(e) {
    e.preventDefault();
    minus.style.backgroundColor = 'white';
    minus.style.color = 'grey';
}


plus.addEventListener('mouseover', (e)=> changePlus(e))
minus.addEventListener('mouseover', (e)=> changeMinus(e))

function returnPlus(e) {
    e.preventDefault();
    plus.style.backgroundColor = 'grey';
    plus.style.color = 'white';
}

function returnMinus(e) {
    e.preventDefault();
    minus.style.backgroundColor = 'grey';
    minus.style.color = 'white';
}

plus.addEventListener('mouseout', (e)=> returnPlus(e))
minus.addEventListener('mouseout', (e)=> returnMinus(e))