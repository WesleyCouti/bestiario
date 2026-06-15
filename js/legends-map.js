/* =====================================================
   LEGENDS-MAP.JS
   Seção: Mapa das Lendas
===================================================== */

const DEFAULT_LEGEND_IMAGE = "./assets/images/legends/legends-section-map/default-legend.png";

const legendsMapData = {

    /* =====================================================
       AMÉRICAS
    ===================================================== */

    brasil: {
        region: "Américas",
        title: "Lendas do Brasil",
        image: "./assets/images/legends/legends-section-map/brasil-lendas.png",
        description: "Criaturas e histórias populares presentes no folclore brasileiro.",
        legends: [
            "Iara",
            "Curupira",
            "Saci-Pererê",
            "Boto Cor-de-Rosa",
            "Boitatá",
            "Cuca",
            "Mula Sem Cabeça",
            "Lobisomem"
        ]
    },

    mexico: {
        region: "Américas",
        title: "Lendas do México",
        image: "./assets/images/legends/cards/mexico-lendas.png",
        description: "Histórias misteriosas e criaturas sobrenaturais do folclore mexicano.",
        legends: [
            "La Llorona",
            "El Charro Negro",
            "Nahual",
            "Chaneques"
        ]
    },

    estadosUnidos: {
        region: "Américas",
        title: "Lendas dos Estados Unidos",
        image: "./assets/images/legends/cards/eua-lendas.png",
        description: "Criaturas misteriosas e lendas urbanas famosas pelo mundo.",
        legends: [
            "Pé-Grande",
            "Mothman",
            "Jersey Devil",
            "Bloody Mary"
        ]
    },

    canada: {
        region: "Américas",
        title: "Lendas do Canadá",
        image: "./assets/images/legends/cards/canada-lendas.png",
        description: "Seres ancestrais ligados às florestas e montanhas do norte.",
        legends: [
            "Wendigo",
            "Ogopogo",
            "Sasquatch"
        ]
    },

    peru: {
        region: "Américas",
        title: "Lendas do Peru",
        image: "./assets/images/legends/cards/peru-lendas.png",
        description: "Mistérios e espíritos das antigas tradições andinas.",
        legends: [
            "Amaru",
            "Pishtaco",
            "Muki"
        ]
    },

    /* =====================================================
       EUROPA
    ===================================================== */

    reinoUnido: {
        region: "Europa",
        title: "Lendas do Reino Unido",
        image: "./assets/images/legends/cards/reino-unido-lendas.png",
        description: "Histórias lendárias ligadas a reis, espadas sagradas e antigos mistérios europeus.",
        legends: [
            "Rei Artur",
            "Merlin",
            "Dama do Lago"
        ]
    },

    grecia: {
        region: "Europa",
        title: "Lendas da Grécia",
        image: "./assets/images/legends/cards/grecia-lendas.png",
        description: "Narrativas antigas sobre monstros, heróis e criaturas míticas.",
        legends: [
            "Medusa",
            "Minotauro",
            "Hidra",
            "Cérbero"
        ]
    },

    irlanda: {
        region: "Europa",
        title: "Lendas da Irlanda",
        image: "./assets/images/legends/cards/irlanda-lendas.png",
        description: "Antigas histórias celtas sobre espíritos e seres mágicos.",
        legends: [
            "Leprechaun",
            "Banshee",
            "Pooka"
        ]
    },

    noruega: {
        region: "Europa",
        title: "Lendas da Noruega",
        image: "./assets/images/legends/cards/noruega-lendas.png",
        description: "Criaturas gigantes e monstros das terras nórdicas.",
        legends: [
            "Kraken",
            "Troll",
            "Draugr"
        ]
    },

    russia: {
        region: "Europa",
        title: "Lendas da Rússia",
        image: "./assets/images/legends/cards/russia-lendas.png",
        description: "Lendas eslavas sobre bruxas e espíritos ancestrais.",
        legends: [
            "Baba Yaga",
            "Leshy",
            "Rusalka"
        ]
    },

    /* =====================================================
       ÁSIA
    ===================================================== */

    japao: {
        region: "Ásia",
        title: "Lendas do Japão",
        image: "./assets/images/legends/cards/japao-lendas.png",
        description: "Lendas sobre espíritos, aparições e criaturas sobrenaturais do imaginário japonês.",
        legends: [
            "Kitsune",
            "Kuchisake-onna",
            "Teke Teke",
            "Yuki-onna"
        ]
    },

    china: {
        region: "Ásia",
        title: "Lendas da China",
        image: "./assets/images/legends/cards/china-lendas.png",
        description: "Dragões, espíritos e criaturas lendárias orientais.",
        legends: [
            "Dragão Chinês",
            "Jiangshi",
            "Qilin"
        ]
    },

    india: {
        region: "Ásia",
        title: "Lendas da Índia",
        image: "./assets/images/legends/cards/india-lendas.png",
        description: "Criaturas espirituais e seres sobrenaturais da tradição indiana.",
        legends: [
            "Naga",
            "Vetala",
            "Rakshasa"
        ]
    },

    /* =====================================================
       ÁFRICA
    ===================================================== */

    africaSul: {
        region: "África",
        title: "Lendas da África do Sul",
        image: "./assets/images/legends/cards/africa-sul-lendas.png",
        description: "Lendas envolvendo criaturas misteriosas e seres do folclore africano.",
        legends: [
            "Tokoloshe",
            "Grootslang",
            "Impundulu"
        ]
    },

    egito: {
        region: "África",
        title: "Lendas do Egito",
        image: "./assets/images/legends/cards/egito-lendas.png",
        description: "Mistérios antigos ligados às pirâmides e aos deuses do deserto.",
        legends: [
            "Esfinge",
            "Anúbis",
            "Maldição do Faraó"
        ]
    },

    /* =====================================================
       OCEANIA
    ===================================================== */

    australia: {
        region: "Oceania",
        title: "Lendas da Austrália",
        image: "./assets/images/legends/cards/australia-lendas.png",
        description: "Seres lendários ligados à natureza, rios e tradições antigas.",
        legends: [
            "Bunyip",
            "Yara-ma-yha-who",
            "Rainbow Serpent"
        ]
    }

};



document.addEventListener("DOMContentLoaded", () => {
    const mapWrapper = document.getElementById("legendsMapWrapper");
    const markers = document.querySelectorAll(".legend-marker");
    const zoomButtons = document.querySelectorAll(".legends-map-zoom-controls button");

    const card = document.getElementById("legendMapCard");
    const cardClose = document.getElementById("legendMapCardClose");
    const cardImage = document.getElementById("legendMapCardImage");
    const cardRegion = document.getElementById("legendMapCardRegion");
    const cardTitle = document.getElementById("legendMapCardTitle");
    const cardDescription = document.getElementById("legendMapCardDescription");
    const cardList = document.getElementById("legendMapCardList");

    if (
        !mapWrapper ||
        !card ||
        !cardImage ||
        !cardRegion ||
        !cardTitle ||
        !cardDescription ||
        !cardList
    ) {
        console.warn("Mapa das Lendas: algum elemento essencial não foi encontrado no HTML.");
        return;
    }

    function getCountryName(title) {
        return title
            .replace("Lendas do ", "")
            .replace("Lendas da ", "")
            .replace("Lendas de ", "")
            .trim();
    }

    function updateMarkerCounts() {
        markers.forEach((marker) => {
            const countryKey = marker.dataset.country;
            const data = legendsMapData[countryKey];

            if (!data || !Array.isArray(data.legends)) return;

            const total = data.legends.length;
            const countryName = getCountryName(data.title);
            const label = marker.querySelector("span");

            marker.dataset.count = `+${total}`;

            if (label) {
                label.textContent = `${countryName} +${total}`;
            }

            marker.setAttribute("aria-label", `Ver ${total} lendas de ${countryName}`);
        });
    }

    function clearActiveMarkers() {
        markers.forEach((marker) => {
            marker.classList.remove("active");
        });
    }

    function setActiveMarker(activeMarker) {
        clearActiveMarkers();

        if (activeMarker) {
            activeMarker.classList.add("active");
        }
    }

    function setCardImage(imagePath, altText) {
        cardImage.src = imagePath || DEFAULT_LEGEND_IMAGE;
        cardImage.alt = altText || "Lenda selecionada";
    }

    function resetCard() {
        card.classList.remove("active");

        setCardImage(DEFAULT_LEGEND_IMAGE, "Lenda selecionada");

        cardRegion.textContent = "Selecione uma região";
        cardTitle.textContent = "Atlas das Lendas";
        cardDescription.textContent = "Clique em um país no mapa para visualizar as lendas daquela região.";
        cardList.innerHTML = "";

        clearActiveMarkers();
    }

    function openLegendCard(countryKey) {
        const data = legendsMapData[countryKey];

        if (!data) return;

        card.classList.add("active");

        setCardImage(data.image, data.title);

        cardRegion.textContent = data.region;
        cardTitle.textContent = data.title;
        cardDescription.textContent = data.description;

        cardList.innerHTML = "";

        data.legends.forEach((legend) => {
            const li = document.createElement("li");
            li.textContent = typeof legend === "string" ? legend : legend.name;
            cardList.appendChild(li);
        });
    }

    function closeLegendCard() {
        resetCard();
    }

    function setZoom(region) {
        if (!region) return;

        mapWrapper.classList.remove(
            "zoom-world",
            "zoom-america",
            "zoom-europe",
            "zoom-asia",
            "zoom-africa",
            "zoom-oceania"
        );

        mapWrapper.classList.add(`zoom-${region}`);

        zoomButtons.forEach((button) => {
            button.classList.toggle("active", button.dataset.region === region);
        });
    }

    markers.forEach((marker) => {
        marker.addEventListener("click", () => {
            const countryKey = marker.dataset.country;
            const region = marker.dataset.region;

            openLegendCard(countryKey);
            setZoom(region);
            setActiveMarker(marker);
        });
    });

    zoomButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const region = button.dataset.region;

            setZoom(region);

            if (region === "world") {
                resetCard();
            }
        });
    });

    if (cardClose) {
        cardClose.addEventListener("click", closeLegendCard);
    }

    cardImage.addEventListener("error", () => {
        if (cardImage.src.includes("default-legend.png")) return;

        setCardImage(DEFAULT_LEGEND_IMAGE, "Lenda selecionada");
    });

    updateMarkerCounts();

    mapWrapper.classList.add("zoom-world");

    zoomButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.region === "world");
    });
});