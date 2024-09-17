const inputbar = document.querySelector("#inputbar")
function appendTohtml(input){
    inputbar.value += input;
}

function equate() {
    try {
        inputbar.value = eval(inputbar.value)
    } catch (error) {
        inputbar.value = "error";
    }
}

function clearinput(){
    inputbar.value = "";
}