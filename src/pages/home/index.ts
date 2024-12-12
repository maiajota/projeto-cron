import $ from 'jquery'
import CronSeletor, { TempoJob } from 'components/cron'

export function usarCronTeste() {

}

function tratarEntradaInput(event) {
    let regex = /^[0-9,-/*]$/;

    if(!regex.test(event.key) && event.key != "Backspace") 
        event.preventDefault();
}

$(".formulario-container").on("input", () => {
    let informacaoFormulario = Object.fromEntries(new FormData(document.querySelector(".formulario-container")));

    let informacaoJob: TempoJob = {
        minuto: informacaoFormulario["minuto"].toString() || "*",
        hora: informacaoFormulario["hora"].toString() || "*",
        diaMes: informacaoFormulario["diaMes"].toString() || "*",
        mes: informacaoFormulario["mes"].toString() || "*",
        diaSemana: informacaoFormulario["diaSemana"].toString() || "*",
    }

    CronSeletor.exibirProximoJob(informacaoJob);
})

$(".formulario-input").on("keydown", (event) => {
    tratarEntradaInput(event)
})
