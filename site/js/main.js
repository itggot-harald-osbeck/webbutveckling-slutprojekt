function menu(){
    let thing = document.querySelector(".menu") 
    thing.classList.toggle("menuactivate")
}
function catmenu(){
    let thing = document.querySelector(".categorymenu") 
    thing.classList.toggle("catmenuactivate")
}
function cartback(){
    window.history.back();
}
function cartalert(){
    alert("Lägg till något i varukorgen först!")
}