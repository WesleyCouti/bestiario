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
       7. GLOBO INTERATIVO - MAPA DAS MITOLOGIAS
    ===================================================== */

    function setupMythologyGlobe() {
        const globeContainer = document.getElementById("mythologyGlobe");

        if (!globeContainer) {
            return;
        }

        if (typeof Globe === "undefined") {
            console.error("Biblioteca Globe.gl não carregada. Verifique o script CDN no HTML.");
            return;
        }

        const GLOBE_TEXTURE = "https://unpkg.com/three-globe/example/img/earth-night.jpg";

        /*
           Cores usadas nos marcadores do globo.
           Elas devem ser iguais às cores da legenda no HTML/CSS.
        */
        const cores = {
            europeia: "#4b8dff",
            asiatica: "#b15cff",
            africana: "#ff7b2c",
            indigena: "#7cc957",
            oceanica: "#4fd1c5",
            mediterranea: "#f2b84b",
            religiosa: "#ffffff",
        };

        /*
           Dados exibidos no globo.

           nome   -> Nome exibido no tooltip
           regiao -> Região cultural/origem aproximada
           lat    -> Latitude do ponto
           lng    -> Longitude do ponto
           cor    -> Família cultural da mitologia
        */
        const mitologias = [
            // Povos indígenas das Américas
            { nome: "Mitologia Abenaki", regiao: "Povos Abenaki - Nordeste da América do Norte", lat: 45.0, lng: -72.7, cor: cores.indigena },
            { nome: "Mitologia Americana", regiao: "Estados Unidos", lat: 39.8, lng: -98.5, cor: cores.indigena },
            { nome: "Mitologia Argentina", regiao: "Argentina", lat: -38.4, lng: -63.6, cor: cores.indigena },
            { nome: "Mitologia Asteca", regiao: "México Central", lat: 19.4, lng: -99.1, cor: cores.indigena },
            { nome: "Mitologia Brasileira", regiao: "Brasil", lat: -14.2, lng: -51.9, cor: cores.indigena },
            { nome: "Mitologia Caribenha", regiao: "Caribe", lat: 18.2, lng: -66.5, cor: cores.indigena },
            { nome: "Mitologia Chilena", regiao: "Chile", lat: -35.6, lng: -71.5, cor: cores.indigena },
            { nome: "Mitologia Colombiana", regiao: "Colômbia", lat: 4.5, lng: -74.3, cor: cores.indigena },
            { nome: "Mitologia Dominicana", regiao: "República Dominicana", lat: 18.7, lng: -70.1, cor: cores.indigena },
            { nome: "Mitologia Haitiana", regiao: "Haiti", lat: 18.9, lng: -72.3, cor: cores.indigena },
            { nome: "Mitologia Inca", regiao: "Andes", lat: -13.5, lng: -71.9, cor: cores.indigena },
            { nome: "Mitologia Inuit", regiao: "Ártico", lat: 69.0, lng: -105.0, cor: cores.indigena },
            { nome: "Mitologia Maia", regiao: "Mesoamérica", lat: 17.2, lng: -89.1, cor: cores.indigena },
            { nome: "Mitologia Mexicana", regiao: "México", lat: 23.6, lng: -102.5, cor: cores.indigena },
            { nome: "Mitologia Tupi-Guarani", regiao: "Brasil e América do Sul", lat: -15.8, lng: -47.9, cor: cores.indigena },
            { nome: "Mitologia Umbanda", regiao: "Brasil", lat: -22.9, lng: -43.2, cor: cores.indigena },

            // Mitologias europeias
            { nome: "Mitologia Alemã", regiao: "Alemanha", lat: 51.1, lng: 10.4, cor: cores.europeia },
            { nome: "Mitologia Basca", regiao: "País Basco", lat: 43.0, lng: -2.6, cor: cores.europeia },
            { nome: "Mitologia Catalã", regiao: "Catalunha", lat: 41.6, lng: 1.5, cor: cores.europeia },
            { nome: "Mitologia Celta", regiao: "Europa Ocidental", lat: 53.4, lng: -7.8, cor: cores.europeia },
            { nome: "Mitologia Dinamarquesa", regiao: "Dinamarca", lat: 56.2, lng: 9.5, cor: cores.europeia },
            { nome: "Mitologia Escandinava", regiao: "Escandinávia", lat: 60.1, lng: 18.6, cor: cores.europeia },
            { nome: "Mitologia Escocesa", regiao: "Escócia", lat: 56.4, lng: -4.2, cor: cores.europeia },
            { nome: "Mitologia Eslava", regiao: "Leste Europeu", lat: 50.4, lng: 30.5, cor: cores.europeia },
            { nome: "Mitologia Europeia", regiao: "Europa", lat: 48.8, lng: 10.0, cor: cores.europeia },
            { nome: "Mitologia Finlandesa", regiao: "Finlândia", lat: 61.9, lng: 25.7, cor: cores.europeia },
            { nome: "Mitologia Francesa", regiao: "França", lat: 46.2, lng: 2.2, cor: cores.europeia },
            { nome: "Mitologia Gaélica", regiao: "Irlanda e Escócia", lat: 53.4, lng: -8.2, cor: cores.europeia },
            { nome: "Mitologia Heráldica Europeia", regiao: "Europa Medieval", lat: 47.0, lng: 8.0, cor: cores.europeia },
            { nome: "Mitologia Holandesa", regiao: "Países Baixos", lat: 52.1, lng: 5.3, cor: cores.europeia },
            { nome: "Mitologia Húngara", regiao: "Hungria", lat: 47.1, lng: 19.5, cor: cores.europeia },
            { nome: "Mitologia Inglesa", regiao: "Inglaterra", lat: 52.3, lng: -1.5, cor: cores.europeia },
            { nome: "Mitologia Irlandesa", regiao: "Irlanda", lat: 53.4, lng: -8.2, cor: cores.europeia },
            { nome: "Mitologia Lituana", regiao: "Lituânia", lat: 55.1, lng: 23.9, cor: cores.europeia },
            { nome: "Mitologia Nórdica", regiao: "Escandinávia", lat: 60.1, lng: 18.6, cor: cores.europeia },
            { nome: "Mitologia Portuguesa", regiao: "Portugal", lat: 39.4, lng: -8.2, cor: cores.europeia },
            { nome: "Mitologia Romena", regiao: "Romênia", lat: 45.9, lng: 24.9, cor: cores.europeia },

            // Civilizações mediterrâneas
            { nome: "Mitologia Grega", regiao: "Grécia Antiga", lat: 39.0, lng: 21.8, cor: cores.mediterranea },
            { nome: "Mitologia Mesopotâmica", regiao: "Mesopotâmia", lat: 33.2, lng: 44.3, cor: cores.mediterranea },
            { nome: "Mitologia Romana", regiao: "Roma Antiga", lat: 41.9, lng: 12.5, cor: cores.mediterranea },

            // Mitologias africanas
            { nome: "Mitologia Africana", regiao: "África Subsaariana", lat: 1.6, lng: 17.8, cor: cores.africana },
            { nome: "Mitologia Egípcia", regiao: "Egito Antigo", lat: 26.8, lng: 30.8, cor: cores.africana },
            { nome: "Mitologia Iorubá", regiao: "Nigéria e Benim", lat: 7.4, lng: 3.9, cor: cores.africana },

            // Mitologias asiáticas
            { nome: "Mitologia Árabe", regiao: "Península Arábica", lat: 23.8, lng: 45.0, cor: cores.asiatica },
            { nome: "Mitologia Budista", regiao: "Índia e Ásia", lat: 24.7, lng: 84.9, cor: cores.asiatica },
            { nome: "Mitologia Chinesa", regiao: "China Antiga", lat: 35.8, lng: 104.1, cor: cores.asiatica },
            { nome: "Mitologia Filipina", regiao: "Filipinas", lat: 12.8, lng: 121.7, cor: cores.asiatica },
            { nome: "Mitologia Hindu", regiao: "Índia", lat: 22.9, lng: 78.9, cor: cores.asiatica },
            { nome: "Mitologia Indiana", regiao: "Índia", lat: 20.5, lng: 78.9, cor: cores.asiatica },
            { nome: "Mitologia Indonésia", regiao: "Indonésia", lat: -2.5, lng: 118.0, cor: cores.asiatica },
            { nome: "Mitologia Japonesa", regiao: "Japão", lat: 36.2, lng: 138.2, cor: cores.asiatica },
            { nome: "Mitologia Malaia", regiao: "Península Malaia", lat: 4.2, lng: 102.0, cor: cores.asiatica },
            { nome: "Mitologia Persa", regiao: "Pérsia", lat: 32.4, lng: 53.7, cor: cores.asiatica },
            { nome: "Mitologia Tibetana", regiao: "Tibete", lat: 31.6, lng: 88.0, cor: cores.asiatica },
            { nome: "Mitologia Turca", regiao: "Anatólia e Ásia Central", lat: 39.0, lng: 35.2, cor: cores.asiatica },

            // Mitologias oceânicas
            { nome: "Mitologia Aborígene", regiao: "Austrália", lat: -25.2, lng: 133.7, cor: cores.oceanica },
            { nome: "Mitologia Havaiana", regiao: "Havaí", lat: 19.8, lng: -155.5, cor: cores.oceanica },
            { nome: "Mitologia Maori", regiao: "Nova Zelândia", lat: -40.9, lng: 174.8, cor: cores.oceanica },

            // Tradições religiosas
            { nome: "Mitologia Cristã", regiao: "Oriente Médio e Mediterrâneo", lat: 31.8, lng: 35.2, cor: cores.religiosa },
            { nome: "Mitologia Judaica", regiao: "Levante", lat: 31.8, lng: 35.2, cor: cores.religiosa },
        ];

        function getGlobeHeight() {
            const width = window.innerWidth;

            if (width <= 420) return 320;
            if (width <= 768) return 360;
            if (width <= 1200) return 450;

            return 520;
        }

        const globe = Globe()(globeContainer)
            .width(globeContainer.offsetWidth)
            .height(getGlobeHeight())
            .globeImageUrl(GLOBE_TEXTURE)
            .backgroundColor("rgba(0,0,0,0)")
            .pointsData(mitologias)
            .pointLat("lat")
            .pointLng("lng")
            .pointColor("cor")
            .pointAltitude(0.01)
            .pointRadius(0.35)
            .pointsMerge(false)
            .pointLabel((d) => `
                <div class="globe-tooltip">
                    <strong>${d.nome}</strong>
                    <span>${d.regiao}</span>
                </div>
            `)
            .onPointClick((d) => {
                console.log(`${d.nome} - ${d.regiao}`);
            });

        const controls = globe.controls();

        controls.autoRotate = false;
        controls.enableZoom = true;
        controls.enableDamping = true;
        controls.dampingFactor = 0.08;

        window.addEventListener("resize", debounce(() => {
            globe
                .width(globeContainer.offsetWidth)
                .height(getGlobeHeight());
        }));
    }


    /* =====================================================
       8. INICIALIZAÇÃO GERAL
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