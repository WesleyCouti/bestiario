const MYTHOLOGY_LOADERS = Object.freeze({
  greek: () => import("../../data/mythologies/greek.js"),
  norse: () => import("../../data/mythologies/norse.js"),
});

const SELECTORS = Object.freeze({
  loading: "#mythologyLoading",
  error: "#mythologyError",
  page: "#mythologyPage",
  heroKicker: "#mythologyHeroKicker",
  heroTitle: "#mythologyHeroTitle",
  originalName: "#mythologyOriginalName",
  heroDescription: "#mythologyHeroDescription",
  heroMeta: "#mythologyHeroMeta",
  heroImage: "#mythologyHeroImage",
  overviewSummary: "#overviewSummary",
  overviewFacts: "#overviewFacts",
  historyIntroduction: "#historyIntroduction",
  historyTimeline: "#historyTimeline",
  cosmologyIntroduction: "#cosmologyIntroduction",
  cosmologyGrid: "#cosmologyGrid",
  pantheonFilters: "#pantheonFilters",
  pantheonSummary: "#pantheonSummary",
  pantheonLoadMore: "#pantheonLoadMore",
  pantheonGrid: "#pantheonGrid",
  genealogyFilters: "#genealogyFilters",
  genealogyReset: "#genealogyReset",
  genealogySummary: "#genealogySummary",
  genealogyViewport: "#genealogyViewport",
  genealogyCanvas: "#genealogyCanvas",
  genealogyTree: "#genealogyTree",
  genealogyZoomOut: "#genealogyZoomOut",
  genealogyZoomValue: "#genealogyZoomValue",
  genealogyZoomIn: "#genealogyZoomIn",
  genealogyFit: "#genealogyFit",
  genealogyLines: "#genealogyLines",
  genealogyDetails: "#genealogyDetails",
  heroesSummary: "#heroesSummary",
  heroesLoadMore: "#heroesLoadMore",
  heroesGrid: "#heroesGrid",
  creatureFilters: "#creatureFilters",
  creatureSearch: "#creatureSearch",
  creaturesSummary: "#creaturesSummary",
  creaturesLoadMore: "#creaturesLoadMore",
  creaturesGrid: "#creaturesGrid",
  placeFilters: "#placeFilters",
  placeSearch: "#placeSearch",
  placesSummary: "#placesSummary",
  placesLoadMore: "#placesLoadMore",
  placesGrid: "#placesGrid",
  cultFilters: "#cultFilters",
  cultSearch: "#cultSearch",
  cultsSummary: "#cultsSummary",
  cultsLoadMore: "#cultsLoadMore",
  cultsGrid: "#cultsGrid",
  sourcesList: "#sourcesList",
  loadingSymbol: "#mythologyLoadingSymbol",
  overviewKicker: "#overviewKicker",
  overviewTitle: "#overviewTitle",
  historyKicker: "#historyKicker",
  historyTitle: "#historyTitle",
  cosmologyKicker: "#cosmologyKicker",
  cosmologyTitle: "#cosmologyTitle",
  pantheonKicker: "#pantheonKicker",
  pantheonTitle: "#pantheonTitle",
  pantheonDescription: "#pantheonDescription",
  genealogyKicker: "#genealogyKicker",
  genealogyTitle: "#genealogyTitle",
  genealogyIntroduction: "#genealogyIntroduction",
  genealogyPantheonName: "#genealogyPantheonName",
  genealogyGuideDescription: "#genealogyGuideDescription",
  heroesKicker: "#heroesKicker",
  heroesTitle: "#heroesTitle",
  heroesDescription: "#heroesDescription",
  creaturesKicker: "#creaturesKicker",
  creaturesTitle: "#creaturesTitle",
  creaturesDescription: "#creaturesDescription",
  placesKicker: "#placesKicker",
  placesTitle: "#placesTitle",
  placesDescription: "#placesDescription",
  cultsKicker: "#cultsKicker",
  cultsTitle: "#cultsTitle",
  cultsDescription: "#cultsDescription",
  sourcesKicker: "#sourcesKicker",
  sourcesTitle: "#sourcesTitle",
  sourcesDescription: "#sourcesDescription",
  primaryActionIcon: "#primaryActionIcon",
  primaryActionLabel: "#primaryActionLabel",
  secondaryActionIcon: "#secondaryActionIcon",
  secondaryActionLabel: "#secondaryActionLabel",
});

function query(selector) {
  return document.querySelector(selector);
}

function createElement(tagName, className, textContent) {
  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  if (typeof textContent === "string") {
    element.textContent = textContent;
  }

  return element;
}

function appendChildren(parent, ...children) {
  children.filter(Boolean).forEach((child) => parent.appendChild(child));
  return parent;
}

const DETAIL_PAGE_ROUTES = Object.freeze({
  deity: "../mythology-deity.html",
  hero: "../mythology-hero.html",
  creature: "../mythology-creature.html",
  place: "../mythology-place.html",
  cult: "../mythology-cult.html",
});

function createItemSlug(item) {
  if (typeof item?.slug === "string" && item.slug.trim()) {
    return item.slug.trim().toLowerCase();
  }

  return normalizeSearchText(item?.name || "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function createDetailPageUrl(item, itemType, mythologySlug = "greek") {
  const route = DETAIL_PAGE_ROUTES[itemType];

  if (!route) {
    return "";
  }

  const slug = createItemSlug(item);
  const params = new URLSearchParams({
    mythology: mythologySlug,
    slug,
  });

  return `${route}?${params.toString()}`;
}

function createCardRoot(tagName, className, item, itemType, mythologySlug) {
  const element = createElement(tagName, className);

  if (tagName === "a") {
    element.href = createDetailPageUrl(item, itemType, mythologySlug);
    element.setAttribute(
      "aria-label",
      `Abrir página de ${item?.name || "detalhes"}`,
    );
  }

  return element;
}

function getRequestedMythologySlug() {
  const params = new URLSearchParams(window.location.search);
  return params.get("mythology")?.trim().toLowerCase() || "greek";
}

const DEFAULT_PRESENTATION = Object.freeze({
  loadingSymbol: "✦",
  ornamentSymbol: "✦",
  navigationIcons: {
    overview: "◈",
    history: "▤",
    cosmology: "◎",
    pantheon: "✦",
    genealogy: "♧",
    heroes: "⚔",
    creatures: "♞",
    places: "Π",
    cults: "♨",
    sources: "▥",
  },
  actions: {
    primary: { label: "Explorar o Panteão", icon: "✦" },
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
      kicker: "Linhagens divinas e heroicas",
      title: "Árvore genealógica",
      introduction:
        "Acompanhe as principais gerações, uniões e descendências desta tradição.",
      pantheonName: "Panteão",
      guideDescription:
        "Das forças primordiais às linhagens divinas e mortais.",
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
        "Seres sobrenaturais presentes nas narrativas desta mitologia.",
    },
    places: {
      kicker: "Geografia sagrada",
      title: "Locais mitológicos",
      description: "Lugares reais, sagrados e lendários ligados aos mitos.",
    },
    cults: {
      kicker: "Religião e sociedade",
      title: "Cultos, rituais e festivais",
      description:
        "Práticas públicas e privadas associadas às divindades e à comunidade.",
    },
    sources: {
      kicker: "Textos e tradições",
      title: "Fontes e obras",
      description:
        "Obras e registros que preservaram parte desta tradição mitológica.",
    },
  },
  placeholders: {
    creaturesSearch: "Buscar criatura...",
    placesSearch: "Buscar local mitológico...",
    cultsSearch: "Buscar culto, ritual ou festival...",
  },
});

function mergePresentation(mythology) {
  const custom = mythology.presentation || {};

  return {
    ...DEFAULT_PRESENTATION,
    ...custom,
    navigationIcons: {
      ...DEFAULT_PRESENTATION.navigationIcons,
      ...(custom.navigationIcons || {}),
    },
    actions: {
      primary: {
        ...DEFAULT_PRESENTATION.actions.primary,
        ...(custom.actions?.primary || {}),
      },
      secondary: {
        ...DEFAULT_PRESENTATION.actions.secondary,
        ...(custom.actions?.secondary || {}),
      },
    },
    sections: Object.fromEntries(
      Object.entries(DEFAULT_PRESENTATION.sections).map(([key, value]) => [
        key,
        { ...value, ...(custom.sections?.[key] || {}) },
      ]),
    ),
    placeholders: {
      ...DEFAULT_PRESENTATION.placeholders,
      ...(custom.placeholders || {}),
    },
  };
}

function setText(selector, value = "") {
  const element = query(selector);

  if (element) {
    element.textContent = value;
  }
}

function resolveAssetUrl(value) {
  if (typeof value !== "string") {
    return "";
  }

  const trimmedValue = value.trim();

  if (!trimmedValue || trimmedValue === "none") {
    return trimmedValue;
  }

  try {
    return new URL(trimmedValue, document.baseURI).href;
  } catch (error) {
    console.warn("Não foi possível resolver o caminho da imagem:", value, error);
    return trimmedValue;
  }
}

function resolveCssUrls(value) {
  if (typeof value !== "string") {
    return value;
  }

  return value.replace(
    /url\(\s*(["']?)(.*?)\1\s*\)/gi,
    (_match, _quote, assetPath) => {
      const resolvedPath = resolveAssetUrl(assetPath);
      return resolvedPath ? `url("${resolvedPath}")` : "none";
    },
  );
}

function createBackgroundImageValue(imagePath, overlay) {
  const resolvedPath = resolveAssetUrl(imagePath);

  if (!resolvedPath) {
    return "none";
  }

  return `${overlay}, url("${resolvedPath}")`;
}

function applyTheme(mythology) {
  const root = document.documentElement;
  const theme = mythology.theme || {};

  root.dataset.mythology = mythology.slug;
  document.body.dataset.mythology = mythology.slug;

  Object.entries(theme.variables || {}).forEach(([name, value]) => {
    root.style.setProperty(`--${name}`, resolveCssUrls(value));
  });

  Object.entries(theme.assets || {}).forEach(([name, value]) => {
    const resolvedValue = resolveAssetUrl(value);

    root.style.setProperty(
      `--myth-${name}`,
      resolvedValue ? `url("${resolvedValue}")` : "none",
    );
  });
}

function applyPresentation(mythology) {
  const presentation = mergePresentation(mythology);

  setText(SELECTORS.loadingSymbol, presentation.loadingSymbol);

  document.querySelectorAll(".mythology-ornament-symbol").forEach((element) => {
    element.textContent = presentation.ornamentSymbol;
  });

  document.querySelectorAll("[data-nav-icon]").forEach((element) => {
    element.textContent =
      presentation.navigationIcons[element.dataset.navIcon] || "✦";
  });

  setText(SELECTORS.primaryActionIcon, presentation.actions.primary.icon);
  setText(SELECTORS.primaryActionLabel, presentation.actions.primary.label);
  setText(SELECTORS.secondaryActionIcon, presentation.actions.secondary.icon);
  setText(SELECTORS.secondaryActionLabel, presentation.actions.secondary.label);

  const sectionSelectorMap = {
    overview: [SELECTORS.overviewKicker, SELECTORS.overviewTitle],
    history: [SELECTORS.historyKicker, SELECTORS.historyTitle],
    cosmology: [SELECTORS.cosmologyKicker, SELECTORS.cosmologyTitle],
    pantheon: [
      SELECTORS.pantheonKicker,
      SELECTORS.pantheonTitle,
      SELECTORS.pantheonDescription,
    ],
    genealogy: [
      SELECTORS.genealogyKicker,
      SELECTORS.genealogyTitle,
      SELECTORS.genealogyIntroduction,
      SELECTORS.genealogyPantheonName,
      SELECTORS.genealogyGuideDescription,
    ],
    heroes: [
      SELECTORS.heroesKicker,
      SELECTORS.heroesTitle,
      SELECTORS.heroesDescription,
    ],
    creatures: [
      SELECTORS.creaturesKicker,
      SELECTORS.creaturesTitle,
      SELECTORS.creaturesDescription,
    ],
    places: [
      SELECTORS.placesKicker,
      SELECTORS.placesTitle,
      SELECTORS.placesDescription,
    ],
    cults: [
      SELECTORS.cultsKicker,
      SELECTORS.cultsTitle,
      SELECTORS.cultsDescription,
    ],
    sources: [
      SELECTORS.sourcesKicker,
      SELECTORS.sourcesTitle,
      SELECTORS.sourcesDescription,
    ],
  };

  Object.entries(sectionSelectorMap).forEach(([key, selectors]) => {
    const section = presentation.sections[key];
    const values =
      key === "genealogy"
        ? [
            section.kicker,
            section.title,
            section.introduction,
            section.pantheonName,
            section.guideDescription,
          ]
        : [section.kicker, section.title, section.description];

    selectors.forEach((selector, index) =>
      setText(selector, values[index] || ""),
    );
  });

  document.querySelectorAll("[data-placeholder-key]").forEach((input) => {
    input.placeholder =
      presentation.placeholders[input.dataset.placeholderKey] || "";
  });
}

function setDocumentMetadata(mythology) {
  document.title = `${mythology.name} | Bestiário`;

  const description = document.querySelector('meta[name="description"]');

  if (description) {
    description.setAttribute("content", mythology.hero.description);
  }
}

function renderHero(mythology) {
  query(SELECTORS.heroKicker).textContent = mythology.hero.kicker;
  query(SELECTORS.heroTitle).textContent = mythology.name;
  query(SELECTORS.originalName).textContent = mythology.originalName;
  query(SELECTORS.heroDescription).textContent = mythology.hero.description;

  const heroImage = query(SELECTORS.heroImage);
  heroImage.src = resolveAssetUrl(mythology.hero.image);
  heroImage.alt = mythology.hero.imageAlt || "";

  const facts = mythology.overview.facts.slice(0, 3);
  const metaContainer = query(SELECTORS.heroMeta);
  metaContainer.replaceChildren();

  facts.forEach((fact) => {
    const item = createElement("div", "myth-detail-meta-item");
    item.style.setProperty("--meta-icon", `"${fact.icon || "✦"}"`);
    const label = createElement("span", null, fact.label);
    const value = createElement("strong", null, fact.value);

    appendChildren(item, label, value);
    metaContainer.appendChild(item);
  });
}

function renderOverview(mythology) {
  query(SELECTORS.overviewSummary).textContent = mythology.overview.summary;

  const factsContainer = query(SELECTORS.overviewFacts);
  factsContainer.replaceChildren();

  mythology.overview.facts.forEach((fact) => {
    const item = createElement("div", "myth-detail-fact");
    item.style.setProperty("--fact-icon", `"${fact.icon || "✦"}"`);

    if (fact.image) {
      const resolvedImage = resolveAssetUrl(fact.image);

      item.style.setProperty("--fact-image", `url("${resolvedImage}")`);
      item.style.backgroundImage = createBackgroundImageValue(
        fact.image,
        "linear-gradient(180deg, rgba(2, 8, 5, 0.14), rgba(2, 8, 5, 0.68))",
      );
      item.classList.add("has-custom-image");
    }

    const term = createElement("dt", null, fact.label);
    const description = createElement("dd", null, fact.value);

    appendChildren(item, term, description);
    factsContainer.appendChild(item);
  });
}

function renderHistory(mythology) {
  query(SELECTORS.historyIntroduction).textContent =
    mythology.history.introduction;

  const timeline = query(SELECTORS.historyTimeline);
  timeline.replaceChildren();

  mythology.history.periods.forEach((period, index) => {
    const article = createElement("article", "myth-detail-timeline-item");
    article.dataset.index = String(index + 1);
    article.style.setProperty(
      "--history-card-image",
      period.image ? `url("${resolveAssetUrl(period.image)}")` : "none",
    );
    article.style.setProperty("--history-card-icon", `"${period.icon || "✦"}"`);

    const periodLabel = createElement(
      "span",
      "myth-detail-timeline-period",
      period.period,
    );
    const title = createElement("h3", null, period.title);
    const description = createElement("p", null, period.description);

    appendChildren(article, periodLabel, title, description);
    timeline.appendChild(article);
  });
}

function createInfoCard(
  item,
  variant = "",
  itemType = "",
  mythologySlug = "greek",
) {
  const className = ["myth-detail-info-card", variant]
    .filter(Boolean)
    .join(" ");

  const isLinked = Boolean(itemType && DETAIL_PAGE_ROUTES[itemType]);
  const card = createCardRoot(
    isLinked ? "a" : "article",
    className,
    item,
    itemType,
    mythologySlug,
  );

  if (isLinked) {
    card.classList.add("is-clickable");
  }

  if (typeof item.image === "string" && item.image.trim()) {
    const imageUrl = item.image.trim();

    card.style.setProperty(
      "--info-card-image",
      `url("${resolveAssetUrl(imageUrl)}")`,
    );
    card.classList.add("has-background-image");
  }

  const icon = createElement(
    "span",
    "myth-detail-info-card-icon",
    item.icon || "✦",
  );

  icon.setAttribute("aria-hidden", "true");

  const type = createElement(
    "span",
    "myth-detail-info-card-type",
    item.type || "",
  );

  const title = createElement("h3", null, item.name);
  const description = createElement("p", null, item.description);

  appendChildren(card, icon, type, title, description);

  return card;
}

function renderInfoCards(items, selector) {
  const container = query(selector);
  container.replaceChildren();

  const cardVariant =
    selector === SELECTORS.placesGrid ? "myth-detail-place-card" : "";

  items.forEach((item) => {
    container.appendChild(createInfoCard(item, cardVariant));
  });
}

function createEntityCard(entity, itemType = "", mythologySlug = "greek") {
  const isLinked = Boolean(itemType && DETAIL_PAGE_ROUTES[itemType]);
  const card = createCardRoot(
    isLinked ? "a" : "article",
    "myth-detail-entity-card",
    entity,
    itemType,
    mythologySlug,
  );

  if (isLinked) {
    card.classList.add("is-clickable");
  }

  const visual = createElement("div", "myth-detail-entity-visual");

  if (entity.image) {
    const image = createElement("img", "myth-detail-entity-image");

    image.src = resolveAssetUrl(entity.image);
    image.alt = entity.imageAlt || `Representação de ${entity.name}`;
    image.width = 360;
    image.height = 420;
    image.loading = "lazy";
    image.decoding = "async";

    image.addEventListener("error", () => {
      visual.classList.add("has-image-error");
      image.remove();

      const fallbackSymbol = createElement(
        "span",
        "myth-detail-entity-symbol",
        entity.symbol || "✦",
      );

      fallbackSymbol.setAttribute("aria-hidden", "true");
      visual.appendChild(fallbackSymbol);
    });

    visual.classList.add("has-image");
    visual.appendChild(image);
  } else {
    const symbol = createElement(
      "span",
      "myth-detail-entity-symbol",
      entity.symbol || "✦",
    );

    symbol.setAttribute("aria-hidden", "true");
    visual.appendChild(symbol);
  }

  const content = createElement("div", "myth-detail-entity-content");
  const title = createElement("h3", null, entity.name);
  const subtitle = createElement(
    "span",
    "myth-detail-entity-title",
    entity.title,
  );
  const description = createElement("p", null, entity.description);

  appendChildren(content, title, subtitle, description);
  appendChildren(card, visual, content);

  return card;
}

function renderEntityCards(items, selector) {
  const container = query(selector);
  container.replaceChildren();

  items.forEach((item) => {
    container.appendChild(createEntityCard(item));
  });
}

/* ===================================================== HERÓIS —
RENDERIZAÇÃO PROGRESSIVA
===================================================== */

const HERO_PAGE_SIZE = 12;

function renderHeroes(mythology) {
  const section = query("#herois");
  const summary = query(SELECTORS.heroesSummary);
  const loadMore = query(SELECTORS.heroesLoadMore);
  const grid = query(SELECTORS.heroesGrid);

  if (!section || !summary || !loadMore || !grid) {
    return;
  }

  const heroes = Array.isArray(mythology.heroes) ? mythology.heroes : [];

  const state = {
    visibleCount: HERO_PAGE_SIZE,
    hasRendered: false,
  };

  grid.replaceChildren();

  function updateGrid() {
    const visible = heroes.slice(0, state.visibleCount);
    const fragment = document.createDocumentFragment();

    visible.forEach((hero) => {
      fragment.appendChild(createEntityCard(hero, "hero", mythology.slug));
    });

    grid.replaceChildren(fragment);
    state.hasRendered = true;

    summary.textContent =
      heroes.length === 0
        ? "Nenhum herói cadastrado."
        : `${visible.length} de ${heroes.length} heróis exibidos.`;

    loadMore.hidden = visible.length >= heroes.length;
  }

  loadMore.addEventListener("click", () => {
    state.visibleCount += HERO_PAGE_SIZE;
    updateGrid();
  });

  const renderWhenNearViewport = () => {
    if (!state.hasRendered) {
      updateGrid();
    }
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          renderWhenNearViewport();
          observer.disconnect();
        }
      },
      { rootMargin: "700px 0px" },
    );

    observer.observe(section);
  } else {
    renderWhenNearViewport();
  }
}

/* ===================================================== CRIATURAS —
FILTRO, BUSCA E RENDERIZAÇÃO PROGRESSIVA
===================================================== */

const CREATURE_PAGE_SIZE = 12;

const CREATURE_GROUPS = Object.freeze([
  { id: "all", label: "Todas" },
  {
    id: "monsters",
    label: "Monstros",
  },
  { id: "dragons", label: "Dragões e serpentes" },
  { id: "giants", label: "Gigantes" },
  { id: "marine", label: "Marinhas" },
  { id: "spirits", label: "Espíritos e ninfas" },
  {
    id: "animals",
    label: "Animais lendários",
  },
  { id: "humanoids", label: "Humanoides" },
]);

function normalizeSearchText(value = "") {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function getCreatureGroup(creature) {
  if (creature.group) {
    return creature.group;
  }

  const text = normalizeSearchText(
    `${creature.name} ${creature.title} ${creature.description}`,
  );

  if (/dragao|serpente|hidra|piton|ladon|equidna|ofion|delfina/.test(text))
    return "dragons";
  if (/gigante|ciclope|hecatonquiro|geg|aloada|talos/.test(text))
    return "giants";
  if (
    /mar|oceano|aquatic|tritao|hipocampo|cila|caribdis|ceto|cetus|sereia|nereida|ictiocentauro|delfim/.test(
      text,
    )
  )
    return "marine";
  if (
    /ninfa|espirito|daimon|eidolon|sombra|oneiroi|morfeu|fantaso|keres|erinia|empusa|mormo|gelo|driade|naiade|oreade|oceanide|hamadriade|aura|anemoi/.test(
      text,
    )
  )
    return "spirits";
  if (
    /cavalo|cao|raposa|leao|javali|corca|ave|touro|aguia|formiga|pegaso|arion|balios|xanto|celeris|lelape|ortro|cerbero|grifo|fenix/.test(
      text,
    )
  )
    return "animals";
  if (
    /centauro|satiro|sileno|harpia|gorgona|medusa|minotauro|lamia|dracaena|cabiro|dactilo|curete|coribante|telquine|cecrops|erictonio/.test(
      text,
    )
  )
    return "humanoids";

  return "monsters";
}

function renderCreatures(mythology) {
  const section = query("#criaturas");
  const filters = query(SELECTORS.creatureFilters);
  const search = query(SELECTORS.creatureSearch);
  const summary = query(SELECTORS.creaturesSummary);
  const loadMore = query(SELECTORS.creaturesLoadMore);
  const grid = query(SELECTORS.creaturesGrid);

  if (!section || !filters || !search || !summary || !loadMore || !grid) {
    return;
  }

  const creatures = mythology.creatures.map((creature) => ({
    ...creature,
    group: getCreatureGroup(creature),
  }));

  const state = {
    selectedGroup: "all",
    searchTerm: "",
    visibleCount: CREATURE_PAGE_SIZE,
    hasRendered: false,
  };

  filters.replaceChildren();

  CREATURE_GROUPS.forEach((group, index) => {
    const count =
      group.id === "all"
        ? creatures.length
        : creatures.filter((creature) => creature.group === group.id).length;

    if (count === 0) return;

    filters.appendChild(
      createFilterButton(`${group.label} (${count})`, group.id, index === 0),
    );
  });

  function getFilteredCreatures() {
    return creatures.filter((creature) => {
      const matchesGroup =
        state.selectedGroup === "all" || creature.group === state.selectedGroup;

      const searchableText = normalizeSearchText(
        `${creature.name} ${creature.title} ${creature.description}`,
      );

      return matchesGroup && searchableText.includes(state.searchTerm);
    });
  }

  function updateGrid() {
    const filtered = getFilteredCreatures();
    const visible = filtered.slice(0, state.visibleCount);
    const fragment = document.createDocumentFragment();

    visible.forEach((creature) => {
      fragment.appendChild(
        createEntityCard(creature, "creature", mythology.slug),
      );
    });

    grid.replaceChildren(fragment);
    state.hasRendered = true;

    summary.textContent =
      filtered.length === 0
        ? "Nenhuma criatura encontrada."
        : `${Math.min(visible.length, filtered.length)} de ${filtered.length} criaturas exibidas.`;

    loadMore.hidden = visible.length >= filtered.length;
  }

  function resetAndRender() {
    state.visibleCount = CREATURE_PAGE_SIZE;
    updateGrid();
  }

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-group]");
    if (!button) return;

    state.selectedGroup = button.dataset.group;

    filters.querySelectorAll("button[data-group]").forEach((currentButton) => {
      const isActive = currentButton === button;
      currentButton.classList.toggle("is-active", isActive);
      currentButton.setAttribute("aria-pressed", String(isActive));
    });

    resetAndRender();
  });

  let searchTimer = 0;
  search.addEventListener("input", () => {
    window.clearTimeout(searchTimer);
    searchTimer = window.setTimeout(() => {
      state.searchTerm = normalizeSearchText(search.value);
      resetAndRender();
    }, 180);
  });

  loadMore.addEventListener("click", () => {
    state.visibleCount += CREATURE_PAGE_SIZE;
    updateGrid();
  });

  const renderWhenNearViewport = () => {
    if (!state.hasRendered) updateGrid();
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          renderWhenNearViewport();
          observer.disconnect();
        }
      },
      { rootMargin: "700px 0px" },
    );

    observer.observe(section);
  } else {
    renderWhenNearViewport();
  }
}

/* ===================================================== LOCAIS MITOLÓGICOS —
FILTRO, BUSCA E RENDERIZAÇÃO PROGRESSIVA
===================================================== */

const PLACE_PAGE_SIZE = 9;

const PLACE_GROUPS = Object.freeze([
  { id: "all", label: "Todos" },
  { id: "divine", label: "Divinos e sagrados" },
  { id: "cities", label: "Cidades e reinos" },
  { id: "mountains", label: "Montanhas" },
  { id: "waters", label: "Águas e fontes" },
  { id: "nature", label: "Bosques e natureza" },
  { id: "underworld", label: "Submundo e sombrios" },
  { id: "islands", label: "Ilhas e costas" },
]);

function getPlaceGroup(place) {
  if (typeof place.group === "string" && place.group.trim()) {
    return place.group.trim();
  }

  const text = normalizeSearchText(
    `${place.name || ""} ${place.type || ""} ${place.description || ""}`,
  );

  if (
    /submundo|hades|tartaro|inferno|mortos|necromanteion|aqueronte|estige|cocito|flegetonte|leto|averno|sombrio|tenebroso/.test(
      text,
    )
  ) {
    return "underworld";
  }

  if (
    /monte|montanha|pico|parnaso|olimpo|helicon|citeron|erimanto|pelion|otris|etna|caucaso|nisa|licaion/.test(
      text,
    )
  ) {
    return "mountains";
  }

  if (
    /fonte|lago|rio|mar|oceano|estreito|pantano|nascente|agua|cascata|hipocrene|aganipe|pirene|estinfalo|lerna/.test(
      text,
    )
  ) {
    return "waters";
  }

  if (/bosque|floresta|jardim|vale|caverna|gruta|natureza/.test(text)) {
    return "nature";
  }

  if (
    /ilha|cabo|costa|porto|estreito|maritimo|creta|delos|naxos|itaca|samos|rodos|tenaro/.test(
      text,
    )
  ) {
    return "islands";
  }

  if (
    /cidade|reino|polis|palacio|fortaleza|tebas|atenas|esparta|troia|micenas|arg ?os|corinto|tirinto|pilos|calidao|orcomeno|feras|trezena|licia|frigia|heracleia/.test(
      text,
    )
  ) {
    return "cities";
  }

  return "divine";
}

function renderPlaces(mythology) {
  const section = query("#locais");
  const filters = query(SELECTORS.placeFilters);
  const search = query(SELECTORS.placeSearch);
  const summary = query(SELECTORS.placesSummary);
  const loadMore = query(SELECTORS.placesLoadMore);
  const grid = query(SELECTORS.placesGrid);

  if (!section || !filters || !search || !summary || !loadMore || !grid) {
    return;
  }

  const sourcePlaces = Array.isArray(mythology.places) ? mythology.places : [];
  const places = sourcePlaces.map((place) => ({
    ...place,
    group: getPlaceGroup(place),
  }));

  const state = {
    selectedGroup: "all",
    searchTerm: "",
    visibleCount: PLACE_PAGE_SIZE,
    hasRendered: false,
  };

  filters.replaceChildren();
  grid.replaceChildren();

  PLACE_GROUPS.forEach((group) => {
    const count =
      group.id === "all"
        ? places.length
        : places.filter((place) => place.group === group.id).length;

    if (count === 0) {
      return;
    }

    filters.appendChild(
      createFilterButton(
        `${group.label} (${count})`,
        group.id,
        group.id === "all",
      ),
    );
  });

  function getFilteredPlaces() {
    return places.filter((place) => {
      const matchesGroup =
        state.selectedGroup === "all" || place.group === state.selectedGroup;

      const searchableText = normalizeSearchText(
        `${place.name || ""} ${place.type || ""} ${place.description || ""}`,
      );

      return matchesGroup && searchableText.includes(state.searchTerm);
    });
  }

  function updateGrid() {
    const filtered = getFilteredPlaces();
    const visible = filtered.slice(0, state.visibleCount);
    const fragment = document.createDocumentFragment();

    visible.forEach((place) => {
      const card = createInfoCard(
        place,
        "myth-detail-place-card",
        "place",
        mythology.slug,
      );
      card.dataset.group = place.group;
      fragment.appendChild(card);
    });

    grid.replaceChildren(fragment);
    state.hasRendered = true;

    if (filtered.length === 0) {
      summary.textContent = "Nenhum local mitológico encontrado.";
    } else {
      summary.textContent = `${visible.length} de ${filtered.length} locais exibidos.`;
    }

    loadMore.hidden = visible.length >= filtered.length;
  }

  function resetAndRender() {
    state.visibleCount = PLACE_PAGE_SIZE;
    updateGrid();
  }

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-group]");

    if (!button) {
      return;
    }

    state.selectedGroup = button.dataset.group || "all";

    filters.querySelectorAll("button[data-group]").forEach((currentButton) => {
      const isActive = currentButton === button;
      currentButton.classList.toggle("is-active", isActive);
      currentButton.setAttribute("aria-pressed", String(isActive));
    });

    resetAndRender();
  });

  let searchTimer = 0;

  search.addEventListener("input", () => {
    window.clearTimeout(searchTimer);

    searchTimer = window.setTimeout(() => {
      state.searchTerm = normalizeSearchText(search.value);
      resetAndRender();
    }, 180);
  });

  loadMore.addEventListener("click", () => {
    state.visibleCount += PLACE_PAGE_SIZE;
    updateGrid();
  });

  const renderWhenNearViewport = () => {
    if (!state.hasRendered) {
      updateGrid();
    }
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          renderWhenNearViewport();
          observer.disconnect();
        }
      },
      { rootMargin: "700px 0px" },
    );

    observer.observe(section);
  } else {
    renderWhenNearViewport();
  }
}

/* ===================================================== CULTOS, RITUAIS E FESTIVAIS —
FILTRO, BUSCA, IMAGENS E RENDERIZAÇÃO PROGRESSIVA
===================================================== */

const CULT_PAGE_SIZE = 9;

const CULT_GROUPS = Object.freeze([
  { id: "all", label: "Todos" },
  { id: "deity-cults", label: "Cultos divinos" },
  { id: "oracles", label: "Oráculos e profecia" },
  { id: "mysteries", label: "Mistérios e iniciação" },
  { id: "festivals", label: "Festivais e jogos" },
  { id: "rituals", label: "Rituais e oferendas" },
  { id: "domestic", label: "Domésticos e ancestrais" },
  { id: "heroic", label: "Cultos heroicos" },
]);

function getCultGroup(cult) {
  if (typeof cult.group === "string" && cult.group.trim()) {
    return cult.group.trim();
  }

  const text = normalizeSearchText(
    `${cult.name || ""} ${cult.type || ""} ${cult.description || ""}`,
  );

  if (/oraculo|profec|pitia|delfos|adivinh/.test(text)) {
    return "oracles";
  }

  if (/misterio|iniciatic|iniciacao|eleusis|secreto/.test(text)) {
    return "mysteries";
  }

  if (
    /festival|jogos|panateneia|dionisia|piticos|istmicos|nemeus|olimpicos|competicao|teatro/.test(
      text,
    )
  ) {
    return "festivals";
  }

  if (/sacrificio|oferenda|libacao|ritual|incenso/.test(text)) {
    return "rituals";
  }

  if (/domestico|antepassado|ancestral|familia|lar|hestia/.test(text)) {
    return "domestic";
  }

  if (/heroico|heroi|heracles|aquiles|teseu/.test(text)) {
    return "heroic";
  }

  return "deity-cults";
}

function renderCults(mythology) {
  const section = query("#cultos");
  const filters = query(SELECTORS.cultFilters);
  const search = query(SELECTORS.cultSearch);
  const summary = query(SELECTORS.cultsSummary);
  const loadMore = query(SELECTORS.cultsLoadMore);
  const grid = query(SELECTORS.cultsGrid);

  if (!section || !filters || !search || !summary || !loadMore || !grid) {
    return;
  }

  const sourceCults = Array.isArray(mythology.cults) ? mythology.cults : [];
  const cults = sourceCults.map((cult) => ({
    ...cult,
    group: getCultGroup(cult),
  }));

  const state = {
    selectedGroup: "all",
    searchTerm: "",
    visibleCount: CULT_PAGE_SIZE,
    hasRendered: false,
  };

  filters.replaceChildren();
  grid.replaceChildren();

  CULT_GROUPS.forEach((group) => {
    const count =
      group.id === "all"
        ? cults.length
        : cults.filter((cult) => cult.group === group.id).length;

    if (count === 0) {
      return;
    }

    filters.appendChild(
      createFilterButton(
        `${group.label} (${count})`,
        group.id,
        group.id === "all",
      ),
    );
  });

  function getFilteredCults() {
    return cults.filter((cult) => {
      const matchesGroup =
        state.selectedGroup === "all" || cult.group === state.selectedGroup;

      const searchableText = normalizeSearchText(
        `${cult.name || ""} ${cult.type || ""} ${cult.description || ""}`,
      );

      return matchesGroup && searchableText.includes(state.searchTerm);
    });
  }

  function updateGrid() {
    const filtered = getFilteredCults();
    const visible = filtered.slice(0, state.visibleCount);
    const fragment = document.createDocumentFragment();

    visible.forEach((cult) => {
      const card = createInfoCard(
        cult,
        "myth-detail-cult-card",
        "cult",
        mythology.slug,
      );
      card.dataset.group = cult.group;
      fragment.appendChild(card);
    });

    grid.replaceChildren(fragment);
    state.hasRendered = true;

    summary.textContent =
      filtered.length === 0
        ? "Nenhum culto, ritual ou festival encontrado."
        : `${visible.length} de ${filtered.length} cultos, rituais e festivais exibidos.`;

    loadMore.hidden = visible.length >= filtered.length;
  }

  function resetAndRender() {
    state.visibleCount = CULT_PAGE_SIZE;
    updateGrid();
  }

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-group]");

    if (!button) {
      return;
    }

    state.selectedGroup = button.dataset.group || "all";

    filters.querySelectorAll("button[data-group]").forEach((currentButton) => {
      const isActive = currentButton === button;
      currentButton.classList.toggle("is-active", isActive);
      currentButton.setAttribute("aria-pressed", String(isActive));
    });

    resetAndRender();
  });

  let searchTimer = 0;

  search.addEventListener("input", () => {
    window.clearTimeout(searchTimer);

    searchTimer = window.setTimeout(() => {
      state.searchTerm = normalizeSearchText(search.value);
      resetAndRender();
    }, 180);
  });

  loadMore.addEventListener("click", () => {
    state.visibleCount += CULT_PAGE_SIZE;
    updateGrid();
  });

  const renderWhenNearViewport = () => {
    if (!state.hasRendered) {
      updateGrid();
    }
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          renderWhenNearViewport();
          observer.disconnect();
        }
      },
      { rootMargin: "700px 0px" },
    );

    observer.observe(section);
  } else {
    renderWhenNearViewport();
  }
}

function createFilterButton(label, group, active, extraClass = "") {
  const className = ["myth-detail-filter-button", extraClass]
    .filter(Boolean)
    .join(" ");

  const button = createElement("button", className, label);
  button.type = "button";
  button.dataset.group = group;
  button.classList.toggle("is-active", active);
  button.setAttribute("aria-pressed", String(active));

  return button;
}

const PANTHEON_PAGE_SIZE = 12;

function renderPantheon(mythology) {
  const section = query("#panteao");
  const filtersContainer = query(SELECTORS.pantheonFilters);
  const summary = query(SELECTORS.pantheonSummary);
  const loadMore = query(SELECTORS.pantheonLoadMore);
  const grid = query(SELECTORS.pantheonGrid);

  if (!section || !filtersContainer || !summary || !loadMore || !grid) {
    return;
  }

  const deities = Array.isArray(mythology.deities) ? mythology.deities : [];

  const state = {
    selectedGroup: "all",
    visibleCount: PANTHEON_PAGE_SIZE,
    hasRendered: false,
  };

  filtersContainer.replaceChildren();
  grid.replaceChildren();

  filtersContainer.appendChild(
    createFilterButton(`Todos (${deities.length})`, "all", true),
  );

  mythology.pantheonGroups.forEach((group) => {
    const count = deities.filter((deity) => deity.group === group.id).length;

    if (count === 0) {
      return;
    }

    filtersContainer.appendChild(
      createFilterButton(`${group.label} (${count})`, group.id, false),
    );
  });

  function getFilteredDeities() {
    if (state.selectedGroup === "all") {
      return deities;
    }

    return deities.filter((deity) => deity.group === state.selectedGroup);
  }

  function updateGrid() {
    const filtered = getFilteredDeities();
    const visible = filtered.slice(0, state.visibleCount);
    const fragment = document.createDocumentFragment();

    visible.forEach((deity) => {
      const card = createEntityCard(deity, "deity", mythology.slug);
      card.dataset.group = deity.group;
      fragment.appendChild(card);
    });

    grid.replaceChildren(fragment);
    state.hasRendered = true;

    summary.textContent =
      filtered.length === 0
        ? "Nenhuma divindade encontrada neste grupo."
        : `${visible.length} de ${filtered.length} divindades exibidas.`;

    loadMore.hidden = visible.length >= filtered.length;
  }

  function resetAndRender() {
    state.visibleCount = PANTHEON_PAGE_SIZE;
    updateGrid();
  }

  filtersContainer.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-group]");

    if (!button) {
      return;
    }

    state.selectedGroup = button.dataset.group;

    filtersContainer
      .querySelectorAll("button[data-group]")
      .forEach((currentButton) => {
        const isActive = currentButton === button;
        currentButton.classList.toggle("is-active", isActive);
        currentButton.setAttribute("aria-pressed", String(isActive));
      });

    resetAndRender();
  });

  loadMore.addEventListener("click", () => {
    state.visibleCount += PANTHEON_PAGE_SIZE;
    updateGrid();
  });

  const renderWhenNearViewport = () => {
    if (!state.hasRendered) {
      updateGrid();
    }
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          renderWhenNearViewport();
          observer.disconnect();
        }
      },
      { rootMargin: "700px 0px" },
    );

    observer.observe(section);
  } else {
    renderWhenNearViewport();
  }
}

/* ===================================================== GENEALOGIA —
ÁRVORE COMPLETA E INTERATIVA
===================================================== */

function getGenealogyPerson(genealogy, personId) {
  return genealogy.people.find((person) => person.id === personId);
}

function getGenealogyRelations(people, selectedPerson) {
  const children = people.filter((person) =>
    person.parents.includes(selectedPerson.id),
  );

  return {
    parents: selectedPerson.parents
      .map((id) => people.find((person) => person.id === id))
      .filter(Boolean),
    partners: selectedPerson.partners
      .map((id) => people.find((person) => person.id === id))
      .filter(Boolean),
    children,
  };
}

function createGenealogyRelationGroup(title, people) {
  const group = createElement("div", "myth-detail-genealogy-relation-group");
  const heading = createElement("strong", null, title);
  const list = createElement("div", "myth-detail-genealogy-relation-list");

  if (people.length === 0) {
    list.appendChild(createElement("span", "is-empty", "Não registrado"));
  } else {
    people.forEach((person) => {
      const button = createElement("button", null, person.name);
      button.type = "button";
      button.dataset.openPerson = person.id;
      list.appendChild(button);
    });
  }

  appendChildren(group, heading, list);
  return group;
}

function updateGenealogyDetails(genealogy, selectedPerson) {
  const details = query(SELECTORS.genealogyDetails);
  details.replaceChildren();

  const symbol = createElement("div", "myth-detail-genealogy-details-symbol");
  symbol.setAttribute("aria-hidden", "true");

  const fallbackSymbol = createElement(
    "span",
    "myth-detail-genealogy-details-fallback",
    selectedPerson.symbol || "✦",
  );

  function showDetailsFallback() {
    symbol.classList.remove("has-image");
    symbol.replaceChildren(fallbackSymbol);
  }

  if (selectedPerson.image) {
    const image = createElement("img", "myth-detail-genealogy-details-image");

    image.src = resolveAssetUrl(selectedPerson.image);
    image.alt = "";
    image.width = 140;
    image.height = 140;
    image.loading = "lazy";
    image.decoding = "async";

    image.addEventListener("load", () => {
      symbol.classList.add("has-image");
    });

    image.addEventListener("error", showDetailsFallback, {
      once: true,
    });

    symbol.appendChild(image);
  } else {
    showDetailsFallback();
  }

  const content = createElement("div");
  const type = createElement(
    "span",
    null,
    selectedPerson.title || "Personagem mitológico",
  );
  const title = createElement("h3", null, selectedPerson.name);
  const description = createElement(
    "p",
    null,
    selectedPerson.note || "Personagem pertencente a esta tradição mitológica.",
  );

  const relations = getGenealogyRelations(genealogy.people, selectedPerson);

  const relationGrid = createElement("div", "myth-detail-genealogy-relations");

  appendChildren(
    relationGrid,
    createGenealogyRelationGroup("Pais", relations.parents),
    createGenealogyRelationGroup("Parceiros", relations.partners),
    createGenealogyRelationGroup("Descendentes", relations.children),
  );

  appendChildren(content, type, title, description, relationGrid);
  appendChildren(details, symbol, content);
}

function resetGenealogyDetails() {
  const details = query(SELECTORS.genealogyDetails);
  details.replaceChildren();

  const symbol = createElement(
    "div",
    "myth-detail-genealogy-details-symbol",
    "✦",
  );
  symbol.setAttribute("aria-hidden", "true");

  const content = createElement("div");
  const type = createElement("span", null, "Como explorar");
  const title = createElement("h3", null, "Selecione um personagem");
  const description = createElement(
    "p",
    null,
    "A árvore destacará pais, parceiros e descendentes. " +
      "As linhas douradas indicam descendência e as linhas duplas representam uniões.",
  );

  appendChildren(content, type, title, description);
  appendChildren(details, symbol, content);
}

function createGenealogyPersonCard(person) {
  const button = createElement("button", "myth-detail-genealogy-person");

  button.type = "button";
  button.dataset.personId = person.id;
  button.dataset.group = person.group;
  button.dataset.generation = person.generation;
  button.setAttribute("aria-label", `${person.name}: ${person.title}`);
  button.setAttribute("aria-pressed", "false");

  const portrait = createElement(
    "span",
    "myth-detail-genealogy-person-portrait",
  );
  portrait.setAttribute("aria-hidden", "true");

  const fallbackSymbol = createElement(
    "span",
    "myth-detail-genealogy-person-symbol",
    person.symbol || "✦",
  );

  function showFallbackSymbol() {
    portrait.classList.remove("has-image");
    portrait.replaceChildren(fallbackSymbol);
  }

  if (person.image) {
    const image = createElement("img", "myth-detail-genealogy-person-image");

    image.src = resolveAssetUrl(person.image);
    image.alt = "";
    image.width = 192;
    image.height = 192;
    image.loading = "lazy";
    image.decoding = "async";

    image.addEventListener("load", () => {
      portrait.classList.add("has-image");
    });

    image.addEventListener("error", showFallbackSymbol, {
      once: true,
    });

    portrait.appendChild(image);
  } else {
    showFallbackSymbol();
  }

  const personText = createElement("span", "myth-detail-genealogy-person-copy");
  const personName = createElement("strong", null, person.name);
  const personTitle = createElement("small", null, person.title);

  appendChildren(personText, personName, personTitle);
  appendChildren(button, portrait, personText);

  return button;
}

function createGenealogySvgPath(
  startX,
  startY,
  endX,
  endY,
  className,
  relationIds,
) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const middleY = startY + (endY - startY) * 0.5;

  path.setAttribute(
    "d",
    `M ${startX} ${startY} ` +
      `C ${startX} ${middleY}, ${endX} ${middleY}, ${endX} ${endY}`,
  );
  path.setAttribute("class", className);
  path.dataset.relations = relationIds.join(" ");

  return path;
}

function createGenealogyPartnerLines(startX, startY, endX, endY, relationIds) {
  const group = document.createElementNS("http://www.w3.org/2000/svg", "g");

  group.setAttribute(
    "class",
    "genealogy-line-group genealogy-line-group--partner",
  );
  group.dataset.relations = relationIds.join(" ");

  [-3, 3].forEach((offset) => {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    line.setAttribute("x1", String(startX));
    line.setAttribute("y1", String(startY + offset));
    line.setAttribute("x2", String(endX));
    line.setAttribute("y2", String(endY + offset));
    line.setAttribute("class", "genealogy-line genealogy-line--partner");

    group.appendChild(line);
  });

  return group;
}

function renderGenealogy(mythology) {
  const genealogy = mythology.genealogy;
  const filters = query(SELECTORS.genealogyFilters);
  const resetButton = query(SELECTORS.genealogyReset);
  const summary = query(SELECTORS.genealogySummary);
  const viewport = query(SELECTORS.genealogyViewport);
  const canvas = query(SELECTORS.genealogyCanvas);
  const tree = query(SELECTORS.genealogyTree);
  const zoomOutButton = query(SELECTORS.genealogyZoomOut);
  const zoomValue = query(SELECTORS.genealogyZoomValue);
  const zoomInButton = query(SELECTORS.genealogyZoomIn);
  const fitButton = query(SELECTORS.genealogyFit);
  const lines = query(SELECTORS.genealogyLines);
  const details = query(SELECTORS.genealogyDetails);

  if (
    !genealogy ||
    !filters ||
    !resetButton ||
    !summary ||
    !viewport ||
    !canvas ||
    !tree ||
    !zoomOutButton ||
    !zoomValue ||
    !zoomInButton ||
    !fitButton ||
    !details
  ) {
    return;
  }

  const state = {
    selectedGroup: "all",
    selectedPersonId: null,
    animationFrame: 0,
    scale: 1,
    minScale: 0.24,
    maxScale: 2.4,
    panX: 0,
    panY: 0,
    isPanning: false,
    pointerId: null,
    pointerStartX: 0,
    pointerStartY: 0,
    panStartX: 0,
    panStartY: 0,
  };

  filters.replaceChildren();
  tree.replaceChildren();

  genealogy.groups.forEach((group, index) => {
    filters.appendChild(
      createFilterButton(
        group.label,
        group.id,
        index === 0,
        "myth-detail-genealogy-filter",
      ),
    );
  });

  genealogy.generations.forEach((generation) => {
    const section = createElement("section", "myth-detail-generation");
    section.dataset.generation = generation.id;

    const header = createElement("header", "myth-detail-generation-header");
    const badge = createElement(
      "span",
      "myth-detail-generation-number",
      generation.numeral,
    );
    const heading = createElement("h3", null, generation.title);
    const subtitle = createElement(
      "p",
      "myth-detail-generation-subtitle",
      generation.subtitle,
    );
    const list = createElement("div", "myth-detail-generation-list");

    genealogy.people
      .filter((person) => person.generation === generation.id)
      .forEach((person) => {
        list.appendChild(createGenealogyPersonCard(person));
      });

    appendChildren(header, badge, heading, subtitle);
    appendChildren(section, header, list);
    tree.appendChild(section);
  });

  const cards = [...tree.querySelectorAll("[data-person-id]")];

  function getVisibleCards() {
    return cards.filter((card) => !card.hidden);
  }

  function updateSummary() {
    const group = genealogy.groups.find(
      (item) => item.id === state.selectedGroup,
    );
    const visibleCount = getVisibleCards().length;

    summary.textContent =
      `${visibleCount} personagens exibidos` +
      (state.selectedGroup === "all"
        ? ` em ${genealogy.generations.length} gerações.`
        : ` no grupo ${group?.label || ""}.`);
  }

  function clearCardStates() {
    cards.forEach((card) => {
      card.classList.remove("is-selected", "is-related", "is-muted");
      card.setAttribute("aria-pressed", "false");
    });
  }

  function updateLineHighlight() {
    if (!lines) {
      return;
    }

    lines.querySelectorAll("[data-relations]").forEach((line) => {
      const relationIds = line.dataset.relations?.split(" ") || [];
      const isActive =
        state.selectedPersonId && relationIds.includes(state.selectedPersonId);

      line.classList.toggle("is-active", Boolean(isActive));
      line.classList.toggle(
        "is-muted",
        Boolean(state.selectedPersonId) && !isActive,
      );
    });
  }

  function drawGenealogyLines() {
    if (!lines || !tree.parentElement) {
      return;
    }

    state.animationFrame = 0;

    const canvasRect = canvas.getBoundingClientRect();
    const canvasWidth = canvas.scrollWidth;
    const canvasHeight = canvas.scrollHeight;
    const currentScale = state.scale || 1;

    lines.setAttribute("viewBox", `0 0 ${canvasWidth} ${canvasHeight}`);
    lines.setAttribute("width", String(canvasWidth));
    lines.setAttribute("height", String(canvasHeight));
    lines.replaceChildren();

    const visibleCards = new Map(
      getVisibleCards().map((card) => [card.dataset.personId, card]),
    );

    genealogy.people.forEach((person) => {
      const childCard = visibleCards.get(person.id);

      if (!childCard) {
        return;
      }

      const childRect = childCard.getBoundingClientRect();
      const childX =
        (childRect.left - canvasRect.left) / currentScale +
        childRect.width / (2 * currentScale);
      const childY = (childRect.top - canvasRect.top) / currentScale;

      person.parents.forEach((parentId) => {
        const parentCard = visibleCards.get(parentId);

        if (!parentCard) {
          return;
        }

        const parentRect = parentCard.getBoundingClientRect();
        const parentX =
          (parentRect.left - canvasRect.left) / currentScale +
          parentRect.width / (2 * currentScale);
        const parentY = (parentRect.bottom - canvasRect.top) / currentScale;

        lines.appendChild(
          createGenealogySvgPath(
            parentX,
            parentY,
            childX,
            childY,
            "genealogy-line genealogy-line--descent",
            [parentId, person.id],
          ),
        );
      });
    });

    const drawnPartners = new Set();

    genealogy.people.forEach((person) => {
      person.partners.forEach((partnerId) => {
        const relationKey = [person.id, partnerId].sort().join("|");

        if (drawnPartners.has(relationKey)) {
          return;
        }

        drawnPartners.add(relationKey);

        const firstCard = visibleCards.get(person.id);
        const secondCard = visibleCards.get(partnerId);

        if (!firstCard || !secondCard) {
          return;
        }

        if (firstCard.dataset.generation !== secondCard.dataset.generation) {
          return;
        }

        const firstRect = firstCard.getBoundingClientRect();
        const secondRect = secondCard.getBoundingClientRect();
        const firstIsLeft = firstRect.left < secondRect.left;

        const startX = firstIsLeft
          ? (firstRect.right - canvasRect.left) / currentScale
          : (firstRect.left - canvasRect.left) / currentScale;
        const endX = firstIsLeft
          ? (secondRect.left - canvasRect.left) / currentScale
          : (secondRect.right - canvasRect.left) / currentScale;
        const centerY =
          ((firstRect.top +
            firstRect.bottom +
            secondRect.top +
            secondRect.bottom) /
            4 -
            canvasRect.top) /
          currentScale;

        lines.appendChild(
          createGenealogyPartnerLines(startX, centerY, endX, centerY, [
            person.id,
            partnerId,
          ]),
        );
      });
    });

    updateLineHighlight();
  }

  function requestLineUpdate() {
    if (!lines) {
      return;
    }

    if (state.animationFrame) {
      cancelAnimationFrame(state.animationFrame);
    }

    state.animationFrame = requestAnimationFrame(() => {
      requestAnimationFrame(drawGenealogyLines);
    });
  }

  function clamp(value, minimum, maximum) {
    return Math.min(Math.max(value, minimum), maximum);
  }

  function updateZoomInterface() {
    zoomValue.textContent = `${Math.round(state.scale * 100)}%`;
    zoomOutButton.disabled = state.scale <= state.minScale + 0.001;
    zoomInButton.disabled = state.scale >= state.maxScale - 0.001;
  }

  function applyCanvasTransform() {
    canvas.style.transform =
      `translate3d(${state.panX}px, ${state.panY}px, 0) ` +
      `scale(${state.scale})`;

    updateZoomInterface();
  }

  function setZoom(nextScale, originX, originY) {
    const previousScale = state.scale;
    const clampedScale = clamp(nextScale, state.minScale, state.maxScale);

    if (Math.abs(clampedScale - previousScale) < 0.001) {
      return;
    }

    const worldX = (originX - state.panX) / previousScale;
    const worldY = (originY - state.panY) / previousScale;

    state.scale = clampedScale;
    state.panX = originX - worldX * clampedScale;
    state.panY = originY - worldY * clampedScale;

    applyCanvasTransform();
  }

  function zoomFromCenter(factor) {
    setZoom(
      state.scale * factor,
      viewport.clientWidth / 2,
      viewport.clientHeight / 2,
    );
  }

  function fitGenealogyToViewport() {
    const horizontalPadding = 54;
    const verticalPadding = 54;
    const availableWidth = Math.max(
      viewport.clientWidth - horizontalPadding * 2,
      1,
    );
    const availableHeight = Math.max(
      viewport.clientHeight - verticalPadding * 2,
      1,
    );
    const canvasWidth = Math.max(canvas.scrollWidth, 1);
    const canvasHeight = Math.max(canvas.scrollHeight, 1);

    state.scale = clamp(
      Math.min(availableWidth / canvasWidth, availableHeight / canvasHeight),
      state.minScale,
      1,
    );

    state.panX = (viewport.clientWidth - canvasWidth * state.scale) / 2;
    state.panY = (viewport.clientHeight - canvasHeight * state.scale) / 2;

    applyCanvasTransform();
  }

  function centerPersonInViewport(card) {
    const viewportRect = viewport.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    state.panX +=
      viewportRect.left +
      viewportRect.width / 2 -
      (cardRect.left + cardRect.width / 2);

    state.panY +=
      viewportRect.top +
      viewportRect.height / 2 -
      (cardRect.top + cardRect.height / 2);

    applyCanvasTransform();
  }

  function handleGenealogyWheel(event) {
    event.preventDefault();

    const viewportRect = viewport.getBoundingClientRect();
    const pointerX = event.clientX - viewportRect.left;
    const pointerY = event.clientY - viewportRect.top;
    const zoomFactor = Math.exp(-event.deltaY * 0.0015);

    setZoom(state.scale * zoomFactor, pointerX, pointerY);
  }

  function startGenealogyPan(event) {
    if (
      event.button !== 0 ||
      event.target.closest(
        "button, a, input, select, textarea, [data-person-id]",
      )
    ) {
      return;
    }

    state.isPanning = true;
    state.pointerId = event.pointerId;
    state.pointerStartX = event.clientX;
    state.pointerStartY = event.clientY;
    state.panStartX = state.panX;
    state.panStartY = state.panY;

    viewport.classList.add("is-panning");
    viewport.setPointerCapture(event.pointerId);
  }

  function moveGenealogyPan(event) {
    if (!state.isPanning || event.pointerId !== state.pointerId) {
      return;
    }

    state.panX = state.panStartX + event.clientX - state.pointerStartX;
    state.panY = state.panStartY + event.clientY - state.pointerStartY;

    applyCanvasTransform();
  }

  function stopGenealogyPan(event) {
    if (!state.isPanning || event.pointerId !== state.pointerId) {
      return;
    }

    state.isPanning = false;
    viewport.classList.remove("is-panning");

    if (viewport.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }

    state.pointerId = null;
  }

  function clearHighlight() {
    state.selectedPersonId = null;
    clearCardStates();
    resetGenealogyDetails();
    updateLineHighlight();
  }

  function selectPerson(personId, shouldScroll = true) {
    const person = getGenealogyPerson(genealogy, personId);

    if (!person) {
      return;
    }

    state.selectedPersonId = person.id;

    const relations = getGenealogyRelations(genealogy.people, person);
    const relatedIds = new Set([
      ...relations.parents.map((item) => item.id),
      ...relations.partners.map((item) => item.id),
      ...relations.children.map((item) => item.id),
    ]);

    cards.forEach((card) => {
      const isSelected = card.dataset.personId === person.id;
      const isRelated = relatedIds.has(card.dataset.personId);

      card.classList.toggle("is-selected", isSelected);
      card.classList.toggle("is-related", !isSelected && isRelated);
      card.classList.toggle("is-muted", !isSelected && !isRelated);
      card.setAttribute("aria-pressed", String(isSelected));
    });

    updateGenealogyDetails(genealogy, person);
    updateLineHighlight();

    if (shouldScroll) {
      const selectedCard = tree.querySelector(
        `[data-person-id="${CSS.escape(person.id)}"]`,
      );

      if (selectedCard) {
        centerPersonInViewport(selectedCard);
      }
    }
  }

  function applyFilter(groupId) {
    state.selectedGroup = groupId;
    clearHighlight();

    cards.forEach((card) => {
      card.hidden = groupId !== "all" && card.dataset.group !== groupId;
    });

    tree.querySelectorAll(".myth-detail-generation").forEach((generation) => {
      const hasVisiblePeople = [
        ...generation.querySelectorAll("[data-person-id]"),
      ].some((card) => !card.hidden);

      generation.hidden = !hasVisiblePeople;
    });

    updateSummary();
    requestLineUpdate();
  }

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-group]");

    if (!button) {
      return;
    }

    filters.querySelectorAll("button[data-group]").forEach((currentButton) => {
      const isActive = currentButton === button;

      currentButton.classList.toggle("is-active", isActive);
      currentButton.setAttribute("aria-pressed", String(isActive));
    });

    applyFilter(button.dataset.group);
  });

  tree.addEventListener("click", (event) => {
    const card = event.target.closest("[data-person-id]");

    if (card && !card.hidden) {
      selectPerson(card.dataset.personId);
    }
  });

  details.addEventListener("click", (event) => {
    const button = event.target.closest("[data-open-person]");

    if (button) {
      selectPerson(button.dataset.openPerson);
    }
  });

  resetButton.addEventListener("click", clearHighlight);

  zoomOutButton.addEventListener("click", () => {
    zoomFromCenter(1 / 1.2);
  });

  zoomInButton.addEventListener("click", () => {
    zoomFromCenter(1.2);
  });

  fitButton.addEventListener("click", fitGenealogyToViewport);

  viewport.addEventListener("wheel", handleGenealogyWheel, { passive: false });
  viewport.addEventListener("pointerdown", startGenealogyPan);
  viewport.addEventListener("pointermove", moveGenealogyPan);
  viewport.addEventListener("pointerup", stopGenealogyPan);
  viewport.addEventListener("pointercancel", stopGenealogyPan);
  viewport.addEventListener("lostpointercapture", () => {
    state.isPanning = false;
    state.pointerId = null;
    viewport.classList.remove("is-panning");
  });

  viewport.addEventListener("keydown", (event) => {
    const movement = event.shiftKey ? 70 : 34;

    if (event.key === "+" || event.key === "=") {
      event.preventDefault();
      zoomFromCenter(1.2);
    } else if (event.key === "-") {
      event.preventDefault();
      zoomFromCenter(1 / 1.2);
    } else if (event.key === "0") {
      event.preventDefault();
      fitGenealogyToViewport();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      state.panX += movement;
      applyCanvasTransform();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      state.panX -= movement;
      applyCanvasTransform();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      state.panY += movement;
      applyCanvasTransform();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      state.panY -= movement;
      applyCanvasTransform();
    }
  });

  let resizeTimer = 0;

  window.addEventListener(
    "resize",
    () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        requestLineUpdate();
        fitGenealogyToViewport();
      }, 120);
    },
    { passive: true },
  );

  if ("ResizeObserver" in window) {
    const resizeObserver = new ResizeObserver(() => {
      requestLineUpdate();
    });
    resizeObserver.observe(tree);
  }

  updateSummary();
  resetGenealogyDetails();
  requestLineUpdate();

  requestAnimationFrame(() => {
    requestAnimationFrame(fitGenealogyToViewport);
  });
}

function renderSources(mythology) {
  const list = query(SELECTORS.sourcesList);
  list.replaceChildren();

  mythology.sources.forEach((source) => {
    const article = createElement("article", "myth-detail-source-item");
    const title = createElement("h3", null, source.title);
    const author = createElement("span", null, source.author);
    const description = createElement("p", null, source.description);

    appendChildren(article, title, author, description);
    list.appendChild(article);
  });
}

/* ===================================================== NAVEGAÇÃO INTERNA —
ITEM ATIVO, ROLAGEM SUAVE E MODO COMPACTO
===================================================== */

function initializeInternalNavigation() {
  const navigation = document.querySelector(".myth-detail-page-nav");
  const navigationList = navigation?.querySelector(
    ".myth-detail-page-nav-list",
  );
  const links = navigation
    ? [...navigation.querySelectorAll('a[href^="#"]')]
    : [];

  if (!navigation || !navigationList || links.length === 0) {
    return;
  }

  const items = links
    .map((link) => {
      const id = decodeURIComponent(link.hash.slice(1));
      const section = document.getElementById(id);

      return section ? { link, section, id } : null;
    })
    .filter(Boolean);

  if (items.length === 0) {
    return;
  }

  let activeId = "";
  let scrollFrame = 0;

  function setActiveItem(nextId, shouldCenter = true) {
    if (!nextId || activeId === nextId) {
      return;
    }

    activeId = nextId;

    items.forEach(({ link, id }) => {
      const isActive = id === nextId;

      link.classList.toggle("is-active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    if (shouldCenter) {
      const activeLink = items.find(({ id }) => id === nextId)?.link;

      if (activeLink) {
        /*
         * Centraliza somente dentro do menu horizontal.
         *
         * Não usamos scrollIntoView(), pois ele também pode movimentar
         * verticalmente a página e interromper a rolagem normal do usuário.
         */
        const listRect = navigationList.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();

        const nextScrollLeft =
          navigationList.scrollLeft +
          (linkRect.left - listRect.left) -
          (navigationList.clientWidth - linkRect.width) / 2;

        navigationList.scrollTo({
          left: Math.max(nextScrollLeft, 0),
          behavior: "smooth",
        });
      }
    }
  }

  function getNavigationOffset() {
    return navigation.getBoundingClientRect().height + 16;
  }

  function updateNavigationState() {
    scrollFrame = 0;

    navigation.classList.toggle("is-compact", window.scrollY > 180);

    const activationLine = getNavigationOffset() + 38;
    let currentItem = items[0];

    items.forEach((item) => {
      if (item.section.getBoundingClientRect().top <= activationLine) {
        currentItem = item;
      }
    });

    const reachedDocumentEnd =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 4;

    if (reachedDocumentEnd) {
      currentItem = items[items.length - 1];
    }

    setActiveItem(currentItem.id);
  }

  function requestNavigationUpdate() {
    if (scrollFrame) {
      return;
    }

    scrollFrame = window.requestAnimationFrame(updateNavigationState);
  }

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = decodeURIComponent(link.hash.slice(1));
      const target = document.getElementById(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      const targetTop =
        window.scrollY +
        target.getBoundingClientRect().top -
        getNavigationOffset();

      setActiveItem(targetId);

      window.scrollTo({
        top: Math.max(targetTop, 0),
        behavior: "smooth",
      });

      window.history.replaceState(null, "", `#${targetId}`);
    });
  });

  window.addEventListener("scroll", requestNavigationUpdate, {
    passive: true,
  });
  window.addEventListener("resize", requestNavigationUpdate, {
    passive: true,
  });

  if (window.location.hash) {
    const initialId = decodeURIComponent(window.location.hash.slice(1));
    const initialTarget = document.getElementById(initialId);

    if (initialTarget) {
      window.requestAnimationFrame(() => {
        const targetTop =
          window.scrollY +
          initialTarget.getBoundingClientRect().top -
          getNavigationOffset();

        window.scrollTo({ top: Math.max(targetTop, 0) });
        setActiveItem(initialId);
      });
    }
  } else {
    setActiveItem(items[0].id, false);
  }

  requestNavigationUpdate();
}

function renderPage(mythology) {
  applyTheme(mythology);
  applyPresentation(mythology);
  setDocumentMetadata(mythology);
  renderHero(mythology);
  renderOverview(mythology);
  renderHistory(mythology);

  query(SELECTORS.cosmologyIntroduction).textContent =
    mythology.cosmology.introduction;

  renderInfoCards(mythology.cosmology.realms, SELECTORS.cosmologyGrid);

  renderPantheon(mythology);
  renderGenealogy(mythology);
  renderHeroes(mythology);
  renderCreatures(mythology);
  renderPlaces(mythology);
  renderCults(mythology);
  renderSources(mythology);
}

function showPage() {
  query(SELECTORS.loading).hidden = true;
  query(SELECTORS.error).hidden = true;
  query(SELECTORS.page).hidden = false;
}

function showError() {
  query(SELECTORS.loading).hidden = true;
  query(SELECTORS.page).hidden = true;
  query(SELECTORS.error).hidden = false;
}

async function initializeMythologyPage() {
  const slug = getRequestedMythologySlug();
  const loader = MYTHOLOGY_LOADERS[slug];

  if (!loader) {
    showError();
    return;
  }

  try {
    const module = await loader();
    const mythology = module.default;

    if (!mythology || mythology.slug !== slug) {
      throw new Error(`Dados inválidos para a mitologia "${slug}".`);
    }

    renderPage(mythology);
    showPage();

    window.requestAnimationFrame(() => {
      initializeInternalNavigation();
    });
  } catch (error) {
    console.error("Erro ao carregar ou renderizar a mitologia:", error);
    showError();
  }
}

document.addEventListener("DOMContentLoaded", initializeMythologyPage);
