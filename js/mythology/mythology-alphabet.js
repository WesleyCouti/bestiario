/* =====================================================
   NAVEGAÇÃO ALFABÉTICA DO CATÁLOGO
   -----------------------------------------------------
   - Ativa somente letras com conteúdo;
   - Navega até o primeiro card correspondente;
   - Atualiza o status acessível;
   - Garante semântica de lista nos conteúdos dinâmicos.
===================================================== */

function initMythologyAlphabet() {
    const catalogGrid = document.getElementById("mythologyGrid");
    const timelineTrack = document.getElementById("mythologyTimelineTrack");

    const alphabetButtons = Array.from(
        document.querySelectorAll(".mythology-alphabet-link")
    );

    const alphabetStatus = document.querySelector(
        ".mythology-alphabet-status"
    );

    if (!catalogGrid || alphabetButtons.length === 0) {
        return;
    }

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    const normalizeText = (value = "") =>
        value
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim()
            .toUpperCase();

    const getCardTitle = (card) => {
        const heading = card.querySelector("h2, h3");
        return heading ? heading.textContent : "";
    };

    const getCatalogCards = () =>
        Array.from(
            catalogGrid.querySelectorAll(".mythology-card")
        );

    /* =====================================================
       SEMÂNTICA DOS ELEMENTOS DINÂMICOS
    ====================================================== */

    const applyDynamicListSemantics = () => {
        getCatalogCards().forEach((card) => {
            card.setAttribute("role", "listitem");
        });

        if (timelineTrack) {
            timelineTrack
                .querySelectorAll(".mythology-timeline-item")
                .forEach((item) => {
                    item.setAttribute("role", "listitem");
                });
        }
    };

    /* =====================================================
       LETRAS DISPONÍVEIS
    ====================================================== */

    const updateAvailableLetters = () => {
        const cards = getCatalogCards();

        alphabetButtons.forEach((button) => {
            const letter = button.dataset.letter;

            const hasMatch = cards.some((card) =>
                normalizeText(
                    getCardTitle(card)
                ).startsWith(letter)
            );

            button.disabled = !hasMatch;

            button.title = hasMatch
                ? `Ir para mitologias com a letra ${letter}`
                : `Nenhuma mitologia cadastrada com a letra ${letter}`;
        });

        applyDynamicListSemantics();
    };

    /* =====================================================
       ESTADO ATIVO
    ====================================================== */

    const clearActiveLetter = () => {
        alphabetButtons.forEach((button) => {
            button.classList.remove("is-active");
            button.removeAttribute("aria-current");
        });
    };

    /* =====================================================
       FOCO NO CARD
    ====================================================== */

    const focusTargetCard = (targetCard) => {
        targetCard.setAttribute("tabindex", "-1");

        targetCard.scrollIntoView({
            behavior: prefersReducedMotion
                ? "auto"
                : "smooth",
            block: "center"
        });

        window.setTimeout(() => {
            targetCard.focus({
                preventScroll: true
            });
        }, prefersReducedMotion ? 0 : 520);
    };

    /* =====================================================
       EVENTOS
    ====================================================== */

    alphabetButtons.forEach((button) => {
        button.addEventListener("click", () => {

            const letter = button.dataset.letter;

            const targetCard = getCatalogCards().find((card) =>
                normalizeText(
                    getCardTitle(card)
                ).startsWith(letter)
            );

            if (!targetCard) {
                if (alphabetStatus) {
                    alphabetStatus.textContent =
                        `Nenhuma mitologia cadastrada com a letra ${letter}.`;
                }

                return;
            }

            clearActiveLetter();

            button.classList.add("is-active");
            button.setAttribute(
                "aria-current",
                "true"
            );

            focusTargetCard(targetCard);

            if (alphabetStatus) {
                alphabetStatus.textContent =
                    `Catálogo posicionado na letra ${letter}.`;
            }
        });
    });

    /* =====================================================
       OBSERVADORES
    ====================================================== */

    const catalogObserver = new MutationObserver(
        updateAvailableLetters
    );

    catalogObserver.observe(catalogGrid, {
        childList: true,
        subtree: true
    });

    if (timelineTrack) {

        const timelineObserver = new MutationObserver(
            applyDynamicListSemantics
        );

        timelineObserver.observe(timelineTrack, {
            childList: true,
            subtree: true
        });
    }

    /* =====================================================
       INICIALIZAÇÃO
    ====================================================== */

    updateAvailableLetters();
}

document.addEventListener(
    "DOMContentLoaded",
    initMythologyAlphabet
);