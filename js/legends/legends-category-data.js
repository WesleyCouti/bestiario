/* =====================================================
   LEGENDS-CATEGORY-DATA.JS
   Seção: Lendas e Criaturas por Categoria

   Funções:
   - Guarda os personagens por categoria.
   - Mostra 2 itens por vez.
   - Embaralha a exibição ao carregar.
   - Troca a lista ao clicar nos botões.
===================================================== */

const legendsCategoryData = {
    fantasmas: [
        { name: "Loira do Banheiro", description: "Aparece em banheiros escolares pedindo um pente emprestado.", image: "./assets/images/legends/category/loira-banheiro.png", link: "#" },
        { name: "Bloody Mary", description: "Invocada ao espelho em noites escuras de lua cheia.", image: "./assets/images/legends/category/bloody-mary.png", link: "#" },
        { name: "Dama de Branco", description: "Uma aparição silenciosa associada a estradas antigas e casarões.", image: "./assets/images/legends/category/dama-branco.png", link: "#" },
        { name: "Noiva da Estrada", description: "Surge em rodovias antigas antes de desaparecer na neblina.", image: "./assets/images/legends/category/noiva-estrada.png", link: "#" },
        { name: "Mulher de Preto", description: "Figura misteriosa vista em casas abandonadas e cemitérios.", image: "./assets/images/legends/category/mulher-preto.png", link: "#" },
        { name: "Fantasma da Ópera", description: "Presença enigmática ligada a teatros antigos e corredores escuros.", image: "./assets/images/legends/category/fantasma-opera.png", link: "#" },
        { name: "Dama Cinzenta", description: "Espírito melancólico que aparece em castelos e mansões antigas.", image: "./assets/images/legends/category/dama-cinzenta.png", link: "#" },
        { name: "Aparição do Farol", description: "Sombra luminosa associada a faróis isolados e noites de tempestade.", image: "./assets/images/legends/category/aparicao-farol.png", link: "#" },
        { name: "Cavaleiro Sem Cabeça", description: "Figura espectral que cavalga pelas estradas durante a noite.", image: "./assets/images/legends/category/cavaleiro-sem-cabeca.png", link: "#" },
        { name: "Menina do Corredor", description: "Pequena aparição ligada a escolas antigas e prédios abandonados.", image: "./assets/images/legends/category/menina-corredor.png", link: "#" }
    ],

    monstros: [
        { name: "Kraken", description: "Criatura marinha gigantesca capaz de afundar embarcações.", image: "./assets/images/legends/category/kraken.png", link: "#" },
        { name: "Lobisomem", description: "Homem amaldiçoado que se transforma sob a luz da lua cheia.", image: "./assets/images/legends/category/lobisomem.png", link: "#" },
        { name: "Chupacabra", description: "Criatura misteriosa ligada a ataques noturnos em áreas rurais.", image: "./assets/images/legends/category/chupacabra.png", link: "#" },
        { name: "Minotauro", description: "Monstro com corpo humano e cabeça de touro, guardião de um labirinto.", image: "./assets/images/legends/category/minotauro.png", link: "#" },
        { name: "Hidra", description: "Serpente monstruosa de muitas cabeças presente em lendas antigas.", image: "./assets/images/legends/category/hidra.png", link: "#" },
        { name: "Quimera", description: "Criatura híbrida formada por partes de diferentes animais lendários.", image: "./assets/images/legends/category/quimera.png", link: "#" },
        { name: "Basilisco", description: "Monstro temido por seu olhar mortal e presença venenosa.", image: "./assets/images/legends/category/basilisco.png", link: "#" },
        { name: "Wendigo", description: "Criatura sombria associada ao frio, à fome e às florestas isoladas.", image: "./assets/images/legends/category/wendigo.png", link: "#" },
        { name: "Yeti", description: "Ser misterioso das montanhas geladas, também chamado de Abominável Homem das Neves.", image: "./assets/images/legends/category/yeti.png", link: "#" },
        { name: "Pé Grande", description: "Criatura lendária das florestas, conhecida por pegadas enormes.", image: "./assets/images/legends/category/pe-grande.png", link: "#" }
    ],

    protetores: [
        { name: "Curupira", description: "Guardião das matas conhecido por proteger a floresta.", image: "./assets/images/legends/category/curupira.png", link: "#" },
        { name: "Boitatá", description: "Ser flamejante que protege os campos e assusta invasores.", image: "./assets/images/legends/category/boitata.png", link: "#" },
        { name: "Boto", description: "Figura encantada dos rios ligada a mistérios amazônicos.", image: "./assets/images/legends/category/boto.png", link: "#" },
        { name: "Iara", description: "Encantada das águas, protetora dos rios e dos mistérios aquáticos.", image: "./assets/images/legends/category/iara.png", link: "#" },
        { name: "Saci-Pererê", description: "Travesso guardião das matas, ligado aos redemoinhos e às brincadeiras.", image: "./assets/images/legends/category/saci.png", link: "#" },
        { name: "Caipora", description: "Entidade protetora dos animais e dos caminhos da floresta.", image: "./assets/images/legends/category/caipora.png", link: "#" },
        { name: "Anhangá", description: "Espírito protetor das matas e dos animais selvagens.", image: "./assets/images/legends/category/anhanga.png", link: "#" },
        { name: "Mapinguari", description: "Criatura da floresta que protege regiões profundas e inacessíveis.", image: "./assets/images/legends/category/mapinguari.png", link: "#" },
        { name: "Tupã", description: "Figura poderosa ligada ao trovão, à natureza e à força ancestral.", image: "./assets/images/legends/category/tupa.png", link: "#" },
        { name: "Mãe-do-Ouro", description: "Guardião luminoso das riquezas escondidas na terra.", image: "./assets/images/legends/category/mae-do-ouro.png", link: "#" }
    ],

    espiritos: [
        { name: "Banshee", description: "Espírito do folclore irlandês associado a presságios familiares.", image: "./assets/images/legends/category/banshee.png", link: "#" },
        { name: "Yuki-Onna", description: "Espírito da neve presente em histórias japonesas antigas.", image: "./assets/images/legends/category/yuki-onna.png", link: "#" },
        { name: "Kuchisake-Onna", description: "Espírito urbano japonês envolto em medo e mistério.", image: "./assets/images/legends/category/kuchisake-onna.png", link: "#" },
        { name: "Kitsune", description: "Espírito raposa capaz de enganar, proteger ou revelar sabedoria.", image: "./assets/images/legends/category/kitsune.png", link: "#" },
        { name: "Teke Teke", description: "Espírito urbano japonês conhecido por aparições repentinas.", image: "./assets/images/legends/category/teke-teke.png", link: "#" },
        { name: "Onryō", description: "Espírito vingativo presente em antigas histórias japonesas.", image: "./assets/images/legends/category/onryo.png", link: "#" },
        { name: "Dullahan", description: "Espírito cavaleiro sem cabeça do folclore irlandês.", image: "./assets/images/legends/category/dullahan.png", link: "#" },
        { name: "La Llorona", description: "Espírito choroso presente em lendas populares da América Latina.", image: "./assets/images/legends/category/la-llorona.png", link: "#" },
        { name: "Mula Sem Cabeça", description: "Entidade envolta em fogo presente no folclore brasileiro.", image: "./assets/images/legends/category/mula-sem-cabeca.png", link: "#" },
        { name: "Aka Manto", description: "Espírito urbano ligado a banheiros e escolhas misteriosas.", image: "./assets/images/legends/category/aka-manto.png", link: "#" }
    ]
};

function shuffleLegendsCategoryItems(array) {
    const shuffled = [...array];

    for (let index = shuffled.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
    }

    return shuffled;
}

function initLegendsCategoryTabs() {
    const section = document.querySelector("#lendas-por-categoria");
    if (!section) return;

    const tabs = section.querySelectorAll(".legends-category-tabs button");
    const list = section.querySelector(".legends-category-list");

    if (!tabs.length || !list) return;

    function renderCategory(categoryName) {
        const items = legendsCategoryData[categoryName] || [];
        const visibleItems = shuffleLegendsCategoryItems(items).slice(0, 2);

        list.classList.add("is-changing");

        setTimeout(() => {
            list.innerHTML = "";

            visibleItems.forEach((item) => {
                const article = document.createElement("article");
                article.className = "legends-category-item";

                article.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" loading="lazy" decoding="async">

                    <div>
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <a href="${item.link}">Saiba mais →</a>
                    </div>
                `;

                list.appendChild(article);
            });

            list.classList.remove("is-changing");
        }, 180);
    }

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const category = tab.dataset.category;

            if (!category) return;

            tabs.forEach((button) => button.classList.remove("active"));
            tab.classList.add("active");

            renderCategory(category);
        });
    });

    renderCategory("fantasmas");
}

document.addEventListener("DOMContentLoaded", initLegendsCategoryTabs);