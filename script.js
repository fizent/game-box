const main = document.querySelector(".main")
const box = document.querySelector(".box")

function Perevents(event){
    event.preventDefault()
}

function DragHandler(event) {
    event.dataTransfer.setData("vocla", event.target.id)
    console.log("drag");
}

function DropHandler(event){
    console.log("droped");
    const GetData = event.dataTransfer.getData("vocla")
    const targetElm = document.getElementById(GetData)
    event.target.append(targetElm)
}   

////// اشتباه های من
// تو حتما به id نیاز داری 
