// function mostrarMouse(event){
//     console.log(`Eixo X:${event.pageX} e Eixo Y:${event.pageY}`);
//     if(event.pageX == 21 && event.pageY == 6){
//         alert("Por favor na saia do site temos promoções para você");
//     }
// }

// window.onclick = mostrarMouse;


// localStorage.setItem("nome", "lucas"); 



let caixaTexto = document.querySelector("input");
let botão = document.querySelector("button");
let texto= document.querySelector("p")
let nãoSou= document.querySelector("a");
let bemvinda= document.querySelector("h3")


function acessar(){
    localStorage.setItem("nome", caixaTexto.value);
}
function  limpar(){
    localStorage.clear();
}

botão.onclick = acessar;
naoSou.onclick = limpar

if (localStorage.nome){
   alert("existe")
}
else{
    alert("no existe")
}











