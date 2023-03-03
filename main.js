const container = document.querySelector('.container');
const percent = document.querySelector('.overlay');
let preVal = 0;
let increment = setInterval(()=>{
preVal++;
percent.textContent=preVal+'%';
if (preVal == 100) {
    clearInterval(increment);
    container.classList.remove("active");
}
},100)
