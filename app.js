let inp = document.querySelector("input");
let btns = document.querySelectorAll("button");
let str = "";

btns.forEach(button => {
    button.addEventListener('click', function () {
        let buttonText = button.innerText.trim();

        if (buttonText === "=") {
            str = eval(str);
            inp.value = str;
        } 

        else if (buttonText === "AC") {
            str = "";
            inp.value = str;
        } 
        
        else if (buttonText === "DEL") {
            str = str.substring(0, str.length - 1);
            inp.value = str;
        } 

        else {
            str += buttonText;
            inp.value = str;
        }
    });
});
