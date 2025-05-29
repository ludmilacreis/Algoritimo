/* Elaborar um programa para um cinema, onde o usuário posssa digitar o título e a duraçõa de um filme em minutos.
Exibiba o título do filme e a duração em horas e minutos.

1. Solicitar o título do filme.
2. Solicitar a duração do filme em minutos.
3. Calcular a duração em horas e minutos.
    3.1 Fazer a divisão inteira da duração por 60 para obter as horas.
    3.2 Arredonda a quantidade de horas para pegar só as horas inteiras.
    3.3 Pegar o resuldado da duração em minutos e remover as horas interiras (horas * 60).
    Exemplo: 70 minutos = 1 hora e 10 minutos.
    60minutos = 1 hora e 0 minutos.
    10 minutos.
    70 / 60 = 1,16 (arredondar para baixo) = 1.
    horas = 1.
    minutos = 70 - (1 * 60) = 10.
4. Exibir o título do filme e a duração em horas e minutos.
*/

/*entrada de dados*/
function algoritimo(){
const titulo = document.getElementById("titulo").value;
const duracao = document.getElementById("duracao").value;

/*processamento*/

const horas = Math.floor(duracao / 60); // Divisão inteira para obter as horas
const minutos = duracao - (horas * 60); // Resto da divisão para obter os minutos

/*saída de dados*/

document.getElementById("tituloSaida").textContent = titulo.toUpperCase();
document.getElementById("duracaoSaida").textContent = horas + " hora(s) e " + minutos + " minuto(s)";
}