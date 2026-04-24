/* =====================================================
   CARROSSEL - VOZES DO MUNDO ANTIGO
===================================================== */

const quotesTrack = document.getElementById("quotesTrack");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const quoteCards = document.querySelectorAll(".quote-card");

let currentIndex = 0;
let cardsPerView = window.innerWidth <= 768 ? 1 : 3;

function getCardsPerView() {
  return window.innerWidth <= 768 ? 1 : 3;
}

function updateQuotesCarousel() {
  if (!quotesTrack || !nextBtn || !prevBtn || quoteCards.length === 0) {
    return;
  }

  cardsPerView = getCardsPerView();

  const cardWidth = quoteCards[0].offsetWidth;
  const gap = 24;
  const moveX = currentIndex * (cardWidth + gap);

  quotesTrack.style.transform = `translateX(-${moveX}px)`;

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= quoteCards.length - cardsPerView;
}

function goToNextQuotes() {
  if (currentIndex < quoteCards.length - cardsPerView) {
    currentIndex += cardsPerView;

    if (currentIndex > quoteCards.length - cardsPerView) {
      currentIndex = quoteCards.length - cardsPerView;
    }

    updateQuotesCarousel();
  }
}

function goToPrevQuotes() {
  if (currentIndex > 0) {
    currentIndex -= cardsPerView;

    if (currentIndex < 0) {
      currentIndex = 0;
    }

    updateQuotesCarousel();
  }
}

function handleQuotesResize() {
  cardsPerView = getCardsPerView();

  if (currentIndex > quoteCards.length - cardsPerView) {
    currentIndex = Math.max(0, quoteCards.length - cardsPerView);
  }

  updateQuotesCarousel();
}

if (quotesTrack && nextBtn && prevBtn && quoteCards.length > 0) {
  nextBtn.addEventListener("click", goToNextQuotes);
  prevBtn.addEventListener("click", goToPrevQuotes);
  window.addEventListener("resize", handleQuotesResize);

  updateQuotesCarousel();
}

/* =====================================================
   FUNÇÃO GENÉRICA PARA SCROLL HORIZONTAL
===================================================== */

function getTrackStep(track, cardSelector, fallback = 300) {
  const firstCard = track?.querySelector(cardSelector);

  if (!firstCard) {
    return fallback;
  }

  const trackStyles = window.getComputedStyle(track);
  const gap = parseFloat(trackStyles.gap || trackStyles.columnGap || "20");

  return firstCard.offsetWidth + gap;
}

function setupSimpleHorizontalCarousel({
  trackId,
  prevBtnId,
  nextBtnId,
  cardSelector,
  stepFallback = 300,
}) {
  const track = document.getElementById(trackId);
  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);

  if (!track || !prevBtn || !nextBtn) {
    return;
  }

  prevBtn.addEventListener("click", () => {
    track.scrollBy({
      left: -getTrackStep(track, cardSelector, stepFallback),
      behavior: "smooth",
    });
  });

  nextBtn.addEventListener("click", () => {
    track.scrollBy({
      left: getTrackStep(track, cardSelector, stepFallback),
      behavior: "smooth",
    });
  });
}

/* =====================================================
   MITOLOGIAS DO MUNDO
===================================================== */

setupSimpleHorizontalCarousel({
  trackId: "mythologiesTrack",
  prevBtnId: "mythPrevBtn",
  nextBtnId: "mythNextBtn",
  cardSelector: ".myth-card",
  stepFallback: 320,
});

/* =====================================================
   SÍMBOLOS
===================================================== */

setupSimpleHorizontalCarousel({
  trackId: "symbolsTrack",
  prevBtnId: "symbolPrev",
  nextBtnId: "symbolNext",
  cardSelector: ".symbol-card",
  stepFallback: 300,
});

/* =====================================================
   LENDAS
===================================================== */

setupSimpleHorizontalCarousel({
  trackId: "legendsTrack",
  prevBtnId: "legendPrev",
  nextBtnId: "legendNext",
  cardSelector: ".legend-card",
  stepFallback: 300,
});

/* =====================================================
   RELÍQUIAS
===================================================== */

setupSimpleHorizontalCarousel({
  trackId: "artifactsTrack",
  prevBtnId: "artifactPrev",
  nextBtnId: "artifactNext",
  cardSelector: ".artifact-card",
  stepFallback: 300,
});

/* =====================================================
   CRIATURAS
===================================================== */

const creaturesTrack = document.getElementById("creaturesTrack");
const creaturePrevBtn = document.getElementById("creaturePrevBtn");
const creatureNextBtn = document.getElementById("creatureNextBtn");

if (creaturesTrack && creaturePrevBtn && creatureNextBtn) {
  function getCreatureStep() {
    return getTrackStep(creaturesTrack, ".creature-card", 300);
  }

  function isCreatureAtStart() {
    return creaturesTrack.scrollLeft <= 5;
  }

  function updateCreatureButtons() {
    const atStart = isCreatureAtStart();
    creaturePrevBtn.disabled = atStart;
  }

  creaturePrevBtn.addEventListener("click", () => {
    creaturesTrack.scrollBy({
      left: -getCreatureStep(),
      behavior: "smooth",
    });
  });

  creatureNextBtn.addEventListener("click", () => {
    creaturesTrack.scrollBy({
      left: getCreatureStep(),
      behavior: "smooth",
    });
  });

  creaturesTrack.addEventListener("scroll", updateCreatureButtons);
  window.addEventListener("resize", updateCreatureButtons);
  window.addEventListener("load", updateCreatureButtons);

  updateCreatureButtons();
}