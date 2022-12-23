
// let  number= document.getElementById("num");
// let number1=document.getElementById("num-1");

// let count=12;
// let count1=6;

//  function button_1(){
//      count=count+1;
//      number.innerText=count;
//  }
//  function button_2(){
//     count=count+2;
//     number.innerText=count;
// }
// function button_3(){
//     count=count+3;
//     number.innerText=count;
// }

// function button_4(){
//     count1=count1+1;
//     number1.innerText=count1;
// }
// function button_5(){
//    count1=count1+2;
//    number1.innerText=count1;
// }
// function button_6(){
//    count1=count1+3;
//    number1.innerText=count1;
// }






/* ======++++++======khalid's js code 1 start here======
================== */

function counter(id,numb){
    let values = document.getElementById(id).textContent;
    document.getElementById(id).textContent=Number(values)+numb;
}

/* ======++++++======khalid's js code 1 end here======
================== */






/* khalid's js code 2 start here ======
===========*/

// let homePlaceholder = document.getElementById('home-num');
// let guestPlaceholder = document.getElementById('guest-num');

// document.querySelectorAll('.home-btn').forEach(element => {
//     element.addEventListener('click',(btn)=>{
//         if(btn.target.dataset.id=='home1'){
//            homePlaceholder.textContent= increment(homePlaceholder,1)
//         }
//         else if(btn.target.dataset.id=='home2'){
//             homePlaceholder.textContent= increment(homePlaceholder,2)
//         }
//         else if(btn.target.dataset.id=='home3'){
//             homePlaceholder.textContent= increment(homePlaceholder,3)
//         }
//         else if(btn.target.dataset.id=='guest1'){
//             guestPlaceholder.textContent=increment(guestPlaceholder,1)

//         }
//         else if(btn.target.dataset.id=='guest1'){
//             guestPlaceholder.textContent=increment(guestPlaceholder,1)

//         }
//         else if(btn.target.dataset.id=='guest2'){
//             guestPlaceholder.textContent=increment(guestPlaceholder,2)

//         }
//         else if(btn.target.dataset.id=='guest3'){
//             guestPlaceholder.textContent=increment(guestPlaceholder,3)

//         }
//         else if(btn.target.dataset.id=='home-clear'){
//             homePlaceholder.textContent=0;
//         }
//         else if(btn.target.dataset.id=='guest-clear'){
//             guestPlaceholder.textContent=0;
//         }

//     })

    
// });
// function increment(placeHolder,num){
//     let values =Number(placeHolder.textContent);
//    return values+=num;

// }

/* khalid's js code 2 start here ======
===========*/