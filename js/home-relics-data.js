/* =====================================================
   HOME-RELICS-DATA.JS
   -----------------------------------------------------
   Dados e renderização da seção:
   "Relíquias Proibidas do Mundo Antigo"

   Ajustes aplicados:
   - Renderização automática após o carregamento do DOM.
   - Validação do elemento #relicsTrack.
   - Criação dos cards com createElement, evitando innerHTML direto.
   - Menor risco de erro caso algum dado esteja vazio.
   - Acessibilidade melhorada com aria-label nos cards.
   - Imagens com loading lazy e decoding async.
===================================================== */

const homeRelicsData = [
    {
        name: "EXCALIBUR",
        className: "excalibur",
        symbol: "☼",
        image: "./assets/images/home/home-secao-reliquias/excalibur-home.png",
        alt: "Excalibur",
        description: "Somente o digno pode empunhá-la."
    },
    {
        name: "MJÖLNIR",
        className: "mjolnir",
        symbol: "ᛞ",
        image: "./assets/images/home/home-secao-reliquias/mjolnir-home.png",
        alt: "Mjolnir",
        description: "O trovão responde ao chamado."
    },
    {
        name: "TRIDENTE DE POSEIDON",
        className: "trident",
        symbol: "♆",
        image: "./assets/images/home/home-secao-reliquias/tridente-de-poseidon-home.png",
        alt: "Tridente de Poseidon",
        description: "Domina as águas dos abismos."
    },
    {
        name: "PATA DE MACACO",
        className: "monkey",
        symbol: "✦",
        image: "./assets/images/home/home-secao-reliquias/pata-de-macaco-home.png",
        alt: "Pata de Macaco",
        description: "Todo desejo exige um preço."
    },
    {
        name: "SANTO GRAAL",
        className: "grail",
        symbol: "✟",
        image: "./assets/images/home/home-secao-reliquias/santo-graal-home.png",
        alt: "Santo Graal",
        description: "Dizem que concede vida eterna."
    },
    {
        name: "CAIXA DE PANDORA",
        className: "pandora",
        symbol: "☠",
        image: "./assets/images/home/home-secao-reliquias/caixa-de-pandora-home.png",
        alt: "Caixa de Pandora",
        description: "O mal do mundo nasceu aqui."
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
   GERADOR DE UM CARD DE RELÍQUIA
===================================================== */

function createRelicCard(relic) {
    const card = createElement("article", `relic-card ${relic.className || ""}`.trim());
    card.setAttribute("aria-label", relic.name || "Relíquia");

    const symbol = createElement("div", "relic-symbol", relic.symbol || "✦");

    const image = document.createElement("img");
    image.src = relic.image || "";
    image.alt = relic.alt || relic.name || "Relíquia";
    image.loading = "lazy";
    image.decoding = "async";

    const gradient = createElement("div", "relic-gradient");

    const content = createElement("div", "relic-content");

    const title = createElement("h3", null, relic.name || "RELÍQUIA");
    const description = createElement("p", null, relic.description || "Mistério perdido no tempo.");

    content.appendChild(title);
    content.appendChild(description);

    card.appendChild(symbol);
    card.appendChild(image);
    card.appendChild(gradient);
    card.appendChild(content);

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

    if (!Array.isArray(homeRelicsData) || homeRelicsData.length === 0) {
        console.warn("Nenhuma relíquia cadastrada em homeRelicsData.");
        return;
    }

    const fragment = document.createDocumentFragment();

    homeRelicsData.forEach((relic) => {
        fragment.appendChild(createRelicCard(relic));
    });

    relicsTrack.replaceChildren(fragment);
}

/* =====================================================
   INICIALIZAÇÃO
===================================================== */

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createRelicCards);
} else {
    createRelicCards();
}
