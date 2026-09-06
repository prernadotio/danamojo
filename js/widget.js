(function () {
  const PHOTO =
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80";

  const DISCLAIMER =
    "All The Below Information Is Mandated By The Indian Govt / Payment Processors. We Do Not Take Any Additional Information. All Your Information Will Be Kept Strictly Confidential. ";

  const CAUSES = [
    {
      id: "voc",
      title: "Help us Construct a Vocation skill Development center.",
      heading: "Online Education",
      more: "Funds classrooms, tools, and trainers so rural youth can learn employable trades.",
      priceInr: 2095,
      priceUsd: 20.01,
      custom: false,
    },
    {
      id: "edu",
      title: "Support Child Education for One Year",
      heading: "Child Education",
      more: "Covers school fees, books, and uniforms for one child for a full academic year.",
      priceInr: 2095,
      priceUsd: 3.01,
      custom: false,
    },
    {
      id: "meal",
      title: "Provide Mid-day Meals for Children",
      heading: "Mid-day Meals",
      more: "Nutritious daily meals that keep children in school and healthy.",
      priceInr: 2095,
      priceUsd: 15.05,
      custom: false,
    },
    {
      id: "health",
      title: "Sponsor Healthcare for a Family",
      heading: "Family Healthcare",
      more: "Basic medical check-ups and medicines for a rural household.",
      priceInr: 2095,
      priceUsd: 12.08,
      custom: false,
    },
    {
      id: "lib",
      title: "Build Rural Learning Libraries",
      heading: "Learning Libraries",
      more: "Books and a reading corner in village learning centres.",
      priceInr: 2095,
      priceUsd: 20.01,
      custom: false,
    },
    {
      id: "gf",
      title: "General Fund : Choose your own donation amount",
      heading: "General Fund",
      more: "Unrestricted support used where the need is greatest.",
      priceInr: 20000,
      priceUsd: 200,
      custom: true,
    },
  ];

  const ADMIN_RATE = 0.03;
  const USD_TO_INR = 62.47;

  const els = {
    widget: document.getElementById("widget"),
    items: document.getElementById("items"),
    currencyBtn: document.getElementById("currencyBtn"),
    currencyMenu: document.getElementById("currencyMenu"),
    currencyFlag: document.getElementById("currencyFlag"),
    currencyLabel: document.getElementById("currencyLabel"),
    fxInfoBtn: document.getElementById("fxInfoBtn"),
    fxModal: document.getElementById("fxModal"),
    fxClose: document.getElementById("fxClose"),
    giftInfoBtn: document.getElementById("giftInfoBtn"),
    giftTooltip: document.getElementById("giftTooltip"),
    viewToggle: document.getElementById("viewToggle"),
    onceBtn: document.getElementById("onceBtn"),
    monthlyBtn: document.getElementById("monthlyBtn"),
    totalPrimary: document.getElementById("totalPrimary"),
    totalSecondary: document.getElementById("totalSecondary"),
    giftCheck: document.getElementById("giftCheck"),
    giftCheckRow: document.getElementById("giftCheckRow"),
    adminCheck: document.getElementById("adminCheck"),
    donateNow: document.getElementById("donateNow"),
    stickyFooter: document.getElementById("stickyFooter"),
    footerCartExtras: document.getElementById("footerCartExtras"),
    breakTotal: document.getElementById("breakTotal"),
    breakAdmin: document.getElementById("breakAdmin"),
    breakGrand: document.getElementById("breakGrand"),
    payOnlineTab: document.getElementById("payOnlineTab"),
    payUpiTab: document.getElementById("payUpiTab"),
    onlineFlow: document.getElementById("onlineFlow"),
    mobileUpiFlow: document.getElementById("mobileUpiFlow"),
    currencyLabelShort: document.getElementById("currencyLabelShort"),
    mobileUpiPayForm: document.getElementById("mobileUpiPayForm"),
    mobileUpiClaimForm: document.getElementById("mobileUpiClaimForm"),
    giftDetailsModal: document.getElementById("giftDetailsModal"),
    giftDesignModal: document.getElementById("giftDesignModal"),
    giftPreviewModal: document.getElementById("giftPreviewModal"),
    giftDetailsForm: document.getElementById("giftDetailsForm"),
    occasionTabs: document.getElementById("occasionTabs"),
    gifteeName: document.getElementById("gifteeName"),
    gifteeEmail: document.getElementById("gifteeEmail"),
    gifteeOccasion: document.getElementById("gifteeOccasion"),
    gifteeSubject: document.getElementById("gifteeSubject"),
    gifteeMessage: document.getElementById("gifteeMessage"),
    hideGiftAmount: document.getElementById("hideGiftAmount"),
    designGrid: document.getElementById("designGrid"),
    giftDesignBack: document.getElementById("giftDesignBack"),
    giftDesignNext: document.getElementById("giftDesignNext"),
    giftPreviewBack: document.getElementById("giftPreviewBack"),
    giftConfirmBtn: document.getElementById("giftConfirmBtn"),
    previewGiftee: document.getElementById("previewGiftee"),
    previewOccasion: document.getElementById("previewOccasion"),
    previewMessage: document.getElementById("previewMessage"),
    previewTable: document.getElementById("previewTable"),
    giftUpload: document.getElementById("giftUpload"),
    moreModal: document.getElementById("moreModal"),
    moreTitle: document.getElementById("moreTitle"),
    moreBody: document.getElementById("moreBody"),
    moreImg: document.getElementById("moreImg"),
    moreCost: document.getElementById("moreCost"),
    moreQrBtn: document.getElementById("moreQrBtn"),
    moreQrArt: document.getElementById("moreQrArt"),
    moreClose: document.getElementById("moreClose"),
    calcModal: document.getElementById("calcModal"),
    calcBtn: document.getElementById("calcBtn"),
    calcClose: document.getElementById("calcClose"),
    calcAmt: document.getElementById("calcAmt"),
    calcOut: document.getElementById("calcOut"),
    qrForm: document.getElementById("qrForm"),
    qrArt: document.getElementById("qrArt"),
    overlayGen: document.getElementById("overlayGen"),
    taxForm: document.getElementById("taxForm"),
    toast: document.getElementById("toast"),
    recurringModal: document.getElementById("recurringModal"),
    recurringForm: document.getElementById("recurringForm"),
    donorModal: document.getElementById("donorModal"),
    donorForm: document.getElementById("donorForm"),
    donorCurrency: document.getElementById("donorCurrency"),
    donorTotal: document.getElementById("donorTotal"),
    donorGift: document.getElementById("donorGift"),
    registerModal: document.getElementById("registerModal"),
    registerForm: document.getElementById("registerForm"),
    regTotal: document.getElementById("regTotal"),
    taxTabs: document.getElementById("taxTabs"),
    entityIndia: document.getElementById("entityIndia"),
    entityUsa: document.getElementById("entityUsa"),
    entityOther: document.getElementById("entityOther"),
    regNote: document.getElementById("regNote"),
    paymentModal: document.getElementById("paymentModal"),
    successModal: document.getElementById("successModal"),
    failedModal: document.getElementById("failedModal"),
    payMethods: document.getElementById("payMethods"),
    morePayToggle: document.getElementById("morePayToggle"),
    morePay: document.getElementById("morePay"),
    onlineSummary: document.getElementById("onlineSummary"),
    upiSummary: document.getElementById("upiSummary"),
    payQrArt: document.getElementById("payQrArt"),
    payNowBtn: document.getElementById("payNowBtn"),
    payNowBtn2: document.getElementById("payNowBtn2"),
    failDemoBtn: document.getElementById("failDemoBtn"),
    chequeForm: document.getElementById("chequeForm"),
    bankForm: document.getElementById("bankForm"),
    cashForm: document.getElementById("cashForm"),
    successTotal: document.getElementById("successTotal"),
    thanksName: document.getElementById("thanksName"),
    thanksAmt: document.getElementById("thanksAmt"),
    successRef: document.getElementById("successRef"),
    failedTotal: document.getElementById("failedTotal"),
    failedAmt: document.getElementById("failedAmt"),
    failedRef: document.getElementById("failedRef"),
    retryPayBtn: document.getElementById("retryPayBtn"),
  };

  const qty = {};
  const customAmt = {};
  CAUSES.forEach((c) => {
    qty[c.id] = 0;
    customAmt[c.id] = { inr: 0, usd: 0 };
  });

  let state = { country: "in", view: "grid", freq: "monthly", page: "widget" };
  let taxClaimDraft = { upi: "", amount: "" };
  let checkoutDraft = { donorName: "Donor", method: "online", ref: "214334" };
  let payMethod = "online";
  let giftDraft = {
    type: "personal",
    name: "",
    email: "",
    occasion: "",
    subject: "",
    message: "",
    hideAmount: false,
    design: "1",
  };

  const CHECKOUT_PAGES = {
    info: "checkout-info",
    payment: "checkout-payment",
    success: "checkout-success",
    failed: "checkout-failed",
  };

  const GIFT_PAGES = {
    details: "gift-details",
    design: "gift-design",
    preview: "gift-preview",
  };

  function parseHash() {
    const raw = (location.hash || "#/in/grid/monthly").replace(/^#/, "");
    const parts = raw.split("/").filter(Boolean);

    if (parts[0] === "tax-benefit") {
      return {
        page: "tax-benefit",
        country: state.country || "in",
        view: state.view || "grid",
        freq: state.freq || "monthly",
      };
    }

    if (parts[0] === "gift") {
      const step = parts[1] || "details";
      const pageMap = {
        details: GIFT_PAGES.details,
        design: GIFT_PAGES.design,
        preview: GIFT_PAGES.preview,
      };
      return {
        page: pageMap[step] || GIFT_PAGES.details,
        country: state.country || "in",
        view: state.view || "grid",
        freq: state.freq || "monthly",
      };
    }

    if (parts[0] === "checkout") {
      const step = parts[1] || "info";
      const pageMap = {
        info: CHECKOUT_PAGES.info,
        payment: CHECKOUT_PAGES.payment,
        success: CHECKOUT_PAGES.success,
        failed: CHECKOUT_PAGES.failed,
      };
      return {
        page: pageMap[step] || CHECKOUT_PAGES.info,
        country: state.country || "in",
        view: state.view || "grid",
        freq: state.freq || "monthly",
      };
    }

    const country = parts[0] === "us" ? "us" : "in";
    const view = parts[1] === "list" ? "list" : "grid";
    const freq = parts[2] === "once" ? "once" : "monthly";
    return { page: "widget", country, view, freq };
  }

  function writeHash(next, replace) {
    let hash;
    if (next.page === "tax-benefit") hash = "#/tax-benefit";
    else if (next.page === GIFT_PAGES.details) hash = "#/gift/details";
    else if (next.page === GIFT_PAGES.design) hash = "#/gift/design";
    else if (next.page === GIFT_PAGES.preview) hash = "#/gift/preview";
    else if (next.page === CHECKOUT_PAGES.info) hash = "#/checkout/info";
    else if (next.page === CHECKOUT_PAGES.payment) hash = "#/checkout/payment";
    else if (next.page === CHECKOUT_PAGES.success) hash = "#/checkout/success";
    else if (next.page === CHECKOUT_PAGES.failed) hash = "#/checkout/failed";
    else hash = `#/${next.country}/${next.view}/${next.freq}`;

    if (location.hash === hash) return;
    if (replace) history.replaceState(null, "", hash);
    else location.hash = hash;
  }

  function widgetHash() {
    return {
      page: "widget",
      country: state.country,
      view: state.view,
      freq: state.freq,
    };
  }

  function goGift(step) {
    const map = {
      details: GIFT_PAGES.details,
      design: GIFT_PAGES.design,
      preview: GIFT_PAGES.preview,
    };
    writeHash({ ...state, page: map[step] || GIFT_PAGES.details });
  }

  function closeGiftRoute() {
    closeModal(els.giftDetailsModal);
    closeModal(els.giftDesignModal);
    closeModal(els.giftPreviewModal);
    writeHash(widgetHash());
  }

  function goCheckout(step) {
    const map = {
      info: CHECKOUT_PAGES.info,
      payment: CHECKOUT_PAGES.payment,
      success: CHECKOUT_PAGES.success,
      failed: CHECKOUT_PAGES.failed,
    };
    writeHash({ ...state, page: map[step] || CHECKOUT_PAGES.info });
  }

  function closeCheckoutRoute() {
    closeModal(els.registerModal);
    closeModal(els.paymentModal);
    closeModal(els.successModal);
    closeModal(els.failedModal);
    writeHash(widgetHash());
  }

  function formatInr(n) {
    return (
      "₹" +
      Number(n).toLocaleString("en-IN", {
        minimumFractionDigits: n % 1 ? 2 : 0,
        maximumFractionDigits: 2,
      })
    );
  }

  function formatUsd(n) {
    return (
      "$" +
      Number(n).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  }

  function unitPrice(cause) {
    return state.country === "us" ? cause.priceUsd : cause.priceInr;
  }

  function lineTotal(cause) {
    if (cause.custom) {
      const base =
        state.country === "us" ? customAmt[cause.id].usd : customAmt[cause.id].inr;
      if (!base) return 0;
      return state.view === "list" ? base * Math.max(1, qty[cause.id]) : base;
    }
    return unitPrice(cause) * qty[cause.id];
  }

  function inrOfUsd(usd) {
    return usd * USD_TO_INR;
  }

  function totals() {
    let primary = 0;
    CAUSES.forEach((c) => {
      primary += lineTotal(c);
    });
    if (els.adminCheck.checked) primary *= 1 + ADMIN_RATE;
    const secondary = state.country === "us" ? inrOfUsd(primary) : null;
    return { primary, secondary };
  }

  function flagClass() {
    return state.country === "us" ? "flag flag-us" : "flag flag-in";
  }

  function cartBaseTotal() {
    let primary = 0;
    CAUSES.forEach((c) => {
      primary += lineTotal(c);
    });
    return primary;
  }

  function cartHasItems() {
    return cartBaseTotal() > 0;
  }

  function moneyPair(primary, inr) {
    if (state.country !== "us") return primary;
    return primary + " [" + inr + "]";
  }

  function isMobile() {
    return window.matchMedia("(max-width: 640px)").matches;
  }

  function applyChrome() {
    if (isMobile() && state.view === "list") {
      state.view = "grid";
    }
    els.widget.classList.toggle("list", state.view === "list");
    els.widget.classList.toggle("grid", state.view === "grid");
    els.widget.classList.toggle("us", state.country === "us");
    els.widget.classList.toggle("in", state.country === "in");
    els.widget.classList.toggle("has-cart", cartHasItems());
    const toList = state.view === "grid";
    if (els.viewToggle) {
      els.viewToggle.title = toList ? "Switch to list view" : "Switch to grid view";
      els.viewToggle.setAttribute(
        "aria-label",
        toList ? "Switch to list view" : "Switch to grid view"
      );
    }
    els.onceBtn.classList.toggle("active", state.freq === "once");
    els.monthlyBtn.classList.toggle("active", state.freq === "monthly");
    els.currencyFlag.className = flagClass();
    els.currencyLabel.textContent =
      state.country === "us" ? "($) US Dollar" : "(₹) Indian Rupees";
    if (els.currencyLabelShort) {
      els.currencyLabelShort.textContent =
        state.country === "us" ? "($)USD" : "(₹)INR";
    }
  }

  function stepperHtml(id, value) {
    return `
      <div class="stepper" data-id="${id}">
        <button type="button" data-step="-1" aria-label="Decrease">−</button>
        <input type="text" inputmode="numeric" value="${value}" data-qty="${id}" />
        <button type="button" data-step="1" aria-label="Increase">+</button>
      </div>`;
  }

  function dualHtml(primary, inr) {
    if (state.country !== "us") return `<div class="unit-price">${primary}</div>`;
    return `<div class="unit-price">${primary}<div class="inr-pill" style="margin-top:4px;display:inline-block">${inr}</div></div>`;
  }

  function renderItems() {
    const isList = state.view === "list";
    els.items.innerHTML = CAUSES.map((c) => {
      const moreLabel = isList ? "(more)" : "More Info";
      const customVal =
        state.country === "us" ? customAmt[c.id].usd : customAmt[c.id].inr;
      const unit = unitPrice(c);
      const line = lineTotal(c);
      const unitStr = state.country === "us" ? formatUsd(unit) : formatInr(unit);
      const lineStr = state.country === "us" ? formatUsd(line) : formatInr(line);
      const unitInr = formatInr(state.country === "us" ? inrOfUsd(unit) : unit);
      const lineInr = formatInr(state.country === "us" ? inrOfUsd(line) : line);

      const copy = `
        <div class="card-copy">
          <p class="card-title">${c.title} <button class="more" data-more="${c.id}" type="button">${moreLabel}</button></p>
          <p class="tax">Eligible Tax Benefit : India, USA</p>
        </div>`;

      if (isList) {
        const costCell = c.custom
          ? `<div class="custom-inline"><span>Enter Amount ${state.country === "us" ? "$" : "₹"}</span>
               <input class="amount-input" data-custom="${c.id}" value="${customVal}" /></div>`
          : dualHtml(unitStr, unitInr);
        return `
          <article class="card${c.custom ? " custom" : ""}">
            <img class="card-photo" src="${PHOTO}" alt="Children smiling" />
            <div class="card-body">
              ${copy}
              <div class="list-cost">${costCell}</div>
              <div class="list-units">${stepperHtml(c.id, qty[c.id])}</div>
              <div class="list-amt">${dualHtml(lineStr, lineInr)}</div>
            </div>
          </article>`;
      }

      const controls = c.custom
        ? `<div class="custom-row">
             <span>Enter Amount ${state.country === "us" ? "$" : "₹"}</span>
             <input class="amount-input" data-custom="${c.id}" value="${customVal}" />
           </div>`
        : `<div class="price-row">
             <span class="unit-price m-cost"><span class="m-cost-label">Cost: </span>${moneyPair(
               unitStr,
               unitInr
             )}</span>
             <div class="m-units-wrap">
               <span class="m-units-label">Units:</span>
               ${stepperHtml(c.id, qty[c.id])}
             </div>
           </div>`;

      const foot = `<div class="card-foot"><span class="amt-label">Amount :</span> <span>${moneyPair(
        lineStr,
        lineInr
      )}</span></div>`;

      return `
        <article class="card${c.custom ? " custom" : ""}">
          <img class="card-photo" src="${PHOTO}" alt="Children smiling" />
          <div class="card-body">
            ${copy}
            ${controls}
          </div>
          ${foot}
        </article>`;
    }).join("");
  }

  function renderTotals() {
    const base = cartBaseTotal();
    const admin = els.adminCheck.checked ? base * ADMIN_RATE : 0;
    const grand = base + admin;
    const hasCart = base > 0;

    function pair(n) {
      if (state.country === "us") return formatUsd(n) + " [" + formatInr(inrOfUsd(n)) + "]";
      return formatInr(n);
    }

    const primaryLabel =
      state.country === "us" ? formatUsd(els.adminCheck.checked ? grand : base) : formatInr(els.adminCheck.checked ? grand : base);

    els.totalPrimary.textContent = primaryLabel;
    if (state.country === "us") {
      els.totalSecondary.hidden = false;
      els.totalSecondary.textContent = formatInr(
        inrOfUsd(els.adminCheck.checked ? grand : base)
      );
    } else {
      els.totalSecondary.hidden = true;
    }

    if (els.breakTotal) {
      els.breakTotal.textContent = pair(base);
      els.breakAdmin.textContent = pair(admin || base * ADMIN_RATE);
      els.breakGrand.textContent = pair(els.adminCheck.checked ? grand : base + base * ADMIN_RATE);
      // When admin unchecked, still show estimated admin in breakdown on mobile mock when checked only
      if (!els.adminCheck.checked) {
        els.breakAdmin.textContent = pair(0);
        els.breakGrand.textContent = pair(base);
      }
    }

    els.widget.classList.toggle("has-cart", hasCart);
    els.donateNow.disabled = !hasCart;
  }

  function render() {
    applyChrome();
    renderItems();
    renderTotals();
    updateCalc();
  }

  function syncFromHash() {
    state = parseHash();
    render();
    syncTaxBenefitModal();
    syncGiftModals();
    syncCheckoutModals();
  }

  function patch(partial) {
    state = { ...state, ...partial, page: "widget" };
    writeHash(state);
    render();
    syncTaxBenefitModal();
    syncGiftModals();
    syncCheckoutModals();
  }

  function buildPreviewTable() {
    const rows = [];
    let total = 0;
    CAUSES.forEach((c) => {
      const amt = lineTotal(c);
      if (!amt) return;
      total += amt;
      const units = c.custom ? 1 : qty[c.id];
      const cost = c.custom ? amt : unitPrice(c);
      rows.push(
        `<tr><td>${c.heading || c.title}</td><td>${
          state.country === "us" ? formatUsd(cost) : formatInr(cost)
        }</td><td>${String(units).padStart(2, "0")}</td><td>${
          state.country === "us" ? formatUsd(amt) : formatInr(amt)
        }</td></tr>`
      );
    });
    const totalLabel = state.country === "us" ? formatUsd(total) : formatInr(total);
    const amountCell = giftDraft.hideAmount
      ? "Hidden"
      : totalLabel;
    return `
      <table>
        <thead><tr><th>Item</th><th>Cost</th><th>Units</th><th>Amount</th></tr></thead>
        <tbody>${rows.join("")}</tbody>
        <tfoot><tr><td colspan="3"><b>Total</b></td><td><b>${amountCell}</b></td></tr></tfoot>
      </table>`;
  }

  function fillGiftPreview() {
    els.previewGiftee.textContent = giftDraft.name || "Giftee";
    els.previewOccasion.textContent = giftDraft.occasion || "Occasion";
    let msg = giftDraft.message || "";
    if (!giftDraft.hideAmount) {
      const t = totals();
      const label = state.country === "us" ? formatUsd(t.primary) : formatInr(t.primary);
      if (msg.indexOf("gifted on your behalf") === -1) {
        msg += "\n\nA total amount of " + label + " has been gifted on your behalf.";
      }
    }
    els.previewMessage.textContent = msg;
    els.previewTable.innerHTML = buildPreviewTable();
  }

  function syncGiftModals() {
    const page = state.page;
    const isDetails = page === GIFT_PAGES.details;
    const isDesign = page === GIFT_PAGES.design;
    const isPreview = page === GIFT_PAGES.preview;

    if (!isDetails && !els.giftDetailsModal.hidden) closeModal(els.giftDetailsModal);
    if (!isDesign && !els.giftDesignModal.hidden) closeModal(els.giftDesignModal);
    if (!isPreview && !els.giftPreviewModal.hidden) closeModal(els.giftPreviewModal);

    if (isDetails && els.giftDetailsModal.hidden) openModal(els.giftDetailsModal);
    if (isDesign && els.giftDesignModal.hidden) openModal(els.giftDesignModal);
    if (isPreview) {
      fillGiftPreview();
      if (els.giftPreviewModal.hidden) openModal(els.giftPreviewModal);
    }
  }

  function summaryHtml() {
    const lines = [];
    CAUSES.forEach((c) => {
      const amt = lineTotal(c);
      if (!amt) return;
      const label = state.country === "us" ? formatUsd(amt) : formatInr(amt);
      lines.push(
        `<div class="summary-line"><span>${c.heading || c.title}</span><span>${label} <button type="button" data-remove="${c.id}" aria-label="Remove">🗑</button></span></div>`
      );
    });
    const t = totals();
    const fmt = (n) => (state.country === "us" ? formatUsd(n) : formatInr(n));
    let base = 0;
    CAUSES.forEach((c) => {
      base += lineTotal(c);
    });
    const feeVal = base * 0.03;
    const toPay = els.adminCheck.checked ? base + feeVal : base + feeVal;
    return `
      <div class="sum-head">Your donation summary</div>
      ${lines.join("") || "<p>No items selected.</p>"}
      <div class="summary-totals">
        <div><span>Total Amount</span><span>${fmt(base)}</span></div>
        <div><span>Transaction fees</span><span>${fmt(feeVal)}</span></div>
        <div class="to-pay"><span>To Pay:</span><span>${fmt(toPay)}</span></div>
      </div>`;
  }

  function setPayMethod(method) {
    payMethod = method;
    checkoutDraft.method = method;
    els.payMethods.querySelectorAll(".pay-method").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.method === method);
    });
    document.querySelectorAll(".pay-panel").forEach((panel) => {
      panel.hidden = panel.dataset.panel !== method;
    });
    if (method === "online" || method === "upi") {
      els.onlineSummary.innerHTML = summaryHtml();
      els.upiSummary.innerHTML = summaryHtml();
    }
    if (method === "upi") paintQr(els.payQrArt);
  }

  function fillConfirmTotals() {
    const label = currentTotalLabel();
    const ref = checkoutDraft.ref || "214334";
    els.successTotal.textContent = label;
    els.thanksAmt.textContent = label;
    els.thanksName.textContent = checkoutDraft.donorName || "Donor";
    els.successRef.textContent = ref;
    els.failedTotal.textContent = label;
    els.failedAmt.textContent = label;
    els.failedRef.textContent = ref;
  }

  function syncCheckoutModals() {
    const page = state.page;
    const isInfo = page === CHECKOUT_PAGES.info;
    const isPay = page === CHECKOUT_PAGES.payment;
    const isOk = page === CHECKOUT_PAGES.success;
    const isFail = page === CHECKOUT_PAGES.failed;

    if (!isInfo && !els.registerModal.hidden) closeModal(els.registerModal);
    if (!isPay && !els.paymentModal.hidden) closeModal(els.paymentModal);
    if (!isOk && !els.successModal.hidden) closeModal(els.successModal);
    if (!isFail && !els.failedModal.hidden) closeModal(els.failedModal);

    if (isInfo) {
      els.regTotal.textContent = currentTotalLabel();
      setTaxEntity(
        (document.querySelector(".tax-tab.active") &&
          document.querySelector(".tax-tab.active").dataset.tax) ||
          "india"
      );
      if (els.registerModal.hidden) openModal(els.registerModal);
    }
    if (isPay) {
      setPayMethod(payMethod || "online");
      if (els.paymentModal.hidden) openModal(els.paymentModal);
    }
    if (isOk) {
      fillConfirmTotals();
      if (els.successModal.hidden) openModal(els.successModal);
    }
    if (isFail) {
      fillConfirmTotals();
      if (els.failedModal.hidden) openModal(els.failedModal);
    }
  }

  function showToast(msg) {
    els.toast.textContent = msg;
    els.toast.hidden = false;
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => {
      els.toast.hidden = true;
    }, 2200);
  }

  function updateCalc() {
    const n = Number(els.calcAmt.value) || 0;
    if (state.country === "us") {
      els.calcOut.textContent = `${formatUsd(n)} ≈ ${formatInr(inrOfUsd(n))}`;
    } else {
      els.calcOut.textContent = `${formatInr(n)} ≈ ${formatUsd(n / USD_TO_INR)}`;
    }
  }

  els.items.addEventListener("click", (e) => {
    const more = e.target.closest("[data-more]");
    if (more) {
      const cause = CAUSES.find((c) => c.id === more.dataset.more);
      els.moreTitle.textContent = cause.heading;
      els.moreImg.src = PHOTO;
      els.moreImg.alt = cause.heading;
      const cost =
        state.country === "us"
          ? formatUsd(cause.custom ? customAmt[cause.id].usd : cause.priceUsd)
          : formatInr(cause.custom ? customAmt[cause.id].inr : cause.priceInr);
      els.moreCost.textContent = "Cost : " + cost.replace(/\.00$/, "");
      els.moreBody.innerHTML =
        "<p>" + DISCLAIMER.repeat(8).trim() + "</p>";
      els.moreModal.hidden = false;
      document.body.style.overflow = "hidden";
      return;
    }
    const stepBtn = e.target.closest("[data-step]");
    if (!stepBtn) return;
    const id = stepBtn.parentElement.dataset.id;
    const cause = CAUSES.find((c) => c.id === id);
    const delta = Number(stepBtn.dataset.step);
    if (cause.custom && state.view === "grid") {
      const key = state.country === "us" ? "usd" : "inr";
      const step = state.country === "us" ? 10 : 500;
      customAmt[id][key] = Math.max(0, customAmt[id][key] + delta * step);
    } else {
      qty[id] = Math.max(0, qty[id] + delta);
    }
    render();
  });

  els.items.addEventListener("change", (e) => {
    const qtyInput = e.target.closest("[data-qty]");
    if (qtyInput) {
      const id = qtyInput.dataset.qty;
      const cause = CAUSES.find((c) => c.id === id);
      const n = Math.max(0, Number(String(qtyInput.value).replace(/,/g, "")) || 0);
      if (cause.custom && state.view === "grid") {
        if (state.country === "us") customAmt[id].usd = n;
        else customAmt[id].inr = n;
      } else {
        qty[id] = n;
      }
      render();
    }
    const customInput = e.target.closest("[data-custom]");
    if (customInput) {
      const id = customInput.dataset.custom;
      const n = Math.max(0, Number(String(customInput.value).replace(/,/g, "")) || 0);
      if (state.country === "us") customAmt[id].usd = n;
      else customAmt[id].inr = n;
      render();
    }
  });

  els.currencyBtn.addEventListener("click", () => {
    els.currencyMenu.hidden = !els.currencyMenu.hidden;
    els.currencyBtn.setAttribute("aria-expanded", String(!els.currencyMenu.hidden));
  });

  els.currencyMenu.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-country]");
    if (!btn) return;
    els.currencyMenu.hidden = true;
    patch({ country: btn.dataset.country });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".currency-wrap")) els.currencyMenu.hidden = true;
    if (!e.target.closest("#giftInfoBtn") && !e.target.closest("#giftTooltip")) {
      els.giftTooltip.hidden = true;
    }
  });

  function openModal(el) {
    el.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal(el) {
    if (!el) return;
    el.hidden = true;
    if (
      els.moreModal.hidden &&
      els.fxModal.hidden &&
      els.calcModal.hidden &&
      els.recurringModal.hidden &&
      els.donorModal.hidden &&
      els.giftDetailsModal.hidden &&
      els.giftDesignModal.hidden &&
      els.giftPreviewModal.hidden &&
      els.registerModal.hidden &&
      els.paymentModal.hidden &&
      els.successModal.hidden &&
      els.failedModal.hidden
    ) {
      document.body.style.overflow = "";
    }
  }

  function currentTotalLabel() {
    const t = totals();
    return state.country === "us" ? formatUsd(t.primary) : formatInr(t.primary);
  }

  function ensureDonationSelected() {
    const t = totals();
    if (t.primary <= 0) {
      showToast("Please select at least one donation item.");
      return false;
    }
    return true;
  }

  function fillDonorModal(opts) {
    opts = opts || {};
    const amount =
      opts.amount != null && opts.amount !== ""
        ? opts.amount
        : taxClaimDraft.amount || totals().primary;
    const upi =
      Object.prototype.hasOwnProperty.call(opts, "upi")
        ? opts.upi
        : taxClaimDraft.upi || "";

    els.donorCurrency.value = state.country === "us" ? "USD" : "INR";
    els.donorTotal.value = Number(amount || 0).toFixed(2);
    els.donorUpi.value = upi;
    els.donorGift.checked = false;
    els.donorCountry.value = "India";
  }

  function openTaxBenefitRoute(opts) {
    opts = opts || {};
    taxClaimDraft = {
      upi: opts.upi || "",
      amount: opts.amount != null && opts.amount !== "" ? opts.amount : "",
    };
    writeHash({ page: "tax-benefit" });
  }

  function closeTaxBenefitRoute() {
    taxClaimDraft = { upi: "", amount: "" };
    els.donorForm.reset();
    closeModal(els.donorModal);
    writeHash(widgetHash());
  }

  function syncTaxBenefitModal() {
    if (state.page === "tax-benefit") {
      fillDonorModal();
      if (els.donorModal.hidden) openModal(els.donorModal);
    } else if (!els.donorModal.hidden) {
      closeModal(els.donorModal);
    }
  }

  function setTaxEntity(entity) {
    els.taxTabs.querySelectorAll(".tax-tab").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tax === entity);
    });
    els.entityIndia.hidden = entity !== "india";
    els.entityUsa.hidden = entity !== "usa";
    els.entityOther.hidden = entity !== "other";

    // disable hidden required fields so form can submit
    [els.entityIndia, els.entityUsa, els.entityOther].forEach((panel) => {
      panel.querySelectorAll("input, select, textarea").forEach((field) => {
        field.disabled = panel.hidden;
      });
    });

    if (entity === "usa") {
      els.regNote.innerHTML =
        "<b>Important Note :</b><p>Your donation is made to the Friends Fund via Danamojo USA Foundation, a 501(c)(3) nonprofit. Donations may be tax-deductible in the U.S. See <a href='#'>Terms</a>, <a href='#'>Pricing</a> and <a href='#'>Privacy Policy</a>.</p>";
    } else {
      els.regNote.innerHTML =
        "<b>Important Notes :</b><ul><li>Donations to Indian NGOs may be eligible for tax benefits under Section 80G.</li><li>US donors may claim benefits under Section 501(c)(3) where applicable.</li></ul>";
    }
  }

  function openRegisterModal() {
    goCheckout("info");
  }

  function openRecurringModal() {
    openModal(els.recurringModal);
  }

  function closeMore() {
    closeModal(els.moreModal);
  }

  function closeFx() {
    closeModal(els.fxModal);
  }

  els.fxInfoBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    openModal(els.fxModal);
  });
  els.fxClose.addEventListener("click", closeFx);
  els.fxModal.addEventListener("click", (e) => {
    if (e.target === els.fxModal) closeFx();
  });

  els.giftInfoBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    els.giftTooltip.hidden = !els.giftTooltip.hidden;
  });

  els.viewToggle.addEventListener("click", () =>
    patch({ view: state.view === "grid" ? "list" : "grid" })
  );
  els.onceBtn.addEventListener("click", () => patch({ freq: "once" }));
  els.monthlyBtn.addEventListener("click", () => patch({ freq: "monthly" }));

  els.adminCheck.addEventListener("change", renderTotals);

  function setMobilePayMode(mode) {
    const upi = mode === "upi";
    els.widget.classList.toggle("upi-mode", upi);
    els.payOnlineTab.classList.toggle("active", !upi);
    els.payUpiTab.classList.toggle("active", upi);
  }

  els.payOnlineTab.addEventListener("click", () => setMobilePayMode("online"));
  els.payUpiTab.addEventListener("click", () => setMobilePayMode("upi"));

  els.mobileUpiPayForm.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Open your UPI app to complete payment.");
  });

  els.mobileUpiClaimForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const upi = document.getElementById("mobileUpiRef").value.trim();
    const amount = document.getElementById("mobileUpiClaimAmt").value.trim();
    if (!upi) {
      showToast("Please enter UPI Ref No.");
      return;
    }
    openTaxBenefitRoute({ upi: upi, amount: amount });
  });

  window.addEventListener("resize", () => {
    if (isMobile() && state.view === "list") patch({ view: "grid" });
    if (!isMobile()) setMobilePayMode("online");
  });

  function startDonateFlow() {
    if (!ensureDonationSelected()) return;
    if (els.giftCheck.checked) {
      goGift("details");
      return;
    }
    if (state.freq === "monthly") openRecurringModal();
    else openRegisterModal();
  }

  els.donateNow.addEventListener("click", startDonateFlow);

  els.giftCheck.addEventListener("change", () => {
    els.giftCheckRow.classList.toggle("is-gift-on", els.giftCheck.checked);
  });

  document.querySelectorAll("[data-close]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.close;
      if (id === "donorModal") {
        closeTaxBenefitRoute();
        return;
      }
      closeModal(document.getElementById(id));
    });
  });

  document.querySelectorAll("[data-close-checkout]").forEach((btn) => {
    btn.addEventListener("click", closeCheckoutRoute);
  });

  document.querySelectorAll("[data-close-gift]").forEach((btn) => {
    btn.addEventListener("click", closeGiftRoute);
  });

  [els.recurringModal].forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });

  [els.registerModal, els.paymentModal, els.successModal, els.failedModal].forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeCheckoutRoute();
    });
  });

  [els.giftDetailsModal, els.giftDesignModal, els.giftPreviewModal].forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeGiftRoute();
    });
  });

  els.donorModal.addEventListener("click", (e) => {
    if (e.target === els.donorModal) closeTaxBenefitRoute();
  });

  els.occasionTabs.addEventListener("click", (e) => {
    const tab = e.target.closest(".occ-tab");
    if (!tab) return;
    els.occasionTabs.querySelectorAll(".occ-tab").forEach((b) => {
      b.classList.toggle("active", b === tab);
    });
    giftDraft.type = tab.dataset.occ;
  });

  els.giftDetailsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    giftDraft.name = els.gifteeName.value.trim();
    giftDraft.email = els.gifteeEmail.value.trim();
    giftDraft.occasion = els.gifteeOccasion.value;
    giftDraft.subject = els.gifteeSubject.value.trim();
    giftDraft.message = els.gifteeMessage.value.trim();
    giftDraft.hideAmount = els.hideGiftAmount.checked;
    goGift("design");
  });

  els.designGrid.addEventListener("click", (e) => {
    const tile = e.target.closest(".design-tile");
    if (!tile) return;
    els.designGrid.querySelectorAll(".design-tile").forEach((t) => {
      t.classList.toggle("active", t === tile);
    });
    giftDraft.design = tile.dataset.design;
  });

  els.giftUpload.addEventListener("change", () => {
    if (els.giftUpload.files && els.giftUpload.files[0]) {
      showToast("Custom image selected.");
      giftDraft.design = "custom";
    }
  });

  els.giftDesignBack.addEventListener("click", () => goGift("details"));
  els.giftDesignNext.addEventListener("click", () => goGift("preview"));
  els.giftPreviewBack.addEventListener("click", () => goGift("design"));

  els.giftConfirmBtn.addEventListener("click", () => {
    // Gift flow complete → registration (your information)
    goCheckout("info");
  });

  els.recurringForm.addEventListener("submit", (e) => {
    e.preventDefault();
    closeModal(els.recurringModal);
    goCheckout("payment");
  });

  els.donorForm.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("80G tax receipt details submitted.");
    closeTaxBenefitRoute();
  });

  els.taxForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const upi = document.getElementById("utrNo").value.trim();
    const amount = document.getElementById("taxAmount").value.trim();
    if (!upi) {
      showToast("Please enter UPI Ref No.");
      return;
    }
    openTaxBenefitRoute({ upi: upi, amount: amount });
  });

  els.taxTabs.addEventListener("click", (e) => {
    const tab = e.target.closest(".tax-tab");
    if (!tab) return;
    setTaxEntity(tab.dataset.tax);
  });

  els.registerForm.addEventListener("click", (e) => {
    const tipBtn = e.target.closest(".tip-btn");
    if (!tipBtn) return;
    e.preventDefault();
    const wrap = tipBtn.closest(".tip-wrap");
    const tip = wrap.querySelector(".field-tip");
    const open = tip.hidden;
    document.querySelectorAll(".field-tip").forEach((t) => {
      t.hidden = true;
    });
    tip.hidden = !open;
  });

  els.registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const active = document.querySelector(".entity-fields:not([hidden])");
    const nameInput = active && active.querySelector('input[placeholder="Enter Name"]');
    checkoutDraft.donorName = (nameInput && nameInput.value.trim()) || "Donor";
    checkoutDraft.ref = String(200000 + Math.floor(Math.random() * 700000));
    goCheckout("payment");
  });

  els.payMethods.addEventListener("click", (e) => {
    const methodBtn = e.target.closest(".pay-method");
    if (methodBtn) setPayMethod(methodBtn.dataset.method);
  });

  els.morePayToggle.addEventListener("click", () => {
    els.morePay.classList.toggle("collapsed");
  });

  els.paymentModal.addEventListener("click", (e) => {
    const remove = e.target.closest("[data-remove]");
    if (!remove) return;
    const id = remove.dataset.remove;
    const cause = CAUSES.find((c) => c.id === id);
    if (!cause) return;
    if (cause.custom) {
      customAmt[id].inr = 0;
      customAmt[id].usd = 0;
    } else {
      qty[id] = 0;
    }
    render();
    setPayMethod(payMethod);
  });

  function goSuccess() {
    checkoutDraft.ref = checkoutDraft.ref || String(200000 + Math.floor(Math.random() * 700000));
    goCheckout("success");
  }

  function goFailed() {
    checkoutDraft.ref = checkoutDraft.ref || String(200000 + Math.floor(Math.random() * 700000));
    goCheckout("failed");
  }

  els.payNowBtn.addEventListener("click", goSuccess);
  els.payNowBtn2.addEventListener("click", goSuccess);
  els.failDemoBtn.addEventListener("click", goFailed);

  els.chequeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    goSuccess();
  });
  els.bankForm.addEventListener("submit", (e) => {
    e.preventDefault();
    goSuccess();
  });
  els.cashForm.addEventListener("submit", (e) => {
    e.preventDefault();
    goSuccess();
  });

  els.retryPayBtn.addEventListener("click", () => goCheckout("payment"));
  document.getElementById("sendMsgSuccess").addEventListener("click", () => {
    showToast("Message sent to charity.");
  });
  document.getElementById("sendMsgFailed").addEventListener("click", () => {
    showToast("Message sent to charity.");
  });

  els.moreClose.addEventListener("click", closeMore);
  els.moreModal.addEventListener("click", (e) => {
    if (e.target === els.moreModal) closeMore();
  });

  els.calcBtn.addEventListener("click", () => {
    openModal(els.calcModal);
    updateCalc();
  });
  els.calcClose.addEventListener("click", () => closeModal(els.calcModal));
  els.calcAmt.addEventListener("input", updateCalc);

  function paintQr(target) {
    target.style.background =
      "repeating-conic-gradient(#111 0% 25%, #fff 0% 50%) " +
      Math.floor(Math.random() * 20) +
      "px " +
      Math.floor(Math.random() * 20) +
      "px / 10px 10px";
  }

  function genQr(e) {
    if (e) e.preventDefault();
    paintQr(els.qrArt);
    showToast("QR generated. Scan with any UPI app.");
  }

  els.qrForm.addEventListener("submit", genQr);
  els.overlayGen.addEventListener("click", genQr);
  els.moreQrBtn.addEventListener("click", () => {
    paintQr(els.moreQrArt);
    showToast("QR generated. Scan with any UPI app.");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (!els.moreModal.hidden) closeMore();
    if (!els.fxModal.hidden) closeFx();
    if (!els.calcModal.hidden) closeModal(els.calcModal);
    if (!els.recurringModal.hidden) closeModal(els.recurringModal);
    if (!els.donorModal.hidden || state.page === "tax-benefit") closeTaxBenefitRoute();
    if (
      !els.giftDetailsModal.hidden ||
      !els.giftDesignModal.hidden ||
      !els.giftPreviewModal.hidden ||
      String(state.page).indexOf("gift") === 0
    ) {
      closeGiftRoute();
      return;
    }
    if (
      !els.registerModal.hidden ||
      !els.paymentModal.hidden ||
      !els.successModal.hidden ||
      !els.failedModal.hidden ||
      String(state.page).indexOf("checkout") === 0
    ) {
      closeCheckoutRoute();
    }
  });

  window.addEventListener("hashchange", syncFromHash);

  if (!location.hash) writeHash(state, true);
  syncFromHash();
})();
