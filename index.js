num1 = document.getElementById("num1-el")
num2 = document.getElementById("num2-el")

sum = document.getElementById("sum-el")
// num1.textContent = num2.textContent = "0"

let cnt1 = 0
let cnt2 = 0

function inc1(){
    cnt1 += 1
    num1.textContent = cnt1
}

function inc2(){
    cnt2 += 1
    num2.textContent = cnt2
}

function add(){
    let cnt = 0
    num1.textContent = cnt1
    num2.textContent = cnt2
    sum.textContent = 'Sum: '
    num1Value = parseInt(num1.textContent, 10)
    num2Value = parseInt(num2.textContent, 10)
    cnt += num1Value + num2Value
    sum.textContent += cnt
}

function subtract(){
    let cnt = 0
    num1.textContent = cnt1
    num2.textContent = cnt2
    sum.textContent = 'Sum: '
    num1Value = parseInt(num1.textContent, 10)
    num2Value = parseInt(num2.textContent, 10)
    cnt += num1Value - num2Value
    sum.textContent += cnt
}

function div(){
    let cnt = 0
    num1.textContent = cnt1
    num2.textContent = cnt2
    sum.textContent = 'Sum: '
    num1Value = parseInt(num1.textContent, 10)
    num2Value = parseInt(num2.textContent, 10)
    cnt += num1Value/num2Value
    sum.textContent += cnt
}

function times(){
    let cnt = 0
    num1.textContent = cnt1
    num2.textContent = cnt2
    sum.textContent = 'Sum: '
    num1Value = parseInt(num1.textContent, 10)
    num2Value = parseInt(num2.textContent, 10)
    cnt += num1Value * num2Value
    sum.textContent += cnt
}

function resetNum1(){
    let cnt = 0
    cnt1 = 0
    num1.textContent = cnt1
}

function resetNum2(){
    let cnt = 0
    cnt2 = 0
    num2.textContent = cnt2
}