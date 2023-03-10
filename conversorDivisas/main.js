let convert = document.getElementById('convert')
let cantidad = document.getElementById('cantidad')
let divisa = document.getElementById('divisa')
let resultado = document.getElementById('resultado')
let modo = document.getElementById("modo")
let contenedor = document.getElementById("contenedor")
let pic = document.getElementById('pic')
let cerrar =document.getElementById('cerrar')
let creditos = document.getElementById('creditos')
let mostrar = document.getElementById('mostrar')


mostrar.addEventListener('click',() => {
    creditos.style.display="block";
})

cerrar.addEventListener('click', () => {
    creditos.style.display ="none";
})

modo.addEventListener('click', ()=>{
    // if (modo.checked){ 
    //     contenedor.classList.add("noche")
    // }else{
    //     contenedor.classList.remove("noche")
    // }
    contenedor.classList.toggle("noche")

})

divisa.addEventListener('change', (e)=> {
  console.log(e.target.value);  
})

let convertilos = () => {
    let valor = 0;
    let moneda = "usd"
    console.log("convertilos")
    if(divisa.value == "usd"){
        valor = 370;
        moneda = "usd"
        resultado.style.color = "green";
        pic.src ="https://previews.123rf.com/images/mattz90/mattz901608/mattz90160800037/62120840-usd-s%C3%ADmbolo-de-d%C3%B3lar-americano-textura-de-d%C3%B3lar-americano.jpg"
    }else {
        valor = 377
        moneda = "eur"
        resultado.style.color = "blue";
        pic.src = "https://www.elgrupoinformatico.com/static/Noticias/2020/11/simbolo-euro-1200x675.jpg"
    }
    let elegida = parseInt();
    let cuanto = parseInt(cantidad.value);
    let resul = cuanto * valor ;
    resultado.innerHTML = cuanto +" " + moneda + " son: " + resul + " pesos";
    if(cantidad.value==""){
        alert("ingresa una cantidad")
        resultado=""
        resultado.innerHTML = " "
    }

}

convert.addEventListener('click' , convertilos);

let saludadora = (nombre, apellido,ppp) =>{
console.log("saludos,"+nombre+" "+ apellido);
if (ppp){
    console.log("pepepapa");
}
};
let $ = document;
const btn = $.querySelector(".toggle-btn");
// My Github location.replace("https://github.com/Sepehr-Aghdasi82");

btn.addEventListener("click", () => {
      btn.classList.toggle("active");
});

