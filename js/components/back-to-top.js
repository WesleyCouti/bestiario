/* =====================================================
   BACK-TO-TOP.JS
   -----------------------------------------------------
   Componente global de voltar ao topo.

   Correção mobile:
   - usa scrollTop com múltiplos fallbacks;
   - escuta scroll, touchmove e resize;
   - checa footer por getBoundingClientRect;
   - evita depender apenas do IntersectionObserver no mobile.
===================================================== */

(function () {
    "use strict";

    const BUTTON_ID = "backToTop";
    const VISIBLE_CLASS = "is-visible";
    const FOOTER_HIDDEN_CLASS = "is-hidden-footer";

    const DESKTOP_SCROLL_OFFSET = 500;
    const MOBILE_SCROLL_OFFSET = 120;
    const MOBILE_BREAKPOINT = 768;

    let ticking = false;

    function isMobile() {
        return window.innerWidth <= MOBILE_BREAKPOINT;
    }

    function getScrollOffset() {
        return isMobile() ? MOBILE_SCROLL_OFFSET : DESKTOP_SCROLL_OFFSET;
    }

    function getScrollTop() {
        return (
            window.pageYOffset ||
            window.scrollY ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0
        );
    }

    function prefersReducedMotion() {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }

    function createBackToTopButton() {
        const existingButton = document.getElementById(BUTTON_ID);

        if (existingButton) {
            return existingButton;
        }

        const button = document.createElement("button");

        button.id = BUTTON_ID;
        button.className = "back-to-top";
        button.type = "button";
        button.setAttribute("aria-label", "Voltar ao topo");
        button.setAttribute("title", "Voltar ao topo");

        const icon = document.createElement("span");
        icon.className = "back-to-top__icon";
        icon.setAttribute("aria-hidden", "true");

        button.appendChild(icon);
        document.body.appendChild(button);

        return button;
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: prefersReducedMotion() ? "auto" : "smooth"
        });
    }

    function isFooterVisible() {
        const footer = document.querySelector(".footer");

        if (!footer) {
            return false;
        }

        const footerRect = footer.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        return footerRect.top <= viewportHeight - 80;
    }

    function updateButtonVisibility(button) {
        const hasScrolledEnough = getScrollTop() >= getScrollOffset();
        const footerVisible = isFooterVisible();

        button.classList.toggle(VISIBLE_CLASS, hasScrolledEnough);
        button.classList.toggle(FOOTER_HIDDEN_CLASS, footerVisible);

        ticking = false;
    }

    function requestUpdate(button) {
        if (ticking) {
            return;
        }

        ticking = true;

        window.requestAnimationFrame(function () {
            updateButtonVisibility(button);
        });
    }

    function bindEvents(button) {
        window.addEventListener("scroll", function () {
            requestUpdate(button);
        }, { passive: true });

        document.addEventListener("scroll", function () {
            requestUpdate(button);
        }, { passive: true });

        window.addEventListener("touchmove", function () {
            requestUpdate(button);
        }, { passive: true });

        window.addEventListener("resize", function () {
            requestUpdate(button);
        });

        window.addEventListener("orientationchange", function () {
            setTimeout(function () {
                requestUpdate(button);
            }, 250);
        });

        button.addEventListener("click", scrollToTop);

        updateButtonVisibility(button);
    }

    function initBackToTop() {
        const button = createBackToTopButton();
        bindEvents(button);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initBackToTop);
    } else {
        initBackToTop();
    }
})();
