const navLinks = [
  {
    name: "Ishlar",
    link: "#work",
  },
  {
    name: "Tajriba",
    link: "#experience",
  },
  {
    name: "Ko‘nikmalar",
    link: "#skills",
  },
  {
    name: "Izohlar",
    link: "#testimonials",
  },
];

const words = [
  { text: "G‘oyalar", imgPath: "/images/ideas.svg" },
  { text: "Konsepsiyalar", imgPath: "/images/concepts.svg" },
  { text: "Dizaynlar", imgPath: "/images/designs.svg" },
  { text: "Kod", imgPath: "/images/code.svg" },
  { text: "G‘oyalar", imgPath: "/images/ideas.svg" },
  { text: "Konsepsiyalar", imgPath: "/images/concepts.svg" },
  { text: "Dizaynlar", imgPath: "/images/designs.svg" },
  { text: "Kod", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Yillik tajriba" },
  { value: 15, suffix: "+", label: "Mamnun mijozlar" },
  { value: 25, suffix: "+", label: "Yakunlangan loyihalar" },
  { value: 95, suffix: "%", label: "Mijozlarni qayta jalb qilish" },
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
  { imgPath: "/images/logos/company-logo-10.png" },
  { imgPath: "/images/logos/company-logo-11.png" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Sifatga e’tibor",
    desc: "Har bir detaldan xabardor bo‘lib, yuqori sifatli natijalar yetkazish.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Ishonchli aloqa",
    desc: "Jarayonning har bir bosqichida sizni xabardor qilib borish.",
  },
  {
    imgPath: "/images/time.png",
    title: "O‘z vaqtida topshirish",
    desc: "Loyihalarni jadval asosida, sifatli va diqqat bilan yakunlash.",
  },
];

const techStackImgs = [
  {
    name: "React dasturchi",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python dasturchi",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend dasturchi",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interaktiv dasturchi",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Loyiha menejeri",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React dasturchi",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python dasturchi",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend dasturchi",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interaktiv dasturchi",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Loyiha menejeri",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Hojiakbar ijodkorlik va texnik mahoratni birlashtirib, frontend unumdorligini ancha yaxshiladi. Uning ishi tezkor tajribalar taqdim etishda juda katta ahamiyatga ega bo‘ldi.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend dasturchi",
    date: "Yanvar 2023 - Hozirgacha",
    responsibilities: [
      "Hostinger vebsayti uchun foydalanuvchi interfeys xususiyatlarini ishlab chiqish va qo‘llab-quvvatlash.",
      "UI/UX dizaynerlar bilan yaqindan hamkorlikda ishlash.",
      "Veb ilovalarni maksimal tezlik va kengayish imkoniyati uchun optimallashtirish.",
    ],
  },
  {
    review: "Hojiakbar’ning Docker veb-ilovalari uchun qo‘shgan hissasi juda ajoyib. U muammolarga yechim topishga intiluvchi yondashuv bilan ishlaydi.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Fullstack dasturchi",
    date: "Iyun 2020 - Dekabr 2023",
    responsibilities: [
      "Docker veb-ilovalarini kengayish imkoniyatiga yo‘naltirib ishlab chiqish.",
      "Backend muhandislari bilan API integratsiyasida hamkorlik qilish.",
      "Docker ekotizimida ishlatilgan ochiq kodli loyihalarga hissa qo‘shish.",
    ],
  },
  {
    review: "Hojiakbar Appwrite mobil ilovasida yuqori sifat va samaradorlikni ta’minladi. U bizning mahsulot maqsadlarimizga mos keladigan yechimlar yetkazdi.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native dasturchi",
    date: "Mart 2019 - May 2020",
    responsibilities: [
      "React Native yordamida ko‘p platformali mobil ilovalar ishlab chiqish.",
      "Ilova tezligi va foydalanuvchi tajribasini optimallashtirish.",
      "Fikr-mulohazalar asosida mahsulot jamoasi bilan hamkorlikda yangi xususiyatlar joriy qilish.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "Hojiakbar haqida yaxshi gaplar aytishdan charchamayman. U murakkab talablarni silliq, funksional vebsaytga aylantira oldi. Uning muammoni hal qilish qobiliyati juda kuchli.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Hojiakbar bilan ishlash ajoyib tajriba bo‘ldi. U eskirgan saytimizni zamonaviy va foydalanuvchilarga qulay platformaga aylantirdi. Uning detallarga e’tibori va sifatga sodiqligi juda yuqori.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Hojiakbar bilan hamkorlik qilish zavqli bo‘ldi. Uning professionalligi, tezkorligi va yuqori natijalar berishga bo‘lgan sadoqati aniq ko‘rindi. U rivojlanishning barcha jihatlariga katta ishtiyoq bilan yondashadi.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Hojiakbar eskirgan saytimizni yangilab, intuitiv, zamonaviy va qulay platformaga aylantirdi. Umuman olganda, ish juda zo‘r bo‘ldi.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Hojiakbar’ning veb-ishlab chiqishdagi mahorati haqiqatan ham qoyilmaqom. U bizning e-commerce saytimiz uchun kuchli va kengaytiriladigan yechim yetkazdi.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Hojiakbar talablarimizni mukammal tushunib, kutilganidan ham yaxshi vebsayt ishlab chiqdi. Uning frontend va backend ko‘nikmalari yuqori darajada.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};

export default {
  words,
  abilities,
  logoIconsList,
};
