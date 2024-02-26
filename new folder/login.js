let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let namefield = document.getElementById("namefield");
let title = document.getElementById("title");

signinbtn.onclick=function(){
    namefield.style.maxHeight="0";


title.innerHTML="SIGN IN";

signupbtn.classList.add("disable");
signinbtn.classList.remove("disable");

}

signupbtn.onclick=function(){
    namefield.style.maxHeight="60px";


title.innerHTML="SIGN UP";

signinbtn.classList.add("disable");
signupbtn.classList.remove("disable");

}