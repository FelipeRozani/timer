function mostraHora(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}


const btnInicio = document.querySelector('.btn-inicio');
const btnPausa = document.querySelector('.btn-pausa');
const btnReinicio = document.querySelector('.btn-reinicio');
const clock = document.querySelector('.clock');
let segundos = 0;
let timer;

function contador(){
    timer = setInterval(function(){
        segundos++
        clock.innerHTML = mostraHora(segundos);
    }, 1000)
}

btnInicio.addEventListener('click', function(event){
    clearInterval(timer);
    contador();
    clock.classList.remove('pausado');
})

btnPausa.addEventListener('click', function(event){
    clearInterval(timer);
    clock.classList.add('pausado')
})

btnReinicio.addEventListener('click', function(event){
    clearInterval(timer);
    clock.innerHTML = '00:00:00';
    segundos = 0;
    clock.classList.remove('pausado')
})
