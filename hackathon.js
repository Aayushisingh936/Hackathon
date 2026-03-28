let btn1 = document.querySelector("button");
let container1= document.querySelector(".container");
let input1 = document.querySelector("input");
btn1.addEventListener("click", function () {
    if(input1.value == ""){
        alert("please enter your name");
    } else {
        container1.style.display = "block";
    }

});

let card1 = document.querySelector(".card");
let btn2 = document.querySelector("#clickBtn");
btn2.addEventListener("click", function(){
    card1.style.display = "block";
})