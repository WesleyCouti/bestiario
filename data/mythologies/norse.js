const NORSE_MYTHOLOGY = Object.freeze({
  slug: "norse",
  name: "Mitologia Nórdica",
  originalName: "Norræn goðafræði",

  presentation: {
    loadingSymbol: "ᛟ",
    ornamentSymbol: "ᛉ",
    navigationIcons: {
      overview: "ᛟ",
      history: "ᚱ",
      cosmology: "ᛉ",
      pantheon: "ᚨ",
      genealogy: "ᛇ",
      heroes: "⚔",
      creatures: "ᚦ",
      places: "ᛗ",
      cults: "ᛒ",
      sources: "▥",
    },
    actions: {
      primary: { label: "Explorar o Panteão", icon: "ᚨ" },
      secondary: { label: "Conhecer a História", icon: "ᚱ" },
    },
    sections: {
      overview: { kicker: "Tradições do Norte", title: "Visão geral" },
      history: {
        kicker: "Memória dos povos nórdicos",
        title: "Origens e formação",
      },
      cosmology: { kicker: "Os nove mundos", title: "Cosmologia" },
      pantheon: {
        kicker: "Aesir, Vanir e gigantes",
        title: "Panteão",
        description:
          "Conheça os deuses, as deusas e as forças ancestrais da tradição nórdica.",
      },
      genealogy: {
        kicker: "Do vazio de Ginnungagap aos deuses de Asgard",
        title: "Árvore genealógica",
        introduction:
          "Acompanhe as linhagens dos seres primordiais, dos Aesir, dos Vanir, dos gigantes, dos filhos de Loki e dos heróis das sagas.",
        pantheonName: "Panteão Nórdico",
        guideDescription:
          "Das origens cósmicas aos deuses, gigantes, monstros e heróis.",
      },
      heroes: {
        kicker: "Guerreiros das sagas",
        title: "Heróis",
        description:
          "Reis, guerreiras, campeões e figuras trágicas preservadas nas sagas do Norte.",
      },
      creatures: {
        kicker: "Seres dos nove mundos",
        title: "Monstros e criaturas",
        description:
          "Criaturas ligadas a Yggdrasil, aos deuses, às sagas e ao destino do Ragnarök.",
      },
      places: {
        kicker: "Geografia dos nove mundos",
        title: "Locais mitológicos",
        description:
          "Reinos, salões, fontes e caminhos que formam o cosmos nórdico.",
      },
      cults: {
        kicker: "Ritos e sociedade",
        title: "Cultos, rituais e festivais",
        description:
          "Práticas religiosas, banquetes, sacrifícios e celebrações dos povos nórdicos.",
      },
      sources: {
        kicker: "Eddas e sagas",
        title: "Fontes e obras",
        description:
          "Textos medievais que preservaram grande parte da tradição mitológica nórdica.",
      },
    },
  },

  theme: {
    variables: {
      "detail-bg": "#020709",
      "detail-bg-soft": "#071419",
      "detail-green": "#8bbfc3",
      "detail-green-strong": "#5d9fa6",
      "detail-green-dark": "#315f66",
      "detail-gold": "#c8a65a",
      "detail-gold-light": "#f0d590",
    },
    assets: {
      "overview-left":
        "../assets/images/mythologies/norse/overview/yggdrasil-left.png",
      "overview-right":
        "../assets/images/mythologies/norse/overview/odin-right.png",
      "history-left":
        "../assets/images/mythologies/norse/history/longship-left.png",
      "history-right":
        "../assets/images/mythologies/norse/history/rune-stone-right.png",
      "cosmology-left":
        "../assets/images/mythologies/norse/cosmology/yggdrasil-left.png",
      "cosmology-right":
        "../assets/images/mythologies/norse/cosmology/asgard-right.png",
      "genealogy-left":
        "../assets/images/mythologies/norse/genealogy/yggdrasil-left.png",
      "genealogy-right":
        "../assets/images/mythologies/norse/genealogy/odin-right.png",
    },
  },

  hero: {
    kicker: "Tradições dos povos germânicos do norte",
    description:
      "Explore os deuses, heróis, criaturas, reinos, cultos e símbolos preservados nas tradições da Escandinávia medieval.",
    image: "../assets/images/mythologies/norse/hero/norse-hero.png",
    imageAlt:
      "Composição artística com deuses, guerreiros e símbolos da mitologia nórdica",
  },

  overview: {
    summary:
      "A mitologia nórdica reúne narrativas sobre a criação do cosmos, os deuses Aesir e Vanir, os gigantes, os heróis e o destino final dos mundos no Ragnarök.",
    facts: [
      {
        label: "Região",
        value: "Escandinávia e norte da Europa",
        icon: "ᛟ",
        image:
          "../assets/images/mythologies/norse/overview/map-scandinavia.png",
      },
      {
        label: "Povos",
        value: "Nórdicos e germânicos",
        icon: "ᚠ",
        image: "../assets/images/mythologies/norse/overview/norse-people.png",
      },
      {
        label: "Tipo",
        value: "Tradição politeísta",
        icon: "ᛉ",
        image: "../assets/images/mythologies/norse/overview/norse-temple.png",
      },
      {
        label: "Idiomas",
        value: "Nórdico antigo e línguas germânicas",
        icon: "ᚱ",
        image: "../assets/images/mythologies/norse/overview/runes.png",
      },
      {
        label: "Período",
        value: "Antiguidade germânica à Idade Média",
        icon: "ᛏ",
        image: "../assets/images/mythologies/norse/overview/viking-warrior.png",
      },
      {
        label: "Fontes",
        value: "Edda Poética, Edda em Prosa e sagas",
        icon: "ᛒ",
        image: "../assets/images/mythologies/norse/overview/eddas.png",
      },
    ],
  },

  history: {
    introduction:
      "As tradições nórdicas foram transmitidas oralmente durante séculos antes de serem registradas na Islândia medieval.",
    periods: [
      {
        period: "aprox. 500 a.C.–400 d.C.",
        title: "Tradições germânicas antigas",
        icon: "ᚠ",
        image:
          "../assets/images/mythologies/norse/history/germanic-origins.png",
        description:
          "Período de formação de divindades, ritos e símbolos compartilhados por diferentes povos germânicos.",
      },
      {
        period: "aprox. 400–750 d.C.",
        title: "Era das Migrações",
        icon: "ᛏ",
        image:
          "../assets/images/mythologies/norse/history/migration-period.png",
        description:
          "Expansão de narrativas heroicas, linhagens régias e tradições guerreiras pelo norte da Europa.",
      },
      {
        period: "aprox. 750–1050 d.C.",
        title: "Era Viking",
        icon: "⚔",
        image: "../assets/images/mythologies/norse/history/viking-age.png",
        description:
          "Período de maior difusão dos cultos nórdicos, das expedições marítimas e das grandes sagas.",
      },
      {
        period: "aprox. 1000–1200 d.C.",
        title: "Cristianização da Escandinávia",
        icon: "✦",
        image:
          "../assets/images/mythologies/norse/history/christianization.png",
        description:
          "Os antigos cultos perderam centralidade, mas muitas histórias foram preservadas pela tradição oral.",
      },
      {
        period: "séculos XIII–XIV",
        title: "Registro das Eddas e sagas",
        icon: "▤",
        image: "../assets/images/mythologies/norse/history/eddas.png",
        description:
          "Autores islandeses registraram poemas, mitos e narrativas heroicas fundamentais para o conhecimento atual.",
      },
    ],
  },

  cosmology: {
    introduction:
      "O cosmos nórdico é organizado em mundos ligados pela árvore Yggdrasil e habitados por deuses, humanos, gigantes, elfos, anões e mortos.",
    realms: [
      {
        icon: "ᛉ",
        image: "../assets/images/mythologies/norse/cosmology/asgard.png",
        name: "Asgard",
        type: "Reino dos Aesir",
        description: "Morada de Odin, Thor, Frigg e outras divindades Aesir.",
      },
      {
        icon: "ᛗ",
        image: "../assets/images/mythologies/norse/cosmology/midgard.png",
        name: "Midgard",
        type: "Mundo dos humanos",
        description: "Reino cercado pelo oceano e protegido dos gigantes.",
      },
      {
        icon: "ᚦ",
        image: "../assets/images/mythologies/norse/cosmology/jotunheim.png",
        name: "Jotunheim",
        type: "Reino dos gigantes",
        description:
          "Terra associada aos jötnar e às forças selvagens da natureza.",
      },
      {
        icon: "ᚨ",
        image: "../assets/images/mythologies/norse/cosmology/vanaheim.png",
        name: "Vanaheim",
        type: "Reino dos Vanir",
        description:
          "Morada das divindades ligadas à fertilidade, prosperidade e natureza.",
      },
      {
        icon: "ᛞ",
        image: "../assets/images/mythologies/norse/cosmology/alfheim.png",
        name: "Alfheim",
        type: "Reino dos elfos luminosos",
        description:
          "Mundo associado aos elfos da luz e à beleza sobrenatural.",
      },
      {
        icon: "ᛃ",
        image: "../assets/images/mythologies/norse/cosmology/svartalfheim.png",
        name: "Svartalfheim",
        type: "Reino dos anões",
        description:
          "Domínio subterrâneo de artesãos responsáveis por objetos divinos.",
      },
      {
        icon: "❄",
        image: "../assets/images/mythologies/norse/cosmology/niflheim.png",
        name: "Niflheim",
        type: "Reino de névoa e gelo",
        description:
          "Mundo primordial associado ao frio, à névoa e às águas profundas.",
      },
      {
        icon: "🔥",
        image: "../assets/images/mythologies/norse/cosmology/muspelheim.png",
        name: "Muspelheim",
        type: "Reino de fogo",
        description:
          "Mundo primordial governado por Surtr e habitado por seres flamejantes.",
      },
      {
        icon: "☾",
        image: "../assets/images/mythologies/norse/cosmology/helheim.png",
        name: "Helheim",
        type: "Reino dos mortos",
        description:
          "Domínio de Hel, destino de muitos mortos que não caíram em batalha.",
      },
    ],
  },

  pantheonGroups: [
    { id: "aesir", label: "Aesir" },
    { id: "vanir", label: "Vanir" },
    { id: "giants", label: "Gigantes" },
    { id: "underworld", label: "Submundo" },
  ],

  deities: [
    {
      slug: "odin",
      group: "aesir",
      symbol: "ᚨ",
      image: "../assets/images/mythologies/norse/pantheon/odin.png",
      imageAlt: "Odin",
      name: "Odin",
      title: "Pai de Todos",
      description: "Deus da sabedoria, da guerra, da poesia e da magia.",
    },
    {
      slug: "frigg",
      group: "aesir",
      symbol: "ᚠ",
      image: "../assets/images/mythologies/norse/pantheon/frigg.png",
      imageAlt: "Frigg",
      name: "Frigg",
      title: "Rainha de Asgard",
      description: "Deusa ligada ao casamento, à maternidade e ao destino.",
    },
    {
      slug: "thor",
      group: "aesir",
      symbol: "ᚦ",
      image: "../assets/images/mythologies/norse/pantheon/thor.png",
      imageAlt: "Thor",
      name: "Thor",
      title: "Deus do trovão",
      description: "Protetor de Midgard e portador do martelo Mjölnir.",
    },
    {
      slug: "sif",
      group: "aesir",
      symbol: "ᛋ",
      image: "../assets/images/mythologies/norse/pantheon/sif.png",
      imageAlt: "Sif",
      name: "Sif",
      title: "Deusa dos campos",
      description: "Divindade associada à fertilidade e aos cabelos dourados.",
    },
    {
      slug: "baldr",
      group: "aesir",
      symbol: "☀",
      image: "../assets/images/mythologies/norse/pantheon/baldr.png",
      imageAlt: "Baldr",
      name: "Baldr",
      title: "Deus da luz",
      description: "Filho de Odin e Frigg, associado à beleza e à pureza.",
    },
    {
      slug: "tyr",
      group: "aesir",
      symbol: "ᛏ",
      image: "../assets/images/mythologies/norse/pantheon/tyr.png",
      imageAlt: "Tyr",
      name: "Tyr",
      title: "Deus da justiça",
      description:
        "Divindade guerreira ligada à lei, à honra e aos juramentos.",
    },
    {
      slug: "heimdall",
      group: "aesir",
      symbol: "ᛉ",
      image: "../assets/images/mythologies/norse/pantheon/heimdall.png",
      imageAlt: "Heimdall",
      name: "Heimdall",
      title: "Guardião de Bifrost",
      description: "Sentinela dos deuses, dotado de sentidos extraordinários.",
    },
    {
      slug: "bragi",
      group: "aesir",
      symbol: "♬",
      image: "../assets/images/mythologies/norse/pantheon/bragi.png",
      imageAlt: "Bragi",
      name: "Bragi",
      title: "Deus da poesia",
      description: "Divindade da poesia, da eloquência e dos escaldos.",
    },
    {
      slug: "idunn",
      group: "aesir",
      symbol: "🍎",
      image: "../assets/images/mythologies/norse/pantheon/idunn.png",
      imageAlt: "Idunn",
      name: "Idunn",
      title: "Guardadora das maçãs",
      description:
        "Deusa responsável pelos frutos que preservam a juventude divina.",
    },
    {
      slug: "vidar",
      group: "aesir",
      symbol: "ᚢ",
      image: "../assets/images/mythologies/norse/pantheon/vidar.png",
      imageAlt: "Vidar",
      name: "Vidar",
      title: "Deus da vingança",
      description:
        "Filho silencioso de Odin destinado a vingar sua morte no Ragnarök.",
    },
    {
      slug: "njord",
      group: "vanir",
      symbol: "⚓",
      image: "../assets/images/mythologies/norse/pantheon/njord.png",
      imageAlt: "Njord",
      name: "Njord",
      title: "Deus do mar e da riqueza",
      description:
        "Divindade Vanir ligada à navegação, aos ventos e à prosperidade.",
    },
    {
      slug: "freyr",
      group: "vanir",
      symbol: "ᛝ",
      image: "../assets/images/mythologies/norse/pantheon/freyr.png",
      imageAlt: "Freyr",
      name: "Freyr",
      title: "Deus da fertilidade",
      description: "Divindade da abundância, da paz, da colheita e da realeza.",
    },
    {
      slug: "freyja",
      group: "vanir",
      symbol: "✧",
      image: "../assets/images/mythologies/norse/pantheon/freyja.png",
      imageAlt: "Freyja",
      name: "Freyja",
      title: "Deusa do amor e da magia",
      description:
        "Divindade ligada ao amor, à guerra, à fertilidade e ao seiðr.",
    },
    {
      slug: "skadi",
      group: "giants",
      symbol: "❄",
      image: "../assets/images/mythologies/norse/pantheon/skadi.png",
      imageAlt: "Skadi",
      name: "Skadi",
      title: "Deusa das montanhas",
      description:
        "Giganta associada à caça, ao inverno e às regiões montanhosas.",
    },
    {
      slug: "loki",
      group: "giants",
      symbol: "🔥",
      image: "../assets/images/mythologies/norse/pantheon/loki.png",
      imageAlt: "Loki",
      name: "Loki",
      title: "O embusteiro",
      description:
        "Figura ambígua ligada à transformação, astúcia e ruptura da ordem.",
    },
    {
      slug: "angrboda",
      group: "giants",
      symbol: "☾",
      image: "../assets/images/mythologies/norse/pantheon/angrboda.png",
      imageAlt: "Angrboda",
      name: "Angrboda",
      title: "Mãe de monstros",
      description:
        "Giganta associada a Loki e mãe de Fenrir, Jörmungandr e Hel.",
    },
    {
      slug: "hel",
      group: "underworld",
      symbol: "☠",
      image: "../assets/images/mythologies/norse/pantheon/hel.png",
      imageAlt: "Hel",
      name: "Hel",
      title: "Senhora dos mortos",
      description: "Governante do reino destinado a muitos mortos.",
    },
    {
      slug: "ran",
      group: "underworld",
      symbol: "≋",
      image: "../assets/images/mythologies/norse/pantheon/ran.png",
      imageAlt: "Ran",
      name: "Ran",
      title: "Senhora dos afogados",
      description: "Divindade marinha que recolhe os que morrem no oceano.",
    },
  ],

  genealogy: {
    groups: [
      { id: "all", label: "Todos" },
      { id: "aesir", label: "Aesir" },
      { id: "vanir", label: "Vanir" },
      { id: "giants", label: "Gigantes" },
      { id: "underworld", label: "Submundo" },
      { id: "heroes", label: "Heróis" },
    ],
    generations: [
      {
        id: "primordial",
        numeral: "I",
        title: "Origens primordiais",
        subtitle: "Seres nascidos no vazio de Ginnungagap",
      },
      {
        id: "first-gods",
        numeral: "II",
        title: "Primeiras linhagens divinas",
        subtitle: "Ancestrais dos deuses e gigantes",
      },
      {
        id: "aesir",
        numeral: "III",
        title: "Deuses Aesir",
        subtitle: "A geração que governa Asgard",
      },
      {
        id: "younger",
        numeral: "IV",
        title: "Descendentes divinos",
        subtitle: "Filhos e aliados dos grandes deuses",
      },
      {
        id: "monsters",
        numeral: "V",
        title: "Filhos de Loki",
        subtitle: "Seres ligados ao destino do Ragnarök",
      },
      {
        id: "heroes",
        numeral: "VI",
        title: "Heróis e reis lendários",
        subtitle: "Linhagens mortais preservadas nas sagas",
      },
    ],
    people: [
      {
        id: "ymir",
        name: "Ymir",
        title: "Gigante primordial",
        symbol: "ᛃ",
        image:
          "../assets/images/mythologies/norse/genealogy/characters/ymir.png",
        group: "giants",
        generation: "primordial",
        parents: [],
        partners: [],
        note: "Ser primordial de cujo corpo os deuses formaram o mundo.",
      },
      {
        id: "audhumla",
        name: "Audhumla",
        title: "Vaca primordial",
        symbol: "ᚢ",
        image:
          "../assets/images/mythologies/norse/genealogy/characters/audhumla.png",
        group: "giants",
        generation: "primordial",
        parents: [],
        partners: [],
        note: "Ser primordial que alimentou Ymir e revelou Buri no gelo.",
      },
      {
        id: "buri",
        name: "Buri",
        title: "Primeiro deus",
        symbol: "ᛒ",
        image:
          "../assets/images/mythologies/norse/genealogy/characters/buri.png",
        group: "aesir",
        generation: "first-gods",
        parents: [],
        partners: [],
        note: "Ancestral da linhagem divina dos Aesir.",
      },
      {
        id: "bor",
        name: "Borr",
        title: "Pai dos primeiros Aesir",
        symbol: "ᛒ",
        image:
          "../assets/images/mythologies/norse/genealogy/characters/bor.png",
        group: "aesir",
        generation: "first-gods",
        parents: ["buri"],
        partners: ["bestla"],
        note: "Filho de Buri e pai de Odin, Vili e Vé.",
      },
      {
        id: "bestla",
        name: "Bestla",
        title: "Giganta ancestral",
        symbol: "ᛃ",
        image:
          "../assets/images/mythologies/norse/genealogy/characters/bestla.png",
        group: "giants",
        generation: "first-gods",
        parents: [],
        partners: ["bor"],
        note: "Giganta e mãe de Odin, Vili e Vé.",
      },
      {
        id: "odin",
        name: "Odin",
        title: "Pai de Todos",
        symbol: "ᚨ",
        image:
          "../assets/images/mythologies/norse/genealogy/characters/odin.png",
        group: "aesir",
        generation: "aesir",
        parents: ["bor", "bestla"],
        partners: ["frigg", "jord"],
        note: "Deus da sabedoria, da poesia, da guerra e da magia.",
      },
      {
        id: "frigg",
        name: "Frigg",
        title: "Rainha de Asgard",
        symbol: "ᚠ",
        image:
          "../assets/images/mythologies/norse/genealogy/characters/frigg.png",
        group: "aesir",
        generation: "aesir",
        parents: [],
        partners: ["odin"],
        note: "Deusa do casamento, da maternidade e do destino.",
      },
      {
        id: "jord",
        name: "Jord",
        title: "Terra personificada",
        symbol: "ᛃ",
        image:
          "../assets/images/mythologies/norse/genealogy/characters/jord.png",
        group: "giants",
        generation: "aesir",
        parents: [],
        partners: ["odin"],
        note: "Giganta que personifica a Terra e mãe de Thor.",
      },
      {
        id: "thor",
        name: "Thor",
        title: "Deus do trovão",
        symbol: "ᚦ",
        image:
          "../assets/images/mythologies/norse/genealogy/characters/thor.png",
        group: "aesir",
        generation: "younger",
        parents: ["odin", "jord"],
        partners: ["sif"],
        note: "Protetor de Midgard e principal inimigo dos gigantes.",
      },
      {
        id: "baldr",
        name: "Baldr",
        title: "Deus da luz",
        symbol: "☀",
        image:
          "../assets/images/mythologies/norse/genealogy/characters/baldr.png",
        group: "aesir",
        generation: "younger",
        parents: ["odin", "frigg"],
        partners: ["nanna"],
        note: "Deus amado cuja morte anuncia o Ragnarök.",
      },
      {
        id: "loki",
        name: "Loki",
        title: "O embusteiro",
        symbol: "🔥",
        image:
          "../assets/images/mythologies/norse/genealogy/characters/loki.png",
        group: "giants",
        generation: "aesir",
        parents: [],
        partners: ["angrboda"],
        note: "Figura ambígua ligada à transformação e ao colapso da ordem divina.",
      },
      {
        id: "angrboda",
        name: "Angrboda",
        title: "Giganta de Jotunheim",
        symbol: "☾",
        image:
          "../assets/images/mythologies/norse/genealogy/characters/angrboda.png",
        group: "giants",
        generation: "aesir",
        parents: [],
        partners: ["loki"],
        note: "Mãe de Fenrir, Jörmungandr e Hel.",
      },
      {
        id: "fenrir",
        name: "Fenrir",
        title: "Lobo monstruoso",
        symbol: "🐺",
        image:
          "../assets/images/mythologies/norse/genealogy/characters/fenrir.png",
        group: "giants",
        generation: "monsters",
        parents: ["loki", "angrboda"],
        partners: [],
        note: "Lobo destinado a matar Odin no Ragnarök.",
      },
      {
        id: "jormungandr",
        name: "Jörmungandr",
        title: "Serpente de Midgard",
        symbol: "🐍",
        image:
          "../assets/images/mythologies/norse/genealogy/characters/jormungandr.png",
        group: "giants",
        generation: "monsters",
        parents: ["loki", "angrboda"],
        partners: [],
        note: "Serpente colossal que circunda Midgard.",
      },
      {
        id: "hel",
        name: "Hel",
        title: "Senhora dos mortos",
        symbol: "☠",
        image:
          "../assets/images/mythologies/norse/genealogy/characters/hel.png",
        group: "underworld",
        generation: "monsters",
        parents: ["loki", "angrboda"],
        partners: [],
        note: "Governante do reino dos mortos.",
      },
      {
        id: "sigurd",
        name: "Sigurd",
        title: "Matador de Fafnir",
        symbol: "⚔",
        image:
          "../assets/images/mythologies/norse/genealogy/characters/sigurd.png",
        group: "heroes",
        generation: "heroes",
        parents: [],
        partners: ["gudrun"],
        note: "Herói que matou o dragão Fafnir e tomou seu tesouro.",
      },
      {
        id: "brynhild",
        name: "Brynhild",
        title: "Valquíria",
        symbol: "🪽",
        image:
          "../assets/images/mythologies/norse/genealogy/characters/brynhild.png",
        group: "heroes",
        generation: "heroes",
        parents: [],
        partners: [],
        note: "Valquíria e figura central do ciclo dos Volsungos.",
      },
    ],
  },

  heroes: [
    {
      slug: "sigurd",
      symbol: "⚔",
      name: "Sigurd",
      title: "Matador de Fafnir",
      image: "../assets/images/mythologies/norse/heroes/sigurd.png",
      description:
        "Herói da linhagem dos Volsungos que derrotou o dragão Fafnir e tomou seu tesouro.",
    },
    {
      slug: "brynhild",
      symbol: "🪽",
      name: "Brynhild",
      title: "Valquíria lendária",
      image: "../assets/images/mythologies/norse/heroes/brynhild.png",
      description: "Guerreira sobrenatural ligada ao ciclo heroico de Sigurd.",
    },
    {
      slug: "beowulf",
      symbol: "🛡",
      name: "Beowulf",
      title: "Herói dos Geatas",
      image: "../assets/images/mythologies/norse/heroes/beowulf.png",
      description:
        "Guerreiro que enfrentou Grendel, a mãe de Grendel e um dragão.",
    },
    {
      slug: "ragnar-lothbrok",
      symbol: "⚔",
      name: "Ragnar Lothbrok",
      title: "Rei e guerreiro lendário",
      image: "../assets/images/mythologies/norse/heroes/ragnar-lothbrok.png",
      description:
        "Figura lendária associada a expedições vikings e a importantes linhagens reais.",
    },
    {
      slug: "lagertha",
      symbol: "🛡",
      name: "Lagertha",
      title: "Guerreira lendária",
      image: "../assets/images/mythologies/norse/heroes/lagertha.png",
      description:
        "Escudeira descrita em tradições medievais como guerreira e governante.",
    },
    {
      slug: "helgi",
      symbol: "⚔",
      name: "Helgi",
      title: "Herói dos poemas édicos",
      image: "../assets/images/mythologies/norse/heroes/helgi.png",
      description:
        "Nome de diferentes heróis ligados a guerras, amores trágicos e valquírias.",
    },
    {
      slug: "gunnar",
      symbol: "♛",
      name: "Gunnar",
      title: "Rei dos Nibelungos",
      image: "../assets/images/mythologies/norse/heroes/gunnar.png",
      description: "Rei ligado ao ciclo de Sigurd, Gudrun e Brynhild.",
    },
    {
      slug: "gudrun",
      symbol: "✦",
      name: "Gudrun",
      title: "Heroína trágica",
      image: "../assets/images/mythologies/norse/heroes/gudrun.png",
      description:
        "Figura central de sagas marcadas por alianças, vinganças e tragédias familiares.",
    },
  ],

  creatures: [
    {
      slug: "fenrir",
      group: "animals",
      symbol: "🐺",
      name: "Fenrir",
      title: "Lobo do Ragnarök",
      image: "../assets/images/mythologies/norse/creatures/fenrir.png",
      description:
        "Lobo monstruoso, filho de Loki, destinado a matar Odin no Ragnarök.",
    },
    {
      slug: "jormungandr",
      group: "dragons",
      symbol: "🐍",
      name: "Jörmungandr",
      title: "Serpente de Midgard",
      image: "../assets/images/mythologies/norse/creatures/jormungandr.png",
      description:
        "Serpente colossal que circunda o mundo dos humanos e rivaliza com Thor.",
    },
    {
      slug: "fafnir",
      group: "dragons",
      symbol: "🐉",
      name: "Fafnir",
      title: "Dragão do ouro amaldiçoado",
      image: "../assets/images/mythologies/norse/creatures/fafnir.png",
      description:
        "Ser transformado em dragão pela ganância e derrotado por Sigurd.",
    },
    {
      slug: "nidhogg",
      group: "dragons",
      symbol: "🐉",
      name: "Nidhogg",
      title: "Dragão das raízes",
      image: "../assets/images/mythologies/norse/creatures/nidhogg.png",
      description: "Serpente ou dragão que rói as raízes de Yggdrasil.",
    },
    {
      slug: "sleipnir",
      group: "animals",
      symbol: "🐎",
      name: "Sleipnir",
      title: "Cavalo de oito patas",
      image: "../assets/images/mythologies/norse/creatures/sleipnir.png",
      description: "Montaria de Odin, capaz de viajar entre os mundos.",
    },
    {
      slug: "ratatoskr",
      group: "animals",
      symbol: "🐿",
      name: "Ratatoskr",
      title: "Mensageiro de Yggdrasil",
      image: "../assets/images/mythologies/norse/creatures/ratatoskr.png",
      description:
        "Esquilo que corre pela árvore do mundo levando insultos entre a águia e Nidhogg.",
    },
    {
      slug: "hugin-e-munin",
      group: "animals",
      symbol: "🐦",
      name: "Hugin e Munin",
      title: "Corvos de Odin",
      image: "../assets/images/mythologies/norse/creatures/hugin-munin.png",
      description: "Corvos que percorrem o mundo e levam notícias a Odin.",
    },
    {
      slug: "valquirias",
      group: "spirits",
      symbol: "🪽",
      name: "Valquírias",
      title: "Escolhedoras dos mortos",
      image: "../assets/images/mythologies/norse/creatures/valkyries.png",
      description:
        "Guerreiras sobrenaturais que selecionam os mortos dignos de Valhalla.",
    },
    {
      slug: "draugr",
      group: "spirits",
      symbol: "☠",
      name: "Draugr",
      title: "Morto-vivo",
      image: "../assets/images/mythologies/norse/creatures/draugr.png",
      description:
        "Cadáver animado que guarda túmulos, tesouros e territórios.",
    },
    {
      slug: "jotnar",
      group: "giants",
      symbol: "ᛃ",
      name: "Jötnar",
      title: "Gigantes",
      image: "../assets/images/mythologies/norse/creatures/jotnar.png",
      description:
        "Seres antigos associados ao caos, à natureza e às forças primordiais.",
    },
    {
      slug: "trolls",
      group: "humanoids",
      symbol: "♜",
      name: "Trolls",
      title: "Seres das montanhas",
      image: "../assets/images/mythologies/norse/creatures/trolls.png",
      description:
        "Criaturas perigosas associadas a montanhas, cavernas e regiões selvagens.",
    },
    {
      slug: "dvergar",
      group: "humanoids",
      symbol: "⚒",
      name: "Dvergar",
      title: "Anões artesãos",
      image: "../assets/images/mythologies/norse/creatures/dwarves.png",
      description:
        "Artesãos subterrâneos responsáveis por armas e tesouros dos deuses.",
    },
  ],

  places: [
    {
      slug: "yggdrasil",
      group: "divine",
      icon: "♧",
      name: "Yggdrasil",
      type: "Árvore cósmica",
      image: "../assets/images/mythologies/norse/places/yggdrasil.png",
      description:
        "Árvore que conecta os diferentes mundos da cosmologia nórdica.",
    },
    {
      slug: "asgard",
      group: "divine",
      icon: "ᛉ",
      name: "Asgard",
      type: "Reino divino",
      image: "../assets/images/mythologies/norse/places/asgard.png",
      description: "Morada dos deuses Aesir.",
    },
    {
      slug: "midgard",
      group: "cities",
      icon: "ᛗ",
      name: "Midgard",
      type: "Mundo humano",
      image: "../assets/images/mythologies/norse/places/midgard.png",
      description: "Reino dos humanos, cercado pela serpente Jörmungandr.",
    },
    {
      slug: "valhalla",
      group: "divine",
      icon: "⚔",
      name: "Valhalla",
      type: "Salão dos guerreiros",
      image: "../assets/images/mythologies/norse/places/valhalla.png",
      description:
        "Salão de Odin onde parte dos guerreiros mortos se prepara para o Ragnarök.",
    },
    {
      slug: "folkvangr",
      group: "divine",
      icon: "✧",
      name: "Fólkvangr",
      type: "Campo de Freyja",
      image: "../assets/images/mythologies/norse/places/folkvangr.png",
      description: "Domínio de Freyja que recebe parte dos mortos em batalha.",
    },
    {
      slug: "bifrost",
      group: "divine",
      icon: "🌈",
      name: "Bifrost",
      type: "Ponte entre mundos",
      image: "../assets/images/mythologies/norse/places/bifrost.png",
      description: "Ponte luminosa que liga Midgard a Asgard.",
    },
    {
      slug: "jotunheim",
      group: "mountains",
      icon: "ᚦ",
      name: "Jotunheim",
      type: "Reino dos gigantes",
      image: "../assets/images/mythologies/norse/places/jotunheim.png",
      description: "Terra montanhosa e selvagem habitada pelos jötnar.",
    },
    {
      slug: "helheim",
      group: "underworld",
      icon: "☠",
      name: "Helheim",
      type: "Reino dos mortos",
      image: "../assets/images/mythologies/norse/places/helheim.png",
      description: "Domínio de Hel e destino de muitos mortos.",
    },
    {
      slug: "niflheim",
      group: "underworld",
      icon: "❄",
      name: "Niflheim",
      type: "Mundo de névoa e gelo",
      image: "../assets/images/mythologies/norse/places/niflheim.png",
      description: "Reino primordial associado ao frio e às águas profundas.",
    },
    {
      slug: "muspelheim",
      group: "divine",
      icon: "🔥",
      name: "Muspelheim",
      type: "Mundo de fogo",
      image: "../assets/images/mythologies/norse/places/muspelheim.png",
      description: "Reino flamejante governado por Surtr.",
    },
    {
      slug: "fonte-de-mimir",
      group: "waters",
      icon: "◉",
      name: "Fonte de Mimir",
      type: "Fonte da sabedoria",
      image: "../assets/images/mythologies/norse/places/mimir-well.png",
      description:
        "Fonte associada ao conhecimento, onde Odin sacrificou um olho.",
    },
  ],

  cults: [
    {
      slug: "culto-de-odin",
      group: "deity-cults",
      icon: "ᚨ",
      name: "Culto de Odin",
      type: "Culto guerreiro e aristocrático",
      image: "../assets/images/mythologies/norse/cults/odin-cult.png",
      description:
        "Práticas relacionadas à guerra, poesia, êxtase, magia e busca por conhecimento.",
    },
    {
      slug: "culto-de-thor",
      group: "deity-cults",
      icon: "ᚦ",
      name: "Culto de Thor",
      type: "Culto popular e protetor",
      image: "../assets/images/mythologies/norse/cults/thor-cult.png",
      description:
        "Culto associado à proteção das comunidades, fertilidade e consagração.",
    },
    {
      slug: "culto-de-freyr",
      group: "deity-cults",
      icon: "ᛝ",
      name: "Culto de Freyr",
      type: "Culto de fertilidade",
      image: "../assets/images/mythologies/norse/cults/freyr-cult.png",
      description:
        "Práticas voltadas à paz, colheita, prosperidade e fertilidade.",
    },
    {
      slug: "culto-de-freyja",
      group: "deity-cults",
      icon: "✧",
      name: "Culto de Freyja",
      type: "Culto do amor e da magia",
      image: "../assets/images/mythologies/norse/cults/freyja-cult.png",
      description:
        "Culto relacionado ao amor, fertilidade, guerra e práticas mágicas.",
    },
    {
      slug: "blot",
      group: "rituals",
      icon: "🔥",
      name: "Blót",
      type: "Sacrifício ritual",
      image: "../assets/images/mythologies/norse/cults/blot.png",
      description:
        "Oferenda de alimentos, bebidas ou animais aos deuses, ancestrais e espíritos.",
    },
    {
      slug: "sumbel",
      group: "rituals",
      icon: "🍺",
      name: "Sumbel",
      type: "Banquete ritual",
      image: "../assets/images/mythologies/norse/cults/sumbel.png",
      description:
        "Cerimônia de brindes, juramentos e recitação de feitos diante da comunidade.",
    },
    {
      slug: "seidr",
      group: "mysteries",
      icon: "☾",
      name: "Seiðr",
      type: "Prática mágica",
      image: "../assets/images/mythologies/norse/cults/seidr.png",
      description:
        "Forma de magia ligada à profecia, alteração do destino e estados de transe.",
    },
    {
      slug: "yule",
      group: "festivals",
      icon: "❄",
      name: "Yule",
      type: "Festival de inverno",
      image: "../assets/images/mythologies/norse/cults/yule.png",
      description:
        "Celebração do meio do inverno associada a banquetes, ancestrais e renovação.",
    },
    {
      slug: "disablot",
      group: "rituals",
      icon: "✦",
      name: "Dísablót",
      type: "Ritual às dísir",
      image: "../assets/images/mythologies/norse/cults/disablot.png",
      description:
        "Sacrifício dedicado a entidades femininas protetoras e ancestrais.",
    },
    {
      slug: "alfablot",
      group: "domestic",
      icon: "ᛞ",
      name: "Álfablót",
      type: "Rito doméstico",
      image: "../assets/images/mythologies/norse/cults/alfablot.png",
      description: "Ritual privado dedicado aos elfos e aos ancestrais.",
    },
  ],

  sources: [
    {
      title: "Edda Poética",
      author: "Compilação anônima",
      description:
        "Coleção de poemas mitológicos e heroicos preservados em manuscritos islandeses.",
    },
    {
      title: "Edda em Prosa",
      author: "Snorri Sturluson",
      description:
        "Obra medieval que reúne narrativas mitológicas e orientações sobre poesia escáldica.",
    },
    {
      title: "Saga dos Volsungos",
      author: "Autor anônimo",
      description:
        "Saga heroica centrada em Sigurd, Brynhild e a linhagem dos Volsungos.",
    },
    {
      title: "Gesta Danorum",
      author: "Saxo Grammaticus",
      description:
        "Crônica medieval que preserva tradições lendárias e heroicas escandinavas.",
    },
    {
      title: "Heimskringla",
      author: "Snorri Sturluson",
      description:
        "Coleção de sagas dos reis da Noruega com referências religiosas e lendárias.",
    },
  ],
});

export default NORSE_MYTHOLOGY;
