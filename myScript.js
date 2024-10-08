let inputGrid = 30;
let currentColor = "#000000";

let isMouseDown = false;

document.addEventListener('mousedown', function() {
    isMouseDown = true;
});

document.addEventListener('mouseup', function() {
    isMouseDown = false;
});


grid(inputGrid);

const colorPicker = document.getElementById('favcolor');


colorPicker.addEventListener('input', function(){
    currentColor = String(colorPicker.value);
    console.log(currentColor);  

    const elements = document.getElementsByClassName('divD');
    for (let i = 0; i < elements.length; i++) {
        elements[i].removeEventListener('mouseover', handleMouseOver); 
        elements[i].addEventListener('mouseover', handleMouseOver);

    }
});

function handleMouseOver(event){
    if (isMouseDown) {
        if (currentColor === '#000000') {
            noColor(event);
        } else {
            PickColor(event);
        }
    }
}


function enter(){
    let element = document.getElementById("container");
    element.innerHTML = "";
    inputGrid = document.getElementById("getNumber").value;
    inputGrid = Math.floor(inputGrid);
    grid(inputGrid);
}

document.getElementById("getNumber").addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        enter();
    }
});


function grid(inputGrid){
        for(let i = 0; i < inputGrid; i++){
        const newRow = document.createElement("div");
        newRow.className = "divR " + i;
        document.getElementById("container").appendChild(newRow);
        
        


        for(let y = 0; y < inputGrid; y++){
            const newDiv = document.createElement("div");
            newDiv.className = "divD " + y;
            newRow.appendChild(newDiv);
            
        newDiv.removeEventListener('mouseover', handleMouseOver); 
        newDiv.addEventListener('mouseover', handleMouseOver);

    }
}
}     

    function changeColor(event){
    let red, green, blue;

    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);

    const rgbColor = 'rgb(' + red + ',' + green + "," + blue + ')';

    event.target.style.backgroundColor = rgbColor;
    }

 function noColor(event){
    event.target.style.backgroundColor = "black";

    const styles = window.getComputedStyle(event.target);
    let boxOpacity = parseFloat(styles.getPropertyValue("opacity"));
    boxOpacity += 0.3;
    event.target.style.opacity = boxOpacity;
 }


function rainbow(){
    const elements = document.getElementsByClassName('divD');
    
    for (let i = 0; i < elements.length; i++){
       elements[i].addEventListener('mouseover', function(event){
    
            if(isMouseDown){
                changeColor(event);

            }
    });
    }
}

function clear(){
    const el = document.getElementsByClassName('divD');

    for(let i = 0; i < el.length; i++){
        el[i].style.backgroundColor = "white";
    }
}

document.getElementById("btn 3").addEventListener('click', clear);

function PickColor(event){
    event.target.style.backgroundColor = currentColor;

    const styles = window.getComputedStyle(event.target);
    let boxOpacity = parseFloat(styles.getPropertyValue("opacity"));
    boxOpacity += 0.3;
    event.target.style.opacity = boxOpacity;
}


