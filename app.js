let inp = document.querySelector("input");
let btns = document.querySelectorAll("button");
let str = "";

btns.forEach(button => {
    button.addEventListener('click', function () {
        let btn_text = button.innerText;

        if (btn_text === "=") {
            str = eval(str);
            inp.value = str;
        } 
        
        else if (btn_text === "AC") {
            str = "";
            inp.value = str;
        } 
        
        else if (btn_text === "DEL") {
            str = str.substring(0, str.length - 1);
            inp.value = str;
        } 
        
        else {
            str += btn_text;
            inp.value = str;
        }
    });
});

