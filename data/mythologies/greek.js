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
            image: "../assets/images/mythologies/greek/pantheon/chaos.png",
            imageAlt: "Representação artística de Caos",
            name: "Caos",
            title: "Origem primordial",
            description:
                "Princípio inicial associado ao vazio e à abertura primordial."
        },
        {
            slug: "gaia",
            group: "primordials",
            symbol: "♁",
            image: "../assets/images/mythologies/greek/pantheon/gaia.png",
            imageAlt: "Representação artística de Gaia",
            name: "Gaia",
            title: "Terra primordial",
            description:
                "Personificação da Terra e ancestral de numerosas gerações divinas."
        },
        {
            slug: "uranus",
            group: "primordials",
            symbol: "☄",
            image: "../assets/images/mythologies/greek/pantheon/uranus.png",
            imageAlt: "Representação artística de Urano",
            name: "Urano",
            title: "Céu primordial",
            description:
                "Personificação do céu e consorte de Gaia em antigas genealogias."
        },
        {
            slug: "cronus",
            group: "titans",
            symbol: "⌛",
            image: "../assets/images/mythologies/greek/pantheon/cronus.png",
            imageAlt: "Representação artística de Cronos",
            name: "Cronos",
            title: "Titã soberano",
            description:
                "Filho de Gaia e Urano, governou antes da ascensão de Zeus."
        },
        {
            slug: "rhea",
            group: "titans",
            symbol: "◈",
            image: "../assets/images/mythologies/greek/pantheon/rhea.png",
            imageAlt: "Representação artística de Reia",
            name: "Reia",
            title: "Mãe dos olímpicos",
            description:
                "Titânide associada à geração que deu origem aos principais deuses olímpicos."
        },
        {
            slug: "zeus",
            group: "olympians",
            symbol: "ϟ",
            image: "../assets/images/mythologies/greek/pantheon/zeus.png",
            imageAlt: "Representação artística de Zeus",
            name: "Zeus",
            title: "Céu, raio e soberania",
            description:
                "Rei dos deuses e figura central na ordem olímpica."
        },
        {
            slug: "hera",
            group: "olympians",
            symbol: "♛",
            image: "../assets/images/mythologies/greek/pantheon/hera.png",
            imageAlt: "Representação artística de Hera",
            name: "Hera",
            title: "Casamento e realeza",
            description:
                "Rainha dos deuses, ligada ao casamento e à autoridade feminina."
        },
        {
            slug: "poseidon",
            group: "olympians",
            symbol: "Ψ",
            image: "../assets/images/mythologies/greek/pantheon/poseidon.png",
            imageAlt: "Representação artística de Poseidon",
            name: "Poseidon",
            title: "Mares e terremotos",
            description:
                "Deus dos mares, dos cavalos e das forças sísmicas."
        },
        {
            slug: "athena",
            group: "olympians",
            symbol: "⚔",
            image: "../assets/images/mythologies/greek/pantheon/athena.png",
            imageAlt: "Representação artística de Atena",
            name: "Atena",
            title: "Sabedoria e estratégia",
            description:
                "Deusa da sabedoria, da técnica e da guerra estratégica."
        },
        {
            slug: "apollo",
            group: "olympians",
            symbol: "☀",
            image: "../assets/images/mythologies/greek/pantheon/apollo.png",
            imageAlt: "Representação artística de Apolo",
            name: "Apolo",
            title: "Profecia, música e cura",
            description:
                "Divindade associada ao oráculo, à música, à poesia e à cura."
        },
        {
            slug: "artemis",
            group: "olympians",
            symbol: "☽",
            image: "../assets/images/mythologies/greek/pantheon/artemis.png",
            imageAlt: "Representação artística de Ártemis",
            name: "Ártemis",
            title: "Caça e natureza selvagem",
            description:
                "Deusa da caça, dos animais e de espaços naturais."
        },
        {
            slug: "hades",
            group: "underworld",
            symbol: "♜",
            image: "../assets/images/mythologies/greek/pantheon/hades.png",
            imageAlt: "Representação artística de Hades",
            name: "Hades",
            title: "Senhor do mundo dos mortos",
            description:
                "Governante do submundo e guardião das riquezas subterrâneas."
        },
        {
            slug: "persephone",
            group: "underworld",
            symbol: "❀",
            image: "../assets/images/mythologies/greek/pantheon/persephone.png",
            imageAlt: "Representação artística de Perséfone",
            name: "Perséfone",
            title: "Rainha do submundo",
            description:
                "Divindade ligada ao mundo dos mortos, à renovação e aos mistérios."
        }
    ],

    genealogy: {
        groups: [
            { id: "all", label: "Todos" },
            { id: "primordials", label: "Primordiais" },
            { id: "titans", label: "Titãs" },
            { id: "olympians", label: "Olímpicos" },
            { id: "underworld", label: "Submundo" },
            { id: "heroes", label: "Heróis e semideuses" }
        ],

        generations: [
            {
                id: "origins",
                numeral: "I",
                title: "Origens primordiais",
                subtitle: "Princípios que antecedem a ordem do cosmos"
            },
            {
                id: "first-descendants",
                numeral: "II",
                title: "Primeiros descendentes",
                subtitle: "Forças nascidas dos seres primordiais"
            },
            {
                id: "titans",
                numeral: "III",
                title: "Titãs e filhos de Gaia",
                subtitle: "A geração anterior aos deuses olímpicos"
            },
            {
                id: "titan-descendants",
                numeral: "IV",
                title: "Descendentes dos Titãs",
                subtitle: "Divindades solares, astrais e ancestrais"
            },
            {
                id: "elder-olympians",
                numeral: "V",
                title: "Filhos de Cronos e Reia",
                subtitle: "A geração que estabeleceu a ordem olímpica"
            },
            {
                id: "younger-olympians",
                numeral: "VI",
                title: "Nova geração divina",
                subtitle: "Filhos dos olímpicos e divindades associadas"
            },
            {
                id: "heroes",
                numeral: "VII",
                title: "Heróis e linhagens mortais",
                subtitle: "Descendentes humanos ligados aos deuses"
            }
        ],

        people: [
            { id: "chaos", name: "Caos", title: "Abertura primordial", symbol: "◌", image: "../assets/images/mythologies/greek/genealogy/characters/chaos.png", group: "primordials", generation: "origins", parents: [], partners: [], note: "Princípio primordial do qual emergem antigas potências cósmicas." },
            { id: "gaia", name: "Gaia", title: "Terra primordial", symbol: "♁", image: "../assets/images/mythologies/greek/genealogy/characters/gaia.png", group: "primordials", generation: "origins", parents: [], partners: ["uranus", "pontus", "tartarus"], note: "Personificação da Terra e grande ancestral das linhagens divinas." },
            { id: "tartarus", name: "Tártaro", title: "Abismo primordial", symbol: "▼", image: "../assets/images/mythologies/greek/genealogy/characters/tartarus.png", group: "primordials", generation: "origins", parents: [], partners: ["gaia"], note: "Região e potência primordial ligada às profundezas do cosmos." },
            { id: "eros", name: "Eros", title: "Força do desejo", symbol: "✧", image: "../assets/images/mythologies/greek/genealogy/characters/eros.png", group: "primordials", generation: "origins", parents: [], partners: [], note: "Força primordial de atração e geração." },
            { id: "nyx", name: "Nix", title: "Noite primordial", symbol: "☾", image: "../assets/images/mythologies/greek/genealogy/characters/nyx.png", group: "primordials", generation: "origins", parents: ["chaos"], partners: ["erebus"], note: "Personificação da noite e mãe de numerosas potências." },
            { id: "erebus", name: "Érebo", title: "Escuridão primordial", symbol: "●", image: "../assets/images/mythologies/greek/genealogy/characters/erebus.png", group: "primordials", generation: "origins", parents: ["chaos"], partners: ["nyx"], note: "Personificação das trevas profundas." },

            { id: "uranus", name: "Urano", title: "Céu primordial", symbol: "☄", image: "../assets/images/mythologies/greek/genealogy/characters/uranus.png", group: "primordials", generation: "first-descendants", parents: ["gaia"], partners: ["gaia"], note: "Personificação do céu e pai dos Titãs com Gaia." },
            { id: "pontus", name: "Ponto", title: "Mar primordial", symbol: "≋", image: "../assets/images/mythologies/greek/genealogy/characters/pontus.png", group: "primordials", generation: "first-descendants", parents: ["gaia"], partners: ["gaia"], note: "Antiga personificação do mar." },
            { id: "aether", name: "Éter", title: "Luz superior", symbol: "✦", image: "../assets/images/mythologies/greek/genealogy/characters/aether.png", group: "primordials", generation: "first-descendants", parents: ["nyx", "erebus"], partners: ["hemera"], note: "Personificação da luminosidade celeste." },
            { id: "hemera", name: "Hemera", title: "Dia", symbol: "☀", image: "../assets/images/mythologies/greek/genealogy/characters/hemera.png", group: "primordials", generation: "first-descendants", parents: ["nyx", "erebus"], partners: ["aether"], note: "Personificação do dia." },
            { id: "hypnos", name: "Hipnos", title: "Sono", symbol: "☽", image: "../assets/images/mythologies/greek/genealogy/characters/hypnos.png", group: "primordials", generation: "first-descendants", parents: ["nyx"], partners: [], note: "Personificação do sono." },
            { id: "thanatos", name: "Tânatos", title: "Morte serena", symbol: "†", image: "../assets/images/mythologies/greek/genealogy/characters/thanatos.png", group: "underworld", generation: "first-descendants", parents: ["nyx"], partners: [], note: "Personificação da morte não violenta." },
            { id: "nemesis", name: "Nêmesis", title: "Retribuição", symbol: "⚖", image: "../assets/images/mythologies/greek/genealogy/characters/nemesis.png", group: "primordials", generation: "first-descendants", parents: ["nyx"], partners: [], note: "Potência ligada à retribuição e ao equilíbrio." },
            { id: "eris", name: "Éris", title: "Discórdia", symbol: "✹", image: "../assets/images/mythologies/greek/genealogy/characters/eris.png", group: "primordials", generation: "first-descendants", parents: ["nyx"], partners: [], note: "Personificação da discórdia." },

            { id: "cronus", name: "Cronos", title: "Titã soberano", symbol: "⌛", image: "../assets/images/mythologies/greek/genealogy/characters/cronus.png", group: "titans", generation: "titans", parents: ["gaia", "uranus"], partners: ["rhea"], note: "Titã que governou antes da ascensão de Zeus." },
            { id: "rhea", name: "Reia", title: "Mãe dos olímpicos", symbol: "◈", image: "../assets/images/mythologies/greek/genealogy/characters/rhea.png", group: "titans", generation: "titans", parents: ["gaia", "uranus"], partners: ["cronus"], note: "Titânide e mãe da primeira geração olímpica." },
            { id: "oceanus", name: "Oceano", title: "Rio cósmico", symbol: "≋", image: "../assets/images/mythologies/greek/genealogy/characters/oceanus.png", group: "titans", generation: "titans", parents: ["gaia", "uranus"], partners: ["tethys"], note: "Titã associado ao grande rio que circunda o mundo." },
            { id: "tethys", name: "Tétis", title: "Águas nutridoras", symbol: "≈", image: "../assets/images/mythologies/greek/genealogy/characters/tethys.png", group: "titans", generation: "titans", parents: ["gaia", "uranus"], partners: ["oceanus"], note: "Titânide das águas e mãe de rios e oceânides." },
            { id: "hyperion", name: "Hipérion", title: "Luz celeste", symbol: "☼", image: "../assets/images/mythologies/greek/genealogy/characters/hyperion.png", group: "titans", generation: "titans", parents: ["gaia", "uranus"], partners: ["theia"], note: "Titã ligado à luz e aos astros." },
            { id: "theia", name: "Teia", title: "Brilho divino", symbol: "◇", image: "../assets/images/mythologies/greek/genealogy/characters/theia.png", group: "titans", generation: "titans", parents: ["gaia", "uranus"], partners: ["hyperion"], note: "Titânide associada ao brilho e à visão." },
            { id: "coeus", name: "Céos", title: "Eixo celeste", symbol: "✣", image: "../assets/images/mythologies/greek/genealogy/characters/coeus.png", group: "titans", generation: "titans", parents: ["gaia", "uranus"], partners: ["phoebe"], note: "Titã ligado à inteligência e ao eixo celeste." },
            { id: "phoebe", name: "Febe", title: "Claridade profética", symbol: "☽", image: "../assets/images/mythologies/greek/genealogy/characters/phoebe.png", group: "titans", generation: "titans", parents: ["gaia", "uranus"], partners: ["coeus"], note: "Titânide associada ao brilho e à profecia." },
            { id: "iapetus", name: "Jápeto", title: "Ancestral mortal", symbol: "⚒", image: "../assets/images/mythologies/greek/genealogy/characters/iapetus.png", group: "titans", generation: "titans", parents: ["gaia", "uranus"], partners: ["clymene"], note: "Titã ligado à linhagem de Atlas e Prometeu." },
            { id: "clymene", name: "Clímene", title: "Oceânide", symbol: "◉", image: "../assets/images/mythologies/greek/genealogy/characters/clymene.png", group: "titans", generation: "titans", parents: ["oceanus", "tethys"], partners: ["iapetus"], note: "Oceânide associada à linhagem dos filhos de Jápeto." },
            { id: "themis", name: "Têmis", title: "Lei divina", symbol: "⚖", image: "../assets/images/mythologies/greek/genealogy/characters/themis.png", group: "titans", generation: "titans", parents: ["gaia", "uranus"], partners: ["zeus"], note: "Titânide da ordem, da lei e dos costumes divinos." },
            { id: "mnemosyne", name: "Mnemósine", title: "Memória", symbol: "▤", image: "../assets/images/mythologies/greek/genealogy/characters/mnemosyne.png", group: "titans", generation: "titans", parents: ["gaia", "uranus"], partners: ["zeus"], note: "Titânide da memória e mãe das Musas." },
            { id: "crius", name: "Crio", title: "Constelações", symbol: "✶", image: "../assets/images/mythologies/greek/genealogy/characters/crius.png", group: "titans", generation: "titans", parents: ["gaia", "uranus"], partners: [], note: "Titã associado a ciclos celestes." },
            { id: "cyclopes", name: "Ciclopes", title: "Ferreiros divinos", symbol: "◉", image: "../assets/images/mythologies/greek/genealogy/characters/cyclopes.png", group: "primordials", generation: "titans", parents: ["gaia", "uranus"], partners: [], note: "Gigantes de um olho ligados à criação das armas divinas." },
            { id: "hecatoncheires", name: "Hecatônquiros", title: "Gigantes de cem braços", symbol: "✺", image: "../assets/images/mythologies/greek/genealogy/characters/hecatoncheires.png", group: "primordials", generation: "titans", parents: ["gaia", "uranus"], partners: [], note: "Gigantes aliados de Zeus na guerra contra os Titãs." },

            { id: "helios", name: "Hélio", title: "Sol", symbol: "☀", image: "../assets/images/mythologies/greek/genealogy/characters/helios.png", group: "titans", generation: "titan-descendants", parents: ["hyperion", "theia"], partners: [], note: "Divindade que conduz o carro solar." },
            { id: "selene", name: "Selene", title: "Lua", symbol: "☾", image: "../assets/images/mythologies/greek/genealogy/characters/selene.png", group: "titans", generation: "titan-descendants", parents: ["hyperion", "theia"], partners: [], note: "Personificação divina da Lua." },
            { id: "eos", name: "Eos", title: "Aurora", symbol: "☼", image: "../assets/images/mythologies/greek/genealogy/characters/eos.png", group: "titans", generation: "titan-descendants", parents: ["hyperion", "theia"], partners: [], note: "Deusa da aurora." },
            { id: "atlas", name: "Atlas", title: "Portador do céu", symbol: "◯", image: "../assets/images/mythologies/greek/genealogy/characters/atlas.png", group: "titans", generation: "titan-descendants", parents: ["iapetus", "clymene"], partners: [], note: "Titã condenado a sustentar o céu." },
            { id: "prometheus", name: "Prometeu", title: "Benfeitor da humanidade", symbol: "🔥", image: "../assets/images/mythologies/greek/genealogy/characters/prometheus.png", group: "titans", generation: "titan-descendants", parents: ["iapetus", "clymene"], partners: [], note: "Titã associado ao fogo e à humanidade." },
            { id: "epimetheus", name: "Epimeteu", title: "Pensamento tardio", symbol: "◇", image: "../assets/images/mythologies/greek/genealogy/characters/epimetheus.png", group: "titans", generation: "titan-descendants", parents: ["iapetus", "clymene"], partners: ["pandora"], note: "Titã ligado ao mito de Pandora." },
            { id: "pandora", name: "Pandora", title: "Primeira mulher", symbol: "□", image: "../assets/images/mythologies/greek/genealogy/characters/pandora.png", group: "heroes", generation: "titan-descendants", parents: [], partners: ["epimetheus"], note: "Figura mortal criada pelos deuses em uma antiga narrativa de origem." },
            { id: "leto", name: "Leto", title: "Mãe de Apolo e Ártemis", symbol: "☽", image: "../assets/images/mythologies/greek/genealogy/characters/leto.png", group: "titans", generation: "titan-descendants", parents: ["coeus", "phoebe"], partners: ["zeus"], note: "Titânide mãe dos gêmeos Apolo e Ártemis." },
            { id: "asteria", name: "Astéria", title: "Noite estrelada", symbol: "✦", image: "../assets/images/mythologies/greek/genealogy/characters/asteria.png", group: "titans", generation: "titan-descendants", parents: ["coeus", "phoebe"], partners: [], note: "Titânide ligada às estrelas e à adivinhação noturna." },
            { id: "metis", name: "Métis", title: "Sabedoria prudente", symbol: "✧", image: "../assets/images/mythologies/greek/genealogy/characters/metis.png", group: "titans", generation: "titan-descendants", parents: ["oceanus", "tethys"], partners: ["zeus"], note: "Oceânide ligada à prudência e mãe de Atena." },

            { id: "zeus", name: "Zeus", title: "Rei dos deuses", symbol: "ϟ", image: "../assets/images/mythologies/greek/genealogy/characters/zeus.png", group: "olympians", generation: "elder-olympians", parents: ["cronus", "rhea"], partners: ["hera", "metis", "leto", "demeter", "themis", "mnemosyne", "semele", "danae", "alcmene"], note: "Deus do céu, do raio e da soberania olímpica." },
            { id: "hera", name: "Hera", title: "Rainha dos deuses", symbol: "♛", image: "../assets/images/mythologies/greek/genealogy/characters/hera.png", group: "olympians", generation: "elder-olympians", parents: ["cronus", "rhea"], partners: ["zeus"], note: "Deusa do casamento, da realeza e da vida familiar." },
            { id: "poseidon", name: "Poseidon", title: "Senhor dos mares", symbol: "Ψ", image: "../assets/images/mythologies/greek/genealogy/characters/poseidon.png", group: "olympians", generation: "elder-olympians", parents: ["cronus", "rhea"], partners: ["amphitrite"], note: "Deus dos mares, dos cavalos e dos terremotos." },
            { id: "amphitrite", name: "Anfitrite", title: "Rainha do mar", symbol: "≋", image: "../assets/images/mythologies/greek/genealogy/characters/amphitrite.png", group: "olympians", generation: "elder-olympians", parents: ["oceanus", "tethys"], partners: ["poseidon"], note: "Divindade marinha e consorte de Poseidon." },
            { id: "hades", name: "Hades", title: "Senhor do submundo", symbol: "♜", image: "../assets/images/mythologies/greek/genealogy/characters/hades.png", group: "underworld", generation: "elder-olympians", parents: ["cronus", "rhea"], partners: ["persephone"], note: "Governante do mundo dos mortos." },
            { id: "demeter", name: "Deméter", title: "Agricultura e colheita", symbol: "🌾", image: "../assets/images/mythologies/greek/genealogy/characters/demeter.png", group: "olympians", generation: "elder-olympians", parents: ["cronus", "rhea"], partners: ["zeus"], note: "Deusa das colheitas e mãe de Perséfone." },
            { id: "hestia", name: "Héstia", title: "Fogo doméstico", symbol: "🔥", image: "../assets/images/mythologies/greek/genealogy/characters/hestia.png", group: "olympians", generation: "elder-olympians", parents: ["cronus", "rhea"], partners: [], note: "Deusa da lareira, do lar e da comunidade." },

            { id: "athena", name: "Atena", title: "Sabedoria e estratégia", symbol: "⚔", image: "../assets/images/mythologies/greek/genealogy/characters/athena.png", group: "olympians", generation: "younger-olympians", parents: ["zeus", "metis"], partners: [], note: "Deusa da sabedoria, da técnica e da guerra estratégica." },
            { id: "ares", name: "Ares", title: "Guerra impetuosa", symbol: "♂", image: "../assets/images/mythologies/greek/genealogy/characters/ares.png", group: "olympians", generation: "younger-olympians", parents: ["zeus", "hera"], partners: ["aphrodite"], note: "Deus da dimensão violenta da guerra." },
            { id: "hephaestus", name: "Hefesto", title: "Fogo e metalurgia", symbol: "⚒", image: "../assets/images/mythologies/greek/genealogy/characters/hephaestus.png", group: "olympians", generation: "younger-olympians", parents: ["hera"], partners: ["aphrodite"], note: "Deus do fogo, da forja e dos artesãos." },
            { id: "apollo", name: "Apolo", title: "Profecia, música e cura", symbol: "☀", image: "../assets/images/mythologies/greek/genealogy/characters/apollo.png", group: "olympians", generation: "younger-olympians", parents: ["zeus", "leto"], partners: [], note: "Deus ligado ao oráculo, à música, à poesia e à cura." },
            { id: "artemis", name: "Ártemis", title: "Caça e natureza", symbol: "☽", image: "../assets/images/mythologies/greek/genealogy/characters/artemis.png", group: "olympians", generation: "younger-olympians", parents: ["zeus", "leto"], partners: [], note: "Deusa da caça, dos animais e da natureza selvagem." },
            { id: "hermes", name: "Hermes", title: "Mensagens e caminhos", symbol: "☤", image: "../assets/images/mythologies/greek/genealogy/characters/hermes.png", group: "olympians", generation: "younger-olympians", parents: ["zeus", "maia"], partners: [], note: "Mensageiro divino, protetor de viajantes e comerciantes." },
            { id: "dionysus", name: "Dionísio", title: "Vinho e êxtase", symbol: "🍇", image: "../assets/images/mythologies/greek/genealogy/characters/dionysus.png", group: "olympians", generation: "younger-olympians", parents: ["zeus", "semele"], partners: ["ariadne"], note: "Deus do vinho, do teatro e do êxtase ritual." },
            { id: "persephone", name: "Perséfone", title: "Rainha do submundo", symbol: "❀", image: "../assets/images/mythologies/greek/genealogy/characters/persephone.png", group: "underworld", generation: "younger-olympians", parents: ["zeus", "demeter"], partners: ["hades"], note: "Deusa ligada ao submundo, à renovação e aos mistérios." },
            { id: "hebe", name: "Hebe", title: "Juventude", symbol: "✿", image: "../assets/images/mythologies/greek/genealogy/characters/hebe.png", group: "olympians", generation: "younger-olympians", parents: ["zeus", "hera"], partners: ["heracles"], note: "Deusa da juventude e esposa divina de Héracles." },
            { id: "eileithyia", name: "Ilítia", title: "Parto", symbol: "✤", image: "../assets/images/mythologies/greek/genealogy/characters/eileithyia.png", group: "olympians", generation: "younger-olympians", parents: ["zeus", "hera"], partners: [], note: "Deusa associada ao parto e ao nascimento." },
            { id: "aphrodite", name: "Afrodite", title: "Amor e beleza", symbol: "♀", image: "../assets/images/mythologies/greek/genealogy/characters/aphrodite.png", group: "olympians", generation: "younger-olympians", parents: ["uranus"], partners: ["hephaestus", "ares"], note: "Deusa do amor, da beleza e do desejo; sua genealogia varia entre tradições." },
            { id: "maia", name: "Maia", title: "Plêiade", symbol: "✦", image: "../assets/images/mythologies/greek/genealogy/characters/maia.png", group: "titans", generation: "younger-olympians", parents: ["atlas"], partners: ["zeus"], note: "Mãe de Hermes em tradição amplamente difundida." },
            { id: "semele", name: "Sêmele", title: "Princesa tebana", symbol: "◇", image: "../assets/images/mythologies/greek/genealogy/characters/semele.png", group: "heroes", generation: "younger-olympians", parents: [], partners: ["zeus"], note: "Mãe mortal de Dionísio." },
            { id: "ariadne", name: "Ariadne", title: "Princesa de Creta", symbol: "⌘", image: "../assets/images/mythologies/greek/genealogy/characters/ariadne.png", group: "heroes", generation: "younger-olympians", parents: ["minos"], partners: ["dionysus"], note: "Princesa ligada ao Labirinto e posteriormente a Dionísio." },

            { id: "danae", name: "Dânae", title: "Princesa de Argos", symbol: "◇", image: "../assets/images/mythologies/greek/genealogy/characters/danae.png", group: "heroes", generation: "heroes", parents: [], partners: ["zeus"], note: "Mãe de Perseu." },
            { id: "perseus", name: "Perseu", title: "Vencedor de Medusa", symbol: "⚔", image: "../assets/images/mythologies/greek/genealogy/characters/perseus.png", group: "heroes", generation: "heroes", parents: ["zeus", "danae"], partners: ["andromeda"], note: "Herói que derrotou Medusa e resgatou Andrômeda." },
            { id: "andromeda", name: "Andrômeda", title: "Rainha heroica", symbol: "✦", image: "../assets/images/mythologies/greek/genealogy/characters/andromeda.png", group: "heroes", generation: "heroes", parents: [], partners: ["perseus"], note: "Princesa resgatada por Perseu e ancestral de linhagens heroicas." },
            { id: "alcmene", name: "Alcmena", title: "Princesa mortal", symbol: "◇", image: "../assets/images/mythologies/greek/genealogy/characters/alcmene.png", group: "heroes", generation: "heroes", parents: [], partners: ["zeus"], note: "Mãe mortal de Héracles." },
            { id: "heracles", name: "Héracles", title: "Herói dos doze trabalhos", symbol: "♜", image: "../assets/images/mythologies/greek/genealogy/characters/heracles.png", group: "heroes", generation: "heroes", parents: ["zeus", "alcmene"], partners: ["hebe"], note: "Herói conhecido por sua força e pelos doze trabalhos." },
            { id: "minos", name: "Minos", title: "Rei de Creta", symbol: "♛", image: "../assets/images/mythologies/greek/genealogy/characters/minos.png", group: "heroes", generation: "heroes", parents: ["zeus", "europa"], partners: [], note: "Rei ligado a Creta, ao Labirinto e ao Minotauro." },
            { id: "europa", name: "Europa", title: "Princesa fenícia", symbol: "✧", image: "../assets/images/mythologies/greek/genealogy/characters/europa.png", group: "heroes", generation: "heroes", parents: [], partners: ["zeus"], note: "Mãe de Minos em importante ciclo mítico." },
            { id: "pollux", name: "Pólux", title: "Dióscuro imortal", symbol: "✦", image: "../assets/images/mythologies/greek/genealogy/characters/pollux.png", group: "heroes", generation: "heroes", parents: ["zeus", "leda"], partners: [], note: "Irmão de Castor e participante de ciclos heroicos." },
            { id: "helen", name: "Helena", title: "Rainha de Esparta", symbol: "♛", image: "../assets/images/mythologies/greek/genealogy/characters/helen.png", group: "heroes", generation: "heroes", parents: ["zeus", "leda"], partners: [], note: "Figura central no ciclo da Guerra de Troia." },
            { id: "leda", name: "Leda", title: "Rainha de Esparta", symbol: "◇", image: "../assets/images/mythologies/greek/genealogy/characters/leda.png", group: "heroes", generation: "heroes", parents: [], partners: ["zeus"], note: "Mãe de personagens ligados ao ciclo troiano." }
        ]
    },

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
