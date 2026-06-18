/* =====================================================
   HOME-SYMBOLS-DATA.JS
   Seção: Símbolos do Mundo Antigo
===================================================== */

const homeSymbolsData = [
    {
        name: "Ankh",
        icon: "☥",
        image: "./assets/images/home/home-secao-simbolos/ankh-simbolo.png",
        alt: "Símbolo Ankh",
        description: "Símbolo egípcio da vida, da eternidade e da força espiritual.",
        url: "./simbologia.html#ankh"
    },
    {
        name: "Chi Rho",
        icon: "☧",
        image: "./assets/images/home/home-secao-simbolos/chi-rho-simbolo.png",
        alt: "Símbolo Chi Rho",
        description: "Símbolo cristão antigo ligado ao nome de Cristo e à fé primitiva.",
        url: "./simbologia.html#chi-rho"
    },
    {
        name: "Triskelion",
        icon: "☘",
        image: "./assets/images/home/home-secao-simbolos/triskelion-simbolo.png",
        alt: "Símbolo Triskelion",
        description: "Símbolo celta associado ao movimento, aos ciclos e à transformação.",
        url: "./simbologia.html#triskelion"
    },
    {
        name: "Yin Yang",
        icon: "☯",
        image: "./assets/images/home/home-secao-simbolos/yin-yang-simbolo.png",
        alt: "Símbolo Yin Yang",
        description: "Representa o equilíbrio entre forças opostas e complementares.",
        url: "./simbologia.html#yin-yang"
    },
    {
        name: "Pentagrama",
        icon: "★",
        image: "./assets/images/home/home-secao-simbolos/pentagrama-simbolo.png",
        alt: "Símbolo Pentagrama",
        description: "Símbolo ligado aos cinco elementos, proteção e espiritualidade.",
        url: "./simbologia.html#pentagrama"
    },
    {
        name: "Olho de Hórus",
        icon: "𓂀",
        image: "./assets/images/home/home-secao-simbolos/olho-de-horus-simbolo.png",
        alt: "Símbolo Olho de Hórus",
        description: "Símbolo egípcio de proteção, cura, poder e visão espiritual.",
        url: "./simbologia.html#olho-de-horus"
    }
];

/* =====================================================
   FUNÇÃO AUXILIAR
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
   GERADOR DOS CARDS
===================================================== */

function createSymbolCards() {
    const symbolsTrack = document.getElementById("symbolsTrack");

    if (!symbolsTrack) {
        console.warn("Container #symbolsTrack não encontrado.");
        return;
    }

    if (symbolsTrack.dataset.rendered === "true") {
        return;
    }

    const fragment = document.createDocumentFragment();

    homeSymbolsData.forEach((symbol) => {
        const card = createElement("article", "symbol-card");
        card.setAttribute("tabindex", "0");
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", `Virar card do símbolo ${symbol.name}`);

        const inner = createElement("div", "symbol-card-inner");

        /* Frente */
        const front = createElement("div", "symbol-card-front");

        const image = document.createElement("img");
        image.src = symbol.image;
        image.alt = symbol.alt || symbol.name;
        image.loading = "lazy";
        image.decoding = "async";

        const overlay = createElement("div", "symbol-overlay");
        overlay.setAttribute("aria-hidden", "true");

        const frontTitle = createElement("h3", null, symbol.name);

        overlay.appendChild(frontTitle);
        front.appendChild(image);
        front.appendChild(overlay);

        /* Verso */
        const back = createElement("div", "symbol-card-back");

        const iconBox = createElement("div", "symbol-back-icon", symbol.icon || "✧");
        const backTitle = createElement("h3", null, symbol.name);
        const description = createElement("p", null, symbol.description);

        const divider = createElement("span", "symbol-back-divider");

        const link = createElement("a", "symbol-card-link", "Saiba mais");
        link.href = symbol.url || "#";
        link.setAttribute("aria-label", `Saiba mais sobre ${symbol.name}`);

        link.addEventListener("click", (event) => {
            event.stopPropagation();
        });

        back.appendChild(iconBox);
        back.appendChild(backTitle);
        back.appendChild(description);
        back.appendChild(divider);
        back.appendChild(link);

        inner.appendChild(front);
        inner.appendChild(back);
        card.appendChild(inner);

        card.addEventListener("click", () => {
            card.classList.toggle("is-flipped");
        });

        card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                card.classList.toggle("is-flipped");
            }
        });

        fragment.appendChild(card);
    });

    symbolsTrack.replaceChildren(fragment);
    symbolsTrack.dataset.rendered = "true";
}

/* =====================================================
   INICIALIZAÇÃO
===================================================== */

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createSymbolCards);
} else {
    createSymbolCards();
}