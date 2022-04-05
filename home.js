// function openForm() {
//     document.getElementById("myForm").style.display = "block";
//   }
  
//   function closeForm() {
//     document.getElementById("myForm").style.display = "none";
//   }

// function show(){
//     console.log("myform")
// }
// document.getElementById("button1").addEventListener("click",function(){
//     document.querySelector(".popup").style.display="flex";
// })
// document.querySelector(".close").addEventListener("click",function(){
//     document.querySelector(".popup").style.display="none";
// })

// const isactive='is--active'
// const click='click'
// const popup=document.querySelector('.popup')
// const btn=document.querySelector('.button1')


// const toggleNavigation=()=>{
//     popup.classList.toggle(isactive)

// }

// btn.addEventListener(click,toggleNavigation)

$(document).ready(function(){
    $(".button1").click(function(){
        alert("button clicked")
    })
})