
var total = document.querySelector('#totalConvert');
var userSolicitation = ['real', 'real'];

var start = document.querySelector("#confirmBtn")

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

const conversion=()=>{
        var userInput = document.getElementById("userValue").value;
        var valueToConvert = parseFloat(userInput).toFixed(2);

        if(userSolicitation[2] != valueToConvert){
            userSolicitation.splice(2, 2, valueToConvert);
        }

        console.log(valueToConvert)


        switch(userSolicitation[0]){

            case 'real':    
                realConversion(userSolicitation);
                break;
        
            case 'dolar':    
                dolarConversion(userSolicitation);
                break;
        
        
            case 'peso':    
                pesoConversion(userSolicitation);
                break;
        
            case 'euro':    
                euroConversion(userSolicitation)
                break;
        
            case 'libra':    
                libraConversion(userSolicitation)
                break;
        }     

}
start.addEventListener("click",conversion);

function realConversion(userSolicitation){

    document.getElementById("oneCoin").textContent = "R$ 1.00";

    if(userSolicitation[1] == 'real'){
        var resultConversion = parseFloat(userSolicitation[2] * 1.00).toFixed(2);
        document.getElementById("oneCoin").textContent = "R$ 1,00";
        total.textContent = `R$ ${resultConversion}`;
    }
        
    if(userSolicitation[1] == 'dolar'){
        var resultConversion = parseFloat(userSolicitation[2]*0.196).toFixed(2);
        document.getElementById("cotationCoin").textContent = `US$ ${1*0.196}`;
        total.textContent = `US$ ${resultConversion}`;
    }

    if(userSolicitation[1] == 'peso'){
        var resultConversion = parseFloat(userSolicitation[2]*171.88).toFixed(2);
        document.getElementById("cotationCoin").textContent = `AR$ ${1*171.88}`;
        total.textContent = `AR$ ${resultConversion}`;
    }

    if(userSolicitation[1] == 'euro'){
        var resultConversion = parseFloat(userSolicitation[2]*0,182).toFixed(2);
        document.getElementById("cotationCoin").textContent = `€ ${1*0.182}`;
        total.textContent = `€ ${resultConversion}`;
    }
    if(userSolicitation[1] == 'libra'){
        var resultConversion = parseFloat(userSolicitation[2]*0,156).toFixed(2);
        document.getElementById("cotationCoin").textContent = `£ ${1*0.156}`;
        total.textContent = `£ ${resultConversion}`;
    }
}

function dolarConversion(userSolicitation){

    document.getElementById("oneCoin").textContent = "US$ 1.00";

    if(userSolicitation[1] == 'dolar'){
        var resultConversion = (userSolicitation[2]*1.00);
        document.getElementById("cotationCoin").textContent = `US$ 1.00`;
        total.textContent = `US$ ${resultConversion}`;
    }

    if(userSolicitation[1] == 'real'){
        var resultConversion = (userSolicitation[2]*5.12);
        document.getElementById("cotationCoin").textContent = `R$ ${1*5.12}`;
        total.textContent = `R$ ${resultConversion}`;
    }

    if(userSolicitation[1] == 'peso'){
        var resultConversion = (userSolicitation[2]*876.79);
        document.getElementById("cotationCoin").textContent = `AR$ ${1*876.79}`;
        total.textContent = `AR$ ${resultConversion}`;
    }

    if(userSolicitation[1] == 'euro'){
        var resultConversion = (userSolicitation[2]*0.93);
        document.getElementById("cotationCoin").textContent = `€ ${1*0.93}`;
        total.textContent = `€ ${resultConversion}`;
    }

    if(userSolicitation[1] == 'libra'){
        var resultConversion = (userSolicitation[2]*0.78);
        document.getElementById("cotationCoin").textContent = `£ ${1*0.78}`;
        total.textContent = `£ ${resultConversion}`;
    }
}

function pesoConversion(userSolicitation){

    document.getElementById("oneCoin").textContent = "AR$ 1.00";

    if(userSolicitation[1] == 'peso'){
        var resultConversion = (userSolicitation[2]*1.00);
        document.getElementById("cotationCoin").textContent = "AR$ 1.00";
        total.textContent = `AR$ ${resultConversion}`;
    }

    if(userSolicitation[1] == 'real'){
        var resultConversion = (userSolicitation[2]*0.0058);
        document.getElementById("cotationCoin").textContent = `R$ ${1*0.0058}`;
        total.textContent = `R$ ${resultConversion}`;
    }

    if(userSolicitation[1] == 'dolar'){
        var resultConversion = (userSolicitation[2]*0.00114);
        document.getElementById("cotationCoin").textContent = `US$ ${1*0.00114}`;
        total.textContent = `US$ ${resultConversion}`;
    }

    if(userSolicitation[1] == 'euro'){
        var resultConversion = (userSolicitation[2]*0.00106);
        document.getElementById("cotationCoin").textContent = `€ ${1*0.00106}`;
        total.textContent = `€ ${resultConversion}`;
    }

    if(userSolicitation[1] == 'libra'){
        var resultConversion = (userSolicitation[2]*0.00091);
        document.getElementById("cotationCoin").textContent = `£ ${1*0.00091}`;
        total.textContent = `£ ${resultConversion}`;
    }
}

function euroConversion(userSolicitation){

    document.getElementById("oneCoin").textContent = "€ 1,00";

    if(userSolicitation[1] == 'euro'){
        var resultConversion = (userSolicitation[2]*1.00);
        document.getElementById("cotationCoin").textContent = "€ 1,00";
        total.textContent = `€ ${resultConversion}`;
    }

    if(userSolicitation[1] == 'real'){
        var resultConversion = (userSolicitation[2]*5.49);
        document.getElementById("cotationCoin").textContent = `R$ ${1*5.49}`;
        total.textContent = `R$ ${resultConversion}`;
    }

    if(userSolicitation[1] == 'dolar'){
        var resultConversion = (userSolicitation[2]*1.08);
        document.getElementById("cotationCoin").textContent = `US$ ${1*1.08}`;
        total.textContent = `US$ ${resultConversion}`;
    }

    if(userSolicitation[1] == 'peso'){
        var resultConversion = (userSolicitation[2]*943.66);
        document.getElementById("cotationCoin").textContent = `AR$ ${1*943.66}`;
        total.textContent = `AR$ ${resultConversion}`;
    }

    if(userSolicitation[1] == 'libra'){
        var resultConversion = (userSolicitation[2]*0.86);
        document.getElementById("cotationCoin").textContent = `£ ${1*0.86}`;
        total.textContent = `£ ${resultConversion}`;
    }
}

function libraConversion(userSolicitation){

    document.getElementById("oneCoin").textContent = "£ 1,00";

    if(userSolicitation[1] == 'libra'){
        var resultConversion = (userSolicitation[2]*1.00);
        document.getElementById("cotationCoin").textContent = "£ 1,00";
        total.textContent = `£ ${resultConversion}`;
    }

    if(userSolicitation[1] == 'real'){
        var resultConversion = (userSolicitation[2]*6.40);
        document.getElementById("cotationCoin").textContent = `R$ ${1*6.40}`;
        total.textContent = `R$ ${resultConversion}`;
    }

    if(userSolicitation[1] == 'dolar'){
        var resultConversion = (userSolicitation[2]*1.25);
        document.getElementById("cotationCoin").textContent = `US$ ${1*1.25}`;
        total.textContent = `US$ ${resultConversion}`;
    }

    if(userSolicitation[1] == 'peso'){
        var resultConversion = (userSolicitation[2]*1100.03);
        document.getElementById("cotationCoin").textContent = `AR$ ${1*1100.03}`;
        total.textContent = `AR$ ${resultConversion}`;
    }

    if(userSolicitation[1] == 'euro'){
        var resultConversion = (userSolicitation[2]*1.17);
        document.getElementById("cotationCoin").textContent = `€ ${1*1.17}`;
        total.textContent = `€ ${resultConversion}`;
    }
}







