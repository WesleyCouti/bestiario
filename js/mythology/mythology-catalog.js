const mythologies = [
    {
        title: "Abenaki",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-abenaki.png",
        icon: "🌲",
        description: "Tradições ancestrais ligadas à natureza, aos espíritos e às forças criadoras do mundo.",
        url: "#"
    },
    {
        title: "Aborígene",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-aborigene.png",
        icon: "☀",
        description: "Cosmovisão marcada pelo Tempo do Sonho, espíritos criadores e conexão profunda com a terra.",
        url: "#"
    },
    {
        title: "Africana",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-africana.png",
        icon: "☥",
        description: "Riqueza de tradições orais, espíritos da natureza, ancestralidade e forças sagradas.",
        url: "#"
    },
    {
        title: "Alemã",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-alema.png",
        icon: "🌑",
        description: "Lendas sombrias, florestas antigas, criaturas fantásticas e tradições populares germânicas.",
        url: "#"
    },
    {
        title: "Americana",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-americana.png",
        icon: "★",
        description: "Histórias lendárias, heróis populares, assombrações e criaturas do imaginário norte-americano.",
        url: "#"
    },
    {
        title: "Árabe",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-arabe.png",
        icon: "☾",
        description: "Gênios, desertos encantados, seres invisíveis e contos espirituais do mundo antigo.",
        url: "#"
    },
    {
        title: "Argentina",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-argentina.png",
        icon: "🌙",
        description: "Lendas populares com espíritos, entidades rurais e criaturas tradicionais do sul.",
        url: "#"
    },
    {
        title: "Asteca",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-asteca.png",
        icon: "☀",
        description: "Deuses solares, serpentes emplumadas e forças cósmicas ligadas ao equilíbrio universal.",
        url: "#"
    },
    {
        title: "Basca",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-basca.png",
        icon: "⛰",
        description: "Deusas da terra, espíritos das cavernas, gigantes e entidades das montanhas sagradas.",
        url: "#"
    },
    {
        title: "Brasileira",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-brasileira.png",
        icon: "✥",
        description: "Mitos indígenas, encantados e lendas das florestas, rios e povos do Brasil.",
        url: "#"
    },
    {
        title: "Budista",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-budismo.png",
        icon: "☸",
        description: "Seres celestiais, guardiões espirituais e símbolos ligados à sabedoria e iluminação.",
        url: "#"
    },
    {
        title: "Caribenha",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-caribenha.png",
        icon: "🌊",
        description: "Lendas insulares com entidades marítimas, espíritos e tradições populares místicas.",
        url: "#"
    },
    {
        title: "Catalã",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-catalana.png",
        icon: "🐉",
        description: "Dragões, gigantes, bruxas e seres encantados do imaginário mítico da Catalunha.",
        url: "#"
    },
    {
        title: "Celta",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-celta.png",
        icon: "☘",
        description: "Deuses da natureza, magia, druidas e lendas das terras da névoa.",
        url: "#"
    },
    {
        title: "Chilena",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-chilena.png",
        icon: "⛰",
        description: "Criaturas marítimas, espíritos da terra, lendas mapuches e mistérios das montanhas.",
        url: "#"
    },
    {
        title: "Chinesa",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-chinesa.png",
        icon: "龍",
        description: "Dragões celestiais, imortais, espíritos guardiões e forças da harmonia universal.",
        url: "#"
    },
    {
        title: "Colombiana",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-colombiana.png",
        icon: "🌿",
        description: "Entidades populares, espíritos da natureza e narrativas ligadas às florestas e montanhas.",
        url: "#"
    },
    {
        title: "Cristã",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-crista.png",
        icon: "✟",
        description: "Anjos, demônios, milagres, visões apocalípticas e narrativas espirituais simbólicas.",
        url: "#"
    },
    {
        title: "Dinamarquesa",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-dinamarquesa.png",
        icon: "ᛟ",
        description: "Lendas do norte europeu com seres das florestas, guerreiros e espíritos antigos.",
        url: "#"
    },
    {
        title: "Dominicana",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-dominicana.png",
        icon: "🌴",
        description: "Espíritos, assombrações, lendas rurais e seres sobrenaturais do imaginário caribenho.",
        url: "#"
    },
    {
        title: "Egípcia",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-egipcia.png",
        icon: "☥",
        description: "Deuses ancestrais, vida após a morte e a ordem cósmica que sustenta o universo.",
        url: "#"
    },
    {
        title: "Escandinava",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-escandinava.png",
        icon: "ᚱ",
        description: "Deuses, gigantes, valquírias e mundos conectados por uma cosmologia épica.",
        url: "#"
    },
    {
        title: "Escocesa",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-escocesa.png",
        icon: "🏰",
        description: "Fadas, espíritos das terras altas, criaturas misteriosas e antigas tradições celtas.",
        url: "#"
    },
    {
        title: "Eslava",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-eslava.png",
        icon: "❄",
        description: "Deuses da tempestade, espíritos domésticos, bruxas e entidades das florestas sombrias.",
        url: "#"
    },
    {
        title: "Europeia",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-europeia.png",
        icon: "♜",
        description: "Lendas, criaturas medievais, tradições pagãs e símbolos do imaginário antigo europeu.",
        url: "#"
    },
    {
        title: "Filipina",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-filipina.png",
        icon: "🌺",
        description: "Divindades, espíritos da natureza e criaturas noturnas das tradições orais filipinas.",
        url: "#"
    },
    {
        title: "Finlandesa",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-finlandesa.png",
        icon: "❄",
        description: "Heróis mágicos, cantos sagrados, espíritos da floresta e forças da criação.",
        url: "#"
    },
    {
        title: "Francesa",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-francesa.png",
        icon: "⚜",
        description: "Contos de fadas, cavaleiros, dragões e tradições populares da França antiga.",
        url: "#"
    },
    {
        title: "Gaélica",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-gaelica.png",
        icon: "☘",
        description: "Heróis lendários, fadas, deuses antigos e reinos encantados dos povos gaélicos.",
        url: "#"
    },
    {
        title: "Grega",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-grega.png",
        icon: "🏛",
        description: "Deuses do Olimpo, heróis lendários e mitos que moldaram a civilização ocidental.",
        url: "#"
    },
    {
        title: "Haitiana",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-haitiana.png",
        icon: "🔥",
        description: "Entidades ancestrais, ritos simbólicos e forças sagradas do universo cultural haitiano.",
        url: "#"
    },
    {
        title: "Havaiana",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-havaiana.png",
        icon: "🌋",
        description: "Deuses vulcânicos, espíritos do oceano e forças naturais ligadas ao fogo e ao mar.",
        url: "#"
    },
    {
        title: "Heráldica Europeia",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-heraldica-europeia.png",
        icon: "🛡",
        description: "Dragões, grifos, unicórnios e criaturas simbólicas presentes em brasões e reinos.",
        url: "#"
    },
    {
        title: "Hindu",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-hindu.png",
        icon: "ॐ",
        description: "Deuses, reencarnação, karma, avatares e ensinamentos espirituais milenares.",
        url: "#"
    },
    {
        title: "Holandesa",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-holandesa.png",
        icon: "🌊",
        description: "Lendas de águas, espíritos, figuras populares e tradições antigas dos Países Baixos.",
        url: "#"
    },
    {
        title: "Húngara",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-hungara.png",
        icon: "🦅",
        description: "Aves sagradas, heróis lendários, espíritos e narrativas antigas do povo magiar.",
        url: "#"
    },
    {
        title: "Inca",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-inca.png",
        icon: "☀",
        description: "Deuses solares, montanhas sagradas e forças naturais ligadas ao império andino.",
        url: "#"
    },
    {
        title: "Indiana",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-indiana.png",
        icon: "🪷",
        description: "Deuses, semideuses, ciclos cósmicos, avatares e narrativas épicas espirituais.",
        url: "#"
    },
    {
        title: "Indonésia",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-indonesia.png",
        icon: "🐉",
        description: "Espíritos ancestrais, dragões, seres protetores e lendas do arquipélago indonésio.",
        url: "#"
    },
    {
        title: "Inglesa",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-inglesa.png",
        icon: "⚔",
        description: "Cavaleiros, reis míticos, florestas encantadas e criaturas lendárias da tradição inglesa.",
        url: "#"
    },
    {
        title: "Inuit",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-inuit.png",
        icon: "❄",
        description: "Espíritos do gelo, animais sagrados e histórias moldadas pela natureza extrema.",
        url: "#"
    },
    {
        title: "Iorubá",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-ioruba.png",
        icon: "⚚",
        description: "Orixás, forças da natureza, ancestralidade, destino e rituais sagrados.",
        url: "#"
    },
    {
        title: "Irlandesa",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-irlandesa.png",
        icon: "☘",
        description: "Tuatha Dé Danann, fadas, reinos invisíveis e histórias celtas de magia e destino.",
        url: "#"
    },
    {
        title: "Japonesa",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-japonesa.png",
        icon: "⛩",
        description: "Kami, espíritos e yokais onde o sagrado e o natural se encontram.",
        url: "#"
    },
    {
        title: "Judaica",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-judaica.png",
        icon: "✡",
        description: "Anjos, golems, demônios, sabedoria mística e tradições simbólicas antigas.",
        url: "#"
    },
    {
        title: "Lituana",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-lituana.png",
        icon: "🌩",
        description: "Deuses do trovão, serpentes sagradas, espíritos da terra e tradições bálticas.",
        url: "#"
    },
    {
        title: "Maia",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-maia.png",
        icon: "▣",
        description: "Deuses criadores, jaguares sagrados, calendários cósmicos e mundos subterrâneos.",
        url: "#"
    },
    {
        title: "Malaia",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-malaio.png",
        icon: "🌙",
        description: "Espíritos da selva, criaturas noturnas e entidades protetoras do sudeste asiático.",
        url: "#"
    },
    {
        title: "Maori",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-maori.png",
        icon: "🌊",
        description: "Deuses criadores, heróis navegadores e forças naturais ligadas ao mar, céu e terra.",
        url: "#"
    },
    {
        title: "Mesopotâmica",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-mesopotamica.png",
        icon: "𒀭",
        description: "Deuses antigos, monstros primordiais, reis lendários e narrativas das primeiras civilizações.",
        url: "#"
    },
    {
        title: "Mexicana",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-mexicana.png",
        icon: "☀",
        description: "Serpentes sagradas, deuses solares, lendas populares e tradições ancestrais mexicanas.",
        url: "#"
    },
    {
        title: "Nórdica",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-nordica.png",
        icon: "ᛟ",
        description: "Deuses poderosos, gigantes e o destino do mundo em Ragnarok.",
        url: "#"
    },
    {
        title: "Persa",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-persa.png",
        icon: "☼",
        description: "Forças do bem e do caos, seres celestiais e batalhas cósmicas entre luz e sombra.",
        url: "#"
    },
    {
        title: "Portuguesa",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-portuguesa.png",
        icon: "⚓",
        description: "Mouras encantadas, monstros marítimos, castelos e tradições mágicas lusitanas.",
        url: "#"
    },
    {
        title: "Romana",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-romana.png",
        icon: "🏛",
        description: "Deuses imperiais, heróis fundadores, rituais públicos e símbolos de ordem e destino.",
        url: "#"
    },
    {
        title: "Romena",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-romena.png",
        icon: "🦇",
        description: "Lendas sombrias, espíritos, vampiros folclóricos e criaturas das montanhas dos Cárpatos.",
        url: "#"
    },
    {
        title: "Tibetana",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-tibetana.png",
        icon: "☸",
        description: "Guardiões espirituais, divindades simbólicas, montanhas sagradas e tradições místicas.",
        url: "#"
    },
    {
        title: "Tupi-Guarani",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-tupi-guarani.png",
        icon: "🌿",
        description: "Deuses criadores, espíritos da floresta, animais sagrados e narrativas indígenas brasileiras.",
        url: "#"
    },
    {
        title: "Turca",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-turca.png",
        icon: "🐺",
        description: "Lobos sagrados, espíritos celestes, xamanismo e tradições míticas dos povos túrquicos.",
        url: "#"
    },
    {
        title: "Umbanda",
        image: "./assets/images/mitologia/page-mitologia-personagens/mitologia-umbanda.png",
        icon: "⚚",
        description: "Orixás, guias espirituais, ancestralidade e forças sagradas da espiritualidade brasileira.",
        url: "#"
    }
];

const mythologyGrid = document.getElementById("mythologyGrid");

if (mythologyGrid) {
    mythologies.forEach((mythology) => {
        mythologyGrid.innerHTML += `
            <article class="mythology-card">
                <img
                    src="${mythology.image}"
                    alt="Mitologia ${mythology.title}"
                    loading="lazy"
                >

                <div class="mythology-card-content">
                    <div class="mythology-icon">
                        ${mythology.icon}
                    </div>

                    <h2>${mythology.title}</h2>

                    <p>
                        ${mythology.description}
                    </p>

                    <a href="${mythology.url}">
                        Explorar ›
                    </a>

                </div>
            </article>
        `;
    });
}