let title = document.querySelector(".Further");
let hello = "Further_Investigation"
let index = 1;
const animation = () => {
    let new_title = hello.slice(0,index);
    title.innerText = new_title;
    index > hello.length ? index = 1 : index++;
    // index++;
    setTimeout(() => animation(), 120)
}
animation();