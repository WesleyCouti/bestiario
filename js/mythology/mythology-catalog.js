/* =====================================================
   MYTHOLOGY-CATALOG.JS — BESTIÁRIO
   -----------------------------------------------------
   Página: Mitologias

   Objetivo do arquivo:
   - armazenar os dados do catálogo de mitologias;
   - renderizar os cards dentro de #mythologyGrid;
   - manter acessibilidade, performance e organização;
   - evitar reescritas repetidas no DOM.

   Melhorias aplicadas:
   - não utiliza innerHTML;
   - usa DocumentFragment para renderização performática;
   - usa Object.freeze() nos dados;
   - mantém os itens ordenados alfabeticamente;
   - adiciona loading, decoding e fetchpriority nas imagens;
   - adiciona fallback de imagem;
   - adiciona role="listitem" nos cards;
   - cria funções pequenas e reutilizáveis.
===================================================== */


/* =====================================================
   1. CONFIGURAÇÕES DA SEÇÃO
===================================================== */

const MYTHOLOGY_CATALOG_SELECTORS = Object.freeze({
    grid: "#mythologyGrid"
});

const MYTHOLOGY_CATALOG_CONFIG = Object.freeze({
    imagePlaceholder: "./assets/images/common/image-placeholder.webp"
});


/* =====================================================
   2. DADOS DO CATÁLOGO
   -----------------------------------------------------
   Observação:
   - As URLs já estão preparadas para futuras páginas internas.
   - Caso a página ainda não exista, basta trocar temporariamente
     a URL do item para "#".
===================================================== */

const MYTHOLOGIES = Object.freeze([
    {
        title: "Abenaki",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-abenaki.png",
        icon: "🌲",
        description: "Tradições ancestrais ligadas à natureza, aos espíritos e às forças criadoras do mundo.",
        url: "./mitologias/abenaki.html"
    },
    {
        title: "Aborígene",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-aborigene.png",
        icon: "☀",
        description: "Cosmovisão marcada pelo Tempo do Sonho, espíritos criadores e conexão profunda com a terra.",
        url: "./mitologias/aborigene.html"
    },
    {
        title: "Africana",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-africana.png",
        icon: "☥",
        description: "Riqueza de tradições orais, espíritos da natureza, ancestralidade e forças sagradas.",
        url: "./mitologias/africana.html"
    },
    {
        title: "Alemã",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-alema.png",
        icon: "🌑",
        description: "Lendas sombrias, florestas antigas, criaturas fantásticas e tradições populares germânicas.",
        url: "./mitologias/alema.html"
    },
    {
        title: "Americana",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-americana.png",
        icon: "★",
        description: "Histórias lendárias, heróis populares, assombrações e criaturas do imaginário norte-americano.",
        url: "./mitologias/americana.html"
    },
    {
        title: "Árabe",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-arabe.png",
        icon: "☾",
        description: "Gênios, desertos encantados, seres invisíveis e contos espirituais do mundo antigo.",
        url: "./mitologias/arabe.html"
    },
    {
        title: "Argentina",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-argentina.png",
        icon: "🌙",
        description: "Lendas populares com espíritos, entidades rurais e criaturas tradicionais do sul.",
        url: "./mitologias/argentina.html"
    },
    {
        title: "Asteca",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-asteca.png",
        icon: "☀",
        description: "Deuses solares, serpentes emplumadas e forças cósmicas ligadas ao equilíbrio universal.",
        url: "./mitologias/asteca.html"
    },
    {
        title: "Basca",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-basca.png",
        icon: "⛰",
        description: "Deusas da terra, espíritos das cavernas, gigantes e entidades das montanhas sagradas.",
        url: "./mitologias/basca.html"
    },
    {
        title: "Budista",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-budismo.png",
        icon: "☸",
        description: "Seres celestiais, guardiões espirituais e símbolos ligados à sabedoria e iluminação.",
        url: "./mitologias/budista.html"
    },
    {
        title: "Caribenha",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-caribenha.png",
        icon: "🌊",
        description: "Lendas insulares com entidades marítimas, espíritos e tradições populares místicas.",
        url: "./mitologias/caribenha.html"
    },
    {
        title: "Catalã",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-catalana.png",
        icon: "🐉",
        description: "Dragões, gigantes, bruxas e seres encantados do imaginário mítico da Catalunha.",
        url: "./mitologias/catala.html"
    },
    {
        title: "Celta",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-celta.png",
        icon: "☘",
        description: "Deuses da natureza, magia, druidas e lendas das terras da névoa.",
        url: "./mitologias/celta.html"
    },
    {
        title: "Chilena",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-chilena.png",
        icon: "⛰",
        description: "Criaturas marítimas, espíritos da terra, lendas mapuches e mistérios das montanhas.",
        url: "./mitologias/chilena.html"
    },
    {
        title: "Chinesa",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-chinesa.png",
        icon: "龍",
        description: "Dragões celestiais, imortais, espíritos guardiões e forças da harmonia universal.",
        url: "./mitologias/chinesa.html"
    },
    {
        title: "Colombiana",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-colombiana.png",
        icon: "🌿",
        description: "Entidades populares, espíritos da natureza e narrativas ligadas às florestas e montanhas.",
        url: "./mitologias/colombiana.html"
    },
    {
        title: "Cosmologia Bíblica",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-crista.png",
        icon: "✟",
        description: "Anjos, demônios, milagres, visões apocalípticas e narrativas espirituais simbólicas.",
        url: "./mitologias/cosmologia-biblica.html"
    },
    {
        title: "Dinamarquesa",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-dinamarquesa.png",
        icon: "ᛟ",
        description: "Lendas do norte europeu com seres das florestas, guerreiros e espíritos antigos.",
        url: "./mitologias/dinamarquesa.html"
    },
    {
        title: "Dominicana",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-dominicana.png",
        icon: "🌴",
        description: "Espíritos, assombrações, lendas rurais e seres sobrenaturais do imaginário caribenho.",
        url: "./mitologias/dominicana.html"
    },
    {
        title: "Egípcia",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-egipcia.png",
        icon: "☥",
        description: "Deuses ancestrais, vida após a morte e a ordem cósmica que sustenta o universo.",
        url: "./mitologias/egipcia.html"
    },
    {
        title: "Escandinava",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-escandinava.png",
        icon: "ᚱ",
        description: "Deuses, gigantes, valquírias e mundos conectados por uma cosmologia épica.",
        url: "./mitologias/escandinava.html"
    },
    {
        title: "Escocesa",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-escocesa.png",
        icon: "🏰",
        description: "Fadas, espíritos das terras altas, criaturas misteriosas e antigas tradições celtas.",
        url: "./mitologias/escocesa.html"
    },
    {
        title: "Eslava",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-eslava.png",
        icon: "❄",
        description: "Deuses da tempestade, espíritos domésticos, bruxas e entidades das florestas sombrias.",
        url: "./mitologias/eslava.html"
    },
    {
        title: "Europeia",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-europeia.png",
        icon: "♜",
        description: "Lendas, criaturas medievais, tradições pagãs e símbolos do imaginário antigo europeu.",
        url: "./mitologias/europeia.html"
    },
    {
        title: "Filipina",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-filipina.png",
        icon: "🌺",
        description: "Divindades, espíritos da natureza e criaturas noturnas das tradições orais filipinas.",
        url: "./mitologias/filipina.html"
    },
    {
        title: "Finlandesa",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-finlandesa.png",
        icon: "❄",
        description: "Heróis mágicos, cantos sagrados, espíritos da floresta e forças da criação.",
        url: "./mitologias/finlandesa.html"
    },
    {
        title: "Francesa",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-francesa.png",
        icon: "⚜",
        description: "Contos de fadas, cavaleiros, dragões e tradições populares da França antiga.",
        url: "./mitologias/francesa.html"
    },
    {
        title: "Gaélica",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-gaelica.png",
        icon: "☘",
        description: "Heróis lendários, fadas, deuses antigos e reinos encantados dos povos gaélicos.",
        url: "./mitologias/gaelica.html"
    },
    {
        title: "Grega",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-grega.png",
        icon: "🏛",
        description: "Deuses do Olimpo, heróis lendários e mitos que moldaram a civilização ocidental.",
        url: "./mythologies/mythology-detail.html?mythology=greek"
    },
    {
        title: "Haitiana",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-haitiana.png",
        icon: "🔥",
        description: "Entidades ancestrais, ritos simbólicos e forças sagradas do universo cultural haitiano.",
        url: "./mitologias/haitiana.html"
    },
    {
        title: "Havaiana",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-havaiana.png",
        icon: "🌋",
        description: "Deuses vulcânicos, espíritos do oceano e forças naturais ligadas ao fogo e ao mar.",
        url: "./mitologias/havaiana.html"
    },
    {
        title: "Heráldica Europeia",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-heraldica-europeia.png",
        icon: "🛡",
        description: "Dragões, grifos, unicórnios e criaturas simbólicas presentes em brasões e reinos.",
        url: "./mitologias/heraldica-europeia.html"
    },
    {
        title: "Hindu",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-hindu.png",
        icon: "ॐ",
        description: "Deuses, reencarnação, karma, avatares e ensinamentos espirituais milenares.",
        url: "./mitologias/hindu.html"
    },
    {
        title: "Holandesa",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-holandesa.png",
        icon: "🌊",
        description: "Lendas de águas, espíritos, figuras populares e tradições antigas dos Países Baixos.",
        url: "./mitologias/holandesa.html"
    },
    {
        title: "Húngara",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-hungara.png",
        icon: "🦅",
        description: "Aves sagradas, heróis lendários, espíritos e narrativas antigas do povo magiar.",
        url: "./mitologias/hungara.html"
    },
    {
        title: "Inca",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-inca.png",
        icon: "☀",
        description: "Deuses solares, montanhas sagradas e forças naturais ligadas ao império andino.",
        url: "./mitologias/inca.html"
    },
    {
        title: "Indiana",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-indiana.png",
        icon: "🪷",
        description: "Deuses, semideuses, ciclos cósmicos, avatares e narrativas épicas espirituais.",
        url: "./mitologias/indiana.html"
    },
    {
        title: "Indonésia",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-indonesia.png",
        icon: "🐉",
        description: "Espíritos ancestrais, dragões, seres protetores e lendas do arquipélago indonésio.",
        url: "./mitologias/indonesia.html"
    },
    {
        title: "Inglesa",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-inglesa.png",
        icon: "⚔",
        description: "Cavaleiros, reis míticos, florestas encantadas e criaturas lendárias da tradição inglesa.",
        url: "./mitologias/inglesa.html"
    },
    {
        title: "Inuit",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-inuit.png",
        icon: "❄",
        description: "Espíritos do gelo, animais sagrados e histórias moldadas pela natureza extrema.",
        url: "./mitologias/inuit.html"
    },
    {
        title: "Iorubá",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-ioruba.png",
        icon: "⚚",
        description: "Orixás, forças da natureza, ancestralidade, destino e rituais sagrados.",
        url: "./mitologias/ioruba.html"
    },
    {
        title: "Irlandesa",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-irlandesa.png",
        icon: "☘",
        description: "Tuatha Dé Danann, fadas, reinos invisíveis e histórias celtas de magia e destino.",
        url: "./mitologias/irlandesa.html"
    },
    {
        title: "Japonesa",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-japonesa.png",
        icon: "⛩",
        description: "Kami, espíritos e yokais onde o sagrado e o natural se encontram.",
        url: "./mitologias/japonesa.html"
    },
    {
        title: "Judaica",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-judaica.png",
        icon: "✡",
        description: "Anjos, golems, demônios, sabedoria mística e tradições simbólicas antigas.",
        url: "./mitologias/judaica.html"
    },
    {
        title: "Lituana",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-lituana.png",
        icon: "🌩",
        description: "Deuses do trovão, serpentes sagradas, espíritos da terra e tradições bálticas.",
        url: "./mitologias/lituana.html"
    },
    {
        title: "Maia",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-maia.png",
        icon: "▣",
        description: "Deuses criadores, jaguares sagrados, calendários cósmicos e mundos subterrâneos.",
        url: "./mitologias/maia.html"
    },
    {
        title: "Malaia",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-malaio.png",
        icon: "🌙",
        description: "Espíritos da selva, criaturas noturnas e entidades protetoras do sudeste asiático.",
        url: "./mitologias/malaia.html"
    },
    {
        title: "Maori",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-maori.png",
        icon: "🌊",
        description: "Deuses criadores, heróis navegadores e forças naturais ligadas ao mar, céu e terra.",
        url: "./mitologias/maori.html"
    },
    {
        title: "Mesopotâmica",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-mesopotamica.png",
        icon: "𒀭",
        description: "Deuses antigos, monstros primordiais, reis lendários e narrativas das primeiras civilizações.",
        url: "./mitologias/mesopotamica.html"
    },
    {
        title: "Mexicana",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-mexicana.png",
        icon: "☀",
        description: "Serpentes sagradas, deuses solares, lendas populares e tradições ancestrais mexicanas.",
        url: "./mitologias/mexicana.html"
    },
    {
        title: "Nórdica",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-nordica.png",
        icon: "ᛟ",
        description: "Deuses poderosos, gigantes e o destino do mundo em Ragnarok.",
        url: "./mythologies/mythology-detail.html?mythology=norse"
    },
    {
        title: "Persa",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-persa.png",
        icon: "☼",
        description: "Forças do bem e do caos, seres celestiais e batalhas cósmicas entre luz e sombra.",
        url: "./mitologias/persa.html"
    },
    {
        title: "Portuguesa",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-portuguesa.png",
        icon: "⚓",
        description: "Mouras encantadas, monstros marítimos, castelos e tradições mágicas lusitanas.",
        url: "./mitologias/portuguesa.html"
    },
    {
        title: "Romana",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-romana.png",
        icon: "🏛",
        description: "Deuses imperiais, heróis fundadores, rituais públicos e símbolos de ordem e destino.",
        url: "./mitologias/romana.html"
    },
    {
        title: "Romena",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-romena.png",
        icon: "🦇",
        description: "Lendas sombrias, espíritos, vampiros folclóricos e criaturas das montanhas dos Cárpatos.",
        url: "./mitologias/romena.html"
    },
    {
        title: "Tibetana",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-tibetana.png",
        icon: "☸",
        description: "Guardiões espirituais, divindades simbólicas, montanhas sagradas e tradições místicas.",
        url: "./mitologias/tibetana.html"
    },
    {
        title: "Tupi-Guarani",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-tupi-guarani.png",
        icon: "🌿",
        description: "Deuses criadores, espíritos da floresta, animais sagrados e narrativas indígenas brasileiras.",
        url: "./mitologias/tupi-guarani.html"
    },
    {
        title: "Turca",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-turca.png",
        icon: "🐺",
        description: "Lobos sagrados, espíritos celestes, xamanismo e tradições míticas dos povos túrquicos.",
        url: "./mitologias/turca.html"
    }
].map(Object.freeze).sort((firstMythology, secondMythology) =>
    firstMythology.title.localeCompare(secondMythology.title, "pt-BR")
));


/* =====================================================
   3. UTILITÁRIOS
===================================================== */

/**
 * Cria um elemento HTML com classe opcional.
 *
 * @param {string} tagName - Nome da tag HTML.
 * @param {string} className - Classe CSS opcional.
 * @returns {HTMLElement}
 */
function createElement(tagName, className = "") {
    const element = document.createElement(tagName);

    if (className) {
        element.className = className;
    }

    return element;
}

/**
 * Aplica imagem reserva caso a imagem principal não carregue.
 *
 * @param {HTMLImageElement} imageElement - Imagem do card.
 */
function applyImageFallback(imageElement) {
    imageElement.addEventListener("error", () => {
        if (imageElement.dataset.fallbackApplied === "true") {
            return;
        }

        imageElement.dataset.fallbackApplied = "true";
        imageElement.src = MYTHOLOGY_CATALOG_CONFIG.imagePlaceholder;
    });
}


/* =====================================================
   4. TEMPLATE DO CARD
===================================================== */

/**
 * Cria o card de uma mitologia.
 *
 * @param {Object} mythology - Dados da mitologia.
 * @param {string} mythology.title - Nome da mitologia.
 * @param {string} mythology.image - Caminho da imagem.
 * @param {string} mythology.icon - Ícone textual/simbólico.
 * @param {string} mythology.description - Descrição breve.
 * @param {string} mythology.url - URL de destino.
 * @returns {HTMLElement}
 */
function createMythologyCard(mythology) {
    const card = createElement("article", "mythology-card");
    card.setAttribute("role", "listitem");

    const image = createElement("img");
    image.src = mythology.image;
    image.alt = `Mitologia ${mythology.title}`;
    image.loading = "lazy";
    image.decoding = "async";
    image.fetchPriority = "low";
    applyImageFallback(image);

    const content = createElement("div", "mythology-card-content");

    const icon = createElement("div", "mythology-icon");
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = mythology.icon;

    const title = createElement("h2");
    title.textContent = mythology.title;

    const description = createElement("p");
    description.textContent = mythology.description;

    const link = createElement("a");
    link.href = mythology.url;
    link.textContent = "Explorar ›";
    link.setAttribute("aria-label", `Explorar mitologia ${mythology.title}`);

    content.append(icon, title, description, link);
    card.append(image, content);

    return card;
}


/* =====================================================
   5. RENDERIZAÇÃO DO CATÁLOGO
===================================================== */

/**
 * Renderiza todos os cards de mitologias.
 *
 * @param {HTMLElement} gridElement - Container do catálogo.
 * @param {Array<Object>} mythologies - Lista de mitologias.
 */
function renderMythologies(gridElement, mythologies) {
    if (!gridElement || !Array.isArray(mythologies) || mythologies.length === 0) {
        return;
    }

    const fragment = document.createDocumentFragment();

    mythologies.forEach((mythology) => {
        fragment.appendChild(createMythologyCard(mythology));
    });

    gridElement.replaceChildren(fragment);
}


/* =====================================================
   6. INICIALIZAÇÃO
===================================================== */

/**
 * Inicializa o catálogo quando o DOM estiver pronto.
 */
function initMythologyCatalog() {
    const mythologyGrid = document.querySelector(MYTHOLOGY_CATALOG_SELECTORS.grid);

    if (!mythologyGrid) {
        return;
    }

    renderMythologies(mythologyGrid, MYTHOLOGIES);
}

document.addEventListener("DOMContentLoaded", initMythologyCatalog);
