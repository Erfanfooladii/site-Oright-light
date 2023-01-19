let nav=document.getElementById('nav01');

document.body.onscroll=function(){
    let top=document.documentElement.scrollTop;
    if(top > 700){
        nav.style.top='0px';
        nav.style.transition='0.5s';
    }else{
        nav.style.top='-100%';
        nav.style.transition='0.5s';
    }
}