let pa=document.getElementsByClassName('pa');
let lin=document.getElementsByClassName('ppl');

function erf(){
    for(let i=0;i<lin.length;i++){
        pa[i].style.width= '0';
        pa[i].style.height= '0';
        pa[i].style.transition= '0.5s';
        pa[i].style.padding= '0px';
    }}
for(let s=0;s<lin.length;s++){lin[s].addEventListener("mouseout",function(){erf()})}
for(let a=0;a<lin.length;a++){
    lin[a].addEventListener("mouseover",function(){
        erf()
        pa[a].style.width= 'auto';
        pa[a].style.height= 'auto';
        pa[a].style.transition= '0.5s';
        pa[a].style.padding= '4px';
    })}