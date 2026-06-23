/* =====================================================
   LEGENDS-CATEGORY-DATA.JS
   Página: Lendas
   Seção: Lendas e Criaturas por Categoria + Lugares Misteriosos

   Funções:
   - Guarda os dados das lendas por categoria.
   - Guarda os dados dos lugares misteriosos.
   - Embaralha os itens ao carregar a página.
   - Exibe 2 lendas por categoria.
   - Exibe 6 lugares misteriosos por carregamento.
   - Renderiza os cards de forma segura com createElement.
   - Usa imagem padrão caso alguma imagem não carregue.
   - Mantém acessibilidade básica com aria-live, aria-current e aria-label.
===================================================== */

/* =====================================================
   CONFIGURAÇÕES
===================================================== */

const LEGENDS_CATEGORY_CONFIG = {
    defaultCategory: "fantasmas",
    categoryVisibleLimit: 2,
    mysteriousVisibleLimit: 6,
    animationDelay: 180,

    selectors: {
        section: "#lendas-por-categoria",
        tabs: ".legends-category-tabs button",
        categoryList: ".legends-category-list",
        mysteriousGrid: "#mysteriousPlacesGrid"
    },

    fallbackImages: {
        category: "./assets/images/legends/category/default-category.png",
        mysterious: "./assets/images/legends/mysterious/default-mystery.png"
    }
};

/* =====================================================
   LENDAS E CRIATURAS POR CATEGORIA
===================================================== */

const legendsCategoryData = {
    fantasmas: [
        {
            name: "Loira do Banheiro",
            description: "Aparece em banheiros escolares pedindo um pente emprestado.",
            image: "./assets/images/legends/category/loira-banheiro.png",
            link: "#"
        },
        {
            name: "Bloody Mary",
            description: "Invocada ao espelho em noites escuras de lua cheia.",
            image: "./assets/images/legends/category/bloody-mary.png",
            link: "#"
        },
        {
            name: "Dama de Branco",
            description: "Uma aparição silenciosa associada a estradas antigas e casarões.",
            image: "./assets/images/legends/category/dama-branco.png",
            link: "#"
        },
        {
            name: "Noiva da Estrada",
            description: "Surge em rodovias antigas antes de desaparecer na neblina.",
            image: "./assets/images/legends/category/noiva-estrada.png",
            link: "#"
        },
        {
            name: "Mulher de Preto",
            description: "Figura misteriosa vista em casas abandonadas e cemitérios.",
            image: "./assets/images/legends/category/mulher-preto.png",
            link: "#"
        },
        {
            name: "Fantasma da Ópera",
            description: "Presença enigmática ligada a teatros antigos e corredores escuros.",
            image: "./assets/images/legends/category/fantasma-opera.png",
            link: "#"
        },
        {
            name: "Dama Cinzenta",
            description: "Espírito melancólico que aparece em castelos e mansões antigas.",
            image: "./assets/images/legends/category/dama-cinzenta.png",
            link: "#"
        },
        {
            name: "Aparição do Farol",
            description: "Sombra luminosa associada a faróis isolados e noites de tempestade.",
            image: "./assets/images/legends/category/aparicao-farol.png",
            link: "#"
        },
        {
            name: "Cavaleiro Sem Cabeça",
            description: "Figura espectral que cavalga pelas estradas durante a noite.",
            image: "./assets/images/legends/category/cavaleiro-sem-cabeca.png",
            link: "#"
        },
        {
            name: "Menina do Corredor",
            description: "Pequena aparição ligada a escolas antigas e prédios abandonados.",
            image: "./assets/images/legends/category/menina-corredor.png",
            link: "#"
        }
    ],

    monstros: [
        {
            name: "Kraken",
            description: "Criatura marinha gigantesca capaz de afundar embarcações.",
            image: "./assets/images/legends/category/kraken.png",
            link: "#"
        },
        {
            name: "Lobisomem",
            description: "Homem amaldiçoado que se transforma sob a luz da lua cheia.",
            image: "./assets/images/legends/category/lobisomem.png",
            link: "#"
        },
        {
            name: "Chupacabra",
            description: "Criatura misteriosa ligada a ataques noturnos em áreas rurais.",
            image: "./assets/images/legends/category/chupacabra.png",
            link: "#"
        },
        {
            name: "Minotauro",
            description: "Monstro com corpo humano e cabeça de touro, guardião de um labirinto.",
            image: "./assets/images/legends/category/minotauro.png",
            link: "#"
        },
        {
            name: "Hidra",
            description: "Serpente monstruosa de muitas cabeças presente em lendas antigas.",
            image: "./assets/images/legends/category/hidra.png",
            link: "#"
        },
        {
            name: "Quimera",
            description: "Criatura híbrida formada por partes de diferentes animais lendários.",
            image: "./assets/images/legends/category/quimera.png",
            link: "#"
        },
        {
            name: "Basilisco",
            description: "Monstro temido por seu olhar mortal e presença venenosa.",
            image: "./assets/images/legends/category/basilisco.png",
            link: "#"
        },
        {
            name: "Yeti",
            description: "Ser misterioso das montanhas geladas, também chamado de Abominável Homem das Neves.",
            image: "./assets/images/legends/category/yeti.png",
            link: "#"
        },
        {
            name: "Pé Grande",
            description: "Criatura lendária das florestas, conhecida por pegadas enormes.",
            image: "./assets/images/legends/category/pe-grande.png",
            link: "#"
        }
    ],

    protetores: [
        {
            name: "Curupira",
            description: "Guardião das matas conhecido por proteger a floresta.",
            image: "./assets/images/legends/category/curupira.png",
            link: "#"
        },
        {
            name: "Boitatá",
            description: "Ser flamejante que protege os campos e assusta invasores.",
            image: "./assets/images/legends/category/boitata.png",
            link: "#"
        },
        {
            name: "Boto",
            description: "Figura encantada dos rios ligada a mistérios amazônicos.",
            image: "./assets/images/legends/category/boto.png",
            link: "#"
        },
        {
            name: "Iara",
            description: "Encantada das águas, protetora dos rios e dos mistérios aquáticos.",
            image: "./assets/images/legends/category/iara.png",
            link: "#"
        },
        {
            name: "Saci-Pererê",
            description: "Travesso guardião das matas, ligado aos redemoinhos e às brincadeiras.",
            image: "./assets/images/legends/category/saci.png",
            link: "#"
        },
        {
            name: "Caipora",
            description: "Entidade protetora dos animais e dos caminhos da floresta.",
            image: "./assets/images/legends/category/caipora.png",
            link: "#"
        },
        {
            name: "Anhangá",
            description: "Espírito protetor das matas e dos animais selvagens.",
            image: "./assets/images/legends/category/anhanga.png",
            link: "#"
        },
        {
            name: "Mapinguari",
            description: "Criatura da floresta que protege regiões profundas e inacessíveis.",
            image: "./assets/images/legends/category/mapinguari.png",
            link: "#"
        },
        {
            name: "Mãe-do-Ouro",
            description: "Guardião luminoso das riquezas escondidas na terra.",
            image: "./assets/images/legends/category/mae-do-ouro.png",
            link: "#"
        }
    ],

    espiritos: [
        {
            name: "Banshee",
            description: "Espírito do folclore irlandês associado a presságios familiares.",
            image: "./assets/images/legends/category/banshee.png",
            link: "#"
        },
        {
            name: "Yuki-Onna",
            description: "Espírito da neve presente em histórias japonesas antigas.",
            image: "./assets/images/legends/category/yuki-onna.png",
            link: "#"
        },
        {
            name: "Kitsune",
            description: "Espírito raposa capaz de enganar, proteger ou revelar sabedoria.",
            image: "./assets/images/legends/category/kitsune.png",
            link: "#"
        },
        {
            name: "Teke Teke",
            description: "Espírito urbano japonês conhecido por aparições repentinas.",
            image: "./assets/images/legends/category/teke-teke.png",
            link: "#"
        },
        {
            name: "Onryō",
            description: "Espírito vingativo presente em antigas histórias japonesas.",
            image: "./assets/images/legends/category/onryo.png",
            link: "#"
        },
        {
            name: "Dullahan",
            description: "Espírito cavaleiro sem cabeça do folclore irlandês.",
            image: "./assets/images/legends/category/dullahan.png",
            link: "#"
        },
        {
            name: "La Llorona",
            description: "Espírito choroso presente em lendas populares da América Latina.",
            image: "./assets/images/legends/category/la-llorona.png",
            link: "#"
        },
        {
            name: "Mula Sem Cabeça",
            description: "Entidade envolta em fogo presente no folclore brasileiro.",
            image: "./assets/images/legends/category/mula-sem-cabeca.png",
            link: "#"
        },
        {
            name: "Aka Manto",
            description: "Espírito urbano ligado a banheiros e escolhas misteriosas.",
            image: "./assets/images/legends/category/aka-manto.png",
            link: "#"
        }
    ]
};

/* =====================================================
   LUGARES MISTERIOSOS DO MUNDO
===================================================== */

const mysteriousPlacesData = [
    {
        name: "Triângulo das Bermudas",
        image: "./assets/images/legends/mysterious/triangulo-bermudas.png",
        link: "#"
    },
    {
        name: "Ilha da Páscoa",
        image: "./assets/images/legends/mysterious/ilha-da-pascoa.png",
        link: "#"
    },
    {
        name: "Floresta de Aokigahara",
        image: "./assets/images/legends/mysterious/aokigahara.png",
        link: "#"
    },
    {
        name: "Stonehenge",
        image: "./assets/images/legends/mysterious/stonehenge.png",
        link: "#"
    },
    {
        name: "Ilha das Bonecas",
        image: "./assets/images/legends/mysterious/ilha-das-bonecas.png",
        link: "#"
    },
    {
        name: "Castelo de Bran",
        image: "./assets/images/legends/mysterious/castelo-de-bran.png",
        link: "#"
    },
    {
        name: "Catacumbas de Paris",
        image: "./assets/images/legends/mysterious/catacumbas-paris.png",
        link: "#"
    },
    {
        name: "Área 51",
        image: "./assets/images/legends/mysterious/area-51.png",
        link: "#"
    },
    {
        name: "Monte Roraima",
        image: "./assets/images/legends/mysterious/monte-roraima.png",
        link: "#"
    },
    {
        name: "Machu Picchu",
        image: "./assets/images/legends/mysterious/machu-picchu.png",
        link: "#"
    },
    {
        name: "Ilha de Poveglia",
        image: "./assets/images/legends/mysterious/ilha-poveglia.png",
        link: "#"
    },
    {
        name: "Torre de Londres",
        image: "./assets/images/legends/mysterious/torre-de-londres.png",
        link: "#"
    }
];

/* =====================================================
   FUNÇÕES UTILITÁRIAS
===================================================== */

function shuffleItems(array) {
    if (!Array.isArray(array)) return [];

    const shuffled = [...array];

    for (let index = shuffled.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
    }

    return shuffled;
}

function getLimitedRandomItems(array, limit) {
    return shuffleItems(array).slice(0, limit);
}

function setImageFallback(imageElement, fallbackImage) {
    if (!imageElement || !fallbackImage) return;

    imageElement.addEventListener("error", () => {
        imageElement.src = fallbackImage;
    }, { once: true });
}

function createImageElement({ src, alt, fallback }) {
    const image = document.createElement("img");

    image.src = src || fallback;
    image.alt = alt || "";
    image.loading = "lazy";
    image.decoding = "async";

    setImageFallback(image, fallback);

    return image;
}

function createEmptyMessage(message) {
    const paragraph = document.createElement("p");
    paragraph.className = "legends-empty-message";
    paragraph.textContent = message;

    return paragraph;
}

function clearElement(element) {
    if (!element) return;

    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

/* =====================================================
   CRIA CARD DE CATEGORIA
===================================================== */

function createCategoryItem(item) {
    const article = document.createElement("article");
    article.className = "legends-category-item";

    const image = createImageElement({
        src: item.image,
        alt: item.name,
        fallback: LEGENDS_CATEGORY_CONFIG.fallbackImages.category
    });

    const content = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = item.name;

    const description = document.createElement("p");
    description.textContent = item.description;

    const link = document.createElement("a");
    link.href = item.link || "#";
    link.textContent = "Saiba mais →";
    link.setAttribute("aria-label", `Saiba mais sobre ${item.name}`);

    content.append(title, description, link);
    article.append(image, content);

    return article;
}

/* =====================================================
   RENDERIZA CATEGORIAS
===================================================== */

function initLegendsCategoryTabs() {
    const section = document.querySelector(LEGENDS_CATEGORY_CONFIG.selectors.section);
    if (!section) return;

    const tabs = section.querySelectorAll(LEGENDS_CATEGORY_CONFIG.selectors.tabs);
    const list = section.querySelector(LEGENDS_CATEGORY_CONFIG.selectors.categoryList);

    if (!tabs.length || !list) return;

    let activeCategory = LEGENDS_CATEGORY_CONFIG.defaultCategory;

    function updateActiveTab(categoryName) {
        tabs.forEach((tab) => {
            const isActive = tab.dataset.category === categoryName;

            tab.classList.toggle("active", isActive);
            tab.setAttribute("aria-current", isActive ? "true" : "false");
        });
    }

    function renderCategory(categoryName, forceRender = false) {
        if (!forceRender && categoryName === activeCategory && list.children.length) return;

        const items = legendsCategoryData[categoryName] || [];
        const visibleItems = getLimitedRandomItems(
            items,
            LEGENDS_CATEGORY_CONFIG.categoryVisibleLimit
        );

        activeCategory = categoryName;
        updateActiveTab(categoryName);

        list.classList.add("is-changing");

        window.setTimeout(() => {
            const fragment = document.createDocumentFragment();

            if (!visibleItems.length) {
                fragment.appendChild(createEmptyMessage("Nenhuma lenda encontrada nesta categoria."));
            } else {
                visibleItems.forEach((item) => {
                    fragment.appendChild(createCategoryItem(item));
                });
            }

            clearElement(list);
            list.appendChild(fragment);
            list.classList.remove("is-changing");
        }, LEGENDS_CATEGORY_CONFIG.animationDelay);
    }

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const category = tab.dataset.category;

            if (!category || !legendsCategoryData[category]) return;

            renderCategory(category);
        });
    });

    renderCategory(LEGENDS_CATEGORY_CONFIG.defaultCategory, true);
}

/* =====================================================
   CRIA CARD DE LUGAR MISTERIOSO
===================================================== */

function createMysteriousPlaceCard(place) {
    const article = document.createElement("article");
    article.className = "legends-mystery-card";

    const link = document.createElement("a");
    link.href = place.link || "#";
    link.setAttribute("aria-label", `Saiba mais sobre ${place.name}`);

    const image = createImageElement({
        src: place.image,
        alt: place.name,
        fallback: LEGENDS_CATEGORY_CONFIG.fallbackImages.mysterious
    });

    const title = document.createElement("h3");
    title.textContent = place.name;

    link.append(image, title);
    article.appendChild(link);

    return article;
}

/* =====================================================
   RENDERIZA LUGARES MISTERIOSOS
===================================================== */

function initMysteriousPlaces() {
    const grid = document.querySelector(LEGENDS_CATEGORY_CONFIG.selectors.mysteriousGrid);
    if (!grid) return;

    const visiblePlaces = getLimitedRandomItems(
        mysteriousPlacesData,
        LEGENDS_CATEGORY_CONFIG.mysteriousVisibleLimit
    );

    const fragment = document.createDocumentFragment();

    if (!visiblePlaces.length) {
        fragment.appendChild(createEmptyMessage("Nenhum lugar misterioso encontrado."));
    } else {
        visiblePlaces.forEach((place) => {
            fragment.appendChild(createMysteriousPlaceCard(place));
        });
    }

    clearElement(grid);
    grid.appendChild(fragment);
}


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initLegendsCategoryTabs();
    initMysteriousPlaces();
});
