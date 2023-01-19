let bt_p3=document.getElementsByClassName('btnp3');
let pp=document.getElementsByClassName('pp-con');
function nogg(){
    for(let fg=0;fg<pp.length;fg++){
        pp[fg].style.display= 'none'
        pp[fg].classList.add('activ')
    }
}
function btppno(){
    for(let ed=0;ed<bt_p3.length;ed++){
        bt_p3[ed].style.backgroundColor= '#fff'
        bt_p3[ed].style.color= "black"
        bt_p3[ed].style.paddingRight= '6px'
        bt_p3[ed].style.transition= "0.4s"
    }
}
for(let x=0;x<bt_p3.length;x++){
    bt_p3[x].addEventListener("click",function(){
        btppno();
        bt_p3[x].style.backgroundColor= '#6b6b6ba6' 
        bt_p3[x].style.color= "#fff"
        bt_p3[x].style.paddingRight= '30%'
        bt_p3[x].style.transition= "0.4s"
        nogg();
        pp[x].style.display= 'inline-block'
        pp[fg].classList.remove('activ')
    })
}