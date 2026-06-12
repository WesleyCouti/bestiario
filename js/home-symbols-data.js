/* =====================================================
   HOME-SYMBOLS-DATA.JS
   -----------------------------------------------------
   Dados e renderização da seção:
   "Símbolos do Mundo Antigo"

   Ajustes aplicados:
   - Validação do container antes de renderizar.
   - Escape de textos para evitar problemas com caracteres especiais.
   - Criação dos cards com template limpo e seguro.
   - Verificação de dados obrigatórios antes de montar cada card.
   - Carregamento automático após o DOM estar pronto.
   - Mantida compatibilidade com o ID: symbolsTrack.
===================================================== */

const homeSymbolsData = [
    {
        name: "Ankh",
        image: "./assets/images/home/home-secao-simbolos/ankh-simbolo.png",
        alt: "Símbolo Ankh"
    },
    {
        name: "Chi Rho",
        image: "./assets/images/home/home-secao-simbolos/chi-rho-simbolo.png",
        alt: "Símbolo Chi Rho"
    },
    {
        name: "Triskelion",
        image: "./assets/images/home/home-secao-simbolos/triskelion-simbolo.png",
        alt: "Símbolo Triskelion"
    },
    {
        name: "Yin Yang",
        image: "./assets/images/home/home-secao-simbolos/yin-yang-simbolo.png",
        alt: "Símbolo Yin Yang"
    },
    {
        name: "Pentagrama",
        image: "./assets/images/home/home-secao-simbolos/pentagrama-simbolo.png",
        alt: "Símbolo Pentagrama"
    },
    {
        name: "Olho de Hórus",
        image: "./assets/images/home/home-secao-simbolos/olho-de-horus-simbolo.png",
        alt: "Símbolo Olho de Hórus"
    }
];


/* =====================================================
   FUNÇÃO AUXILIAR PARA EVITAR PROBLEMAS COM TEXTOS
===================================================== */

function escapeHTML(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =====================================================
   GERADOR DOS CARDS DE SÍMBOLOS
===================================================== */

function createSymbolCards() {
    const symbolsTrack = document.getElementById("symbolsTrack");

    if (!symbolsTrack) {
        console.warn("Container #symbolsTrack não encontrado no HTML.");
        return;
    }

    if (!Array.isArray(homeSymbolsData) || homeSymbolsData.length === 0) {
        console.warn("Nenhum símbolo encontrado em homeSymbolsData.");
        return;
    }

    const cardsHTML = homeSymbolsData
        .filter((symbol) => symbol && symbol.name && symbol.image)
        .map((symbol) => {
            const name = escapeHTML(symbol.name);
            const image = escapeHTML(symbol.image);
            const alt = escapeHTML(symbol.alt || symbol.name);

            return `
                <article class="symbol-card" aria-label="${name}">
                    <img
                        src="${image}"
                        alt="${alt}"
                        loading="lazy"
                        decoding="async">

                    <div class="symbol-overlay" aria-hidden="true">
                        <h3>${name}</h3>
                    </div>
                </article>
            `;
        })
        .join("");

    symbolsTrack.innerHTML = cardsHTML;
}


/* =====================================================
   INICIALIZAÇÃO AUTOMÁTICA
===================================================== */

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createSymbolCards);
} else {
    createSymbolCards();
}
