/* =====================================================
   TIMELINE DAS MITOLOGIAS
   -----------------------------------------------------
   Ajustes aplicados:
   - Dados congelados com Object.freeze()
   - Seletores centralizados em constantes
   - Remoção de innerHTML += dentro do loop
   - Renderização otimizada com map().join("")
   - Funções separadas por responsabilidade
   - Cálculo automático do gap real do CSS
   - Controles de navegação organizados
   - Botões desabilitados no início/fim da timeline
   - Melhor suporte para resize
   - Melhor acessibilidade nas imagens e botões
===================================================== */

(() => {
    "use strict";

    /* =====================================================
       CONFIGURAÇÕES GERAIS
    ===================================================== */

    const TIMELINE_SELECTORS = Object.freeze({
        track: "#mythologyTimelineTrack",
        wrapper: ".mythology-timeline-wrapper",
        item: ".mythology-timeline-item",
        prevButton: ".timeline-prev",
        nextButton: ".timeline-next"
    });

    const TIMELINE_SETTINGS = Object.freeze({
        fallbackScrollAmount: 300,
        scrollBehavior: "smooth",
        resizeDebounceDelay: 180,
        disabledClass: "is-disabled"
    });

    /* =====================================================
       DADOS DA TIMELINE
    ===================================================== */

    const mythologyTimelineItems = Object.freeze([
        {
            date: "50.000 a.C.",
            era: "Povos Originários da Austrália",
            icon: "./assets/images/mitologia/page-icones-mitologicos/aborigene.png",
            alt: "Símbolo da Mitologia Aborígene",
            title: "Aborígene"
        },
        {
            date: "12.000 a.C.",
            era: "Povos Originários das Américas",
            icon: "./assets/images/mitologia/page-icones-mitologicos/americana.png",
            alt: "Símbolo da Mitologia Americana",
            title: "Americana"
        },
        {
            date: "10.000 a.C.",
            era: "África Ancestral",
            icon: "./assets/images/mitologia/page-icones-mitologicos/africana.png",
            alt: "Símbolo da Mitologia Africana",
            title: "Africana"
        },
        {
            date: "4000 a.C.",
            era: "Primeiras Civilizações",
            icon: "./assets/images/mitologia/page-icones-mitologicos/mesopotamica.png",
            alt: "Símbolo da Mitologia Mesopotâmica",
            title: "Mesopotâmica"
        },
        {
            date: "3500 a.C.",
            era: "Era Antiga",
            icon: "./assets/images/mitologia/page-icones-mitologicos/egipcia.png",
            alt: "Símbolo da Mitologia Egípcia",
            title: "Egípcia"
        },
        {
            date: "3000 a.C.",
            era: "América do Sul",
            icon: "./assets/images/mitologia/page-icones-mitologicos/tupi-guarani.png",
            alt: "Símbolo da Mitologia Tupi-Guarani",
            title: "Tupi-Guarani"
        },
        {
            date: "2500 a.C.",
            era: "Ásia Antiga",
            icon: "./assets/images/mitologia/page-icones-mitologicos/indiana.png",
            alt: "Símbolo da Mitologia Indiana",
            title: "Indiana"
        },
        {
            date: "2500 a.C.",
            era: "Ártico",
            icon: "./assets/images/mitologia/page-icones-mitologicos/inuit.png",
            alt: "Símbolo da Mitologia Inuit",
            title: "Inuit"
        },
        {
            date: "2000 a.C.",
            era: "Ásia Antiga",
            icon: "./assets/images/mitologia/page-icones-mitologicos/hindu.png",
            alt: "Símbolo da Mitologia Hindu",
            title: "Hindu"
        },
        {
            date: "1800 a.C.",
            era: "Oriente Antigo",
            icon: "./assets/images/mitologia/page-icones-mitologicos/persa.png",
            alt: "Símbolo da Mitologia Persa",
            title: "Persa"
        },
        {
            date: "1600 a.C.",
            era: "Ásia Antiga",
            icon: "./assets/images/mitologia/page-icones-mitologicos/chinesa.png",
            alt: "Símbolo da Mitologia Chinesa",
            title: "Chinesa"
        },
        {
            date: "1500 a.C.",
            era: "Tradições Abraâmicas",
            icon: "./assets/images/mitologia/page-icones-mitologicos/judaica.png",
            alt: "Símbolo da Mitologia Judaica",
            title: "Judaica"
        },
        {
            date: "1400 a.C.",
            era: "Mediterrâneo",
            icon: "./assets/images/mitologia/page-icones-mitologicos/grega.png",
            alt: "Símbolo da Mitologia Grega",
            title: "Grega"
        },
        {
            date: "1200 a.C.",
            era: "Ásia Oriental",
            icon: "./assets/images/mitologia/page-icones-mitologicos/japonesa.png",
            alt: "Símbolo da Mitologia Japonesa",
            title: "Japonesa"
        },
        {
            date: "1000 a.C.",
            era: "Europa Antiga",
            icon: "./assets/images/mitologia/page-icones-mitologicos/celta.png",
            alt: "Símbolo da Mitologia Celta",
            title: "Celta"
        },
        {
            date: "900 a.C.",
            era: "Mediterrâneo",
            icon: "./assets/images/mitologia/page-icones-mitologicos/romana.png",
            alt: "Símbolo da Mitologia Romana",
            title: "Romana"
        },
        {
            date: "800 a.C.",
            era: "Oriente Médio",
            icon: "./assets/images/mitologia/page-icones-mitologicos/arabe.png",
            alt: "Símbolo da Mitologia Árabe",
            title: "Árabe"
        },
        {
            date: "700 a.C.",
            era: "Ásia",
            icon: "./assets/images/mitologia/page-icones-mitologicos/tibetana.png",
            alt: "Símbolo da Mitologia Tibetana",
            title: "Tibetana"
        },
        {
            date: "600 a.C.",
            era: "Ásia",
            icon: "./assets/images/mitologia/page-icones-mitologicos/budista.png",
            alt: "Símbolo da Mitologia Budista",
            title: "Budista"
        },
        {
            date: "500 a.C.",
            era: "Europa",
            icon: "./assets/images/mitologia/page-icones-mitologicos/basca.png",
            alt: "Símbolo da Mitologia Basca",
            title: "Basca"
        },
        {
            date: "500 a.C.",
            era: "África Ocidental",
            icon: "./assets/images/mitologia/page-icones-mitologicos/ioruba.png",
            alt: "Símbolo da Mitologia Iorubá",
            title: "Iorubá"
        },
        {
            date: "500 a.C.",
            era: "Civilizações Americanas",
            icon: "./assets/images/mitologia/page-icones-mitologicos/maia.png",
            alt: "Símbolo da Mitologia Maia",
            title: "Maia"
        },
        {
            date: "400 a.C.",
            era: "Europa Celta",
            icon: "./assets/images/mitologia/page-icones-mitologicos/gaelica.png",
            alt: "Símbolo da Mitologia Gaélica",
            title: "Gaélica"
        },
        {
            date: "300 a.C.",
            era: "Europa do Norte",
            icon: "./assets/images/mitologia/page-icones-mitologicos/escandinava.png",
            alt: "Símbolo da Mitologia Escandinava",
            title: "Escandinava"
        },
        {
            date: "300 a.C.",
            era: "Europa Celta",
            icon: "./assets/images/mitologia/page-icones-mitologicos/escocesa.png",
            alt: "Símbolo da Mitologia Escocesa",
            title: "Escocesa"
        },
        {
            date: "300 a.C.",
            era: "Europa Oriental",
            icon: "./assets/images/mitologia/page-icones-mitologicos/eslava.png",
            alt: "Símbolo da Mitologia Eslava",
            title: "Eslava"
        },
        {
            date: "300 a.C.",
            era: "Europa Celta",
            icon: "./assets/images/mitologia/page-icones-mitologicos/irlandesa.png",
            alt: "Símbolo da Mitologia Irlandesa",
            title: "Irlandesa"
        },
        {
            date: "300 a.C.",
            era: "Europa do Norte",
            icon: "./assets/images/mitologia/page-icones-mitologicos/nordica.png",
            alt: "Símbolo da Mitologia Nórdica",
            title: "Nórdica"
        },
        {
            date: "200 a.C.",
            era: "Europa do Norte",
            icon: "./assets/images/mitologia/page-icones-mitologicos/dinamarquesa.png",
            alt: "Símbolo da Mitologia Dinamarquesa",
            title: "Dinamarquesa"
        },
        {
            date: "200 a.C.",
            era: "Europa do Norte",
            icon: "./assets/images/mitologia/page-icones-mitologicos/finlandesa.png",
            alt: "Símbolo da Mitologia Finlandesa",
            title: "Finlandesa"
        },
        {
            date: "100 a.C.",
            era: "Europa Báltica",
            icon: "./assets/images/mitologia/page-icones-mitologicos/lituana.png",
            alt: "Símbolo da Mitologia Lituana",
            title: "Lituana"
        },
        {
            date: "1 d.C.",
            era: "Cristianismo",
            icon: "./assets/images/mitologia/page-icones-mitologicos/crista.png",
            alt: "Símbolo da Cosmologia Bíblica",
            title: "Cristã"
        },
        {
            date: "100 d.C.",
            era: "América do Norte",
            icon: "./assets/images/mitologia/page-icones-mitologicos/abenaki.png",
            alt: "Símbolo da Mitologia Abenaki",
            title: "Abenaki"
        },
        {
            date: "100 d.C.",
            era: "Mesoamérica",
            icon: "./assets/images/mitologia/page-icones-mitologicos/asteca.png",
            alt: "Símbolo da Mitologia Asteca",
            title: "Asteca"
        },
        {
            date: "300 d.C.",
            era: "Andes",
            icon: "./assets/images/mitologia/page-icones-mitologicos/inca.png",
            alt: "Símbolo da Mitologia Inca",
            title: "Inca"
        },
        {
            date: "400 d.C.",
            era: "Polinésia",
            icon: "./assets/images/mitologia/page-icones-mitologicos/havaiana.png",
            alt: "Símbolo da Mitologia Havaiana",
            title: "Havaiana"
        },
        {
            date: "500 d.C.",
            era: "Ásia Central",
            icon: "./assets/images/mitologia/page-icones-mitologicos/turca.png",
            alt: "Símbolo da Mitologia Turca",
            title: "Turca"
        },
        {
            date: "600 d.C.",
            era: "Ásia-Pacífico",
            icon: "./assets/images/mitologia/page-icones-mitologicos/filipina.png",
            alt: "Símbolo da Mitologia Filipina",
            title: "Filipina"
        },
        {
            date: "700 d.C.",
            era: "Ásia-Pacífico",
            icon: "./assets/images/mitologia/page-icones-mitologicos/indonesia.png",
            alt: "Símbolo da Mitologia Indonésia",
            title: "Indonésia"
        },
        {
            date: "800 d.C.",
            era: "Ásia-Pacífico",
            icon: "./assets/images/mitologia/page-icones-mitologicos/malaia.png",
            alt: "Símbolo da Mitologia Malaia",
            title: "Malaia"
        },
        {
            date: "900 d.C.",
            era: "Europa",
            icon: "./assets/images/mitologia/page-icones-mitologicos/hungara.png",
            alt: "Símbolo da Mitologia Húngara",
            title: "Húngara"
        },
        {
            date: "1000 d.C.",
            era: "Europa",
            icon: "./assets/images/mitologia/page-icones-mitologicos/alema.png",
            alt: "Símbolo da Mitologia Alemã",
            title: "Alemã"
        },
        {
            date: "1000 d.C.",
            era: "Europa",
            icon: "./assets/images/mitologia/page-icones-mitologicos/europeia.png",
            alt: "Símbolo da Mitologia Europeia",
            title: "Europeia"
        },
        {
            date: "1000 d.C.",
            era: "Europa",
            icon: "./assets/images/mitologia/page-icones-mitologicos/francesa.png",
            alt: "Símbolo da Mitologia Francesa",
            title: "Francesa"
        },
        {
            date: "1000 d.C.",
            era: "Europa",
            icon: "./assets/images/mitologia/page-icones-mitologicos/holandesa.png",
            alt: "Símbolo da Mitologia Holandesa",
            title: "Holandesa"
        },
        {
            date: "1000 d.C.",
            era: "Europa",
            icon: "./assets/images/mitologia/page-icones-mitologicos/inglesa.png",
            alt: "Símbolo da Mitologia Inglesa",
            title: "Inglesa"
        },
        {
            date: "1000 d.C.",
            era: "Europa",
            icon: "./assets/images/mitologia/page-icones-mitologicos/portuguesa.png",
            alt: "Símbolo da Mitologia Portuguesa",
            title: "Portuguesa"
        },
        {
            date: "1100 d.C.",
            era: "Europa Medieval",
            icon: "./assets/images/mitologia/page-icones-mitologicos/heraldica-europeia.png",
            alt: "Símbolo da Mitologia Heráldica Europeia",
            title: "Heráldica Europeia"
        },
        {
            date: "1200 d.C.",
            era: "Américas",
            icon: "./assets/images/mitologia/page-icones-mitologicos/argentina.png",
            alt: "Símbolo da Mitologia Argentina",
            title: "Argentina"
        },
        {
            date: "1200 d.C.",
            era: "Caribe",
            icon: "./assets/images/mitologia/page-icones-mitologicos/caribenha.png",
            alt: "Símbolo da Mitologia Caribenha",
            title: "Caribenha"
        },
        {
            date: "1200 d.C.",
            era: "Europa",
            icon: "./assets/images/mitologia/page-icones-mitologicos/catala.png",
            alt: "Símbolo da Mitologia Catalã",
            title: "Catalã"
        },
        {
            date: "1200 d.C.",
            era: "Américas",
            icon: "./assets/images/mitologia/page-icones-mitologicos/chilena.png",
            alt: "Símbolo da Mitologia Chilena",
            title: "Chilena"
        },
        {
            date: "1200 d.C.",
            era: "Américas",
            icon: "./assets/images/mitologia/page-icones-mitologicos/colombiana.png",
            alt: "Símbolo da Mitologia Colombiana",
            title: "Colombiana"
        },
        {
            date: "1200 d.C.",
            era: "Caribe",
            icon: "./assets/images/mitologia/page-icones-mitologicos/dominicana.png",
            alt: "Símbolo da Mitologia Dominicana",
            title: "Dominicana"
        },
        {
            date: "1200 d.C.",
            era: "Caribe",
            icon: "./assets/images/mitologia/page-icones-mitologicos/haitiana.png",
            alt: "Símbolo da Mitologia Haitiana",
            title: "Haitiana"
        },
        {
            date: "1200 d.C.",
            era: "Américas",
            icon: "./assets/images/mitologia/page-icones-mitologicos/mexicana.png",
            alt: "Símbolo da Mitologia Mexicana",
            title: "Mexicana"
        },
        {
            date: "1200 d.C.",
            era: "Europa Oriental",
            icon: "./assets/images/mitologia/page-icones-mitologicos/romena.png",
            alt: "Símbolo da Mitologia Romena",
            title: "Romena"
        },
        {
            date: "1250 d.C.",
            era: "Polinésia",
            icon: "./assets/images/mitologia/page-icones-mitologicos/maori.png",
            alt: "Símbolo da Mitologia Maori",
            title: "Maori"
        }
    ]);

    /* =====================================================
       UTILITÁRIOS
    ===================================================== */

    function debounce(callback, delay = TIMELINE_SETTINGS.resizeDebounceDelay) {
        let timeoutId;

        return function (...args) {
            window.clearTimeout(timeoutId);

            timeoutId = window.setTimeout(() => {
                callback.apply(this, args);
            }, delay);
        };
    }

    function getElement(selector, parent = document) {
        return parent.querySelector(selector);
    }

    function setButtonState(button, isDisabled) {
        button.disabled = isDisabled;
        button.setAttribute("aria-disabled", String(isDisabled));
        button.classList.toggle(TIMELINE_SETTINGS.disabledClass, isDisabled);
    }

    /* =====================================================
       RENDERIZAÇÃO
    ===================================================== */

    function createTimelineItemTemplate(item) {
        return `
            <article class="mythology-timeline-item">
                <span class="timeline-date">${item.date}</span>
                <span class="timeline-era">${item.era}</span>

                <div class="timeline-point" aria-hidden="true"></div>

                <img
                    class="timeline-symbol"
                    src="${item.icon}"
                    alt="${item.alt}"
                    loading="lazy"
                    decoding="async"
                >

                <h3>${item.title}</h3>
            </article>
        `;
    }

    function renderTimeline(track, items) {
        if (!track || !items.length) return;

        track.innerHTML = items
            .map(createTimelineItemTemplate)
            .join("");
    }

    /* =====================================================
       CÁLCULO DE MOVIMENTO
    ===================================================== */

    function getTimelineGap(track) {
        if (!track) return 0;

        const trackStyles = window.getComputedStyle(track);
        const gap = parseFloat(trackStyles.columnGap || trackStyles.gap);

        return Number.isNaN(gap) ? 0 : gap;
    }

    function getScrollAmount(track) {
        const firstItem = getElement(TIMELINE_SELECTORS.item, track);

        if (!firstItem) {
            return TIMELINE_SETTINGS.fallbackScrollAmount;
        }

        return firstItem.offsetWidth + getTimelineGap(track);
    }

    function scrollTimeline(wrapper, track, direction) {
        const scrollAmount = getScrollAmount(track);

        wrapper.scrollBy({
            left: scrollAmount * direction,
            behavior: TIMELINE_SETTINGS.scrollBehavior
        });
    }

    /* =====================================================
       ESTADO DOS CONTROLES
    ===================================================== */

    function updateTimelineButtons(wrapper, prevButton, nextButton) {
        const scrollStart = wrapper.scrollLeft <= 1;
        const scrollEnd =
            wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth - 1;

        setButtonState(prevButton, scrollStart);
        setButtonState(nextButton, scrollEnd);
    }

    function initTimelineControls(wrapper, track, prevButton, nextButton) {
        if (!wrapper || !track || !prevButton || !nextButton) return;

        prevButton.setAttribute("aria-label", "Voltar na timeline de mitologias");
        nextButton.setAttribute("aria-label", "Avançar na timeline de mitologias");

        prevButton.addEventListener("click", () => {
            scrollTimeline(wrapper, track, -1);
        });

        nextButton.addEventListener("click", () => {
            scrollTimeline(wrapper, track, 1);
        });

        wrapper.addEventListener("scroll", () => {
            updateTimelineButtons(wrapper, prevButton, nextButton);
        });

        window.addEventListener(
            "resize",
            debounce(() => {
                updateTimelineButtons(wrapper, prevButton, nextButton);
            })
        );

        updateTimelineButtons(wrapper, prevButton, nextButton);
    }

    /* =====================================================
       INICIALIZAÇÃO
    ===================================================== */

    function initMythologyTimeline() {
        const track = getElement(TIMELINE_SELECTORS.track);
        const wrapper = getElement(TIMELINE_SELECTORS.wrapper);
        const prevButton = getElement(TIMELINE_SELECTORS.prevButton);
        const nextButton = getElement(TIMELINE_SELECTORS.nextButton);

        if (!track) return;

        renderTimeline(track, mythologyTimelineItems);
        initTimelineControls(wrapper, track, prevButton, nextButton);
    }

    document.addEventListener("DOMContentLoaded", initMythologyTimeline);
})();