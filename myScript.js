
function enter(){
    let element = document.getElementById("container");
    element.innerHTML = "";
    let inputGrid = document.getElementById("getNumber").value;
    inputGrid = Math.floor(inputGrid);
    console.log(inputGrid);
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
            console.log("Entrou");
            const newDiv = document.createElement("div");
            newDiv.className = "divD " + y;
            newRow.appendChild(newDiv);
            newDiv.addEventListener("mouseover", changeColor);
        }

    }
}     

    function changeColor(event){
        event.target.style.backgroundColor = "grey"; 
    }



