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
    heroImage.alt = mythology.hero.imageAlt || "";

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
    query(SELECTORS.overviewSummary).textContent = mythology.overview.summary;

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

    if (item.image) {
        article.style.setProperty("--info-card-image", `url("${item.image}")`);
    }

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
    const visual = createElement("div", "myth-detail-entity-visual");

    if (entity.image) {
        const image = createElement("img", "myth-detail-entity-image");

        image.src = entity.image;
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
                entity.symbol || "✦"
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
            entity.symbol || "✦"
        );

        symbol.setAttribute("aria-hidden", "true");
        visual.appendChild(symbol);
    }

    const content = createElement("div", "myth-detail-entity-content");
    const title = createElement("h3", null, entity.name);
    const subtitle = createElement(
        "span",
        "myth-detail-entity-title",
        entity.title
    );
    const description = createElement("p", null, entity.description);

    appendChildren(content, title, subtitle, description);
    appendChildren(article, visual, content);

    return article;
}

function renderEntityCards(items, selector) {
    const container = query(selector);
    container.replaceChildren();

    items.forEach((item) => {
        container.appendChild(createEntityCard(item));
    });
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

function renderPantheon(mythology) {
    const filtersContainer = query(SELECTORS.pantheonFilters);
    const grid = query(SELECTORS.pantheonGrid);

    filtersContainer.replaceChildren();
    grid.replaceChildren();

    filtersContainer.appendChild(createFilterButton("Todos", "all", true));

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

        filtersContainer.querySelectorAll("button").forEach((currentButton) => {
            const isActive = currentButton === button;
            currentButton.classList.toggle("is-active", isActive);
            currentButton.setAttribute("aria-pressed", String(isActive));
        });

        grid.querySelectorAll("[data-group]").forEach((card) => {
            card.hidden =
                selectedGroup !== "all" &&
                card.dataset.group !== selectedGroup;
        });
    });
}


/* =====================================================
   GENEALOGIA — ÁRVORE COMPLETA E INTERATIVA
===================================================== */

function getGenealogyPerson(genealogy, personId) {
    return genealogy.people.find((person) => person.id === personId);
}

function getGenealogyRelations(people, selectedPerson) {
    const children = people.filter((person) =>
        person.parents.includes(selectedPerson.id)
    );

    return {
        parents: selectedPerson.parents
            .map((id) => people.find((person) => person.id === id))
            .filter(Boolean),
        partners: selectedPerson.partners
            .map((id) => people.find((person) => person.id === id))
            .filter(Boolean),
        children
    };
}

function createGenealogyRelationGroup(title, people) {
    const group = createElement(
        "div",
        "myth-detail-genealogy-relation-group"
    );
    const heading = createElement("strong", null, title);
    const list = createElement(
        "div",
        "myth-detail-genealogy-relation-list"
    );

    if (people.length === 0) {
        list.appendChild(
            createElement("span", "is-empty", "Não registrado")
        );
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

    const symbol = createElement(
        "div",
        "myth-detail-genealogy-details-symbol"
    );
    symbol.setAttribute("aria-hidden", "true");

    const fallbackSymbol = createElement(
        "span",
        "myth-detail-genealogy-details-fallback",
        selectedPerson.symbol || "✦"
    );

    function showDetailsFallback() {
        symbol.classList.remove("has-image");
        symbol.replaceChildren(fallbackSymbol);
    }

    if (selectedPerson.image) {
        const image = createElement(
            "img",
            "myth-detail-genealogy-details-image"
        );

        image.src = selectedPerson.image;
        image.alt = "";
        image.width = 140;
        image.height = 140;
        image.loading = "lazy";
        image.decoding = "async";

        image.addEventListener("load", () => {
            symbol.classList.add("has-image");
        });

        image.addEventListener("error", showDetailsFallback, {
            once: true
        });

        symbol.appendChild(image);
    } else {
        showDetailsFallback();
    }

    const content = createElement("div");
    const type = createElement(
        "span",
        null,
        selectedPerson.title || "Personagem mitológico"
    );
    const title = createElement("h3", null, selectedPerson.name);
    const description = createElement(
        "p",
        null,
        selectedPerson.note ||
        "Personagem pertencente à tradição genealógica grega."
    );

    const relations = getGenealogyRelations(
        genealogy.people,
        selectedPerson
    );

    const relationGrid = createElement(
        "div",
        "myth-detail-genealogy-relations"
    );

    appendChildren(
        relationGrid,
        createGenealogyRelationGroup("Pais", relations.parents),
        createGenealogyRelationGroup("Parceiros", relations.partners),
        createGenealogyRelationGroup("Descendentes", relations.children)
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
        "✦"
    );
    symbol.setAttribute("aria-hidden", "true");

    const content = createElement("div");
    const type = createElement("span", null, "Como explorar");
    const title = createElement("h3", null, "Selecione um personagem");
    const description = createElement(
        "p",
        null,
        "A árvore destacará pais, parceiros e descendentes. " +
        "As linhas douradas indicam descendência e as linhas duplas representam uniões."
    );

    appendChildren(content, type, title, description);
    appendChildren(details, symbol, content);
}

function createGenealogyPersonCard(person) {
    const button = createElement(
        "button",
        "myth-detail-genealogy-person"
    );

    button.type = "button";
    button.dataset.personId = person.id;
    button.dataset.group = person.group;
    button.dataset.generation = person.generation;
    button.setAttribute(
        "aria-label",
        `${person.name}: ${person.title}`
    );
    button.setAttribute("aria-pressed", "false");

    const portrait = createElement(
        "span",
        "myth-detail-genealogy-person-portrait"
    );
    portrait.setAttribute("aria-hidden", "true");

    const fallbackSymbol = createElement(
        "span",
        "myth-detail-genealogy-person-symbol",
        person.symbol || "✦"
    );

    function showFallbackSymbol() {
        portrait.classList.remove("has-image");
        portrait.replaceChildren(fallbackSymbol);
    }

    if (person.image) {
        const image = createElement(
            "img",
            "myth-detail-genealogy-person-image"
        );

        image.src = person.image;
        image.alt = "";
        image.width = 192;
        image.height = 192;
        image.loading = "lazy";
        image.decoding = "async";

        image.addEventListener("load", () => {
            portrait.classList.add("has-image");
        });

        image.addEventListener("error", showFallbackSymbol, {
            once: true
        });

        portrait.appendChild(image);
    } else {
        showFallbackSymbol();
    }

    const personText = createElement(
        "span",
        "myth-detail-genealogy-person-copy"
    );
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
    relationIds
) {
    const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
    );
    const middleY = startY + (endY - startY) * 0.5;

    path.setAttribute(
        "d",
        `M ${startX} ${startY} ` +
        `C ${startX} ${middleY}, ${endX} ${middleY}, ${endX} ${endY}`
    );
    path.setAttribute("class", className);
    path.dataset.relations = relationIds.join(" ");

    return path;
}

function createGenealogyPartnerLines(
    startX,
    startY,
    endX,
    endY,
    relationIds
) {
    const group = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g"
    );

    group.setAttribute(
        "class",
        "genealogy-line-group genealogy-line-group--partner"
    );
    group.dataset.relations = relationIds.join(" ");

    [-3, 3].forEach((offset) => {
        const line = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "line"
        );

        line.setAttribute("x1", String(startX));
        line.setAttribute("y1", String(startY + offset));
        line.setAttribute("x2", String(endX));
        line.setAttribute("y2", String(endY + offset));
        line.setAttribute(
            "class",
            "genealogy-line genealogy-line--partner"
        );

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
        panStartY: 0
    };

    filters.replaceChildren();
    tree.replaceChildren();

    genealogy.groups.forEach((group, index) => {
        filters.appendChild(
            createFilterButton(
                group.label,
                group.id,
                index === 0,
                "myth-detail-genealogy-filter"
            )
        );
    });

    genealogy.generations.forEach((generation) => {
        const section = createElement(
            "section",
            "myth-detail-generation"
        );
        section.dataset.generation = generation.id;

        const header = createElement(
            "header",
            "myth-detail-generation-header"
        );
        const badge = createElement(
            "span",
            "myth-detail-generation-number",
            generation.numeral
        );
        const heading = createElement("h3", null, generation.title);
        const subtitle = createElement(
            "p",
            "myth-detail-generation-subtitle",
            generation.subtitle
        );
        const list = createElement(
            "div",
            "myth-detail-generation-list"
        );

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
            (item) => item.id === state.selectedGroup
        );
        const visibleCount = getVisibleCards().length;

        summary.textContent =
            `${visibleCount} personagens exibidos` +
            (state.selectedGroup === "all"
                ? " em sete gerações."
                : ` no grupo ${group?.label || ""}.`);
    }

    function clearCardStates() {
        cards.forEach((card) => {
            card.classList.remove(
                "is-selected",
                "is-related",
                "is-muted"
            );
            card.setAttribute("aria-pressed", "false");
        });
    }

    function updateLineHighlight() {
        if (!lines) {
            return;
        }

        lines
            .querySelectorAll("[data-relations]")
            .forEach((line) => {
                const relationIds =
                    line.dataset.relations?.split(" ") || [];
                const isActive =
                    state.selectedPersonId &&
                    relationIds.includes(state.selectedPersonId);

                line.classList.toggle(
                    "is-active",
                    Boolean(isActive)
                );
                line.classList.toggle(
                    "is-muted",
                    Boolean(state.selectedPersonId) && !isActive
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

        lines.setAttribute(
            "viewBox",
            `0 0 ${canvasWidth} ${canvasHeight}`
        );
        lines.setAttribute("width", String(canvasWidth));
        lines.setAttribute("height", String(canvasHeight));
        lines.replaceChildren();

        const visibleCards = new Map(
            getVisibleCards().map((card) => [
                card.dataset.personId,
                card
            ])
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
            const childY =
                (childRect.top - canvasRect.top) / currentScale;

            person.parents.forEach((parentId) => {
                const parentCard = visibleCards.get(parentId);

                if (!parentCard) {
                    return;
                }

                const parentRect = parentCard.getBoundingClientRect();
                const parentX =
                    (parentRect.left - canvasRect.left) / currentScale +
                    parentRect.width / (2 * currentScale);
                const parentY =
                    (parentRect.bottom - canvasRect.top) / currentScale;

                lines.appendChild(
                    createGenealogySvgPath(
                        parentX,
                        parentY,
                        childX,
                        childY,
                        "genealogy-line genealogy-line--descent",
                        [parentId, person.id]
                    )
                );
            });
        });

        const drawnPartners = new Set();

        genealogy.people.forEach((person) => {
            person.partners.forEach((partnerId) => {
                const relationKey = [person.id, partnerId]
                    .sort()
                    .join("|");

                if (drawnPartners.has(relationKey)) {
                    return;
                }

                drawnPartners.add(relationKey);

                const firstCard = visibleCards.get(person.id);
                const secondCard = visibleCards.get(partnerId);

                if (!firstCard || !secondCard) {
                    return;
                }

                if (
                    firstCard.dataset.generation !==
                    secondCard.dataset.generation
                ) {
                    return;
                }

                const firstRect = firstCard.getBoundingClientRect();
                const secondRect = secondCard.getBoundingClientRect();
                const firstIsLeft =
                    firstRect.left < secondRect.left;

                const startX = firstIsLeft
                    ? (firstRect.right - canvasRect.left) / currentScale
                    : (firstRect.left - canvasRect.left) / currentScale;
                const endX = firstIsLeft
                    ? (secondRect.left - canvasRect.left) / currentScale
                    : (secondRect.right - canvasRect.left) / currentScale;
                const centerY =
                    (
                        (
                            firstRect.top +
                            firstRect.bottom +
                            secondRect.top +
                            secondRect.bottom
                        ) / 4 -
                        canvasRect.top
                    ) / currentScale;

                lines.appendChild(
                    createGenealogyPartnerLines(
                        startX,
                        centerY,
                        endX,
                        centerY,
                        [person.id, partnerId]
                    )
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
        const clampedScale = clamp(
            nextScale,
            state.minScale,
            state.maxScale
        );

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
            viewport.clientHeight / 2
        );
    }

    function fitGenealogyToViewport() {
        const horizontalPadding = 54;
        const verticalPadding = 54;
        const availableWidth = Math.max(
            viewport.clientWidth - horizontalPadding * 2,
            1
        );
        const availableHeight = Math.max(
            viewport.clientHeight - verticalPadding * 2,
            1
        );
        const canvasWidth = Math.max(canvas.scrollWidth, 1);
        const canvasHeight = Math.max(canvas.scrollHeight, 1);

        state.scale = clamp(
            Math.min(
                availableWidth / canvasWidth,
                availableHeight / canvasHeight
            ),
            state.minScale,
            1
        );

        state.panX =
            (viewport.clientWidth - canvasWidth * state.scale) / 2;
        state.panY =
            (viewport.clientHeight - canvasHeight * state.scale) / 2;

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

        setZoom(
            state.scale * zoomFactor,
            pointerX,
            pointerY
        );
    }

    function startGenealogyPan(event) {
        if (
            event.button !== 0 ||
            event.target.closest(
                "button, a, input, select, textarea, [data-person-id]"
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
        if (
            !state.isPanning ||
            event.pointerId !== state.pointerId
        ) {
            return;
        }

        state.panX =
            state.panStartX +
            event.clientX -
            state.pointerStartX;
        state.panY =
            state.panStartY +
            event.clientY -
            state.pointerStartY;

        applyCanvasTransform();
    }

    function stopGenealogyPan(event) {
        if (
            !state.isPanning ||
            event.pointerId !== state.pointerId
        ) {
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

        const relations = getGenealogyRelations(
            genealogy.people,
            person
        );
        const relatedIds = new Set([
            ...relations.parents.map((item) => item.id),
            ...relations.partners.map((item) => item.id),
            ...relations.children.map((item) => item.id)
        ]);

        cards.forEach((card) => {
            const isSelected =
                card.dataset.personId === person.id;
            const isRelated =
                relatedIds.has(card.dataset.personId);

            card.classList.toggle("is-selected", isSelected);
            card.classList.toggle(
                "is-related",
                !isSelected && isRelated
            );
            card.classList.toggle(
                "is-muted",
                !isSelected && !isRelated
            );
            card.setAttribute(
                "aria-pressed",
                String(isSelected)
            );
        });

        updateGenealogyDetails(genealogy, person);
        updateLineHighlight();

        if (shouldScroll) {
            const selectedCard = tree.querySelector(
                `[data-person-id="${CSS.escape(person.id)}"]`
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
            card.hidden =
                groupId !== "all" &&
                card.dataset.group !== groupId;
        });

        tree
            .querySelectorAll(".myth-detail-generation")
            .forEach((generation) => {
                const hasVisiblePeople = [
                    ...generation.querySelectorAll(
                        "[data-person-id]"
                    )
                ].some((card) => !card.hidden);

                generation.hidden = !hasVisiblePeople;
            });

        updateSummary();
        requestLineUpdate();
    }

    filters.addEventListener("click", (event) => {
        const button = event.target.closest(
            "button[data-group]"
        );

        if (!button) {
            return;
        }

        filters
            .querySelectorAll("button[data-group]")
            .forEach((currentButton) => {
                const isActive = currentButton === button;

                currentButton.classList.toggle(
                    "is-active",
                    isActive
                );
                currentButton.setAttribute(
                    "aria-pressed",
                    String(isActive)
                );
            });

        applyFilter(button.dataset.group);
    });

    tree.addEventListener("click", (event) => {
        const card = event.target.closest(
            "[data-person-id]"
        );

        if (card && !card.hidden) {
            selectPerson(card.dataset.personId);
        }
    });

    details.addEventListener("click", (event) => {
        const button = event.target.closest(
            "[data-open-person]"
        );

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

    viewport.addEventListener(
        "wheel",
        handleGenealogyWheel,
        { passive: false }
    );
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
        { passive: true }
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
        const article = createElement(
            "article",
            "myth-detail-source-item"
        );
        const title = createElement("h3", null, source.title);
        const author = createElement("span", null, source.author);
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
