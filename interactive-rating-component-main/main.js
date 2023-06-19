const select=document.querySelector(".select");
const one=document.querySelector(".one");
const two=document.querySelector(".two");
const three=document.querySelector(".three");
const four=document.querySelector(".four");
const five=document.querySelector(".five");
const btn=document.querySelector("#cl");
const wrapper=document.querySelector(".wrapper");

// console.log(one.textContent);
let val="";
// val=one.textContent;
// console.log(val);
let arr=[0,0,0,0,0];

function setval(t){
    let flag=0;
     for(let i=0;i<5;i++)
     {
        if(arr[i]==1)
        {
            if(i==0)
            {
            one.style.removeProperty("background-color"); 
            flag=1;
            arr[i]=0;
            }
            else if(i==1)
            {
                two.style.removeProperty("background-color"); 
                flag=1;
                arr[i]=0;
            }
            else if(i==2)
            {
                three.style.removeProperty("background-color"); 
                flag=1;
                arr[i]=0;
            }
            else if(i==3)
            {
                four.style.removeProperty("background-color"); 
                flag=1;arr[i]=0;

            }
            else if(i==4)
            {
                five.style.removeProperty("background-color"); 
                flag=1;
                arr[i]=0;
            }
           
        }
        
     }
   
    t.style.backgroundColor="hsl(217, 12%, 63%)";
     val=t.textContent;
     arr[val-1]=1;
     
     

     
    

    
}
one.addEventListener("click",()=>{
    setval(one);
})
two.addEventListener("click",()=>{
    setval(two);
})
three.addEventListener("click",()=>{
    setval(three);
})
four.addEventListener("click",()=>{
    setval(four);
})

five.addEventListener("click",()=>{
    setval(five);
})

btn.addEventListener("click",()=>{
     wrapper.classList.add("active");
     select.innerHTML=`You selected ${val} out of 5`;
})






