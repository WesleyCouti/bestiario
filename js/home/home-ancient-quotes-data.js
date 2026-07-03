/* =====================================================
   HOME-ANCIENT-QUOTES-DATA.JS
   Seção: Vozes do Mundo Antigo
===================================================== */

const homeAncientQuotesData = [
    {
        className: "druid",
        text: "A sabedoria cresce como as raízes: em silêncio, no escuro, sustentando tudo.",
        author: "— Celta Druida"
    },
    {
        className: "nordic",
        text: "Aquele que teme o destino já foi derrotado por ele.",
        author: "— Nórdica"
    },
    {
        className: "greek",
        text: "O destino pode ser escrito, mas a jornada é sempre escolhida.",
        author: "— Grega"
    },
    {
        className: "egyptian",
        text: "A alma que conhece seu caminho não teme a escuridão.",
        author: "— Egípcia"
    },
    {
        className: "mesopotamian",
        text: "O caos não é o oposto da ordem, mas sua origem.",
        author: "— Mesopotâmica"
    },
    {
        className: "hindu",
        text: "A mente inquieta cria sofrimento, a mente consciente cria liberdade.",
        author: "— Hindu"
    },
    {
        className: "yoruba",
        text: "Nada acontece sem propósito, mesmo aquilo que não compreendemos.",
        author: "— Africana (Yorubá / Orixás)"
    },
    {
        className: "chinese",
        text: "A água vence não pela força, mas pela persistência.",
        author: "— Chinesa"
    },
    {
        className: "biblical",
        text: "Aquele que anda com sabedoria encontra a vida.",
        author: "— Bíblia (Provérbios)"
    },
    {
        className: "aboriginal",
        text: "O Tempo do Sonho nunca terminou; ele ainda caminha conosco.",
        author: "— Aborígene"
    },
    {
        className: "african",
        text: "A aldeia cresce quando a memória é preservada.",
        author: "— Africana"
    },
    {
        className: "aztec",
        text: "A noite não derrota o Sol; apenas prepara seu próximo nascimento.",
        author: "— Asteca"
    },
    {
        className: "basque",
        text: "As montanhas escondem aquilo que os homens ainda não estão prontos para compreender.",
        author: "— Basca"
    },
    {
        className: "brazilian",
        text: "A floresta nunca está vazia; ela apenas escolhe quem pode enxergar seus guardiões.",
        author: "— Brasileira"
    },
    {
        className: "buddhist",
        text: "A paz floresce onde o desejo perde sua força.",
        author: "— Budista"
    },
    {
        className: "caribbean",
        text: "O mar guarda segredos que nenhuma tempestade consegue apagar.",
        author: "— Caribenha"
    },
    {
        className: "celtic",
        text: "A sabedoria cresce como o carvalho: lenta, firme e silenciosa.",
        author: "— Celta"
    },
    {
        className: "chilean",
        text: "A névoa não esconde os caminhos, apenas protege os segredos dos ancestrais.",
        author: "— Chilena"
    },
    {
        className: "scandinavian",
        text: "A neve cobre as pegadas, mas nunca os feitos honrados.",
        author: "— Escandinava"
    },
    {
        className: "slavic",
        text: "A floresta observa quem entra, mas decide quem retorna.",
        author: "— Eslava"
    },
    {
        className: "gaelic",
        text: "As colinas escondem portais para aqueles que ainda sabem sonhar.",
        author: "— Gaélica"
    },
    {
        className: "hawaiian",
        text: "O oceano une aquilo que a distância separa.",
        author: "— Havaiana"
    },
    {
        className: "inca",
        text: "As montanhas observam aquilo que os homens esquecem.",
        author: "— Inca"
    },
    {
        className: "christian",
        text: "Bem-aventurados os que promovem a paz.",
        author: "— Cristã"
    },
    {
        className: "indian",
        text: "Todo caminho exterior começa com uma jornada interior.",
        author: "— Indiana"
    },
    {
        className: "irish",
        text: "As fadas não roubam os homens; roubam apenas aqueles que perderam a imaginação.",
        author: "— Irlandesa"
    },
    {
        className: "japanese",
        text: "Até a flor mais breve deixa perfume na eternidade.",
        author: "— Japonesa"
    },
    {
        className: "jewish",
        text: "A sabedoria é um tesouro que aumenta quando compartilhado.",
        author: "— Judaica"
    },
    {
        className: "maya",
        text: "As estrelas são sementes lançadas pelos antigos deuses.",
        author: "— Maia"
    },
    {
        className: "maori",
        text: "A força do guerreiro nasce do respeito por seu povo.",
        author: "— Maori"
    },
    {
        className: "persian",
        text: "A luz revela o caminho, mas a escolha pertence ao viajante.",
        author: "— Persa"
    },
    {
        className: "roman",
        text: "A disciplina constrói impérios que a força sozinha não sustenta.",
        author: "— Romana"
    },
    {
        className: "tibetan",
        text: "A montanha permanece imóvel porque conhece a eternidade.",
        author: "— Tibetana"
    },
    {
        className: "tupi",
        text: "A mata fala para quem aprende a escutar.",
        author: "— Tupi-Guarani"
    },
    {
        className: "arabic",
        text: "O deserto ensina que a paciência é uma forma de coragem.",
        author: "— Árabe"
    }
];

/* =====================================================
   EMBARALHAMENTO
   Exibe todos os cards, mudando a ordem a cada reload
===================================================== */

function getShuffledAncientQuotes() {
    if (!Array.isArray(homeAncientQuotesData)) {
        return [];
    }

    return [...homeAncientQuotesData].sort(() => Math.random() - 0.5);
}

/* =====================================================
   GERADOR DOS CARDS
===================================================== */

function createAncientQuoteCards() {
    const quotesTrack = document.getElementById("quotesTrack");

    if (!quotesTrack) {
        return;
    }

    const selectedQuotes = getShuffledAncientQuotes();

    quotesTrack.innerHTML = selectedQuotes.map((quote) => `
        <article class="quote-card ${quote.className}">
            <span class="quote-symbol" aria-hidden="true"></span>

            <p class="quote-text">
                ${quote.text}
            </p>

            <span class="quote-author">
                ${quote.author}
            </span>
        </article>
    `).join("");
}

/* =====================================================
   CARROSSEL
===================================================== */

function setupAncientQuotesCarousel() {
    const track = document.getElementById("quotesTrack");
    const mobileScrollContainer = document.querySelector(".quotes-carousel");
    const prevButton = document.getElementById("prevBtn");
    const nextButton = document.getElementById("nextBtn");

    if (!track || !prevButton || !nextButton) {
        return;
    }

    function getScrollTarget() {
        if (window.innerWidth <= 768 && mobileScrollContainer) {
            return mobileScrollContainer;
        }

        return track;
    }

    function getScrollAmount() {
        const card = track.querySelector(".quote-card");

        if (!card) {
            return 0;
        }

        const trackStyles = window.getComputedStyle(track);
        const gap = parseInt(trackStyles.columnGap || trackStyles.gap, 10) || 24;

        return card.offsetWidth + gap;
    }

    nextButton.addEventListener("click", () => {
        getScrollTarget().scrollBy({
            left: getScrollAmount(),
            behavior: "smooth"
        });
    });

    prevButton.addEventListener("click", () => {
        getScrollTarget().scrollBy({
            left: -getScrollAmount(),
            behavior: "smooth"
        });
    });
}

/* =====================================================
   INICIALIZAÇÃO
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    createAncientQuoteCards();
    setupAncientQuotesCarousel();
});