const buttons = document.getElementsByClassName("button2");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', callToServer); //false
}

function callToServer(){
    console.log("This will be a call to server");
}
