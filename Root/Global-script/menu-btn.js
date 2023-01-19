let btn=document.getElementById('menuBtn');
btn.addEventListener('click',function(){
    let bt=document.getElementsByClassName('btn-menu');
    let cl=document.getElementById('cll');
    let sha=document.getElementById('sha');
    bt[0].classList.toggle("btn-menu0");
    cl.classList.toggle("ac");
    sha.classList.toggle("acsha")
    let bts=document.getElementsByClassName('it');
    for(let e=0;e<bts.length;e++){
        bts[e].classList.toggle("acno");
    }
    sha.addEventListener('click',function(){
        for(let e=0;e<bts.length;e++){
            bts[e].classList.toggle("acno");
        }
        sha.classList.toggle("acsha")
        cl.classList.toggle("ac");
        bt[0].classList.toggle("btn-menu0");
    })
})
