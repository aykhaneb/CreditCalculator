function rangeSlider(value) {
    document.getElementById('sliderValue').innerHTML = value + " AZN"
}
function rangeSlider2(value) {
    document.getElementById('sliderValue2').innerHTML = value + " Ay"
}
function rangeSlider3(value) {
    document.getElementById('sliderValue3').innerHTML = value + " Ay"
}

function Show() {
    var total = Number(document.getElementById('inp1').value)
    var month = Number(document.getElementById('inp2').value)
    var percent = Number(document.getElementById('inp3').value)
    var monthly = (total + (total * (percent / 100))) / month
    document.getElementById('first').innerHTML = monthly.toFixed(2)
    document.getElementById('second').innerHTML = (monthly) * month.toFixed(2)

    console.log(monthly);
}