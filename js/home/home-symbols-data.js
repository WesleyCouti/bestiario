/* =====================================================
   HOME-SYMBOLS-DATA.JS
   -----------------------------------------------------
   Dados e renderização da seção:
   "Símbolos do Mundo Antigo"

   Ajustes aplicados:
   - Validação do container antes de renderizar.
   - Escape de textos para evitar problemas com caracteres especiais.
   - Renderização protegida contra duplicidade.
   - Limpeza do container caso não existam símbolos.
   - Criação dos cards com createElement.
   - Acessibilidade melhorada com aria-label.
   - Overlay visual mantido com aria-hidden para evitar leitura duplicada.
   - Preparado para URLs futuras em cada símbolo.
   - Carregamento automático após o DOM estar pronto.
   - Mantida compatibilidade com o ID: symbolsTrack.
===================================================== */

const homeSymbolsData = [
    {
        name: "Ankh",
        image: "./assets/images/home/home-secao-simbolos/ankh-simbolo.png",
        alt: "Símbolo Ankh",
        url: "./simbologia.html#ankh"
    },
    {
        name: "Chi Rho",
        image: "./assets/images/home/home-secao-simbolos/chi-rho-simbolo.png",
        alt: "Símbolo Chi Rho",
        url: "./simbologia.html#chi-rho"
    },
    {
        name: "Triskelion",
        image: "./assets/images/home/home-secao-simbolos/triskelion-simbolo.png",
        alt: "Símbolo Triskelion",
        url: "./simbologia.html#triskelion"
    },
    {
        name: "Yin Yang",
        image: "./assets/images/home/home-secao-simbolos/yin-yang-simbolo.png",
        alt: "Símbolo Yin Yang",
        url: "./simbologia.html#yin-yang"
    },
    {
        name: "Pentagrama",
        image: "./assets/images/home/home-secao-simbolos/pentagrama-simbolo.png",
        alt: "Símbolo Pentagrama",
        url: "./simbologia.html#pentagrama"
    },
    {
        name: "Olho de Hórus",
        image: "./assets/images/home/home-secao-simbolos/olho-de-horus-simbolo.png",
        alt: "Símbolo Olho de Hórus",
        url: "./simbologia.html#olho-de-horus"
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
   GERADOR DOS CARDS DE SÍMBOLOS
===================================================== */

function createSymbolCards() {
    const symbolsTrack = document.getElementById("symbolsTrack");

    if (!symbolsTrack) {
        console.warn("Container #symbolsTrack não encontrado no HTML.");
        return;
    }

    if (symbolsTrack.dataset.rendered === "true") {
        return;
    }

    if (!Array.isArray(homeSymbolsData) || homeSymbolsData.length === 0) {
        console.warn("Nenhum símbolo encontrado em homeSymbolsData.");
        symbolsTrack.innerHTML = "";
        return;
    }

    const fragment = document.createDocumentFragment();

    homeSymbolsData
        .filter((symbol) => symbol && symbol.name && symbol.image)
        .forEach((symbol) => {
            const name = escapeHTML(symbol.name);
            const imageSrc = escapeHTML(symbol.image);
            const alt = escapeHTML(symbol.alt || symbol.name);
            const url = escapeHTML(symbol.url || "#");

            const card = createElement("a", "symbol-card");
            card.href = url;
            card.setAttribute("aria-label", `Símbolo antigo: ${name}`);

            const image = document.createElement("img");
            image.src = imageSrc;
            image.alt = alt;
            image.loading = "lazy";
            image.decoding = "async";

            const overlay = createElement("div", "symbol-overlay");
            overlay.setAttribute("aria-hidden", "true");

            const title = createElement("h3", null, name);

            overlay.appendChild(title);
            card.appendChild(image);
            card.appendChild(overlay);

            fragment.appendChild(card);
        });

    symbolsTrack.replaceChildren(fragment);
    symbolsTrack.dataset.rendered = "true";
}


/* =====================================================
   INICIALIZAÇÃO AUTOMÁTICA
===================================================== */

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createSymbolCards);
} else {
    createSymbolCards();
}

