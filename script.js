var oneCoin = document.querySelector('#oneCoin').value;
var cotationCoin = document.querySelector('#cotationCoin').innerHTML;

var userSolicitation = [];

function refreshSelect(){
    var inputCoin = document.querySelector('#userCoin');
    var inputCoinOption = inputCoin.options[inputCoin.selectedIndex];
    var inputOption = inputCoinOption.value;

    if(userSolicitation[0] != inputOption){
        userSolicitation.splice(0, 1, inputOption);
    }
}

function refreshOutSelect(){
    var outCoin = document.querySelector('#coinConverter');
    var outCoinOption = outCoin.options[outCoin.selectedIndex];
    var outOption = outCoinOption.value;

    if(userSolicitation[1] != outOption){
        userSolicitation.splice(1, 1, outOption);
    }
}

function converterValor() {
    var userInput = document.getElementById("userValue").value;
    var floatValue = parseFloat(userInput).toFixed(2);
    if(userSolicitation[2] != floatValue){
        userSolicitation.splice(2, 2, floatValue);
    }
}





