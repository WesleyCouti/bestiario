/* =====================================================
   LEGENDS-FEATURED-DATA.JS
   Seção: Lendas em Destaque
   Cards dinâmicos + carrossel horizontal

   Funções:
   - Mantém os dados das lendas em destaque.
   - Renderiza cards dinamicamente.
   - Embaralha os cards a cada reload.
   - Corta descrições sem quebrar palavras.
   - Protege textos contra quebra de HTML.
===================================================== */

const FEATURED_DESCRIPTION_LIMIT = 95;

const legendsFeaturedData = [
    {
        name: "Iara",
        image: "./assets/images/legends/legends-cards-page/sereia-iara.png",
        alt: "Iara",
        description: "A bela criatura das águas que encanta e protege os rios da Amazônia.",
        url: "#"
    },
    {
        name: "Rei Artur",
        image: "./assets/images/legends/legends-cards-page/rei-artur.png",
        alt: "Rei Artur",
        description: "O lendário rei da Távola Redonda e a busca pela Espada na Pedra.",
        url: "#"
    },
    {
        name: "Saci-Pererê",
        image: "./assets/images/legends/legends-cards-page/saci-perere.png",
        alt: "Saci-Pererê",
        description: "O travesso guardião das matas brasileiras, mestre das travessuras.",
        url: "#"
    },
    {
        name: "Curupira",
        image: "./assets/images/legends/legends-cards-page/curupira.png",
        alt: "Curupira",
        description: "Guardião das florestas brasileiras, conhecido por seus pés voltados para trás.",
        url: "#"
    },
    {
        name: "Lobisomem",
        image: "./assets/images/legends/legends-cards-page/lobisomem.png",
        alt: "Lobisomem",
        description: "Criatura que assume a forma de um lobo nas noites de lua cheia.",
        url: "#"
    },
    {
        name: "Mula sem Cabeça",
        image: "./assets/images/legends/legends-cards-page/mula-sem-cabeca.png",
        alt: "Mula sem Cabeça",
        description: "Lenda brasileira sobre uma criatura envolta em chamas que vaga durante a noite.",
        url: "#"
    },
    {
        name: "Boto Cor-de-Rosa",
        image: "./assets/images/legends/legends-cards-page/boto-cor-de-rosa.png",
        alt: "Boto Cor-de-Rosa",
        description: "Encantado amazônico que assume forma humana para seduzir durante as festas.",
        url: "#"
    },
    {
        name: "Kraken",
        image: "./assets/images/legends/legends-cards-page/kraken.png",
        alt: "Kraken",
        description: "Monstro marinho gigante das antigas lendas nórdicas, temido pelos navegadores.",
        url: "#"
    },
    {
        name: "Yeti",
        image: "./assets/images/legends/legends-cards-page/yeti.png",
        alt: "Yeti",
        description: "A misteriosa criatura das montanhas geladas do Himalaia.",
        url: "#"
    },
    {
        name: "Pé-Grande",
        image: "./assets/images/legends/legends-cards-page/pe-grande.png",
        alt: "Pé-Grande",
        description: "Gigantesco ser peludo que habitaria as florestas da América do Norte.",
        url: "#"
    },
    {
        name: "Robin Hood",
        image: "./assets/images/legends/legends-cards-page/robin-hood.png",
        alt: "Robin Hood",
        description: "O lendário arqueiro que roubava dos ricos para ajudar os pobres.",
        url: "#"
    },
    {
        name: "Morgana",
        image: "./assets/images/legends/legends-cards-page/morgana.png",
        alt: "Morgana",
        description: "Poderosa feiticeira das lendas arturianas, cercada de mistério e magia.",
        url: "#"
    },
    {
        name: "Chupa-cabra",
        image: "./assets/images/legends/legends-cards-page/chupa-cabra.png",
        alt: "Chupa-cabra",
        description: "Criatura moderna cercada de relatos misteriosos em diversas regiões das Américas.",
        url: "#"
    }
];

/* =====================================================
   FUNÇÕES AUXILIARES
===================================================== */

function escapeLegendText(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function truncateLegendText(text, maxLength = FEATURED_DESCRIPTION_LIMIT) {
    const safeText = String(text ?? "").trim();

    if (safeText.length <= maxLength) {
        return safeText;
    }

    const slicedText = safeText.slice(0, maxLength);
    const lastSpace = slicedText.lastIndexOf(" ");

    if (lastSpace <= 0) {
        return slicedText.trim() + "...";
    }

    return slicedText.slice(0, lastSpace).trim() + "...";
}

function shuffleLegendsFeaturedCards(items) {
    const shuffledItems = [...items];

    for (let index = shuffledItems.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));

        [shuffledItems[index], shuffledItems[randomIndex]] =
            [shuffledItems[randomIndex], shuffledItems[index]];
    }

    return shuffledItems;
}

/* =====================================================
   GERADOR DOS CARDS
===================================================== */

function createLegendsFeaturedCards() {
    const legendsFeaturedGrid = document.getElementById("legendsFeaturedGrid");

    if (!legendsFeaturedGrid || !Array.isArray(legendsFeaturedData)) {
        return;
    }

    const shuffledLegends = shuffleLegendsFeaturedCards(legendsFeaturedData);

    legendsFeaturedGrid.innerHTML = shuffledLegends.map((legend) => {
        const name = escapeLegendText(legend.name);
        const image = escapeLegendText(legend.image);
        const alt = escapeLegendText(legend.alt || legend.name);
        const description = escapeLegendText(
            truncateLegendText(legend.description, FEATURED_DESCRIPTION_LIMIT)
        );
        const url = escapeLegendText(legend.url || "#");

        return `
            <article class="legend-featured-card">
                <img
                    src="${image}"
                    alt="${alt}"
                    loading="lazy"
                    decoding="async">

                <div class="legend-featured-content">
                    <h3>${name}</h3>

                    <p>${description}</p>

                    <a href="${url}" aria-label="Ler mais sobre ${name}">
                        Ler mais
                    </a>
                </div>
            </article>
        `;
    }).join("");
}

/* =====================================================
   CARROSSEL DOS CARDS
===================================================== */

function setupLegendsFeaturedCarousel() {
    const grid = document.getElementById("legendsFeaturedGrid");
    const prevButton = document.querySelector(".legends-arrow-left");
    const nextButton = document.querySelector(".legends-arrow-right");

    if (!grid || !prevButton || !nextButton) {
        return;
    }

    function getCardsPerView() {
        const width = window.innerWidth;

        if (width <= 560) return 1;
        if (width <= 900) return 2;
        if (width <= 1200) return 3;

        return 4;
    }

    function getScrollAmount() {
        const card = grid.querySelector(".legend-featured-card");

        if (!card) {
            return 0;
        }

        const gridStyle = window.getComputedStyle(grid);
        const gap = parseFloat(gridStyle.columnGap || gridStyle.gap) || 22;
        const cardsPerView = getCardsPerView();

        return (card.offsetWidth + gap) * cardsPerView;
    }

    function updateButtonsState() {
        const maxScrollLeft = grid.scrollWidth - grid.clientWidth;
        const currentScroll = grid.scrollLeft;

        prevButton.disabled = currentScroll <= 5;
        nextButton.disabled = currentScroll >= maxScrollLeft - 5;
    }

    nextButton.addEventListener("click", () => {
        grid.scrollBy({
            left: getScrollAmount(),
            behavior: "smooth"
        });
    });

    prevButton.addEventListener("click", () => {
        grid.scrollBy({
            left: -getScrollAmount(),
            behavior: "smooth"
        });
    });

    grid.addEventListener("scroll", updateButtonsState);
    window.addEventListener("resize", updateButtonsState);

    updateButtonsState();
}

/* =====================================================
   INICIALIZAÇÃO
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    createLegendsFeaturedCards();
    setupLegendsFeaturedCarousel();
});