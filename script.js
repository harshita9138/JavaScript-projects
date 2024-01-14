let input=document.getElementById("inputbox");
let listcontainer=document.getElementById("listcontainer");
function taskAdd(){
    if(input.value ==='' ){
        alert("You must add your task first!!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        listcontainer.append(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    input.value="";
    saveDate();
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveDate();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveDate();
    }
},false);
// false used cos we want checking to be done from inside to out

function saveDate(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showData(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showData();