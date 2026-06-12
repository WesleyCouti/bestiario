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

   <script src="./js/home-creatures-data.js" defer></script>
   <script src="./js/main.js" defer></script>

   3. Caso seu main.js já chame createCreatureCards(),
      pode manter normalmente.

   4. Caso não chame, este arquivo também faz a renderização
      automaticamente quando o HTML estiver carregado.
===================================================== */

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

    creaturesGrid.innerHTML = homeCreaturesData.map((creature) => {
        const name = escapeHTML(creature.name || "Criatura");
        const icon = escapeHTML(creature.icon || "✦");
        const image = escapeHTML(creature.image || "");
        const alt = escapeHTML(creature.alt || creature.name || "Imagem da criatura");
        const description = escapeHTML(creature.description || "Mistério ancestral ainda não revelado.");
        const url = escapeHTML(creature.url || "#");

        return `
            <article class="creature-card">
                <div class="creature-card-inner">

                    <div class="creature-card-front">
                        <img
                            src="${image}"
                            alt="${alt}"
                            loading="lazy"
                            decoding="async">
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
   INICIALIZAÇÃO AUTOMÁTICA
   -----------------------------------------------------
   Evita erro caso o JS carregue antes do HTML.
===================================================== */

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createCreatureCards);
} else {
    createCreatureCards();
}
