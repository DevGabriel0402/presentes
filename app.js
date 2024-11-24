import { presentes } from "./modulos/presentes.js";

document.addEventListener(`DOMContentLoaded`, () => {

    let width = 0

    let interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval)
            document.getElementById(`header`).style.display = "flex"
            document.getElementById(`lista-de-presentes`).style.display = "flex"
            document.getElementById(`loading`).style.display = "none !important"
        } else {
            width++
            document.getElementById(`loadingText`).style.width = width + "%"
            document.getElementById(`loadingText`).innerText = width + "%"
        }
    }, 10);
})




// Função para criar o HTML de um produto
function createProductHTML(presente, index) {
    const presenteDiv = document.createElement('div');
    presenteDiv.classList.add('card');
    presenteDiv.innerHTML = `
        <img src="${presente.imagem}" alt="imagem">    
        <h3>${presente.nome}</h3>
        <p class="badge">${presente.categoria}</p>
        <p class="preco"><strong>Preço:</strong> R$ ${presente.preço.toFixed(2)}</p>
        <button id="openModal-${index}" class="adicionar-btn">Presentear <i class='bx bxs-send icon'></i></button>
    `;
    return presenteDiv;
}

// Seleciona o container para os presentes
const ContainerDePresentes = document.getElementById("lista-de-presentes");

// Verifica se o modal está presente no DOM
const modal = document.getElementById("modal");
if (!modal) {
    console.error("Modal não encontrado");
} else {
    // Renderiza os produtos e adiciona eventos aos botões
    presentes.forEach((presente, index) => {
        const presenteDiv = createProductHTML(presente, index);
        ContainerDePresentes.appendChild(presenteDiv);

        // Seleciona o botão específico de cada produto
        const openModalButton = document.getElementById(`openModal-${index}`);

        // Abre o modal quando o botão é clicado
        if (openModalButton) {
            openModalButton.addEventListener("click", () => {
                modal.style.display = "flex";
            });
        }
    });

    // Seleciona os botões de fechar e opções de pagamento
    const closeModal = document.getElementById("closeModal");
    const pixOption = document.getElementById("pixOption");
    const cardOption = document.getElementById("cardOption");

    // Fecha o modal ao clicar no botão de fechar
    if (closeModal) {
        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // Fecha o modal ao clicar fora do conteúdo do modal
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Lida com cliques nas opções Pix e Cartão de Crédito
    if (pixOption) {
        pixOption.addEventListener("click", () => {
            alert("Código pix copiada com sucesso!");
            modal.style.display = "none";
        });
    }

    if (cardOption) {
        cardOption.addEventListener("click", () => {
            alert("Você será direcionado para o pagamento.");
            modal.style.display = "none";
        });
    }
}
