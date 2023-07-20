let lap=0;
let saveEl= document.getElementById("pre")
let countEl=  document.getElementById("count-el");



function increment(){
    lap++;
    countEl.textContent=lap;
    
}
function save(){
    saveEl.textContent += lap + " - ";
    lap=0;
    countEl.textContent=lap;


}