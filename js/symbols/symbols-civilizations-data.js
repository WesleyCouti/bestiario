/* =====================================================
   SYMBOLS-CIVILIZATIONS-DATA.JS
   Página: Símbolos do Mundo Antigo

   Responsável por:
   - Renderizar a seção "Símbolos através das civilizações".
   - Renderizar a seção "Evolução dos Símbolos".
   - Controlar filtros, busca, abas e acessibilidade.
   - Centralizar os dados utilizados pela página de símbolos.

   Observação:
   - Este arquivo mantém dados e renderização juntos por praticidade.
   - Todo o código fica isolado em uma IIFE para evitar variáveis globais.
   - Caso o projeto cresça, o ideal é separar em:
     1. symbols-civilizations-data.js
     2. symbols-evolution-data.js
     3. symbols-utils.js
     4. symbols-civilizations-render.js
     5. symbols-evolution-render.js
===================================================== */

(() => {
    "use strict";

    /* =====================================================
       1. DADOS BASE / GRUPOS DAS CIVILIZAÇÕES

       Para criar um novo grupo:
       - Adicione uma nova chave em symbolsCivilizationsGroups.
       - Use essa mesma chave no campo "group" dos símbolos.
    ===================================================== */

    const symbolsCivilizationsGroups = {
        mitologias: {
            title: "Mitologias e Tradições Antigas",
            description: "Símbolos ligados a povos antigos, mitos, culturas ancestrais e tradições lendárias."
        },
        religioes: {
            title: "Religiões e Espiritualidades",
            description: "Símbolos ligados à fé, ao sagrado, à contemplação e aos caminhos espirituais."
        },
        magias: {
            title: "Magia, Alquimia e Ocultismo",
            description: "Símbolos associados à transformação, ao mistério, ao esoterismo e ao conhecimento oculto."
        }
    };

    /* =====================================================
       2. DADOS BASE / SÍMBOLOS POR CIVILIZAÇÃO

       Para adicionar um novo símbolo:
       - Copie um objeto existente.
       - Altere group, civilization, symbol, image, alt, description e link.
       - Use link: "#" caso ainda não exista página de detalhe.
    ===================================================== */

    const symbolsCivilizationsData = [
        {
            group: "mitologias",
            civilization: "Egípcia",
            symbol: "Ankh",
            image: "./assets/images/symbols/civilizations/egipcia-ankh.png",
            alt: "Símbolo Ankh da civilização egípcia",
            description: "Símbolo associado à vida, eternidade e força espiritual.",
            link: "#"
        },
        {
            group: "mitologias",
            civilization: "Celta",
            symbol: "Triquetra",
            image: "./assets/images/symbols/civilizations/celta-triquetra.png",
            alt: "Símbolo Triquetra da cultura celta",
            description: "Representa ciclos, união, espiritualidade e continuidade.",
            link: "#"
        },
        {
            group: "mitologias",
            civilization: "Nórdica",
            symbol: "Algiz",
            image: "./assets/images/symbols/civilizations/nordica-algiz.png",
            alt: "Símbolo Algiz da tradição nórdica",
            description: "Runa associada à proteção, conexão espiritual e defesa.",
            link: "#"
        },
        {
            group: "religioes",
            civilization: "Hindu",
            symbol: "Om",
            image: "./assets/images/symbols/civilizations/hindu-om.png",
            alt: "Símbolo Om da tradição hindu",
            description: "Som sagrado ligado à criação, consciência e espiritualidade.",
            link: "#"
        },
        {
            group: "religioes",
            civilization: "Cristã",
            symbol: "Chi Rho",
            image: "./assets/images/symbols/civilizations/crista-chi-rho.png",
            alt: "Símbolo Chi Rho da tradição cristã",
            description: "Monograma cristão formado pelas letras gregas Chi e Rho.",
            link: "#"
        },
        {
            group: "mitologias",
            civilization: "Chinesa",
            symbol: "Yin Yang",
            image: "./assets/images/symbols/civilizations/chinesa-yin-yang.png",
            alt: "Símbolo Yin Yang da tradição chinesa",
            description: "Representa equilíbrio, oposição complementar e harmonia.",
            link: "#"
        },
        {
            group: "religioes",
            civilization: "Budista",
            symbol: "Roda do Dharma",
            image: "./assets/images/symbols/civilizations/budista-dharma.png",
            alt: "Roda do Dharma do Budismo",
            description: "Representa os ensinamentos de Buda e o caminho para a iluminação.",
            link: "#"
        },
        {
            group: "religioes",
            civilization: "Judaica",
            symbol: "Estrela de Davi",
            image: "./assets/images/symbols/civilizations/judaica-estrela-davi.png",
            alt: "Estrela de Davi",
            description: "Símbolo tradicional do judaísmo e da identidade judaica.",
            link: "#"
        },
        {
            group: "religioes",
            civilization: "Judaica",
            symbol: "Menorá",
            image: "./assets/images/symbols/civilizations/judaica-menora.png",
            alt: "Menorá judaica",
            description: "Candelabro sagrado associado à luz divina e à tradição hebraica.",
            link: "#"
        },
        {
            group: "mitologias",
            civilization: "Nórdica",
            symbol: "Vegvísir",
            image: "./assets/images/symbols/civilizations/nordica-vegvisir.png",
            alt: "Vegvísir islandês",
            description: "Símbolo mágico associado à orientação e proteção durante jornadas.",
            link: "#"
        },
        {
            group: "mitologias",
            civilization: "Nórdica",
            symbol: "Mjölnir",
            image: "./assets/images/symbols/civilizations/nordica-mjolnir.png",
            alt: "Martelo de Thor",
            description: "Representa força, proteção e bênção dos deuses nórdicos.",
            link: "#"
        },
        {
            group: "mitologias",
            civilization: "Celta",
            symbol: "Espiral Tríplice",
            image: "./assets/images/symbols/civilizations/celta-triskele.png",
            alt: "Triskele celta",
            description: "Representa movimento, evolução e os ciclos da existência.",
            link: "#"
        },
        {
            group: "mitologias",
            civilization: "Celta",
            symbol: "Árvore da Vida",
            image: "./assets/images/symbols/civilizations/celta-arvore-vida.png",
            alt: "Árvore da Vida celta",
            description: "Simboliza conexão entre céu, terra e mundo espiritual.",
            link: "#"
        },
        {
            group: "religioes",
            civilization: "Cristã",
            symbol: "Peixe Ichthys",
            image: "./assets/images/symbols/civilizations/crista-ichthys.png",
            alt: "Símbolo Ichthys",
            description: "Antigo símbolo utilizado pelos primeiros cristãos.",
            link: "#"
        },
        {
            group: "religioes",
            civilization: "Cristã",
            symbol: "Cruz Latina",
            image: "./assets/images/symbols/civilizations/crista-cruz.png",
            alt: "Cruz cristã",
            description: "Representa a fé cristã e o sacrifício de Cristo.",
            link: "#"
        },
        {
            group: "religioes",
            civilization: "Tibetana",
            symbol: "Nó Infinito",
            image: "./assets/images/symbols/civilizations/tibetana-no-infinito.png",
            alt: "Nó infinito tibetano",
            description: "Representa sabedoria, eternidade e interdependência.",
            link: "#"
        },
        {
            group: "mitologias",
            civilization: "Chinesa",
            symbol: "Dragão Chinês",
            image: "./assets/images/symbols/civilizations/chinesa-dragao.png",
            alt: "Dragão chinês",
            description: "Representa prosperidade, poder e boa fortuna.",
            link: "#"
        },
        {
            group: "mitologias",
            civilization: "Japonesa",
            symbol: "Torii",
            image: "./assets/images/symbols/civilizations/japonesa-torii.png",
            alt: "Portal Torii",
            description: "Marca a passagem entre o mundo humano e o sagrado.",
            link: "#"
        },
        {
            group: "mitologias",
            civilization: "Japonesa",
            symbol: "Mitsudomoe",
            image: "./assets/images/symbols/civilizations/japonesa-mitsudomoe.png",
            alt: "Mitsudomoe japonês",
            description: "Associado ao equilíbrio, proteção e energia espiritual.",
            link: "#"
        },
        {
            group: "magias",
            civilization: "Alquimia",
            symbol: "Pedra Filosofal",
            image: "./assets/images/symbols/civilizations/alquimia-pedra-filosofal.png",
            alt: "Símbolo alquímico da Pedra Filosofal",
            description: "Representa perfeição, transformação e conhecimento oculto.",
            link: "#"
        },
        {
            group: "magias",
            civilization: "Alquimia",
            symbol: "Mercúrio",
            image: "./assets/images/symbols/civilizations/alquimia-mercurio.png",
            alt: "Símbolo alquímico de Mercúrio",
            description: "Associado à transformação, intelecto e movimento.",
            link: "#"
        },
        {
            group: "magias",
            civilization: "Ocultismo",
            symbol: "Pentagrama",
            image: "./assets/images/symbols/civilizations/ocultismo-pentagrama.png",
            alt: "Pentagrama",
            description: "Representa os cinco elementos e a harmonia universal.",
            link: "#"
        },
        {
            group: "magias",
            civilization: "Ocultismo",
            symbol: "Olho que Tudo Vê",
            image: "./assets/images/symbols/civilizations/ocultismo-olho.png",
            alt: "Olho que Tudo Vê",
            description: "Associado ao conhecimento, vigilância e iluminação.",
            link: "#"
        },
        {
            group: "mitologias",
            civilization: "Iorubá",
            symbol: "Oxé de Xangô",
            image: "./assets/images/symbols/civilizations/ioruba-oxe.png",
            alt: "Machado de Xangô",
            description: "Representa justiça, autoridade e equilíbrio.",
            link: "#"
        },
        {
            group: "mitologias",
            civilization: "Maia",
            symbol: "Glifo Kin",
            image: "./assets/images/symbols/civilizations/maia-kin.png",
            alt: "Glifo solar maia",
            description: "Representa o sol, o tempo e a energia vital.",
            link: "#"
        },
        {
            group: "mitologias",
            civilization: "Asteca",
            symbol: "Pedra do Sol",
            image: "./assets/images/symbols/civilizations/asteca-sol.png",
            alt: "Pedra do Sol asteca",
            description: "Representa os ciclos cósmicos e o movimento do universo.",
            link: "#"
        },
        {
            group: "mitologias",
            civilization: "Mesopotâmica",
            symbol: "Estrela de Ishtar",
            image: "./assets/images/symbols/civilizations/mesopotamia-ishtar.png",
            alt: "Estrela de Ishtar",
            description: "Associada ao amor, fertilidade e poder divino.",
            link: "#"
        }
    ];

    /* =====================================================
       3. DADOS BASE / EVOLUÇÃO DOS SÍMBOLOS

       Cada item representa uma característica universal.
       Cada característica possui uma lista de símbolos relacionados.
    ===================================================== */

    const symbolsEvolutionData = [
        {
            id: "vida",
            title: "Vida",
            img: "./assets/images/symbols/evolution/concepts/vida.png",
            description: "O princípio da existência, do crescimento e da renovação.",
            symbols: [
                {
                    name: "Ankh",
                    origin: "Egito",
                    img: "./assets/images/symbols/evolution/symbols/ankh.png",
                    description: "Representa a vida eterna, a energia vital e a continuidade da existência."
                },
                {
                    name: "Árvore da Vida",
                    origin: "Celtas",
                    img: "./assets/images/symbols/evolution/symbols/arvore-da-vida.png",
                    description: "Simboliza a conexão entre céu, terra, raízes, ancestralidade e renovação."
                },
                {
                    name: "Lótus",
                    origin: "Índia",
                    img: "./assets/images/symbols/evolution/symbols/lotus.png",
                    description: "Expressa pureza, renascimento e crescimento espiritual mesmo em meio à escuridão."
                },
                {
                    name: "Roda do Dharma",
                    origin: "Budismo",
                    img: "./assets/images/symbols/evolution/symbols/roda-do-dharma.png",
                    description: "Representa o caminho da vida em equilíbrio, consciência e transformação interior."
                }
            ]
        },
        {
            id: "protecao",
            title: "Proteção",
            img: "./assets/images/symbols/evolution/concepts/protecao.png",
            description: "O instinto de defesa, preservação, amparo e afastamento do perigo.",
            symbols: [
                {
                    name: "Algiz",
                    origin: "Nórdicos",
                    img: "./assets/images/symbols/evolution/symbols/algiz.png",
                    description: "Runa associada ao amparo, à defesa espiritual e à conexão com forças superiores."
                },
                {
                    name: "Vegvísir",
                    origin: "Islândia",
                    img: "./assets/images/symbols/evolution/symbols/vegvisir.png",
                    description: "Bússola simbólica ligada à orientação, proteção e travessia de caminhos incertos."
                },
                {
                    name: "Oxé",
                    origin: "Iorubá",
                    img: "./assets/images/symbols/evolution/symbols/oxe.png",
                    description: "Machado sagrado relacionado ao poder de Xangô, à justiça e ao afastamento do mal."
                },
                {
                    name: "Mão de Fátima",
                    origin: "Oriente Médio",
                    img: "./assets/images/symbols/evolution/symbols/mao-de-fatima.png",
                    description: "Amuleto associado à proteção, bênção, sorte e afastamento do mau-olhado."
                }
            ]
        },
        {
            id: "sabedoria",
            title: "Sabedoria",
            img: "./assets/images/symbols/evolution/concepts/sabedoria.png",
            description: "A busca por conhecimento, visão interior, verdade e consciência.",
            symbols: [
                {
                    name: "Olho que Tudo Vê",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/olho-que-tudo-ve.png",
                    description: "Associado à vigilância, iluminação, percepção espiritual e conhecimento superior."
                },
                {
                    name: "Nó Infinito",
                    origin: "Tibetano",
                    img: "./assets/images/symbols/evolution/symbols/no-infinito.png",
                    description: "Representa interdependência, continuidade, sabedoria e conexão entre todos os caminhos."
                },
                {
                    name: "Coruja",
                    origin: "Grega",
                    img: "./assets/images/symbols/evolution/symbols/coruja.png",
                    description: "Ligada à deusa Atena, simboliza inteligência, estratégia e visão além das aparências."
                },
                {
                    name: "Roda do Dharma",
                    origin: "Budismo",
                    img: "./assets/images/symbols/evolution/symbols/roda-do-dharma.png",
                    description: "Representa ensinamento, caminho correto e compreensão profunda da existência."
                }
            ]
        },
        {
            id: "poder",
            title: "Poder",
            img: "./assets/images/symbols/evolution/concepts/poder.png",
            description: "Força, autoridade, domínio, justiça e manifestação de energia sagrada.",
            symbols: [
                {
                    name: "Mjölnir",
                    origin: "Nórdicos",
                    img: "./assets/images/symbols/evolution/symbols/mjolnir.png",
                    description: "Martelo de Thor, associado à força, proteção, bênção e poder divino."
                },
                {
                    name: "Tridente",
                    origin: "Grega",
                    img: "./assets/images/symbols/evolution/symbols/tridente.png",
                    description: "Símbolo de Poseidon, ligado ao domínio dos mares, tempestades e forças naturais."
                },
                {
                    name: "Raio",
                    origin: "Grega",
                    img: "./assets/images/symbols/evolution/symbols/raio.png",
                    description: "Atributo de Zeus, representa autoridade, decisão, energia e comando celestial."
                },
                {
                    name: "Cetro",
                    origin: "Diversas monarquias",
                    img: "./assets/images/symbols/evolution/symbols/cetro.png",
                    description: "Representa governo, liderança, legitimidade e poder concedido ao soberano."
                }
            ]
        },
        {
            id: "espiritualidade",
            title: "Espiritualidade",
            img: "./assets/images/symbols/evolution/concepts/espiritualidade.png",
            description: "A relação entre o visível e o invisível, o humano e o sagrado.",
            symbols: [
                {
                    name: "Om",
                    origin: "Hinduísmo",
                    img: "./assets/images/symbols/evolution/symbols/om.png",
                    description: "Som sagrado ligado à criação, consciência, meditação e essência do universo."
                },
                {
                    name: "Torii",
                    origin: "Japão",
                    img: "./assets/images/symbols/evolution/symbols/torii.png",
                    description: "Portal que marca a passagem entre o mundo cotidiano e o espaço sagrado."
                },
                {
                    name: "Flor da Vida",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/flor-da-vida.png",
                    description: "Padrão geométrico associado à criação, conexão universal e harmonia espiritual."
                },
                {
                    name: "Mandala",
                    origin: "Índia e Tibete",
                    img: "./assets/images/symbols/evolution/symbols/mandala.png",
                    description: "Representa meditação, ordem cósmica, centro espiritual e equilíbrio interior."
                }
            ]
        },
        {
            id: "natureza",
            title: "Natureza",
            img: "./assets/images/symbols/evolution/concepts/natureza.png",
            description: "Ciclos naturais, elementos, fertilidade, crescimento e harmonia com o mundo vivo.",
            symbols: [
                {
                    name: "Triskele",
                    origin: "Celtas",
                    img: "./assets/images/symbols/evolution/symbols/triskele.png",
                    description: "Representa movimento, ciclos, terra, mar, céu e transformação constante."
                },
                {
                    name: "Cruz Solar",
                    origin: "Europa Antiga",
                    img: "./assets/images/symbols/evolution/symbols/cruz-solar.png",
                    description: "Ligada ao sol, às estações, à luz e ao ritmo circular da natureza."
                },
                {
                    name: "Lótus",
                    origin: "Índia",
                    img: "./assets/images/symbols/evolution/symbols/lotus.png",
                    description: "Símbolo de florescimento, pureza e renovação que nasce das águas."
                },
                {
                    name: "Árvore Sagrada",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/arvore-sagrada.png",
                    description: "Representa raízes, crescimento, ancestralidade e ligação com os ciclos da vida."
                }
            ]
        },
        {
            id: "eternidade",
            title: "Eternidade",
            img: "./assets/images/symbols/evolution/concepts/eternidade.png",
            description: "O infinito, os ciclos, a continuidade e aquilo que atravessa o tempo.",
            symbols: [
                {
                    name: "Ouroboros",
                    origin: "Egito e Grécia",
                    img: "./assets/images/symbols/evolution/symbols/ouroboros.png",
                    description: "A serpente em círculo representa o ciclo eterno de criação, fim e renascimento."
                },
                {
                    name: "Yin Yang",
                    origin: "China",
                    img: "./assets/images/symbols/evolution/symbols/yin-yang.png",
                    description: "Expressa equilíbrio eterno entre forças opostas e complementares."
                },
                {
                    name: "Ankh",
                    origin: "Egito",
                    img: "./assets/images/symbols/evolution/symbols/ankh.png",
                    description: "Além da vida, representa continuidade espiritual e permanência além da morte."
                },
                {
                    name: "Nó Infinito",
                    origin: "Tibetano",
                    img: "./assets/images/symbols/evolution/symbols/no-infinito.png",
                    description: "Representa continuidade sem começo nem fim e a conexão entre todas as coisas."
                }
            ]
        },
        {
            id: "equilibrio",
            title: "Equilíbrio",
            img: "./assets/images/symbols/evolution/concepts/equilibrio.png",
            description: "A união entre forças opostas, harmonia, medida e ordem cósmica.",
            symbols: [
                {
                    name: "Yin Yang",
                    origin: "China",
                    img: "./assets/images/symbols/evolution/symbols/yin-yang.png",
                    description: "Representa forças opostas e complementares que existem em constante harmonia."
                },
                {
                    name: "Balança",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/balanca.png",
                    description: "Expressa justiça, medida, escolha e equilíbrio entre dois lados."
                },
                {
                    name: "Pentagrama",
                    origin: "Ocultismo",
                    img: "./assets/images/symbols/evolution/symbols/pentagrama.png",
                    description: "Representa harmonia entre elementos, espírito, corpo e forças naturais."
                },
                {
                    name: "Mandala",
                    origin: "Índia e Tibete",
                    img: "./assets/images/symbols/evolution/symbols/mandala.png",
                    description: "Organiza o centro e as direções, simbolizando ordem interior e equilíbrio espiritual."
                }
            ]
        },
        {
            id: "renascimento",
            title: "Renascimento",
            img: "./assets/images/symbols/evolution/concepts/renascimento.png",
            description: "Morte simbólica, retorno, transformação e recomeço após a escuridão.",
            symbols: [
                {
                    name: "Fênix",
                    origin: "Grega e Egípcia",
                    img: "./assets/images/symbols/evolution/symbols/fenix.png",
                    description: "Ave mítica que renasce das cinzas, simbolizando superação e retorno da vida."
                },
                {
                    name: "Escaravelho",
                    origin: "Egito",
                    img: "./assets/images/symbols/evolution/symbols/escaravelho.png",
                    description: "Associado ao sol nascente, renovação diária e regeneração espiritual."
                },
                {
                    name: "Lótus",
                    origin: "Índia",
                    img: "./assets/images/symbols/evolution/symbols/lotus.png",
                    description: "Floresce acima da lama, representando elevação, pureza e novo começo."
                },
                {
                    name: "Ouroboros",
                    origin: "Egito e Grécia",
                    img: "./assets/images/symbols/evolution/symbols/ouroboros.png",
                    description: "Mostra que fim e início fazem parte do mesmo ciclo de transformação."
                }
            ]
        },
        {
            id: "prosperidade",
            title: "Prosperidade",
            img: "./assets/images/symbols/evolution/concepts/prosperidade.png",
            description: "Abundância, fertilidade, fortuna, colheita e crescimento material ou espiritual.",
            symbols: [
                {
                    name: "Cornucópia",
                    origin: "Grega e Romana",
                    img: "./assets/images/symbols/evolution/symbols/cornucopia.png",
                    description: "O chifre da abundância representa fartura, alimento, colheita e riqueza."
                },
                {
                    name: "Dragão Chinês",
                    origin: "China",
                    img: "./assets/images/symbols/evolution/symbols/dragao-chines.png",
                    description: "Associado à prosperidade, poder benéfico, boa fortuna e vitalidade."
                },
                {
                    name: "Glifo Kin",
                    origin: "Maia",
                    img: "./assets/images/symbols/evolution/symbols/glifo-kin.png",
                    description: "Símbolo solar ligado à energia vital, tempo, crescimento e força do dia."
                },
                {
                    name: "Estrela de Ishtar",
                    origin: "Mesopotâmia",
                    img: "./assets/images/symbols/evolution/symbols/estrela-de-ishtar.png",
                    description: "Relacionada à fertilidade, brilho, poder divino e abundância."
                }
            ]
        },
        {
            id: "misterio",
            title: "Mistério",
            img: "./assets/images/symbols/evolution/concepts/misterio.png",
            description: "O oculto, o segredo, o desconhecido e aquilo que desperta investigação.",
            symbols: [
                {
                    name: "Lua Crescente",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/lua-crescente.png",
                    description: "Associada aos ciclos invisíveis, intuição, noite e transformação silenciosa."
                },
                {
                    name: "Olho que Tudo Vê",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/olho-que-tudo-ve.png",
                    description: "Evoca vigilância, segredo, conhecimento oculto e visão além do comum."
                },
                {
                    name: "Cubo de Metatron",
                    origin: "Tradições místicas",
                    img: "./assets/images/symbols/evolution/symbols/cubo-de-metatron.png",
                    description: "Geometria associada à estrutura invisível do mundo e à ordem sagrada."
                },
                {
                    name: "Sigilo de Salomão",
                    origin: "Tradições esotéricas",
                    img: "./assets/images/symbols/evolution/symbols/sigilo-de-salomao.png",
                    description: "Símbolo ligado ao domínio espiritual, mistério ritual e proteção mágica."
                }
            ]
        },
        {
            id: "transformacao",
            title: "Transformação",
            img: "./assets/images/symbols/evolution/concepts/transformacao.png",
            description: "Mudança, alquimia, passagem de estado e evolução da matéria ou da alma.",
            symbols: [
                {
                    name: "Mercúrio",
                    origin: "Alquimia",
                    img: "./assets/images/symbols/evolution/symbols/mercurio.png",
                    description: "Representa movimento, mutação, intelecto e transformação alquímica."
                },
                {
                    name: "Pedra Filosofal",
                    origin: "Alquimia",
                    img: "./assets/images/symbols/evolution/symbols/pedra-filosofal.png",
                    description: "Símbolo da busca pela perfeição, transmutação e conhecimento oculto."
                },
                {
                    name: "Borboleta",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/borboleta.png",
                    description: "Representa metamorfose, passagem, beleza e mudança de forma."
                },
                {
                    name: "Serpente",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/serpente.png",
                    description: "Por trocar de pele, simboliza renovação, cura e mudança profunda."
                }
            ]
        },
        {
            id: "tempo",
            title: "Tempo",
            img: "./assets/images/symbols/evolution/concepts/tempo.png",
            description: "Ciclos, passagem, destino, calendário, memória e movimento da existência.",
            symbols: [
                {
                    name: "Ampulheta",
                    origin: "Europa",
                    img: "./assets/images/symbols/evolution/symbols/ampulheta.png",
                    description: "Simboliza a passagem do tempo, finitude, espera e mudança inevitável."
                },
                {
                    name: "Pedra do Sol",
                    origin: "Asteca",
                    img: "./assets/images/symbols/evolution/symbols/pedra-do-sol.png",
                    description: "Representa ciclos cósmicos, calendário, eras e movimento do universo."
                },
                {
                    name: "Roda",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/roda.png",
                    description: "Expressa retorno, movimento, ciclo e repetição das fases da vida."
                },
                {
                    name: "Ouroboros",
                    origin: "Egito e Grécia",
                    img: "./assets/images/symbols/evolution/symbols/ouroboros.png",
                    description: "Mostra o tempo como ciclo contínuo de começo, fim e recomeço."
                }
            ]
        },
        {
            id: "cura",
            title: "Cura",
            img: "./assets/images/symbols/evolution/concepts/cura.png",
            description: "Restauração, proteção do corpo, equilíbrio da alma e renovação da energia vital.",
            symbols: [
                {
                    name: "Caduceu",
                    origin: "Grega",
                    img: "./assets/images/symbols/evolution/symbols/caduceu.png",
                    description: "Associado a Hermes, movimento, equilíbrio e comunicação entre planos."
                },
                {
                    name: "Bastão de Asclépio",
                    origin: "Grega",
                    img: "./assets/images/symbols/evolution/symbols/bastao-de-asclepio.png",
                    description: "Símbolo ligado à medicina, cura e restauração da saúde."
                },
                {
                    name: "Serpente",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/serpente.png",
                    description: "Relacionada à renovação, troca de pele e forças de cura."
                },
                {
                    name: "Lótus",
                    origin: "Índia",
                    img: "./assets/images/symbols/evolution/symbols/lotus.png",
                    description: "Representa purificação, superação e elevação espiritual."
                }
            ]
        },
        {
            id: "justica",
            title: "Justiça",
            img: "./assets/images/symbols/evolution/concepts/justica.png",
            description: "Lei, ordem, consequência, julgamento e equilíbrio moral.",
            symbols: [
                {
                    name: "Balança",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/balanca.png",
                    description: "Representa julgamento, medida, ponderação e equilíbrio entre forças opostas."
                },
                {
                    name: "Oxé de Xangô",
                    origin: "Iorubá",
                    img: "./assets/images/symbols/evolution/symbols/oxe-de-xango.png",
                    description: "Machado duplo associado à justiça, autoridade e equilíbrio de Xangô."
                },
                {
                    name: "Olho de Hórus",
                    origin: "Egito",
                    img: "./assets/images/symbols/evolution/symbols/olho-de-horus.png",
                    description: "Ligado à vigilância, proteção e restauração da ordem."
                },
                {
                    name: "Espada",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/espada.png",
                    description: "Simboliza decisão, corte da ilusão, autoridade e verdade."
                }
            ]
        },
        {
            id: "guerra",
            title: "Guerra",
            img: "./assets/images/symbols/evolution/concepts/guerra.png",
            description: "Conflito, coragem, estratégia, defesa do território e força combativa.",
            symbols: [
                {
                    name: "Lança",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/lanca.png",
                    description: "Representa ataque, defesa, direção e força guerreira."
                },
                {
                    name: "Escudo",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/escudo.png",
                    description: "Símbolo de defesa, resistência, proteção e identidade de um povo."
                },
                {
                    name: "Mjölnir",
                    origin: "Nórdicos",
                    img: "./assets/images/symbols/evolution/symbols/mjolnir.png",
                    description: "Representa força divina, proteção em batalha e bênção guerreira."
                },
                {
                    name: "Ares",
                    origin: "Grega",
                    img: "./assets/images/symbols/evolution/symbols/ares.png",
                    description: "Símbolo ligado à energia guerreira, ação, combate e impulso."
                }
            ]
        },
        {
            id: "amor",
            title: "Amor",
            img: "./assets/images/symbols/evolution/concepts/amor.png",
            description: "Afeto, união, fertilidade, beleza, desejo simbólico e vínculo entre seres.",
            symbols: [
                {
                    name: "Coração",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/coracao.png",
                    description: "Representa afeto, vínculo emocional, devoção e entrega."
                },
                {
                    name: "Rosa",
                    origin: "Europa",
                    img: "./assets/images/symbols/evolution/symbols/rosa.png",
                    description: "Associada à beleza, amor, segredo, devoção e sensibilidade."
                },
                {
                    name: "Estrela de Ishtar",
                    origin: "Mesopotâmia",
                    img: "./assets/images/symbols/evolution/symbols/estrela-de-ishtar.png",
                    description: "Ligada ao amor, fertilidade, desejo e poder feminino divino."
                },
                {
                    name: "Pomba",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/pomba.png",
                    description: "Representa paz, união, pureza e mensagem espiritual."
                }
            ]
        },
        {
            id: "luz",
            title: "Luz",
            img: "./assets/images/symbols/evolution/concepts/luz.png",
            description: "Clareza, revelação, presença divina, consciência e vitória sobre a escuridão.",
            symbols: [
                {
                    name: "Sol",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/sol.png",
                    description: "Representa vida, energia, clareza, poder celeste e renovação diária."
                },
                {
                    name: "Menorá",
                    origin: "Judaica",
                    img: "./assets/images/symbols/evolution/symbols/menora.png",
                    description: "Candelabro associado à luz sagrada, memória e presença espiritual."
                },
                {
                    name: "Aurora",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/aurora.png",
                    description: "Representa despertar, esperança e chegada de um novo ciclo."
                },
                {
                    name: "Halo",
                    origin: "Cristã e Budista",
                    img: "./assets/images/symbols/evolution/symbols/halo.png",
                    description: "Sinal visual de iluminação, santidade e elevação espiritual."
                }
            ]
        },
        {
            id: "sombra",
            title: "Sombra",
            img: "./assets/images/symbols/evolution/concepts/sombra.png",
            description: "O desconhecido, a noite, o inconsciente, o segredo e o poder oculto.",
            symbols: [
                {
                    name: "Lua Nova",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/lua-nova.png",
                    description: "Representa recolhimento, segredo, início invisível e força interna."
                },
                {
                    name: "Corvo",
                    origin: "Nórdica e Celta",
                    img: "./assets/images/symbols/evolution/symbols/corvo.png",
                    description: "Associado à profecia, memória, morte simbólica e mensagens ocultas."
                },
                {
                    name: "Máscara",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/mascara.png",
                    description: "Simboliza identidade oculta, ritual, transformação e mistério."
                },
                {
                    name: "Labirinto",
                    origin: "Grega",
                    img: "./assets/images/symbols/evolution/symbols/labirinto.png",
                    description: "Representa travessia interior, segredo, busca e confronto com o desconhecido."
                }
            ]
        },
        {
            id: "fertilidade",
            title: "Fertilidade",
            img: "./assets/images/symbols/evolution/concepts/fertilidade.png",
            description: "Geração, colheita, crescimento, abundância e continuidade da vida.",
            symbols: [
                {
                    name: "Espiga",
                    origin: "Diversas culturas agrícolas",
                    img: "./assets/images/symbols/evolution/symbols/espiga.png",
                    description: "Representa alimento, colheita, prosperidade e ciclo da terra."
                },
                {
                    name: "Lua",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/lua.png",
                    description: "Ligada aos ciclos, à gestação simbólica e ao ritmo da natureza."
                },
                {
                    name: "Estrela de Ishtar",
                    origin: "Mesopotâmia",
                    img: "./assets/images/symbols/evolution/symbols/estrela-de-ishtar.png",
                    description: "Associada à fertilidade, amor, vitalidade e força criadora."
                },
                {
                    name: "Árvore da Vida",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/arvore-da-vida.png",
                    description: "Simboliza geração, raízes, frutos e continuidade da linhagem."
                }
            ]
        },
        {
            id: "destino",
            title: "Destino",
            img: "./assets/images/symbols/evolution/concepts/destino.png",
            description: "Caminho, escolha, fio da vida, inevitabilidade e ligação entre eventos.",
            symbols: [
                {
                    name: "Fio",
                    origin: "Grega",
                    img: "./assets/images/symbols/evolution/symbols/fio.png",
                    description: "Ligado às Moiras, representa o curso da vida tecido pelo destino."
                },
                {
                    name: "Roda da Fortuna",
                    origin: "Medieval",
                    img: "./assets/images/symbols/evolution/symbols/roda-da-fortuna.png",
                    description: "Simboliza mudança de sorte, ciclos de ascensão e queda."
                },
                {
                    name: "Labirinto",
                    origin: "Grega",
                    img: "./assets/images/symbols/evolution/symbols/labirinto.png",
                    description: "Representa caminhos difíceis, escolhas e a busca pela saída."
                },
                {
                    name: "Bússola",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/bussola.png",
                    description: "Simboliza direção, jornada, orientação e encontro do próprio caminho."
                }
            ]
        },
        {
            id: "passagem",
            title: "Passagem",
            img: "./assets/images/symbols/evolution/concepts/passagem.png",
            description: "Travessia, portal, transição entre mundos, fases e estados da existência.",
            symbols: [
                {
                    name: "Torii",
                    origin: "Japão",
                    img: "./assets/images/symbols/evolution/symbols/torii.png",
                    description: "Marca a passagem entre o mundo humano e o território sagrado."
                },
                {
                    name: "Porta",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/porta.png",
                    description: "Representa entrada, escolha, transição e início de uma nova etapa."
                },
                {
                    name: "Barca Solar",
                    origin: "Egito",
                    img: "./assets/images/symbols/evolution/symbols/barca-solar.png",
                    description: "Relacionada à travessia do sol e à jornada entre vida, noite e renascimento."
                },
                {
                    name: "Ponte",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/ponte.png",
                    description: "Simboliza conexão entre lados, mundos, pessoas e estados espirituais."
                }
            ]
        },
        {
            id: "memoria",
            title: "Memória",
            img: "./assets/images/symbols/evolution/concepts/memoria.png",
            description: "Ancestralidade, tradição, registro, linhagem e preservação do passado.",
            symbols: [
                {
                    name: "Pergaminho",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/pergaminho.png",
                    description: "Representa registro, tradição, conhecimento preservado e transmissão."
                },
                {
                    name: "Ogham",
                    origin: "Celta",
                    img: "./assets/images/symbols/evolution/symbols/ogham.png",
                    description: "Sistema de marcas associado à memória, árvores e inscrições antigas."
                },
                {
                    name: "Árvore Ancestral",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/arvore-ancestral.png",
                    description: "Simboliza linhagem, raízes familiares, memória e continuidade."
                },
                {
                    name: "Estela",
                    origin: "Egito e Mesopotâmia",
                    img: "./assets/images/symbols/evolution/symbols/estela.png",
                    description: "Pedra gravada usada para preservar feitos, nomes, leis e histórias."
                }
            ]
        },
        {
            id: "criacao",
            title: "Criação",
            img: "./assets/images/symbols/evolution/concepts/criacao.png",
            description: "Origem, forma, nascimento do mundo, geometria e princípio ordenador.",
            symbols: [
                {
                    name: "Flor da Vida",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/flor-da-vida.png",
                    description: "Padrão geométrico associado à criação, ordem universal e conexão de tudo."
                },
                {
                    name: "Ovo Cósmico",
                    origin: "Diversas mitologias",
                    img: "./assets/images/symbols/evolution/symbols/ovo-cosmico.png",
                    description: "Representa o universo em potencial antes de sua manifestação."
                },
                {
                    name: "Espiral",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/espiral.png",
                    description: "Simboliza expansão, nascimento, crescimento e movimento criador."
                },
                {
                    name: "Ponto Central",
                    origin: "Tradições místicas",
                    img: "./assets/images/symbols/evolution/symbols/ponto-central.png",
                    description: "Marca a origem, o centro e o primeiro princípio de manifestação."
                }
            ]
        },
        {
            id: "ordem",
            title: "Ordem",
            img: "./assets/images/symbols/evolution/concepts/ordem.png",
            description: "Estrutura, lei cósmica, organização, estabilidade e harmonia do mundo.",
            symbols: [
                {
                    name: "Quadrado",
                    origin: "Geometria Sagrada",
                    img: "./assets/images/symbols/evolution/symbols/quadrado.png",
                    description: "Representa estabilidade, matéria, fundamento e estrutura do mundo visível."
                },
                {
                    name: "Cubo de Metatron",
                    origin: "Tradições místicas",
                    img: "./assets/images/symbols/evolution/symbols/cubo-de-metatron.png",
                    description: "Simboliza organização geométrica, conexão e ordem invisível da criação."
                },
                {
                    name: "Mandala",
                    origin: "Índia e Tibete",
                    img: "./assets/images/symbols/evolution/symbols/mandala.png",
                    description: "Organiza centro, direções e camadas da experiência espiritual."
                },
                {
                    name: "Dharma",
                    origin: "Budismo",
                    img: "./assets/images/symbols/evolution/symbols/dharma.png",
                    description: "Representa lei, caminho, ensinamento e ordem ética da existência."
                }
            ]
        },
        {
            id: "caos",
            title: "Caos",
            img: "./assets/images/symbols/evolution/concepts/caos.png",
            description: "Força primordial, instabilidade, desordem criadora e potência antes da forma.",
            symbols: [
                {
                    name: "Espiral",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/espiral.png",
                    description: "Expressa movimento, vertigem, expansão e força criadora em transformação."
                },
                {
                    name: "Serpente Primordial",
                    origin: "Diversas mitologias",
                    img: "./assets/images/symbols/evolution/symbols/serpente-primordial.png",
                    description: "Representa energia ancestral, profundezas, risco e potência criadora."
                },
                {
                    name: "Oceano Primordial",
                    origin: "Egito e Mesopotâmia",
                    img: "./assets/images/symbols/evolution/symbols/oceano-primordial.png",
                    description: "Simboliza o estado anterior à ordem, onde tudo ainda pode surgir."
                },
                {
                    name: "Raio",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/raio.png",
                    description: "Representa ruptura, impacto, força repentina e transformação."
                }
            ]
        },
        {
            id: "viagem",
            title: "Viagem",
            img: "./assets/images/symbols/evolution/concepts/viagem.png",
            description: "Jornada, orientação, busca, travessia e encontro com o desconhecido.",
            symbols: [
                {
                    name: "Vegvísir",
                    origin: "Islândia",
                    img: "./assets/images/symbols/evolution/symbols/vegvisir.png",
                    description: "Símbolo de orientação e proteção para atravessar caminhos incertos."
                },
                {
                    name: "Bússola",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/bussola.png",
                    description: "Representa direção, escolha, jornada e busca por um destino."
                },
                {
                    name: "Barco",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/barco.png",
                    description: "Simboliza travessia, aventura, deslocamento e passagem entre mundos."
                },
                {
                    name: "Pegadas",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/pegadas.png",
                    description: "Representam caminho percorrido, presença, rastro e memória da jornada."
                }
            ]
        },
        {
            id: "uniao",
            title: "União",
            img: "./assets/images/symbols/evolution/concepts/uniao.png",
            description: "Laço, vínculo, aliança, integração entre opostos e conexão entre partes.",
            symbols: [
                {
                    name: "Triquetra",
                    origin: "Celta",
                    img: "./assets/images/symbols/evolution/symbols/triquetra.png",
                    description: "Representa união entre três forças, ciclos e continuidade espiritual."
                },
                {
                    name: "Nó Celta",
                    origin: "Celta",
                    img: "./assets/images/symbols/evolution/symbols/no-celta.png",
                    description: "Simboliza laços sem fim, continuidade, vínculo e interdependência."
                },
                {
                    name: "Aliança",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/alianca.png",
                    description: "Representa compromisso, círculo de união e promessa duradoura."
                },
                {
                    name: "Yin Yang",
                    origin: "China",
                    img: "./assets/images/symbols/evolution/symbols/yin-yang.png",
                    description: "Mostra a união dinâmica entre forças opostas que formam um todo."
                }
            ]
        },
        {
            id: "pureza",
            title: "Pureza",
            img: "./assets/images/symbols/evolution/concepts/pureza.png",
            description: "Limpeza simbólica, elevação, clareza interior e superação da matéria densa.",
            symbols: [
                {
                    name: "Lótus",
                    origin: "Índia e Tibete",
                    img: "./assets/images/symbols/evolution/symbols/lotus.png",
                    description: "Representa pureza espiritual que floresce acima da lama."
                },
                {
                    name: "Água",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/agua.png",
                    description: "Simboliza purificação, limpeza, renovação e fluidez."
                },
                {
                    name: "Pomba",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/pomba.png",
                    description: "Associada à paz, pureza, mensagem espiritual e esperança."
                },
                {
                    name: "Branco Ritual",
                    origin: "Diversas tradições",
                    img: "./assets/images/symbols/evolution/symbols/branco-ritual.png",
                    description: "Representa clareza, silêncio, simplicidade e estado purificado."
                }
            ]
        },
        {
            id: "coragem",
            title: "Coragem",
            img: "./assets/images/symbols/evolution/concepts/coragem.png",
            description: "Força interior, enfrentamento, bravura, presença e resistência diante do medo.",
            symbols: [
                {
                    name: "Leão",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/leao.png",
                    description: "Representa bravura, soberania, força solar e presença dominante."
                },
                {
                    name: "Espada",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/espada.png",
                    description: "Simboliza decisão, enfrentamento, verdade e ação direta."
                },
                {
                    name: "Dragão",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/dragao.png",
                    description: "Representa força extrema, desafio, poder e domínio de energias intensas."
                },
                {
                    name: "Escudo",
                    origin: "Diversas culturas",
                    img: "./assets/images/symbols/evolution/symbols/escudo.png",
                    description: "Expressa resistência, defesa, proteção e firmeza."
                }
            ]
        },
        {
            id: "sorte",
            title: "Sorte",
            img: "./assets/images/symbols/evolution/concepts/sorte.png",
            description: "Boa fortuna, bênção, acaso favorável e sinais de caminho positivo.",
            symbols: [
                {
                    name: "Trevo",
                    origin: "Irlanda",
                    img: "./assets/images/symbols/evolution/symbols/trevo.png",
                    description: "Amuleto popular de sorte, esperança e proteção."
                },
                {
                    name: "Ferradura",
                    origin: "Europa",
                    img: "./assets/images/symbols/evolution/symbols/ferradura.png",
                    description: "Símbolo de boa fortuna, defesa e prosperidade."
                },
                {
                    name: "Maneki-neko",
                    origin: "Japão",
                    img: "./assets/images/symbols/evolution/symbols/maneki-neko.png",
                    description: "Gato da sorte associado à prosperidade, convite e bons caminhos."
                },
                {
                    name: "Dragão Chinês",
                    origin: "China",
                    img: "./assets/images/symbols/evolution/symbols/dragao-chines.png",
                    description: "Representa fortuna, prosperidade, poder benéfico e energia positiva."
                }
            ]
        }
    ];

    /* =====================================================
       4. ESTADO DA INTERFACE

       Centraliza os valores ativos da página.
       Isso evita várias variáveis soltas pelo arquivo.
    ===================================================== */

    const symbolsState = {
        activeCivilizationGroup: "todos",
        civilizationSearchTerm: "",
        activeEvolutionId: symbolsEvolutionData[0]?.id || "vida"
    };

    /* =====================================================
       5. SELETORES DO DOM

       Mantém todos os seletores importantes em um único lugar.
       Se algum id mudar no HTML, basta atualizar aqui.
    ===================================================== */

    const symbolsSelectors = {
        civilizationsGroups: "#symbolsCivilizationsGroups",
        civilizationsFilters: "#symbolsCivilizationsFilters",
        civilizationsSearch: "#symbolsCivilizationsSearch",
        civilizationsStatus: "#symbolsCivilizationsStatus",

        evolutionTabs: "#symbolsEvolutionTabs",
        evolutionPanel: "#symbolsEvolutionPanel",
        evolutionStatus: "#symbolsEvolutionStatus"
    };

    /* =====================================================
       6. CAMINHOS BASE DAS IMAGENS

       Caso algum item não tenha img definido, o JS monta o caminho
       automaticamente usando o nome/id convertido para slug.
    ===================================================== */

    const SYMBOLS_EVOLUTION_CONCEPT_IMAGE_BASE = "./assets/images/symbols/evolution/concepts/";
    const SYMBOLS_EVOLUTION_SYMBOL_IMAGE_BASE = "./assets/images/symbols/evolution/symbols/";
    const SYMBOLS_FALLBACK_IMAGE_WIDTH = 360;
    const SYMBOLS_FALLBACK_IMAGE_HEIGHT = 240;

    /* =====================================================
       6.1. CONFIGURAÇÕES DE PERFORMANCE E VALIDAÇÃO

       - Debounce evita renderizar a busca a cada tecla imediatamente.
       - Campos obrigatórios ajudam a detectar dados incompletos.
    ===================================================== */

    const SYMBOLS_SEARCH_DEBOUNCE_DELAY = 220;

    // Altere para true apenas durante desenvolvimento para exibir avisos de validação no console.
    const SYMBOLS_DEBUG = false;

    const REQUIRED_CIVILIZATION_FIELDS = [
        "group",
        "civilization",
        "symbol",
        "image",
        "description"
    ];

    const REQUIRED_EVOLUTION_FIELDS = [
        "id",
        "title",
        "description",
        "symbols"
    ];

    const REQUIRED_EVOLUTION_SYMBOL_FIELDS = [
        "name",
        "origin",
        "description"
    ];

    /* =====================================================
       7. UTILITÁRIOS GERAIS

       Funções pequenas e reutilizáveis para evitar repetição.
    ===================================================== */

    function getElement(selector) {
        return document.querySelector(selector);
    }

    function getElements(selector) {
        return Array.from(document.querySelectorAll(selector));
    }

    function createElement(tagName, options = {}) {
        const element = document.createElement(tagName);

        if (options.className) element.className = options.className;
        if (options.id) element.id = options.id;
        if (options.text) element.textContent = options.text;

        if (options.attributes) {
            Object.entries(options.attributes).forEach(([name, value]) => {
                if (value !== null && value !== undefined) {
                    element.setAttribute(name, String(value));
                }
            });
        }

        return element;
    }

    function appendChildren(parent, children) {
        children.forEach((child) => {
            if (child) parent.appendChild(child);
        });

        return parent;
    }

    function normalizeSymbolsText(value) {
        return String(value || "")
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();
    }

    function slugifySymbolsImageName(value) {
        return normalizeSymbolsText(value)
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
    }

    function getSymbolsGroupEntries() {
        return Object.entries(symbolsCivilizationsGroups);
    }

    function updateStatus(selector, message) {
        const status = getElement(selector);

        if (status) {
            status.textContent = message;
        }
    }


    function setLiveRegionMode(selector, mode = "polite") {
        const status = getElement(selector);

        if (status) {
            status.setAttribute("aria-live", mode);
        }
    }

    function clearElement(element) {
        if (element) {
            element.replaceChildren();
        }
    }

    function createFragment(items, callback) {
        const fragment = document.createDocumentFragment();

        items.forEach((item, index) => {
            const child = callback(item, index);

            if (child) {
                fragment.appendChild(child);
            }
        });

        return fragment;
    }

    function setAriaBusy(element, isBusy) {
        if (element) {
            element.setAttribute("aria-busy", isBusy ? "true" : "false");
        }
    }

    function debounce(callback, delay = SYMBOLS_SEARCH_DEBOUNCE_DELAY) {
        let timeoutId;

        return (...args) => {
            window.clearTimeout(timeoutId);

            timeoutId = window.setTimeout(() => {
                callback(...args);
            }, delay);
        };
    }

    function escapeSvgText(value) {
        return String(value || "Símbolo")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function createFallbackImageDataUri(label = "Símbolo") {
        const safeLabel = escapeSvgText(String(label || "Símbolo").slice(0, 28));

        const svg = `
            <svg xmlns="http://www.w3.org/2000/svg" width="${SYMBOLS_FALLBACK_IMAGE_WIDTH}" height="${SYMBOLS_FALLBACK_IMAGE_HEIGHT}" viewBox="0 0 ${SYMBOLS_FALLBACK_IMAGE_WIDTH} ${SYMBOLS_FALLBACK_IMAGE_HEIGHT}">
                <rect width="100%" height="100%" fill="#07100c"/>
                <circle cx="180" cy="98" r="42" fill="none" stroke="#d8aa47" stroke-width="3" opacity="0.8"/>
                <text x="180" y="112" text-anchor="middle" font-size="42" fill="#d8aa47">✦</text>
                <text x="180" y="172" text-anchor="middle" font-family="serif" font-size="22" fill="#f2dfa9">${safeLabel}</text>
            </svg>
        `.trim();

        return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
    }

    /* =====================================================
       8. UTILITÁRIOS DE IMAGEM

       Cria imagens com fallback visual caso o arquivo não exista.
    ===================================================== */

    function getSymbolsEvolutionConceptImage(item) {
        return item.img || `${SYMBOLS_EVOLUTION_CONCEPT_IMAGE_BASE}${item.id}.png`;
    }

    function getSymbolsEvolutionSymbolImage(item) {
        return item.img || `${SYMBOLS_EVOLUTION_SYMBOL_IMAGE_BASE}${slugifySymbolsImageName(item.name)}.png`;
    }

    function createImageWithFallback(options = {}) {
        const wrapper = createElement("span", {
            className: options.wrapperClassName || ""
        });

        const image = createElement("img", {
            className: options.imageClassName || "",
            attributes: {
                src: options.src || "",
                alt: options.alt || "",
                width: options.width || null,
                height: options.height || null,
                loading: options.loading || "lazy",
                decoding: "async"
            }
        });

        const fallback = createElement("span", {
            className: options.fallbackClassName || "symbols-evolution-image-fallback",
            text: options.fallback || "✦",
            attributes: {
                "aria-hidden": "true",
                hidden: ""
            }
        });

        image.addEventListener("error", () => {
            if (options.useImageFallback) {
                image.src = createFallbackImageDataUri(options.fallbackLabel || options.alt || "Símbolo");
                image.alt = options.alt || "Imagem ilustrativa de símbolo";
                return;
            }

            image.remove();
            fallback.hidden = false;
        }, { once: true });

        appendChildren(wrapper, [image, fallback]);

        return wrapper;
    }

    /* =====================================================
       8.1. VALIDAÇÃO DOS DADOS

       Mostra avisos no console quando algum item obrigatório
       estiver incompleto. Isso facilita manutenção futura.
    ===================================================== */

    function getMissingFields(item, requiredFields) {
        return requiredFields.filter((field) => {
            const value = item?.[field];
            return value === undefined || value === null || value === "";
        });
    }

    function validateCivilizationSymbolsData() {
        symbolsCivilizationsData.forEach((item, index) => {
            const missingFields = getMissingFields(item, REQUIRED_CIVILIZATION_FIELDS);

            if (missingFields.length) {
                console.warn(
                    `[Símbolos] Item de civilização ${index + 1} possui campos ausentes: ${missingFields.join(", ")}.`,
                    item
                );
            }

            if (item.group && !symbolsCivilizationsGroups[item.group]) {
                console.warn(
                    `[Símbolos] Grupo não cadastrado no item "${item.symbol || index + 1}": ${item.group}.`,
                    item
                );
            }
        });
    }

    function validateEvolutionSymbolsData() {
        symbolsEvolutionData.forEach((item, index) => {
            const missingFields = getMissingFields(item, REQUIRED_EVOLUTION_FIELDS);

            if (missingFields.length) {
                console.warn(
                    `[Símbolos] Conceito de evolução ${index + 1} possui campos ausentes: ${missingFields.join(", ")}.`,
                    item
                );
            }

            if (!Array.isArray(item.symbols)) return;

            item.symbols.forEach((symbolItem, symbolIndex) => {
                const symbolMissingFields = getMissingFields(symbolItem, REQUIRED_EVOLUTION_SYMBOL_FIELDS);

                if (symbolMissingFields.length) {
                    console.warn(
                        `[Símbolos] Símbolo ${symbolIndex + 1} do conceito "${item.title}" possui campos ausentes: ${symbolMissingFields.join(", ")}.`,
                        symbolItem
                    );
                }
            });
        });
    }

    function validateSymbolsPageData() {
        validateCivilizationSymbolsData();
        validateEvolutionSymbolsData();
    }

    /* =====================================================
       9. FILTRO E AGRUPAMENTO / CIVILIZAÇÕES

       Calcula quais símbolos devem aparecer com base no filtro ativo
       e na busca digitada pelo usuário.
    ===================================================== */

    function getFilteredCivilizationSymbols() {
        const normalizedSearch = normalizeSymbolsText(symbolsState.civilizationSearchTerm);

        return symbolsCivilizationsData.filter((item) => {
            const matchesGroup =
                symbolsState.activeCivilizationGroup === "todos" ||
                item.group === symbolsState.activeCivilizationGroup;

            const searchableText = normalizeSymbolsText(
                `${item.civilization} ${item.symbol} ${item.description} ${item.group} ${item.alt || ""}`
            );

            const matchesSearch =
                !normalizedSearch ||
                searchableText.includes(normalizedSearch);

            return matchesGroup && matchesSearch;
        });
    }

    function groupCivilizationSymbols(items) {
        return items.reduce((groups, item) => {
            if (!groups[item.group]) {
                groups[item.group] = [];
            }

            groups[item.group].push(item);

            return groups;
        }, {});
    }

    function getCivilizationGroupTotal(groupKey) {
        if (groupKey === "todos") {
            return symbolsCivilizationsData.length;
        }

        return symbolsCivilizationsData.filter((item) => item.group === groupKey).length;
    }

    /* =====================================================
       10. RENDERIZAÇÃO / CARDS DAS CIVILIZAÇÕES

       Cria o card individual de cada símbolo.
    ===================================================== */

    function createCivilizationImage(item) {
        const image = createElement("img", {
            attributes: {
                src: item.image,
                alt: item.alt || `${item.symbol} - ${item.civilization}`,
                width: SYMBOLS_FALLBACK_IMAGE_WIDTH,
                height: SYMBOLS_FALLBACK_IMAGE_HEIGHT,
                loading: "lazy",
                decoding: "async"
            }
        });

        image.addEventListener("error", () => {
            image.src = createFallbackImageDataUri(item.symbol || item.civilization);
            image.alt = `Imagem ilustrativa indisponível para ${item.symbol || "símbolo"}`;
        }, { once: true });

        return image;
    }

    function createCivilizationCard(item) {
        const article = createElement("article", {
            className: "symbols-civilization-card",
            attributes: {
                role: "listitem"
            }
        });

        const image = createCivilizationImage(item);

        const title = createElement("h4", {
            text: item.civilization
        });

        const symbol = createElement("p", {
            className: "symbols-civilization-symbol",
            text: item.symbol
        });

        const description = createElement("small", {
            className: "symbols-civilization-description",
            text: item.description
        });

        appendChildren(article, [image, title, symbol, description]);

        if (item.link && item.link !== "#") {
            const link = createElement("a", {
                className: "symbols-civilization-link",
                text: "Saiba mais →",
                attributes: {
                    href: item.link,
                    "aria-label": `Saiba mais sobre ${item.symbol} na tradição ${item.civilization}`
                }
            });

            article.appendChild(link);
        }

        return article;
    }

    /* =====================================================
       11. RENDERIZAÇÃO / FILTROS DAS CIVILIZAÇÕES

       Os filtros são criados uma vez.
       Depois, apenas o estado visual é atualizado.
    ===================================================== */

    function createCivilizationFilterButton(groupKey, label, total) {
        const button = createElement("button", {
            className: "symbols-civilizations-filter",
            attributes: {
                type: "button",
                role: "listitem",
                "data-group": groupKey,
                "aria-pressed": groupKey === symbolsState.activeCivilizationGroup ? "true" : "false"
            }
        });

        const text = createElement("span", { text: label });
        const count = createElement("strong", { text: String(total) });

        appendChildren(button, [text, count]);

        button.addEventListener("click", () => {
            symbolsState.activeCivilizationGroup = groupKey;
            renderSymbolsCivilizations();
        });

        return button;
    }

    function renderCivilizationFilters() {
        const filters = getElement(symbolsSelectors.civilizationsFilters);

        if (!filters) return;

        filters.setAttribute("role", "list");
        clearElement(filters);

        const filterItems = [
            ["todos", { title: "Todos" }],
            ...getSymbolsGroupEntries()
        ];

        const fragment = createFragment(filterItems, ([groupKey, group]) => (
            createCivilizationFilterButton(
                groupKey,
                group.title,
                getCivilizationGroupTotal(groupKey)
            )
        ));

        filters.appendChild(fragment);
    }

    function updateCivilizationFiltersState() {
        getElements(".symbols-civilizations-filter").forEach((button) => {
            const isActive = button.dataset.group === symbolsState.activeCivilizationGroup;
            button.setAttribute("aria-pressed", isActive ? "true" : "false");
        });
    }

    /* =====================================================
       12. RENDERIZAÇÃO / GRUPOS DAS CIVILIZAÇÕES

       Cria cada grupo com título, descrição e grid de cards.
    ===================================================== */

    function createCivilizationGroup(groupKey, items, index) {
        const groupInfo = symbolsCivilizationsGroups[groupKey];

        const section = createElement("section", {
            className: "symbols-civilization-group",
            attributes: {
                "aria-labelledby": `symbols-group-title-${groupKey}`
            }
        });

        const header = createElement("header", {
            className: "symbols-civilization-group-header"
        });

        const number = createElement("span", {
            className: "symbols-civilization-group-number",
            text: String(index + 1).padStart(2, "0")
        });

        const content = createElement("div");

        const title = createElement("h3", {
            id: `symbols-group-title-${groupKey}`,
            text: groupInfo?.title || "Outros símbolos"
        });

        const description = createElement("p", {
            text: groupInfo?.description || "Símbolos de diferentes tradições culturais."
        });

        appendChildren(content, [title, description]);
        appendChildren(header, [number, content]);

        const grid = createElement("div", {
            className: "symbols-civilizations-grid",
            attributes: {
                role: "list"
            }
        });

        grid.appendChild(createFragment(items, createCivilizationCard));
        appendChildren(section, [header, grid]);

        return section;
    }

    function createEmptyCivilizationsMessage(text) {
        return createElement("p", {
            className: "symbols-civilizations-empty",
            text
        });
    }

    /* =====================================================
       13. RENDERIZAÇÃO PRINCIPAL / CIVILIZAÇÕES

       Atualiza a lista visível conforme filtro e busca.
    ===================================================== */

    function renderSymbolsCivilizations() {
        const container = getElement(symbolsSelectors.civilizationsGroups);

        if (!container) return;

        setLiveRegionMode(symbolsSelectors.civilizationsStatus, "off");
        setAriaBusy(container, true);

        const filteredItems = getFilteredCivilizationSymbols();
        const groupedItems = groupCivilizationSymbols(filteredItems);

        clearElement(container);
        updateCivilizationFiltersState();

        if (!filteredItems.length) {
            container.appendChild(
                createEmptyCivilizationsMessage("Nenhum símbolo encontrado para essa busca.")
            );

            setLiveRegionMode(symbolsSelectors.civilizationsStatus, "polite");
            updateStatus(
                symbolsSelectors.civilizationsStatus,
                "Nenhum símbolo encontrado para essa busca."
            );

            setAriaBusy(container, false);
            return;
        }

        const visibleGroups = getSymbolsGroupEntries()
            .map(([groupKey]) => groupKey)
            .filter((groupKey) => groupedItems[groupKey]?.length);

        const fragment = createFragment(visibleGroups, (groupKey, visibleIndex) => (
            createCivilizationGroup(groupKey, groupedItems[groupKey], visibleIndex)
        ));

        container.appendChild(fragment);

        setLiveRegionMode(symbolsSelectors.civilizationsStatus, "polite");
        updateStatus(
            symbolsSelectors.civilizationsStatus,
            `${filteredItems.length} símbolo${filteredItems.length === 1 ? "" : "s"} encontrado${filteredItems.length === 1 ? "" : "s"}.`
        );

        setAriaBusy(container, false);
    }

    /* =====================================================
       14. EVENTOS / CIVILIZAÇÕES

       Liga a busca ao estado e atualiza os resultados.
    ===================================================== */

    function initSymbolsCivilizations() {
        const container = getElement(symbolsSelectors.civilizationsGroups);
        const searchInput = getElement(symbolsSelectors.civilizationsSearch);

        if (!container) return;

        renderCivilizationFilters();

        if (searchInput) {
            const handleSearchInput = debounce((event) => {
                symbolsState.civilizationSearchTerm = event.target.value;
                renderSymbolsCivilizations();
            });

            searchInput.addEventListener("input", handleSearchInput);
        }

        renderSymbolsCivilizations();
    }

    /* =====================================================
       15. RENDERIZAÇÃO / IMAGENS DA EVOLUÇÃO

       Cria imagens dos conceitos e dos símbolos da seção Evolução.
    ===================================================== */

    function createEvolutionConceptImage(item, options = {}) {
        return createImageWithFallback({
            src: getSymbolsEvolutionConceptImage(item),
            alt: options.alt || "",
            fallback: options.fallback || "",
            wrapperClassName: options.wrapperClassName,
            imageClassName: options.imageClassName,
            width: options.width || 64,
            height: options.height || 64,
            useImageFallback: true,
            fallbackLabel: item.title
        });
    }

    function createEvolutionSymbolImage(item) {
        return createImageWithFallback({
            src: getSymbolsEvolutionSymbolImage(item),
            alt: item.name,
            fallback: "",
            wrapperClassName: "symbols-evolution-symbol-image-wrap",
            imageClassName: "symbols-evolution-symbol-image",
            width: 112,
            height: 112,
            useImageFallback: true,
            fallbackLabel: item.name
        });
    }

    /* =====================================================
       16. RENDERIZAÇÃO / ABAS DA EVOLUÇÃO

       As abas são criadas uma vez.
       Depois, o JS apenas atualiza o estado ativo.
    ===================================================== */

    function createEvolutionTab(item) {
        const isActive = item.id === symbolsState.activeEvolutionId;

        const button = createElement("button", {
            className: "symbols-evolution-tab",
            id: `symbols-evolution-tab-${item.id}`,
            attributes: {
                type: "button",
                role: "tab",
                "data-evolution": item.id,
                "aria-controls": "symbolsEvolutionPanel",
                "aria-selected": isActive ? "true" : "false",
                tabindex: isActive ? "0" : "-1"
            }
        });

        const icon = createEvolutionConceptImage(item, {
            wrapperClassName: "symbols-evolution-tab-icon",
            imageClassName: "symbols-evolution-tab-image",
            width: 36,
            height: 36
        });

        icon.setAttribute("aria-hidden", "true");

        const label = createElement("span", {
            text: item.title
        });

        appendChildren(button, [icon, label]);

        button.addEventListener("click", () => {
            setActiveEvolutionTab(item.id);
        });

        button.addEventListener("keydown", handleEvolutionTabKeydown);

        return button;
    }

    function renderEvolutionTabs() {
        const tabsContainer = getElement(symbolsSelectors.evolutionTabs);

        if (!tabsContainer) return;

        clearElement(tabsContainer);
        tabsContainer.appendChild(createFragment(symbolsEvolutionData, createEvolutionTab));
    }

    function updateEvolutionTabsState() {
        getElements(".symbols-evolution-tab").forEach((button) => {
            const isActive = button.dataset.evolution === symbolsState.activeEvolutionId;

            button.setAttribute("aria-selected", isActive ? "true" : "false");
            button.setAttribute("tabindex", isActive ? "0" : "-1");
        });
    }

    function setActiveEvolutionTab(evolutionId, shouldFocus = false) {
        if (!symbolsEvolutionData.some((item) => item.id === evolutionId)) return;

        symbolsState.activeEvolutionId = evolutionId;

        updateEvolutionTabsState();
        renderSymbolsEvolutionPanel();

        if (shouldFocus) {
            getElement(`#symbols-evolution-tab-${evolutionId}`)?.focus();
        }
    }

    /* =====================================================
       17. ACESSIBILIDADE / TECLADO DAS ABAS

       Permite navegar nas abas com setas, Home, End, Enter e Espaço.
    ===================================================== */

    function getCurrentEvolutionTabIndex(currentButton) {
        const tabs = getElements(".symbols-evolution-tab");
        return tabs.indexOf(currentButton);
    }

    function focusEvolutionTabByIndex(index) {
        const tabs = getElements(".symbols-evolution-tab");

        if (!tabs.length) return;

        const safeIndex = (index + tabs.length) % tabs.length;
        const nextButton = tabs[safeIndex];

        nextButton.focus();
        setActiveEvolutionTab(nextButton.dataset.evolution);
    }

    function handleEvolutionTabKeydown(event) {
        const currentIndex = getCurrentEvolutionTabIndex(event.currentTarget);
        const tabs = getElements(".symbols-evolution-tab");

        if (currentIndex < 0 || !tabs.length) return;

        const keyActions = {
            ArrowRight: currentIndex + 1,
            ArrowDown: currentIndex + 1,
            ArrowLeft: currentIndex - 1,
            ArrowUp: currentIndex - 1,
            Home: 0,
            End: tabs.length - 1
        };

        if (event.key in keyActions) {
            event.preventDefault();
            focusEvolutionTabByIndex(keyActions[event.key]);
            return;
        }

        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setActiveEvolutionTab(event.currentTarget.dataset.evolution);
        }
    }

    /* =====================================================
       18. RENDERIZAÇÃO / CARDS DA EVOLUÇÃO

       Cria cada card de símbolo ligado ao conceito ativo.
    ===================================================== */

    function createEvolutionCard(item) {
        const card = createElement("article", {
            className: "symbols-evolution-card",
            attributes: {
                role: "listitem"
            }
        });

        const symbol = createElement("div", {
            className: "symbols-evolution-symbol"
        });

        symbol.appendChild(createEvolutionSymbolImage(item));

        const title = createElement("h4", {
            text: item.name
        });

        const origin = createElement("span", {
            className: "symbols-evolution-origin",
            text: item.origin
        });

        const description = createElement("p", {
            text: item.description
        });

        appendChildren(card, [symbol, title, origin, description]);

        return card;
    }

    /* =====================================================
       19. RENDERIZAÇÃO / PAINEL DA EVOLUÇÃO

       Atualiza apenas o conteúdo do painel ativo.
    ===================================================== */

    function getActiveEvolutionItem() {
        return (
            symbolsEvolutionData.find((item) => item.id === symbolsState.activeEvolutionId) ||
            symbolsEvolutionData[0]
        );
    }

    function renderSymbolsEvolutionPanel() {
        const panel = getElement(symbolsSelectors.evolutionPanel);
        const activeItem = getActiveEvolutionItem();

        if (!panel || !activeItem) return;

        setLiveRegionMode(symbolsSelectors.evolutionStatus, "off");
        setAriaBusy(panel, true);
        clearElement(panel);

        const group = createElement("article", {
            className: "symbols-evolution-group",
            id: `evolucao-${activeItem.id}`,
            attributes: {
                role: "tabpanel",
                "aria-labelledby": `symbols-evolution-tab-${activeItem.id}`
            }
        });

        const header = createElement("header", {
            className: "symbols-evolution-group-header"
        });

        const icon = createElement("div", {
            className: "symbols-evolution-group-icon",
            attributes: {
                "aria-hidden": "true"
            }
        });

        icon.appendChild(
            createEvolutionConceptImage(activeItem, {
                wrapperClassName: "symbols-evolution-group-image-wrap",
                imageClassName: "symbols-evolution-group-image",
                width: 52,
                height: 52
            })
        );

        const headerText = createElement("div");

        const title = createElement("h3", {
            text: activeItem.title
        });

        const description = createElement("p", {
            text: activeItem.description
        });

        appendChildren(headerText, [title, description]);
        appendChildren(header, [icon, headerText]);

        const path = createElement("div", {
            className: "symbols-evolution-path",
            attributes: {
                role: "list",
                "aria-label": `Símbolos ligados ao conceito ${activeItem.title}`
            }
        });

        path.appendChild(createFragment(activeItem.symbols, createEvolutionCard));
        appendChildren(group, [header, path]);
        panel.appendChild(group);

        setLiveRegionMode(symbolsSelectors.evolutionStatus, "polite");
        updateStatus(
            symbolsSelectors.evolutionStatus,
            `Exibindo ${activeItem.symbols.length} símbolos ligados ao conceito ${activeItem.title}.`
        );

        setAriaBusy(panel, false);
    }

    /* =====================================================
       20. INICIALIZAÇÃO / EVOLUÇÃO

       Renderiza abas e painel da seção Evolução.
    ===================================================== */

    function initSymbolsEvolution() {
        const panel = getElement(symbolsSelectors.evolutionPanel);

        if (!panel) return;

        renderEvolutionTabs();
        renderSymbolsEvolutionPanel();
    }

    /* =====================================================
       21. INICIALIZAÇÃO GERAL

       Garante que o JS rode apenas depois do HTML estar carregado.
    ===================================================== */

    document.addEventListener("DOMContentLoaded", () => {
        if (SYMBOLS_DEBUG) {
            validateSymbolsPageData();
        }

        initSymbolsCivilizations();
        initSymbolsEvolution();
    });
})();
