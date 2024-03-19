let textcontainer=document.querySelector(".textcontainer");
let enterkey=document.querySelector(".ENTER")
let spacekey=document.querySelector(".space")
let deletekey=document.querySelector(".del")
let capslock=document.querySelector(".capslock")
let allkeys=document.querySelectorAll(".key");
let iscaps=false
let emoji=document.querySelector(".emoji")
let copy=document.querySelector(".button")


enterkey.addEventListener("click",function(){
    let content=textcontainer.innerText;
    let newcontent=content+"\n";
    textcontainer.innerText=newcontent;
})
spacekey.addEventListener("click",function(){
    let content=textcontainer.innerText;
    let newcontent=content+"_";
    textcontainer.innerText=newcontent;
})
deletekey.addEventListener("click",function(){
    let content=textcontainer.innerText;
    let newcontent=content.slice(0,content.length-1);
    textcontainer.innerText=newcontent;
})

capslock.addEventListener("click",function(){
    if(iscaps){
        capslock.classList.remove("active")
        
        
    }else{
        capslock.classList.add("active");
        for(let key of allkeys){
            if(key.classList.length>1){
                return
            }else{
                key.innerText=key.innerText.toUpperCase();
            }

        }
    }
    iscaps=!iscaps//toggle
})

for (let key of allkeys){
    if(key.classList.length>1){

    }else{
        key.addEventListener("click",function(){
            textcontainer.innerText +=key.innerText
        })
    }
}

emoji.addEventListener("click",function(){
    alert("feature coming soon ")
})

copy.addEventListener("click",function(){
    textcontainer.innerText="Text Has Been Copied"
})

let title = document.querySelector(".typewriter");
let hello = "VIRTUAL__KEYBOARD"
let index = 1;
const animation = () => {
    let new_title = hello.slice(0,index);
    title.innerText = new_title;
    index > hello.length ? index = 1 : index++;
    // index++;
    setTimeout(() => animation(), 120)
}
animation();