import parser from 'cron-parser'
import $ from 'jquery'

export interface TempoJob {
    minuto: string,
    hora: string,
    diaMes: string,
    diaSemana: string,
    mes: string
}

export default class CronSeletor {
    static exibirProximoJob(tempoJob : TempoJob) {
        let proximoJob = parser.parseExpression(`${tempoJob.minuto} ${tempoJob.hora} ${tempoJob.diaMes} ${tempoJob.mes} ${tempoJob.diaSemana}`).next();

        let dataProximoJob = `${proximoJob.getDate()}/${proximoJob.getMonth()}/${proximoJob.getFullYear()} às ${proximoJob.getHours()}:${proximoJob.getMinutes()}:${proximoJob.getSeconds()}`

        $(".texto-resultado").html(dataProximoJob.toString());
        
    }
}
