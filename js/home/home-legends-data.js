/* =====================================================
   HOME-LEGENDS-DATA.JS
   -----------------------------------------------------
   Dados e renderização da seção:
   "Lendas do Mundo Antigo"

   Ajustes aplicados:
   - selo pequeno em cada card;
   - resumo exibido apenas ao ativar o card;
   - primeiro clique ativa o card e revela o resumo;
   - segundo clique no mesmo card direciona para o link informado;
   - suporte a teclado com Enter e Espaço;
   - contador de lendas;
   - barra de progresso premium;
   - atualização da barra ao rolar/clicar;
   - removido card fixo em destaque.
===================================================== */

const homeLegendsData = [
    {
        name: "A Loira do Banheiro",
        badge: "Brasil • Fantasma",
        summary: "Uma das lendas urbanas brasileiras mais conhecidas, ligada a aparições em banheiros escolares e histórias contadas entre gerações.",
        image: "./assets/images/home/home-secao-lendas/loira-do-banheiro-home.png",
        alt: "A Loira do Banheiro",
        url: "./legends.html"
    },
    {
        name: "Teke Teke",
        badge: "Japão • Aparição",
        summary: "Espírito vingativo que se arrasta pelas ruas durante a noite, marcado por um som seco e ameaçador.",
        image: "./assets/images/home/home-secao-lendas/teke-teke-home.png",
        alt: "Teke Teke",
        url: "./legends.html"
    },
    {
        name: "Kuchisake-onna",
        badge: "Japão • Terror",
        summary: "A mulher da boca cortada aparece usando máscara e desafia suas vítimas com uma pergunta impossível.",
        image: "./assets/images/home/home-secao-lendas/kuchisake-onna-home.png",
        alt: "Kuchisake-onna",
        url: "./legends.html"
    },
    {
        name: "Aka Manto",
        badge: "Japão • Mistério",
        summary: "Uma presença mascarada associada a banheiros públicos, escolhas fatais e histórias sombrias do folclore urbano japonês.",
        image: "./assets/images/home/home-secao-lendas/aka-manto-home.png",
        alt: "Aka Manto",
        url: "./legends.html"
    },
    {
        name: "Jack the Killer",
        badge: "Inglaterra • Assombração",
        summary: "Figura sombria inspirada em crimes, ruas enevoadas e relatos que misturam medo, mistério e imaginação popular.",
        image: "./assets/images/home/home-secao-lendas/jack-the-killer-home.png",
        alt: "Jack the Killer",
        url: "./legends.html"
    },
    {
        name: "Cabra Cabriola",
        badge: "Brasil • Criatura",
        summary: "Criatura assustadora do imaginário nordestino, usada em contos populares para alertar e amedrontar crianças desobedientes.",
        image: "./assets/images/home/home-secao-lendas/cabra-cabriola-home.png",
        alt: "Cabra Cabriola",
        url: "./legends.html"
    },
    {
        name: "Pisadeira",
        badge: "Brasil • Pesadelo",
        summary: "Entidade do folclore brasileiro que surge durante a paralisia do sono, pressionando o peito de quem dorme.",
        image: "./assets/images/home/home-secao-lendas/pisadeira-home.png",
        alt: "Pisadeira",
        url: "./legends.html"
    }
];


/* =====================================================
   FUNÇÃO DE SEGURANÇA
   -----------------------------------------------------
   Protege textos antes de inserir no innerHTML.
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
   AÇÃO DO CARD
   -----------------------------------------------------
   1º clique: ativa o card e exibe o resumo.
   2º clique no mesmo card: abre o link informado.
===================================================== */

function activateLegendCard(card) {
    const legendsTrack = document.getElementById("legendsTrack");

    if (!legendsTrack || !card) {
        return;
    }

    const cards = legendsTrack.querySelectorAll(".legend-card");

    cards.forEach((item) => {
        const isCurrentCard = item === card;

        item.classList.toggle("is-active", isCurrentCard);
        item.setAttribute("aria-expanded", String(isCurrentCard));
    });
}

function handleLegendCardAction(card) {
    if (!card) {
        return;
    }

    const isActive = card.classList.contains("is-active");
    const url = card.dataset.url;

    if (isActive && url && url !== "#") {
        window.location.href = url;
        return;
    }

    activateLegendCard(card);
}

function setupLegendCardInteractions() {
    const legendsTrack = document.getElementById("legendsTrack");

    if (!legendsTrack || legendsTrack.dataset.cardInteractionReady === "true") {
        return;
    }

    legendsTrack.dataset.cardInteractionReady = "true";

    legendsTrack.addEventListener("click", (event) => {
        const card = event.target.closest(".legend-card");

        if (!card || !legendsTrack.contains(card)) {
            return;
        }

        handleLegendCardAction(card);
    });

    legendsTrack.addEventListener("keydown", (event) => {
        const card = event.target.closest(".legend-card");

        if (!card || !legendsTrack.contains(card)) {
            return;
        }

        if (event.key !== "Enter" && event.key !== " ") {
            return;
        }

        event.preventDefault();
        handleLegendCardAction(card);
    });

    document.addEventListener("click", (event) => {
        if (legendsTrack.contains(event.target)) {
            return;
        }

        const activeCard = legendsTrack.querySelector(".legend-card.is-active");

        if (activeCard) {
            activeCard.classList.remove("is-active");
            activeCard.setAttribute("aria-expanded", "false");
        }
    });
}


/* =====================================================
   GERADOR DOS CARDS DE LENDAS
===================================================== */

function createLegendCards() {
    const legendsTrack = document.getElementById("legendsTrack");

    if (!legendsTrack || !Array.isArray(homeLegendsData)) {
        return;
    }

    if (legendsTrack.dataset.rendered === "true") {
        updateLegendsCounter();
        setupLegendsProgress();
        setupLegendCardInteractions();
        return;
    }

    if (homeLegendsData.length === 0) {
        legendsTrack.innerHTML = "";
        updateLegendsCounter();
        setupLegendsProgress();
        setupLegendCardInteractions();
        return;
    }

    legendsTrack.innerHTML = homeLegendsData.map((legend) => {
        const name = escapeHTML(legend.name || "Lenda");
        const badge = escapeHTML(legend.badge || "Lenda");
        const summary = escapeHTML(legend.summary || "Mistério preservado pela tradição oral.");
        const image = escapeHTML(legend.image || "");
        const alt = escapeHTML(legend.alt || legend.name || "Imagem da lenda");
        const url = escapeHTML(legend.url || "#");

        return `
            <article
                class="legend-card"
                role="link"
                tabindex="0"
                data-url="${url}"
                aria-label="Ler mais sobre ${name}"
                aria-expanded="false">
                <img
                    src="${image}"
                    alt="${alt}"
                    loading="lazy"
                    decoding="async">

                <span class="legend-badge">
                    ${badge}
                </span>

                <div class="legend-overlay">
                    <h3>${name}</h3>

                    <p class="legend-summary">
                        ${summary}
                    </p>
                </div>
            </article>
        `;
    }).join("");

    legendsTrack.dataset.rendered = "true";

    updateLegendsCounter();
    setupLegendsProgress();
    setupLegendCardInteractions();
}


/* =====================================================
   CONTADOR DE LENDAS
===================================================== */

function updateLegendsCounter() {
    const counter = document.getElementById("legendsTotalCount");

    if (!counter) {
        return;
    }

    counter.textContent = String(homeLegendsData.length);
}


/* =====================================================
   BARRA DE PROGRESSO DO CARROSSEL
===================================================== */

function setupLegendsProgress() {
    const legendsTrack = document.getElementById("legendsTrack");
    const progressBar = document.getElementById("legendsProgressBar");
    const previousButton = document.getElementById("legendPrev");
    const nextButton = document.getElementById("legendNext");

    if (!legendsTrack || !progressBar) {
        return;
    }

    function updateProgressBar() {
        const maxScroll = legendsTrack.scrollWidth - legendsTrack.clientWidth;

        if (maxScroll <= 0) {
            progressBar.style.width = "100%";
            return;
        }

        const progress = Math.min(100, Math.max(0, (legendsTrack.scrollLeft / maxScroll) * 100));

        progressBar.style.width = `${progress}%`;
    }

    function getScrollAmount() {
        const firstCard = legendsTrack.querySelector(".legend-card");

        if (!firstCard) {
            return legendsTrack.clientWidth * 0.8;
        }

        const trackStyle = window.getComputedStyle(legendsTrack);
        const gap = parseFloat(trackStyle.columnGap || trackStyle.gap || "24") || 24;

        return firstCard.offsetWidth + gap;
    }

    if (legendsTrack.dataset.progressReady !== "true") {
        legendsTrack.dataset.progressReady = "true";

        legendsTrack.addEventListener("scroll", updateProgressBar, {
            passive: true
        });

        window.addEventListener("resize", updateProgressBar);
    }

    if (previousButton && previousButton.dataset.legendScrollReady !== "true") {
        previousButton.dataset.legendScrollReady = "true";

        previousButton.addEventListener("click", () => {
            legendsTrack.scrollBy({
                left: -getScrollAmount(),
                behavior: "smooth"
            });
        });
    }

    if (nextButton && nextButton.dataset.legendScrollReady !== "true") {
        nextButton.dataset.legendScrollReady = "true";

        nextButton.addEventListener("click", () => {
            legendsTrack.scrollBy({
                left: getScrollAmount(),
                behavior: "smooth"
            });
        });
    }

    requestAnimationFrame(updateProgressBar);
}


/* =====================================================
   INICIALIZAÇÃO AUTOMÁTICA
   -----------------------------------------------------
   Evita erro caso o JS carregue antes do HTML.
===================================================== */

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createLegendCards);
} else {
    createLegendCards();
}
