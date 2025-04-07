/*const elementoHtml = document.querySelector('#header_texto h2');
elementoHtml.textContent = ' modificado JS';

console.log(elementoHtml);

const otroElemento = document.getElementById('texto_header');
console.log(otroElemento);

const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces); 
*/

const  nombreObj = document.querySelector('#nombre');

nombreObj.addEventListener('input', function(){
    console.log(evento)
    console.log(evento.target.value);
    nombreForm
    //console.log('El text cambio') 

    const nuevoElemento = window.document.createElement('P');
nuevoElemento.textContent = 'Nuevo elemento desde JS';
console.log

    const btnEnviar = document.querySelector('#botonEnviar');
    btnEnviar.addEventListener('click', function(evento){
        evento.preventDefault();
        if(nombreForm==='')
        {
            alert('El campo nombre es obligatorio');
            nuevoElemento.classList.add('centrar-texto');

        }
        else
        {
            alert('Enviando datos...');
            nuevoElemento.classList.add('centrar-texto');

        }
    })
})

console.log(nombreObj);


console.log();
