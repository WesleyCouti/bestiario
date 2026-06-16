/* =====================================================
   GLOBO INTERATIVO - MAPA DAS MITOLOGIAS
===================================================== */

function debounce(callback, delay = 250) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    };
}

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

    const cores = {
        europeia: "#4b8dff",
        asiatica: "#b15cff",
        africana: "#ff7b2c",
        indigena: "#7cc957",
        oceanica: "#4fd1c5",
        mediterranea: "#f2b84b",
        religiosa: "#ffffff",
    };

    const mitologias = [
        { nome: "Mitologia Abenaki", regiao: "Povos Abenaki - Nordeste da América do Norte", lat: 45.0, lng: -72.7, cor: cores.indigena },
        { nome: "Mitologia Americana", regiao: "Estados Unidos", lat: 39.8, lng: -98.5, cor: cores.indigena },
        { nome: "Mitologia Argentina", regiao: "Argentina", lat: -38.4, lng: -63.6, cor: cores.indigena },
        { nome: "Mitologia Asteca", regiao: "México Central", lat: 19.4, lng: -99.1, cor: cores.indigena },
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

        { nome: "Mitologia Grega", regiao: "Grécia Antiga", lat: 39.0, lng: 21.8, cor: cores.mediterranea },
        { nome: "Mitologia Mesopotâmica", regiao: "Mesopotâmia", lat: 33.2, lng: 44.3, cor: cores.mediterranea },
        { nome: "Mitologia Romana", regiao: "Roma Antiga", lat: 41.9, lng: 12.5, cor: cores.mediterranea },

        { nome: "Mitologia Africana", regiao: "África Subsaariana", lat: 1.6, lng: 17.8, cor: cores.africana },
        { nome: "Mitologia Egípcia", regiao: "Egito Antigo", lat: 26.8, lng: 30.8, cor: cores.africana },
        { nome: "Mitologia Iorubá", regiao: "Nigéria e Benim", lat: 7.4, lng: 3.9, cor: cores.africana },

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

        { nome: "Mitologia Aborígene", regiao: "Austrália", lat: -25.2, lng: 133.7, cor: cores.oceanica },
        { nome: "Mitologia Havaiana", regiao: "Havaí", lat: 19.8, lng: -155.5, cor: cores.oceanica },
        { nome: "Mitologia Maori", regiao: "Nova Zelândia", lat: -40.9, lng: 174.8, cor: cores.oceanica },

        { nome: "Cosmologia Bíblica", regiao: "Oriente Médio e Mediterrâneo", lat: 31.8, lng: 35.2, cor: cores.religiosa },
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

document.addEventListener("DOMContentLoaded", setupMythologyGlobe);
