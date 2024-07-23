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
    //verificar se tem a quantidade de ingressos disponível
    let restoPista = qtdPista.textContent - qtde;
    let restoSup = qtdCadeiraSup.textContent - qtde;
    let restoInf = qtdCadeiraSup.textContent - qtde;

    if (tipoCadeira == "pista") {
      if (restoPista < 0) {
        alert(`Temos apenas ${qtdPista.textContent} ingressos Pista disponíveis. 
Escolha uma quantidade inferior ou igual`);
        document.getElementById("qtd").value = "";
      } else {
        qtdPista.textContent = qtdPista.textContent - qtde;
        document.getElementById("qtd").value = "";
      }
    }

    if (tipoCadeira == "superior") {
      if (restoSup < 0) {
        alert(`Temos apenas ${qtdCadeiraSup.textContent} ingressos Pista disponíveis. 
Escolha uma quantidade inferior ou igual`);
        document.getElementById("qtd").value = "";
      } else {
        qtdCadeiraSup.textContent = qtdCadeiraSup.textContent - qtde;
        document.getElementById("qtd").value = "";
      }
    }

    if (tipoCadeira == "inferior") {
      if (restoInf < 0) {
        alert(`Temos apenas ${qtdCadeiraInf.textContent} ingressos Pista disponíveis. 
Escolha uma quantidade inferior ou igual`);
        document.getElementById("qtd").value = "";
      } else {
        qtdCadeiraInf.textContent = qtdCadeiraInf.textContent - qtde;
        document.getElementById("qtd").value = "";
      }
    }
  }
}
