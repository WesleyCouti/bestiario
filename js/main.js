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
   7. Globo interativo das mitologias
   8. Inicialização geral

   Observação:
   - Este arquivo foi organizado para ter apenas um DOMContentLoaded.
   - Cada comportamento do site está isolado em uma função própria.
   - O globo não redireciona o usuário ao clicar nos marcadores.
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       1. UTILITÁRIOS GLOBAIS
    ===================================================== */

    /**
     * Retorna a distância de rolagem de um carrossel com base
     * no tamanho do primeiro card + gap entre os itens.
     */
    function getTrackStep(track, cardSelector, fallback = 300) {
        const firstCard = track?.querySelector(cardSelector);

        if (!firstCard) {
            return fallback;
        }

        const trackStyles = window.getComputedStyle(track);
        const gap = parseFloat(trackStyles.gap || trackStyles.columnGap || "20");

        return firstCard.offsetWidth + gap;
    }

    /**
     * Faz a rolagem horizontal suave de um container.
     */
    function scrollTrack(track, distance) {
        if (!track) {
            return;
        }

        track.scrollBy({
            left: distance,
            behavior: "smooth",
        });
    }

    /**
     * Debounce simples para evitar executar uma função muitas vezes
     * em eventos como resize.
     */
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
                trackSelector: ".relics-carousel",
                prevBtnSelector: ".relic-arrow.left",
                nextBtnSelector: ".relic-arrow.right",
                cardSelector: ".relic-card",
                stepFallback: 320,
            },
            {
                trackSelector: "#artifactsTrack",
                prevBtnSelector: "#artifactPrev",
                nextBtnSelector: "#artifactNext",
                cardSelector: ".artifact-card",
                stepFallback: 320,
            },
            {
                trackSelector: "#mythologiesTrack",
                prevBtnSelector: "#mythPrevBtn",
                nextBtnSelector: "#mythNextBtn",
                cardSelector: ".myth-card",
                stepFallback: 320,
            },
        ];

        carousels.forEach(setupSimpleHorizontalCarousel);
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
        window.addEventListener("resize", debounce(updateButtons));
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
        const speed = 1;
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
            if (!isDragging) {
                return;
            }

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

        window.addEventListener("resize", debounce(updateHalfWidth));
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
    setupMythologyGlobe();
    setupMythologyTimeline();

});




function setupMythologyTimeline() {
    const timelineWrapper = document.querySelector(".mythology-timeline-wrapper");
    const prevBtn = document.querySelector(".timeline-prev");
    const nextBtn = document.querySelector(".timeline-next");

    if (!timelineWrapper || !prevBtn || !nextBtn) {
        return;
    }

    function getTimelineStep() {
        return window.innerWidth <= 768 ? 260 : 360;
    }

    prevBtn.addEventListener("click", () => {
        timelineWrapper.scrollBy({
            left: -getTimelineStep(),
            behavior: "smooth",
        });
    });

    nextBtn.addEventListener("click", () => {
        timelineWrapper.scrollBy({
            left: getTimelineStep(),
            behavior: "smooth",
        });
    });
}