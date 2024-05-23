//Menu Mobile
const menuButao = document.querySelector('.menu__butao');
const menuMobile = document.getElementById('invisivel');
let menuEstaAberto = false;

menuButao.addEventListener('click', function(){
    menuEstaAberto ? menuMobile.classList.add('invisivel') : menuMobile.classList.remove('invisivel');

    menuEstaAberto ? menuButao.children[0].setAttribute('src','./assets/menu.svg') : menuButao.children[0].setAttribute('src','./assets/fechar.svg') ;

    menuEstaAberto=!menuEstaAberto;
})

//Efeito de digitação

const tema = document.querySelector('.tema');
var temaNome = (tema.text);
const titulo =document.querySelector('.principal__conteudo__titulo');
var atraso = 200;
var contador = 0;



if (temaNome=='Portifólio') {
    texto='Pedro Vinícius Lima Silva';
} else if (temaNome=='Minhas habilidades') {
    texto='Minhas Habilidades';
} else if (temaNome=='Projetos') {
    texto='Meus Projetos';
}

function escreverTexto() {
    if (contador< texto.length) {
        titulo.textContent += texto.charAt(contador);
        contador ++;
        setTimeout(escreverTexto,atraso);
    }
}

escreverTexto();





