const GREEK_MYTHOLOGY = Object.freeze({
  slug: "greek",
  name: "Mitologia Grega",
  originalName: "Ἑλληνικὴ μυθολογία",

  presentation: {
    loadingSymbol: "Ω",
    ornamentSymbol: "🏛",
    navigationIcons: {
      overview: "🏛",
      history: "▤",
      cosmology: "◎",
      pantheon: "ϟ",
      genealogy: "♧",
      heroes: "⛑",
      creatures: "♞",
      places: "Π",
      cults: "♨",
      sources: "▥",
    },
    actions: {
      primary: { label: "Explorar o Panteão", icon: "⛑" },
      secondary: { label: "Conhecer a História", icon: "▤" },
    },
    sections: {
      overview: { kicker: "Introdução", title: "Visão geral" },
      history: {
        kicker: "Desenvolvimento histórico",
        title: "Origens e formação",
      },
      cosmology: { kicker: "O universo mítico", title: "Cosmologia" },
      pantheon: {
        kicker: "Divindades",
        title: "Panteão",
        description:
          "Conheça os principais grupos de divindades e seus domínios.",
      },
      genealogy: {
        kicker: "Do vazio primordial ao Olimpo",
        title: "Árvore genealógica",
        introduction:
          "Acompanhe as linhagens desde Caos e as forças primordiais até os Titãs, os deuses do Olimpo e os grandes heróis.",
        pantheonName: "Panteão Grego",
        guideDescription:
          "Dos seres primordiais aos heróis e descendentes mortais.",
      },
      heroes: {
        kicker: "Mortais extraordinários",
        title: "Heróis",
        description:
          "Guerreiros, reis e viajantes ligados aos grandes ciclos míticos.",
      },
      creatures: {
        kicker: "Seres lendários",
        title: "Monstros e criaturas",
        description:
          "Seres que desafiaram deuses e heróis nas histórias gregas.",
      },
      places: {
        kicker: "Geografia sagrada",
        title: "Locais mitológicos",
        description:
          "Lugares reais, sagrados e lendários ligados aos mitos gregos.",
      },
      cults: {
        kicker: "Religião e sociedade",
        title: "Cultos, rituais e festivais",
        description:
          "Como as divindades eram honradas na vida pública e privada.",
      },
      sources: {
        kicker: "Textos antigos",
        title: "Fontes e obras",
        description:
          "Obras antigas que preservaram parte das tradições mitológicas gregas.",
      },
    },
  },

  theme: {
    variables: {
      "detail-bg": "#020805",
      "detail-bg-soft": "#06150d",
      "detail-green": "#81c784",
      "detail-green-strong": "#4caf50",
      "detail-green-dark": "#2e7d32",
      "detail-gold": "#c9a24a",
      "detail-gold-light": "#f2d58a",
    },
    assets: {
      "overview-left":
        "../assets/images/mythologies/greek/overview/temple-left.png",
      "overview-right":
        "../assets/images/mythologies/greek/overview/athena-right.png",
      "history-left":
        "../assets/images/mythologies/greek/history/temple-left.png",
      "history-right":
        "../assets/images/mythologies/greek/history/temple-right.png",
      "cosmology-left":
        "../assets/images/mythologies/greek/cosmology/temple-left.png",
      "cosmology-right":
        "../assets/images/mythologies/greek/cosmology/temple-right.png",
      "genealogy-left":
        "../assets/images/mythologies/greek/genealogy/temple-left.png",
      "genealogy-right":
        "../assets/images/mythologies/greek/genealogy/temple-right.png",
    },
  },

  hero: {
    kicker: "Tradições do mundo helênico",
    description:
      "Explore as histórias sagradas da Grécia Antiga, conheça seus deuses, heróis, criaturas, cultos e os lugares que atravessaram séculos de tradição.",
    image: "../assets/images/mythologies/greek/hero/greek-hero.png",
    imageAlt:
      "Composição artística com divindades, heróis e símbolos da mitologia grega",
  },

  overview: {
    summary:
      "A mitologia grega reúne narrativas sobre a origem do universo, as gerações divinas, os heróis e a relação entre os seres humanos e o sagrado.",
    facts: [
      {
        label: "Região",
        value: "Grécia e Mediterrâneo",
        icon: "❧",
        image: "../assets/images/mythologies/greek/overview/map-greece.png",
      },
      {
        label: "Povo",
        value: "Povos helênicos",
        icon: "◫",
        image: "../assets/images/mythologies/greek/overview/greek-vase.png",
      },
      {
        label: "Tipo",
        value: "Tradição politeísta",
        icon: "🏛",
        image: "../assets/images/mythologies/greek/overview/greek-temple.png",
      },
      {
        label: "Idioma",
        value: "Grego antigo",
        icon: "Σ",
        image: "../assets/images/mythologies/greek/overview/greek-writing.png",
      },
      {
        label: "Período",
        value: "Idade do Bronze à Antiguidade tardia",
        icon: "⛑",
        image: "../assets/images/mythologies/greek/overview/greek-warrior.png",
      },
      {
        label: "Fontes",
        value: "Homero, Hesíodo, hinos e tragédias",
        icon: "▤",
        image:
          "../assets/images/mythologies/greek/overview/ancient-scrolls.png",
      },
    ],
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
          "Cultura do mar Egeu marcada por palácios, símbolos religiosos e forte relação com o mar.",
      },
      {
        period: "aprox. 1600–1100 a.C.",
        title: "Civilização Micênica",
        icon: "⛑",
        image: "../assets/images/mythologies/greek/history/mycenaean.png",
        description:
          "Período associado a antigos cultos e às narrativas que mais tarde formariam os ciclos heroicos.",
      },
      {
        period: "aprox. 800–500 a.C.",
        title: "Período Arcaico",
        icon: "♬",
        image: "../assets/images/mythologies/greek/history/archaic.png",
        description:
          "Época de consolidação dos poemas homéricos, da Teogonia e de importantes cultos pan-helênicos.",
      },
      {
        period: "aprox. 500–323 a.C.",
        title: "Período Clássico",
        icon: "🏛",
        image: "../assets/images/mythologies/greek/history/classical.png",
        description:
          "Expansão dos templos, festivais, peças teatrais e interpretações filosóficas dos mitos.",
      },
      {
        period: "323–31 a.C.",
        title: "Período Helenístico",
        icon: "✹",
        image: "../assets/images/mythologies/greek/history/hellenistic.png",
        description:
          "Difusão da cultura grega e encontro com tradições do Egito, da Ásia e do Mediterrâneo.",
      },
    ],
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
        description: "Morada tradicional dos principais deuses olímpicos.",
      },
      {
        icon: "◉",
        image: "../assets/images/mythologies/greek/cosmology/mortal-world.png",
        name: "Mundo dos Mortais",
        type: "Terra habitada",
        description:
          "Espaço das cidades, reinos, heróis e acontecimentos humanos.",
      },
      {
        icon: "≋",
        image: "../assets/images/mythologies/greek/cosmology/oceans.png",
        name: "Oceanos",
        type: "Domínio aquático",
        description:
          "Regiões ligadas a Poseidon, Oceano, ninfas e criaturas marinhas.",
      },
      {
        icon: "☾",
        image: "../assets/images/mythologies/greek/cosmology/underworld.png",
        name: "Submundo",
        type: "Reino dos mortos",
        description: "Domínio de Hades e destino de muitas almas após a morte.",
      },
      {
        icon: "▼",
        image: "../assets/images/mythologies/greek/cosmology/tartarus.png",
        name: "Tártaro",
        type: "Abismo primordial",
        description:
          "Região profunda associada ao aprisionamento de seres poderosos.",
      },
      {
        icon: "✦",
        image:
          "../assets/images/mythologies/greek/cosmology/elysian-fields.png",
        name: "Campos Elísios",
        type: "Destino privilegiado",
        description:
          "Lugar reservado, em algumas tradições, a heróis e almas favorecidas.",
      },
    ],
  },

  pantheonGroups: [
    { id: "primordials", label: "Primordiais" },
    { id: "titans", label: "Titãs" },
    { id: "olympians", label: "Olímpicos" },
    {
      id: "underworld",
      label: "Submundo",
    },
  ],

  deities: [
    // Primordiais
    {
      slug: "chaos",
      group: "primordials",
      symbol: "◌",
      image: "../assets/images/mythologies/greek/pantheon/chaos.png",
      imageAlt: "Caos",
      name: "Caos",
      title: "Origem primordial",
      description: "Princípio primordial do universo.",
    },
    {
      slug: "gaia",
      group: "primordials",
      symbol: "♁",
      image: "../assets/images/mythologies/greek/pantheon/gaia.png",
      imageAlt: "Gaia",
      name: "Gaia",
      title: "Terra primordial",
      description: "Personificação da Terra.",
    },
    {
      slug: "uranus",
      group: "primordials",
      symbol: "☄",
      image: "../assets/images/mythologies/greek/pantheon/uranus.png",
      imageAlt: "Urano",
      name: "Urano",
      title: "Céu primordial",
      description: "Personificação do céu.",
    },
    {
      slug: "tartarus",
      group: "primordials",
      symbol: "⬣",
      image: "../assets/images/mythologies/greek/pantheon/tartarus.png",
      imageAlt: "Tártaro",
      name: "Tártaro",
      title: "Abismo primordial",
      description: "Abismo mais profundo do cosmos.",
    },
    {
      slug: "nyx",
      group: "primordials",
      symbol: "🌑",
      image: "../assets/images/mythologies/greek/pantheon/nyx.png",
      imageAlt: "Nix",
      name: "Nix",
      title: "Noite",
      description: "Deusa primordial da noite.",
    },
    {
      slug: "erebus",
      group: "primordials",
      symbol: "⬤",
      image: "../assets/images/mythologies/greek/pantheon/erebus.png",
      imageAlt: "Érebo",
      name: "Érebo",
      title: "Escuridão",
      description: "Personificação da escuridão.",
    },
    {
      slug: "aether",
      group: "primordials",
      symbol: "✦",
      image: "../assets/images/mythologies/greek/pantheon/aether.png",
      imageAlt: "Éter",
      name: "Éter",
      title: "Luz celestial",
      description: "Personificação da luz superior.",
    },
    {
      slug: "hemera",
      group: "primordials",
      symbol: "☀",
      image: "../assets/images/mythologies/greek/pantheon/hemera.png",
      imageAlt: "Hemera",
      name: "Hemera",
      title: "Dia",
      description: "Personificação do dia.",
    },
    {
      slug: "eros",
      group: "primordials",
      symbol: "❤",
      image: "../assets/images/mythologies/greek/pantheon/eros.png",
      imageAlt: "Eros",
      name: "Eros",
      title: "Amor primordial",
      description: "Força primordial da criação.",
    },

    // Titãs
    {
      slug: "oceanus",
      group: "titans",
      symbol: "≈",
      image: "../assets/images/mythologies/greek/pantheon/oceanus.png",
      imageAlt: "Oceano",
      name: "Oceano",
      title: "Oceanos",
      description: "Titã dos oceanos.",
    },
    {
      slug: "tethys",
      group: "titans",
      symbol: "≈",
      image: "../assets/images/mythologies/greek/pantheon/tethys.png",
      imageAlt: "Tétis",
      name: "Tétis",
      title: "Águas",
      description: "Titânide das águas.",
    },
    {
      slug: "hyperion",
      group: "titans",
      symbol: "☼",
      image: "../assets/images/mythologies/greek/pantheon/hyperion.png",
      imageAlt: "Hipérion",
      name: "Hipérion",
      title: "Luz",
      description: "Titã da luz.",
    },
    {
      slug: "theia",
      group: "titans",
      symbol: "✧",
      image: "../assets/images/mythologies/greek/pantheon/theia.png",
      imageAlt: "Teia",
      name: "Teia",
      title: "Brilho",
      description: "Titânide do brilho.",
    },
    {
      slug: "coeus",
      group: "titans",
      symbol: "✶",
      image: "../assets/images/mythologies/greek/pantheon/coeus.png",
      imageAlt: "Ceo",
      name: "Ceo",
      title: "Intelecto",
      description: "Titã da inteligência.",
    },
    {
      slug: "phoebe",
      group: "titans",
      symbol: "☾",
      image: "../assets/images/mythologies/greek/pantheon/phoebe.png",
      imageAlt: "Febe",
      name: "Febe",
      title: "Profecia",
      description: "Titânide profética.",
    },
    {
      slug: "crius",
      group: "titans",
      symbol: "✦",
      image: "../assets/images/mythologies/greek/pantheon/crius.png",
      imageAlt: "Crio",
      name: "Crio",
      title: "Constelações",
      description: "Titã celeste.",
    },
    {
      slug: "iapetus",
      group: "titans",
      symbol: "⚒",
      image: "../assets/images/mythologies/greek/pantheon/iapetus.png",
      imageAlt: "Jápeto",
      name: "Jápeto",
      title: "Humanidade",
      description: "Pai de Prometeu e Atlas.",
    },
    {
      slug: "themis",
      group: "titans",
      symbol: "⚖",
      image: "../assets/images/mythologies/greek/pantheon/themis.png",
      imageAlt: "Têmis",
      name: "Têmis",
      title: "Justiça",
      description: "Titânide da ordem.",
    },
    {
      slug: "mnemosyne",
      group: "titans",
      symbol: "📜",
      image: "../assets/images/mythologies/greek/pantheon/mnemosyne.png",
      imageAlt: "Mnemósine",
      name: "Mnemósine",
      title: "Memória",
      description: "Mãe das Musas.",
    },
    {
      slug: "cronus",
      group: "titans",
      symbol: "⌛",
      image: "../assets/images/mythologies/greek/pantheon/cronus.png",
      imageAlt: "Cronos",
      name: "Cronos",
      title: "Titã soberano",
      description: "Governou antes de Zeus.",
    },
    {
      slug: "rhea",
      group: "titans",
      symbol: "◈",
      image: "../assets/images/mythologies/greek/pantheon/rhea.png",
      imageAlt: "Reia",
      name: "Reia",
      title: "Mãe dos Olímpicos",
      description: "Mãe da geração olímpica.",
    },

    // Olímpicos
    {
      slug: "zeus",
      group: "olympians",
      symbol: "ϟ",
      image: "../assets/images/mythologies/greek/pantheon/zeus.png",
      imageAlt: "Zeus",
      name: "Zeus",
      title: "Rei dos deuses",
      description: "Senhor do céu.",
    },
    {
      slug: "hera",
      group: "olympians",
      symbol: "♛",
      image: "../assets/images/mythologies/greek/pantheon/hera.png",
      imageAlt: "Hera",
      name: "Hera",
      title: "Casamento",
      description: "Rainha dos deuses.",
    },
    {
      slug: "poseidon",
      group: "olympians",
      symbol: "Ψ",
      image: "../assets/images/mythologies/greek/pantheon/poseidon.png",
      imageAlt: "Poseidon",
      name: "Poseidon",
      title: "Mares",
      description: "Deus dos mares.",
    },
    {
      slug: "demeter",
      group: "olympians",
      symbol: "🌾",
      image: "../assets/images/mythologies/greek/pantheon/demeter.png",
      imageAlt: "Deméter",
      name: "Deméter",
      title: "Colheitas",
      description: "Deusa da agricultura.",
    },
    {
      slug: "hestia",
      group: "olympians",
      symbol: "🔥",
      image: "../assets/images/mythologies/greek/pantheon/hestia.png",
      imageAlt: "Héstia",
      name: "Héstia",
      title: "Lareira",
      description: "Deusa do lar.",
    },
    {
      slug: "athena",
      group: "olympians",
      symbol: "⚔",
      image: "../assets/images/mythologies/greek/pantheon/athena.png",
      imageAlt: "Atena",
      name: "Atena",
      title: "Sabedoria",
      description: "Deusa da estratégia.",
    },
    {
      slug: "ares",
      group: "olympians",
      symbol: "🛡",
      image: "../assets/images/mythologies/greek/pantheon/ares.png",
      imageAlt: "Ares",
      name: "Ares",
      title: "Guerra",
      description: "Deus da guerra.",
    },
    {
      slug: "apollo",
      group: "olympians",
      symbol: "☀",
      image: "../assets/images/mythologies/greek/pantheon/apollo.png",
      imageAlt: "Apolo",
      name: "Apolo",
      title: "Luz",
      description: "Deus da música e profecia.",
    },
    {
      slug: "artemis",
      group: "olympians",
      symbol: "☽",
      image: "../assets/images/mythologies/greek/pantheon/artemis.png",
      imageAlt: "Ártemis",
      name: "Ártemis",
      title: "Caça",
      description: "Deusa da caça.",
    },
    {
      slug: "hermes",
      group: "olympians",
      symbol: "☤",
      image: "../assets/images/mythologies/greek/pantheon/hermes.png",
      imageAlt: "Hermes",
      name: "Hermes",
      title: "Mensageiro",
      description: "Mensageiro dos deuses.",
    },
    {
      slug: "hephaestus",
      group: "olympians",
      symbol: "⚒",
      image: "../assets/images/mythologies/greek/pantheon/hephaestus.png",
      imageAlt: "Hefesto",
      name: "Hefesto",
      title: "Forja",
      description: "Deus da metalurgia.",
    },
    {
      slug: "aphrodite",
      group: "olympians",
      symbol: "❀",
      image: "../assets/images/mythologies/greek/pantheon/aphrodite.png",
      imageAlt: "Afrodite",
      name: "Afrodite",
      title: "Amor",
      description: "Deusa do amor.",
    },
    {
      slug: "dionysus",
      group: "olympians",
      symbol: "🍇",
      image: "../assets/images/mythologies/greek/pantheon/dionysus.png",
      imageAlt: "Dionísio",
      name: "Dionísio",
      title: "Vinho",
      description: "Deus do vinho.",
    },

    // Submundo
    {
      slug: "hades",
      group: "underworld",
      symbol: "♜",
      image: "../assets/images/mythologies/greek/pantheon/hades.png",
      imageAlt: "Hades",
      name: "Hades",
      title: "Submundo",
      description: "Rei do mundo dos mortos.",
    },
    {
      slug: "persephone",
      group: "underworld",
      symbol: "❀",
      image: "../assets/images/mythologies/greek/pantheon/persephone.png",
      imageAlt: "Perséfone",
      name: "Perséfone",
      title: "Rainha do submundo",
      description: "Rainha do reino dos mortos.",
    },
    {
      slug: "hecate",
      group: "underworld",
      symbol: "☾",
      image: "../assets/images/mythologies/greek/pantheon/hecate.png",
      imageAlt: "Hécate",
      name: "Hécate",
      title: "Magia",
      description: "Deusa da magia.",
    },
    {
      slug: "thanatos",
      group: "underworld",
      symbol: "☠",
      image: "../assets/images/mythologies/greek/pantheon/thanatos.png",
      imageAlt: "Tânatos",
      name: "Tânatos",
      title: "Morte",
      description: "Personificação da morte.",
    },
    {
      slug: "hypnos",
      group: "underworld",
      symbol: "☾",
      image: "../assets/images/mythologies/greek/pantheon/hypnos.png",
      imageAlt: "Hipnos",
      name: "Hipnos",
      title: "Sono",
      description: "Personificação do sono.",
    },
    {
      slug: "charon",
      group: "underworld",
      symbol: "⛵",
      image: "../assets/images/mythologies/greek/pantheon/charon.png",
      imageAlt: "Caronte",
      name: "Caronte",
      title: "Barqueiro",
      description: "Transporta as almas.",
    },
    {
      slug: "cerberus",
      group: "underworld",
      symbol: "🐺",
      image: "../assets/images/mythologies/greek/pantheon/cerberus.png",
      imageAlt: "Cérbero",
      name: "Cérbero",
      title: "Guardião",
      description: "Guarda os portões do submundo.",
    },
  ],

  genealogy: {
    groups: [
      { id: "all", label: "Todos" },
      { id: "primordials", label: "Primordiais" },
      { id: "titans", label: "Titãs" },
      { id: "olympians", label: "Olímpicos" },
      { id: "underworld", label: "Submundo" },
      { id: "heroes", label: "Heróis e semideuses" },
    ],

    generations: [
      {
        id: "origins",
        numeral: "I",
        title: "Origens primordiais",
        subtitle: "Princípios que antecedem a ordem do cosmos",
      },
      {
        id: "first-descendants",
        numeral: "II",
        title: "Primeiros descendentes",
        subtitle: "Forças nascidas dos seres primordiais",
      },
      {
        id: "titans",
        numeral: "III",
        title: "Titãs e filhos de Gaia",
        subtitle: "A geração anterior aos deuses olímpicos",
      },
      {
        id: "titan-descendants",
        numeral: "IV",
        title: "Descendentes dos Titãs",
        subtitle: "Divindades solares, astrais e ancestrais",
      },
      {
        id: "elder-olympians",
        numeral: "V",
        title: "Filhos de Cronos e Reia",
        subtitle: "A geração que estabeleceu a ordem olímpica",
      },
      {
        id: "younger-olympians",
        numeral: "VI",
        title: "Nova geração divina",
        subtitle: "Filhos dos olímpicos e divindades associadas",
      },
      {
        id: "heroes",
        numeral: "VII",
        title: "Heróis e linhagens mortais",
        subtitle: "Descendentes humanos ligados aos deuses",
      },
    ],

    people: [
      {
        id: "chaos",
        name: "Caos",
        title: "Abertura primordial",
        symbol: "◌",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/chaos.png",
        group: "primordials",
        generation: "origins",
        parents: [],
        partners: [],
        note: "Princípio primordial do qual emergem antigas potências cósmicas.",
      },
      {
        id: "gaia",
        name: "Gaia",
        title: "Terra primordial",
        symbol: "♁",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/gaia.png",
        group: "primordials",
        generation: "origins",
        parents: [],
        partners: ["uranus", "pontus", "tartarus"],
        note: "Personificação da Terra e grande ancestral das linhagens divinas.",
      },
      {
        id: "tartarus",
        name: "Tártaro",
        title: "Abismo primordial",
        symbol: "▼",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/tartarus.png",
        group: "primordials",
        generation: "origins",
        parents: [],
        partners: ["gaia"],
        note: "Região e potência primordial ligada às profundezas do cosmos.",
      },
      {
        id: "eros",
        name: "Eros",
        title: "Força do desejo",
        symbol: "✧",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/eros.png",
        group: "primordials",
        generation: "origins",
        parents: [],
        partners: [],
        note: "Força primordial de atração e geração.",
      },
      {
        id: "nyx",
        name: "Nix",
        title: "Noite primordial",
        symbol: "☾",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/nyx.png",
        group: "primordials",
        generation: "origins",
        parents: ["chaos"],
        partners: ["erebus"],
        note: "Personificação da noite e mãe de numerosas potências.",
      },
      {
        id: "erebus",
        name: "Érebo",
        title: "Escuridão primordial",
        symbol: "●",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/erebus.png",
        group: "primordials",
        generation: "origins",
        parents: ["chaos"],
        partners: ["nyx"],
        note: "Personificação das trevas profundas.",
      },

      {
        id: "uranus",
        name: "Urano",
        title: "Céu primordial",
        symbol: "☄",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/uranus.png",
        group: "primordials",
        generation: "first-descendants",
        parents: ["gaia"],
        partners: ["gaia"],
        note: "Personificação do céu e pai dos Titãs com Gaia.",
      },
      {
        id: "pontus",
        name: "Ponto",
        title: "Mar primordial",
        symbol: "≋",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/pontus.png",
        group: "primordials",
        generation: "first-descendants",
        parents: ["gaia"],
        partners: ["gaia"],
        note: "Antiga personificação do mar.",
      },
      {
        id: "aether",
        name: "Éter",
        title: "Luz superior",
        symbol: "✦",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/aether.png",
        group: "primordials",
        generation: "first-descendants",
        parents: ["nyx", "erebus"],
        partners: ["hemera"],
        note: "Personificação da luminosidade celeste.",
      },
      {
        id: "hemera",
        name: "Hemera",
        title: "Dia",
        symbol: "☀",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/hemera.png",
        group: "primordials",
        generation: "first-descendants",
        parents: ["nyx", "erebus"],
        partners: ["aether"],
        note: "Personificação do dia.",
      },
      {
        id: "hypnos",
        name: "Hipnos",
        title: "Sono",
        symbol: "☽",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/hypnos.png",
        group: "primordials",
        generation: "first-descendants",
        parents: ["nyx"],
        partners: [],
        note: "Personificação do sono.",
      },
      {
        id: "thanatos",
        name: "Tânatos",
        title: "Morte serena",
        symbol: "†",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/thanatos.png",
        group: "underworld",
        generation: "first-descendants",
        parents: ["nyx"],
        partners: [],
        note: "Personificação da morte não violenta.",
      },
      {
        id: "nemesis",
        name: "Nêmesis",
        title: "Retribuição",
        symbol: "⚖",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/nemesis.png",
        group: "primordials",
        generation: "first-descendants",
        parents: ["nyx"],
        partners: [],
        note: "Potência ligada à retribuição e ao equilíbrio.",
      },
      {
        id: "eris",
        name: "Éris",
        title: "Discórdia",
        symbol: "✹",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/eris.png",
        group: "primordials",
        generation: "first-descendants",
        parents: ["nyx"],
        partners: [],
        note: "Personificação da discórdia.",
      },

      {
        id: "cronus",
        name: "Cronos",
        title: "Titã soberano",
        symbol: "⌛",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/cronus.png",
        group: "titans",
        generation: "titans",
        parents: ["gaia", "uranus"],
        partners: ["rhea"],
        note: "Titã que governou antes da ascensão de Zeus.",
      },
      {
        id: "rhea",
        name: "Reia",
        title: "Mãe dos olímpicos",
        symbol: "◈",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/rhea.png",
        group: "titans",
        generation: "titans",
        parents: ["gaia", "uranus"],
        partners: ["cronus"],
        note: "Titânide e mãe da primeira geração olímpica.",
      },
      {
        id: "oceanus",
        name: "Oceano",
        title: "Rio cósmico",
        symbol: "≋",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/oceanus.png",
        group: "titans",
        generation: "titans",
        parents: ["gaia", "uranus"],
        partners: ["tethys"],
        note: "Titã associado ao grande rio que circunda o mundo.",
      },
      {
        id: "tethys",
        name: "Tétis",
        title: "Águas nutridoras",
        symbol: "≈",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/tethys.png",
        group: "titans",
        generation: "titans",
        parents: ["gaia", "uranus"],
        partners: ["oceanus"],
        note: "Titânide das águas e mãe de rios e oceânides.",
      },
      {
        id: "hyperion",
        name: "Hipérion",
        title: "Luz celeste",
        symbol: "☼",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/hyperion.png",
        group: "titans",
        generation: "titans",
        parents: ["gaia", "uranus"],
        partners: ["theia"],
        note: "Titã ligado à luz e aos astros.",
      },
      {
        id: "theia",
        name: "Teia",
        title: "Brilho divino",
        symbol: "◇",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/theia.png",
        group: "titans",
        generation: "titans",
        parents: ["gaia", "uranus"],
        partners: ["hyperion"],
        note: "Titânide associada ao brilho e à visão.",
      },
      {
        id: "coeus",
        name: "Céos",
        title: "Eixo celeste",
        symbol: "✣",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/coeus.png",
        group: "titans",
        generation: "titans",
        parents: ["gaia", "uranus"],
        partners: ["phoebe"],
        note: "Titã ligado à inteligência e ao eixo celeste.",
      },
      {
        id: "phoebe",
        name: "Febe",
        title: "Claridade profética",
        symbol: "☽",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/phoebe.png",
        group: "titans",
        generation: "titans",
        parents: ["gaia", "uranus"],
        partners: ["coeus"],
        note: "Titânide associada ao brilho e à profecia.",
      },
      {
        id: "iapetus",
        name: "Jápeto",
        title: "Ancestral mortal",
        symbol: "⚒",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/iapetus.png",
        group: "titans",
        generation: "titans",
        parents: ["gaia", "uranus"],
        partners: ["clymene"],
        note: "Titã ligado à linhagem de Atlas e Prometeu.",
      },
      {
        id: "clymene",
        name: "Clímene",
        title: "Oceânide",
        symbol: "◉",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/clymene.png",
        group: "titans",
        generation: "titans",
        parents: ["oceanus", "tethys"],
        partners: ["iapetus"],
        note: "Oceânide associada à linhagem dos filhos de Jápeto.",
      },
      {
        id: "themis",
        name: "Têmis",
        title: "Lei divina",
        symbol: "⚖",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/themis.png",
        group: "titans",
        generation: "titans",
        parents: ["gaia", "uranus"],
        partners: ["zeus"],
        note: "Titânide da ordem, da lei e dos costumes divinos.",
      },
      {
        id: "mnemosyne",
        name: "Mnemósine",
        title: "Memória",
        symbol: "▤",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/mnemosyne.png",
        group: "titans",
        generation: "titans",
        parents: ["gaia", "uranus"],
        partners: ["zeus"],
        note: "Titânide da memória e mãe das Musas.",
      },
      {
        id: "crius",
        name: "Crio",
        title: "Constelações",
        symbol: "✶",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/crius.png",
        group: "titans",
        generation: "titans",
        parents: ["gaia", "uranus"],
        partners: [],
        note: "Titã associado a ciclos celestes.",
      },
      {
        id: "cyclopes",
        name: "Ciclopes",
        title: "Ferreiros divinos",
        symbol: "◉",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/cyclopes.png",
        group: "primordials",
        generation: "titans",
        parents: ["gaia", "uranus"],
        partners: [],
        note: "Gigantes de um olho ligados à criação das armas divinas.",
      },
      {
        id: "hecatoncheires",
        name: "Hecatônquiros",
        title: "Gigantes de cem braços",
        symbol: "✺",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/hecatoncheires.png",
        group: "primordials",
        generation: "titans",
        parents: ["gaia", "uranus"],
        partners: [],
        note: "Gigantes aliados de Zeus na guerra contra os Titãs.",
      },

      {
        id: "helios",
        name: "Hélio",
        title: "Sol",
        symbol: "☀",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/helios.png",
        group: "titans",
        generation: "titan-descendants",
        parents: ["hyperion", "theia"],
        partners: [],
        note: "Divindade que conduz o carro solar.",
      },
      {
        id: "selene",
        name: "Selene",
        title: "Lua",
        symbol: "☾",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/selene.png",
        group: "titans",
        generation: "titan-descendants",
        parents: ["hyperion", "theia"],
        partners: [],
        note: "Personificação divina da Lua.",
      },
      {
        id: "eos",
        name: "Eos",
        title: "Aurora",
        symbol: "☼",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/eos.png",
        group: "titans",
        generation: "titan-descendants",
        parents: ["hyperion", "theia"],
        partners: [],
        note: "Deusa da aurora.",
      },
      {
        id: "atlas",
        name: "Atlas",
        title: "Portador do céu",
        symbol: "◯",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/atlas.png",
        group: "titans",
        generation: "titan-descendants",
        parents: ["iapetus", "clymene"],
        partners: [],
        note: "Titã condenado a sustentar o céu.",
      },
      {
        id: "prometheus",
        name: "Prometeu",
        title: "Benfeitor da humanidade",
        symbol: "🔥",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/prometheus.png",
        group: "titans",
        generation: "titan-descendants",
        parents: ["iapetus", "clymene"],
        partners: [],
        note: "Titã associado ao fogo e à humanidade.",
      },
      {
        id: "epimetheus",
        name: "Epimeteu",
        title: "Pensamento tardio",
        symbol: "◇",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/epimetheus.png",
        group: "titans",
        generation: "titan-descendants",
        parents: ["iapetus", "clymene"],
        partners: ["pandora"],
        note: "Titã ligado ao mito de Pandora.",
      },
      {
        id: "pandora",
        name: "Pandora",
        title: "Primeira mulher",
        symbol: "□",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/pandora.png",
        group: "heroes",
        generation: "titan-descendants",
        parents: [],
        partners: ["epimetheus"],
        note: "Figura mortal criada pelos deuses em uma antiga narrativa de origem.",
      },
      {
        id: "leto",
        name: "Leto",
        title: "Mãe de Apolo e Ártemis",
        symbol: "☽",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/leto.png",
        group: "titans",
        generation: "titan-descendants",
        parents: ["coeus", "phoebe"],
        partners: ["zeus"],
        note: "Titânide mãe dos gêmeos Apolo e Ártemis.",
      },
      {
        id: "asteria",
        name: "Astéria",
        title: "Noite estrelada",
        symbol: "✦",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/asteria.png",
        group: "titans",
        generation: "titan-descendants",
        parents: ["coeus", "phoebe"],
        partners: [],
        note: "Titânide ligada às estrelas e à adivinhação noturna.",
      },
      {
        id: "metis",
        name: "Métis",
        title: "Sabedoria prudente",
        symbol: "✧",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/metis.png",
        group: "titans",
        generation: "titan-descendants",
        parents: ["oceanus", "tethys"],
        partners: ["zeus"],
        note: "Oceânide ligada à prudência e mãe de Atena.",
      },

      {
        id: "zeus",
        name: "Zeus",
        title: "Rei dos deuses",
        symbol: "ϟ",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/zeus.png",
        group: "olympians",
        generation: "elder-olympians",
        parents: ["cronus", "rhea"],
        partners: [
          "hera",
          "metis",
          "leto",
          "demeter",
          "themis",
          "mnemosyne",
          "semele",
          "danae",
          "alcmene",
        ],
        note: "Deus do céu, do raio e da soberania olímpica.",
      },
      {
        id: "hera",
        name: "Hera",
        title: "Rainha dos deuses",
        symbol: "♛",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/hera.png",
        group: "olympians",
        generation: "elder-olympians",
        parents: ["cronus", "rhea"],
        partners: ["zeus"],
        note: "Deusa do casamento, da realeza e da vida familiar.",
      },
      {
        id: "poseidon",
        name: "Poseidon",
        title: "Senhor dos mares",
        symbol: "Ψ",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/poseidon.png",
        group: "olympians",
        generation: "elder-olympians",
        parents: ["cronus", "rhea"],
        partners: ["amphitrite"],
        note: "Deus dos mares, dos cavalos e dos terremotos.",
      },
      {
        id: "amphitrite",
        name: "Anfitrite",
        title: "Rainha do mar",
        symbol: "≋",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/amphitrite.png",
        group: "olympians",
        generation: "elder-olympians",
        parents: ["oceanus", "tethys"],
        partners: ["poseidon"],
        note: "Divindade marinha e consorte de Poseidon.",
      },
      {
        id: "hades",
        name: "Hades",
        title: "Senhor do submundo",
        symbol: "♜",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/hades.png",
        group: "underworld",
        generation: "elder-olympians",
        parents: ["cronus", "rhea"],
        partners: ["persephone"],
        note: "Governante do mundo dos mortos.",
      },
      {
        id: "demeter",
        name: "Deméter",
        title: "Agricultura e colheita",
        symbol: "🌾",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/demeter.png",
        group: "olympians",
        generation: "elder-olympians",
        parents: ["cronus", "rhea"],
        partners: ["zeus"],
        note: "Deusa das colheitas e mãe de Perséfone.",
      },
      {
        id: "hestia",
        name: "Héstia",
        title: "Fogo doméstico",
        symbol: "🔥",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/hestia.png",
        group: "olympians",
        generation: "elder-olympians",
        parents: ["cronus", "rhea"],
        partners: [],
        note: "Deusa da lareira, do lar e da comunidade.",
      },

      {
        id: "athena",
        name: "Atena",
        title: "Sabedoria e estratégia",
        symbol: "⚔",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/athena.png",
        group: "olympians",
        generation: "younger-olympians",
        parents: ["zeus", "metis"],
        partners: [],
        note: "Deusa da sabedoria, da técnica e da guerra estratégica.",
      },
      {
        id: "ares",
        name: "Ares",
        title: "Guerra impetuosa",
        symbol: "♂",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/ares.png",
        group: "olympians",
        generation: "younger-olympians",
        parents: ["zeus", "hera"],
        partners: ["aphrodite"],
        note: "Deus da dimensão violenta da guerra.",
      },
      {
        id: "hephaestus",
        name: "Hefesto",
        title: "Fogo e metalurgia",
        symbol: "⚒",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/hephaestus.png",
        group: "olympians",
        generation: "younger-olympians",
        parents: ["hera"],
        partners: ["aphrodite"],
        note: "Deus do fogo, da forja e dos artesãos.",
      },
      {
        id: "apollo",
        name: "Apolo",
        title: "Profecia, música e cura",
        symbol: "☀",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/apollo.png",
        group: "olympians",
        generation: "younger-olympians",
        parents: ["zeus", "leto"],
        partners: [],
        note: "Deus ligado ao oráculo, à música, à poesia e à cura.",
      },
      {
        id: "artemis",
        name: "Ártemis",
        title: "Caça e natureza",
        symbol: "☽",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/artemis.png",
        group: "olympians",
        generation: "younger-olympians",
        parents: ["zeus", "leto"],
        partners: [],
        note: "Deusa da caça, dos animais e da natureza selvagem.",
      },
      {
        id: "hermes",
        name: "Hermes",
        title: "Mensagens e caminhos",
        symbol: "☤",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/hermes.png",
        group: "olympians",
        generation: "younger-olympians",
        parents: ["zeus", "maia"],
        partners: [],
        note: "Mensageiro divino, protetor de viajantes e comerciantes.",
      },
      {
        id: "dionysus",
        name: "Dionísio",
        title: "Vinho e êxtase",
        symbol: "🍇",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/dionysus.png",
        group: "olympians",
        generation: "younger-olympians",
        parents: ["zeus", "semele"],
        partners: ["ariadne"],
        note: "Deus do vinho, do teatro e do êxtase ritual.",
      },
      {
        id: "persephone",
        name: "Perséfone",
        title: "Rainha do submundo",
        symbol: "❀",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/persephone.png",
        group: "underworld",
        generation: "younger-olympians",
        parents: ["zeus", "demeter"],
        partners: ["hades"],
        note: "Deusa ligada ao submundo, à renovação e aos mistérios.",
      },
      {
        id: "hebe",
        name: "Hebe",
        title: "Juventude",
        symbol: "✿",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/hebe.png",
        group: "olympians",
        generation: "younger-olympians",
        parents: ["zeus", "hera"],
        partners: ["heracles"],
        note: "Deusa da juventude e esposa divina de Héracles.",
      },
      {
        id: "eileithyia",
        name: "Ilítia",
        title: "Parto",
        symbol: "✤",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/eileithyia.png",
        group: "olympians",
        generation: "younger-olympians",
        parents: ["zeus", "hera"],
        partners: [],
        note: "Deusa associada ao parto e ao nascimento.",
      },
      {
        id: "aphrodite",
        name: "Afrodite",
        title: "Amor e beleza",
        symbol: "♀",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/aphrodite.png",
        group: "olympians",
        generation: "younger-olympians",
        parents: ["uranus"],
        partners: ["hephaestus", "ares"],
        note: "Deusa do amor, da beleza e do desejo; sua genealogia varia entre tradições.",
      },
      {
        id: "maia",
        name: "Maia",
        title: "Plêiade",
        symbol: "✦",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/maia.png",
        group: "titans",
        generation: "younger-olympians",
        parents: ["atlas"],
        partners: ["zeus"],
        note: "Mãe de Hermes em tradição amplamente difundida.",
      },
      {
        id: "semele",
        name: "Sêmele",
        title: "Princesa tebana",
        symbol: "◇",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/semele.png",
        group: "heroes",
        generation: "younger-olympians",
        parents: [],
        partners: ["zeus"],
        note: "Mãe mortal de Dionísio.",
      },
      {
        id: "ariadne",
        name: "Ariadne",
        title: "Princesa de Creta",
        symbol: "⌘",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/ariadne.png",
        group: "heroes",
        generation: "younger-olympians",
        parents: ["minos"],
        partners: ["dionysus"],
        note: "Princesa ligada ao Labirinto e posteriormente a Dionísio.",
      },

      {
        id: "danae",
        name: "Dânae",
        title: "Princesa de Argos",
        symbol: "◇",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/danae.png",
        group: "heroes",
        generation: "heroes",
        parents: [],
        partners: ["zeus"],
        note: "Mãe de Perseu.",
      },
      {
        id: "perseus",
        name: "Perseu",
        title: "Vencedor de Medusa",
        symbol: "⚔",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/perseus.png",
        group: "heroes",
        generation: "heroes",
        parents: ["zeus", "danae"],
        partners: ["andromeda"],
        note: "Herói que derrotou Medusa e resgatou Andrômeda.",
      },
      {
        id: "andromeda",
        name: "Andrômeda",
        title: "Rainha heroica",
        symbol: "✦",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/andromeda.png",
        group: "heroes",
        generation: "heroes",
        parents: [],
        partners: ["perseus"],
        note: "Princesa resgatada por Perseu e ancestral de linhagens heroicas.",
      },
      {
        id: "alcmene",
        name: "Alcmena",
        title: "Princesa mortal",
        symbol: "◇",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/alcmene.png",
        group: "heroes",
        generation: "heroes",
        parents: [],
        partners: ["zeus"],
        note: "Mãe mortal de Héracles.",
      },
      {
        id: "heracles",
        name: "Héracles",
        title: "Herói dos doze trabalhos",
        symbol: "♜",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/heracles.png",
        group: "heroes",
        generation: "heroes",
        parents: ["zeus", "alcmene"],
        partners: ["hebe"],
        note: "Herói conhecido por sua força e pelos doze trabalhos.",
      },
      {
        id: "minos",
        name: "Minos",
        title: "Rei de Creta",
        symbol: "♛",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/minos.png",
        group: "heroes",
        generation: "heroes",
        parents: ["zeus", "europa"],
        partners: [],
        note: "Rei ligado a Creta, ao Labirinto e ao Minotauro.",
      },
      {
        id: "europa",
        name: "Europa",
        title: "Princesa fenícia",
        symbol: "✧",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/europa.png",
        group: "heroes",
        generation: "heroes",
        parents: [],
        partners: ["zeus"],
        note: "Mãe de Minos em importante ciclo mítico.",
      },
      {
        id: "pollux",
        name: "Pólux",
        title: "Dióscuro imortal",
        symbol: "✦",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/pollux.png",
        group: "heroes",
        generation: "heroes",
        parents: ["zeus", "leda"],
        partners: [],
        note: "Irmão de Castor e participante de ciclos heroicos.",
      },
      {
        id: "helen",
        name: "Helena",
        title: "Rainha de Esparta",
        symbol: "♛",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/helen.png",
        group: "heroes",
        generation: "heroes",
        parents: ["zeus", "leda"],
        partners: [],
        note: "Figura central no ciclo da Guerra de Troia.",
      },
      {
        id: "leda",
        name: "Leda",
        title: "Rainha de Esparta",
        symbol: "◇",
        image:
          "../assets/images/mythologies/greek/genealogy/characters/leda.png",
        group: "heroes",
        generation: "heroes",
        parents: [],
        partners: ["zeus"],
        note: "Mãe de personagens ligados ao ciclo troiano.",
      },
    ],
  },

  heroes: [
    {
      symbol: "♜",
      name: "Héracles",
      title: "Os Doze Trabalhos",
      image: "/assets/images/mythologies/greek/heroes/heracles.png",
      description:
        "Maior herói da Grécia, filho de Zeus e Alcmena. Tornou-se imortal após completar os Doze Trabalhos.",
    },

    {
      symbol: "⚔",
      name: "Perseu",
      title: "Matador de Medusa",
      image: "/assets/images/mythologies/greek/heroes/perseus.png",
      description:
        "Filho de Zeus e Dânae. Decapitou Medusa e libertou Andrômeda.",
    },

    {
      symbol: "⌘",
      name: "Teseu",
      title: "Rei de Atenas",
      image: "/assets/images/mythologies/greek/heroes/theseus.png",
      description:
        "Herói ateniense que derrotou o Minotauro no Labirinto de Creta.",
    },

    {
      symbol: "⛵",
      name: "Odisseu",
      title: "Rei de Ítaca",
      image: "/assets/images/mythologies/greek/heroes/odysseus.png",
      description:
        "Conhecido por sua inteligência e pela longa viagem narrada na Odisseia.",
    },

    {
      symbol: "🛡",
      name: "Aquiles",
      title: "Maior Guerreiro Grego",
      image: "/assets/images/mythologies/greek/heroes/achilles.png",
      description:
        "Filho de Tétis e Peleu. Guerreiro quase invulnerável da Guerra de Troia.",
    },

    {
      symbol: "✧",
      name: "Atalanta",
      title: "Caçadora Lendária",
      image: "/assets/images/mythologies/greek/heroes/atalanta.png",
      description: "Heroína veloz participante da caça ao Javali da Calidônia.",
    },

    {
      symbol: "🏹",
      name: "Jasão",
      title: "Líder dos Argonautas",
      image: "/assets/images/mythologies/greek/heroes/jason.png",
      description:
        "Comandou a expedição da nau Argos em busca do Velocino de Ouro.",
    },

    {
      symbol: "⚓",
      name: "Orfeu",
      title: "Mestre da Lira",
      image: "/assets/images/mythologies/greek/heroes/orpheus.png",
      description:
        "Poeta e músico capaz de encantar homens, animais e deuses com sua música.",
    },

    {
      symbol: "🦁",
      name: "Belerofonte",
      title: "Domador de Pégaso",
      image: "/assets/images/mythologies/greek/heroes/bellerophon.png",
      description: "Montou Pégaso e derrotou a monstruosa Quimera.",
    },

    {
      symbol: "🐗",
      name: "Meleagro",
      title: "Caçador da Calidônia",
      image: "/assets/images/mythologies/greek/heroes/meleager.png",
      description: "Principal herói da caça ao Javali da Calidônia.",
    },

    {
      symbol: "🏛",
      name: "Cadmo",
      title: "Fundador de Tebas",
      image: "/assets/images/mythologies/greek/heroes/cadmus.png",
      description:
        "Fundou Tebas após derrotar o dragão de Ares e semear seus dentes.",
    },

    {
      symbol: "🦅",
      name: "Diomedes",
      title: "Herói de Troia",
      image: "/assets/images/mythologies/greek/heroes/diomedes.png",
      description:
        "Grande guerreiro da Ilíada que chegou a ferir Ares e Afrodite.",
    },

    {
      symbol: "⚜",
      name: "Ajax, o Grande",
      title: "Escudo dos Gregos",
      image: "/assets/images/mythologies/greek/heroes/ajax.png",
      description:
        "Segundo maior guerreiro da Guerra de Troia, famoso por sua força colossal.",
    },

    {
      symbol: "🏹",
      name: "Filoctetes",
      title: "Arqueiro de Héracles",
      image: "/assets/images/mythologies/greek/heroes/philoctetes.png",
      description:
        "Guardião do arco e das flechas de Héracles, indispensável para a queda de Troia.",
    },

    {
      symbol: "🔥",
      name: "Peleu",
      title: "Rei dos Mirmidões",
      image: "/assets/images/mythologies/greek/heroes/peleus.png",
      description: "Pai de Aquiles e esposo da nereida Tétis.",
    },

    {
      symbol: "🌊",
      name: "Telamão",
      title: "Rei de Salamina",
      image: "/assets/images/mythologies/greek/heroes/telamon.png",
      description:
        "Pai de Ajax e companheiro de Héracles em diversas aventuras.",
    },

    {
      symbol: "⚡",
      name: "Anfiarau",
      title: "Herói Profeta",
      image: "/assets/images/mythologies/greek/heroes/amphiaraus.png",
      description:
        "Rei e vidente participante da expedição dos Sete contra Tebas.",
    },

    {
      symbol: "👑",
      name: "Édipo",
      title: "Rei de Tebas",
      image: "/assets/images/mythologies/greek/heroes/oedipus.png",
      description:
        "Figura central da tragédia tebana, famoso pelo enigma da Esfinge.",
    },

    {
      symbol: "🦢",
      name: "Castor",
      title: "Um dos Dióscuros",
      image: "/assets/images/mythologies/greek/heroes/castor.png",
      description: "Filho de Leda, irmão de Pólux, patrono dos cavaleiros.",
    },

    {
      symbol: "⭐",
      name: "Pólux",
      title: "Um dos Dióscuros",
      image: "/assets/images/mythologies/greek/heroes/pollux.png",
      description:
        "Filho de Zeus e Leda, tornou-se imortal ao compartilhar sua imortalidade com Castor.",
    },

    {
      symbol: "🌟",
      name: "Hipólito",
      title: "Devoto de Ártemis",
      image: "/assets/images/mythologies/greek/heroes/hippolytus.png",
      description: "Filho de Teseu, conhecido por sua devoção à deusa Ártemis.",
    },

    {
      symbol: "🐎",
      name: "Peleu",
      title: "Pai de Aquiles",
      image: "/assets/images/mythologies/greek/heroes/peleus.png",
      description: "Herói dos Argonautas e esposo da nereida Tétis.",
    },

    {
      symbol: "⚔",
      name: "Eneias",
      title: "Herói Troiano",
      image: "/assets/images/mythologies/greek/heroes/aeneas.png",
      description:
        "Filho de Afrodite e Anquises, sobrevivente da Guerra de Troia.",
    },
  ],

  creatures: [
    {
      symbol: "☠",
      name: "Medusa",
      title: "A Górgona Mortal",
      image: "/assets/images/mythologies/greek/creatures/medusa.png",
      description:
        "A única mortal entre as três Górgonas. Possuía serpentes no lugar dos cabelos e seu olhar transformava os homens em pedra.",
    },

    {
      symbol: "☠",
      name: "Esteno",
      title: "A Górgona Poderosa",
      image: "/assets/images/mythologies/greek/creatures/esteno.png",
      description:
        "Uma das três Górgonas e irmã imortal de Medusa. Seu nome significa poderosa ou vigorosa.",
    },

    {
      symbol: "☠",
      name: "Euríale",
      title: "A Górgona do Grito Terrível",
      image: "/assets/images/mythologies/greek/creatures/euriale.png",
      description:
        "Górgona imortal conhecida por seu grito aterrorizante, capaz de ecoar por grandes distâncias.",
    },

    {
      symbol: "♉",
      name: "Minotauro",
      title: "Criatura do Labirinto",
      image: "/assets/images/mythologies/greek/creatures/minotauro.png",
      description:
        "Monstro com corpo humano e cabeça de touro, aprisionado no Labirinto de Creta e derrotado pelo herói Teseu.",
    },

    {
      symbol: "🐍",
      name: "Hidra de Lerna",
      title: "Serpente de Muitas Cabeças",
      image: "/assets/images/mythologies/greek/creatures/hidra-de-lerna.png",
      description:
        "Serpente aquática venenosa cujas cabeças se regeneravam quando cortadas. Foi derrotada por Héracles.",
    },

    {
      symbol: "♞",
      name: "Quimera",
      title: "Monstro de Três Naturezas",
      image: "/assets/images/mythologies/greek/creatures/quimera.png",
      description:
        "Criatura híbrida com partes de leão, cabra e serpente, capaz de cuspir fogo e derrotada por Belerofonte.",
    },

    {
      symbol: "●",
      name: "Ciclope",
      title: "Gigante de Um Olho",
      image: "/assets/images/mythologies/greek/creatures/ciclope.png",
      description:
        "Nome atribuído a diferentes grupos de gigantes com apenas um olho no centro da testa.",
    },

    {
      symbol: "●",
      name: "Polifemo",
      title: "O Ciclope da Odisseia",
      image: "/assets/images/mythologies/greek/creatures/polifemo.png",
      description:
        "Ciclope pastor e filho de Poseidon que aprisionou Odisseu e seus companheiros em uma caverna.",
    },

    {
      symbol: "⚡",
      name: "Brontes",
      title: "Ciclope do Trovão",
      image: "/assets/images/mythologies/greek/creatures/brontes.png",
      description:
        "Um dos três Ciclopes primordiais, associado ao trovão e à fabricação das armas divinas.",
    },

    {
      symbol: "⚡",
      name: "Estéropes",
      title: "Ciclope do Relâmpago",
      image: "/assets/images/mythologies/greek/creatures/esteropes.png",
      description:
        "Ciclope primordial associado aos relâmpagos e responsável por ajudar na criação das armas de Zeus.",
    },

    {
      symbol: "⚡",
      name: "Arges",
      title: "Ciclope do Brilho",
      image: "/assets/images/mythologies/greek/creatures/arges.png",
      description:
        "Um dos Ciclopes primordiais, personificação do brilho intenso dos raios.",
    },

    {
      symbol: "♧",
      name: "Cérbero",
      title: "Guardião do Submundo",
      image: "/assets/images/mythologies/greek/creatures/cerbero.png",
      description:
        "Cão monstruoso de múltiplas cabeças que guardava a entrada do reino de Hades e impedia a fuga dos mortos.",
    },

    {
      symbol: "🐕",
      name: "Ortro",
      title: "Cão de Duas Cabeças",
      image: "/assets/images/mythologies/greek/creatures/ortro.png",
      description:
        "Cão monstruoso de duas cabeças que guardava o rebanho do gigante Gérion.",
    },

    {
      symbol: "🦁",
      name: "Leão de Nemeia",
      title: "A Fera Invulnerável",
      image: "/assets/images/mythologies/greek/creatures/leao-de-nemeia.png",
      description:
        "Leão gigantesco cuja pele não podia ser atravessada por armas comuns. Foi morto por Héracles.",
    },

    {
      symbol: "🐗",
      name: "Javali de Erimanto",
      title: "A Fera das Montanhas",
      image:
        "/assets/images/mythologies/greek/creatures/javali-de-erimanto.png",
      description:
        "Javali colossal que aterrorizava a região do monte Erimanto e foi capturado vivo por Héracles.",
    },

    {
      symbol: "🐗",
      name: "Javali de Cálidon",
      title: "A Fera Enviada por Ártemis",
      image: "/assets/images/mythologies/greek/creatures/javali-de-calidon.png",
      description:
        "Javali monstruoso enviado por Ártemis para devastar Cálidon e caçado por diversos heróis gregos.",
    },

    {
      symbol: "🦌",
      name: "Corça de Cerineia",
      title: "Animal Sagrado de Ártemis",
      image: "/assets/images/mythologies/greek/creatures/corca-de-cerineia.png",
      description:
        "Corça sagrada com chifres dourados e cascos de bronze, extremamente veloz e capturada por Héracles.",
    },

    {
      symbol: "🐦",
      name: "Aves do Estínfalo",
      title: "Pássaros de Bronze",
      image: "/assets/images/mythologies/greek/creatures/aves-do-estinfalo.png",
      description:
        "Aves monstruosas com penas metálicas afiadas, bicos de bronze e hábitos antropófagos.",
    },

    {
      symbol: "🐂",
      name: "Touro de Creta",
      title: "A Fera de Poseidon",
      image: "/assets/images/mythologies/greek/creatures/touro-de-creta.png",
      description:
        "Touro sobrenatural enviado por Poseidon ao rei Minos e posteriormente capturado por Héracles.",
    },

    {
      symbol: "🐎",
      name: "Éguas de Diomedes",
      title: "Cavalos Devoradores de Homens",
      image: "/assets/images/mythologies/greek/creatures/eguas-de-diomedes.png",
      description:
        "Quatro éguas selvagens alimentadas com carne humana e pertencentes ao rei trácio Diomedes.",
    },

    {
      symbol: "🐂",
      name: "Touros da Cólquida",
      title: "Touros de Cascos de Bronze",
      image:
        "/assets/images/mythologies/greek/creatures/touros-da-colquida.png",
      description:
        "Touros mágicos que possuíam cascos de bronze e expeliam fogo pelas narinas.",
    },

    {
      symbol: "🐉",
      name: "Dragão da Cólquida",
      title: "Guardião do Velocino de Ouro",
      image:
        "/assets/images/mythologies/greek/creatures/dragao-da-colquida.png",
      description:
        "Dragão gigantesco que nunca dormia e guardava o Velocino de Ouro em um bosque sagrado.",
    },

    {
      symbol: "🐉",
      name: "Ládon",
      title: "Dragão das Hespérides",
      image: "/assets/images/mythologies/greek/creatures/ladon.png",
      description:
        "Serpente ou dragão de múltiplas cabeças encarregado de proteger as maçãs douradas das Hespérides.",
    },

    {
      symbol: "🐉",
      name: "Píton",
      title: "Serpente de Delfos",
      image: "/assets/images/mythologies/greek/creatures/piton.png",
      description:
        "Serpente monstruosa associada ao antigo oráculo de Delfos e posteriormente derrotada pelo deus Apolo.",
    },

    {
      symbol: "🐍",
      name: "Equidna",
      title: "Mãe dos Monstros",
      image: "/assets/images/mythologies/greek/creatures/equidna.png",
      description:
        "Criatura metade mulher e metade serpente, considerada mãe de muitos dos monstros mais temidos da mitologia grega.",
    },

    {
      symbol: "🔥",
      name: "Tifão",
      title: "Pai dos Monstros",
      image: "/assets/images/mythologies/greek/creatures/tifao.png",
      description:
        "Gigantesca criatura serpentina e tempestuosa que enfrentou Zeus pelo domínio do cosmos.",
    },

    {
      symbol: "🌊",
      name: "Cila",
      title: "Monstro do Estreito",
      image: "/assets/images/mythologies/greek/creatures/cila.png",
      description:
        "Monstro marinho com várias cabeças e bocas que devorava marinheiros que passavam próximos à sua caverna.",
    },

    {
      symbol: "🌀",
      name: "Caríbdis",
      title: "O Redemoinho Devorador",
      image: "/assets/images/mythologies/greek/creatures/caribdis.png",
      description:
        "Criatura marinha que engolia enormes quantidades de água, formando um redemoinho capaz de destruir navios.",
    },

    {
      symbol: "🌊",
      name: "Ceto",
      title: "Monstro Primordial dos Mares",
      image: "/assets/images/mythologies/greek/creatures/ceto.png",
      description:
        "Divindade marinha primordial associada aos perigos do oceano e mãe de diversas criaturas monstruosas.",
    },

    {
      symbol: "🐋",
      name: "Cetus",
      title: "Monstro Marinho de Andrômeda",
      image: "/assets/images/mythologies/greek/creatures/cetus.png",
      description:
        "Monstro enviado para destruir a Etiópia e devorar Andrômeda, sendo morto pelo herói Perseu.",
    },

    {
      symbol: "🦅",
      name: "Sereias",
      title: "Cantoras da Perdição",
      image: "/assets/images/mythologies/greek/creatures/sereias.png",
      description:
        "Criaturas originalmente retratadas com corpo de ave e cabeça de mulher, cujo canto atraía marinheiros para a morte.",
    },

    {
      symbol: "🦅",
      name: "Harpias",
      title: "Espíritos dos Ventos Violentos",
      image: "/assets/images/mythologies/greek/creatures/harpias.png",
      description:
        "Criaturas aladas com rosto feminino e corpo de ave, associadas a tempestades, punições e desaparecimentos súbitos.",
    },

    {
      symbol: "🦅",
      name: "Aelo",
      title: "A Harpia Tempestuosa",
      image: "/assets/images/mythologies/greek/creatures/aelo.png",
      description:
        "Uma das principais Harpias, cujo nome está relacionado aos ventos rápidos e tempestuosos.",
    },

    {
      symbol: "🦅",
      name: "Ocípete",
      title: "A Harpia de Voo Veloz",
      image: "/assets/images/mythologies/greek/creatures/ocipete.png",
      description:
        "Harpia conhecida por sua extraordinária velocidade e por perseguir aqueles punidos pelos deuses.",
    },

    {
      symbol: "🦅",
      name: "Celeno",
      title: "A Harpia Sombria",
      image: "/assets/images/mythologies/greek/creatures/celeno.png",
      description:
        "Harpia associada à escuridão, às tempestades e às profecias de desgraça.",
    },

    {
      symbol: "♞",
      name: "Pégaso",
      title: "O Cavalo Alado",
      image: "/assets/images/mythologies/greek/creatures/pegaso.png",
      description:
        "Cavalo alado nascido do sangue de Medusa e posteriormente montado por Belerofonte.",
    },

    {
      symbol: "♞",
      name: "Crisáor",
      title: "O Guerreiro da Espada Dourada",
      image: "/assets/images/mythologies/greek/creatures/crisaor.png",
      description:
        "Ser nascido do sangue de Medusa após sua decapitação, frequentemente retratado como guerreiro ou criatura alada.",
    },

    {
      symbol: "♘",
      name: "Centauro",
      title: "Homem-Cavalo",
      image: "/assets/images/mythologies/greek/creatures/centauro.png",
      description:
        "Criatura com torso humano unido ao corpo de um cavalo, associada tanto à selvageria quanto à sabedoria.",
    },

    {
      symbol: "♘",
      name: "Quíron",
      title: "O Centauro Sábio",
      image: "/assets/images/mythologies/greek/creatures/quiron.png",
      description:
        "Centauro imortal conhecido por sua sabedoria, domínio da medicina e papel como mestre de diversos heróis.",
    },

    {
      symbol: "♘",
      name: "Nesso",
      title: "O Centauro Vingativo",
      image: "/assets/images/mythologies/greek/creatures/nesso.png",
      description:
        "Centauro cuja morte e sangue envenenado contribuíram para o fim trágico de Héracles.",
    },

    {
      symbol: "🐐",
      name: "Sátiro",
      title: "Espírito Selvagem da Natureza",
      image: "/assets/images/mythologies/greek/creatures/satiro.png",
      description:
        "Ser masculino da natureza com características caprinas, associado à música, ao vinho e ao séquito de Dionísio.",
    },

    {
      symbol: "🐐",
      name: "Sileno",
      title: "O Velho Companheiro de Dionísio",
      image: "/assets/images/mythologies/greek/creatures/sileno.png",
      description:
        "Sátiro idoso e sábio que servia como tutor e companheiro do deus Dionísio.",
    },

    {
      symbol: "🌳",
      name: "Dríade",
      title: "Ninfa das Árvores",
      image: "/assets/images/mythologies/greek/creatures/driade.png",
      description:
        "Ninfa ligada às árvores e às florestas, representando a força vital da natureza.",
    },

    {
      symbol: "🌳",
      name: "Hamadríade",
      title: "Espírito Unido à Árvore",
      image: "/assets/images/mythologies/greek/creatures/hamadriade.png",
      description:
        "Ninfa cuja vida estava diretamente ligada a uma árvore específica, morrendo quando ela era destruída.",
    },

    {
      symbol: "🌊",
      name: "Náiade",
      title: "Ninfa das Águas Doces",
      image: "/assets/images/mythologies/greek/creatures/naiade.png",
      description:
        "Ninfa associada a rios, fontes, riachos, lagos e outras formas de água doce.",
    },

    {
      symbol: "🌊",
      name: "Nereida",
      title: "Ninfa do Mar",
      image: "/assets/images/mythologies/greek/creatures/nereida.png",
      description:
        "Uma das cinquenta filhas de Nereu, frequentemente descritas como protetoras dos marinheiros.",
    },

    {
      symbol: "🌊",
      name: "Oceânide",
      title: "Ninfa das Águas do Mundo",
      image: "/assets/images/mythologies/greek/creatures/oceanide.png",
      description:
        "Filha dos titãs Oceano e Tétis, ligada a rios, fontes, nuvens, mares e regiões naturais.",
    },

    {
      symbol: "⛰",
      name: "Oréade",
      title: "Ninfa das Montanhas",
      image: "/assets/images/mythologies/greek/creatures/oreade.png",
      description:
        "Ninfa associada às montanhas, cavernas, vales rochosos e florestas elevadas.",
    },

    {
      symbol: "🦁",
      name: "Esfinge",
      title: "A Guardiã dos Enigmas",
      image: "/assets/images/mythologies/greek/creatures/esfinge.png",
      description:
        "Criatura com corpo de leão, asas de ave e rosto feminino que aterrorizava Tebas com seus enigmas.",
    },

    {
      symbol: "🦅",
      name: "Grifo",
      title: "Guardião de Tesouros",
      image: "/assets/images/mythologies/greek/creatures/grifo.png",
      description:
        "Criatura com corpo de leão e cabeça e asas de águia, frequentemente associada à proteção de riquezas.",
    },

    {
      symbol: "🐜",
      name: "Mirmecoleão",
      title: "Leão-Formiga",
      image: "/assets/images/mythologies/greek/creatures/mirmecoleao.png",
      description:
        "Criatura fantástica híbrida descrita como possuindo características de leão e formiga.",
    },

    {
      symbol: "🐜",
      name: "Formigas Devoradoras de Ouro",
      title: "Guardadoras do Ouro Oriental",
      image:
        "/assets/images/mythologies/greek/creatures/formigas-devoradoras-de-ouro.png",
      description:
        "Formigas gigantes mencionadas em relatos antigos como guardiãs de regiões ricas em ouro.",
    },

    {
      symbol: "🐉",
      name: "Dracaena",
      title: "Mulher-Serpente",
      image: "/assets/images/mythologies/greek/creatures/dracaena.png",
      description:
        "Categoria de criaturas femininas com a parte superior humana e a inferior semelhante a uma grande serpente.",
    },

    {
      symbol: "🐍",
      name: "Lâmia",
      title: "A Devoradora de Crianças",
      image: "/assets/images/mythologies/greek/creatures/lamia.png",
      description:
        "Rainha transformada em criatura monstruosa, associada à noite e ao desaparecimento de crianças.",
    },

    {
      symbol: "🌙",
      name: "Empusa",
      title: "Espectro de Hécate",
      image: "/assets/images/mythologies/greek/creatures/empusa.png",
      description:
        "Criatura metamórfica ligada a Hécate, descrita com aparência feminina e pernas de materiais diferentes.",
    },

    {
      symbol: "🌙",
      name: "Mormo",
      title: "Espírito do Medo",
      image: "/assets/images/mythologies/greek/creatures/mormo.png",
      description:
        "Espírito feminino assustador usado nas histórias gregas para provocar medo, especialmente em crianças.",
    },

    {
      symbol: "👁",
      name: "Gelo",
      title: "Demônio Feminino da Morte Infantil",
      image: "/assets/images/mythologies/greek/creatures/gelo.png",
      description:
        "Espírito maligno associado à morte de crianças e aos perigos enfrentados durante o nascimento.",
    },

    {
      symbol: "🩸",
      name: "Keres",
      title: "Espíritos da Morte Violenta",
      image: "/assets/images/mythologies/greek/creatures/keres.png",
      description:
        "Espíritos femininos sombrios que pairavam sobre campos de batalha e personificavam mortes brutais.",
    },

    {
      symbol: "⚔",
      name: "Erínias",
      title: "As Fúrias Vingadoras",
      image: "/assets/images/mythologies/greek/creatures/erinias.png",
      description:
        "Entidades do submundo responsáveis por perseguir e punir crimes contra a família e a ordem natural.",
    },

    {
      symbol: "⚔",
      name: "Alecto",
      title: "A Fúria Incansável",
      image: "/assets/images/mythologies/greek/creatures/alecto.png",
      description:
        "Uma das Erínias, personificação da ira contínua e da perseguição aos culpados.",
    },

    {
      symbol: "⚔",
      name: "Megera",
      title: "A Fúria do Ressentimento",
      image: "/assets/images/mythologies/greek/creatures/megera.png",
      description:
        "Uma das Erínias, relacionada à inveja, à infidelidade, ao rancor e aos crimes familiares.",
    },

    {
      symbol: "⚔",
      name: "Tisífone",
      title: "A Vingadora dos Assassinatos",
      image: "/assets/images/mythologies/greek/creatures/tisifone.png",
      description:
        "Uma das Erínias, encarregada de punir assassinos e perseguir aqueles que derramavam sangue familiar.",
    },

    {
      symbol: "💯",
      name: "Hecatônquiro",
      title: "Gigante de Cem Braços",
      image: "/assets/images/mythologies/greek/creatures/hecatonquiro.png",
      description:
        "Gigante primordial dotado de cinquenta cabeças e cem braços, possuidor de força incomparável.",
    },

    {
      symbol: "💯",
      name: "Briareu",
      title: "O Poderoso Hecatônquiro",
      image: "/assets/images/mythologies/greek/creatures/briareu.png",
      description:
        "Um dos três Hecatônquiros, conhecido também como Egeão e lembrado por sua força extraordinária.",
    },

    {
      symbol: "💯",
      name: "Coto",
      title: "O Hecatônquiro Furioso",
      image: "/assets/images/mythologies/greek/creatures/coto.png",
      description:
        "Gigante primordial de cem braços que auxiliou Zeus na guerra contra os Titãs.",
    },

    {
      symbol: "💯",
      name: "Giges",
      title: "O Hecatônquiro dos Cem Braços",
      image: "/assets/images/mythologies/greek/creatures/giges.png",
      description:
        "Um dos três Hecatônquiros libertados por Zeus durante a Titanomaquia.",
    },

    {
      symbol: "🗿",
      name: "Gigante",
      title: "Filho de Gaia",
      image: "/assets/images/mythologies/greek/creatures/gigante.png",
      description:
        "Membro da raça de poderosos seres nascidos de Gaia que enfrentaram os deuses olímpicos na Gigantomaquia.",
    },

    {
      symbol: "🗿",
      name: "Alcioneu",
      title: "O Gigante Imortal em Sua Terra",
      image: "/assets/images/mythologies/greek/creatures/alcioneu.png",
      description:
        "Um dos mais poderosos Gigantes, invencível enquanto permanecesse dentro de sua terra natal.",
    },

    {
      symbol: "🗿",
      name: "Porfírio",
      title: "Rei dos Gigantes",
      image: "/assets/images/mythologies/greek/creatures/porfirio.png",
      description:
        "Líder dos Gigantes durante a guerra contra os deuses olímpicos.",
    },

    {
      symbol: "🗿",
      name: "Encélado",
      title: "Gigante Sepultado sob a Terra",
      image: "/assets/images/mythologies/greek/creatures/encelado.png",
      description:
        "Gigante derrotado por Atena e associado a terremotos e atividades vulcânicas.",
    },

    {
      symbol: "🗿",
      name: "Efialtes",
      title: "Gigante Adversário dos Deuses",
      image: "/assets/images/mythologies/greek/creatures/efialtes.png",
      description:
        "Gigante que combateu os deuses olímpicos e foi derrotado durante a Gigantomaquia.",
    },

    {
      symbol: "🗿",
      name: "Mimas",
      title: "Gigante da Gigantomaquia",
      image: "/assets/images/mythologies/greek/creatures/mimas.png",
      description:
        "Um dos Gigantes que se rebelaram contra o domínio dos deuses do Olimpo.",
    },

    {
      symbol: "🗿",
      name: "Palas",
      title: "Gigante Derrotado por Atena",
      image: "/assets/images/mythologies/greek/creatures/palas-gigante.png",
      description:
        "Gigante morto por Atena durante a Gigantomaquia, tendo sua pele utilizada como proteção pela deusa.",
    },

    {
      symbol: "🗿",
      name: "Polibotes",
      title: "Inimigo de Poseidon",
      image: "/assets/images/mythologies/greek/creatures/polibotes.png",
      description:
        "Gigante perseguido por Poseidon durante a guerra entre os Gigantes e os deuses olímpicos.",
    },

    {
      symbol: "🗿",
      name: "Otus",
      title: "Gigante Aloada",
      image: "/assets/images/mythologies/greek/creatures/otus.png",
      description:
        "Um dos irmãos Aloídas, gigantes que tentaram alcançar o Olimpo empilhando montanhas.",
    },

    {
      symbol: "🗿",
      name: "Efialtes Aloada",
      title: "Gigante que Desafiou o Olimpo",
      image: "/assets/images/mythologies/greek/creatures/efialtes-aloada.png",
      description:
        "Irmão de Otus e um dos gigantes Aloídas que ameaçaram os deuses olímpicos.",
    },

    {
      symbol: "🗿",
      name: "Talos",
      title: "O Autômato de Bronze",
      image: "/assets/images/mythologies/greek/creatures/talos.png",
      description:
        "Gigante artificial feito de bronze que patrulhava a ilha de Creta e atacava embarcações invasoras.",
    },

    {
      symbol: "🐍",
      name: "Gegenees",
      title: "Gigantes de Seis Braços",
      image: "/assets/images/mythologies/greek/creatures/gegenees.png",
      description:
        "Tribos de gigantes com seis braços encontradas pelos Argonautas durante sua jornada.",
    },

    {
      symbol: "🐚",
      name: "Tritão",
      title: "Mensageiro Marinho",
      image: "/assets/images/mythologies/greek/creatures/tritao.png",
      description:
        "Ser marinho com torso humano e cauda de peixe, filho de Poseidon e Anfitrite.",
    },

    {
      symbol: "🐚",
      name: "Tritões",
      title: "Povo do Mar",
      image: "/assets/images/mythologies/greek/creatures/tritoes.png",
      description:
        "Criaturas marinhas semelhantes a Tritão, frequentemente retratadas acompanhando divindades oceânicas.",
    },

    {
      symbol: "🐟",
      name: "Hipocampo",
      title: "Cavalo do Mar",
      image: "/assets/images/mythologies/greek/creatures/hipocampo.png",
      description:
        "Criatura com a parte dianteira de cavalo e a parte traseira semelhante à cauda de um peixe.",
    },

    {
      symbol: "🐟",
      name: "Ictiocentauro",
      title: "Centauro Marinho",
      image: "/assets/images/mythologies/greek/creatures/ictiocentauro.png",
      description:
        "Criatura marinha com torso humano, patas dianteiras de cavalo e uma longa cauda de peixe.",
    },

    {
      symbol: "🐐",
      name: "Capricórnio",
      title: "Cabra Marinha",
      image: "/assets/images/mythologies/greek/creatures/capricornio.png",
      description:
        "Criatura híbrida com a parte dianteira de cabra e a parte traseira de peixe.",
    },

    {
      symbol: "🐬",
      name: "Delfim",
      title: "O Golfinho Celestial",
      image: "/assets/images/mythologies/greek/creatures/delfim.png",
      description:
        "Golfinho mítico que ajudou Poseidon a encontrar Anfitrite e foi colocado entre as constelações.",
    },

    {
      symbol: "🐐",
      name: "Amalteia",
      title: "A Cabra Nutridora de Zeus",
      image: "/assets/images/mythologies/greek/creatures/amalteia.png",
      description:
        "Cabra ou ninfa que alimentou Zeus durante sua infância escondida na ilha de Creta.",
    },

    {
      symbol: "🐍",
      name: "Ofíon",
      title: "A Serpente Primordial",
      image: "/assets/images/mythologies/greek/creatures/ofion.png",
      description:
        "Serpente primordial que, em algumas tradições, governou o mundo antes de Cronos.",
    },

    {
      symbol: "🐉",
      name: "Delfina",
      title: "A Guardiã Serpentina",
      image: "/assets/images/mythologies/greek/creatures/delfina.png",
      description:
        "Criatura feminina com corpo de serpente encarregada de guardar os tendões de Zeus após seu confronto com Tifão.",
    },

    {
      symbol: "🦅",
      name: "Águia do Cáucaso",
      title: "A Torturadora de Prometeu",
      image: "/assets/images/mythologies/greek/creatures/aguia-do-caucaso.png",
      description:
        "Águia monstruosa enviada por Zeus para devorar diariamente o fígado regenerado de Prometeu.",
    },

    {
      symbol: "🐍",
      name: "Serpente de Ares",
      title: "Guardião da Fonte de Tebas",
      image: "/assets/images/mythologies/greek/creatures/serpente-de-ares.png",
      description:
        "Dragão ou serpente sagrada de Ares que guardava uma fonte e foi morta pelo herói Cadmo.",
    },

    {
      symbol: "🐉",
      name: "Dragão de Nemeia",
      title: "Guardião de Ofeltes",
      image: "/assets/images/mythologies/greek/creatures/dragao-de-nemeia.png",
      description:
        "Serpente monstruosa associada à morte do jovem Ofeltes e à origem dos Jogos Nemeus.",
    },

    {
      symbol: "🐍",
      name: "Serpentes de Laocoonte",
      title: "Mensageiras da Punição Divina",
      image:
        "/assets/images/mythologies/greek/creatures/serpentes-de-laocoonte.png",
      description:
        "Duas serpentes marinhas enviadas para matar o sacerdote troiano Laocoonte e seus filhos.",
    },

    {
      symbol: "🐴",
      name: "Aríon",
      title: "O Cavalo Imortal",
      image: "/assets/images/mythologies/greek/creatures/arion.png",
      description:
        "Cavalo divino de extraordinária velocidade, nascido de Poseidon e Deméter em algumas tradições.",
    },

    {
      symbol: "🐴",
      name: "Bálios",
      title: "Cavalo Imortal de Aquiles",
      image: "/assets/images/mythologies/greek/creatures/balios.png",
      description:
        "Um dos cavalos imortais concedidos a Peleu e posteriormente conduzidos por Aquiles na Guerra de Troia.",
    },

    {
      symbol: "🐴",
      name: "Xanto",
      title: "Cavalo Profético de Aquiles",
      image: "/assets/images/mythologies/greek/creatures/xanto.png",
      description:
        "Cavalo imortal de Aquiles que recebeu temporariamente o poder da fala e profetizou a morte do herói.",
    },

    {
      symbol: "🐴",
      name: "Celeris",
      title: "O Cavalo da Velocidade",
      image: "/assets/images/mythologies/greek/creatures/celeris.png",
      description:
        "Cavalo mítico associado à extraordinária velocidade e, em algumas tradições, irmão de Pégaso.",
    },

    {
      symbol: "🦊",
      name: "Raposa de Teumesso",
      title: "A Raposa Inalcançável",
      image:
        "/assets/images/mythologies/greek/creatures/raposa-de-teumesso.png",
      description:
        "Raposa gigantesca destinada pelos deuses a jamais ser capturada.",
    },

    {
      symbol: "🐕",
      name: "Lélape",
      title: "O Cão que Sempre Capturava",
      image: "/assets/images/mythologies/greek/creatures/leelape.png",
      description:
        "Cão mágico destinado a sempre alcançar qualquer presa que perseguisse.",
    },

    {
      symbol: "🦅",
      name: "Fênix",
      title: "A Ave que Renascía",
      image: "/assets/images/mythologies/greek/creatures/fenix.png",
      description:
        "Ave extraordinária associada ao Sol, à longevidade e ao renascimento depois da morte.",
    },

    {
      symbol: "🦅",
      name: "Aves do Lago Averno",
      title: "Criaturas das Águas Mortais",
      image:
        "/assets/images/mythologies/greek/creatures/aves-do-lago-averno.png",
      description:
        "Aves sobrenaturais associadas às regiões próximas das entradas do submundo.",
    },

    {
      symbol: "🌑",
      name: "Cacodemon",
      title: "Espírito Maligno",
      image: "/assets/images/mythologies/greek/creatures/cacodemon.png",
      description:
        "Termo utilizado para designar espíritos ou daimones considerados prejudiciais aos seres humanos.",
    },

    {
      symbol: "✨",
      name: "Agathos Daimon",
      title: "Espírito Protetor",
      image: "/assets/images/mythologies/greek/creatures/agathos-daimon.png",
      description:
        "Espírito benéfico representado frequentemente como uma serpente protetora das casas e da prosperidade.",
    },

    {
      symbol: "😴",
      name: "Oneiroi",
      title: "Espíritos dos Sonhos",
      image: "/assets/images/mythologies/greek/creatures/oneiroi.png",
      description:
        "Espíritos alados responsáveis por transportar sonhos verdadeiros, falsos, proféticos ou assustadores.",
    },

    {
      symbol: "😴",
      name: "Morféu",
      title: "Espírito das Formas Humanas",
      image: "/assets/images/mythologies/greek/creatures/morfeu.png",
      description:
        "Espírito dos sonhos capaz de assumir perfeitamente a forma de qualquer ser humano.",
    },

    {
      symbol: "😴",
      name: "Fobetor",
      title: "Espírito dos Pesadelos",
      image: "/assets/images/mythologies/greek/creatures/fobetor.png",
      description:
        "Espírito dos sonhos que assumia formas de animais, monstros e criaturas aterrorizantes.",
    },

    {
      symbol: "😴",
      name: "Fantaso",
      title: "Espírito das Formas Inanimadas",
      image: "/assets/images/mythologies/greek/creatures/fantaso.png",
      description:
        "Espírito capaz de aparecer nos sonhos como pedras, árvores, água e outros elementos da natureza.",
    },

    {
      symbol: "🌪",
      name: "Anemoi Thuellai",
      title: "Espíritos das Tempestades",
      image: "/assets/images/mythologies/greek/creatures/anemoi-thuellai.png",
      description:
        "Espíritos violentos dos ventos de tempestade, frequentemente retratados como seres alados.",
    },

    {
      symbol: "🌪",
      name: "Aura",
      title: "Ninfa da Brisa",
      image: "/assets/images/mythologies/greek/creatures/aura.png",
      description:
        "Espírito ou ninfa associada às brisas suaves e ao movimento delicado do ar.",
    },

    {
      symbol: "🔥",
      name: "Cabiros",
      title: "Espíritos Misteriosos do Fogo",
      image: "/assets/images/mythologies/greek/creatures/cabiros.png",
      description:
        "Divindades ou espíritos enigmáticos associados à metalurgia, ao fogo e a cultos secretos.",
    },

    {
      symbol: "⚒",
      name: "Dáctilos Ideus",
      title: "Espíritos Ferreiros",
      image: "/assets/images/mythologies/greek/creatures/dactilos-ideus.png",
      description:
        "Seres mágicos ligados ao monte Ida, à metalurgia e à descoberta do trabalho com metais.",
    },

    {
      symbol: "🛡",
      name: "Curetes",
      title: "Guerreiros Protetores de Zeus",
      image: "/assets/images/mythologies/greek/creatures/curetes.png",
      description:
        "Guerreiros míticos que batiam suas armas e escudos para esconder o choro do jovem Zeus.",
    },

    {
      symbol: "🛡",
      name: "Coribantes",
      title: "Dançarinos Armados",
      image: "/assets/images/mythologies/greek/creatures/coribantes.png",
      description:
        "Espíritos guerreiros associados a danças frenéticas, tambores e rituais dedicados à deusa Cibele.",
    },

    {
      symbol: "🔥",
      name: "Telquines",
      title: "Feiticeiros do Mar",
      image: "/assets/images/mythologies/greek/creatures/telquines.png",
      description:
        "Seres marinhos mágicos associados à metalurgia, à feitiçaria e à criação de objetos divinos.",
    },

    {
      symbol: "🐍",
      name: "Cecrops",
      title: "Rei Homem-Serpente",
      image: "/assets/images/mythologies/greek/creatures/cecrops.png",
      description:
        "Antigo rei de Atenas representado com torso humano e parte inferior semelhante a uma serpente.",
    },

    {
      symbol: "🐍",
      name: "Erictônio",
      title: "O Filho da Terra",
      image: "/assets/images/mythologies/greek/creatures/erictonio.png",
      description:
        "Rei ateniense nascido da terra e frequentemente associado a características serpentinas.",
    },

    {
      symbol: "👻",
      name: "Eidolon",
      title: "Imagem Fantasmagórica",
      image: "/assets/images/mythologies/greek/creatures/eidolon.png",
      description:
        "Manifestação espectral ou imagem de uma pessoa, semelhante a um fantasma ou duplicata ilusória.",
    },

    {
      symbol: "👻",
      name: "Sombra do Hades",
      title: "Espírito dos Mortos",
      image: "/assets/images/mythologies/greek/creatures/sombra-do-hades.png",
      description:
        "Forma enfraquecida e incorpórea assumida pelas almas humanas após entrarem no reino dos mortos.",
    },
  ],

  places: [
    // =====================================================
    // REINOS CÓSMICOS E DIVINOS
    // =====================================================
    {
      icon: "△",
      name: "Monte Olimpo",
      type: "Lugar divino",
      image: "/assets/images/mythologies/greek/places/mount-olympus.png",
      description:
        "Montanha associada à morada das principais divindades olímpicas.",
    },
    {
      icon: "☁",
      name: "Palácio de Zeus",
      type: "Morada divina",
      image: "/assets/images/mythologies/greek/places/palace-of-zeus.png",
      description:
        "Residência simbólica de Zeus no Olimpo e centro da assembleia dos deuses.",
    },
    {
      icon: "✦",
      name: "Éter",
      type: "Região celestial",
      image: "/assets/images/mythologies/greek/places/aether.png",
      description:
        "Região luminosa e superior do céu, associada ao ar puro respirado pelos deuses.",
    },
    {
      icon: "☄",
      name: "Urano",
      type: "Céu primordial",
      image: "/assets/images/mythologies/greek/places/uranus-sky.png",
      description:
        "A abóbada celeste primordial, concebida como domínio e personificação divina.",
    },
    {
      icon: "♁",
      name: "Gaia",
      type: "Terra primordial",
      image: "/assets/images/mythologies/greek/places/gaia-earth.png",
      description:
        "A Terra viva e primordial da qual nasceram numerosas linhagens divinas.",
    },
    {
      icon: "≋",
      name: "Oceano",
      type: "Rio cósmico",
      image: "/assets/images/mythologies/greek/places/oceanus.png",
      description:
        "Grande corrente que, segundo antigas concepções, circundava o mundo habitado.",
    },
    {
      icon: "⊙",
      name: "Ilha do Sol",
      type: "Domínio divino",
      image: "/assets/images/mythologies/greek/places/island-of-the-sun.png",
      description:
        "Ilha associada aos rebanhos sagrados de Hélio no ciclo de Odisseu.",
    },
    {
      icon: "☾",
      name: "Palácio de Selene",
      type: "Morada celestial",
      image: "/assets/images/mythologies/greek/places/palace-of-selene.png",
      description:
        "Morada poética da deusa lunar Selene nas regiões luminosas do céu.",
    },
    {
      icon: "☼",
      name: "Palácio de Hélio",
      type: "Morada celestial",
      image: "/assets/images/mythologies/greek/places/palace-of-helios.png",
      description:
        "Palácio solar de onde Hélio partia diariamente conduzindo seu carro pelo céu.",
    },
    {
      icon: "✧",
      name: "Casa de Eos",
      type: "Morada celestial",
      image: "/assets/images/mythologies/greek/places/house-of-eos.png",
      description:
        "Residência oriental da deusa da aurora, de onde a luz do dia surgia.",
    },

    // =====================================================
    // SUBMUNDO E DESTINOS DAS ALMAS
    // =====================================================
    {
      icon: "☾",
      name: "Hades",
      type: "Reino dos mortos",
      image: "/assets/images/mythologies/greek/places/hades-underworld.png",
      description:
        "Reino subterrâneo governado por Hades e Perséfone, destino das almas mortais.",
    },
    {
      icon: "♜",
      name: "Palácio de Hades",
      type: "Morada do submundo",
      image: "/assets/images/mythologies/greek/places/palace-of-hades.png",
      description:
        "Residência de Hades e Perséfone no interior do mundo dos mortos.",
    },
    {
      icon: "▼",
      name: "Tártaro",
      type: "Abismo primordial",
      image: "/assets/images/mythologies/greek/places/tartarus.png",
      description:
        "Profundidade cósmica utilizada como prisão para Titãs e outros seres poderosos.",
    },
    {
      icon: "✦",
      name: "Campos Elísios",
      type: "Destino dos favorecidos",
      image: "/assets/images/mythologies/greek/places/elysian-fields.png",
      description:
        "Região feliz reservada, em diferentes tradições, a heróis e almas virtuosas.",
    },
    {
      icon: "❀",
      name: "Campos de Asfódelos",
      type: "Região do submundo",
      image: "/assets/images/mythologies/greek/places/asphodel-meadows.png",
      description:
        "Planícies sombrias onde repousavam muitas das almas comuns dos mortos.",
    },
    {
      icon: "◈",
      name: "Ilhas dos Bem-Aventurados",
      type: "Paraíso heroico",
      image: "/assets/images/mythologies/greek/places/isles-of-the-blessed.png",
      description:
        "Ilhas paradisíacas do extremo ocidente destinadas a heróis excepcionalmente favorecidos.",
    },
    {
      icon: "⚪",
      name: "Ilha Branca",
      type: "Morada heroica",
      image: "/assets/images/mythologies/greek/places/white-island.png",
      description:
        "Ilha remota ligada ao descanso de Aquiles e de outros heróis após a morte.",
    },
    {
      icon: "☠",
      name: "Campos de Punição",
      type: "Região do submundo",
      image: "/assets/images/mythologies/greek/places/fields-of-punishment.png",
      description:
        "Área associada ao castigo de almas que cometeram crimes graves contra deuses e homens.",
    },
    {
      icon: "☾",
      name: "Érebo",
      type: "Região de trevas",
      image: "/assets/images/mythologies/greek/places/erebus.png",
      description:
        "Escuridão profunda situada entre o mundo dos vivos e as regiões inferiores.",
    },
    {
      icon: "⚖",
      name: "Tribunal dos Mortos",
      type: "Lugar de julgamento",
      image:
        "/assets/images/mythologies/greek/places/judgement-of-the-dead.png",
      description:
        "Local em que Minos, Radamanto e Éaco julgavam as almas recém-chegadas.",
    },
    {
      icon: "🚪",
      name: "Portões do Hades",
      type: "Entrada do submundo",
      image: "/assets/images/mythologies/greek/places/gates-of-hades.png",
      description:
        "Passagem guardada por Cérbero que separava o reino dos vivos do mundo dos mortos.",
    },
    {
      icon: "☾",
      name: "Caverna de Hipnos",
      type: "Morada divina",
      image: "/assets/images/mythologies/greek/places/cave-of-hypnos.png",
      description: "Gruta silenciosa e sombria associada ao deus do sono.",
    },
    {
      icon: "✧",
      name: "Terra dos Sonhos",
      type: "Região onírica",
      image: "/assets/images/mythologies/greek/places/land-of-dreams.png",
      description:
        "Domínio simbólico dos Oneiroi, de onde sonhos verdadeiros e enganosos alcançavam os mortais.",
    },
    {
      icon: "🚪",
      name: "Portão de Chifre",
      type: "Passagem dos sonhos",
      image: "/assets/images/mythologies/greek/places/gate-of-horn.png",
      description: "Portão mítico pelo qual passariam os sonhos verdadeiros.",
    },
    {
      icon: "🚪",
      name: "Portão de Marfim",
      type: "Passagem dos sonhos",
      image: "/assets/images/mythologies/greek/places/gate-of-ivory.png",
      description: "Portão mítico relacionado aos sonhos falsos ou enganosos.",
    },

    // =====================================================
    // RIOS, LAGOS E PASSAGENS DO SUBMUNDO
    // =====================================================
    {
      icon: "☾",
      name: "Rio Estige",
      type: "Rio do submundo",
      image: "/assets/images/mythologies/greek/places/river-styx.png",
      description:
        "Rio sagrado ligado a juramentos divinos e à fronteira do reino dos mortos.",
    },
    {
      icon: "≋",
      name: "Rio Aqueronte",
      type: "Rio do submundo",
      image: "/assets/images/mythologies/greek/places/river-acheron.png",
      description:
        "Rio da dor associado à travessia das almas conduzidas por Caronte.",
    },
    {
      icon: "≋",
      name: "Rio Cócito",
      type: "Rio do submundo",
      image: "/assets/images/mythologies/greek/places/river-cocytus.png",
      description:
        "Rio das lamentações formado, em tradições tardias, pelas lágrimas dos mortos.",
    },
    {
      icon: "🔥",
      name: "Rio Flegetonte",
      type: "Rio de fogo",
      image: "/assets/images/mythologies/greek/places/river-phlegethon.png",
      description:
        "Corrente ardente que atravessava as regiões profundas do submundo.",
    },
    {
      icon: "◌",
      name: "Rio Lete",
      type: "Rio do esquecimento",
      image: "/assets/images/mythologies/greek/places/river-lethe.png",
      description:
        "Rio cujas águas faziam as almas esquecerem sua existência anterior.",
    },
    {
      icon: "✦",
      name: "Rio Mnemosine",
      type: "Rio da memória",
      image: "/assets/images/mythologies/greek/places/river-mnemosyne.png",
      description:
        "Corrente iniciática ligada à preservação da memória após a morte.",
    },
    {
      icon: "◉",
      name: "Lago Aquerúsia",
      type: "Lago do submundo",
      image: "/assets/images/mythologies/greek/places/acherusian-lake.png",
      description:
        "Lago associado ao Aqueronte e às rotas de entrada no reino dos mortos.",
    },
    {
      icon: "◉",
      name: "Lago Estige",
      type: "Água sagrada",
      image: "/assets/images/mythologies/greek/places/styx-lake.png",
      description: "Nascente ou lago ligado às águas invioláveis do Estige.",
    },

    // =====================================================
    // ILHAS, TERRAS REMOTAS E LUGARES FANTÁSTICOS
    // =====================================================
    {
      icon: "⌂",
      name: "Creta",
      type: "Ilha histórica e mítica",
      image: "/assets/images/mythologies/greek/places/crete.png",
      description:
        "Ilha ligada a Minos, ao Labirinto, ao Minotauro e ao nascimento de Zeus.",
    },
    {
      icon: "⌘",
      name: "Labirinto de Creta",
      type: "Construção mítica",
      image: "/assets/images/mythologies/greek/places/labyrinth-of-crete.png",
      description:
        "Estrutura concebida por Dédalo para aprisionar o Minotauro.",
    },
    {
      icon: "△",
      name: "Monte Ida de Creta",
      type: "Montanha sagrada",
      image: "/assets/images/mythologies/greek/places/mount-ida-crete.png",
      description: "Montanha cretense associada à infância secreta de Zeus.",
    },
    {
      icon: "◉",
      name: "Caverna Dicteia",
      type: "Caverna sagrada",
      image: "/assets/images/mythologies/greek/places/dictaean-cave.png",
      description:
        "Gruta cretense tradicionalmente relacionada ao nascimento ou à criação de Zeus.",
    },
    {
      icon: "◉",
      name: "Caverna Ideia",
      type: "Caverna sagrada",
      image: "/assets/images/mythologies/greek/places/idaean-cave.png",
      description:
        "Santuário em gruta ligado à infância de Zeus e aos Curetes.",
    },
    {
      icon: "⚓",
      name: "Ítaca",
      type: "Reino heroico",
      image: "/assets/images/mythologies/greek/places/ithaca.png",
      description:
        "Ilha e reino de Odisseu, destino final de sua longa viagem.",
    },
    {
      icon: "⚓",
      name: "Eéia",
      type: "Ilha encantada",
      image: "/assets/images/mythologies/greek/places/aeaea.png",
      description:
        "Ilha de Circe, onde Odisseu e seus companheiros permaneceram durante sua jornada.",
    },
    {
      icon: "⚓",
      name: "Ogígia",
      type: "Ilha mítica",
      image: "/assets/images/mythologies/greek/places/ogygia.png",
      description:
        "Ilha de Calipso, onde Odisseu ficou retido por vários anos.",
    },
    {
      icon: "⚓",
      name: "Esquéria",
      type: "Terra dos Feácios",
      image: "/assets/images/mythologies/greek/places/scheria.png",
      description:
        "Reino marítimo dos Feácios, último grande refúgio de Odisseu antes de Ítaca.",
    },
    {
      icon: "⚓",
      name: "Ilha das Sereias",
      type: "Lugar marítimo mítico",
      image: "/assets/images/mythologies/greek/places/island-of-the-sirens.png",
      description:
        "Costa perigosa onde as Sereias atraíam navegantes por meio de seu canto.",
    },
    {
      icon: "🌀",
      name: "Estreito de Cila e Caríbdis",
      type: "Passagem marítima",
      image: "/assets/images/mythologies/greek/places/scylla-and-charybdis.png",
      description:
        "Canal mortal entre o monstro Cila e o redemoinho de Caríbdis.",
    },
    {
      icon: "⚓",
      name: "Trinácia",
      type: "Ilha sagrada",
      image: "/assets/images/mythologies/greek/places/thrinacia.png",
      description: "Ilha onde pastavam os rebanhos sagrados de Hélio.",
    },
    {
      icon: "⚓",
      name: "Eólia",
      type: "Ilha dos ventos",
      image: "/assets/images/mythologies/greek/places/aeolia.png",
      description: "Ilha flutuante governada por Éolo, guardião dos ventos.",
    },
    {
      icon: "⚓",
      name: "Lemnos",
      type: "Ilha mítica",
      image: "/assets/images/mythologies/greek/places/lemnos.png",
      description:
        "Ilha associada a Hefesto, aos Cabiros e à passagem dos Argonautas.",
    },
    {
      icon: "⚓",
      name: "Delos",
      type: "Ilha sagrada",
      image: "/assets/images/mythologies/greek/places/delos.png",
      description:
        "Ilha vinculada ao nascimento de Apolo e Ártemis e a importantes cultos.",
    },
    {
      icon: "⚓",
      name: "Naxos",
      type: "Ilha dionisíaca",
      image: "/assets/images/mythologies/greek/places/naxos.png",
      description:
        "Ilha em que Ariadne foi encontrada e desposada por Dionísio.",
    },
    {
      icon: "⚓",
      name: "Samotrácia",
      type: "Ilha sagrada",
      image: "/assets/images/mythologies/greek/places/samothrace.png",
      description:
        "Ilha célebre pelos mistérios dos Grandes Deuses e pelos Cabiros.",
    },
    {
      icon: "⚓",
      name: "Rodes",
      type: "Ilha de Hélio",
      image: "/assets/images/mythologies/greek/places/rhodes.png",
      description: "Ilha especialmente associada ao culto de Hélio.",
    },
    {
      icon: "⚓",
      name: "Chipre",
      type: "Ilha de Afrodite",
      image: "/assets/images/mythologies/greek/places/cyprus.png",
      description:
        "Ilha ligada ao nascimento marítimo e aos principais cultos de Afrodite.",
    },
    {
      icon: "⚓",
      name: "Citera",
      type: "Ilha de Afrodite",
      image: "/assets/images/mythologies/greek/places/cythera.png",
      description:
        "Ilha associada à chegada de Afrodite e a antigos santuários da deusa.",
    },
    {
      icon: "⚓",
      name: "Salamina",
      type: "Ilha heroica",
      image: "/assets/images/mythologies/greek/places/salamis.png",
      description:
        "Reino de Telamão e Ajax, ligado ao ciclo da Guerra de Troia.",
    },
    {
      icon: "⚓",
      name: "Egina",
      type: "Ilha mítica",
      image: "/assets/images/mythologies/greek/places/aegina.png",
      description:
        "Ilha associada à ninfa Egina, a Éaco e à origem dos Mirmidões.",
    },
    {
      icon: "⚓",
      name: "Cólquida",
      type: "Terra distante",
      image: "/assets/images/mythologies/greek/places/colchis.png",
      description:
        "Reino oriental onde Jasão e os Argonautas buscaram o Velocino de Ouro.",
    },
    {
      icon: "✦",
      name: "Jardim das Hespérides",
      type: "Jardim divino",
      image:
        "/assets/images/mythologies/greek/places/garden-of-the-hesperides.png",
      description:
        "Jardim remoto onde cresciam as maçãs de ouro protegidas por Ládon.",
    },
    {
      icon: "⚓",
      name: "Etiópia Mítica",
      type: "Terra remota",
      image: "/assets/images/mythologies/greek/places/mythic-aethiopia.png",
      description:
        "Região distante ligada a Andrômeda, Cefeu e às visitas festivas dos deuses.",
    },
    {
      icon: "⚓",
      name: "Hiperbórea",
      type: "Terra paradisíaca",
      image: "/assets/images/mythologies/greek/places/hyperborea.png",
      description:
        "País idealizado além do vento norte, especialmente associado a Apolo.",
    },
    {
      icon: "☼",
      name: "Terra dos Cimérios",
      type: "Terra de escuridão",
      image:
        "/assets/images/mythologies/greek/places/land-of-the-cimmerians.png",
      description:
        "Região envolta em névoa e trevas visitada por Odisseu antes da descida ao mundo dos mortos.",
    },
    {
      icon: "⚓",
      name: "Terra dos Lotófagos",
      type: "Terra fantástica",
      image:
        "/assets/images/mythologies/greek/places/land-of-the-lotus-eaters.png",
      description:
        "Região onde o fruto do lótus fazia os viajantes esquecerem o desejo de retornar.",
    },
    {
      icon: "⚓",
      name: "Terra dos Ciclopes",
      type: "Terra fantástica",
      image: "/assets/images/mythologies/greek/places/land-of-the-cyclopes.png",
      description: "Costa habitada por Ciclopes pastores, incluindo Polifemo.",
    },
    {
      icon: "⚓",
      name: "Lestrigônia",
      type: "Terra fantástica",
      image: "/assets/images/mythologies/greek/places/laestrygonia.png",
      description:
        "Reino dos gigantes Lestrigões, responsáveis pela destruição de quase toda a frota de Odisseu.",
    },

    // =====================================================
    // CIDADES, REINOS E REGIÕES DOS CICLOS HEROICOS
    // =====================================================
    {
      icon: "⚑",
      name: "Troia",
      type: "Cidade do ciclo heroico",
      image: "/assets/images/mythologies/greek/places/troy.png",
      description: "Cidade central das narrativas da Guerra de Troia.",
    },
    {
      icon: "♛",
      name: "Micenas",
      type: "Reino heroico",
      image: "/assets/images/mythologies/greek/places/mycenae.png",
      description: "Cidade de Agamêmnon, Perseu e da linhagem dos Atridas.",
    },
    {
      icon: "♛",
      name: "Argos",
      type: "Reino heroico",
      image: "/assets/images/mythologies/greek/places/argos.png",
      description:
        "Antiga cidade ligada a Hera, Perseu, Dânae e numerosas genealogias heroicas.",
    },
    {
      icon: "♛",
      name: "Esparta",
      type: "Reino heroico",
      image: "/assets/images/mythologies/greek/places/sparta.png",
      description:
        "Reino de Menelau e Helena, fundamental para o ciclo troiano.",
    },
    {
      icon: "🏛",
      name: "Atenas",
      type: "Cidade sagrada",
      image: "/assets/images/mythologies/greek/places/athens.png",
      description:
        "Cidade protegida por Atena e associada a Teseu, Erecteu e Cécrops.",
    },
    {
      icon: "🏛",
      name: "Acrópole de Atenas",
      type: "Santuário urbano",
      image: "/assets/images/mythologies/greek/places/acropolis-of-athens.png",
      description:
        "Centro sagrado ateniense ligado à disputa entre Atena e Poseidon.",
    },
    {
      icon: "♛",
      name: "Tebas",
      type: "Cidade do ciclo heroico",
      image: "/assets/images/mythologies/greek/places/thebes.png",
      description:
        "Cidade associada a Cadmo, Édipo, Dionísio e aos Sete contra Tebas.",
    },
    {
      icon: "♛",
      name: "Corinto",
      type: "Cidade mítica",
      image: "/assets/images/mythologies/greek/places/corinth.png",
      description:
        "Cidade ligada a Sísifo, Belerofonte, Medeia e ao cavalo Pégaso.",
    },
    {
      icon: "♛",
      name: "Iolco",
      type: "Reino dos Argonautas",
      image: "/assets/images/mythologies/greek/places/iolcus.png",
      description:
        "Cidade de onde Jasão partiu com os Argonautas em busca do Velocino de Ouro.",
    },
    {
      icon: "♛",
      name: "Pilos",
      type: "Reino heroico",
      image: "/assets/images/mythologies/greek/places/pylos.png",
      description:
        "Reino do sábio Nestor, importante aliado dos gregos em Troia.",
    },
    {
      icon: "♛",
      name: "Tirinto",
      type: "Cidade heroica",
      image: "/assets/images/mythologies/greek/places/tiryns.png",
      description:
        "Fortaleza associada a Héracles, Perseu e aos reis de Argólida.",
    },
    {
      icon: "♛",
      name: "Calidão",
      type: "Reino heroico",
      image: "/assets/images/mythologies/greek/places/calydon.png",
      description:
        "Cidade ligada à caça ao Javali de Cálidon e ao herói Meleagro.",
    },
    {
      icon: "♛",
      name: "Orcômeno",
      type: "Reino lendário",
      image: "/assets/images/mythologies/greek/places/orchomenus.png",
      description:
        "Cidade associada aos Mínias e a antigas tradições heroicas.",
    },
    {
      icon: "♛",
      name: "Feras",
      type: "Reino mítico",
      image: "/assets/images/mythologies/greek/places/pherae.png",
      description: "Cidade ligada ao rei Admeto e ao sacrifício de Alceste.",
    },
    {
      icon: "♛",
      name: "Trezena",
      type: "Cidade heroica",
      image: "/assets/images/mythologies/greek/places/troezen.png",
      description:
        "Cidade relacionada à juventude de Teseu e ao ciclo de Hipólito.",
    },
    {
      icon: "♛",
      name: "Tebas Hipoplácia",
      type: "Cidade troiana",
      image: "/assets/images/mythologies/greek/places/hypoplacian-thebes.png",
      description:
        "Cidade natal de Andrômaca e ligada às campanhas de Aquiles.",
    },
    {
      icon: "♛",
      name: "Lícia",
      type: "Reino heroico",
      image: "/assets/images/mythologies/greek/places/lycia.png",
      description: "Região ligada a Belerofonte, Sarpédon e Glauco.",
    },
    {
      icon: "♛",
      name: "Frígia",
      type: "Reino mítico",
      image: "/assets/images/mythologies/greek/places/phrygia.png",
      description:
        "Terra associada a Midas, Górdio, Cibele e antigos mitos anatólios.",
    },

    // =====================================================
    // SANTUÁRIOS, ORÁCULOS E LOCAIS DE CULTO
    // =====================================================
    {
      icon: "◈",
      name: "Delfos",
      type: "Santuário histórico",
      image: "/assets/images/mythologies/greek/places/delphi.png",
      description:
        "Centro religioso associado a Apolo e ao célebre oráculo da Pítia.",
    },
    {
      icon: "△",
      name: "Monte Parnaso",
      type: "Montanha sagrada",
      image: "/assets/images/mythologies/greek/places/mount-parnassus.png",
      description:
        "Montanha ligada a Apolo, às Musas, a Delfos e ao mito de Deucalião.",
    },
    {
      icon: "◉",
      name: "Fonte Castália",
      type: "Fonte sagrada",
      image: "/assets/images/mythologies/greek/places/castalian-spring.png",
      description:
        "Fonte de Delfos usada em purificações e associada à inspiração profética.",
    },
    {
      icon: "🏛",
      name: "Dodona",
      type: "Oráculo antigo",
      image: "/assets/images/mythologies/greek/places/dodona.png",
      description:
        "Oráculo de Zeus em que sinais eram interpretados pelo som de carvalhos sagrados.",
    },
    {
      icon: "🏛",
      name: "Olímpia",
      type: "Santuário pan-helênico",
      image: "/assets/images/mythologies/greek/places/olympia.png",
      description: "Grande santuário de Zeus e sede dos Jogos Olímpicos.",
    },
    {
      icon: "🏛",
      name: "Eleusis",
      type: "Centro dos Mistérios",
      image: "/assets/images/mythologies/greek/places/eleusis.png",
      description:
        "Cidade dos Mistérios Eleusinos dedicados a Deméter e Perséfone.",
    },
    {
      icon: "🏛",
      name: "Epidauro",
      type: "Santuário de cura",
      image: "/assets/images/mythologies/greek/places/epidaurus.png",
      description:
        "Centro de culto de Asclépio, procurado por peregrinos em busca de cura.",
    },
    {
      icon: "🏛",
      name: "Nemeia",
      type: "Santuário e lugar heroico",
      image: "/assets/images/mythologies/greek/places/nemea.png",
      description:
        "Região ligada ao Leão de Nemeia e aos Jogos Nemeus dedicados a Zeus.",
    },
    {
      icon: "🏛",
      name: "Istmo de Corinto",
      type: "Santuário e jogos",
      image: "/assets/images/mythologies/greek/places/isthmus-of-corinth.png",
      description: "Área dedicada a Poseidon e sede dos Jogos Ístmicos.",
    },
    {
      icon: "🏛",
      name: "Cabo Súnio",
      type: "Santuário marítimo",
      image: "/assets/images/mythologies/greek/places/cape-sounion.png",
      description:
        "Promontório consagrado a Poseidon e ligado à morte do rei Egeu.",
    },
    {
      icon: "🏛",
      name: "Brauron",
      type: "Santuário de Ártemis",
      image: "/assets/images/mythologies/greek/places/brauron.png",
      description:
        "Santuário ático de Ártemis Braurônia, associado a ritos femininos.",
    },
    {
      icon: "🏛",
      name: "Dídima",
      type: "Oráculo de Apolo",
      image: "/assets/images/mythologies/greek/places/didyma.png",
      description: "Grande santuário oracular de Apolo na costa da Ásia Menor.",
    },
    {
      icon: "🏛",
      name: "Claros",
      type: "Oráculo de Apolo",
      image: "/assets/images/mythologies/greek/places/claros.png",
      description: "Centro profético dedicado a Apolo próximo a Colofão.",
    },
    {
      icon: "🏛",
      name: "Amicleia",
      type: "Santuário de Apolo",
      image: "/assets/images/mythologies/greek/places/amyklai.png",
      description:
        "Local de culto a Apolo e Jacinto nas proximidades de Esparta.",
    },
    {
      icon: "🏛",
      name: "Cilene",
      type: "Montanha sagrada",
      image: "/assets/images/mythologies/greek/places/mount-cyllene.png",
      description:
        "Montanha da Arcádia tradicionalmente identificada como local de nascimento de Hermes.",
    },
    {
      icon: "🏛",
      name: "Licáion",
      type: "Montanha sagrada",
      image: "/assets/images/mythologies/greek/places/mount-lykaion.png",
      description:
        "Monte arcádio ligado a Zeus Liceu e a tradições sobre Licáon.",
    },

    // =====================================================
    // MONTANHAS, CAVERNAS, BOSQUES E FONTES MÍTICAS
    // =====================================================
    {
      icon: "△",
      name: "Monte Pélion",
      type: "Montanha heroica",
      image: "/assets/images/mythologies/greek/places/mount-pelion.png",
      description:
        "Montanha dos Centauros, morada de Quíron e local ligado ao casamento de Peleu e Tétis.",
    },
    {
      icon: "△",
      name: "Monte Otris",
      type: "Fortaleza dos Titãs",
      image: "/assets/images/mythologies/greek/places/mount-othrys.png",
      description:
        "Montanha tradicionalmente associada à base dos Titãs durante a Titanomaquia.",
    },
    {
      icon: "△",
      name: "Monte Etna",
      type: "Montanha vulcânica",
      image: "/assets/images/mythologies/greek/places/mount-etna.png",
      description:
        "Vulcão ligado à oficina de Hefesto e ao aprisionamento de Tifão ou Encélado.",
    },
    {
      icon: "△",
      name: "Monte Cáucaso",
      type: "Lugar de punição",
      image: "/assets/images/mythologies/greek/places/mount-caucasus.png",
      description:
        "Montanha em que Prometeu foi acorrentado e atormentado pela águia de Zeus.",
    },
    {
      icon: "△",
      name: "Monte Nisa",
      type: "Montanha mítica",
      image: "/assets/images/mythologies/greek/places/mount-nysa.png",
      description:
        "Local de localização variável onde Dionísio teria sido criado por ninfas.",
    },
    {
      icon: "△",
      name: "Monte Hélicon",
      type: "Montanha das Musas",
      image: "/assets/images/mythologies/greek/places/mount-helicon.png",
      description:
        "Montanha sagrada das Musas e das fontes de inspiração poética.",
    },
    {
      icon: "≋",
      name: "Fonte Hipocrene",
      type: "Fonte das Musas",
      image: "/assets/images/mythologies/greek/places/hippocrene.png",
      description:
        "Fonte criada, segundo o mito, pelo casco de Pégaso no monte Hélicon.",
    },
    {
      icon: "≋",
      name: "Fonte Aganipe",
      type: "Fonte das Musas",
      image: "/assets/images/mythologies/greek/places/aganippe.png",
      description:
        "Nascente do Hélicon associada às Musas e à inspiração poética.",
    },
    {
      icon: "△",
      name: "Monte Citerão",
      type: "Montanha mítica",
      image: "/assets/images/mythologies/greek/places/mount-cithaeron.png",
      description:
        "Montanha ligada a Édipo, Penteu, Dionísio e a rituais báquicos.",
    },
    {
      icon: "△",
      name: "Monte Erimanto",
      type: "Montanha heroica",
      image: "/assets/images/mythologies/greek/places/mount-erymanthus.png",
      description:
        "Região montanhosa onde Héracles capturou o Javali de Erimanto.",
    },
    {
      icon: "◉",
      name: "Pântano de Lerna",
      type: "Lugar monstruoso",
      image: "/assets/images/mythologies/greek/places/lerna.png",
      description:
        "Área pantanosa onde vivia a Hidra e onde existiam antigas tradições de entrada no submundo.",
    },
    {
      icon: "◉",
      name: "Lago Estínfalo",
      type: "Lugar heroico",
      image: "/assets/images/mythologies/greek/places/lake-stymphalus.png",
      description:
        "Lago arcádio habitado pelas Aves do Estínfalo enfrentadas por Héracles.",
    },
    {
      icon: "◉",
      name: "Caverna de Polifemo",
      type: "Lugar da Odisseia",
      image: "/assets/images/mythologies/greek/places/cave-of-polyphemus.png",
      description:
        "Gruta em que o Ciclope Polifemo aprisionou Odisseu e seus companheiros.",
    },
    {
      icon: "◉",
      name: "Caverna de Cila",
      type: "Covil monstruoso",
      image: "/assets/images/mythologies/greek/places/cave-of-scylla.png",
      description:
        "Covil elevado de onde Cila atacava os navios que atravessavam o estreito.",
    },
    {
      icon: "🌿",
      name: "Bosque de Dodona",
      type: "Bosque sagrado",
      image: "/assets/images/mythologies/greek/places/grove-of-dodona.png",
      description:
        "Bosque de carvalhos cujos sons eram interpretados como mensagens de Zeus.",
    },
    {
      icon: "🌿",
      name: "Bosque de Colono",
      type: "Bosque sagrado",
      image: "/assets/images/mythologies/greek/places/grove-of-colonus.png",
      description:
        "Lugar consagrado às Eumênides e associado aos últimos dias de Édipo.",
    },
    {
      icon: "🌿",
      name: "Bosque de Ares",
      type: "Bosque sagrado",
      image: "/assets/images/mythologies/greek/places/grove-of-ares.png",
      description:
        "Bosque da Cólquida em que o dragão guardava o Velocino de Ouro.",
    },
    {
      icon: "≋",
      name: "Fonte de Ares",
      type: "Fonte sagrada",
      image: "/assets/images/mythologies/greek/places/spring-of-ares.png",
      description:
        "Fonte tebana guardada por um dragão antes da fundação da cidade por Cadmo.",
    },
    {
      icon: "≋",
      name: "Fonte de Pirene",
      type: "Fonte mítica",
      image: "/assets/images/mythologies/greek/places/pirene-fountain.png",
      description:
        "Fonte de Corinto ligada a Pégaso, Belerofonte e às tradições locais.",
    },

    // =====================================================
    // ENTRADAS TRADICIONAIS DO SUBMUNDO
    // =====================================================
    {
      icon: "▼",
      name: "Cabo Tênaro",
      type: "Entrada do submundo",
      image: "/assets/images/mythologies/greek/places/cape-taenarum.png",
      description:
        "Promontório com uma caverna considerada passagem para o Hades.",
    },
    {
      icon: "▼",
      name: "Averno",
      type: "Entrada do submundo",
      image: "/assets/images/mythologies/greek/places/avernus.png",
      description:
        "Lago da tradição greco-romana associado a uma passagem para o reino dos mortos.",
    },
    {
      icon: "▼",
      name: "Necromanteion do Aqueronte",
      type: "Oráculo dos mortos",
      image:
        "/assets/images/mythologies/greek/places/necromanteion-of-acheron.png",
      description:
        "Santuário associado à consulta ritual das almas junto ao rio Aqueronte.",
    },
    {
      icon: "▼",
      name: "Heracleia Pôntica",
      type: "Entrada do submundo",
      image: "/assets/images/mythologies/greek/places/heraclea-pontica.png",
      description:
        "Cidade com uma caverna identificada em algumas tradições como acesso ao Hades.",
    },
    {
      icon: "▼",
      name: "Lerna",
      type: "Passagem ctônica",
      image:
        "/assets/images/mythologies/greek/places/lerna-underworld-gate.png",
      description:
        "Região argiva relacionada a cultos ctônicos e a antigas passagens para o mundo inferior.",
    },
  ],

  cults: [
    {
      icon: "🏛",
      image: "/assets/images/mythologies/greek/cults/cult-of-zeus-olympia.png",
      group: "festivals",
      name: "Culto de Zeus em Olímpia",
      type: "Culto pan-helênico",
      description:
        "Ligado ao santuário de Olímpia e aos Jogos Olímpicos celebrados em honra a Zeus.",
    },
    {
      icon: "🦉",
      image: "/assets/images/mythologies/greek/cults/cult-of-athena-athens.png",
      group: "deity-cults",
      name: "Culto de Atena em Atenas",
      type: "Culto cívico",
      description:
        "Atena era a divindade protetora da cidade e recebia grandes festivais, como as Panateneias.",
    },
    {
      icon: "☀",
      image: "/assets/images/mythologies/greek/cults/oracle-of-delphi.png",
      group: "oracles",
      name: "Oráculo de Delfos",
      type: "Prática profética",
      description:
        "Consultas religiosas eram realizadas por meio da sacerdotisa Pítia, dedicada a Apolo.",
    },
    {
      icon: "🌾",
      image: "/assets/images/mythologies/greek/cults/eleusinian-mysteries.png",
      group: "mysteries",
      name: "Mistérios de Elêusis",
      type: "Culto iniciático",
      description:
        "Ritos secretos dedicados a Deméter e Perséfone relacionados à fertilidade e à vida após a morte.",
    },
    {
      icon: "🍇",
      image: "/assets/images/mythologies/greek/cults/cult-of-dionysus.png",
      group: "deity-cults",
      name: "Culto de Dionísio",
      type: "Festival religioso",
      description:
        "Celebrações marcadas por teatro, música, vinho e experiências de êxtase religioso.",
    },
    {
      icon: "⚕",
      image: "/assets/images/mythologies/greek/cults/cult-of-asclepius.png",
      group: "deity-cults",
      name: "Culto de Asclépio",
      type: "Cura religiosa",
      description:
        "Santuários onde os fiéis buscavam cura por meio de sonhos, rituais e práticas sagradas.",
    },
    {
      icon: "🌙",
      image:
        "/assets/images/mythologies/greek/cults/cult-of-artemis-ephesus.png",
      group: "deity-cults",
      name: "Culto de Ártemis em Éfeso",
      type: "Culto regional",
      description:
        "Importante centro religioso dedicado à deusa da natureza, da caça e da proteção feminina.",
    },
    {
      icon: "⚒",
      image: "/assets/images/mythologies/greek/cults/cult-of-hephaestus.png",
      group: "deity-cults",
      name: "Culto de Hefesto",
      type: "Culto profissional",
      description:
        "Especialmente venerado por artesãos, ferreiros e trabalhadores ligados ao fogo e aos metais.",
    },
    {
      icon: "🌊",
      image: "/assets/images/mythologies/greek/cults/cult-of-poseidon.png",
      group: "deity-cults",
      name: "Culto de Poseidon",
      type: "Culto marítimo",
      description:
        "Muito difundido entre marinheiros e cidades costeiras que buscavam proteção durante as viagens.",
    },
    {
      icon: "💘",
      image: "/assets/images/mythologies/greek/cults/cult-of-aphrodite.png",
      group: "deity-cults",
      name: "Culto de Afrodite",
      type: "Culto à fertilidade",
      description:
        "Relacionava-se ao amor, à beleza, à fertilidade e aos casamentos.",
    },
    {
      icon: "🔥",
      image: "/assets/images/mythologies/greek/cults/cult-of-hestia.png",
      group: "domestic",
      name: "Culto de Héstia",
      type: "Culto doméstico",
      description:
        "Mantinha o fogo sagrado das casas e das cidades como símbolo da unidade familiar e cívica.",
    },
    {
      icon: "🌿",
      image: "/assets/images/mythologies/greek/cults/cult-of-demeter.png",
      group: "deity-cults",
      name: "Culto de Deméter",
      type: "Culto agrícola",
      description:
        "Celebrava a agricultura, as colheitas e a fertilidade da terra por meio de festivais sazonais.",
    },
    {
      icon: "🪽",
      image: "/assets/images/mythologies/greek/cults/cult-of-hermes.png",
      group: "deity-cults",
      name: "Culto de Hermes",
      type: "Culto dos viajantes",
      description:
        "Procurado por comerciantes, viajantes, mensageiros e atletas em busca de proteção.",
    },
    {
      icon: "🏹",
      image: "/assets/images/mythologies/greek/cults/cult-of-apollo-delos.png",
      group: "deity-cults",
      name: "Culto de Apolo em Delos",
      type: "Culto pan-helênico",
      description:
        "Delos era considerada o local de nascimento de Apolo e Ártemis e tornou-se um importante centro religioso.",
    },
    {
      icon: "⚖",
      image: "/assets/images/mythologies/greek/cults/cult-of-themis.png",
      group: "deity-cults",
      name: "Culto de Têmis",
      type: "Culto da justiça",
      description:
        "Associado à ordem divina, às leis e aos juramentos sagrados.",
    },
    {
      icon: "🕊",
      image: "/assets/images/mythologies/greek/cults/cult-of-hera.png",
      group: "deity-cults",
      name: "Culto de Hera",
      type: "Culto matrimonial",
      description:
        "Relacionava-se ao casamento, à família e à proteção das mulheres casadas.",
    },
    {
      icon: "🗿",
      image: "/assets/images/mythologies/greek/cults/hero-cult.png",
      group: "heroic",
      name: "Culto Heroico",
      type: "Culto aos heróis",
      description:
        "Heróis como Héracles, Aquiles e Teseu recebiam sacrifícios e homenagens após sua morte.",
    },
    {
      icon: "🕯",
      image: "/assets/images/mythologies/greek/cults/ancestor-cult.png",
      group: "domestic",
      name: "Culto aos Antepassados",
      type: "Culto doméstico",
      description:
        "As famílias realizavam oferendas periódicas em honra aos ancestrais falecidos.",
    },
    {
      icon: "🐂",
      image: "/assets/images/mythologies/greek/cults/animal-sacrifices.png",
      group: "rituals",
      name: "Sacrifícios Animais",
      type: "Ritual religioso",
      description:
        "Touros, carneiros, cabras e porcos eram sacrificados em cerimônias públicas e privadas.",
    },
    {
      icon: "🍞",
      image: "/assets/images/mythologies/greek/cults/offerings-to-gods.png",
      group: "rituals",
      name: "Oferendas aos Deuses",
      type: "Prática religiosa",
      description:
        "Vinho, azeite, mel, cereais, frutas e incenso eram oferecidos diariamente às divindades.",
    },
    {
      icon: "🏺",
      image: "/assets/images/mythologies/greek/cults/libations.png",
      group: "rituals",
      name: "Libações",
      type: "Ritual religioso",
      description:
        "Derramamento ritual de vinho, leite, mel ou azeite em honra aos deuses e aos mortos.",
    },
    {
      icon: "🎭",
      image: "/assets/images/mythologies/greek/cults/great-dionysia.png",
      group: "festivals",
      name: "Grandes Dionísias",
      type: "Festival religioso",
      description:
        "Importante celebração ateniense dedicada a Dionísio, incluindo concursos teatrais.",
    },
    {
      icon: "🛡",
      image: "/assets/images/mythologies/greek/cults/panathenaea.png",
      group: "festivals",
      name: "Panateneias",
      type: "Festival cívico",
      description:
        "Maior festival de Atenas, realizado em honra à deusa Atena com procissões, competições e sacrifícios.",
    },
    {
      icon: "🏃",
      image: "/assets/images/mythologies/greek/cults/pythian-games.png",
      group: "festivals",
      name: "Jogos Píticos",
      type: "Festival pan-helênico",
      description:
        "Celebrados em Delfos em honra a Apolo, reuniam competições atléticas, musicais e poéticas.",
    },
    {
      icon: "🏆",
      image: "/assets/images/mythologies/greek/cults/isthmian-games.png",
      group: "festivals",
      name: "Jogos Ístmicos",
      type: "Festival pan-helênico",
      description:
        "Competições realizadas no Istmo de Corinto em homenagem a Poseidon.",
    },
    {
      icon: "🦁",
      image: "/assets/images/mythologies/greek/cults/nemean-games.png",
      group: "festivals",
      name: "Jogos Nemeus",
      type: "Festival pan-helênico",
      description:
        "Celebrados em Nemeia em honra a Zeus, integravam o circuito dos grandes jogos gregos.",
    },
  ],

  sources: [
    {
      title: "Teogonia",
      author: "Hesíodo",
      description: "Poema sobre a origem do cosmos e as gerações divinas.",
    },
    {
      title: "Ilíada",
      author: "Homero",
      description: "Narrativa do ciclo troiano centrada na ira de Aquiles.",
    },
    {
      title: "Odisseia",
      author: "Homero",
      description: "Relato da longa viagem de retorno de Odisseu a Ítaca.",
    },
    {
      title: "Hinos Homéricos",
      author: "Autores diversos",
      description: "Conjunto de hinos dedicados a diferentes divindades.",
    },
    {
      title: "Biblioteca",
      author: "Pseudo-Apolodoro",
      description: "Compilação de genealogias e narrativas mitológicas.",
    },
    {
      title: "Tragédias",
      author: "Ésquilo, Sófocles e Eurípides",
      description:
        "Peças que reinterpretam heróis, deuses e conflitos familiares.",
    },
  ],
});

export default GREEK_MYTHOLOGY;
