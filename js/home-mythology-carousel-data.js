/* =====================================================
   MYTHOLOGY-CAROUSEL-DATA.JS
   -----------------------------------------------------
   Dados e renderização do carrossel infinito de mitologias
   da Home do Bestiário.

   Como usar no HTML:

   1. Troque o conteúdo grande do carrossel por:

   <div class="carousel-track" id="mythologyCarouselTrack"></div>

   2. Importe este arquivo antes do main.js:

   <script src="./js/mythology-carousel-data.js" defer></script>
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
        description: "Tradição espiritual ligada à natureza, aos animais sagrados, aos espíritos\n                                            ancestrais e às forças criadoras do mundo.",
        url: "#"
    },
    {
        name: "Aborígene",
        title: "Mitologia Aborígene",
        category: "Tempo do Sonho",
        image: "./assets/images/home/home-secao-mitologias/aborigene.png",
        alt: "Mitologia Aborígene",
        description: "Cosmovisão ancestral marcada pelo Tempo do Sonho, espíritos criadores,\n                                            paisagens sagradas e conexão profunda com a terra.",
        url: "#"
    },
    {
        name: "Africana",
        title: "Mitologia Africana",
        category: "Ancestralidade",
        image: "./assets/images/home/home-secao-mitologias/africana.png",
        alt: "Mitologia Africana",
        description: "Conjunto rico de divindades, espíritos, heróis culturais, animais simbólicos\n                                            e forças ligadas à criação e à ancestralidade.",
        url: "#"
    },
    {
        name: "Alemã",
        title: "Mitologia Alemã",
        category: "Folclore Europeu",
        image: "./assets/images/home/home-secao-mitologias/alema.png",
        alt: "Mitologia Alemã",
        description: "Lendas sombrias, florestas antigas, espíritos, criaturas fantásticas e\n                                            histórias populares preservadas no imaginário germânico.",
        url: "#"
    },
    {
        name: "Americana",
        title: "Mitologia Americana",
        category: "Lendas Populares",
        image: "./assets/images/home/home-secao-mitologias/americana.png",
        alt: "Mitologia Americana",
        description: "Histórias lendárias formadas por criaturas misteriosas, heróis populares,\n                                            assombrações e mitos do imaginário norte-americano.",
        url: "#"
    },
    {
        name: "Árabe",
        title: "Mitologia Árabe",
        category: "Desertos e Gênios",
        image: "./assets/images/home/home-secao-mitologias/arabe.png",
        alt: "Mitologia Árabe",
        description: "Universo de gênios, seres invisíveis, desertos encantados, contos\n                                            maravilhosos e forças espirituais antigas.",
        url: "#"
    },
    {
        name: "Argentina",
        title: "Mitologia Argentina",
        category: "Lendas do Sul",
        image: "./assets/images/home/home-secao-mitologias/argentina.png",
        alt: "Mitologia Argentina",
        description: "Lendas populares marcadas por espíritos, entidades rurais, criaturas noturnas\n                                            e narrativas tradicionais das regiões argentinas.",
        url: "#"
    },
    {
        name: "Asteca",
        title: "Mitologia Asteca",
        category: "Império Solar",
        image: "./assets/images/home/home-secao-mitologias/asteca.png",
        alt: "Mitologia Asteca",
        description: "Deuses solares, serpentes emplumadas, sacrifícios sagrados e forças cósmicas\n                                            ligadas ao equilíbrio do universo.",
        url: "#"
    },
    {
        name: "Basca",
        title: "Mitologia Basca",
        category: "Montanhas Sagradas",
        image: "./assets/images/home/home-secao-mitologias/basca.png",
        alt: "Mitologia Basca",
        description: "Mitologia antiga com deusas da terra, espíritos das cavernas, gigantes e\n                                            entidades ligadas às montanhas e tempestades.",
        url: "#"
    },
    {
        name: "Brasileira",
        title: "Mitologia Brasileira",
        category: "Folclore Nacional",
        image: "./assets/images/home/home-secao-mitologias/brasileira.png",
        alt: "Mitologia Brasileira",
        description: "Seres encantados, protetores das matas, lendas indígenas, influências\n                                            africanas e criaturas populares do imaginário brasileiro.",
        url: "#"
    },
    {
        name: "Budista",
        title: "Mitologia Budista",
        category: "Iluminação",
        image: "./assets/images/home/home-secao-mitologias/budista.png",
        alt: "Mitologia Budista",
        description: "Seres celestiais, guardiões espirituais, ciclos de renascimento e símbolos\n                                            ligados à sabedoria, compaixão e iluminação.",
        url: "#"
    },
    {
        name: "Caribenha",
        title: "Mitologia Caribenha",
        category: "Ilhas Místicas",
        image: "./assets/images/home/home-secao-mitologias/caribenha.png",
        alt: "Mitologia Caribenha",
        description: "Lendas insulares com espíritos, entidades marítimas, forças ancestrais e\n                                            tradições populares marcadas por mistério e magia.",
        url: "#"
    },
    {
        name: "Catalana",
        title: "Mitologia Catalana",
        category: "Lendas Ibéricas",
        image: "./assets/images/home/home-secao-mitologias/catalana.png",
        alt: "Mitologia Catalana",
        description: "Dragões, gigantes, bruxas, seres encantados e tradições populares presentes\n                                            no imaginário mítico da Catalunha.",
        url: "#"
    },
    {
        name: "Celta",
        title: "Mitologia Celta",
        category: "Druidas Antigos",
        image: "./assets/images/home/home-secao-mitologias/celta.png",
        alt: "Mitologia Celta",
        description: "Florestas sagradas, povos feéricos, deuses guerreiros, druidas e forças\n                                            espirituais conectadas à natureza ancestral.",
        url: "#"
    },
    {
        name: "Chilena",
        title: "Mitologia Chilena",
        category: "Lendas Andinas",
        image: "./assets/images/home/home-secao-mitologias/chilena.png",
        alt: "Mitologia Chilena",
        description: "Tradições marcadas por criaturas marítimas, espíritos da terra, lendas\n                                            mapuches e mistérios das montanhas e ilhas.",
        url: "#"
    },
    {
        name: "Chinesa",
        title: "Mitologia Chinesa",
        category: "Dragões Celestiais",
        image: "./assets/images/home/home-secao-mitologias/chinesa.png",
        alt: "Mitologia Chinesa",
        description: "Dragões, imortais, imperadores celestiais, espíritos guardiões e forças\n                                            cósmicas ligadas à harmonia universal.",
        url: "#"
    },
    {
        name: "Colombiana",
        title: "Mitologia Colombiana",
        category: "Lendas da Terra",
        image: "./assets/images/home/home-secao-mitologias/colombiana.png",
        alt: "Mitologia Colombiana",
        description: "Entidades populares, espíritos da natureza, assombrações tradicionais e\n                                            narrativas ligadas às florestas e montanhas.",
        url: "#"
    },
    {
        name: "Cristã",
        title: "Mitologia Cristã",
        category: "Anjos e Mistérios",
        image: "./assets/images/home/home-secao-mitologias/crista.png",
        alt: "Mitologia Cristã",
        description: "Tradições simbólicas com anjos, demônios, milagres, visões apocalípticas e\n                                            narrativas espirituais de salvação e queda.",
        url: "#"
    },
    {
        name: "Dinamarquesa",
        title: "Mitologia Dinamarquesa",
        category: "Norte Europeu",
        image: "./assets/images/home/home-secao-mitologias/dinamarquesa.png",
        alt: "Mitologia Dinamarquesa",
        description: "Lendas nórdicas e folclóricas com seres das florestas, espíritos antigos,\n                                            guerreiros e criaturas do imaginário escandinavo.",
        url: "#"
    },
    {
        name: "Dominicana",
        title: "Mitologia Dominicana",
        category: "Caribe Místico",
        image: "./assets/images/home/home-secao-mitologias/dominicana.png",
        alt: "Mitologia Dominicana",
        description: "Tradições populares com espíritos, assombrações, lendas rurais e seres\n                                            sobrenaturais ligados ao imaginário caribenho.",
        url: "#"
    },
    {
        name: "Egípcia",
        title: "Mitologia Egípcia",
        category: "Civilização Antiga",
        image: "./assets/images/home/home-secao-mitologias/egipcia.png",
        alt: "Mitologia Egípcia",
        description: "Deuses ancestrais, rituais funerários, entidades cósmicas e forças ligadas à\n                                            eternidade, morte e renascimento.",
        url: "#"
    },
    {
        name: "Escandinava",
        title: "Mitologia Escandinava",
        category: "Reinos do Norte",
        image: "./assets/images/home/home-secao-mitologias/escandinava.png",
        alt: "Mitologia Escandinava",
        description: "Deuses, gigantes, valquírias, monstros e mundos conectados por uma cosmologia\n                                            épica de gelo, fogo e destino.",
        url: "#"
    },
    {
        name: "Escocesa",
        title: "Mitologia Escocesa",
        category: "Terras Altas",
        image: "./assets/images/home/home-secao-mitologias/escocesa.png",
        alt: "Mitologia Escocesa",
        description: "Lendas de lagos profundos, fadas, espíritos das terras altas, criaturas\n                                            misteriosas e tradições celtas preservadas.",
        url: "#"
    },
    {
        name: "Eslava",
        title: "Mitologia Eslava",
        category: "Florestas Antigas",
        image: "./assets/images/home/home-secao-mitologias/eslava.png",
        alt: "Mitologia Eslava",
        description: "Deuses da tempestade, espíritos domésticos, bruxas, florestas sombrias e\n                                            entidades ligadas ao inverno e à fertilidade.",
        url: "#"
    },
    {
        name: "Europeia",
        title: "Mitologia Europeia",
        category: "Velho Mundo",
        image: "./assets/images/home/home-secao-mitologias/europeia.png",
        alt: "Mitologia Europeia",
        description: "Conjunto de lendas, seres mágicos, tradições pagãs, criaturas medievais e\n                                            símbolos do imaginário antigo europeu.",
        url: "#"
    },
    {
        name: "Filipina",
        title: "Mitologia Filipina",
        category: "Ilhas Ancestrais",
        image: "./assets/images/home/home-secao-mitologias/filipina.png",
        alt: "Mitologia Filipina",
        description: "Divindades, espíritos da natureza, criaturas noturnas e tradições orais\n                                            vindas das ilhas e povos filipinos.",
        url: "#"
    },
    {
        name: "Finlandesa",
        title: "Mitologia Finlandesa",
        category: "Kalevala",
        image: "./assets/images/home/home-secao-mitologias/finlandesa.png",
        alt: "Mitologia Finlandesa",
        description: "Heróis mágicos, cantos sagrados, espíritos da floresta, criaturas antigas e\n                                            forças ligadas à palavra e à criação.",
        url: "#"
    },
    {
        name: "Francesa",
        title: "Mitologia Francesa",
        category: "Lendas Medievais",
        image: "./assets/images/home/home-secao-mitologias/francesa.png",
        alt: "Mitologia Francesa",
        description: "Contos de fadas, criaturas mágicas, cavaleiros, dragões, santos lendários e\n                                            tradições populares da França antiga.",
        url: "#"
    },
    {
        name: "Gaélica",
        title: "Mitologia Gaélica",
        category: "Povos Celtas",
        image: "./assets/images/home/home-secao-mitologias/gaelica.png",
        alt: "Mitologia Gaélica",
        description: "Heróis lendários, fadas, deuses antigos, reinos encantados e tradições\n                                            espirituais dos povos gaélicos.",
        url: "#"
    },
    {
        name: "Grega",
        title: "Mitologia Grega",
        category: "Olimpianos",
        image: "./assets/images/home/home-secao-mitologias/grega.png",
        alt: "Mitologia Grega",
        description: "Deuses olímpicos, titãs, heróis lendários, monstros colossais e narrativas\n                                            que moldaram o imaginário ocidental.",
        url: "#"
    },
    {
        name: "Haitiana",
        title: "Mitologia Haitiana",
        category: "Espiritualidade",
        image: "./assets/images/home/home-secao-mitologias/haitiana.png",
        alt: "Mitologia Haitiana",
        description: "Tradições espirituais, entidades ancestrais, ritos simbólicos e forças\n                                            sagradas ligadas ao universo cultural haitiano.",
        url: "#"
    },
    {
        name: "Havaiana",
        title: "Mitologia Havaiana",
        category: "Ilhas Sagradas",
        image: "./assets/images/home/home-secao-mitologias/havaiana.png",
        alt: "Mitologia Havaiana",
        description: "Deuses vulcânicos, espíritos do oceano, heróis navegadores e forças naturais\n                                            ligadas ao fogo, mar e criação.",
        url: "#"
    },
    {
        name: "Heráldica Europeia",
        title: "Mitologia Heráldica Europeia",
        category: "Brasões e Feras",
        image: "./assets/images/home/home-secao-mitologias/heraldica-europeia.png",
        alt: "Mitologia Heráldica Europeia",
        description: "Dragões, grifos, unicórnios, leões míticos e criaturas simbólicas presentes\n                                            em brasões, reinos e linhagens nobres.",
        url: "#"
    },
    {
        name: "Hindu",
        title: "Mitologia Hindu",
        category: "Cosmos Sagrado",
        image: "./assets/images/home/home-secao-mitologias/hindu.png",
        alt: "Mitologia Hindu",
        description: "Divindades cósmicas, avatares, demônios, ciclos de criação e destruição,\n                                            sabedoria espiritual e epopeias sagradas.",
        url: "#"
    },
    {
        name: "Holandesa",
        title: "Mitologia Holandesa",
        category: "Folclore Europeu",
        image: "./assets/images/home/home-secao-mitologias/holandesa.png",
        alt: "Mitologia Holandesa",
        description: "Lendas de águas, espíritos, figuras populares, seres misteriosos e tradições\n                                            antigas dos Países Baixos.",
        url: "#"
    },
    {
        name: "Húngara",
        title: "Mitologia Húngara",
        category: "Lendas Magiares",
        image: "./assets/images/home/home-secao-mitologias/hungara.png",
        alt: "Mitologia Húngara",
        description: "Tradições antigas com aves sagradas, heróis lendários, espíritos, xamanismo e\n                                            narrativas do povo magiar.",
        url: "#"
    },
    {
        name: "Inca",
        title: "Mitologia Inca",
        category: "Filhos do Sol",
        image: "./assets/images/home/home-secao-mitologias/inca.png",
        alt: "Mitologia Inca",
        description: "Deuses solares, montanhas sagradas, ancestrais divinizados e forças naturais\n                                            ligadas ao império andino.",
        url: "#"
    },
    {
        name: "Indiana",
        title: "Mitologia Indiana",
        category: "Épicos Sagrados",
        image: "./assets/images/home/home-secao-mitologias/indiana.png",
        alt: "Mitologia Indiana",
        description: "Deuses, semideuses, demônios, ciclos cósmicos, avatares e narrativas épicas\n                                            de grande profundidade espiritual.",
        url: "#"
    },
    {
        name: "Indonésia",
        title: "Mitologia Indonésia",
        category: "Arquipélago Místico",
        image: "./assets/images/home/home-secao-mitologias/indonesia.png",
        alt: "Mitologia Indonésia",
        description: "Espíritos ancestrais, dragões, seres protetores, lendas insulares e tradições\n                                            sagradas do arquipélago indonésio.",
        url: "#"
    },
    {
        name: "Inglesa",
        title: "Mitologia Inglesa",
        category: "Lendas Medievais",
        image: "./assets/images/home/home-secao-mitologias/inglesa.png",
        alt: "Mitologia Inglesa",
        description: "Cavaleiros, criaturas lendárias, florestas encantadas, reis míticos e\n                                            narrativas populares da tradição inglesa.",
        url: "#"
    },
    {
        name: "Inuit",
        title: "Mitologia Inuit",
        category: "Gelo Ancestral",
        image: "./assets/images/home/home-secao-mitologias/inuit.png",
        alt: "Mitologia Inuit",
        description: "Espíritos do gelo, animais sagrados, entidades marítimas e histórias moldadas\n                                            pelo frio, sobrevivência e natureza extrema.",
        url: "#"
    },
    {
        name: "Iorubá",
        title: "Mitologia Iorubá",
        category: "Orixás",
        image: "./assets/images/home/home-secao-mitologias/ioruba.png",
        alt: "Mitologia Iorubá",
        description: "Orixás, forças da natureza, ancestralidade, destino, rituais sagrados e\n                                            entidades que representam aspectos da vida humana.",
        url: "#"
    },
    {
        name: "Irlandesa",
        title: "Mitologia Irlandesa",
        category: "Ilha Encantada",
        image: "./assets/images/home/home-secao-mitologias/irlandesa.png",
        alt: "Mitologia Irlandesa",
        description: "Tuatha Dé Danann, heróis, fadas, reinos invisíveis e histórias celtas cheias\n                                            de magia, guerra e destino.",
        url: "#"
    },
    {
        name: "Japonesa",
        title: "Mitologia Japonesa",
        category: "Yokais e Kami",
        image: "./assets/images/home/home-secao-mitologias/japonesa.png",
        alt: "Mitologia Japonesa",
        description: "Yokais, kami, dragões celestiais, espíritos da natureza e entidades ligadas\n                                            ao equilíbrio entre mundo humano e espiritual.",
        url: "#"
    },
    {
        name: "Judaica",
        title: "Mitologia Judaica",
        category: "Mistérios Antigos",
        image: "./assets/images/home/home-secao-mitologias/judaica.png",
        alt: "Mitologia Judaica",
        description: "Anjos, golems, demônios, sabedoria mística, tradições simbólicas e narrativas\n                                            espirituais de origem antiga.",
        url: "#"
    },
    {
        name: "Lituana",
        title: "Mitologia Lituana",
        category: "Báltica",
        image: "./assets/images/home/home-secao-mitologias/lituana.png",
        alt: "Mitologia Lituana",
        description: "Deuses do trovão, espíritos da terra, serpentes sagradas, florestas antigas e\n                                            tradições pagãs bálticas.",
        url: "#"
    },
    {
        name: "Maia",
        title: "Mitologia Maia",
        category: "Cosmos Mesoamericano",
        image: "./assets/images/home/home-secao-mitologias/maia.png",
        alt: "Mitologia Maia",
        description: "Deuses criadores, jaguares sagrados, mundos subterrâneos, calendários\n                                            cósmicos e narrativas de criação e destruição.",
        url: "#"
    },
    {
        name: "Malaio",
        title: "Mitologia Malaio",
        category: "Sudeste Asiático",
        image: "./assets/images/home/home-secao-mitologias/malaio.png",
        alt: "Mitologia Malaio",
        description: "Espíritos da selva, criaturas noturnas, entidades protetoras e narrativas\n                                            tradicionais do mundo malaio.",
        url: "#"
    },
    {
        name: "Maori",
        title: "Mitologia Maori",
        category: "Polinésia",
        image: "./assets/images/home/home-secao-mitologias/maori.png",
        alt: "Mitologia Maori",
        description: "Deuses criadores, heróis navegadores, espíritos ancestrais e forças naturais\n                                            ligadas ao mar, céu e terra.",
        url: "#"
    },
    {
        name: "Mesopotâmica",
        title: "Mitologia Mesopotâmica",
        category: "Berço dos Mitos",
        image: "./assets/images/home/home-secao-mitologias/mesopotamica.png",
        alt: "Mitologia Mesopotâmica",
        description: "Deuses antigos, monstros primordiais, reis lendários, dilúvios sagrados e\n                                            narrativas das primeiras civilizações.",
        url: "#"
    },
    {
        name: "Mexicana",
        title: "Mitologia Mexicana",
        category: "Mesoamérica",
        image: "./assets/images/home/home-secao-mitologias/mexicana.png",
        alt: "Mitologia Mexicana",
        description: "Serpentes sagradas, deuses solares, lendas populares, espíritos e tradições\n                                            ancestrais do México antigo e moderno.",
        url: "#"
    },
    {
        name: "Nórdica",
        title: "Mitologia Nórdica",
        category: "Ragnarok",
        image: "./assets/images/home/home-secao-mitologias/nordica.png",
        alt: "Mitologia Nórdica",
        description: "Deuses guerreiros, gigantes, valquírias, lobos cósmicos e o destino final dos\n                                            nove mundos no Ragnarok.",
        url: "#"
    },
    {
        name: "Persa",
        title: "Mitologia Persa",
        category: "Luz e Sombra",
        image: "./assets/images/home/home-secao-mitologias/persa.png",
        alt: "Mitologia Persa",
        description: "Forças do bem e do caos, seres celestiais, criaturas demoníacas e batalhas\n                                            cósmicas entre luz e escuridão.",
        url: "#"
    },
    {
        name: "Portuguesa",
        title: "Mitologia Portuguesa",
        category: "Lendas Lusitanas",
        image: "./assets/images/home/home-secao-mitologias/portuguesa.png",
        alt: "Mitologia Portuguesa",
        description: "Mouras encantadas, monstros marítimos, lendas de castelos, santos populares e\n                                            tradições mágicas lusitanas.",
        url: "#"
    },
    {
        name: "Romana",
        title: "Mitologia Romana",
        category: "Império e Deuses",
        image: "./assets/images/home/home-secao-mitologias/romana.png",
        alt: "Mitologia Romana",
        description: "Deuses adaptados ao poder imperial, heróis fundadores, rituais públicos e\n                                            símbolos de guerra, ordem e destino.",
        url: "#"
    },
    {
        name: "Romena",
        title: "Mitologia Romena",
        category: "Cárpatos",
        image: "./assets/images/home/home-secao-mitologias/romena.png",
        alt: "Mitologia Romena",
        description: "Lendas sombrias, espíritos, vampiros folclóricos, criaturas das montanhas e\n                                            tradições populares dos Cárpatos.",
        url: "#"
    },
    {
        name: "Tibetana",
        title: "Mitologia Tibetana",
        category: "Montanhas Sagradas",
        image: "./assets/images/home/home-secao-mitologias/tibetana.png",
        alt: "Mitologia Tibetana",
        description: "Guardião espirituais, divindades iradas, símbolos de iluminação, montanhas\n                                            sagradas e tradições místicas profundas.",
        url: "#"
    },
    {
        name: "Tupi-Guarani",
        title: "Mitologia Tupi-Guarani",
        category: "Brasil Ancestral",
        image: "./assets/images/home/home-secao-mitologias/tupi-guarani.png",
        alt: "Mitologia Tupi-Guarani",
        description: "Deuses criadores, espíritos da floresta, animais sagrados e narrativas\n                                            indígenas ligadas à origem do mundo.",
        url: "#"
    },
    {
        name: "Turca",
        title: "Mitologia Turca",
        category: "Lobos e Céu",
        image: "./assets/images/home/home-secao-mitologias/turca.png",
        alt: "Mitologia Turca",
        description: "Lobos sagrados, espíritos celestes, xamanismo, mundos superiores e tradições\n                                            míticas dos povos túrquicos.",
        url: "#"
    },
    {
        name: "Umbanda",
        title: "Mitologia Umbanda",
        category: "Espiritualidade Brasileira",
        image: "./assets/images/home/home-secao-mitologias/umbanda.png",
        alt: "Mitologia Umbanda",
        description: "Orixás, guias espirituais, linhas de trabalho, ancestralidade e forças\n                                            sagradas presentes na espiritualidade brasileira.",
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

    track.innerHTML = mythologyCarouselData.map((mythology) => `
        <div class="carousel-item">
            <div class="myth-flip-card">
                <div class="myth-flip-inner">

                    <div class="myth-flip-front">
                        <img
                            src="${mythology.image}"
                            alt="${mythology.alt}"
                            loading="lazy"
                            decoding="async">

                        <div class="myth-front-overlay">
                            <span>Mitologia</span>
                            <h3>${mythology.name}</h3>
                        </div>
                    </div>

                    <div class="myth-flip-back">
                        <span class="myth-category">${mythology.category}</span>

                        <h3>${mythology.title}</h3>

                        <p>${mythology.description}</p>

                        <a href="${mythology.url}" class="myth-button">
                            Explorar
                        </a>
                    </div>

                </div>
            </div>
        </div>
    `).join("");
}
