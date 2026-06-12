/* =====================================================
   HOME-LEGENDS-DATA.JS
   -----------------------------------------------------
   Dados e renderização da seção:
   "Lendas do Mundo Antigo"
===================================================== */

const homeLegendsData = [
    {
        name: "A Loira do Banheiro",
        image: "./assets/images/home/home-secao-lendas/loira-do-banheiro-home.png",
        alt: "A Loira do Banheiro",
        url: "#"
    },
    {
        name: "Teke Teke",
        image: "./assets/images/home/home-secao-lendas/teke-teke-home.png",
        alt: "Teke Teke",
        url: "#"
    },
    {
        name: "Kuchisake-onna",
        image: "./assets/images/home/home-secao-lendas/kuchisake-onna-home.png",
        alt: "Kuchisake-onna",
        url: "#"
    },
    {
        name: "Aka Manto",
        image: "./assets/images/home/home-secao-lendas/aka-manto-home.png",
        alt: "Aka Manto",
        url: "#"
    },
    {
        name: "Jack the Killer",
        image: "./assets/images/home/home-secao-lendas/jack-the-killer-home.png",
        alt: "Jack the Killer",
        url: "#"
    },
    {
        name: "Cabra Cabriola",
        image: "./assets/images/home/home-secao-lendas/cabra-cabriola-home.png",
        alt: "Cabra Cabriola",
        url: "#"
    },
    {
        name: "Pisadeira",
        image: "./assets/images/home/home-secao-lendas/pisadeira-home.png",
        alt: "Pisadeira",
        url: "#"
    }
];


/* =====================================================
   GERADOR DOS CARDS DE LENDAS
===================================================== */

function createLegendCards() {
    const legendsTrack = document.getElementById("legendsTrack");

    if (!legendsTrack || !Array.isArray(homeLegendsData)) {
        return;
    }

    if (legendsTrack.dataset.rendered === "true") {
        return;
    }

    legendsTrack.innerHTML = homeLegendsData.map((legend) => `
        <article class="legend-card">
            <img
                src="${legend.image}"
                alt="${legend.alt}"
                loading="lazy"
                decoding="async">

            <div class="legend-overlay">
                <h3>${legend.name}</h3>
            </div>
        </article>
    `).join("");

    legendsTrack.dataset.rendered = "true";
}