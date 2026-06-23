/* =====================================================
   LEGENDS-HAUNTED-DATA.JS
   Seção: Lugares Assombrados Populares

   Funções:
   - Mantém os dados dos lugares assombrados.
   - Sorteia cards diferentes a cada carregamento.
   - Renderiza cards flip dinamicamente com createElement.
   - Corta descrições sem quebrar palavras.
   - Evita quebra de HTML usando textContent e setAttribute.
   - Melhora acessibilidade por teclado.
===================================================== */

const HAUNTED_PLACES_LIMIT = 6;
const HAUNTED_DESCRIPTION_LIMIT = 68;
const DEFAULT_HAUNTED_IMAGE = "./assets/images/legends/haunted/default-haunted.png";

const hauntedPlacesData = [
    {
        title: "Castelo de Edimburgo",
        country: "Escócia",
        image: "./assets/images/legends/haunted/castelo-edimburgo.png",
        alt: "Castelo de Edimburgo",
        description:
            "Entre muralhas antigas, túneis escuros e séculos de conflitos, o castelo guarda relatos que despertam fascínio e mistério.",
        url: "#"
    },
    {
        title: "Ilha das Bonecas",
        country: "México",
        image: "./assets/images/legends/haunted/ilha-das-bonecas.png",
        alt: "Ilha das Bonecas",
        description:
            "Bonecas penduradas entre árvores transformaram esta ilha em um dos lugares mais inquietantes e curiosos do folclore moderno.",
        url: "#"
    },
    {
        title: "Floresta de Aokigahara",
        country: "Japão",
        image: "./assets/images/legends/haunted/floresta-aokigahara.png",
        alt: "Floresta de Aokigahara",
        description:
            "Aos pés do Monte Fuji, a floresta é cercada por silêncio, névoa e histórias que a tornaram símbolo de mistério no Japão.",
        url: "#"
    },
    {
        title: "Hotel del Coronado",
        country: "EUA",
        image: "./assets/images/legends/haunted/hotel-del-coronado.png",
        alt: "Hotel del Coronado",
        description:
            "Elegante e histórico, o hotel ficou marcado por relatos de aparições e fenômenos inexplicáveis contados por visitantes.",
        url: "#"
    },
    {
        title: "Quinta da Boa Vista",
        country: "Brasil",
        image: "./assets/images/legends/haunted/quinta-boa-vista.png",
        alt: "Quinta da Boa Vista",
        description:
            "Entre história imperial, ruínas e memórias antigas, o local desperta lendas urbanas e curiosidades no imaginário brasileiro.",
        url: "#"
    },
    {
        title: "Torre de Londres",
        country: "Inglaterra",
        image: "./assets/images/legends/haunted/torre-de-londres.png",
        alt: "Torre de Londres",
        description:
            "Prisões, coroas, traições e histórias reais transformaram a torre em um dos lugares mais lendários e sombrios da Inglaterra.",
        url: "#"
    },
    {
        title: "Castelo de Bran",
        country: "Romênia",
        image: "./assets/images/legends/haunted/castelo-de-bran.png",
        alt: "Castelo de Bran",
        description:
            "Associado ao imaginário de Drácula, o castelo mistura arquitetura medieval, montanhas sombrias e lendas que atravessaram gerações.",
        url: "#"
    },
    {
        title: "Catacumbas de Paris",
        country: "França",
        image: "./assets/images/legends/haunted/catacumbas-de-paris.png",
        alt: "Catacumbas de Paris",
        description:
            "Sob as ruas de Paris, corredores subterrâneos guardam ossários, silêncio e histórias que alimentam o fascínio pelo desconhecido.",
        url: "#"
    },
    {
        title: "Mansão Winchester",
        country: "EUA",
        image: "./assets/images/legends/haunted/mansao-winchester.png",
        alt: "Mansão Winchester",
        description:
            "Escadas sem destino, portas estranhas e cômodos secretos tornaram a mansão um símbolo de mistério arquitetônico e sobrenatural.",
        url: "#"
    },
    {
        title: "Castelo de Leap",
        country: "Irlanda",
        image: "./assets/images/legends/haunted/castelo-de-leap.png",
        alt: "Castelo de Leap",
        description:
            "Conhecido por suas histórias sombrias, o castelo irlandês reúne antigas disputas familiares e relatos que intrigam visitantes.",
        url: "#"
    },
    {
        title: "Ilha de Poveglia",
        country: "Itália",
        image: "./assets/images/legends/haunted/ilha-de-poveglia.png",
        alt: "Ilha de Poveglia",
        description:
            "Isolada na lagoa de Veneza, a ilha carrega histórias de abandono, antigas doenças e uma atmosfera carregada de mistério.",
        url: "#"
    },
    {
        title: "Sanatório Waverly Hills",
        country: "EUA",
        image: "./assets/images/legends/haunted/sanatorio-waverly-hills.png",
        alt: "Sanatório Waverly Hills",
        description:
            "Antigo hospital cercado por relatos populares, corredores vazios e histórias que o tornaram famoso entre caçadores de mistérios.",
        url: "#"
    },
    {
        title: "Castelo de Himeji",
        country: "Japão",
        image: "./assets/images/legends/haunted/castelo-de-himeji.png",
        alt: "Castelo de Himeji",
        description:
            "Além de sua beleza histórica, o castelo é ligado a antigas narrativas japonesas sobre poços, aparições e tragédias lendárias.",
        url: "#"
    },
    {
        title: "Monte Cristo Homestead",
        country: "Austrália",
        image: "./assets/images/legends/haunted/monte-cristo-homestead.png",
        alt: "Monte Cristo Homestead",
        description:
            "A residência histórica australiana é cercada por relatos de fenômenos estranhos e histórias familiares marcadas pelo mistério.",
        url: "#"
    },
    {
        title: "Forte Bhangarh",
        country: "Índia",
        image: "./assets/images/legends/haunted/forte-bhangarh.png",
        alt: "Forte Bhangarh",
        description:
            "Ruínas antigas, lendas de maldição e o silêncio do deserto transformaram o forte em um dos lugares mais enigmáticos da Índia.",
        url: "#"
    },
    {
        title: "Castelo de Moosham",
        country: "Áustria",
        image: "./assets/images/legends/haunted/castelo-de-moosham.png",
        alt: "Castelo de Moosham",
        description:
            "Com séculos de histórias ligadas a julgamentos e superstições, o castelo mantém uma atmosfera densa e cheia de lendas.",
        url: "#"
    },
    {
        title: "Casa da Rua 112 Ocean",
        country: "EUA",
        image: "./assets/images/legends/haunted/casa-amityville.png",
        alt: "Casa de Amityville",
        description:
            "Famosa por relatos populares e adaptações no cinema, a casa se tornou um dos símbolos modernos das histórias assombradas.",
        url: "#"
    },
    {
        title: "Castelo de Chillingham",
        country: "Inglaterra",
        image: "./assets/images/legends/haunted/castelo-de-chillingham.png",
        alt: "Castelo de Chillingham",
        description:
            "Salões antigos, masmorras e histórias de guerra fizeram do castelo um dos nomes mais lembrados entre lugares assombrados britânicos.",
        url: "#"
    }
];

/* =====================================================
   FUNÇÕES AUXILIARES
===================================================== */

function normalizeHauntedText(value) {
    return String(value ?? "").replace(/\s+/g, " ").trim();
}

function truncateHauntedText(text, maxLength = HAUNTED_DESCRIPTION_LIMIT) {
    const safeText = normalizeHauntedText(text);

    if (safeText.length <= maxLength) {
        return safeText;
    }

    const words = safeText.split(" ");
    let result = "";

    for (const word of words) {
        const nextValue = result ? `${result} ${word}` : word;

        if (nextValue.length > maxLength) {
            break;
        }

        result = nextValue;
    }

    return `${result || safeText.slice(0, maxLength).trim()}...`;
}

function shuffleArray(items) {
    const shuffledItems = [...items];

    for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffledItems[index], shuffledItems[randomIndex]] = [
            shuffledItems[randomIndex],
            shuffledItems[index]
        ];
    }

    return shuffledItems;
}

function getRandomHauntedPlaces(limit = HAUNTED_PLACES_LIMIT) {
    const safeLimit = Math.max(1, Number(limit) || HAUNTED_PLACES_LIMIT);

    return shuffleArray(hauntedPlacesData).slice(0, safeLimit);
}

function createTextElement(tagName, className, text) {
    const element = document.createElement(tagName);

    if (className) {
        element.className = className;
    }

    element.textContent = normalizeHauntedText(text);

    return element;
}

/* =====================================================
   CRIAÇÃO DO CARD
===================================================== */

function createHauntedPlaceCard(place) {
    const title = normalizeHauntedText(place.title);
    const country = normalizeHauntedText(place.country);
    const image = normalizeHauntedText(place.image);
    const alt = normalizeHauntedText(place.alt || place.title);
    const description = truncateHauntedText(place.description);
    const url = normalizeHauntedText(place.url || "#");

    const card = document.createElement("article");
    card.className = "haunted-place-card";
    card.tabIndex = 0;
    card.setAttribute("aria-label", `${title}, ${country}. Pressione Enter para ver a descrição.`);

    const inner = document.createElement("div");
    inner.className = "haunted-place-inner";

    const front = document.createElement("div");
    front.className = "haunted-place-face haunted-place-front";

    const imageElement = document.createElement("img");
    imageElement.src = image;
    imageElement.alt = alt;
    imageElement.loading = "lazy";
    imageElement.decoding = "async";

    imageElement.addEventListener("error", () => {
        imageElement.src = DEFAULT_HAUNTED_IMAGE;
    }, { once: true });

    const frontContent = document.createElement("div");
    frontContent.className = "haunted-place-content";
    frontContent.appendChild(createTextElement("h3", "", title));
    frontContent.appendChild(createTextElement("p", "", country));

    front.appendChild(imageElement);
    front.appendChild(frontContent);

    const back = document.createElement("div");
    back.className = "haunted-place-face haunted-place-back";
    back.appendChild(createTextElement("span", "", country));
    back.appendChild(createTextElement("h3", "", title));
    back.appendChild(createTextElement("p", "", description));

    const link = document.createElement("a");
    link.href = url;
    link.textContent = "Descobrir mais";
    link.setAttribute("aria-label", `Ler mais sobre ${title}`);

    link.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    back.appendChild(link);

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    card.addEventListener("click", function () {
        this.classList.toggle("is-flipped");
    });

    card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            card.classList.toggle("is-flipped");
        }
    });

    return card;
}

/* =====================================================
   RENDERIZAÇÃO DOS CARDS
===================================================== */

function renderHauntedPlaces() {
    const hauntedGrid = document.getElementById("hauntedPlacesGrid");

    if (!hauntedGrid || !Array.isArray(hauntedPlacesData) || hauntedPlacesData.length === 0) {
        return;
    }

    const selectedPlaces = getRandomHauntedPlaces();
    const fragment = document.createDocumentFragment();

    hauntedGrid.replaceChildren();

    selectedPlaces.forEach((place) => {
        fragment.appendChild(createHauntedPlaceCard(place));
    });

    hauntedGrid.appendChild(fragment);
}

/* =====================================================
   INICIALIZAÇÃO
===================================================== */

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderHauntedPlaces);
} else {
    renderHauntedPlaces();
}
