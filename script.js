//usando PI
/* function calcular(raio){
    return `Perímetro: ${Math.PI * raio} Área: ${Math.PI * raio}`
}
console.log(calcular(20));

------

//função normal
function exemplo(num){
    return num * num
}
console.log(exemplo(20));

//arrow função
const exemplo1=(num)=>{
    return num * num
}
console.log(exemplo1(20))

//arrow função simplificada
const exemplo2=(num)=>{return num * num}
console.log(exemplo2(20))
*/

function inserir(){
    let numero = document.getElementById('posicao').value -1
    let novo = document.getElementById('novo').value
    document.getElementsByClassName('colocado')[numero].innerHTML=novo
}

function mostrar(){
    let numero= document.getElementById("numero").value -1
    let mes= document.getElementsByTagName("li")[numero].innerHTML;
    document.getElementById("resultado").innerHTML = mes;
}
    