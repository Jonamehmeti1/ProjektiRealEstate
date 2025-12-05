const PROPERTIES = [
  {
    title: "Modern Apartment in Ulpiana",
    type: "rent",
    location: "Ulpiana",
    price: 450,
    image: "img/rent.jpg",
    link: "Rent.html",
  },
  {
    title: "Luxury Villa in Velania",
    type: "sale",
    location: "Velania",
    price: 220000,
    image: "img/buy-sale.jpg",
    link: "Sale.html",
  },
  {
    title: "Cozy Flat in Dardania",
    type: "rent",
    location: "Dardania",
    price: 650,
    image: "img/rent.jpg",
    link: "Rent.html",
  },
  {
    title: "Family House in Prishtina",
    type: "sale",
    location: "Prishtina",
    price: 98000,
    image: "img/buy-sale.jpg",
    link: "Sale.html",
  },
];
const typeSelect = document.getElementById("typeSelect");
const locationSelect = document.getElementById("locationSelect");
const budgetSelect = document.getElementById("budgetSelect");
const searchBtn = document.getElementById("searchBtn");
const resultsEl = document.getElementById("results");
resultsEl.style.display = "none";
function renderResults(items) {
  if (!items.length) {
    resultsEl.innerHTML = `
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6">
            <div class="p-4 rounded text-center"
                 style="background:#fff; color:#000;">
              <strong>No results found.</strong><br/>
              <span class="text-muted">Try different filters.</span>
            </div>
          </div>
        </div>
      </div>
    `;
    return;
  }
  const cards = items.map((p) => {
      const priceText =
        p.type === "rent"
          ? `€${p.price.toLocaleString()}/month`
          : `€${p.price.toLocaleString()}`;

      const badgeText = p.type === "rent" ? "Rent" : "Sale";
      return `
        <div class="col-md-6 col-lg-4">
          <div class="card h-100 shadow-sm" style="border-radius:14px; overflow:hidden;">
            <div style="height:170px; background:url('${p.image}') center/cover no-repeat;"></div>
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-start">
                <h5 class="mb-1">${p.title}</h5>
                <span class="badge text-bg-dark">${badgeText}</span>
              </div>
              <div class="text-muted">${p.location}</div>
              <div class="fw-bold mt-2">${priceText}</div>
              <a href="${p.link}" class="btn btn-outline-dark btn-sm mt-3">View</a>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
  resultsEl.innerHTML = `
    <div class="container">
      <div class="row g-4 justify-content-center">
        ${cards}
      </div>
    </div>
  `;
}
function applyFilters() {
  const type = typeSelect.value; 
  const location = locationSelect.value; 
  const budgetMax = budgetSelect.value ? Number(budgetSelect.value) : null;

  const filtered = PROPERTIES.filter((p) => {
    if (type && p.type !== type) return false;
    if (location && p.location !== location) return false;
    if (budgetMax !== null && p.type === "rent" && p.price > budgetMax) return false;

    return true;
  });
  resultsEl.style.display = "block";
  renderResults(filtered);
}
searchBtn.addEventListener("click", applyFilters);