/* =====================================================
   HOME-RELICS-DATA.JS
   -----------------------------------------------------
   Dados e renderização da seção:
   "Relíquias Proibidas do Mundo Antigo"
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
        alt: "Tridente",
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
   GERADOR DOS CARDS DE RELÍQUIAS
===================================================== */

function createRelicCards() {
    const relicsTrack = document.getElementById("relicsTrack");

    if (!relicsTrack || !Array.isArray(homeRelicsData)) {
        return;
    }

    relicsTrack.innerHTML = homeRelicsData.map((relic) => `
        <article class="relic-card ${relic.className}">

            <div class="relic-symbol">${relic.symbol}</div>

            <img
                src="${relic.image}"
                alt="${relic.alt}"
                loading="lazy"
                decoding="async">

            <div class="relic-gradient"></div>

            <div class="relic-content">
                <h3>${relic.name}</h3>

                <p>
                    ${relic.description}
                </p>
            </div>

        </article>
    `).join("");
}