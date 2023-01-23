document.addEventListener("DOMContentLoaded", function () {
  const dataDoEvento = new Date("jul 01, 2023 00:00:00");
  const timeStampDoEvento = dataDoEvento.getTime();

  const contaAsHoras = setInterval(function () {
    const agora = new Date();

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;
    const segundosEmMs = 1000;

    const timeStampAtual = agora.getTime();
    const distanciaAteEvento = timeStampDoEvento - timeStampAtual;
    const diasAteEvento = Math.floor(distanciaAteEvento / diasEmMs);
    const horasAteEvento = Math.floor(
      (distanciaAteEvento % diasEmMs) / horasEmMs
    );
    const minutosAteEvento = Math.floor(
      (distanciaAteEvento % horasEmMs) / minutosEmMs
    );
    const segundosAteEvento = Math.floor(
      (distanciaAteEvento % minutosEmMs) / segundosEmMs
    );

    if (diasAteEvento < 0) {
      clearInterval(contaAsHoras);
      if (diasAteEvento === -1) {
        document.querySelector(".mensagem").style.visibility = "visible";
        document.querySelector(".mensagem").innerHTML = "Happy birthday to me!";
        document.querySelector(
          ".hero__contagem-regressiva__items"
        ).style.display = "none";
      } else {
        document.querySelector(".mensagem").style.visibility = "visible";
        console.log(document.querySelector(".mensagem"));
        document.querySelector(".mensagem").innerHTML =
          "Thank you for stay with me in my birthday!";
        document.querySelector(
          ".hero__contagem-regressiva__items"
        ).style.display = "none";
      }
    }
    document.getElementById("day").innerHTML = `${diasAteEvento}`;
    document.getElementById("hours").innerHTML = `${horasAteEvento}`;
    document.getElementById("minutes").innerHTML = `${minutosAteEvento}`;
    document.getElementById("seconds").innerHTML = `${segundosAteEvento}`;
  }, 1000);
});
