const container = document.querySelector(".container")
let gridSize = 16

function createGrid (columns)
{
    gridSize = columns
    let divSize = 600/columns - 2
    for ( let i = 0; i < columns*columns; i ++)
    {
        let div = document.createElement("div")
        div.setAttribute("style",`border: 1px solid black; height: ${divSize}px`)  
        div.style.width = `${divSize}px`
        div.style.backgroundColor = "grey"

        div.setAttribute("class","gridItem")

        div.addEventListener('mouseover', transitionDisappear);

        container.appendChild(div)
    }
    
    container.setAttribute("style",`display:grid; grid-template-columns: repeat(${columns}, 1fr)`) 
}


function randomColor(){
    
    let gridItems = document.querySelectorAll(".gridItem")
    
    gridItems.forEach(function (gridItem){
        gridItem.removeEventListener('mouseover', transitionDisappear);
        gridItem.addEventListener('mouseover', transitionRandomColors);
    });
}

function transitionDisappear(e){
    e.target.style.transition = 'all 0.7s ease-out';
    e.target.style.backgroundColor = 'transparent';
    e.target.style.borderColor = 'transparent';
}

function transitionRandomColors(e){
    e.target.style.transition = 'all 0.7s ease-out';
    e.target.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    e.target.style.border = '1px solid black;';
}

function resize(){
    let input = prompt("How many columns do you want (between 1-99)")
    
    if (isNaN(input)) return alert("That is not a number!")
    
    if(input >0 && input <= 100){
        clean(input)
    } else if(input === ""){
        console.log("vida ....")
        clean(gridSize)
    }

}

function clean(columns=gridSize){
    
    while(container.firstChild) {                           
        container.firstChild.remove();
    }
    createGrid(columns)
}

createGrid (gridSize)