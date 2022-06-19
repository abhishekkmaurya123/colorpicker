const colors=['green','red','yellow','#f15025'];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");
btn.addEventListener("click",function(){
    const randomnumber=getRandomNumber();
    console.log(randomnumber);
 document.body.style.backgroundColor=colors[randomnumber];
 color.textContent=colors[randomnumber];
});
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}