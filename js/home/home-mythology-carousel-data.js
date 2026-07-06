/* =====================================================
   HOME-MYTHOLOGY-CAROUSEL-DATA.JS
   -----------------------------------------------------
   Dados e renderização do carrossel infinito de mitologias
   da Home do Bestiário.

   Como usar no HTML:

   1. Troque o conteúdo grande do carrossel por:

   <div class="carousel-track" id="mythologyCarouselTrack"></div>

   2. Importe este arquivo antes do main.js:

   <script src="./js/home-mythology-carousel-data.js" defer></script>
   <script src="./js/main.js" defer></script>

   3. No main.js, chame createMythologyCarouselCards()
      antes de setupInfiniteMythologyCarousel().
===================================================== */

const mythologyCarouselData = [
    {
        name: "Abenaki",
        title: "Mitologia Abenaki",
        category: "Povos Originários",
        image: "./assets/images/home/home-secao-mitologias/abenaki.png",
        alt: "Mitologia Abenaki",
        description: "Tradição espiritual ligada à natureza, aos animais sagrados, aos espíritos ancestrais e às forças criadoras do mundo.",
        url: "#"
    },
    {
        name: "Aborígene",
        title: "Mitologia Aborígene",
        category: "Tempo do Sonho",
        image: "./assets/images/home/home-secao-mitologias/aborigene.png",
        alt: "Mitologia Aborígene",
        description: "Cosmovisão ancestral marcada pelo Tempo do Sonho, espíritos criadores, paisagens sagradas e conexão profunda com a terra.",
        url: "#"
    },
    {
        name: "Africana",
        title: "Mitologia Africana",
        category: "Reinos Ancestrais",
        image: "./assets/images/home/home-secao-mitologias/africana.png",
        alt: "Mitologia Africana",
        description: "Conjunto rico de divindades, espíritos, heróis culturais, animais simbólicos e forças ligadas à criação e à ancestralidade.",
        url: "#"
    },
    {
        name: "Alemã",
        title: "Mitologia Alemã",
        category: "Folclore Europeu",
        image: "./assets/images/home/home-secao-mitologias/alema.png",
        alt: "Mitologia Alemã",
        description: "Lendas sombrias, florestas antigas, espíritos, criaturas fantásticas e histórias populares preservadas no imaginário germânico.",
        url: "#"
    },
    {
        name: "Americana",
        title: "Mitologia Americana",
        category: "Lendas Populares",
        image: "./assets/images/home/home-secao-mitologias/americana.png",
        alt: "Mitologia Americana",
        description: "Criaturas misteriosas, lendas urbanas, heróis populares e relatos que moldaram o imaginário dos Estados Unidos.",
        url: "#"
    },
    {
        name: "Árabe",
        title: "Mitologia Árabe",
        category: "Desertos e Gênios",
        image: "./assets/images/home/home-secao-mitologias/arabe.png",
        alt: "Mitologia Árabe",
        description: "Universo de gênios, seres invisíveis, desertos encantados, contos maravilhosos e forças espirituais antigas.",
        url: "#"
    },
    {
        name: "Argentina",
        title: "Mitologia Argentina",
        category: "Lendas do Sul",
        image: "./assets/images/home/home-secao-mitologias/argentina.png",
        alt: "Mitologia Argentina",
        description: "Lendas populares marcadas por espíritos, entidades rurais, criaturas noturnas e narrativas tradicionais das regiões argentinas.",
        url: "#"
    },
    {
        name: "Asteca",
        title: "Mitologia Asteca",
        category: "Império Solar",
        image: "./assets/images/home/home-secao-mitologias/asteca.png",
        alt: "Mitologia Asteca",
        description: "Deuses solares, serpentes emplumadas, sacrifícios sagrados e forças cósmicas ligadas ao equilíbrio do universo.",
        url: "#"
    },
    {
        name: "Basca",
        title: "Mitologia Basca",
        category: "Montanhas Sagradas",
        image: "./assets/images/home/home-secao-mitologias/basca.png",
        alt: "Mitologia Basca",
        description: "Mitologia antiga com deusas da terra, espíritos das cavernas, gigantes e entidades ligadas às montanhas e tempestades.",
        url: "#"
    },
    {
        name: "Brasileira",
        title: "Mitologia Brasileira",
        category: "Folclore Nacional",
        image: "./assets/images/home/home-secao-mitologias/brasileira.png",
        alt: "Mitologia Brasileira",
        description: "Seres encantados, protetores das matas, lendas indígenas, influências africanas e criaturas populares do imaginário brasileiro.",
        url: "#"
    },
    {
        name: "Budista",
        title: "Mitologia Budista",
        category: "Iluminação",
        image: "./assets/images/home/home-secao-mitologias/budista.png",
        alt: "Mitologia Budista",
        description: "Seres celestiais, guardiões espirituais, ciclos de renascimento e símbolos ligados à sabedoria, compaixão e iluminação.",
        url: "#"
    },
    {
        name: "Caribenha",
        title: "Mitologia Caribenha",
        category: "Ilhas Místicas",
        image: "./assets/images/home/home-secao-mitologias/caribenha.png",
        alt: "Mitologia Caribenha",
        description: "Lendas insulares com espíritos, entidades marítimas, forças ancestrais e tradições populares marcadas por mistério e magia.",
        url: "#"
    },
    {
        name: "Catalana",
        title: "Mitologia Catalana",
        category: "Lendas Ibéricas",
        image: "./assets/images/home/home-secao-mitologias/catalana.png",
        alt: "Mitologia Catalana",
        description: "Dragões, gigantes, bruxas, seres encantados e tradições populares presentes no imaginário mítico da Catalunha.",
        url: "#"
    },
    {
        name: "Celta",
        title: "Mitologia Celta",
        category: "Druidas Antigos",
        image: "./assets/images/home/home-secao-mitologias/celta.png",
        alt: "Mitologia Celta",
        description: "Florestas sagradas, povos feéricos, deuses guerreiros, druidas e forças espirituais conectadas à natureza ancestral.",
        url: "#"
    },
    {
        name: "Chilena",
        title: "Mitologia Chilena",
        category: "Lendas Andinas",
        image: "./assets/images/home/home-secao-mitologias/chilena.png",
        alt: "Mitologia Chilena",
        description: "Tradições marcadas por criaturas marítimas, espíritos da terra, lendas mapuches e mistérios das montanhas e ilhas.",
        url: "#"
    },
    {
        name: "Chinesa",
        title: "Mitologia Chinesa",
        category: "Dragões Celestiais",
        image: "./assets/images/home/home-secao-mitologias/chinesa.png",
        alt: "Mitologia Chinesa",
        description: "Dragões, imortais, imperadores celestiais, espíritos guardiões e forças cósmicas ligadas à harmonia universal.",
        url: "#"
    },
    {
        name: "Colombiana",
        title: "Mitologia Colombiana",
        category: "Lendas da Terra",
        image: "./assets/images/home/home-secao-mitologias/colombiana.png",
        alt: "Mitologia Colombiana",
        description: "Entidades populares, espíritos da natureza, assombrações tradicionais e narrativas ligadas às florestas e montanhas.",
        url: "#"
    },
    {
        name: "Cristã",
        title: "Mitologia Cristã",
        category: "Anjos e Profecias",
        image: "./assets/images/home/home-secao-mitologias/crista.png",
        alt: "Mitologia Cristã",
        description: "Anjos, demônios, milagres, profecias e narrativas sagradas que influenciaram séculos de cultura, fé e simbolismo.",
        url: "#"
    },
    {
        name: "Dinamarquesa",
        title: "Mitologia Dinamarquesa",
        category: "Norte Europeu",
        image: "./assets/images/home/home-secao-mitologias/dinamarquesa.png",
        alt: "Mitologia Dinamarquesa",
        description: "Lendas nórdicas e folclóricas com seres das florestas, espíritos antigos, guerreiros e criaturas do imaginário escandinavo.",
        url: "#"
    },
    {
        name: "Dominicana",
        title: "Mitologia Dominicana",
        category: "Caribe Místico",
        image: "./assets/images/home/home-secao-mitologias/dominicana.png",
        alt: "Mitologia Dominicana",
        description: "Lendas populares marcadas por assombrações, entidades misteriosas e histórias transmitidas pelas comunidades do Caribe.",
        url: "#"
    },
    {
        name: "Egípcia",
        title: "Mitologia Egípcia",
        category: "Nilo Sagrado",
        image: "./assets/images/home/home-secao-mitologias/egipcia.png",
        alt: "Mitologia Egípcia",
        description: "Deuses ancestrais, rituais funerários, entidades cósmicas e forças ligadas à eternidade, morte e renascimento.",
        url: "#"
    },
    {
        name: "Escandinava",
        title: "Mitologia Escandinava",
        category: "Reinos do Norte",
        image: "./assets/images/home/home-secao-mitologias/escandinava.png",
        alt: "Mitologia Escandinava",
        description: "Deuses, gigantes, valquírias, monstros e mundos conectados por uma cosmologia épica de gelo, fogo e destino.",
        url: "#"
    },
    {
        name: "Escocesa",
        title: "Mitologia Escocesa",
        category: "Terras Altas",
        image: "./assets/images/home/home-secao-mitologias/escocesa.png",
        alt: "Mitologia Escocesa",
        description: "Lendas de lagos profundos, fadas, espíritos das terras altas, criaturas misteriosas e tradições celtas preservadas.",
        url: "#"
    },
    {
        name: "Eslava",
        title: "Mitologia Eslava",
        category: "Florestas Antigas",
        image: "./assets/images/home/home-secao-mitologias/eslava.png",
        alt: "Mitologia Eslava",
        description: "Deuses da tempestade, espíritos domésticos, bruxas, florestas sombrias e entidades ligadas ao inverno e à fertilidade.",
        url: "#"
    },
    {
        name: "Europeia",
        title: "Mitologia Europeia",
        category: "Lendas do Velho Mundo",
        image: "./assets/images/home/home-secao-mitologias/europeia.png",
        alt: "Mitologia Europeia",
        description: "Conjunto de lendas, seres mágicos, tradições pagãs, criaturas medievais e símbolos do imaginário antigo europeu.",
        url: "#"
    },
    {
        name: "Filipina",
        title: "Mitologia Filipina",
        category: "Ilhas Ancestrais",
        image: "./assets/images/home/home-secao-mitologias/filipina.png",
        alt: "Mitologia Filipina",
        description: "Divindades, espíritos da natureza, criaturas noturnas e tradições orais vindas das ilhas e povos filipinos.",
        url: "#"
    },
    {
        name: "Finlandesa",
        title: "Mitologia Finlandesa",
        category: "Kalevala",
        image: "./assets/images/home/home-secao-mitologias/finlandesa.png",
        alt: "Mitologia Finlandesa",
        description: "Heróis mágicos, cantos sagrados, espíritos da floresta, criaturas antigas e forças ligadas à palavra e à criação.",
        url: "#"
    },
    {
        name: "Francesa",
        title: "Mitologia Francesa",
        category: "Lendas Medievais",
        image: "./assets/images/home/home-secao-mitologias/francesa.png",
        alt: "Mitologia Francesa",
        description: "Contos de fadas, criaturas mágicas, cavaleiros, dragões, santos lendários e tradições populares da França antiga.",
        url: "#"
    },
    {
        name: "Gaélica",
        title: "Mitologia Gaélica",
        category: "Povos Celtas",
        image: "./assets/images/home/home-secao-mitologias/gaelica.png",
        alt: "Mitologia Gaélica",
        description: "Heróis lendários, fadas, deuses antigos, reinos encantados e tradições espirituais dos povos gaélicos.",
        url: "#"
    },
    {
        name: "Grega",
        title: "Mitologia Grega",
        category: "Olimpianos",
        image: "./assets/images/home/home-secao-mitologias/grega.png",
        alt: "Mitologia Grega",
        description: "Deuses olímpicos, titãs, heróis lendários, monstros colossais e narrativas que moldaram o imaginário ocidental.",
        url: "#"
    },
    {
        name: "Haitiana",
        title: "Mitologia Haitiana",
        category: "Loas e Mistérios",
        image: "./assets/images/home/home-secao-mitologias/haitiana.png",
        alt: "Mitologia Haitiana",
        description: "Tradições espirituais, entidades ancestrais, ritos simbólicos e forças sagradas ligadas ao universo cultural haitiano.",
        url: "#"
    },
    {
        name: "Havaiana",
        title: "Mitologia Havaiana",
        category: "Ilhas Sagradas",
        image: "./assets/images/home/home-secao-mitologias/havaiana.png",
        alt: "Mitologia Havaiana",
        description: "Heróis navegadores, espíritos ancestrais e forças naturais associadas ao oceano, aos vulcões e à criação das ilhas.",
        url: "#"
    },
    {
        name: "Heráldica Europeia",
        title: "Mitologia Heráldica Europeia",
        category: "Brasões e Feras",
        image: "./assets/images/home/home-secao-mitologias/heraldica-europeia.png",
        alt: "Mitologia Heráldica Europeia",
        description: "Dragões, grifos, unicórnios, leões míticos e criaturas simbólicas presentes em brasões, reinos e linhagens nobres.",
        url: "#"
    },
    {
        name: "Hindu",
        title: "Mitologia Hindu",
        category: "Cosmos Sagrado",
        image: "./assets/images/home/home-secao-mitologias/hindu.png",
        alt: "Mitologia Hindu",
        description: "Divindades cósmicas, avatares, demônios, ciclos de criação e destruição, sabedoria espiritual e epopeias sagradas.",
        url: "#"
    },
    {
        name: "Holandesa",
        title: "Mitologia Holandesa",
        category: "Folclore Europeu",
        image: "./assets/images/home/home-secao-mitologias/holandesa.png",
        alt: "Mitologia Holandesa",
        description: "Seres das águas, espíritos ancestrais, figuras folclóricas e histórias preservadas nas tradições dos Países Baixos.",
        url: "#"
    },
    {
        name: "Húngara",
        title: "Mitologia Húngara",
        category: "Lendas Magiares",
        image: "./assets/images/home/home-secao-mitologias/hungara.png",
        alt: "Mitologia Húngara",
        description: "Tradições antigas com aves sagradas, heróis lendários, espíritos, xamanismo e narrativas do povo magiar.",
        url: "#"
    },
    {
        name: "Inca",
        title: "Mitologia Inca",
        category: "Filhos do Sol",
        image: "./assets/images/home/home-secao-mitologias/inca.png",
        alt: "Mitologia Inca",
        description: "Deuses solares, montanhas sagradas, ancestrais divinizados e forças naturais ligadas ao império andino.",
        url: "#"
    },
    {
        name: "Indiana",
        title: "Mitologia Indiana",
        category: "Épicos Sagrados",
        image: "./assets/images/home/home-secao-mitologias/indiana.png",
        alt: "Mitologia Indiana",
        description: "Lendas ancestrais, heróis épicos, seres sobrenaturais e narrativas que atravessam diferentes tradições culturais da Índia.",
        url: "#"
    },
    {
        name: "Indonésia",
        title: "Mitologia Indonésia",
        category: "Arquipélago Místico",
        image: "./assets/images/home/home-secao-mitologias/indonesia.png",
        alt: "Mitologia Indonésia",
        description: "Espíritos ancestrais, dragões, seres protetores, lendas insulares e tradições sagradas do arquipélago indonésio.",
        url: "#"
    },
    {
        name: "Inglesa",
        title: "Mitologia Inglesa",
        category: "Lendas Medievais",
        image: "./assets/images/home/home-secao-mitologias/inglesa.png",
        alt: "Mitologia Inglesa",
        description: "Cavaleiros, criaturas lendárias, florestas encantadas, reis míticos e narrativas populares da tradição inglesa.",
        url: "#"
    },
    {
        name: "Inuit",
        title: "Mitologia Inuit",
        category: "Gelo Ancestral",
        image: "./assets/images/home/home-secao-mitologias/inuit.png",
        alt: "Mitologia Inuit",
        description: "Espíritos do gelo, animais sagrados, entidades marítimas e histórias moldadas pelo frio, sobrevivência e natureza extrema.",
        url: "#"
    },
    {
        name: "Iorubá",
        title: "Mitologia Iorubá",
        category: "Orixás",
        image: "./assets/images/home/home-secao-mitologias/ioruba.png",
        alt: "Mitologia Iorubá",
        description: "Orixás, forças da natureza, ancestralidade, destino, rituais sagrados e entidades que representam aspectos da vida humana.",
        url: "#"
    },
    {
        name: "Irlandesa",
        title: "Mitologia Irlandesa",
        category: "Ilha Encantada",
        image: "./assets/images/home/home-secao-mitologias/irlandesa.png",
        alt: "Mitologia Irlandesa",
        description: "Tuatha Dé Danann, heróis, fadas, reinos invisíveis e histórias celtas cheias de magia, guerra e destino.",
        url: "#"
    },
    {
        name: "Japonesa",
        title: "Mitologia Japonesa",
        category: "Yokais e Kami",
        image: "./assets/images/home/home-secao-mitologias/japonesa.png",
        alt: "Mitologia Japonesa",
        description: "Yokais, kami, dragões celestiais, espíritos da natureza e entidades ligadas ao equilíbrio entre mundo humano e espiritual.",
        url: "#"
    },
    {
        name: "Judaica",
        title: "Mitologia Judaica",
        category: "Mistérios Antigos",
        image: "./assets/images/home/home-secao-mitologias/judaica.png",
        alt: "Mitologia Judaica",
        description: "Anjos, golems, demônios, sabedoria mística, tradições simbólicas e narrativas espirituais de origem antiga.",
        url: "#"
    },
    {
        name: "Lituana",
        title: "Mitologia Lituana",
        category: "Báltica",
        image: "./assets/images/home/home-secao-mitologias/lituana.png",
        alt: "Mitologia Lituana",
        description: "Deuses do trovão, espíritos da terra, serpentes sagradas, florestas antigas e tradições pagãs bálticas.",
        url: "#"
    },
    {
        name: "Maia",
        title: "Mitologia Maia",
        category: "Cosmos Mesoamericano",
        image: "./assets/images/home/home-secao-mitologias/maia.png",
        alt: "Mitologia Maia",
        description: "Deuses criadores, jaguares sagrados, mundos subterrâneos, calendários cósmicos e narrativas de criação e destruição.",
        url: "#"
    },
    {
        name: "Malaio",
        title: "Mitologia Malaio",
        category: "Sudeste Asiático",
        image: "./assets/images/home/home-secao-mitologias/malaio.png",
        alt: "Mitologia Malaio",
        description: "Espíritos da selva, criaturas noturnas, entidades protetoras e narrativas tradicionais do mundo malaio.",
        url: "#"
    },
    {
        name: "Maori",
        title: "Mitologia Maori",
        category: "Polinésia",
        image: "./assets/images/home/home-secao-mitologias/maori.png",
        alt: "Mitologia Maori",
        description: "Deuses criadores, heróis navegadores, espíritos ancestrais e forças naturais ligadas ao mar, céu e terra.",
        url: "#"
    },
    {
        name: "Mesopotâmica",
        title: "Mitologia Mesopotâmica",
        category: "Berço dos Mitos",
        image: "./assets/images/home/home-secao-mitologias/mesopotamica.png",
        alt: "Mitologia Mesopotâmica",
        description: "Deuses antigos, monstros primordiais, reis lendários, dilúvios sagrados e narrativas das primeiras civilizações.",
        url: "#"
    },
    {
        name: "Mexicana",
        title: "Mitologia Mexicana",
        category: "Mesoamérica",
        image: "./assets/images/home/home-secao-mitologias/mexicana.png",
        alt: "Mitologia Mexicana",
        description: "Serpentes sagradas, deuses solares, lendas populares, espíritos e tradições ancestrais do México antigo e moderno.",
        url: "#"
    },
    {
        name: "Nórdica",
        title: "Mitologia Nórdica",
        category: "Ragnarok",
        image: "./assets/images/home/home-secao-mitologias/nordica.png",
        alt: "Mitologia Nórdica",
        description: "Deuses guerreiros, gigantes, valquírias, lobos cósmicos e o destino final dos nove mundos no Ragnarok.",
        url: "#"
    },
    {
        name: "Persa",
        title: "Mitologia Persa",
        category: "Luz e Sombra",
        image: "./assets/images/home/home-secao-mitologias/persa.png",
        alt: "Mitologia Persa",
        description: "Forças do bem e do caos, seres celestiais, criaturas demoníacas e batalhas cósmicas entre luz e escuridão.",
        url: "#"
    },
    {
        name: "Portuguesa",
        title: "Mitologia Portuguesa",
        category: "Lendas Lusitanas",
        image: "./assets/images/home/home-secao-mitologias/portuguesa.png",
        alt: "Mitologia Portuguesa",
        description: "Mouras encantadas, monstros marítimos, lendas de castelos, santos populares e tradições mágicas lusitanas.",
        url: "#"
    },
    {
        name: "Romana",
        title: "Mitologia Romana",
        category: "Império e Deuses",
        image: "./assets/images/home/home-secao-mitologias/romana.png",
        alt: "Mitologia Romana",
        description: "Deuses adaptados ao poder imperial, heróis fundadores, rituais públicos e símbolos de guerra, ordem e destino.",
        url: "#"
    },
    {
        name: "Romena",
        title: "Mitologia Romena",
        category: "Cárpatos",
        image: "./assets/images/home/home-secao-mitologias/romena.png",
        alt: "Mitologia Romena",
        description: "Lendas sombrias, espíritos, vampiros folclóricos, criaturas das montanhas e tradições populares dos Cárpatos.",
        url: "#"
    },
    {
        name: "Tibetana",
        title: "Mitologia Tibetana",
        category: "Montanhas Sagradas",
        image: "./assets/images/home/home-secao-mitologias/tibetana.png",
        alt: "Mitologia Tibetana",
        description: "Guardiões espirituais, divindades iradas, símbolos de iluminação, montanhas sagradas e tradições místicas profundas.",
        url: "#"
    },
    {
        name: "Tupi-Guarani",
        title: "Mitologia Tupi-Guarani",
        category: "Brasil Ancestral",
        image: "./assets/images/home/home-secao-mitologias/tupi-guarani.png",
        alt: "Mitologia Tupi-Guarani",
        description: "Deuses criadores, espíritos da floresta, animais sagrados e narrativas indígenas ligadas à origem do mundo.",
        url: "#"
    },
    {
        name: "Turca",
        title: "Mitologia Turca",
        category: "Lobos e Céu",
        image: "./assets/images/home/home-secao-mitologias/turca.png",
        alt: "Mitologia Turca",
        description: "Lobos sagrados, espíritos celestes, xamanismo, mundos superiores e tradições míticas dos povos túrquicos.",
        url: "#"
    },
    {
        name: "Umbanda",
        title: "Mitologia Umbanda",
        category: "Guias e Ancestralidade",
        image: "./assets/images/home/home-secao-mitologias/umbanda.png",
        alt: "Mitologia Umbanda",
        description: "Guias espirituais, ancestralidade, entidades de luz e tradições que compõem uma das expressões religiosas mais marcantes do Brasil.",
        url: "#"
    }
];


/* =====================================================
   GERADOR DOS CARDS DO CARROSSEL
===================================================== */

function createMythologyCarouselCards() {
    const track = document.getElementById("mythologyCarouselTrack");

    if (!track || !Array.isArray(mythologyCarouselData)) {
        return;
    }

    if (track.dataset.rendered === "true") {
        return;
    }

    if (mythologyCarouselData.length === 0) {
        track.innerHTML = "";
        return;
    }

    track.innerHTML = mythologyCarouselData.map((mythology) => {
        const name = escapeHTML(mythology.name || "Mitologia");
        const title = escapeHTML(mythology.title || name);
        const category = escapeHTML(mythology.category || "Tradição Ancestral");
        const image = escapeHTML(mythology.image || "");
        const alt = escapeHTML(mythology.alt || title);
        const description = escapeHTML(mythology.description || "Descrição não disponível.");
        const url = escapeHTML(mythology.url || "#");
        const mythKey = normalizeMythologyKey(mythology.name || "");

        return `
            <div
                class="carousel-item"
                data-myth="${mythKey}"
                role="button"
                tabindex="0"
                aria-pressed="false"
                aria-label="Virar card da ${title}">

                <div class="myth-flip-card">
                    <div class="myth-flip-inner">

                        <div class="myth-flip-front">
                            <span class="myth-symbol-badge" aria-hidden="true"></span>

                            <img
                                src="${image}"
                                alt="${alt}"
                                loading="lazy"
                                decoding="async">

                            <div class="myth-front-overlay">
                                <span>Mitologia</span>
                                <h3>${name}</h3>
                                <p>${createShortMythologyDescription(description)}</p>
                            </div>

                            <span class="myth-card-button" aria-hidden="true">›</span>
                        </div>

                        <div class="myth-flip-back">
                            <span class="myth-category">${category}</span>

                            <h3>${title}</h3>

                            <p>${description}</p>

                            <a href="${url}" class="myth-button" aria-label="Explorar ${title}">
                                Explorar
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        `;
    }).join("");

    track.dataset.rendered = "true";

    setupMythologyCarouselFlip();
}

function createShortMythologyDescription(description) {
    const cleanText = String(description || "").trim();

    if (cleanText.length <= 88) {
        return cleanText;
    }

    return `${cleanText.slice(0, 88).trim()}...`;
}

function normalizeMythologyKey(value) {
    return String(value || "")
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ç/g, "c")
        .replace(/\s+/g, "-");
}


/* =====================================================
   FLIP DOS CARDS — CONTROLE POR CLIQUE
   -----------------------------------------------------
   Comportamento aplicado:
   - Clique no card: abre.
   - Clique novamente no mesmo card: fecha.
   - Clique em outro card: fecha o anterior e abre o novo.
   - Clique fora dos cards: fecha qualquer card aberto.
   - Enter ou Espaço também alternam o card.
   - O botão "Explorar" continua funcionando normalmente.
   - Funciona mesmo se o carrossel infinito clonar/recriar cards.
===================================================== */

function setupMythologyCarouselFlip() {
    const carouselTrack = document.getElementById("mythologyCarouselTrack");

    if (!carouselTrack) {
        return;
    }

    if (carouselTrack.dataset.flipDelegationReady === "true") {
        return;
    }

    carouselTrack.dataset.flipDelegationReady = "true";

    carouselTrack.addEventListener("click", (event) => {
        const clickedLink = event.target.closest("a");
        const clickedCard = event.target.closest(".carousel-item");

        if (clickedLink || !clickedCard || !carouselTrack.contains(clickedCard)) {
            return;
        }

        event.preventDefault();

        toggleMythologyCard(clickedCard);
    });

    carouselTrack.addEventListener("keydown", (event) => {
        const isActionKey = event.key === "Enter" || event.key === " ";
        const selectedCard = event.target.closest(".carousel-item");

        if (!isActionKey || !selectedCard || !carouselTrack.contains(selectedCard)) {
            return;
        }

        event.preventDefault();

        toggleMythologyCard(selectedCard);
    });

    document.addEventListener("click", (event) => {
        const clickedInsideCarousel = event.target.closest("#mythologyCarouselTrack");

        if (clickedInsideCarousel) {
            return;
        }

        closeAllMythologyCards();
    });
}


/* =====================================================
   CONTROLE DE ESTADO DO FLIP
===================================================== */

function toggleMythologyCard(selectedCard) {
    const isAlreadyFlipped = selectedCard.classList.contains("is-flipped");

    closeAllMythologyCards();

    if (!isAlreadyFlipped) {
        selectedCard.classList.add("is-flipped");
        selectedCard.setAttribute("aria-pressed", "true");
    }
}


/* =====================================================
   FECHA TODOS OS CARDS
===================================================== */

function closeAllMythologyCards() {
    const cards = document.querySelectorAll("#mythologyCarouselTrack .carousel-item");

    cards.forEach((card) => {
        card.classList.remove("is-flipped");
        card.setAttribute("aria-pressed", "false");
    });
}



/* =====================================================
   FUNÇÃO DE SEGURANÇA
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
   INICIALIZAÇÃO DE SEGURANÇA
   -----------------------------------------------------
   Mantém compatibilidade com o main.js.
   Se o main.js já renderizar os cards, esta chamada não
   duplica nada por causa do controle track.dataset.rendered.
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    createMythologyCarouselCards();
    setupMythologyCarouselFlip();
});


