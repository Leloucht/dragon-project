const button = document.querySelectorAll('.botao');
const informacao = document.querySelectorAll('.informacoes');
const picture = document.querySelectorAll('.imagem');

button.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        disabledButton();

        checkedButton(botao);

        hidePicture();

        showPicture(indice);

        hideInfomation();

        showInformation(indice);
    })
})

function disabledButton() {
    const buttunChecked = document.querySelector('.selecionado')
    buttunChecked.classList.remove("selecionado")
}

function checkedButton(botao) {
    botao.classList.add('selecionado')
}

function hidePicture() {
    const pictureActive = document.querySelector(".ativa")
    pictureActive.classList.remove("ativa")
}

function showPicture(indice) {
    picture[indice].classList.add("ativa")
}

function hideInfomation() {
    const informationActive = document.querySelector(".informacoes.ativa")
    informationActive.classList.remove("ativa")
}

function showInformation(indice) {
    informacao[indice].classList.add("ativa")
}