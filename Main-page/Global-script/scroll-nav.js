let nav=document.getElementById('nav01');
let scm=document.getElementById("scmoo")

document.body.onscroll=function(){
    let top01=document.documentElement.scrollTop;
    if(top01 > 1000){
        scm.style.opacity=1;
    }else{
        scm.style.opacity=0;
    }
    let top02=document.documentElement.scrollTop;
    if(top02 > 700){
        nav.style.top='0px';
        nav.style.transition='0.5s';
    }else{
        nav.style.top='-100%';
        nav.style.transition='0.5s';
    }
}
scm.onclick=function(){
    let mu01=document.documentElement.scrollTop;
    let scr01=setInterval(function(){
        document.documentElement.scrollTop= mu01 -=20;
        if(mu01 < 1){
            clearInterval(scr01);
        }
    },2)
}