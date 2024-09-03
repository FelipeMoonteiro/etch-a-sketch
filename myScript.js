
function enter(){
    var inputGrid = document.getElementById("getNumber").value;
    console.log(inputGrid);
}

document.getElementById("getNumber").addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        enter();  // Chama a função `enter` quando "Enter" é pressionado
    }
});

// const enterKeyEvent = new KeyboardEvent('keydown', {
//     key: 'Enter',
//     keyCode: 13,
//     bubbles: true,
//     cancelable: true,
// });

// const inputElement = document.getElementById("getNumber");
// inputElement.dispatchEvent(enterKeyEvent);
