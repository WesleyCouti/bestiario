const GREEK_MYTHOLOGY = Object.freeze({
    slug: "greek",
    name: "Mitologia Grega",
    originalName: "Ἑλληνικὴ μυθολογία",

    hero: {
        kicker: "Tradições do mundo helênico",
        description:
            "Explore as histórias sagradas da Grécia Antiga, conheça seus deuses, heróis, criaturas, cultos e os lugares que atravessaram séculos de tradição.",
        image:
            "../assets/images/mythologies/greek/hero/greek-hero.png",
        imageAlt:
            "Composição artística com divindades, heróis e símbolos da mitologia grega"
    },

    overview: {
        summary:
            "A mitologia grega reúne narrativas sobre a origem do universo, as gerações divinas, os heróis e a relação entre os seres humanos e o sagrado.",
        facts: [
            { label: "Região", value: "Grécia e Mediterrâneo", icon: "❧" },
            { label: "Povo", value: "Povos helênicos", icon: "◫" },
            { label: "Tipo", value: "Tradição politeísta", icon: "🏛" },
            { label: "Idioma", value: "Grego antigo", icon: "Σ" },
            { label: "Período", value: "Idade do Bronze à Antiguidade tardia", icon: "⛑" },
            { label: "Fontes", value: "Homero, Hesíodo, hinos e tragédias", icon: "▤" }
        ]
    },

    history: {
        introduction:
            "A tradição grega foi formada por diferentes povos, períodos históricos e influências do mundo do Egeu e do Mediterrâneo.",
        periods: [
            {
                period: "aprox. 3000–1450 a.C.",
                title: "Civilização Minoica",
                icon: "⚚",
                image: "../assets/images/mythologies/greek/history/minoan.png",
                description:
                    "Cultura do mar Egeu marcada por palácios, símbolos religiosos e forte relação com o mar."
            },
            {
                period: "aprox. 1600–1100 a.C.",
                title: "Civilização Micênica",
                icon: "⛑",
                image: "../assets/images/mythologies/greek/history/mycenaean.png",
                description:
                    "Período associado a antigos cultos e às narrativas que mais tarde formariam os ciclos heroicos."
            },
            {
                period: "aprox. 800–500 a.C.",
                title: "Período Arcaico",
                icon: "♬",
                image: "../assets/images/mythologies/greek/history/archaic.png",
                description:
                    "Época de consolidação dos poemas homéricos, da Teogonia e de importantes cultos pan-helênicos."
            },
            {
                period: "aprox. 500–323 a.C.",
                title: "Período Clássico",
                icon: "🏛",
                image: "../assets/images/mythologies/greek/history/classical.png",
                description:
                    "Expansão dos templos, festivais, peças teatrais e interpretações filosóficas dos mitos."
            },
            {
                period: "323–31 a.C.",
                title: "Período Helenístico",
                icon: "✹",
                image: "../assets/images/mythologies/greek/history/hellenistic.png",
                description:
                    "Difusão da cultura grega e encontro com tradições do Egito, da Ásia e do Mediterrâneo."
            }
        ]
    },

    cosmology: {
        introduction:
            "O universo mítico grego era composto por regiões divinas, humanas e subterrâneas ligadas por narrativas de criação, conflito e destino.",
        realms: [
            {
                icon: "☁",
                image: "../assets/images/mythologies/greek/cosmology/mount-olympus.png",
                name: "Monte Olimpo",
                type: "Reino divino",
                description:
                    "Morada tradicional dos principais deuses olímpicos."
            },
            {
                icon: "◉",
                image: "../assets/images/mythologies/greek/cosmology/mortal-world.png",
                name: "Mundo dos Mortais",
                type: "Terra habitada",
                description:
                    "Espaço das cidades, reinos, heróis e acontecimentos humanos."
            },
            {
                icon: "≋",
                image: "../assets/images/mythologies/greek/cosmology/oceans.png",
                name: "Oceanos",
                type: "Domínio aquático",
                description:
                    "Regiões ligadas a Poseidon, Oceano, ninfas e criaturas marinhas."
            },
            {
                icon: "☾",
                image: "../assets/images/mythologies/greek/cosmology/underworld.png",
                name: "Submundo",
                type: "Reino dos mortos",
                description:
                    "Domínio de Hades e destino de muitas almas após a morte."
            },
            {
                icon: "▼",
                image: "../assets/images/mythologies/greek/cosmology/tartarus.png",
                name: "Tártaro",
                type: "Abismo primordial",
                description:
                    "Região profunda associada ao aprisionamento de seres poderosos."
            },
            {
                icon: "✦",
                image: "../assets/images/mythologies/greek/cosmology/elysian-fields.png",
                name: "Campos Elísios",
                type: "Destino privilegiado",
                description:
                    "Lugar reservado, em algumas tradições, a heróis e almas favorecidas."
            }
        ]
    },

    pantheonGroups: [
        {
            id: "primordials",
            label: "Primordiais"
        },
        {
            id: "titans",
            label: "Titãs"
        },
        {
            id: "olympians",
            label: "Olímpicos"
        },
        {
            id: "underworld",
            label: "Submundo"
        }
    ],

    deities: [
        {
            slug: "chaos",
            group: "primordials",
            symbol: "◌",
            name: "Caos",
            title: "Origem primordial",
            description:
                "Princípio inicial associado ao vazio e à abertura primordial."
        },
        {
            slug: "gaia",
            group: "primordials",
            symbol: "♁",
            name: "Gaia",
            title: "Terra primordial",
            description:
                "Personificação da Terra e ancestral de numerosas gerações divinas."
        },
        {
            slug: "uranus",
            group: "primordials",
            symbol: "☄",
            name: "Urano",
            title: "Céu primordial",
            description:
                "Personificação do céu e consorte de Gaia em antigas genealogias."
        },
        {
            slug: "cronus",
            group: "titans",
            symbol: "⌛",
            name: "Cronos",
            title: "Titã soberano",
            description:
                "Filho de Gaia e Urano, governou antes da ascensão de Zeus."
        },
        {
            slug: "rhea",
            group: "titans",
            symbol: "◈",
            name: "Reia",
            title: "Mãe dos olímpicos",
            description:
                "Titânide associada à geração que deu origem aos principais deuses olímpicos."
        },
        {
            slug: "zeus",
            group: "olympians",
            symbol: "ϟ",
            name: "Zeus",
            title: "Céu, raio e soberania",
            description:
                "Rei dos deuses e figura central na ordem olímpica."
        },
        {
            slug: "hera",
            group: "olympians",
            symbol: "♛",
            name: "Hera",
            title: "Casamento e realeza",
            description:
                "Rainha dos deuses, ligada ao casamento e à autoridade feminina."
        },
        {
            slug: "poseidon",
            group: "olympians",
            symbol: "Ψ",
            name: "Poseidon",
            title: "Mares e terremotos",
            description:
                "Deus dos mares, dos cavalos e das forças sísmicas."
        },
        {
            slug: "athena",
            group: "olympians",
            symbol: "⚔",
            name: "Atena",
            title: "Sabedoria e estratégia",
            description:
                "Deusa da sabedoria, da técnica e da guerra estratégica."
        },
        {
            slug: "apollo",
            group: "olympians",
            symbol: "☀",
            name: "Apolo",
            title: "Profecia, música e cura",
            description:
                "Divindade associada ao oráculo, à música, à poesia e à cura."
        },
        {
            slug: "artemis",
            group: "olympians",
            symbol: "☽",
            name: "Ártemis",
            title: "Caça e natureza selvagem",
            description:
                "Deusa da caça, dos animais e de espaços naturais."
        },
        {
            slug: "hades",
            group: "underworld",
            symbol: "♜",
            name: "Hades",
            title: "Senhor do mundo dos mortos",
            description:
                "Governante do submundo e guardião das riquezas subterrâneas."
        },
        {
            slug: "persephone",
            group: "underworld",
            symbol: "❀",
            name: "Perséfone",
            title: "Rainha do submundo",
            description:
                "Divindade ligada ao mundo dos mortos, à renovação e aos mistérios."
        }
    ],

    genealogy: [
        {
            generation: "Primeira geração",
            members: ["Caos", "Gaia", "Tártaro", "Eros", "Nix", "Érebo"]
        },
        {
            generation: "Segunda geração",
            members: ["Urano", "Ponto", "Titãs", "Ciclopes", "Hecatônquiros"]
        },
        {
            generation: "Terceira geração",
            members: ["Cronos", "Reia", "Oceano", "Tétis", "Hipérion", "Mnemósine"]
        },
        {
            generation: "Quarta geração",
            members: ["Zeus", "Hera", "Poseidon", "Hades", "Deméter", "Héstia"]
        }
    ],

    heroes: [
        {
            symbol: "♜",
            name: "Héracles",
            title: "Os doze trabalhos",
            description:
                "Herói conhecido por sua força, resistência e pelos trabalhos realizados como expiação."
        },
        {
            symbol: "⚔",
            name: "Perseu",
            title: "Vencedor de Medusa",
            description:
                "Herói que derrotou Medusa e participou do resgate de Andrômeda."
        },
        {
            symbol: "⌘",
            name: "Teseu",
            title: "Herói de Atenas",
            description:
                "Ligado ao Labirinto de Creta e à derrota do Minotauro."
        },
        {
            symbol: "⛵",
            name: "Odisseu",
            title: "Rei de Ítaca",
            description:
                "Conhecido pela inteligência e pela longa jornada narrada na Odisseia."
        },
        {
            symbol: "🛡",
            name: "Aquiles",
            title: "Guerreiro de Troia",
            description:
                "Um dos maiores guerreiros do ciclo troiano."
        },
        {
            symbol: "✧",
            name: "Atalanta",
            title: "Caçadora e heroína",
            description:
                "Heroína veloz ligada à caça ao javali da Calidônia."
        }
    ],

    creatures: [
        {
            symbol: "☠",
            name: "Medusa",
            title: "Górgona",
            description:
                "Figura monstruosa cujo olhar era capaz de transformar pessoas em pedra."
        },
        {
            symbol: "♉",
            name: "Minotauro",
            title: "Criatura do Labirinto",
            description:
                "Ser híbrido associado ao rei Minos, a Creta e ao herói Teseu."
        },
        {
            symbol: "🐍",
            name: "Hidra de Lerna",
            title: "Serpente de múltiplas cabeças",
            description:
                "Criatura enfrentada por Héracles em um de seus trabalhos."
        },
        {
            symbol: "♞",
            name: "Quimera",
            title: "Criatura híbrida",
            description:
                "Monstro formado por partes de diferentes animais e derrotado por Belerofonte."
        },
        {
            symbol: "●",
            name: "Ciclope",
            title: "Gigante de um olho",
            description:
                "Nome dado a diferentes grupos de gigantes presentes em tradições gregas."
        },
        {
            symbol: "♧",
            name: "Cérbero",
            title: "Guardião do submundo",
            description:
                "Cão monstruoso que guardava a entrada do reino de Hades."
        }
    ],

    places: [
        {
            icon: "△",
            name: "Monte Olimpo",
            type: "Lugar divino",
            description:
                "Montanha associada à morada das principais divindades olímpicas."
        },
        {
            icon: "◈",
            name: "Delfos",
            type: "Santuário histórico",
            description:
                "Centro religioso associado a Apolo e ao famoso oráculo."
        },
        {
            icon: "⌂",
            name: "Creta",
            type: "Lugar histórico e mítico",
            description:
                "Ilha ligada a Minos, ao Labirinto, ao Minotauro e a antigas tradições."
        },
        {
            icon: "⚑",
            name: "Troia",
            type: "Cidade do ciclo heroico",
            description:
                "Local central das narrativas da guerra de Troia."
        },
        {
            icon: "☾",
            name: "Rio Estige",
            type: "Lugar do submundo",
            description:
                "Rio associado a juramentos divinos e à passagem para o mundo dos mortos."
        },
        {
            icon: "▼",
            name: "Tártaro",
            type: "Lugar mítico",
            description:
                "Abismo profundo utilizado como prisão em diferentes tradições."
        }
    ],

    cults: [
        {
            icon: "🏛",
            name: "Culto de Zeus em Olímpia",
            type: "Culto pan-helênico",
            description:
                "Ligado ao santuário de Olímpia e aos jogos celebrados em honra a Zeus."
        },
        {
            icon: "🦉",
            name: "Culto de Atena em Atenas",
            type: "Culto cívico",
            description:
                "Atena era a protetora da cidade e recebia grandes festivais, como as Panateneias."
        },
        {
            icon: "☀",
            name: "Oráculo de Delfos",
            type: "Prática profética",
            description:
                "Consultas religiosas eram realizadas por meio da sacerdotisa ligada a Apolo."
        },
        {
            icon: "🌾",
            name: "Mistérios de Elêusis",
            type: "Culto iniciático",
            description:
                "Ritos associados a Deméter, Perséfone, renovação e destino após a morte."
        },
        {
            icon: "🍇",
            name: "Culto de Dionísio",
            type: "Festival e êxtase",
            description:
                "Ligado ao vinho, ao teatro, à música e a experiências religiosas coletivas."
        },
        {
            icon: "⚕",
            name: "Culto de Asclépio",
            type: "Cura religiosa",
            description:
                "Santuários dedicados à saúde, ao sonho e à busca de cura."
        }
    ],

    sources: [
        {
            title: "Teogonia",
            author: "Hesíodo",
            description:
                "Poema sobre a origem do cosmos e as gerações divinas."
        },
        {
            title: "Ilíada",
            author: "Homero",
            description:
                "Narrativa do ciclo troiano centrada na ira de Aquiles."
        },
        {
            title: "Odisseia",
            author: "Homero",
            description:
                "Relato da longa viagem de retorno de Odisseu a Ítaca."
        },
        {
            title: "Hinos Homéricos",
            author: "Autores diversos",
            description:
                "Conjunto de hinos dedicados a diferentes divindades."
        },
        {
            title: "Biblioteca",
            author: "Pseudo-Apolodoro",
            description:
                "Compilação de genealogias e narrativas mitológicas."
        },
        {
            title: "Tragédias",
            author: "Ésquilo, Sófocles e Eurípides",
            description:
                "Peças que reinterpretam heróis, deuses e conflitos familiares."
        }
    ]
});

export default GREEK_MYTHOLOGY;
