// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", type: "basic", url: "/" },
  { 
    name: "TBA", 
    type: "dropdown",
    childrens: [
      { name: "¿Qué es?", type: "basic", url: "/tba" },
      { name: "Formación TBA", type: "basic", url: "/course" },
    ]
  },
  { 
    name: "Certificados y Cursos", 
    type: "dropdown",
    childrens: [
      { name: "Cursos y diplomas", type: "basic", url: "/courses-diplomas" },
      { name: "Certificados TBA", type: "basic", url: "/tba-certificates" },
    ]
  },
  { name: "Sobre nosotros", url: "/about-us" },
  { name: "Contacto", url: "/contact" }
];
// An array of links for footer
const footerLinks = [
  {
    section: "Empresa",
    links: [
      { name: "Sobre nosotros", url: "/about-us" },
      { name: "Contacto", url: "/contact" }, ,
    ],
  },
  {
    section: "Test Básico de Aprendizaje",
    links: [
      { name: "TBA", url: "/tba" },
      { name: "Formación TBA", url: "/course" },
      { name: "Certificados", url: "/tba-certificates" },
    ],
  },
  {
    section: "Cursos y Diplomas",
    links: [
      { name: "Certificados", url: "/courses-diplomas" }
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  instagram: "https://www.instagram.com/cepaonline/",
  linkedin: "https://www.linkedin.com/in/pablo-jes%C3%BAs-san-mart%C3%ADn-catal%C3%A1n-2743b6256/?trk=people-guest_people_search-card&originalSubdomain=cl",
  cepa: "https://app.cepaonline.cl/login",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};