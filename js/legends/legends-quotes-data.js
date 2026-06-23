/* =====================================================
   LEGENDS-QUOTES-DATA.JS
   Seção: Frases e Provérbios do Folclore
===================================================== */

const legendsQuotesData = [
    { text: "Enquanto houver quem conte, as lendas permanecerão vivas." },
    { text: "Toda lenda guarda uma verdade esquecida." },
    { text: "Os povos desaparecem, mas suas histórias permanecem." },
    { text: "Toda sombra antiga carrega uma história esperando para ser contada." },
    { text: "As lendas nascem quando a memória encontra a imaginação." },
    { text: "O medo de um povo também pode se transformar em tradição." },
    { text: "Nem toda história precisa ser provada para permanecer viva." },
    { text: "Onde a razão termina, muitas lendas começam." },
    { text: "Cada aldeia guarda um mistério, cada geração acrescenta um detalhe." },
    { text: "As histórias antigas são mapas da alma dos povos." },
    { text: "A lenda é a voz do passado ecoando no presente." },
    { text: "Criaturas lendárias revelam os medos e desejos de quem as imaginou." }
];

function shuffleLegendsQuotes(array) {
    const shuffled = [...array];

    for (let index = shuffled.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
    }

    return shuffled;
}

function initLegendsQuotes() {
    const section = document.querySelector("#frases-folclore");
    if (!section) return;

    const grid = section.querySelector("#legendsQuotesGrid, .legends-quotes-grid");
    const prevButton = section.querySelector("#legendsQuotesPrev, .legends-quotes-arrow:first-of-type");
    const nextButton = section.querySelector("#legendsQuotesNext, .legends-quotes-arrow:last-of-type");
    const dotsContainer = section.querySelector("#legendsQuotesDots, .legends-quotes-dots");

    if (!grid || !prevButton || !nextButton || !dotsContainer) return;

    const quotesPerPage = 3;
    const shuffledQuotes = shuffleLegendsQuotes(legendsQuotesData);
    const totalPages = Math.ceil(shuffledQuotes.length / quotesPerPage);

    let currentPage = 0;
    let isAnimating = false;

    function renderDots() {
        dotsContainer.innerHTML = "";

        for (let index = 0; index < totalPages; index++) {
            const dot = document.createElement("span");

            if (index === currentPage) {
                dot.classList.add("active");
            }

            dotsContainer.appendChild(dot);
        }
    }

    function createQuoteCard(quote, index, totalVisible) {
        const card = document.createElement("article");
        card.className = "legends-quote-card";

        const openQuote = document.createElement("span");
        openQuote.className = "quote-mark";
        openQuote.setAttribute("aria-hidden", "true");
        openQuote.textContent = "“";

        const text = document.createElement("p");
        text.textContent = quote.text;

        card.appendChild(openQuote);
        card.appendChild(text);

        if (index === totalVisible - 1) {
            const closeQuote = document.createElement("span");
            closeQuote.className = "quote-mark quote-mark-end";
            closeQuote.setAttribute("aria-hidden", "true");
            closeQuote.textContent = "”";
            card.appendChild(closeQuote);
        }

        return card;
    }

    function renderQuotes(direction = "next", animate = false) {
        const start = currentPage * quotesPerPage;
        const visibleQuotes = shuffledQuotes.slice(start, start + quotesPerPage);

        if (!animate) {
            grid.innerHTML = "";
            visibleQuotes.forEach((quote, index) => {
                grid.appendChild(createQuoteCard(quote, index, visibleQuotes.length));
            });
            renderDots();
            return;
        }

        isAnimating = true;

        grid.classList.remove("slide-in-left", "slide-in-right", "slide-out-left", "slide-out-right");
        grid.classList.add(direction === "next" ? "slide-out-left" : "slide-out-right");

        setTimeout(() => {
            grid.innerHTML = "";

            visibleQuotes.forEach((quote, index) => {
                grid.appendChild(createQuoteCard(quote, index, visibleQuotes.length));
            });

            renderDots();

            grid.classList.remove("slide-out-left", "slide-out-right");
            grid.classList.add(direction === "next" ? "slide-in-right" : "slide-in-left");

            setTimeout(() => {
                grid.classList.remove("slide-in-left", "slide-in-right");
                isAnimating = false;
            }, 360);
        }, 260);
    }

    function goToNextPage() {
        if (isAnimating) return;

        currentPage = (currentPage + 1) % totalPages;
        renderQuotes("next", true);
    }

    function goToPreviousPage() {
        if (isAnimating) return;

        currentPage = (currentPage - 1 + totalPages) % totalPages;
        renderQuotes("previous", true);
    }

    nextButton.addEventListener("click", goToNextPage);
    prevButton.addEventListener("click", goToPreviousPage);

    renderQuotes("next", false);
    syncQuotesDotsWithMobileScroll();
}

function syncQuotesDotsWithMobileScroll() {
    const quotesGrid = document.querySelector("#legendsQuotesGrid");
    const dotsContainer = document.querySelector("#legendsQuotesDots");

    if (!quotesGrid || !dotsContainer) return;

    function updateActiveDot() {
        const cards = quotesGrid.querySelectorAll(".legends-quote-card");
        const dots = dotsContainer.querySelectorAll("span");

        if (!cards.length || !dots.length) return;

        const cardWidth = cards[0].offsetWidth;
        const gap = 18;
        const activeIndex = Math.round(quotesGrid.scrollLeft / (cardWidth + gap));

        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === activeIndex);
        });
    }

    quotesGrid.addEventListener("scroll", () => {
        window.requestAnimationFrame(updateActiveDot);
    });

    updateActiveDot();
}

document.addEventListener("DOMContentLoaded", initLegendsQuotes);