let arrayAcento = [
  "Á",
  "Â",
  "Ã",
  "À",
  "É",
  "Ê",
  "Í",
  "Î",
  "Ó",
  "Ô",
  "Õ",
  "Ú",
  "Û",
  "Ç",
  "á",
  "â",
  "ã",
  "à",
  "é",
  "ê",
  "í",
  "î",
  "ó",
  "ô",
  "õ",
  "ú",
  "û",
  "ç",
];
function acentoMausculas() {
  let textoInput = document.querySelector("input").value;
  for (let i = 0; i < arrayAcento.length; i++) {
    let letra = arrayAcento[i];
    if (textoInput.includes(letra)) {
      let divParaOtexto = document.querySelector(".criptografado");
      divParaOtexto.innerHTML =
        '<h1 class="notPode">Não pode palavras com acento e nem maiúsculas!</h1>';
    }
  }
  for (let i = 0; i < textoInput.length; i++) {
    if (textoInput[i] >= "A" && textoInput[i] <= "Z") {
      let divParaOtexto = document.querySelector(".criptografado");
      divParaOtexto.innerHTML =
        '<h1 class="notPode">Não pode palavras com acento e nem maiúsculas!</h1>';
    }
  }
}

function disbledButton() {
  let textoInput = document.querySelector("input").value;
  let buttonCriptografia = document.querySelector(".criptografar");
  let buttonDescriptografia = document.querySelector(".descriptografar");
  if (textoInput.length > 0) {
    buttonCriptografia.removeAttribute("disabled");
    buttonDescriptografia.removeAttribute("disabled");
  } else {
    buttonCriptografia.setAttribute("disabled", "true");
    buttonDescriptografia.setAttribute("disabled", "true");
    let divParaOtexto = document.querySelector(".criptografado");
    divParaOtexto.innerHTML = `
    <img src="./assents/img/High quality products 1 1.svg" alt="" />
    <h3>Nenhuma mensagem encontrada</h3>
    <p>Digite um texto que você deseja criptografar ou descriptografar.</p>`;
  }
}
function valorCriptografar() {
  let textoParaCriptografar = document.querySelector("input").value;
  let texto = textoParaCriptografar;
  texto = textoParaCriptografar
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
  let divParaOtexto = document.querySelector(".criptografado");
  divParaOtexto.innerHTML = `<p class='criptP'>${texto}</p>
  <button onclick="copiar()" >COPIAR</button>
  `;
  acentoMausculas();
}

function descriptografar() {
  let textoParaDescriptografar = document.querySelector("input").value;
  let textoDescriptografado = textoParaDescriptografar
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  let divParaOtexto = document.querySelector(".criptografado");
  divParaOtexto.innerHTML = `<p class='criptP'>${textoDescriptografado}</p>
  <button onclick="copiar()" >COPIAR</button>
  `;
  acentoMausculas()
}
function copiar() {
  let texteCop = document.querySelector(".criptP");
  let textecopiar = texteCop.textContent;
  navigator.clipboard
    .writeText(textecopiar)
    .then(() => {
      alert("Texto copiado para a área de transferência: " + textecopiar);
    })
    .catch((err) => {
      console.error("Erro ao copiar texto: ", err);
    });
}
