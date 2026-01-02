const houses = [
  {
    id: 1,
    price: "€700 / month",
    features: "4 Beds · 3 Baths · 322 m²",
    location: "Çagllavicë, Prishtinë",
    description: "Modern house in a quiet area.",
    images: [
      "img/H1.jpg",
      "img/H2.jpg",
      "img/H3.jpg",
      "img/H4.jpg",
      "img/H5.jpg",
    ],
  },
  {
    id: 2,
    price: "€950 / month",
    features: "4 Beds · 3 Baths · 450 m²",
    location: "Cërnicë Village",
    description: "Spacious family home with garden.",
    images: [
      "img/H6.jpg",
      "img/H7.jpg",
      "img/H8.jpg",
      "img/H9.jpg",
      "img/H10.jpg",
    ],
  },
  {
    id: 3,
    price: "€1200 / month",
    features: "5 Beds · 4 Baths · 700 m²",
    location: "Prishtinë",
    description: "Luxury house for rent.",
    images: [
      "img/H11.jpg",
      "img/H12.jpg",
      "img/H13.jpg",
      "img/H14.jpg",
      "img/H15.jpg",
    ],
  },
  {
    id: 4,
    price: "€650 / month",
    features: "2 Beds · 2 Baths · 80 m²",
    location: "Rruga C, Prishtinë",
    description: "A peaceful and well-kept home.",
    images: [
      "img/H1.jpg",
      "img/H2.jpg",
      "img/H3.jpg",
      "img/H4.jpg",
      "img/H5.jpg",
    ],
  },
  {
    id: 5,
    price: "€950 / month",
    features: "5 Beds · 3 Baths · 100 m²",
    location: "Tugjec, Kosovo",
    description: "Cozy home available for rent.",
    images: [
      "img/H6.jpg",
      "img/H7.jpg",
      "img/H8.jpg",
      "img/H9.jpg",
      "img/H10.jpg",
    ],
  },
  {
    id: 6,
    price: "€800 / month",
    features: "3 Beds · 2 Baths · 90 m²",
    location: "Rruga B, Prishtinë",
    description: "Luxurious space designed for effortless living.",
    images: [
      "img/H11.jpg",
      "img/H12.jpg",
      "img/H13.jpg",
      "img/H14.jpg",
      "img/H15.jpg",
    ],
  },
];

// ===== ID NGA URL =====
const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const house = houses.find((h) => h.id === id);

// ===== SIGURI (MOS U THYE FAQJA) =====
if (!house) {
  document.body.innerHTML = "<h2 style='color:white'>House not found</h2>";
  throw new Error("House not found");
}

// ===== MBUSH FAQEN =====
document.getElementById("price").textContent = house.price;
document.getElementById("features").textContent = house.features;
document.getElementById("location").textContent = house.location;
document.getElementById("description").textContent = house.description;

const mainImage = document.getElementById("mainImage");
const thumbnails = document.getElementById("thumbnails");

mainImage.src = house.images[0];

house.images.forEach((img, index) => {
  const image = document.createElement("img");
  image.src = img;

  if (index === 0) image.classList.add("active");

  image.onclick = () => {
    document
      .querySelectorAll(".thumbnails img")
      .forEach((i) => i.classList.remove("active"));

    image.classList.add("active");
    mainImage.src = img;
  };

  thumbnails.appendChild(image);
});
