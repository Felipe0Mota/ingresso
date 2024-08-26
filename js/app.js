function comprar() {
  //coletar tipo de ingresso escolhido
  let tipoCadeira = document.getElementById("tipo-ingresso").value;

  //coletar quantidade de ingressos desejados
  let qtde = parseInt(document.getElementById("qtd").value);

  //coletar informação de quantidade disponível
  let qtdPista = document.getElementById("qtd-pista");
  let qtdCadeiraSup = document.getElementById("qtd-superior");
  let qtdCadeiraInf = document.getElementById("qtd-inferior");

  //verificar se quantidade é maior que 0
  if (isNaN(qtde) || qtde <= 0) {
    alert("Digite a quantidade de ingressos desejada!");
  } else {
    if (tipoCadeira == "pista") {
      compraIngresso("pista", qtdPista);
    }

    if (tipoCadeira == "superior") {
      compraIngresso("superior", qtdCadeiraSup);
    }

    if (tipoCadeira == "inferior") {
      compraIngresso("inferior", qtdCadeiraInf);
    }
  }
}

function compraIngresso(tipo, ingressosTipo) {
  let quantia = parseInt(document.getElementById("qtd").value);

  if (quantia > ingressosTipo.textContent) {
    alert(`Quantidade indisponível para ingresso ${tipo}`);
    document.getElementById("qtd").value = "";
  } else {
    ingressosTipo.textContent = ingressosTipo.textContent - quantia;
    document.getElementById("qtd").value = "";
    alert('Compra realizada com sucesso');
  }
}