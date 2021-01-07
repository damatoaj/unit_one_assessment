let input = parseInt(document.getElementById('myNumber').innerHTML);
let solution = parseInt(document.getElementById('solution').innerHTML);



function myAddition() {
    var x = parseInt(document.getElementById('myNumber').value);
    var n = solution + x;
    n++
    document.getElementById('solution').innerHTML = n;
    console.log(n)
}
document.getElementById('addition').addEventListener('click', myAddition())

function mySubtraction() {
    var y = parseInt(document.getElementById('myNumber').value);
    var o = solution - y;
    document.getElementById('solution').innerHTML = o;

    console.log(o)
}
document.getElementById('subtraction').addEventListener('click', mySubtraction())


// function changeColor() {
//     document.getElementsByClassName('buttons').style.background-color = 'white';
//     document.getElementsByClassName('buttons').style.color = 'grey';
// }