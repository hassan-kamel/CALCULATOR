var btns = document.querySelectorAll(".calc button");
var myText = document.getElementById("text-area");

myText.innerHTML = "(5)*5";

function typex(i) {
    if (i == 0) {
        myText.innerHTML = "";
    } else if (i == 3) {
        myText.innerHTML = myText.innerHTML.slice(0, -1);
    } else if (i == 7) {
        myText.innerHTML += "*";
    } else if (i == 18) {
        try {
            myText.innerHTML = eval(myText.innerHTML);
        } catch (err) {
            myText.innerHTML = "Math error";

        }
    } else {
        myText.innerHTML += btns[i].innerHTML;
    }
}