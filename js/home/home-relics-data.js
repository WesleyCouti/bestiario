/* =====================================================
   HOME-RELICS-DATA.JS
   -----------------------------------------------------
   Dados e renderização da seção:
   "Relíquias Lendárias do Mundo Antigo"

   Ajustes aplicados:
   - Renderização automática após o carregamento do DOM;
   - Validação do elemento #relicsTrack;
   - Criação dos cards com createElement;
   - Proteção contra renderização duplicada;
   - Imagem padrão caso alguma imagem falhe;
   - Melhor acessibilidade com role, tabindex e aria-pressed;
   - Primeiro clique/toque ativa o destaque visual do card;
   - Segundo clique/toque no mesmo card redireciona para o link;
   - Enter e Espaço também funcionam para teclado;
   - Limpeza automática se não houver relíquias.
===================================================== */

const DEFAULT_RELIC_IMAGE =
    "./assets/images/home/home-secao-reliquias/default-relic-home.png";

const homeRelicsData = [
    {
        name: "EXCALIBUR",
        className: "excalibur",
        symbol: "☼",
        image: "./assets/images/home/home-secao-reliquias/excalibur-home.png",
        alt: "Excalibur",
        description: "Somente o digno pode empunhá-la.",
        link: "./relics.html#excalibur"
    },
    {
        name: "MJÖLNIR",
        className: "mjolnir",
        symbol: "ᛞ",
        image: "./assets/images/home/home-secao-reliquias/mjolnir-home.png",
        alt: "Mjolnir",
        description: "O trovão responde ao chamado.",
        link: "./relics.html#mjolnir"
    },
    {
        name: "TRIDENTE DE POSEIDON",
        className: "trident",
        symbol: "♆",
        image: "./assets/images/home/home-secao-reliquias/tridente-de-poseidon-home.png",
        alt: "Tridente de Poseidon",
        description: "Domina as águas dos abismos.",
        link: "./relics.html#tridente-de-poseidon"
    },
    {
        name: "PATA DE MACACO",
        className: "monkey",
        symbol: "✦",
        image: "./assets/images/home/home-secao-reliquias/pata-de-macaco-home.png",
        alt: "Pata de Macaco",
        description: "Todo desejo exige um preço.",
        link: "./relics.html#pata-de-macaco"
    },
    {
        name: "SANTO GRAAL",
        className: "grail",
        symbol: "✟",
        image: "./assets/images/home/home-secao-reliquias/santo-graal-home.png",
        alt: "Santo Graal",
        description: "Dizem que concede vida eterna.",
        link: "./relics.html#santo-graal"
    },
    {
        name: "CAIXA DE PANDORA",
        className: "pandora",
        symbol: "☠",
        image: "./assets/images/home/home-secao-reliquias/caixa-de-pandora-home.png",
        alt: "Caixa de Pandora",
        description: "O mal do mundo nasceu aqui.",
        link: "./relics.html#caixa-de-pandora"
    }
];

/* =====================================================
   FUNÇÃO AUXILIAR PARA CRIAR ELEMENTOS
===================================================== */

function createElement(tag, className, textContent) {
    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (textContent) {
        element.textContent = textContent;
    }

    return element;
}

/* =====================================================
   FUNÇÕES AUXILIARES DE INTERAÇÃO
===================================================== */

function clearActiveRelicCards(exceptCard = null) {
    const activeCards = document.querySelectorAll(".relic-card.is-active");

    activeCards.forEach((card) => {
        if (card !== exceptCard) {
            card.classList.remove("is-active");
            card.setAttribute("aria-pressed", "false");
        }
    });
}

function activateRelicCard(card) {
    clearActiveRelicCards(card);

    card.classList.add("is-active");
    card.setAttribute("aria-pressed", "true");
}

function navigateToRelic(card) {
    const link = card.dataset.link;

    if (!link) {
        return;
    }

    window.location.href = link;
}

function handleRelicCardAction(card) {
    const isActive = card.classList.contains("is-active");

    if (isActive) {
        navigateToRelic(card);
        return;
    }

    activateRelicCard(card);
}

/* =====================================================
   GERADOR DE UM CARD DE RELÍQUIA
===================================================== */

function createRelicCard(relic) {
    const card = createElement(
        "article",
        `relic-card ${relic.className || ""}`.trim()
    );

    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-pressed", "false");
    card.setAttribute(
        "aria-label",
        `Relíquia: ${relic.name || "Relíquia desconhecida"}. Toque uma vez para destacar e toque novamente para abrir.`
    );

    if (relic.link) {
        card.dataset.link = relic.link;
    }

    const symbol = createElement(
        "div",
        "relic-symbol",
        relic.symbol || "✦"
    );

    symbol.setAttribute("aria-hidden", "true");

    const image = document.createElement("img");

    image.src = relic.image || DEFAULT_RELIC_IMAGE;
    image.alt = relic.alt || relic.name || "Relíquia";
    image.loading = "lazy";
    image.decoding = "async";

    image.onerror = () => {
        image.onerror = null;
        image.src = DEFAULT_RELIC_IMAGE;
    };

    const gradient = createElement("div", "relic-gradient");
    gradient.setAttribute("aria-hidden", "true");

    const content = createElement("div", "relic-content");

    const title = createElement(
        "h3",
        null,
        relic.name || "RELÍQUIA"
    );

    const description = createElement(
        "p",
        null,
        relic.description || "Mistério perdido no tempo."
    );

    content.appendChild(title);
    content.appendChild(description);

    card.appendChild(symbol);
    card.appendChild(image);
    card.appendChild(gradient);
    card.appendChild(content);

    card.addEventListener("click", () => {
        handleRelicCardAction(card);
    });

    card.addEventListener("keydown", (event) => {
        const allowedKeys = event.key === "Enter" || event.key === " ";

        if (!allowedKeys) {
            return;
        }

        event.preventDefault();
        handleRelicCardAction(card);
    });

    return card;
}

/* =====================================================
   GERADOR DOS CARDS DE RELÍQUIAS
===================================================== */

function createRelicCards() {
    const relicsTrack = document.getElementById("relicsTrack");

    if (!relicsTrack) {
        console.warn("Elemento #relicsTrack não encontrado.");
        return;
    }

    if (relicsTrack.dataset.rendered === "true") {
        return;
    }

    if (!Array.isArray(homeRelicsData) || homeRelicsData.length === 0) {
        console.warn("Nenhuma relíquia cadastrada em homeRelicsData.");
        relicsTrack.innerHTML = "";
        return;
    }

    const fragment = document.createDocumentFragment();

    homeRelicsData.forEach((relic) => {
        fragment.appendChild(createRelicCard(relic));
    });

    relicsTrack.replaceChildren(fragment);

    relicsTrack.dataset.rendered = "true";
}

/* =====================================================
   FECHA O DESTAQUE AO CLICAR FORA DA SEÇÃO
===================================================== */

document.addEventListener("click", (event) => {
    const clickedInsideRelicCard = event.target.closest(".relic-card");
    const clickedInsideRelicsSection = event.target.closest(".relics-section");

    if (clickedInsideRelicCard || clickedInsideRelicsSection) {
        return;
    }

    clearActiveRelicCards();
});

/* =====================================================
   INICIALIZAÇÃO
===================================================== */

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createRelicCards);
} else {
    createRelicCards();
}
