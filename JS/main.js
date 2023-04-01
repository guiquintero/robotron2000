const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const robo = document.querySelector(".robo");
var i = 1;
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) =>{
     elemento.addEventListener("click", (evento)=>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.peca);
        
     })
})

robo.addEventListener("click", (evento) => {
    mudaImagem();

})

function mudaImagem(){
    document.querySelector(".robo").src="img/robotron"+i+".png";
    i++;
    if(i>6)
        i=1;
}



function manipulaDados (operacao, controlePai){

    const peca = controlePai.querySelector("[data-contador]");

    if(operacao == "-"){
        if(parseInt(peca.value)>0){
            peca.value = parseInt(peca.value) - 1;
        }
    }else{
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatistica(peca) {
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    }) 
   
}

/* 

const robotron = document.querySelector("#robotron");
robotron.addEventListener("click", dizOi);

function dizOi(){
    console.log("Oi");
}

        ALTERNATIVA

robotron.addEventListener("click", function() {
    console.log("oi");
})

robotron.addEventListener("click", () => {
    console.log("oi");
})

*/



