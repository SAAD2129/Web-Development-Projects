let start = document.querySelector('.start');
let timer = document.querySelector('.timer');
let reset = document.querySelector('.reset');
 let m, s, ms;
reset.addEventListener('click',()=>{
        m, s, ms;
        ms = s = m = 0;
})
m, s, ms;
ms = s = m = 0;
start.addEventListener('click',()=>{

    setInterval(() => {
        // if (ms>59) {
        //     s++;
        // }
        // if (s>=59) {
        //     m++;
        //     s=0;
        // }
        // s++;
        if (s>59) {
            m++;
            s=0;
        }
        if (ms>59) {
            s++;
            ms=0;
        }
        // s=s<10?"0"+s :s;
        // m=m<10?"0"+m :m;
        // ms=ms<10?"0"+ms :ms;
        ms++;
        timer.innerText=`${m}:${s}:${ms}`
        console.log(`${m}:${s}:${ms}`);
    }, 16);
})