
// --------------------------- Acordeon ---------------------------
const funcionAcordeon = (p1, p2, p3) => {

    const activador = document.getElementById(p1)
    const modulo = document.getElementById(p2)
    const icon_desplegable = document.getElementById(p3)

    activador.addEventListener('click', function () {
        modulo.classList.toggle('oculto')
        icon_desplegable.classList.toggle('activo')
    })
}

for (let i = 1; i <= 7; i++) {
    valorActivador = 'activador' + i.toString()
    valorModulo = 'modulo' + i.toString()
    valorDesplegable = 'icon_despliegue' + i.toString()
    funcionAcordeon(valorActivador, valorModulo, valorDesplegable)
}

//------------------SideBar------------------------------------------
const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})


//------------------------- Color Actual --------------------------------
//Atributos
var ModuloActual = document.getElementById("ModuloActual");
var valorModulo = (ModuloActual.innerHTML);

Rol = valorModulo
fondo = Rol
texto = fondo + '_text'
icon = fondo + '_icon'
// Fondo
const Funcionfondo = document.getElementById(fondo)
Funcionfondo.classList.add('actual')
//Texto
const Funciontexto = document.getElementById(texto)
Funciontexto.classList.add('actual')
//Icono
const Funcionicono = document.getElementById(icon)
Funcionicono.classList.add('actual')

// SubFuncionActual color -------------------------

var SubModuloActual = document.getElementById("SubModuloActual");
var valorSubModuloActual = (SubModuloActual.innerHTML);

let subRol = valorSubModuloActual + '_' + Rol
let subfondo = subRol
let subtext = subRol + '_text'
let subicon = subRol + '_icon'

if (valorSubModuloActual.length != 0) {

    var FuncionSubFondo = document.getElementById(subRol)
    FuncionSubFondo.classList.add('actual')

    //Icono
    const FuncionSubIcono = document.getElementById(subicon)
    FuncionSubIcono.classList.add('actual')

    //Texto
    const FuncionSubTexto = document.getElementById(subtext)
    FuncionSubTexto.classList.add('actual')
}

// --- Titulo Header -------------------------------
const PrimeraMayus = (palabra) => {
    var primerMayus = palabra.charAt(0).toUpperCase();
    var todoMayus = primerMayus + palabra.slice(1);

    return todoMayus;
}

var tituloHeader = PrimeraMayus(valorSubModuloActual) + " " + PrimeraMayus(Rol)
var titulo = document.getElementById('titulo').innerHTML = tituloHeader


// Animacion cambio de pagina --------------------
window.addEventListener("beforeunload", function () {
    document.body.classList.add("animate-out-ov");
});

//----------------------------- ALERTAS COMPRAS ------------------------------------------------

//Crea las variables input y select 

FormularioModulo = (cantidadSelect,cantidadInput) =>{
    requisitos = 0
    sumatoria = ""
    total = cantidadInput + cantidadSelect
    const selects  = [];
    for (let i = 1; i <= cantidadSelect; i++) {
        select = 'select'+ i.toString()
        selects[i] = select
    }
    const inputs  = [];
    for (let i = 1; i <= cantidadInput; i++) {
        input = 'input'+ i.toString()
        inputs[i] = input
    }
 
    for (let n = 1; n <= cantidadSelect; n++) {
        sumatoria = sumatoria + document.getElementById(selects[n]).value;
    }
    for (let n = 1; n <= cantidadInput; n++) {
        sumatoria = sumatoria + document.getElementById(inputs[n]).value.length;
    }

        console.log(sumatoria)
    for (let i = 0; i <= total; i++) {
        if(sumatoria[i] == 0){
            requisitos = 1
        }
    }
return(requisitos)}

//Determina en cada modulo cuantos selects e inputs necesita

switch (valorModulo) {
    case "clientes":
        cantidadSelect = 1
        cantidadInput = 4
        break;
        
    case "compras":
        cantidadSelect = 3 
        cantidadInput = 2
        break;
        
    case "productos":
        cantidadSelect = 1
        cantidadInput = 1
        break;

    case "proveedores":
        cantidadSelect = 2
        cantidadInput = 2
        break;
        
    case "roles":
        cantidadSelect = 1
        cantidadInput = 1
        break;
        
    case "usuarios":
        cantidadSelect = 2
        cantidadInput = 5
        break;
        
    case "ventas":
        cantidadSelect = 4
        cantidadInput = 2
        break;
}

//--- Según la validacion retorna si están o no diligenciados los campos

    const AlertaRegistro = () => {

    if (FormularioModulo(cantidadSelect,cantidadInput)) {
        Swal.fire({
            title: "Campos vacios",
            text: "Por favor rellene todos los campos",
            icon: "warning",
            confirmButtonColor: '#118dd5',
        })
    } else {
        Swal.fire({
            //Contenido de la alerta 
            title: "Registro exitoso",
            text: "Se ha registrado una venta",
            icon: "success",
            confirmButtonText: "Cofirmar",
            timer: 5000,
            timerProgressBar: true,
            // Estilos de las alertas (Botones)
            showConfirmButton: false,
            confirmButtonColor: '#118dd5',
            confirmButtonAriaLabel: 'Confirmar',
        })
        // customClass: {} Añadir clases del css a la alerta
    }
}


if (valorModulo != 'roles'){
const botonVenta = document.querySelector('#comprar');
botonVenta.addEventListener('click', AlertaRegistro);}
    

function AlertaEliminacion (){
    Swal.fire({
        title: '¿Estas seguro?',
        text: "¿Seguro que desea eleminar este registro?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Eliminado!',
            text: 'Se ha eliminado este registro',
            confirmButtonColor: '#118dd5',
          })
        }
      })
}

// --------------- toggle------------------------------------------------------
console.log('Todo bien')


for (let i = 1; i <= 6; i++) {

    const toggleOn = document.getElementById(`toggleOn${i}`)

    
    const toggleOff = document.getElementById(`toggleOff${i}`)

toggleOn.addEventListener('click',()=>{
    toggleOn.classList.toggle('oculto')
    toggleOff.classList.toggle('oculto')
})

toggleOff.addEventListener('click',()=>{
    toggleOn.classList.toggle('oculto')
    toggleOff.classList.toggle('oculto')
})

}
console.log("-------------------- Javascript sin errores ------------------")