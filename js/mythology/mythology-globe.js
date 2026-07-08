/* =====================================================
   MYTHOLOGY-GLOBE.JS — BESTIÁRIO
   -----------------------------------------------------
   Página: Mitologias
   Seção: Globo Interativo / Mapa das Origens

   Objetivo do arquivo:
   - inicializar o globo interativo da página de Mitologias;
   - renderizar pontos geográficos das mitologias;
   - exibir tooltip com nome e região;
   - manter responsividade com ResizeObserver;
   - preparar navegação futura para páginas individuais.

   Observações:
   - este arquivo depende das bibliotecas Three.js e Globe.gl;
   - o HTML precisa conter o elemento #mythologyGlobe;
   - as cores seguem a legenda visual da seção "Mapa das Origens".
===================================================== */

/* =====================================================
   1. CONFIGURAÇÕES GERAIS
===================================================== */

const SELECTORS = Object.freeze({
    globe: "#mythologyGlobe"
});

const GLOBE_TEXTURE =
    "https://unpkg.com/three-globe/example/img/earth-night.jpg";

const GLOBE_BACKGROUND =
    "rgba(0, 0, 0, 0)";

const GLOBE_BREAKPOINTS = Object.freeze({
    smallMobile: 420,
    mobile: 768,
    tablet: 1200
});

const GLOBE_HEIGHTS = Object.freeze({
    smallMobile: 320,
    mobile: 360,
    tablet: 450,
    desktop: 520
});

const GLOBE_SETTINGS = Object.freeze({
    pointAltitude: 0.01,
    pointRadius: 0.35,
    resizeDelay: 180,
    dampingFactor: 0.08
});

const GLOBE_COLORS = Object.freeze({
    europeia: "#4b8dff",
    asiatica: "#b15cff",
    africana: "#ff7b2c",
    indigena: "#7cc957",
    oceanica: "#4fd1c5",
    mediterranea: "#f2b84b",
    religiosa: "#ffffff"
});

/* =====================================================
   2. DADOS DO GLOBO
   -----------------------------------------------------
   Cada ponto representa uma mitologia no mapa.
   A propriedade "url" já prepara navegação futura.
   Enquanto a página individual não existir, mantenha "#".
===================================================== */

const MYTHOLOGY_POINTS = Object.freeze([
    { name: "Mitologia Abenaki", region: "Povos Abenaki - Nordeste da América do Norte", lat: 45.0, lng: -72.7, color: GLOBE_COLORS.indigena, url: "#" },
    { name: "Mitologia Aborígene", region: "Austrália", lat: -25.2, lng: 133.7, color: GLOBE_COLORS.oceanica, url: "#" },
    { name: "Mitologia Africana", region: "África Subsaariana", lat: 1.6, lng: 17.8, color: GLOBE_COLORS.africana, url: "#" },
    { name: "Mitologia Alemã", region: "Alemanha", lat: 51.1, lng: 10.4, color: GLOBE_COLORS.europeia, url: "#" },
    { name: "Mitologia Americana", region: "Estados Unidos", lat: 39.8, lng: -98.5, color: GLOBE_COLORS.indigena, url: "#" },
    { name: "Mitologia Árabe", region: "Península Arábica", lat: 23.8, lng: 45.0, color: GLOBE_COLORS.asiatica, url: "#" },
    { name: "Mitologia Argentina", region: "Argentina", lat: -38.4, lng: -63.6, color: GLOBE_COLORS.indigena, url: "#" },
    { name: "Mitologia Asteca", region: "México Central", lat: 19.4, lng: -99.1, color: GLOBE_COLORS.indigena, url: "#" },
    { name: "Mitologia Basca", region: "País Basco", lat: 43.0, lng: -2.6, color: GLOBE_COLORS.europeia, url: "#" },
    { name: "Mitologia Budista", region: "Índia e Ásia", lat: 24.7, lng: 84.9, color: GLOBE_COLORS.asiatica, url: "#" },
    { name: "Mitologia Caribenha", region: "Caribe", lat: 18.2, lng: -66.5, color: GLOBE_COLORS.indigena, url: "#" },
    { name: "Mitologia Catalã", region: "Catalunha", lat: 41.6, lng: 1.5, color: GLOBE_COLORS.europeia, url: "#" },
    { name: "Mitologia Celta", region: "Europa Ocidental", lat: 53.4, lng: -7.8, color: GLOBE_COLORS.europeia, url: "#" },
    { name: "Mitologia Chilena", region: "Chile", lat: -35.6, lng: -71.5, color: GLOBE_COLORS.indigena, url: "#" },
    { name: "Mitologia Chinesa", region: "China Antiga", lat: 35.8, lng: 104.1, color: GLOBE_COLORS.asiatica, url: "#" },
    { name: "Mitologia Colombiana", region: "Colômbia", lat: 4.5, lng: -74.3, color: GLOBE_COLORS.indigena, url: "#" },
    { name: "Cosmologia Bíblica", region: "Oriente Médio e Mediterrâneo", lat: 31.8, lng: 35.2, color: GLOBE_COLORS.religiosa, url: "#" },
    { name: "Mitologia Dinamarquesa", region: "Dinamarca", lat: 56.2, lng: 9.5, color: GLOBE_COLORS.europeia, url: "#" },
    { name: "Mitologia Dominicana", region: "República Dominicana", lat: 18.7, lng: -70.1, color: GLOBE_COLORS.indigena, url: "#" },
    { name: "Mitologia Egípcia", region: "Egito Antigo", lat: 26.8, lng: 30.8, color: GLOBE_COLORS.africana, url: "#" },
    { name: "Mitologia Escandinava", region: "Escandinávia", lat: 60.1, lng: 18.6, color: GLOBE_COLORS.europeia, url: "#" },
    { name: "Mitologia Escocesa", region: "Escócia", lat: 56.4, lng: -4.2, color: GLOBE_COLORS.europeia, url: "#" },
    { name: "Mitologia Eslava", region: "Leste Europeu", lat: 50.4, lng: 30.5, color: GLOBE_COLORS.europeia, url: "#" },
    { name: "Mitologia Europeia", region: "Europa", lat: 48.8, lng: 10.0, color: GLOBE_COLORS.europeia, url: "#" },
    { name: "Mitologia Filipina", region: "Filipinas", lat: 12.8, lng: 121.7, color: GLOBE_COLORS.asiatica, url: "#" },
    { name: "Mitologia Finlandesa", region: "Finlândia", lat: 61.9, lng: 25.7, color: GLOBE_COLORS.europeia, url: "#" },
    { name: "Mitologia Francesa", region: "França", lat: 46.2, lng: 2.2, color: GLOBE_COLORS.europeia, url: "#" },
    { name: "Mitologia Gaélica", region: "Irlanda e Escócia", lat: 53.4, lng: -8.2, color: GLOBE_COLORS.europeia, url: "#" },
    { name: "Mitologia Grega", region: "Grécia Antiga", lat: 39.0, lng: 21.8, color: GLOBE_COLORS.mediterranea, url: "#" },
    { name: "Mitologia Haitiana", region: "Haiti", lat: 18.9, lng: -72.3, color: GLOBE_COLORS.indigena, url: "#" },
    { name: "Mitologia Havaiana", region: "Havaí", lat: 19.8, lng: -155.5, color: GLOBE_COLORS.oceanica, url: "#" },
    { name: "Mitologia Heráldica Europeia", region: "Europa Medieval", lat: 47.0, lng: 8.0, color: GLOBE_COLORS.europeia, url: "#" },
    { name: "Mitologia Hindu", region: "Índia", lat: 22.9, lng: 78.9, color: GLOBE_COLORS.asiatica, url: "#" },
    { name: "Mitologia Holandesa", region: "Países Baixos", lat: 52.1, lng: 5.3, color: GLOBE_COLORS.europeia, url: "#" },
    { name: "Mitologia Húngara", region: "Hungria", lat: 47.1, lng: 19.5, color: GLOBE_COLORS.europeia, url: "#" },
    { name: "Mitologia Inca", region: "Andes", lat: -13.5, lng: -71.9, color: GLOBE_COLORS.indigena, url: "#" },
    { name: "Mitologia Indiana", region: "Índia", lat: 20.5, lng: 78.9, color: GLOBE_COLORS.asiatica, url: "#" },
    { name: "Mitologia Indonésia", region: "Indonésia", lat: -2.5, lng: 118.0, color: GLOBE_COLORS.asiatica, url: "#" },
    { name: "Mitologia Inglesa", region: "Inglaterra", lat: 52.3, lng: -1.5, color: GLOBE_COLORS.europeia, url: "#" },
    { name: "Mitologia Inuit", region: "Ártico", lat: 69.0, lng: -105.0, color: GLOBE_COLORS.indigena, url: "#" },
    { name: "Mitologia Iorubá", region: "Nigéria e Benim", lat: 7.4, lng: 3.9, color: GLOBE_COLORS.africana, url: "#" },
    { name: "Mitologia Irlandesa", region: "Irlanda", lat: 53.4, lng: -8.2, color: GLOBE_COLORS.europeia, url: "#" },
    { name: "Mitologia Japonesa", region: "Japão", lat: 36.2, lng: 138.2, color: GLOBE_COLORS.asiatica, url: "#" },
    { name: "Mitologia Judaica", region: "Levante", lat: 31.8, lng: 35.2, color: GLOBE_COLORS.religiosa, url: "#" },
    { name: "Mitologia Lituana", region: "Lituânia", lat: 55.1, lng: 23.9, color: GLOBE_COLORS.europeia, url: "#" },
    { name: "Mitologia Maia", region: "Mesoamérica", lat: 17.2, lng: -89.1, color: GLOBE_COLORS.indigena, url: "#" },
    { name: "Mitologia Malaia", region: "Península Malaia", lat: 4.2, lng: 102.0, color: GLOBE_COLORS.asiatica, url: "#" },
    { name: "Mitologia Maori", region: "Nova Zelândia", lat: -40.9, lng: 174.8, color: GLOBE_COLORS.oceanica, url: "#" },
    { name: "Mitologia Mesopotâmica", region: "Mesopotâmia", lat: 33.2, lng: 44.3, color: GLOBE_COLORS.mediterranea, url: "#" },
    { name: "Mitologia Mexicana", region: "México", lat: 23.6, lng: -102.5, color: GLOBE_COLORS.indigena, url: "#" },
    { name: "Mitologia Nórdica", region: "Escandinávia", lat: 60.1, lng: 18.6, color: GLOBE_COLORS.europeia, url: "#" },
    { name: "Mitologia Persa", region: "Pérsia", lat: 32.4, lng: 53.7, color: GLOBE_COLORS.asiatica, url: "#" },
    { name: "Mitologia Portuguesa", region: "Portugal", lat: 39.4, lng: -8.2, color: GLOBE_COLORS.europeia, url: "#" },
    { name: "Mitologia Romana", region: "Roma Antiga", lat: 41.9, lng: 12.5, color: GLOBE_COLORS.mediterranea, url: "#" },
    { name: "Mitologia Romena", region: "Romênia", lat: 45.9, lng: 24.9, color: GLOBE_COLORS.europeia, url: "#" },
    { name: "Mitologia Tibetana", region: "Tibete", lat: 31.6, lng: 88.0, color: GLOBE_COLORS.asiatica, url: "#" },
    { name: "Mitologia Tupi-Guarani", region: "Brasil e América do Sul", lat: -15.8, lng: -47.9, color: GLOBE_COLORS.indigena, url: "#" },
    { name: "Mitologia Turca", region: "Anatólia e Ásia Central", lat: 39.0, lng: 35.2, color: GLOBE_COLORS.asiatica, url: "#" }
]);

/* =====================================================
   3. UTILITÁRIOS
===================================================== */

/**
 * Evita que uma função seja executada várias vezes em sequência.
 * Útil para resize, scroll e eventos disparados muitas vezes.
 */
function debounce(callback, delay = GLOBE_SETTINGS.resizeDelay) {
    let timeoutId;

    return function debouncedFunction(...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    };
}

/**
 * Escapa caracteres especiais para reduzir risco caso os dados
 * sejam futuramente carregados por API ou CMS.
 */
function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

/* =====================================================
   4. FUNÇÕES AUXILIARES
===================================================== */

/**
 * Define a altura do globo de acordo com a largura da tela.
 */
function getGlobeHeight() {
    const width = window.innerWidth;

    if (width <= GLOBE_BREAKPOINTS.smallMobile) {
        return GLOBE_HEIGHTS.smallMobile;
    }

    if (width <= GLOBE_BREAKPOINTS.mobile) {
        return GLOBE_HEIGHTS.mobile;
    }

    if (width <= GLOBE_BREAKPOINTS.tablet) {
        return GLOBE_HEIGHTS.tablet;
    }

    return GLOBE_HEIGHTS.desktop;
}

/**
 * Cria o tooltip exibido ao passar o mouse sobre um ponto.
 */
function createTooltip(point) {
    return `
        <div class="globe-tooltip">
            <strong>${escapeHTML(point.name)}</strong>
            <span>${escapeHTML(point.region)}</span>
        </div>
    `;
}

/**
 * Configura os controles do globo.
 */
function initControls(controls) {
    if (!controls) {
        return;
    }

    controls.autoRotate = false;
    controls.enableZoom = true;
    controls.enableDamping = true;
    controls.dampingFactor = GLOBE_SETTINGS.dampingFactor;
}

/**
 * Atualiza largura e altura do globo.
 */
function resizeGlobe(globe, globeContainer) {
    if (!globe || !globeContainer) {
        return;
    }

    globe
        .width(globeContainer.offsetWidth)
        .height(getGlobeHeight());
}

/**
 * Cria um observador para reagir ao tamanho real do container.
 * Fallback com window.resize para navegadores sem ResizeObserver.
 */
function observeGlobeResize(globe, globeContainer) {
    const handleResize = debounce(() => {
        resizeGlobe(globe, globeContainer);
    });

    if ("ResizeObserver" in window) {
        const resizeObserver = new ResizeObserver(handleResize);

        resizeObserver.observe(globeContainer);

        return resizeObserver;
    }

    window.addEventListener("resize", handleResize);

    return null;
}

/**
 * Prepara clique futuro nos pontos.
 * Quando a página individual existir, basta trocar url: "#"
 * por um caminho real, como "./mitologias/mitologia-grega.html".
 */
function handlePointClick(point) {
    if (!point || !point.url || point.url === "#") {
        return;
    }

    window.location.href = point.url;
}

/* =====================================================
   5. INICIALIZAÇÃO DO GLOBO
===================================================== */

function setupMythologyGlobe() {
    const globeContainer = document.querySelector(SELECTORS.globe);

    if (!globeContainer) {
        return;
    }

    if (typeof Globe === "undefined") {
        console.error("Biblioteca Globe.gl não carregada. Verifique os scripts CDN no HTML.");
        return;
    }

    const globe = Globe()(globeContainer)
        .width(globeContainer.offsetWidth)
        .height(getGlobeHeight())
        .globeImageUrl(GLOBE_TEXTURE)
        .backgroundColor(GLOBE_BACKGROUND)
        .pointsData(MYTHOLOGY_POINTS)
        .pointLat("lat")
        .pointLng("lng")
        .pointColor("color")
        .pointAltitude(GLOBE_SETTINGS.pointAltitude)
        .pointRadius(GLOBE_SETTINGS.pointRadius)
        .pointsMerge(false)
        .pointLabel(createTooltip)
        .onPointClick(handlePointClick);

    initControls(globe.controls());
    observeGlobeResize(globe, globeContainer);
}

/* =====================================================
   6. INICIALIZAÇÃO
===================================================== */

document.addEventListener("DOMContentLoaded", setupMythologyGlobe);
