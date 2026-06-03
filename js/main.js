/* =====================================================
   MAIN.JS - BESTIÁRIO
   -----------------------------------------------------
   Arquivo principal de interações do site.

   Responsável por:
   1. Utilitários globais
   2. Menu hambúrguer mobile
   3. Carrossel de citações
   4. Carrosséis horizontais simples
   5. Carrossel de criaturas
   6. Carrossel infinito de mitologias
   7. Inicialização geral
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
        const gap = parseFloat(trackStyles.gap || trackStyles.columnGap || "20");

        return firstCard.offsetWidth + gap;
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

        menuToggle.addEventListener("click", () => {
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
        });

        menuLinks.forEach((link) => {
            link.addEventListener("click", () => {
                topbar.classList.remove("menu-open");

                menuToggle.setAttribute("aria-label", "Abrir menu");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) {
                topbar.classList.remove("menu-open");

                menuToggle.setAttribute("aria-label", "Abrir menu");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
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

        function updateCarousel() {
            const cardsPerView = getCardsPerView();
            const cardWidth = quoteCards[0].offsetWidth;
            const gap = 24;
            const maxIndex = Math.max(0, quoteCards.length - cardsPerView);
            const moveX = currentIndex * (cardWidth + gap);

            quotesTrack.style.transform = `translateX(-${moveX}px)`;

            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= maxIndex;
        }

        function goToNext() {
            const cardsPerView = getCardsPerView();
            const maxIndex = Math.max(0, quoteCards.length - cardsPerView);

            currentIndex += cardsPerView;

            if (currentIndex > maxIndex) {
                currentIndex = maxIndex;
            }

            updateCarousel();
        }

        function goToPrev() {
            const cardsPerView = getCardsPerView();

            currentIndex -= cardsPerView;

            if (currentIndex < 0) {
                currentIndex = 0;
            }

            updateCarousel();
        }

        window.addEventListener("resize", () => {
            const cardsPerView = getCardsPerView();
            const maxIndex = Math.max(0, quoteCards.length - cardsPerView);

            if (currentIndex > maxIndex) {
                currentIndex = maxIndex;
            }

            updateCarousel();
        });

        nextBtn.addEventListener("click", goToNext);
        prevBtn.addEventListener("click", goToPrev);

        updateCarousel();
    }


    /* =====================================================
       4. CARROSSÉIS HORIZONTAIS SIMPLES
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
        setupSimpleHorizontalCarousel({
            trackSelector: "#symbolsTrack",
            prevBtnSelector: "#symbolPrev",
            nextBtnSelector: "#symbolNext",
            cardSelector: ".symbol-card",
            stepFallback: 340,
        });

        setupSimpleHorizontalCarousel({
            trackSelector: "#legendsTrack",
            prevBtnSelector: "#legendPrev",
            nextBtnSelector: "#legendNext",
            cardSelector: ".legend-card",
            stepFallback: 320,
        });

        setupSimpleHorizontalCarousel({
            trackSelector: ".relics-carousel",
            prevBtnSelector: ".relic-arrow.left",
            nextBtnSelector: ".relic-arrow.right",
            cardSelector: ".relic-card",
            stepFallback: 320,
        });

        setupSimpleHorizontalCarousel({
            trackSelector: "#artifactsTrack",
            prevBtnSelector: "#artifactPrev",
            nextBtnSelector: "#artifactNext",
            cardSelector: ".artifact-card",
            stepFallback: 320,
        });

        setupSimpleHorizontalCarousel({
            trackSelector: "#mythologiesTrack",
            prevBtnSelector: "#mythPrevBtn",
            nextBtnSelector: "#mythNextBtn",
            cardSelector: ".myth-card",
            stepFallback: 320,
        });
    }


    /* =====================================================
       5. CARROSSEL - CRIATURAS
    ===================================================== */

    function setupCreaturesCarousel() {
        const creaturesTrack = document.getElementById("creaturesTrack");
        const creaturePrevBtn = document.getElementById("creaturePrevBtn");
        const creatureNextBtn = document.getElementById("creatureNextBtn");

        if (!creaturesTrack || !creaturePrevBtn || !creatureNextBtn) {
            return;
        }

        function getCreatureStep() {
            return getTrackStep(creaturesTrack, ".creature-card", 300);
        }

        function updateButtons() {
            creaturePrevBtn.disabled = creaturesTrack.scrollLeft <= 5;
        }

        creaturePrevBtn.addEventListener("click", () => {
            scrollTrack(creaturesTrack, -getCreatureStep());
        });

        creatureNextBtn.addEventListener("click", () => {
            scrollTrack(creaturesTrack, getCreatureStep());
        });

        creaturesTrack.addEventListener("scroll", updateButtons);
        window.addEventListener("resize", updateButtons);
        window.addEventListener("load", updateButtons);

        updateButtons();
    }


    /* =====================================================
       6. CARROSSEL INFINITO - MITOLOGIAS
    ===================================================== */

    function setupInfiniteMythologyCarousel() {
        const carousel = document.querySelector(".infinite-carousel");
        const track = document.querySelector(".carousel-track");

        if (!carousel || !track) {
            return;
        }

        const originalContent = track.innerHTML;

        track.innerHTML = originalContent + originalContent;

        let position = 0;
        let speed = 1;
        let halfWidth = track.scrollWidth / 2;

        let isDragging = false;
        let startX = 0;
        let currentTranslate = 0;
        let hasMoved = false;

        function updateHalfWidth() {
            halfWidth = track.scrollWidth / 2;
        }

        function normalizePosition() {
            if (position <= -halfWidth) {
                position += halfWidth;
            }

            if (position > 0) {
                position -= halfWidth;
            }
        }

        function applyTransform() {
            track.style.transform = `translateX(${position}px)`;
        }

        function animateCarousel() {
            if (!isDragging) {
                position -= speed;
                normalizePosition();
                applyTransform();
            }

            requestAnimationFrame(animateCarousel);
        }

        function getEventX(event) {
            if (event.type.includes("touch")) {
                return event.touches[0]?.clientX || 0;
            }

            return event.pageX;
        }

        function startDrag(event) {
            isDragging = true;
            hasMoved = false;

            carousel.classList.add("dragging");

            startX = getEventX(event);
            currentTranslate = position;
        }

        function moveDrag(event) {
            if (!isDragging) {
                return;
            }

            const currentX = getEventX(event);
            const diff = currentX - startX;

            if (Math.abs(diff) > 5) {
                hasMoved = true;
            }

            position = currentTranslate + diff;

            normalizePosition();
            applyTransform();
        }

        function endDrag() {
            isDragging = false;
            carousel.classList.remove("dragging");
        }

        function preventClickAfterDrag(event) {
            if (hasMoved) {
                event.preventDefault();
                event.stopPropagation();
            }
        }

        carousel.addEventListener("mousedown", startDrag);
        carousel.addEventListener("mousemove", moveDrag);
        carousel.addEventListener("mouseup", endDrag);
        carousel.addEventListener("mouseleave", endDrag);

        carousel.addEventListener("touchstart", startDrag, { passive: true });
        carousel.addEventListener("touchmove", moveDrag, { passive: true });
        carousel.addEventListener("touchend", endDrag);

        carousel.addEventListener("click", preventClickAfterDrag, true);

        window.addEventListener("resize", updateHalfWidth);
        window.addEventListener("load", updateHalfWidth);

        animateCarousel();
    }


    /* =====================================================
       7. INICIALIZAÇÃO GERAL
    ===================================================== */

    setupMobileMenu();
    setupQuotesCarousel();
    setupHorizontalCarousels();
    setupCreaturesCarousel();
    setupInfiniteMythologyCarousel();

});