
//var nome = "Lucas";
var n1 = 5;
var n2 = 3;
//var frase = "Brasil é o melhor time do Mundo";
/*
 
alert() - serve para alerta alguem ou algo sobre algo indefinido 
Exemplo : 
alert(nome + " tem " + idade + " anos");
alert(idade + idade2); 


console.log(nome);
console.log(n1 + n2);
console.log(frase.toLowerCase());


//------------------------------proximo video ----------------------------------

var lista = ["maca" , "pera" , "laranja"];
console.log(lista);


lista.push("uva"); - empurra a uva para junta das strings
lista.pop(); - paga a string e o objeto
console.log(lista.length); - mostra a quantia de objeto
console.log(lista.reverse()); - mostra a listra ao contrario 
console.log(lista.toString()); - transforma em string 
console.log(lista.join(" ")); - coloca itens no contexto dos objetos 

var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);

var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome); - basicamente mostra uma lista no console log

var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);

var idade = prompt("Qual sua idade");
if (idade >= 18) {
    alert("maior de idade ")
}else{
    alert("menor de idade")
}

var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMonth()+1);



//------------------------------proximo video---------------------------------

function soma(n1, n2){
    return n1 + n2;
}

var validar = 0;

function valudade(idade){
    validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade");
validaIdade(idade)
console.log(validar);
//alert(soma(5,10));


function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

// ----------------------------------------proximo video -------------------------------------------

function clicado(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.youtube.com/watch?v=tsduhPUTuNU") // abrir site selecionado em outra pagina
    window.location.href = "https://www.youtube.com/watch?v=tsduhPUTuNU" // abrir site seleciona na mesma pagina
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"; // .innerHTML injuta o html no javascript e você pode sua html no proprio
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}