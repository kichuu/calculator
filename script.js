document.addEventListener('DOMContentLoaded', function(){
    console.log("DOM Content Loaded");
    let cbody = document.querySelector('.cal-body')
    for(i=0;i<10;i++){


const nums  = document.createElement("button")
nums.classList.add("nums")
nums.textContent = i
nums.classList.add("num-" + i);

cbody.appendChild(nums)
}

const plus  = document.createElement("button")
plus.classList.add("plus")
plus.textContent = "+"
cbody.appendChild(plus)

const minus  = document.createElement("button");
minus.classList.add("minus");
minus.textContent = "-";
cbody.appendChild(minus);

const multiplication = document.createElement("button");
multiplication.classList.add("multiplication");
multiplication.textContent = "x";
cbody.appendChild(multiplication)

const division = document.createElement("button");
division.classList.add("division");
division.textContent = "/";
cbody.appendChild(division)

const clearButton = document.createElement("button");
clearButton.classList.add("clearb");
clearButton.textContent = "Clear";
cbody.appendChild(clearButton)

const equalsButton = document.createElement("button");
equalsButton.classList.add("equals");
equalsButton.textContent = "=";
cbody.appendChild(equalsButton);

})