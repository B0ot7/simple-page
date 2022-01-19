/*  quando clicar a seta temos q esconder
 todas as imagens e mostrar a proxia
 
    

    Esconder as imag todas as imagens

    pegar todas as imagens usando o Dom e 
remover a classe mostrar

     mostrar a proxima imagem
     pegar totas as imagens, descobrir qual
 e a proxima, e colocar a classe mostrar nela

 */

/*o comando "const" e um comando para definir q a variavel nao pode ter seu valor modificad*/

const imagensPainel = document.querySelectorAll(".imagem-painel");
const setaAvancar = document.getElementById("btn-avancar");
const setaVoltar = document.getElementById("btn-voltar");
let imagemAtual = 0;

//quando clicar a seta temos q esconder todas as imagens e mostrar a proxia
setaAvancar.addEventListener('click', function(){

    const totalDeImagens = imagensPainel.length -1;
    if (imagemAtual === totalDeImagens){
        return;
    }
//a imagem atual comeca do 0 pq e a primeira imagem de todas, assim q clicar em avancar sera adicionado +1 ao contador
    imagemAtual++;

//Esconder todas as imagens, removendo a classe mostrar
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

//mostrar a proxima imagempegar totas as imagens, descobrir qual e a proxima, e colocar a classe mostrar nela
    imagensPainel[imagemAtual].classList.add('mostrar')
});


setaVoltar.addEventListener('click', function(){
    if (imagemAtual === 0){
        return;
    }
    imagemAtual--;
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
    imagensPainel[imagemAtual].classList.add('mostrar');
});




