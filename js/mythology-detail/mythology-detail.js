import GREEK_MYTHOLOGY from "../../data/mythologies/greek.js";

const MYTHOLOGIES = Object.freeze({
    greek: GREEK_MYTHOLOGY
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
    pantheonGrid: "#pantheonGrid",
    genealogyTree: "#genealogyTree",
    heroesGrid: "#heroesGrid",
    creaturesGrid: "#creaturesGrid",
    placesGrid: "#placesGrid",
    cultsGrid: "#cultsGrid",
    sourcesList: "#sourcesList"
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

function getRequestedMythologySlug() {
    const params = new URLSearchParams(window.location.search);
    return params.get("mythology")?.trim().toLowerCase() || "greek";
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
    heroImage.src = mythology.hero.image;

    const facts = mythology.overview.facts.slice(0, 3);
    const metaContainer = query(SELECTORS.heroMeta);
    metaContainer.replaceChildren();

    facts.forEach((fact) => {
        const item = createElement("div", "myth-detail-meta-item");
        const label = createElement("span", null, fact.label);
        const value = createElement("strong", null, fact.value);

        appendChildren(item, label, value);
        metaContainer.appendChild(item);
    });
}

function renderOverview(mythology) {
    query(SELECTORS.overviewSummary).textContent =
        mythology.overview.summary;

    const factsContainer = query(SELECTORS.overviewFacts);
    factsContainer.replaceChildren();

    mythology.overview.facts.forEach((fact) => {
        const item = createElement("div", "myth-detail-fact");
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

        const periodLabel = createElement(
            "span",
            "myth-detail-timeline-period",
            period.period
        );

        const title = createElement("h3", null, period.title);
        const description = createElement("p", null, period.description);

        appendChildren(article, periodLabel, title, description);
        timeline.appendChild(article);
    });
}

function createInfoCard(item) {
    const article = createElement("article", "myth-detail-info-card");
    const icon = createElement(
        "span",
        "myth-detail-info-card-icon",
        item.icon || "✦"
    );
    icon.setAttribute("aria-hidden", "true");

    const type = createElement(
        "span",
        "myth-detail-info-card-type",
        item.type || ""
    );
    const title = createElement("h3", null, item.name);
    const description = createElement("p", null, item.description);

    appendChildren(article, icon, type, title, description);
    return article;
}

function renderInfoCards(items, selector) {
    const container = query(selector);
    container.replaceChildren();

    items.forEach((item) => {
        container.appendChild(createInfoCard(item));
    });
}

function createEntityCard(entity) {
    const article = createElement("article", "myth-detail-entity-card");
    const symbol = createElement(
        "span",
        "myth-detail-entity-symbol",
        entity.symbol || "✦"
    );
    symbol.setAttribute("aria-hidden", "true");

    const content = createElement("div", "myth-detail-entity-content");
    const title = createElement("h3", null, entity.name);
    const subtitle = createElement(
        "span",
        "myth-detail-entity-title",
        entity.title
    );
    const description = createElement("p", null, entity.description);

    appendChildren(content, title, subtitle, description);
    appendChildren(article, symbol, content);

    return article;
}

function renderEntityCards(items, selector) {
    const container = query(selector);
    container.replaceChildren();

    items.forEach((item) => {
        container.appendChild(createEntityCard(item));
    });
}

function renderPantheon(mythology) {
    const filtersContainer = query(SELECTORS.pantheonFilters);
    const grid = query(SELECTORS.pantheonGrid);

    filtersContainer.replaceChildren();
    grid.replaceChildren();

    const allButton = createFilterButton("Todos", "all", true);
    filtersContainer.appendChild(allButton);

    mythology.pantheonGroups.forEach((group) => {
        filtersContainer.appendChild(
            createFilterButton(group.label, group.id, false)
        );
    });

    mythology.deities.forEach((deity) => {
        const card = createEntityCard(deity);
        card.dataset.group = deity.group;
        grid.appendChild(card);
    });

    filtersContainer.addEventListener("click", (event) => {
        const button = event.target.closest("button[data-group]");

        if (!button) {
            return;
        }

        const selectedGroup = button.dataset.group;

        filtersContainer
            .querySelectorAll("button")
            .forEach((currentButton) => {
                const isActive = currentButton === button;
                currentButton.classList.toggle("is-active", isActive);
                currentButton.setAttribute(
                    "aria-pressed",
                    String(isActive)
                );
            });

        grid.querySelectorAll("[data-group]").forEach((card) => {
            const shouldShow =
                selectedGroup === "all" ||
                card.dataset.group === selectedGroup;

            card.hidden = !shouldShow;
        });
    });
}

function createFilterButton(label, group, active) {
    const button = createElement(
        "button",
        "myth-detail-filter-button",
        label
    );

    button.type = "button";
    button.dataset.group = group;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));

    return button;
}

function renderGenealogy(mythology) {
    const tree = query(SELECTORS.genealogyTree);
    tree.replaceChildren();

    mythology.genealogy.forEach((generation, index) => {
        const column = createElement(
            "section",
            "myth-detail-generation"
        );
        column.dataset.generation = String(index + 1);

        const heading = createElement("h3", null, generation.generation);
        const list = createElement("ul");

        generation.members.forEach((member) => {
            const item = createElement("li", null, member);
            list.appendChild(item);
        });

        appendChildren(column, heading, list);
        tree.appendChild(column);
    });
}

function renderSources(mythology) {
    const list = query(SELECTORS.sourcesList);
    list.replaceChildren();

    mythology.sources.forEach((source) => {
        const article = createElement(
            "article",
            "myth-detail-source-item"
        );
        const title = createElement("h3", null, source.title);
        const author = createElement(
            "span",
            null,
            source.author
        );
        const description = createElement(
            "p",
            null,
            source.description
        );

        appendChildren(article, title, author, description);
        list.appendChild(article);
    });
}

function renderPage(mythology) {
    setDocumentMetadata(mythology);
    renderHero(mythology);
    renderOverview(mythology);
    renderHistory(mythology);

    query(SELECTORS.cosmologyIntroduction).textContent =
        mythology.cosmology.introduction;

    renderInfoCards(
        mythology.cosmology.realms,
        SELECTORS.cosmologyGrid
    );

    renderPantheon(mythology);
    renderGenealogy(mythology);
    renderEntityCards(mythology.heroes, SELECTORS.heroesGrid);
    renderEntityCards(
        mythology.creatures,
        SELECTORS.creaturesGrid
    );
    renderInfoCards(mythology.places, SELECTORS.placesGrid);
    renderInfoCards(mythology.cults, SELECTORS.cultsGrid);
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

function initializeMythologyPage() {
    const slug = getRequestedMythologySlug();
    const mythology = MYTHOLOGIES[slug];

    if (!mythology) {
        showError();
        return;
    }

    try {
        renderPage(mythology);
        showPage();
    } catch (error) {
        console.error("Erro ao renderizar a página da mitologia:", error);
        showError();
    }
}

document.addEventListener("DOMContentLoaded", initializeMythologyPage);
