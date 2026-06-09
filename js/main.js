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










document.addEventListener("DOMContentLoaded", () => {
    const globeContainer = document.getElementById("mythologyGlobe");

    if (!globeContainer) {
        console.error("Elemento #mythologyGlobe não encontrado");
        return;
    }

    const cores = {
        europeia: "#4b8dff",
        asiatica: "#b15cff",
        africana: "#ff7b2c",
        indigena: "#7cc957",
        oceanica: "#4fd1c5",
        mediterranea: "#f2b84b",
        religiosa: "#ffffff"
    };

const mitologias = [
    { nome: "Mitologia Abenaki", regiao: "Povos Abenaki - Nordeste da América do Norte", lat: 45.0, lng: -72.7, cor: cores.indigena },
    { nome: "Mitologia Aborígene", regiao: "Austrália", lat: -25.2, lng: 133.7, cor: cores.oceanica },
    { nome: "Mitologia Africana", regiao: "África Subsaariana", lat: 1.6, lng: 17.8, cor: cores.africana },
    { nome: "Mitologia Alemã", regiao: "Alemanha", lat: 51.1, lng: 10.4, cor: cores.europeia },
    { nome: "Mitologia Americana", regiao: "Estados Unidos", lat: 39.8, lng: -98.5, cor: cores.indigena },
    { nome: "Mitologia Árabe", regiao: "Península Arábica", lat: 23.8, lng: 45.0, cor: cores.asiatica },
    { nome: "Mitologia Argentina", regiao: "Argentina", lat: -38.4, lng: -63.6, cor: cores.indigena },
    { nome: "Mitologia Asteca", regiao: "México Central", lat: 19.4, lng: -99.1, cor: cores.indigena },
    { nome: "Mitologia Basca", regiao: "País Basco", lat: 43.0, lng: -2.6, cor: cores.europeia },
    { nome: "Mitologia Brasileira", regiao: "Brasil", lat: -14.2, lng: -51.9, cor: cores.indigena },
    { nome: "Mitologia Budista", regiao: "Índia e Ásia", lat: 24.7, lng: 84.9, cor: cores.asiatica },
    { nome: "Mitologia Caribenha", regiao: "Caribe", lat: 18.2, lng: -66.5, cor: cores.indigena },
    { nome: "Mitologia Catalã", regiao: "Catalunha", lat: 41.6, lng: 1.5, cor: cores.europeia },
    { nome: "Mitologia Celta", regiao: "Europa Ocidental", lat: 53.4, lng: -7.8, cor: cores.europeia },
    { nome: "Mitologia Chilena", regiao: "Chile", lat: -35.6, lng: -71.5, cor: cores.indigena },
    { nome: "Mitologia Chinesa", regiao: "China Antiga", lat: 35.8, lng: 104.1, cor: cores.asiatica },
    { nome: "Mitologia Colombiana", regiao: "Colômbia", lat: 4.5, lng: -74.3, cor: cores.indigena },
    { nome: "Mitologia Cristã", regiao: "Oriente Médio e Mediterrâneo", lat: 31.8, lng: 35.2, cor: cores.religiosa },
    { nome: "Mitologia Dinamarquesa", regiao: "Dinamarca", lat: 56.2, lng: 9.5, cor: cores.europeia },
    { nome: "Mitologia Dominicana", regiao: "República Dominicana", lat: 18.7, lng: -70.1, cor: cores.indigena },
    { nome: "Mitologia Egípcia", regiao: "Egito Antigo", lat: 26.8, lng: 30.8, cor: cores.africana },
    { nome: "Mitologia Escandinava", regiao: "Escandinávia", lat: 60.1, lng: 18.6, cor: cores.europeia },
    { nome: "Mitologia Escocesa", regiao: "Escócia", lat: 56.4, lng: -4.2, cor: cores.europeia },
    { nome: "Mitologia Eslava", regiao: "Leste Europeu", lat: 50.4, lng: 30.5, cor: cores.europeia },
    { nome: "Mitologia Europeia", regiao: "Europa", lat: 48.8, lng: 10.0, cor: cores.europeia },
    { nome: "Mitologia Filipina", regiao: "Filipinas", lat: 12.8, lng: 121.7, cor: cores.asiatica },
    { nome: "Mitologia Finlandesa", regiao: "Finlândia", lat: 61.9, lng: 25.7, cor: cores.europeia },
    { nome: "Mitologia Francesa", regiao: "França", lat: 46.2, lng: 2.2, cor: cores.europeia },
    { nome: "Mitologia Gaélica", regiao: "Irlanda e Escócia", lat: 53.4, lng: -8.2, cor: cores.europeia },
    { nome: "Mitologia Grega", regiao: "Grécia Antiga", lat: 39.0, lng: 21.8, cor: cores.mediterranea },
    { nome: "Mitologia Haitiana", regiao: "Haiti", lat: 18.9, lng: -72.3, cor: cores.indigena },
    { nome: "Mitologia Havaiana", regiao: "Havaí", lat: 19.8, lng: -155.5, cor: cores.oceanica },
    { nome: "Mitologia Heráldica Europeia", regiao: "Europa Medieval", lat: 47.0, lng: 8.0, cor: cores.europeia },
    { nome: "Mitologia Hindu", regiao: "Índia", lat: 22.9, lng: 78.9, cor: cores.asiatica },
    { nome: "Mitologia Holandesa", regiao: "Países Baixos", lat: 52.1, lng: 5.3, cor: cores.europeia },
    { nome: "Mitologia Húngara", regiao: "Hungria", lat: 47.1, lng: 19.5, cor: cores.europeia },
    { nome: "Mitologia Inca", regiao: "Andes", lat: -13.5, lng: -71.9, cor: cores.indigena },
    { nome: "Mitologia Indiana", regiao: "Índia", lat: 20.5, lng: 78.9, cor: cores.asiatica },
    { nome: "Mitologia Indonésia", regiao: "Indonésia", lat: -2.5, lng: 118.0, cor: cores.asiatica },
    { nome: "Mitologia Inglesa", regiao: "Inglaterra", lat: 52.3, lng: -1.5, cor: cores.europeia },
    { nome: "Mitologia Inuit", regiao: "Ártico", lat: 69.0, lng: -105.0, cor: cores.indigena },
    { nome: "Mitologia Iorubá", regiao: "Nigéria e Benim", lat: 7.4, lng: 3.9, cor: cores.africana },
    { nome: "Mitologia Irlandesa", regiao: "Irlanda", lat: 53.4, lng: -8.2, cor: cores.europeia },
    { nome: "Mitologia Japonesa", regiao: "Japão", lat: 36.2, lng: 138.2, cor: cores.asiatica },
    { nome: "Mitologia Judaica", regiao: "Levante", lat: 31.8, lng: 35.2, cor: cores.religiosa },
    { nome: "Mitologia Lituana", regiao: "Lituânia", lat: 55.1, lng: 23.9, cor: cores.europeia },
    { nome: "Mitologia Maia", regiao: "Mesoamérica", lat: 17.2, lng: -89.1, cor: cores.indigena },
    { nome: "Mitologia Malaia", regiao: "Península Malaia", lat: 4.2, lng: 102.0, cor: cores.asiatica },
    { nome: "Mitologia Maori", regiao: "Nova Zelândia", lat: -40.9, lng: 174.8, cor: cores.oceanica },
    { nome: "Mitologia Mesopotâmica", regiao: "Mesopotâmia", lat: 33.2, lng: 44.3, cor: cores.mediterranea },
    { nome: "Mitologia Mexicana", regiao: "México", lat: 23.6, lng: -102.5, cor: cores.indigena },
    { nome: "Mitologia Nórdica", regiao: "Escandinávia", lat: 60.1, lng: 18.6, cor: cores.europeia },
    { nome: "Mitologia Persa", regiao: "Pérsia", lat: 32.4, lng: 53.7, cor: cores.asiatica },
    { nome: "Mitologia Portuguesa", regiao: "Portugal", lat: 39.4, lng: -8.2, cor: cores.europeia },
    { nome: "Mitologia Romana", regiao: "Roma Antiga", lat: 41.9, lng: 12.5, cor: cores.mediterranea },
    { nome: "Mitologia Romena", regiao: "Romênia", lat: 45.9, lng: 24.9, cor: cores.europeia },
    { nome: "Mitologia Tibetana", regiao: "Tibete", lat: 31.6, lng: 88.0, cor: cores.asiatica },
    { nome: "Mitologia Tupi-Guarani", regiao: "Brasil e América do Sul", lat: -15.8, lng: -47.9, cor: cores.indigena },
    { nome: "Mitologia Turca", regiao: "Anatólia e Ásia Central", lat: 39.0, lng: 35.2, cor: cores.asiatica },
    { nome: "Mitologia Umbanda", regiao: "Brasil", lat: -22.9, lng: -43.2, cor: cores.indigena }
];

    const globe = Globe()(globeContainer)
        .width(globeContainer.offsetWidth)
        .height(520)
        .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-night.jpg")
        .backgroundColor("rgba(0,0,0,0)")
        .pointsData(mitologias)
        .pointLat("lat")
        .pointLng("lng")
        .pointColor("cor")
        .pointAltitude(0.06)
        .pointRadius(0.45)
        .pointLabel(d => `
            <div class="globe-tooltip">
                ${d.nome} - ${d.regiao}
            </div>
        `);

    globe.controls().autoRotate = false;
    globe.controls().enableZoom = true;
    globe.controls().enableDamping = true;
    globe.controls().dampingFactor = 0.08;

    window.addEventListener("resize", () => {
        globe.width(globeContainer.offsetWidth);
    });
});