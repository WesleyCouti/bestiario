/* =====================================================
   MAIN.JS - BESTIÁRIO
   -----------------------------------------------------
   Arquivo principal de interações do site.

   Responsável por:
   1. Utilitários globais
   2. Menu hambúrguer mobile
   3. Carrossel de citações
   4. Renderização dos dados externos da Home
   5. Carrosséis horizontais simples
   6. Carrossel infinito de mitologias
   7. Inicialização geral

   Observação:
   - Este arquivo foi organizado para ter apenas um DOMContentLoaded.
   - Cada comportamento do site está isolado em uma função própria.
   - Os cards de mitologias, criaturas, símbolos, lendas e relíquias
     podem ser populados por arquivos JS separados.
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       1. UTILITÁRIOS GLOBAIS
    ===================================================== */

    function getTrackStep(track, cardSelector, fallback = 300) {
        const firstCard = track?.querySelector(cardSelector);

        if (!firstCard) {
            return fallback;
        }

        const trackStyles = window.getComputedStyle(track);
        const gapValue = trackStyles.gap || trackStyles.columnGap || "20";
        const gap = Number.parseFloat(gapValue);

        return firstCard.offsetWidth + (Number.isNaN(gap) ? 20 : gap);
    }

    function scrollTrack(track, distance) {
        if (!track) {
            return;
        }

        track.scrollBy({
            left: distance,
            behavior: "smooth",
        });
    }

    function debounce(callback, delay = 150) {
        let timeoutId;

        return (...args) => {
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                callback(...args);
            }, delay);
        };
    }


    /* =====================================================
       2. MENU HAMBÚRGUER MOBILE
    ===================================================== */

    function setupMobileMenu() {
        const topbar = document.querySelector(".topbar");
        const menuToggle = document.querySelector(".menu-toggle");
        const menuLinks = document.querySelectorAll(".menu a");

        if (!topbar || !menuToggle) {
            return;
        }

        function closeMenu() {
            topbar.classList.remove("menu-open");
            menuToggle.setAttribute("aria-label", "Abrir menu");
            menuToggle.setAttribute("aria-expanded", "false");
        }

        function toggleMenu() {
            topbar.classList.toggle("menu-open");

            const isOpen = topbar.classList.contains("menu-open");

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Fechar menu" : "Abrir menu"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );
        }

        menuToggle.addEventListener("click", toggleMenu);

        menuLinks.forEach((link) => {
            link.addEventListener("click", closeMenu);
        });

        window.addEventListener("resize", debounce(() => {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        }));
    }


    /* =====================================================
       3. CARROSSEL - VOZES DO MUNDO ANTIGO
    ===================================================== */

    function setupQuotesCarousel() {
        const quotesTrack = document.getElementById("quotesTrack");
        const nextBtn = document.getElementById("nextBtn");
        const prevBtn = document.getElementById("prevBtn");
        const quoteCards = document.querySelectorAll(".quote-card");

        if (!quotesTrack || !nextBtn || !prevBtn || quoteCards.length === 0) {
            return;
        }

        let currentIndex = 0;

        function getCardsPerView() {
            return window.innerWidth <= 768 ? 1 : 3;
        }

        function getMaxIndex() {
            return Math.max(0, quoteCards.length - getCardsPerView());
        }

        function updateCarousel() {
            const cardWidth = quoteCards[0].offsetWidth;
            const gap = 24;
            const moveX = currentIndex * (cardWidth + gap);
            const maxIndex = getMaxIndex();

            quotesTrack.style.transform = `translateX(-${moveX}px)`;

            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= maxIndex;
        }

        function goToNext() {
            currentIndex += getCardsPerView();

            if (currentIndex > getMaxIndex()) {
                currentIndex = getMaxIndex();
            }

            updateCarousel();
        }

        function goToPrev() {
            currentIndex -= getCardsPerView();

            if (currentIndex < 0) {
                currentIndex = 0;
            }

            updateCarousel();
        }

        nextBtn.addEventListener("click", goToNext);
        prevBtn.addEventListener("click", goToPrev);

        window.addEventListener("resize", debounce(() => {
            if (currentIndex > getMaxIndex()) {
                currentIndex = getMaxIndex();
            }

            updateCarousel();
        }));

        updateCarousel();
    }


    /* =====================================================
       4. RENDERIZAÇÃO DOS DADOS EXTERNOS DA HOME
    ===================================================== */

    function setupDynamicHomeContent() {
        if (typeof createCreatureCards === "function") {
            createCreatureCards();
        }

        if (typeof createSymbolCards === "function") {
            createSymbolCards();
        }

        if (typeof createLegendCards === "function") {
            createLegendCards();
        }

        if (typeof createRelicCards === "function") {
            createRelicCards();
        }

        if (typeof createMythologyCarouselCards === "function") {
            createMythologyCarouselCards();
        }
    }


    /* =====================================================
       5. CARROSSÉIS HORIZONTAIS SIMPLES
    ===================================================== */

    function setupSimpleHorizontalCarousel({
        trackSelector,
        prevBtnSelector,
        nextBtnSelector,
        cardSelector,
        stepFallback = 300,
    }) {
        const track = document.querySelector(trackSelector);
        const prevBtn = document.querySelector(prevBtnSelector);
        const nextBtn = document.querySelector(nextBtnSelector);

        if (!track || !prevBtn || !nextBtn) {
            return;
        }

        if (!track.querySelector(cardSelector)) {
            return;
        }

        function getStep() {
            return getTrackStep(track, cardSelector, stepFallback);
        }

        prevBtn.addEventListener("click", () => {
            scrollTrack(track, -getStep());
        });

        nextBtn.addEventListener("click", () => {
            scrollTrack(track, getStep());
        });
    }

    function setupHorizontalCarousels() {
        const carousels = [
            {
                trackSelector: "#symbolsTrack",
                prevBtnSelector: "#symbolPrev",
                nextBtnSelector: "#symbolNext",
                cardSelector: ".symbol-card",
                stepFallback: 340,
            },
            {
                trackSelector: "#legendsTrack",
                prevBtnSelector: "#legendPrev",
                nextBtnSelector: "#legendNext",
                cardSelector: ".legend-card",
                stepFallback: 320,
            },
            {
                trackSelector: "#relicsTrack",
                prevBtnSelector: ".relic-arrow.left",
                nextBtnSelector: ".relic-arrow.right",
                cardSelector: ".relic-card",
                stepFallback: 320,
            },
        ];

        carousels.forEach(setupSimpleHorizontalCarousel);
    }


    /* =====================================================
       6. INICIALIZAÇÃO GERAL
    ===================================================== */

    setupMobileMenu();
    setupQuotesCarousel();


    setupDynamicHomeContent();

    setupHorizontalCarousels();
    
});
