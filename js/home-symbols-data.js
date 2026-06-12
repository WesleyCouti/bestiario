/* =====================================================
   HOME-SYMBOLS-DATA.JS
   -----------------------------------------------------
   Dados e renderização da seção:
   "Símbolos do Mundo Antigo"
===================================================== */

const homeSymbolsData = [
    {
        name: "Ankh",
        image: "./assets/images/home/home-secao-simbolos/ankh-simbolo.png",
        alt: "Ankh"
    },
    {
        name: "Chi Rho",
        image: "./assets/images/home/home-secao-simbolos/chi-rho-simbolo.png",
        alt: "Chi Rho"
    },
    {
        name: "Triskelion",
        image: "./assets/images/home/home-secao-simbolos/triskelion-simbolo.png",
        alt: "Triskelion"
    },
    {
        name: "Yin Yang",
        image: "./assets/images/home/home-secao-simbolos/yin-yang-simbolo.png",
        alt: "Yin Yang"
    },
    {
        name: "Pentagrama",
        image: "./assets/images/home/home-secao-simbolos/pentagrama-simbolo.png",
        alt: "Pentagrama"
    },
    {
        name: "Olho de Hórus",
        image: "./assets/images/home/home-secao-simbolos/olho-de-horus-simbolo.png",
        alt: "Olho de Hórus"
    }
];


/* =====================================================
   GERADOR DOS CARDS DE SÍMBOLOS
===================================================== */

function createSymbolCards() {
    const symbolsTrack = document.getElementById("symbolsTrack");

    if (!symbolsTrack || !Array.isArray(homeSymbolsData)) {
        return;
    }

    symbolsTrack.innerHTML = homeSymbolsData.map((symbol) => `
        <article class="symbol-card">
            <img
                src="${symbol.image}"
                alt="${symbol.alt}"
                loading="lazy"
                decoding="async">

            <div class="symbol-overlay">
                <h3>${symbol.name}</h3>
            </div>
        </article>
    `).join("");
}