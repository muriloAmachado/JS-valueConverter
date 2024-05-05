let oneCoin = document.querySelector('#oneCoin').innerHTML;
let cotationCoin = document.querySelector('#cotationCoin').innerHTML;

console.log(oneCoin);

function refreshSelect(){
    let inputCoin = document.querySelector('#userCoin');
    let inputCoinOption = inputCoin.options[inputCoin.selectedIndex];
    var inputOption = inputCoinOption.value;

    if (inputOption === "dolar") {
        document.getElementById("oneCoin").textContent = "$ 1,00";
    }

    if (inputOption === "peso") {
        document.getElementById("oneCoin").textContent = "AR$ 1,00";
    }

    if (inputOption === "euro") {
        document.getElementById("oneCoin").textContent = "€ 1,00";
    }

    if (inputOption === "libra") {
        document.getElementById("oneCoin").textContent = "£ 1,00";
    }

}

function refreshOutSelect(){
    let outCoin = document.querySelector('#coinConverter');
    let outCoinOption = outCoin.options[outCoin.selectedIndex];
    var outOption = outCoinOption.value;

    if (outOption === "dolar") {
        document.getElementById("cotationCoin").textContent = "$ 1,00";
    }

    if (outOption === "peso") {
        document.getElementById("cotationCoin").textContent = "AR$ 1,00";
    }

    if (outOption === "euro") {
        document.getElementById("cotationCoin").textContent = "€ 1,00";
    }

    if (outOption === "libra") {
        document.getElementById("cotationCoin").textContent = "£ 1,00";
    }

    console.log(outOption);
}



console.log(oneCoin);
