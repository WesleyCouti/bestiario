/* =====================================================
   HOME-CREATURES-DATA.JS
   -----------------------------------------------------
   Dados, filtros e renderização da seção:
   "Criaturas do Mundo Antigo"

   Este arquivo permite:
   - renderizar cards dinamicamente no container #creaturesGrid
   - exibir 4 criaturas aleatórias por carregamento/filtro
   - filtrar por categoria usando botões .creature-filter
   - controlar o flip dos cards no mobile

   Requisitos no HTML:
   - Grid:
     <div class="creatures-grid" id="creaturesGrid"></div>

   - Filtros:
     <button class="creature-filter" data-filter="all">Todas</button>
     <button class="creature-filter" data-filter="aquaticas">Aquáticas</button>
     <button class="creature-filter" data-filter="celestiais">Celestiais</button>
     <button class="creature-filter" data-filter="sombras">Sombras</button>
     <button class="creature-filter" data-filter="guardias">Guardiãs</button>
     <button class="creature-filter" data-filter="gigantes">Gigantes</button>
     <button class="creature-filter" data-filter="espiritos">Espíritos</button>
     <button class="creature-filter" data-filter="bestas">Bestas</button>

   Observação:
   - Cada criatura pode ter uma ou mais categorias.
   - Para o filtro funcionar bem, mantenha os nomes das categorias
     iguais aos valores usados em data-filter.
===================================================== */

const DEFAULT_CREATURE_IMAGE = "./assets/images/home/home-secao-criaturas/default-creature.png";

const CREATURES_DESKTOP_PAGE_SIZE = 4;
const CREATURES_MOBILE_PAGE_SIZE = 1;
const CREATURES_MOBILE_BREAKPOINT = 700;

let currentCreatureFilter = "all";
let currentCreaturePage = 1;
let currentCreaturePageSize = getCreaturePageSize();
let currentCreatureList = [];

const homeCreaturesData = [
    {
        name: "Dragão",
        icon: "🔥",
        categories: ["bestas", "guardias"],
        image: "./assets/images/home/home-secao-criaturas/dragao-home.png",
        alt: "Dragão",
        description: "Símbolo de força, sabedoria e poder ancestral. Guardião de tesouros, montanhas e segredos antigos.",
        url: "#"
    },
    {
        name: "Fênix",
        icon: "☀",
        categories: ["celestiais", "espiritos"],
        image: "./assets/images/home/home-secao-criaturas/fenix-home.png",
        alt: "Fênix",
        description: "Ave solar renascida das próprias cinzas, símbolo de renovação, esperança e ciclo eterno da vida.",
        url: "#"
    },
    {
        name: "Minotauro",
        icon: "♉",
        categories: ["hibridas", "guardias", "bestas"],
        image: "./assets/images/home/home-secao-criaturas/minotauro-home.png",
        alt: "Minotauro",
        description: "Guardião do labirinto, criatura de força colossal e espírito indomável.",
        url: "#"
    },
    {
        name: "Medusa",
        icon: "🐍",
        categories: ["sombras", "hibridas"],
        image: "./assets/images/home/home-secao-criaturas/medusa-home.png",
        alt: "Medusa",
        description: "Seu olhar transforma em pedra, mas sua história vai muito além do medo que seus olhos provocam.",
        url: "#"
    },
    {
        name: "Fenrir",
        icon: "🐺",
        categories: ["gigantes", "bestas", "sombras"],
        image: "./assets/images/home/home-secao-criaturas/fenrir-home.png",
        alt: "Fenrir",
        description: "Lobo colossal da mitologia nórdica, associado ao destino, à força indomável e ao Ragnarök.",
        url: "#"
    },
    {
        name: "Quimera",
        icon: "🔥",
        categories: ["hibridas", "bestas"],
        image: "./assets/images/home/home-secao-criaturas/quimera-home.png",
        alt: "Quimera",
        description: "Criatura formada por partes de diferentes animais, símbolo do caos, do medo e do impossível.",
        url: "#"
    },
    {
        name: "Tengu",
        icon: "⛩",
        categories: ["espiritos", "guardias"],
        image: "./assets/images/home/home-secao-criaturas/tengu-home.png",
        alt: "Tengu",
        description: "Ser sobrenatural japonês ligado às montanhas, aos ventos, à disciplina e à sabedoria dos guerreiros.",
        url: "#"
    },
    {
        name: "Wendigo",
        icon: "❄",
        categories: ["sombras", "espiritos"],
        image: "./assets/images/home/home-secao-criaturas/wendigo-home.png",
        alt: "Wendigo",
        description: "Espírito sombrio das tradições indígenas norte-americanas, associado ao inverno, à fome e à ganância.",
        url: "#"
    },
    {
        name: "Basilisco",
        icon: "👁",
        categories: ["bestas", "sombras"],
        image: "./assets/images/home/home-secao-criaturas/basilisco-home.png",
        alt: "Basilisco",
        description: "Ser lendário europeu temido por seu olhar mortal, veneno devastador e presença ameaçadora.",
        url: "#"
    },
    {
        name: "Kitsune",
        icon: "🦊",
        categories: ["espiritos", "sombras"],
        image: "./assets/images/home/home-secao-criaturas/kitsune-home.png",
        alt: "Kitsune",
        description: "Raposa espiritual da mitologia japonesa, conhecida por sua inteligência, magia e metamorfose.",
        url: "#"
    },
    {
        name: "Kelpie",
        icon: "🌊",
        categories: ["aquaticas", "espiritos", "sombras"],
        image: "./assets/images/home/home-secao-criaturas/kelpie-home.png",
        alt: "Kelpie",
        description: "Espírito aquático das lendas gaélicas, muitas vezes visto como um cavalo ligado a rios e lagos.",
        url: "#"
    },
    {
        name: "Jörmungandr",
        icon: "🐍",
        categories: ["aquaticas", "gigantes", "bestas"],
        image: "./assets/images/home/home-secao-criaturas/jormungandr-home.png",
        alt: "Jörmungandr",
        description: "A serpente do mundo da mitologia nórdica, tão imensa que envolve a Terra com seu próprio corpo.",
        url: "#"
    },

    /* =====================================================
       NOVAS CRIATURAS — AQUÁTICAS
    ====================================================== */

    {
        name: "Kraken",
        icon: "🌊",
        categories: ["aquaticas", "gigantes", "bestas"],
        image: "./assets/images/home/home-secao-criaturas/kraken-home.png",
        alt: "Kraken",
        description: "Monstro marinho colossal das lendas nórdicas, capaz de arrastar navios inteiros para as profundezas.",
        url: "#"
    },
    {
        name: "Leviatã",
        icon: "🐋",
        categories: ["aquaticas", "gigantes", "sombras"],
        image: "./assets/images/home/home-secao-criaturas/leviata-home.png",
        alt: "Leviatã",
        description: "Criatura abissal associada ao caos primordial, às águas profundas e ao poder incontrolável do oceano.",
        url: "#"
    },
    {
        name: "Hidra",
        icon: "🐍",
        categories: ["aquaticas", "hibridas", "bestas"],
        image: "./assets/images/home/home-secao-criaturas/hidra-home.png",
        alt: "Hidra",
        description: "Serpente aquática de múltiplas cabeças da mitologia grega, famosa por se regenerar após cada golpe.",
        url: "#"
    },
    {
        name: "Sereia",
        icon: "♪",
        categories: ["aquaticas", "hibridas", "sombras"],
        image: "./assets/images/home/home-secao-criaturas/sereia-home.png",
        alt: "Sereia",
        description: "Criatura meio humana e meio peixe, ligada ao encanto, ao perigo dos mares e ao poder da voz.",
        url: "#"
    },
    {
        name: "Naga",
        icon: "🐍",
        categories: ["aquaticas", "hibridas", "guardias"],
        image: "./assets/images/home/home-secao-criaturas/naga-home.png",
        alt: "Naga",
        description: "Serpente sagrada das tradições asiáticas, associada às águas, à fertilidade e à proteção espiritual.",
        url: "#"
    },

    /* =====================================================
       NOVAS CRIATURAS — CELESTIAIS
    ====================================================== */

    {
        name: "Grifo",
        icon: "🪽",
        categories: ["celestiais", "hibridas", "guardias"],
        image: "./assets/images/home/home-secao-criaturas/grifo-home.png",
        alt: "Grifo",
        description: "Criatura com corpo de leão e cabeça de águia, guardiã de tesouros, templos e poderes solares.",
        url: "#"
    },
    {
        name: "Pégaso",
        icon: "☁",
        categories: ["celestiais", "guardias"],
        image: "./assets/images/home/home-secao-criaturas/pegaso-home.png",
        alt: "Pégaso",
        description: "Cavalo alado da mitologia grega, símbolo de inspiração, ascensão e ligação entre céu e terra.",
        url: "#"
    },
    {
        name: "Simurgh",
        icon: "☀",
        categories: ["celestiais", "guardias", "espiritos"],
        image: "./assets/images/home/home-secao-criaturas/simurgh-home.png",
        alt: "Simurgh",
        description: "Ave mítica persa ligada à sabedoria, à cura, à proteção e aos mistérios do alto céu.",
        url: "#"
    },
    {
        name: "Garuda",
        icon: "🦅",
        categories: ["celestiais", "guardias", "bestas"],
        image: "./assets/images/home/home-secao-criaturas/garuda-home.png",
        alt: "Garuda",
        description: "Ser alado das tradições hindu e budista, símbolo de velocidade, proteção e poder divino.",
        url: "#"
    },

    /* =====================================================
       NOVAS CRIATURAS — SOMBRAS E ESPÍRITOS
    ====================================================== */

    {
        name: "Banshee",
        icon: "☾",
        categories: ["sombras", "espiritos"],
        image: "./assets/images/home/home-secao-criaturas/banshee-home.png",
        alt: "Banshee",
        description: "Espírito das lendas irlandesas conhecido por seu lamento, presságio de morte e presença espectral.",
        url: "#"
    },
    {
        name: "Dullahan",
        icon: "☠",
        categories: ["sombras", "espiritos"],
        image: "./assets/images/home/home-secao-criaturas/dullahan-home.png",
        alt: "Dullahan",
        description: "Cavaleiro sem cabeça do folclore irlandês, mensageiro sombrio associado ao destino final.",
        url: "#"
    },
    {
        name: "Onryō",
        icon: "怨",
        categories: ["sombras", "espiritos"],
        image: "./assets/images/home/home-secao-criaturas/onryo-home.png",
        alt: "Onryō",
        description: "Espírito vingativo japonês movido por dor, rancor e injustiças que ultrapassaram a morte.",
        url: "#"
    },
    {
        name: "Yūrei",
        icon: "幽",
        categories: ["espiritos", "sombras"],
        image: "./assets/images/home/home-secao-criaturas/yurei-home.png",
        alt: "Yūrei",
        description: "Fantasma japonês preso ao mundo dos vivos por emoções intensas, promessas quebradas ou tragédias.",
        url: "#"
    },
    {
        name: "Ghul",
        icon: "☠",
        categories: ["sombras", "bestas"],
        image: "./assets/images/home/home-secao-criaturas/ghul-home.png",
        alt: "Ghul",
        description: "Criatura do imaginário árabe ligada a ruínas, cemitérios, desertos e terrores da noite.",
        url: "#"
    },

    /* =====================================================
       NOVAS CRIATURAS — GUARDIÃS
    ====================================================== */

    {
        name: "Esfinge",
        icon: "𓃭",
        categories: ["guardias", "hibridas"],
        image: "./assets/images/home/home-secao-criaturas/esfinge-home.png",
        alt: "Esfinge",
        description: "Guardião enigmático de templos e passagens sagradas, associado a mistérios, perguntas e sabedoria.",
        url: "#"
    },
    {
        name: "Cerberus",
        icon: "♆",
        categories: ["guardias", "sombras", "bestas"],
        image: "./assets/images/home/home-secao-criaturas/cerberus-home.png",
        alt: "Cerberus",
        description: "Cão de três cabeças da mitologia grega, guardião dos portões do submundo.",
        url: "#"
    },
    {
        name: "Gárgula",
        icon: "✦",
        categories: ["guardias", "sombras"],
        image: "./assets/images/home/home-secao-criaturas/gargula-home.png",
        alt: "Gárgula",
        description: "Figura protetora associada a igrejas e construções antigas, criada para afastar forças malignas.",
        url: "#"
    },
    {
        name: "Foo Dog",
        icon: "獅",
        categories: ["guardias", "bestas"],
        image: "./assets/images/home/home-secao-criaturas/foo-dog-home.png",
        alt: "Foo Dog",
        description: "Leão guardião oriental associado à proteção de templos, palácios e espaços sagrados.",
        url: "#"
    },

    /* =====================================================
       NOVAS CRIATURAS — HÍBRIDAS
    ====================================================== */

    {
        name: "Centauro",
        icon: "♐",
        categories: ["hibridas", "bestas"],
        image: "./assets/images/home/home-secao-criaturas/centauro-home.png",
        alt: "Centauro",
        description: "Ser metade humano e metade cavalo, ligado à força selvagem, ao conhecimento e aos conflitos da natureza.",
        url: "#"
    },
    {
        name: "Harpia",
        icon: "🪽",
        categories: ["hibridas", "celestiais", "sombras"],
        image: "./assets/images/home/home-secao-criaturas/harpia-home.png",
        alt: "Harpia",
        description: "Criatura alada da mitologia grega, muitas vezes vista como mensageira de punições e ventos violentos.",
        url: "#"
    },
    {
        name: "Mantícora",
        icon: "♌",
        categories: ["hibridas", "bestas", "sombras"],
        image: "./assets/images/home/home-secao-criaturas/manticora-home.png",
        alt: "Mantícora",
        description: "Besta lendária de corpo leonino, cauda ameaçadora e natureza feroz, temida em relatos antigos.",
        url: "#"
    },
    {
        name: "Lâmia",
        icon: "◈",
        categories: ["hibridas", "sombras"],
        image: "./assets/images/home/home-secao-criaturas/lamia-home.png",
        alt: "Lâmia",
        description: "Figura híbrida ligada ao medo, à sedução e às narrativas sombrias do mundo antigo.",
        url: "#"
    },

    /* =====================================================
       NOVAS CRIATURAS — GIGANTES
    ====================================================== */

    {
        name: "Ciclope",
        icon: "👁",
        categories: ["gigantes", "bestas"],
        image: "./assets/images/home/home-secao-criaturas/ciclope-home.png",
        alt: "Ciclope",
        description: "Gigante de um olho só da mitologia grega, associado à força bruta, forjas e terras selvagens.",
        url: "#"
    },
    {
        name: "Titã",
        icon: "⛰",
        categories: ["gigantes", "celestiais"],
        image: "./assets/images/home/home-secao-criaturas/tita-home.png",
        alt: "Titã",
        description: "Ser primordial de força imensa, ligado às origens do cosmos e aos conflitos entre gerações divinas.",
        url: "#"
    },
    {
        name: "Jotunn",
        icon: "❄",
        categories: ["gigantes", "sombras"],
        image: "./assets/images/home/home-secao-criaturas/jotunn-home.png",
        alt: "Jotunn",
        description: "Gigante da mitologia nórdica associado às forças antigas da natureza, do gelo e do caos.",
        url: "#"
    },
    {
        name: "Oni",
        icon: "鬼",
        categories: ["gigantes", "sombras", "bestas"],
        image: "./assets/images/home/home-secao-criaturas/oni-home.png",
        alt: "Oni",
        description: "Criatura poderosa do folclore japonês, geralmente representada como demônio, ogro ou força punitiva.",
        url: "#"
    },

    /* =====================================================
       NOVAS CRIATURAS — BESTAS
    ====================================================== */

    {
        name: "Lobisomem",
        icon: "🌕",
        categories: ["bestas", "sombras", "hibridas"],
        image: "./assets/images/home/home-secao-criaturas/lobisomem-home.png",
        alt: "Lobisomem",
        description: "Humano transformado em fera sob a lua cheia, símbolo do instinto, da maldição e da dualidade.",
        url: "#"
    },
    {
        name: "Unicórnio",
        icon: "✧",
        categories: ["bestas", "celestiais", "guardias"],
        image: "./assets/images/home/home-secao-criaturas/unicornio-home.png",
        alt: "Unicórnio",
        description: "Criatura pura e rara, associada à cura, à proteção, à luz e aos mistérios das florestas antigas.",
        url: "#"
    },
    {
        name: "Manticora",
        icon: "☉",
        categories: ["bestas", "hibridas", "sombras"],
        image: "./assets/images/home/home-secao-criaturas/manticora-home.png",
        alt: "Manticora",
        description: "Besta lendária de aparência híbrida, muitas vezes associada ao perigo, à caça e ao medo ancestral.",
        url: "#"
    },
    {
        name: "Salamandra",
        icon: "🔥",
        categories: ["bestas", "celestiais"],
        image: "./assets/images/home/home-secao-criaturas/salamandra-home.png",
        alt: "Salamandra",
        description: "Criatura ligada ao fogo, à transformação e aos antigos símbolos alquímicos da natureza elemental.",
        url: "#"
    }
];


/* =====================================================
   FUNÇÃO DE SEGURANÇA PARA EVITAR HTML QUEBRADO
   -----------------------------------------------------
   Protege textos antes de inserir no innerHTML.
===================================================== */

function escapeHTML(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =====================================================
   NORMALIZAÇÃO DE CATEGORIA
===================================================== */

function normalizeCreatureCategory(value) {
    return String(value ?? "")
        .trim()
        .toLowerCase();
}

/* =====================================================
   QUANTIDADE DE CARDS POR PÁGINA
   -----------------------------------------------------
   Desktop: 4 cards por página.
   Mobile: 1 card por página.
===================================================== */

function getCreaturePageSize() {
    return window.matchMedia(`(max-width: ${CREATURES_MOBILE_BREAKPOINT}px)`).matches
        ? CREATURES_MOBILE_PAGE_SIZE
        : CREATURES_DESKTOP_PAGE_SIZE;
}


/* =====================================================
   LISTA FILTRADA DE CRIATURAS
===================================================== */

function getFilteredCreatures(filter = "all") {
    if (!Array.isArray(homeCreaturesData)) {
        return [];
    }

    const selectedFilter = normalizeCreatureCategory(filter || "all");

    return homeCreaturesData.filter((creature) => {
        return creatureHasCategory(creature, selectedFilter);
    });
}


/* =====================================================
   TOTAL DE PÁGINAS
===================================================== */

function getCreatureTotalPages() {
    if (!currentCreatureList.length) {
        return 1;
    }

    return Math.max(1, Math.ceil(currentCreatureList.length / currentCreaturePageSize));
}


/* =====================================================
   FATIA DA PÁGINA ATUAL
===================================================== */

function getCurrentCreaturePageItems() {
    const totalPages = getCreatureTotalPages();

    currentCreaturePage = Math.min(Math.max(currentCreaturePage, 1), totalPages);

    const startIndex = (currentCreaturePage - 1) * currentCreaturePageSize;
    const endIndex = startIndex + currentCreaturePageSize;

    return currentCreatureList.slice(startIndex, endIndex);
}



/* =====================================================
   VALIDAÇÃO DE CATEGORIA DA CRIATURA
===================================================== */

function creatureHasCategory(creature, selectedCategory) {
    const category = normalizeCreatureCategory(selectedCategory);

    if (category === "all") {
        return true;
    }

    const creatureCategories = Array.isArray(creature.categories)
        ? creature.categories
        : [creature.category];

    return creatureCategories
        .map(normalizeCreatureCategory)
        .includes(category);
}


/* =====================================================
   OBSERVAÇÃO SOBRE EXIBIÇÃO
   -----------------------------------------------------
   A seção agora usa paginação:
   - desktop exibe 4 cards por página;
   - mobile exibe 1 card por página;
   - filtros recalculam o total de páginas.
===================================================== */



/* =====================================================
   TEMPLATE DO CARD
===================================================== */

function createCreatureCardTemplate(creature) {
    const name = escapeHTML(creature.name || "Criatura");
    const icon = escapeHTML(creature.icon || "✦");
    const image = escapeHTML(creature.image || DEFAULT_CREATURE_IMAGE);
    const alt = escapeHTML(creature.alt || creature.name || "Imagem da criatura");
    const description = escapeHTML(creature.description || "Mistério ancestral ainda não revelado.");
    const url = escapeHTML(creature.url || "#");
    const defaultImage = escapeHTML(DEFAULT_CREATURE_IMAGE);

    return `
        <article
            class="creature-card"
            aria-label="Criatura mitológica: ${name}"
            data-flipped="false">

            <div class="creature-card-inner">

                <div class="creature-card-front">
                    <img
                        src="${image}"
                        alt="${alt}"
                        loading="lazy"
                        decoding="async"
                        onerror="this.onerror=null; this.src='${defaultImage}';">
                </div>

                <div class="creature-card-back">
                    <span class="creature-icon" aria-hidden="true">${icon}</span>

                    <h3>${name}</h3>

                    <p>${description}</p>

                    <div class="creature-card-divider" aria-hidden="true"></div>

                    <a href="${url}" class="creature-card-link" aria-label="Saiba mais sobre ${name}">
                        Saiba Mais <span aria-hidden="true">›</span>
                    </a>
                </div>

            </div>
        </article>
    `;
}


/* =====================================================
   MENSAGEM DE FILTRO VAZIO
===================================================== */

function createEmptyCreatureMessage(filter) {
    const safeFilter = escapeHTML(filter);

    return `
        <div class="creatures-empty" role="status">
            Nenhuma criatura encontrada para o filtro "${safeFilter}".
        </div>
    `;
}


/* =====================================================
   GERADOR DOS CARDS DE CRIATURAS
===================================================== */

function createCreatureCards(filter = currentCreatureFilter, page = currentCreaturePage) {
    const creaturesGrid = document.getElementById("creaturesGrid");

    if (!creaturesGrid || !Array.isArray(homeCreaturesData)) {
        return;
    }

    if (homeCreaturesData.length === 0) {
        creaturesGrid.innerHTML = "";
        updateCreaturePagination();
        return;
    }

    currentCreatureFilter = normalizeCreatureCategory(filter || "all");
    currentCreaturePageSize = getCreaturePageSize();
    currentCreatureList = getFilteredCreatures(currentCreatureFilter);
    currentCreaturePage = page;

    creaturesGrid.dataset.activeFilter = currentCreatureFilter;

    if (currentCreatureList.length === 0) {
        creaturesGrid.innerHTML = createEmptyCreatureMessage(currentCreatureFilter);
        updateCreaturePagination();
        return;
    }

    const pageItems = getCurrentCreaturePageItems();

    creaturesGrid.innerHTML = pageItems
        .map(createCreatureCardTemplate)
        .join("");

    updateCreaturePagination();
}


/* =====================================================
   ATUALIZAÇÃO DA PAGINAÇÃO
===================================================== */

function updateCreaturePagination() {
    const pagination = document.querySelector(".creatures-pagination");
    const pageLabel = document.getElementById("creaturesPageLabel");
    const prevButton = document.getElementById("creaturesPrevPage");
    const nextButton = document.getElementById("creaturesNextPage");

    if (!pagination || !pageLabel || !prevButton || !nextButton) {
        return;
    }

    const totalPages = getCreatureTotalPages();

    pagination.hidden = currentCreatureList.length === 0;

    pageLabel.textContent = `Página ${currentCreaturePage} de ${totalPages}`;

    prevButton.disabled = currentCreaturePage <= 1;
    nextButton.disabled = currentCreaturePage >= totalPages;

    prevButton.setAttribute("aria-disabled", String(prevButton.disabled));
    nextButton.setAttribute("aria-disabled", String(nextButton.disabled));
}


/* =====================================================
   CONTROLE DOS BOTÕES DE PAGINAÇÃO
===================================================== */

function setupCreaturePagination() {
    const prevButton = document.getElementById("creaturesPrevPage");
    const nextButton = document.getElementById("creaturesNextPage");

    if (!prevButton || !nextButton) {
        return;
    }

    if (prevButton.dataset.paginationReady === "true" || nextButton.dataset.paginationReady === "true") {
        return;
    }

    prevButton.dataset.paginationReady = "true";
    nextButton.dataset.paginationReady = "true";

    prevButton.addEventListener("click", () => {
        if (currentCreaturePage <= 1) {
            return;
        }

        createCreatureCards(currentCreatureFilter, currentCreaturePage - 1);
    });

    nextButton.addEventListener("click", () => {
        if (currentCreaturePage >= getCreatureTotalPages()) {
            return;
        }

        createCreatureCards(currentCreatureFilter, currentCreaturePage + 1);
    });
}


/* =====================================================
   CONFIGURAÇÃO DOS FILTROS
===================================================== */

function setupCreatureFilters() {
    const filterButtons = document.querySelectorAll(".creature-filter");

    if (!filterButtons.length) {
        return;
    }

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedFilter = normalizeCreatureCategory(button.dataset.filter || "all");

            filterButtons.forEach((currentButton) => {
                currentButton.classList.remove("is-active");
                currentButton.setAttribute("aria-pressed", "false");
            });

            button.classList.add("is-active");
            button.setAttribute("aria-pressed", "true");

            createCreatureCards(selectedFilter, 1);
        });

        if (!button.hasAttribute("aria-pressed")) {
            const isActive = button.classList.contains("is-active");
            button.setAttribute("aria-pressed", String(isActive));
        }
    });
}


/* =====================================================
   CONTROLE DO FLIP NO MOBILE
   -----------------------------------------------------
   Permite tocar no card para virar e tocar novamente
   para voltar a exibir a imagem.
===================================================== */

function setupCreatureMobileFlip() {
    const creaturesGrid = document.getElementById("creaturesGrid");

    if (!creaturesGrid || creaturesGrid.dataset.mobileFlipReady === "true") {
        return;
    }

    creaturesGrid.dataset.mobileFlipReady = "true";

    function isMobileView() {
        return window.matchMedia("(max-width: 768px)").matches;
    }

    function resetCreatureCards() {
        const cards = creaturesGrid.querySelectorAll(".creature-card");

        cards.forEach((card) => {
            const inner = card.querySelector(".creature-card-inner");

            card.dataset.flipped = "false";

            if (inner) {
                inner.style.transform = "";
            }

            card.classList.remove("is-flipped");
        });
    }

    creaturesGrid.addEventListener("click", (event) => {
        if (!isMobileView()) {
            return;
        }

        const clickedLink = event.target.closest("a");

        if (clickedLink) {
            return;
        }

        const card = event.target.closest(".creature-card");

        if (!card || !creaturesGrid.contains(card)) {
            return;
        }

        const inner = card.querySelector(".creature-card-inner");

        if (!inner) {
            return;
        }

        const isFlipped = card.dataset.flipped === "true";

        card.dataset.flipped = String(!isFlipped);
        card.classList.toggle("is-flipped", !isFlipped);
        inner.style.transform = isFlipped ? "rotateY(0deg)" : "rotateY(180deg)";
    });

    window.addEventListener("resize", () => {
        if (!isMobileView()) {
            resetCreatureCards();
        }
    });
}


/* =====================================================
   INICIALIZAÇÃO AUTOMÁTICA
   -----------------------------------------------------
   Evita erro caso o JS carregue antes do HTML.
===================================================== */

function initCreatureCards() {
    createCreatureCards("all", 1);
    setupCreatureFilters();
    setupCreaturePagination();
    setupCreatureMobileFlip();
    setupCreaturePaginationResize();
}


/* =====================================================
   AJUSTE AO REDIMENSIONAR A TELA
   -----------------------------------------------------
   Ao mudar entre desktop e mobile, recalcula:
   - 4 cards por página no desktop;
   - 1 card por página no mobile.
===================================================== */

function setupCreaturePaginationResize() {
    if (window.creaturePaginationResizeReady) {
        return;
    }

    window.creaturePaginationResizeReady = true;

    window.addEventListener("resize", () => {
        const newPageSize = getCreaturePageSize();

        if (newPageSize === currentCreaturePageSize) {
            return;
        }

        currentCreaturePageSize = newPageSize;
        currentCreaturePage = 1;

        createCreatureCards(currentCreatureFilter, currentCreaturePage);
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCreatureCards);
} else {
    initCreatureCards();
}
