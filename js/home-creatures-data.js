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

   <script src="./js/home-mythology-carousel-data.js" defer></script>
   <script src="./js/home-creatures-data.js" defer></script>
   <script src="./js/main.js" defer></script>

   3. No main.js, chame createCreatureCards()
      antes ou depois dos outros setups.
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
   GERADOR DOS CARDS DE CRIATURAS
===================================================== */

function createCreatureCards() {
    const creaturesGrid = document.getElementById("creaturesGrid");

    if (!creaturesGrid || !Array.isArray(homeCreaturesData)) {
        return;
    }

    creaturesGrid.innerHTML = homeCreaturesData.map((creature) => `
        <article class="creature-card">
            <div class="creature-card-inner">

                <div class="creature-card-front">
                    <img
                        src="${creature.image}"
                        alt="${creature.alt}"
                        loading="lazy"
                        decoding="async">
                </div>

                <div class="creature-card-back">
                    <span class="creature-icon">${creature.icon}</span>

                    <h3>${creature.name}</h3>

                    <p>${creature.description}</p>

                    <div class="creature-card-divider"></div>

                    <a href="${creature.url}" class="creature-card-link">
                        Saiba Mais <span>›</span>
                    </a>
                </div>

            </div>
        </article>
    `).join("");
}
