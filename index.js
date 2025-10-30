const heroBanner = document.getElementById("heroBanner");
const heroTitle = document.getElementById("heroTitle");
const heroTagline = document.getElementById("heroTagline");

const heroSlides = [
  {
    image: "https://organisemyhouse.com/wp-content/uploads/2018/01/758-tame-laundry-fb1.jpeg",
    title: "CleanX Laundry Services",
    tagline: "Fresh clothes, fresh start — we pick up, clean, and deliver with care."
  },
  {
    image: "https://t4.ftcdn.net/jpg/02/21/37/73/360_F_221377382_5trIjl3ZtjibbbblbtCzRDjn5Vqxc84X.jpg",
    title: "Pickup & Delivery",
    tagline: "We bring freshness straight to your doorstep."
  },
  {
    image: "https://media.istockphoto.com/id/1329135522/photo/stack-of-folded-clean-sheets-surgical-clothes-and-industrial-iron-in-an-industrial-laundry.jpg?s=612x612&w=0&k=20&c=0IEKirVnN0C9m2XHIRdDF0HQjruZx_E4fY5Df6qyqLc=",
    title: "Professional Dry Cleaning",
    tagline: "Delicate fabrics, expert care, and eco-friendly cleaning."
  }
];

let currentSlide = 0;

function changeHeroSlide() {
  const slide = heroSlides[currentSlide];
  heroBanner.style.backgroundImage = `url('${slide.image}')`;
  heroTitle.textContent = slide.title;
  heroTagline.textContent = slide.tagline;

  currentSlide = (currentSlide + 1) % heroSlides.length;
}

changeHeroSlide();
setInterval(changeHeroSlide, 4000);
