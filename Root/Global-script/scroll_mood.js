let scm=document.getElementById("scmoo")

document.body.onscroll=function(){
    let top=document.documentElement.scrollTop;
    if(top > 1000){
        scm.style.opacity=1;
    }else{
        scm.style.opacity=0;
    }
}
scm.onclick=function(){
    let mu=document.documentElement.scrollTop;
    let scr=setInterval(function(){
        document.documentElement.scrollTop= mu -=20;
        if(mu < 1){
            clearInterval(scr);
        }
    },2)
}