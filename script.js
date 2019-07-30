// function mostrarMouse(event){
//     console.log(`Eixo X:${event.pageX} e Eixo Y:${event.pageY}`);
//     if(event.pageX == 21 && event.pageY == 6){
//         alert("Por favor na saia do site temos promoções para você");
//     }
// }

// window.onclick = mostrarMouse;


// localStorage.setItem("nome", "lucas"); 



let caixaTexto = document.querySelector("input");
let botao = document.querySelector("button");
let texto= document.querySelector("p")
let naoSou = document.querySelector("a");
let bemvinda= document.querySelector("h1")


function  limpar(){
    localStorage.removeItem('nome');
}


if (localStorage.nome){
    caixaTexto.style.display = 'none'
    botao.style.display = 'none'
    bemvinda.innerHTML = `seja bem vinda ${localStorage.nome}`
    naoSou.innerHTML = `nao e ${localStorage.nome}?`

    
}
else{
    function acessar(){
        localStorage.setItem("nome", caixaTexto.value);
        caixaTexto.style.display = 'none'
        botao.style.display = 'none'
        bemvinda.innerHTML = `seja bem vinda ${localStorage.nome}`
        naoSou.innerHTML = `nao e ${localStorage.nome}?`
    }
    botao.onclick = acessar;
}



naoSou.onclick = limpar;








