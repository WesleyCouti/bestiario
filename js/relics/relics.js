/* =====================================================
   RELÍQUIAS / PÁGINA
   Arquivo: relics.js

   Este arquivo contém apenas a lógica da página.
   Os dados ficam separados em:
   - relics-civilizations-data.js
   - relics-truth-data.js
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initRelicsCivilizations();
    initRelicsTruth();
});

/* =====================================================
   FUNÇÕES UTILITÁRIAS
===================================================== */

function escapeHTML(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function debounce(callback, delay = 180) {
    let timer;

    return () => {
        clearTimeout(timer);
        timer = setTimeout(callback, delay);
    };
}

/* =====================================================
   RELÍQUIAS ATRAVÉS DAS CIVILIZAÇÕES
===================================================== */

function initRelicsCivilizations() {
    const relicsGrid = document.querySelector("#relicsCivilizationsGrid");
    const filterButtons = document.querySelectorAll(".relics-civilizations-filter");

    const prevButton = document.querySelector("#relicsCivilizationsPrev");
    const nextButton = document.querySelector("#relicsCivilizationsNext");
    const counter = document.querySelector("#relicsCivilizationsCounter");

    if (!relicsGrid || !filterButtons.length) return;
    if (typeof relicsCivilizationsData === "undefined") return;
    if (!Array.isArray(relicsCivilizationsData)) return;

    let currentFilter = "all";
    let currentPage = 1;

    function getItemsPerPage() {
        const width = window.innerWidth;

        if (width <= 560) return 1;
        if (width <= 820) return 2;
        if (width <= 1100) return 3;
        if (width <= 1350) return 4;

        return 5;
    }

    function getFilteredRelics() {
        if (currentFilter === "all") return relicsCivilizationsData;

        return relicsCivilizationsData.filter((relic) => relic.category === currentFilter);
    }

    function createRelicCard(relic) {
        const name = escapeHTML(relic.name);
        const origin = escapeHTML(relic.origin);
        const category = escapeHTML(relic.category);
        const description = escapeHTML(relic.description);
        const image = escapeHTML(relic.image);
        const link = escapeHTML(relic.link || "#");

        return `
            <article class="relics-civilization-card" data-category="${category}">
                <figure class="relics-civilization-card__image">
                    <img 
                        src="${image}" 
                        alt="${name}" 
                        loading="lazy" 
                        decoding="async"
                    >
                </figure>

                <div class="relics-civilization-card__content">
                    <h3>${name}</h3>

                    <span>Origem: ${origin}</span>

                    <div class="relics-civilization-card__divider" aria-hidden="true">
                        <span></span>
                        <strong>✧</strong>
                        <span></span>
                    </div>

                    <p>${description}</p>

                    <a 
                        href="${link}" 
                        class="relics-civilization-card__link"
                        aria-label="Saiba mais sobre ${name}"
                    >
                        Saiba mais
                        <span aria-hidden="true">→</span>
                    </a>
                </div>
            </article>
        `;
    }

    function updateNavigation(totalPages) {
        if (!prevButton || !nextButton || !counter) return;

        const hasMultiplePages = totalPages > 1;

        prevButton.disabled = !hasMultiplePages || currentPage === 1;
        nextButton.disabled = !hasMultiplePages || currentPage === totalPages;

        prevButton.setAttribute("aria-disabled", String(prevButton.disabled));
        nextButton.setAttribute("aria-disabled", String(nextButton.disabled));

        counter.textContent = `Página ${currentPage} de ${totalPages}`;
    }

    function renderRelics() {
        const filteredRelics = getFilteredRelics();
        const itemsPerPage = getItemsPerPage();
        const totalPages = Math.max(1, Math.ceil(filteredRelics.length / itemsPerPage));

        if (currentPage > totalPages) currentPage = totalPages;

        const startIndex = (currentPage - 1) * itemsPerPage;
        const visibleRelics = filteredRelics.slice(startIndex, startIndex + itemsPerPage);

        relicsGrid.setAttribute("aria-busy", "true");

        relicsGrid.innerHTML = visibleRelics.length
            ? visibleRelics.map(createRelicCard).join("")
            : `
                <div class="relics-civilizations-empty">
                    Nenhuma relíquia encontrada para este filtro.
                </div>
            `;

        updateNavigation(totalPages);

        setTimeout(() => {
            relicsGrid.setAttribute("aria-busy", "false");
        }, 180);
    }

    function updateActiveFilter(activeButton) {
        filterButtons.forEach((button) => {
            button.classList.remove("is-active");
            button.setAttribute("aria-pressed", "false");
        });

        activeButton.classList.add("is-active");
        activeButton.setAttribute("aria-pressed", "true");
    }

    filterButtons.forEach((button) => {
        button.setAttribute(
            "aria-pressed",
            button.classList.contains("is-active") ? "true" : "false"
        );

        button.addEventListener("click", () => {
            currentFilter = button.dataset.filter || "all";
            currentPage = 1;

            updateActiveFilter(button);
            renderRelics();
        });
    });

    if (prevButton) {
        prevButton.addEventListener("click", () => {
            if (currentPage <= 1) return;

            currentPage -= 1;
            renderRelics();
        });
    }

    if (nextButton) {
        nextButton.addEventListener("click", () => {
            const filteredRelics = getFilteredRelics();
            const totalPages = Math.max(
                1,
                Math.ceil(filteredRelics.length / getItemsPerPage())
            );

            if (currentPage >= totalPages) return;

            currentPage += 1;
            renderRelics();
        });
    }

    window.addEventListener(
        "resize",
        debounce(() => {
            currentPage = 1;
            renderRelics();
        })
    );

    renderRelics();
}

/* =====================================================
   VERDADE OU LENDA?
===================================================== */

function initRelicsTruth() {
    const truthGrid = document.querySelector("#relicsTruthGrid");

    const prevButton = document.querySelector("#relicsTruthPrev");
    const nextButton = document.querySelector("#relicsTruthNext");
    const counter = document.querySelector("#relicsTruthCounter");

    if (!truthGrid) return;
    if (typeof relicsTruthData === "undefined") return;
    if (!Array.isArray(relicsTruthData)) return;

    let currentPage = 1;

    function getItemsPerPage() {
        const width = window.innerWidth;

        if (width <= 760) return 1;
        if (width <= 1250) return 2;

        return 4;
    }

    function createTruthCard(relic) {
        const name = escapeHTML(relic.name);
        const description = escapeHTML(relic.description);
        const image = escapeHTML(relic.image);

        const facts = Array.isArray(relic.facts) ? relic.facts : [];

        const factsList = facts.map((fact) => {
            const question = escapeHTML(fact.question);
            const answer = escapeHTML(fact.answer);
            const status = escapeHTML(fact.status);

            return `
                <li>
                    <span class="relics-truth-question">${question}</span>
                    <strong class="relics-truth-status relics-truth-status--${status}">
                        ${answer}
                    </strong>
                </li>
            `;
        }).join("");

        return `
            <article class="relics-truth-card">
                <figure class="relics-truth-card__image">
                    <img 
                        src="${image}" 
                        alt="${name}" 
                        loading="lazy" 
                        decoding="async"
                    >
                </figure>

                <div class="relics-truth-card__content">
                    <h3>${name}</h3>

                    <div class="relics-truth-card__divider" aria-hidden="true">
                        <span></span>
                        <strong>✧</strong>
                        <span></span>
                    </div>

                    <ul class="relics-truth-list">
                        ${factsList}
                    </ul>

                    <p>${description}</p>
                </div>
            </article>
        `;
    }

    function updateNavigation(totalPages) {
        if (!prevButton || !nextButton || !counter) return;

        const hasMultiplePages = totalPages > 1;

        prevButton.disabled = !hasMultiplePages || currentPage === 1;
        nextButton.disabled = !hasMultiplePages || currentPage === totalPages;

        prevButton.setAttribute("aria-disabled", String(prevButton.disabled));
        nextButton.setAttribute("aria-disabled", String(nextButton.disabled));

        counter.textContent = `Página ${currentPage} de ${totalPages}`;
    }

    function renderTruthCards() {
        const itemsPerPage = getItemsPerPage();
        const totalPages = Math.max(
            1,
            Math.ceil(relicsTruthData.length / itemsPerPage)
        );

        if (currentPage > totalPages) currentPage = totalPages;

        const startIndex = (currentPage - 1) * itemsPerPage;
        const visibleCards = relicsTruthData.slice(startIndex, startIndex + itemsPerPage);

        truthGrid.setAttribute("aria-busy", "true");

        truthGrid.innerHTML = visibleCards.length
            ? visibleCards.map(createTruthCard).join("")
            : `
                <div class="relics-truth-empty">
                    Nenhuma comparação cadastrada até o momento.
                </div>
            `;

        updateNavigation(totalPages);

        setTimeout(() => {
            truthGrid.setAttribute("aria-busy", "false");
        }, 180);
    }

    if (prevButton) {
        prevButton.addEventListener("click", () => {
            if (currentPage <= 1) return;

            currentPage -= 1;
            renderTruthCards();
        });
    }

    if (nextButton) {
        nextButton.addEventListener("click", () => {
            const totalPages = Math.max(
                1,
                Math.ceil(relicsTruthData.length / getItemsPerPage())
            );

            if (currentPage >= totalPages) return;

            currentPage += 1;
            renderTruthCards();
        });
    }

    window.addEventListener(
        "resize",
        debounce(() => {
            currentPage = 1;
            renderTruthCards();
        })
    );

    renderTruthCards();
}