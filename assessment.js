let input = parseInt(document.getElementById('myNumber').innerHTML);
let solution = parseInt(document.getElementById('solution').innerHTML);

function myAddition() {
    var x = parseInt(document.getElementById('myNumber').value);
    var n = solution + x;
    n++
    document.getElementById('solution').innerHTML = n;
    console.log(n)
}


function mySubtraction() {
    var y = parseInt(document.getElementById('myNumber').value);
    var o = solution - y;
    o--
    document.getElementById('solution').innerHTML = o;

    console.log(o)
}


// function changeColor() {
//     document.getElementsByClassName('buttons').style.background-color = 'white';
//     document.getElementsByClassName('buttons').style.color = 'grey';
// }