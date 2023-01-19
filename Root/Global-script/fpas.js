
let onp=document.getElementById("onp");
let nop=document.getElementById("nop");
let e=document.getElementById("pas");

onp.addEventListener("click",function(){
    onp.style.display= 'none';
    nop.style.display= 'inline-block';
    e.type= "text";
})
nop.addEventListener("click",function(){
    nop.style.display= 'none';
    onp.style.display= 'inline-block';
    e.type= "password";
})

let onp01=document.getElementById("onpp");
let nop01=document.getElementById("nopp");
let e01=document.getElementById("pass");

onp01.addEventListener("click",function(){
    onp01.style.display= 'none';
    nop01.style.display= 'inline-block';
    e01.type= "text";
})
nop01.addEventListener("click",function(){
    nop01.style.display= 'none';
    onp01.style.display= 'inline-block';
    e01.type= "password";
})