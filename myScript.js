
function enter(){
    var inputGrid = document.getElementById("getNumber").value;
    inputGrid = Math.floor(inputGrid);
    console.log(inputGrid);
    grid(inputGrid);
    console.log("entrou");

}

document.getElementById("getNumber").addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        enter();
    }
});

function grid(inputGrid){
    for(let i = 0; i < inputGrid; i++){
        let newDiv = document.createElement("div");
        newDiv.className = "div" + i;
        document.getElementById("c  ontainer").appendChild(newDiv);
    }
}
