const houses = [
  {
    id: 1,
    price: "€700 / month",
    features: "4 Beds · 3 Baths · 322 m²",
    location: "Çagllavicë, Prishtinë",
    description:
      "A warm and welcoming family house with practical spaces for everyday living.",
    images: [
      "img/R3 (2).jpg",
      "img/R6.jpg",
      "img/R1 (2).jpg",
      "img/R4.jpg",
      "img/R5.jpg",
      "img/R2 (2).jpg",
    ],
  },
  {
    id: 2,
    price: "€950 / month",
    features: "4 Beds · 3 Baths · 450 m²",
    location: "Cërnicë Village",
    description:
      "A modern home with a private swimming pool, ideal for summer days and outdoor enjoyment.",
    images: [
      "img/Q1.jpg",
      "img/Q2.jpg",
      "img/Q3.jpg",
      "img/Q4.jpg",
      "img/Q5.jpg",
      "img/Q6.jpg",
    ],
  },
  {
    id: 3,
    price: "€1200 / month",
    features: "5 Beds · 4 Baths · 700 m²",
    location: "Prishtinë",
    description:
      "A cozy family-friendly home designed for comfort, safety, and quality time together.",
    images: [
      "img/V1.jpg",
      "img/V2.jpg",
      "img/V3.jpg",
      "img/V4.jpg",
      "img/V5.jpg",
      "img/V6.jpg",
    ],
  },
  {
    id: 4,
    price: "€650 / month",
    features: "2 Beds · 2 Baths · 80 m²",
    location: "Rruga C, Prishtinë",
    description:
      "This house features bright and spacious rooms with plenty of natural light.",
    images: [
      "img/W4.jpg",
      "img/W5.jpg",
      "img/W3.jpg",
      "img/W1.jpg",
      "img/W2.jpg",
      "img/W6.jpg",
    ],
  },
  {
    id: 5,
    price: "€950 / month",
    features: "5 Beds · 3 Baths · 100 m²",
    location: "Tugjec, Kosovo",
    description:
      "A quiet rural house ideal for those who enjoy nature and tranquility.",
    images: [
      "img/T1.jpg",
      "img/T2.jpg",
      "img/T3.jpg",
      "img/T6.jpg",
      "img/T5.jpg",
      "img/T4.jpg",
    ],
  },
  {
    id: 6,
    price: "€800 / month",
    features: "3 Beds · 2 Baths · 90 m²",
    location: "Rruga B, Prishtinë",
    description:
      "A perfect family environment with safe and functional living areas.",
    images: [
      "img/L4.jpg",
      "img/L5.jpg",
      "img/L3.jpg",
      "img/L1.jpg",
      "img/L2.jpg",
      "img/L6.jpg",
    ],
  },
  {
    id: 7,
    price: "€650 / month",
    features: "4 Beds · 2 Baths · 110 m²",
    location: "Lagjja Muhagjereve, Prishtinë",
    description:
      "The property offers open-plan spaces suitable for family living.",
    images: [
      "img/H9.jpg",
      "img/O1.jpg",
      "img/O2.jpg",
      "img/O3.jpg",
      "img/O4.jpg",
      "img/O5.jpg",
    ],
  },
  {
    id: 8,
    price: "€150 / month",
    features: "1 Beds · 1 Baths · 60 m²",
    location: "Ulpianë Village",
    description:
      "This house is ideal for students, located close to faculties and public transport, offering a comfortable and quiet environment for studying and living.",
    images: [
      "img/B2.jpg",
      "img/DHSt.jpg",
      "img/KSt.jpg",
      "img/BllkST.jpg",
      "img/B1.jpg",
    ],
  },
  {
    id: 9,
    price: "€500 / month",
    features: "3 Beds · 4 Baths · 150 m²",
    location: "Marevc,Prishtinë",
    description:
      "Surrounded by nature, this countryside home offers peace and clean air.",
    images: [
      "img/F1.jpg",
      "img/F2 (2).jpg",
      "img/F3.jpg",
      "img/F4.jpg",
      "img/F5.jpg",
      "img/F6.jpg",
    ],
  },
  {
    id: 10,
    price: "€700 / month",
    features: "4 Beds · 3 Baths · 302.26 m²",
    location: "Çagllavicë , Prishtinë",
    description:
      "This residence provides large living spaces ideal for comfort and privacy.",
    images: [
      "img/M1.jpg",
      "img/M2.jpg",
      "img/M3.jpg",
      "img/M4.jpg",
      "img/M6.jpg",
      "img/M5.jpg",
    ],
  },
  {
    id: 11,
    price: "€1050 / month",
    features: "5 Beds · 3 Baths · 250 m²",
    location: "Cërnica Village, Kosovo",
    description:
      "Located in a village area, this house offers fresh air and a calm lifestyle.",
    images: [
      "img/P1.jpg",
      "img/P2.jpg",
      "img/P3.jpg",
      "img/P4.jpg",
      "img/P5.jpg",
      "img/P6.jpg",
    ],
  },
  {
    id: 12,
    price: "€1200 / month",
    features: "7 Beds · 4 Baths · 300 m²",
    location: " Prishtinë , Kosovo",
    description:
      "A spacious and well-designed house suitable for modern living.",
    images: [
      "img/J5.jpg",
      "img/J2.jpg",
      "img/J3.jpg",
      "img/J4.jpg",
      "img/J1.jpg",
      "img/J6.jpg",
    ],
  },
  {
    id: 13,
    price: "€350 / month",
    features: "2 Beds · 1 Baths · 85 m²",
    location: "Ulpianë, Prishtinë",
    description: "A peaceful and well-kept home.",
    images: [
      "img/c1.jpg",
      "img/c2.jpg",
      "img/c3.jpg",
      "img/c4.jpg",
      "img/c5.jpg",
      "img/c6.jpg",
    ],
  },
  {
    id: 14,
    price: "€500 / month",
    features: "4 Beds · 3 Baths · 140 m²",
    location: "Prapashticë, Kosovo",
    description:
      "Located in a quiet area, this home is ideal for relaxation and privacy.",
    images: [
      "img/S6.jpg",
      "img/S2.jpg",
      "img/S3.jpg",
      "img/S4.jpg",
      "img/S5.jpg",
      "img/S1.jpg",
    ],
  },
  {
    id: 15,
    price: "€400 / month",
    features: "5 Beds · 3 Baths · 155 m²",
    location: "Matiqan, Prishtinë",
    description:
      "The house combines comfort, space, and a pleasant atmosphere.",
    images: [
      "img/y1.jpg",
      "img/y2.jpg",
      "img/y3.jpg",
      "img/y4.jpg",
      "img/y5.jpg",
      "img/y6.jpg",
    ],
  },
  {
    id: 16,
    title: "Luxury Penthouse in the middle of Pristina",
    price: "750 000 $",
    features: "3 Bedrooms · 2 Bathrooms · 280 m²",
    location: "Pristina , Kosovo",
    description:
      "The best penthouse with the best city view. It can be yours for the best price and making a deal with the best real estate agency.",
    images: [
      "img/download7.jpg",
      "img/download8.jpg",
      "img/download9.jpg",
      "img/download10.jpg",
      "img/download11.jpg",
      "img/download12.jpg",
    ],
  },
  {
    id: 17,
    title: "Modern Mansion",
    price: "295 000 $",
    features: "4 Bedrooms · 2 Bathrooms · 350 m²",
    location: "Lagja Marigona, Kosovo",
    description:
      "Peace and comfort in one price. Getting your dream house now has a wonderful price. Make your dreams a reality. ",
    images: [
      "img/download13.jpg",
      "img/download14.jpg",
      "img/download15.jpg",
      "img/download16.jpg",
      "img/download17.jpg",
      "img/download18.jpg",
    ],
  },
  {
    id: 18,
    title: "Elegant Big Mansion",
    price: "980 000 $",
    features: "4 Bedrooms · 3 Bathrooms · 450 m²",
    location: "Vitomiricë, Kosovo",
    description:
      "Country life and city luxury in one house and one price. The house that everyone has been waiting for is for sale.",
    images: [
      "img/download19.jpg",
      "img/download20.jpg",
      "img/download21.jpg",
      "img/download22.jpg",
      "img/download23.jpg",
      "img/download24.jpg",
    ],
  },
  {
    id: 19,
    title: "Cozy Mountain Mansion",
    price: "1 250 000 $",
    features: "4 Bedrooms · 3 Bathrooms · 322 m²",
    location: "Rugovë, Kosovo",
    description:
      "Modern mansion in a quiet and clean area. Buy the view and the comfort not only the hose.",
    images: [
      "img/download25.jpg",
      "img/download26.jpg",
      "img/download27.jpg",
      "img/download28.jpg",
      "img/download29.jpg",
      "img/download30.jpg",
    ],
  },
  {
    id: 20,
    title: "Urban Comfy Penthouse",
    price: "430 000 $",
    features: "2 Bedrooms · 3 Bathromms · 200 m²",
    location: "Mitrovicë, Kosovo",
    description:
      "The best penthouse for a family. Comfort,peace and joy all in one place",
    images: [
      "img/download31.jpg",
      "img/download32.jpg",
      "img/download33.jpg",
      "img/download34.jpg",
      "img/download35.jpg",
      "img/download36.jpg",
    ],
  },
  {
    id: 21,
    title: "Modern Villa",
    price: "2 300 000 $",
    features: "5 Bedrooms · 3 Bathrooms · 700 m²",
    location: "Rugovë, Kosovo",
    description:
      "Modern Villa for sale. Buy yourself a place where your mind stops overthinking and the body rests.",
    images: [
      "img/download37.jpg",
      "img/download38.jpg",
      "img/download39.jpg",
      "img/download40.jpg",
      "img/download41.jpg",
      "img/download42.jpg",
    ],
  },
  {
    id: 22,
    title: "Luxury Modern House",
    price: "€380 000 $",
    features: "2 Bedrooms · 2 Bathrooms · 180 m²",
    location: "Bërrnicë, Kosovo",
    description:
      "A peaceful and well-kept home. Put your children a smile on their face.",
    images: [
      "img/download43.jpg",
      "img/download44.jpg",
      "img/download45.jpg",
      "img/download46.jpg",
      "img/download47.jpg",
      "img/download48.jpg",
    ],
  },
  {
    id: 23,
    title: "City Life Modern Duplex",
    price: "720 000 $",
    features: "5 Bedrooms · 3 Bathrooms · 225 m²",
    location: "Prishtinë, Kosovo",
    description:
      "The dream duplex everyone wants has officially arrived. Buy yourself status not only a apartment.",
    images: [
      "img/download56.jpg",
      "img/download57.jpg",
      "img/download58.jpg",
      "img/download59.jpg",
      "img/download60.jpg",
      "img/download61.jpg",
    ],
  },
  {
    id: 24,
    title: "Modern Glass Villa",
    price: "1 950 000 $",
    features: "4 Bedrooms · 4 Bathrooms · 390 m²",
    location: " Gjilan, Kosovo",
    description: "Luxurious space designed for effortless and joyful living.",
    images: [
      "img/download49.jpg",
      "img/download50.jpg",
      "img/download51.jpg",
      "img/download52.jpg",
      "img/download53.jpg",
      "img/download54.jpg",
    ],
  },
  {
    id: 25,
    title: "Ultra-luxury and Modern Villa",
    price: "3 600 000 $",
    features: "6 Bedrooms · 3 Bathrooms · 522 m²",
    location: "Junik, Kosovo",
    description: "Modern Villa in a quiet and peaceful area.",
    images: [
      "img/download62.jpg",
      "img/download64.jpg",
      "img/download65.jpg",
      "img/download66.jpg",
      "img/download67.jpg",
      "img/download63.jpg",
    ],
  },
  {
    id: 26,
    title: "Cozy Family Apartment",
    price: "520 000 $",
    features: "3 Bedrooms · 2 Bathrooms · 250 m²",
    location: "Prishtinë, Kosovo",
    description:
      "A place where you can find you and your family making memories.",
    images: [
      "img/download.jpg",
      "img/download2.jpg",
      "img/Download3.jpg",
      "img/Download4.jpg",
      "img/Download5.jpg",
      "img/download6.jpg",
    ],
  },
  {
    id: 27,
    title: "Lakeview Villa",
    price: "210 000 $",
    features: "3 Bedrooms · 1 Bathrooms · 120 m²",
    location: "Deçan, Kosovo",
    description: "Lakeview Villa ready to calm your mind.",
    images: [
      "img/download68.jpg",
      "img/download69.jpg",
      "img/download70.jpg",
      "img/Download71.jpg",
      "img/download72.jpg",
      "img/download73.jpg",
    ],
  },
  {
    id: 28,
    title: "Ultra-luxury Mansion",
    price: "495 000 $",
    features: "4 Bedrooms · 2 Bathrooms · 280 m²",
    location: "Arllat, Kosovo",
    description:
      "A peaceful and well-kept home. Get a place where your heart feels free.",
    images: [
      "img/download80.jpg",
      "img/download75.jpg",
      "img/Download76.jpg",
      "img/Download77.jpg",
      "img/Download78.jpg",
      "img/download79.jpg",
    ],
  },
  {
    id: 29,
    title: "Cozy and Traditional House",
    price: "850 000 $",
    features: "5 Bedrooms · 2 Bathrooms · 500 m²",
    location: "Istog, Kosovo",
    description: "Cozy home available for sale.",
    images: [
      "img/download81.jpg",
      "img/download82.jpg",
      "img/Download83.jpg",
      "img/Download84.jpg",
      "img/Download85.jpg",
      "img/download86.jpg",
    ],
  },
  {
    id: 30,
    title: "High-Rise Luxury Villa",
    price: "1 150 000 $",
    features: "3 Bedrooms · 3 Bathrooms · 390 m²",
    location: " Rugovë, Kosovo",
    description:
      "Luxurious space designed for easy and happy living. You only live once so live it the best you can.",
    images: [
      "img/download17.jpg",
      "img/download24.jpg",
      "img/Download63.jpg",
      "img/Download11.jpg",
      "img/Download38.jpg",
      "img/download28.jpg",
    ],
  },
];

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const house = houses.find((h) => h.id === id);

//per siguri te faqes mos me u thy
if (!house) {
  document.body.innerHTML = "<h2 style='color:white'>House not found</h2>";
  throw new Error("House not found");
}

// ===== MBUSH FAQEN =====
document.getElementById("title").textContent = house.title;
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
    mainImage.style.opacity = 0;
    setTimeout(() => {
      mainImage.src = img;
      mainImage.style.opacity = 1;
    }, 200);
  };

  thumbnails.appendChild(image);
});
