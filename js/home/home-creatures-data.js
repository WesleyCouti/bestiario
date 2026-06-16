/* =====================================================
   HOME-CREATURES-DATA.JS
   -----------------------------------------------------
   Dados e renderização da seção:
   "Criaturas do Mundo Antigo"

   Este arquivo permite adicionar novas criaturas no futuro
   sem precisar aumentar o HTML.

   Como usar no HTML:

   1. Troque os cards fixos da seção por:

   <div class="creatures-grid" id="creaturesGrid"></div>

   2. Importe este arquivo antes do main.js:

   <script src="./js/home/home-creatures-data.js" defer></script>
   <script src="./js/main.js" defer></script>

   3. Caso seu main.js já chame createCreatureCards(),
      pode manter normalmente.

   4. Caso não chame, este arquivo também faz a renderização
      automaticamente quando o HTML estiver carregado.

   Observação mobile:
   - No mobile, tocar no card vira para o verso.
   - Tocar novamente no mesmo card volta para a imagem.
===================================================== */

const DEFAULT_CREATURE_IMAGE = "./assets/images/home/home-secao-criaturas/default-creature.png";

const homeCreaturesData = [
    {
        name: "Dragão",
        icon: "🔥",
        image: "./assets/images/home/home-secao-criaturas/dragao-home.png",
        alt: "Dragão",
        description: "Símbolo de força, sabedoria e poder ancestral. Guardião de tesouros e segredos antigos.",
        url: "#"
    },
    {
        name: "Fênix",
        icon: "☀",
        image: "./assets/images/home/home-secao-criaturas/fenix-home.png",
        alt: "Fênix",
        description: "Renascida das próprias cinzas, representa renovação, esperança e o ciclo eterno da vida.",
        url: "#"
    },
    {
        name: "Minotauro",
        icon: "♉",
        image: "./assets/images/home/home-secao-criaturas/minotauro-home.png",
        alt: "Minotauro",
        description: "Guardião do labirinto, criatura de força colossal e espírito indomável.",
        url: "#"
    },
    {
        name: "Medusa",
        icon: "🐍",
        image: "./assets/images/home/home-secao-criaturas/medusa-home.png",
        alt: "Medusa",
        description: "Seu olhar transforma em pedra, mas sua história vai muito além do que os olhos veem.",
        url: "#"
    },
    {
        name: "Fenrir",
        icon: "🐺",
        image: "./assets/images/home/home-secao-criaturas/fenrir-home.png",
        alt: "Fenrir",
        description: "Lobo colossal da mitologia nórdica, associado ao destino, à força indomável e ao Ragnarök.",
        url: "#"
    },
    {
        name: "Quimera",
        icon: "🔥",
        image: "./assets/images/home/home-secao-criaturas/quimera-home.png",
        alt: "Quimera",
        description: "Criatura da mitologia grega formada por partes de diferentes animais, símbolo do caos e do medo ancestral.",
        url: "#"
    },
    {
        name: "Tengu",
        icon: "⛩",
        image: "./assets/images/home/home-secao-criaturas/tengu-home.png",
        alt: "Tengu",
        description: "Ser sobrenatural japonês ligado às montanhas, aos ventos e à sabedoria dos guerreiros.",
        url: "#"
    },
    {
        name: "Wendigo",
        icon: "❄",
        image: "./assets/images/home/home-secao-criaturas/wendigo-home.png",
        alt: "Wendigo",
        description: "Espírito sombrio das tradições indígenas norte-americanas, associado ao inverno, à fome e à ganância.",
        url: "#"
    },
    {
        name: "Basilisco",
        icon: "👁",
        image: "./assets/images/home/home-secao-criaturas/basilisco-home.png",
        alt: "Basilisco",
        description: "Ser lendário europeu temido por seu olhar mortal e por sua presença venenosa.",
        url: "#"
    },
    {
        name: "Kitsune",
        icon: "🦊",
        image: "./assets/images/home/home-secao-criaturas/kitsune-home.png",
        alt: "Kitsune",
        description: "Raposa espiritual da mitologia japonesa, conhecida por sua inteligência, magia e capacidade de transformação.",
        url: "#"
    },
    {
        name: "Kelpie",
        icon: "🌊",
        image: "./assets/images/home/home-secao-criaturas/kelpie-home.png",
        alt: "Kelpie",
        description: "Espírito aquático das lendas gaélicas, muitas vezes visto como um cavalo misterioso ligado aos rios e lagos.",
        url: "#"
    },
    {
        name: "Jörmungandr",
        icon: "🐍",
        image: "./assets/images/home/home-secao-criaturas/jormungandr-home.png",
        alt: "Jörmungandr",
        description: "A serpente do mundo da mitologia nórdica, tão imensa que envolve a Terra com seu próprio corpo.",
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
   SORTEIO DAS CRIATURAS
   -----------------------------------------------------
   Retorna apenas 4 criaturas aleatórias por carregamento.
   Usa Fisher-Yates para um sorteio mais equilibrado.
===================================================== */

function getRandomCreatures(quantity = 4) {
    if (!Array.isArray(homeCreaturesData)) {
        return [];
    }

    const creatures = [...homeCreaturesData];

    for (let index = creatures.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));

        [creatures[index], creatures[randomIndex]] = [
            creatures[randomIndex],
            creatures[index]
        ];
    }

    const safeQuantity = Math.min(quantity, creatures.length);

    return creatures.slice(0, safeQuantity);
}


/* =====================================================
   GERADOR DOS CARDS DE CRIATURAS
===================================================== */

function createCreatureCards() {
    const creaturesGrid = document.getElementById("creaturesGrid");

    if (!creaturesGrid || !Array.isArray(homeCreaturesData)) {
        return;
    }

    if (homeCreaturesData.length === 0) {
        creaturesGrid.innerHTML = "";
        return;
    }

    const selectedCreatures = getRandomCreatures(4);

    creaturesGrid.innerHTML = selectedCreatures.map((creature) => {
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
    }).join("");
}


/* =====================================================
   CONTROLE DO FLIP NO MOBILE
   -----------------------------------------------------
   Permite tocar no card para virar e tocar novamente
   para voltar a exibir a imagem.
===================================================== */

function setupCreatureMobileFlip() {
    const creaturesGrid = document.getElementById("creaturesGrid");

    if (!creaturesGrid) {
        return;
    }

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
    createCreatureCards();
    setupCreatureMobileFlip();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCreatureCards);
} else {
    initCreatureCards();
}
