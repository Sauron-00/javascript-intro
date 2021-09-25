import $ from "jquery";

$(document).ready(() => {
    $("button").click(hideBtn)
})


function hideBtn(){
    $("p").hide()
}


console.log("Hello World")

var textElemnt = document.getElementById("txt")

textElemnt.innerHTML = "HELLO";