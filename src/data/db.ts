/**
 * @typedef {Object} HeroSectionEntry
 * @property {string} title
 * @property {string} year
 * @property {string} location
 * @property {string} shortDescription
 * @property {string} fullDescription
 * @property {string} director
 * @property {string} producer
 * @property {string} writer
 * @property {string} backgroundImageLg
 * @property {string} backgroundImageMd
 * @property {string} posterImage
 * @property {boolean} showReserveButton
 */

/**
 * @typedef {Object} ActorEntry
 * @property {string} name
 * @property {string} img
 */

/**
 * @typedef {Object} ArchiveEntry
 * @property {HeroSectionEntry} heroSectionData
 * @property {ActorEntry[]} actors
 * @property {ActorEntry[]} directors
 * @property {ActorEntry[]} writers
 */

/**
 * @type {Object.<string, ArchiveEntry>}
 */

interface HeroSectionEntry {
  title: string;
  year: string;
  location: string;
  shortDescription: string;
  fullDescription: string;
  director: string;
  producer: string;
  writer: string;
  backgroundImageLg: string;
  backgroundImageMd: string;
  posterImage: string;
  showReserveButton: boolean;
}

interface ActorEntry {
  name: string;
  img: string;
}

interface ArchiveEntry {
  heroSectionData: HeroSectionEntry;
  actors?: ActorEntry[];
  directors?: ActorEntry[];
  writers?: ActorEntry[];
}

interface ArchiveData {
  [key: string]: ArchiveEntry;
}

const archiveData: ArchiveData = {
  '1404': {
    heroSectionData: {
      title: "تیر آخر",
      year: "۱۴۰۴",
      location: "مجموعه فرهنگی سرچشمه",
      shortDescription: "سه سرباز در جبهه جنگی در سال های آتی از میدان نبرد فرار می کنند. داستان در کاروانسرایی عجیب همراه با...",
      fullDescription: "سه سرباز در بحبوحه جنگی در سال های آتی از میدان نبرد فرار می کنند. داستان در کاروانسرایی عجیب همراه با کشمکشی پرتنش میان سکوت، فریاد، زندگی، عشق و مبارزه روایت می شود.",
      director: "محمد امین دست کار",
      producer: "دانیال محسنی",
      writer: "محمدسجاد بیگی",
      backgroundImageLg: "/images/archive/1404/poster616.webp",
      backgroundImageMd: "/images/archive/1404/poster63.041db728fac54bf488d1.webp",
      posterImage: "/images/archive/1404/poster63.041db728fac54bf488d1.webp",
      showReserveButton: true,
    },
    actors: [
      { name: 'محمدجواد آقایی', img: '/images/archive/1404/sobhan.6d71aa892d1d66a98637.webp' },
      { name: 'ابوالفضل حبیبی', img: '/images/archive/1404/esmaiil.8ca10e969b04e5e93c3d.webp' },
      { name: 'امیرحسین فکوروند', img: '/images/archive/1404/ghonfoz.891c0fff1358509fccf6.webp' },
      { name: 'علیرضا نیکخویی', img: '/images/archive/1404/yahya.99700e318086f3e9db20.webp' },
      { name: 'محمد رضاییان', img: '/images/archive/1404/rezayian.c846c8d895c231969073.webp' },
      { name: 'مهدی قدرتی', img: '/images/archive/1404/ghodrati.9a7a2b9c26e345a62183.webp' },
      { name: 'سیدجواد حسینی', img: '/images/archive/1404/hoseini.90bb20bf92d224c77d05.webp' },
      { name: 'محمدحسن آقایی', img: '/images/archive/1404/younes.e0d28e1ef2b42c7f6231.webp' },
      { name: 'سید احسان رجایی', img: '/images/archive/1404/dovomi.95abe37dcdc8ea1b0166.webp' },
      { name: 'محمدحسین نیکبخت', img: '/images/archive/1404/nikbakht.d9d6347958c764d634ff.webp' },
      { name: 'علی محمدی فرید', img: '/images/archive/1404/farid.ec0ff77a2871c5308e5b.webp' },
    ],
    directors: [
      { name: 'محمد امین دست کار', img: '/images/archive/1404/amin.ce9f9b156010594d8b62 copy.webp' },
      { name: 'دانیال محسنی', img: '/images/archive/1404/danial.dab82000434c119252c7.webp' },
      { name: 'محمدسجاد بیگی', img: '/images/archive/1404/beigi.03f3313d7ddbcaf1ff67.webp ' },
    ],
    writers: [
      { name: 'محمدجواد آقایی', img: '/images/archive/1404/sobhan.6d71aa892d1d66a98637.webp'},
      { name: 'امیررضا علینقی', img: '/images/archive/1404/ali.8f40d5b2d73709fd2125.webp' },
      { name: 'عرفان سلطانیان', img: '/images/archive/1404/soli.5d1ea1588fe685422c65.webp' },
      { name: 'امیرحسین حیدری', img: '/images/archive/1404/heydari.b7a3c3475e9f1f3463a3.webp' },
      { name: 'سید مهدی پورایوانی', img: '/images/archive/1404/poori.127302fb791ec733e4dc.webp' },
      { name: 'ابوالفضل حبیبی', img: '/images/archive/1404/esmaiil.8ca10e969b04e5e93c3d.webp' },
    ],
  },
  '1403': {
    heroSectionData: {
      title: "2027 نقطه سر خط",
      year: "1403",
      location: "تالار سوره حوزه هنری انقلاب اسلامی",
      shortDescription: "2027 نقطه سرخط به چالش‌های خانواده‌ای در کشوری دیگر اشاره می‌کند که چند نوجوان ایرانی درگیر ماجرای آنان ",
      fullDescription: "2027 نقطه سرخط به چالش‌های خانواده‌ای در کشوری دیگر اشاره می‌کند که چند نوجوان ایرانی درگیر ماجرای آنان می شوند و زمینه تحول برخی از آنان را رقم می زند ...",
      director: "محمد امین دست کار",
      producer: "محمد امین دست کار",
      writer: "محمدسجاد بیگی - محمدحسین نیکبخت",
      backgroundImageLg: "/images/archive/1403/poster516.webp",
      backgroundImageMd: "/images/archive/1403/poster53.71ce97cd5902857f12c5.webp",
      posterImage: "/images/archive/1403/poster53.71ce97cd5902857f12c5.webp",
      showReserveButton: false,
    },
    actors: [
      { name: 'نورا آینه چی', img: '/images/archive/1403/najla.cee9bc9581ee2fadd408.webp' },
      { name: 'امیرعلی کاظمی', img: '/images/archive/1403/arsham.bbec57b26318b6be31e7.webp' },
      { name: 'محمدرضا افشار', img: '/images/archive/1403/hosein.3b167fd9947f31c0aff8.webp' },
      { name: 'محمدعرفان فکور', img: '/images/archive/1403/yousef.d78555a5d800549691d0.webp' },
      { name: 'محمدجواد آقایی', img: '/images/archive/1403/sobhan.6e51b56985523e2c2e55.webp' },
      { name: 'امیرحسین فکور', img: '/images/archive/1403/ghonfoz.388236166e04441b3692.webp' },
      { name: 'ابوالفضل حبیبی', img: '/images/archive/1403/esmaiil.8a175fd78479c914758a.webp' },
      { name: 'محمدحسن آقایی', img: '/images/archive/1403/younes.b6b72d60a650501aa4cc.webp' },
      { name: 'امیرحسن حسن زاده', img: '/images/archive/1403/hamdan.7a3f90881c7f58d2da9e.webp' },
      { name: 'سید احسان رجایی', img: '/images/archive/1403/dovomi.8fee95259e2d2e27921c.webp' },
      { name: 'علیرضا نیکخوئی', img: '/images/archive/1403/yahya.7ea3fe4baa1f47fb232e.webp' },

    ],
    directors: [
      { name: 'محمد امین دست کار', img: '/images/archive/1403/amin.ce9f9b156010594d8b62.webp' },
      { name: 'دانیال محسنی', img: '/images/archive/1403/danial.dab82000434c119252c7.webp' },
      { name: 'محمدسجاد بیگی', img: '/images/archive/1403/beigi.03f3313d7ddbcaf1ff67.webp ' },
    ],
  },
  '1402': {
    heroSectionData: {
      title: "تماشاچی",
      year: "1402",
      location: "تالار سوره حوزه هنری انقلاب اسلامی",
      shortDescription: "ــک حکومــت پادشــاهی کــه در آن گروهــی مخفــی از بــزرگان، قصــد بــه قتــل رســاندن پادشــاه را دارنــد تــا   ",
      fullDescription: "یــک حکومــت پادشــاهی کــه در آن گروهــی مخفــی از بــزرگان، قصــد بــه قتــل رســاندن پادشــاه را دارنــد تــا یکــی را از خودشــان بــه قــدرت برســانند. حبیــب از بــزرگان شــورای مخفــی اســت و بایــد تصمیــم بــه حمایــت یــا عــدم حمایــت از قتــل شــاه بگیــرد. ماجــرای داســتان، شــرح دوگانگــی حبیــب در ایــن تصمیــم گیــری بــزرگ اســت. و در آخــر، وقایعــی را در خصــوص تماشــاچیانی کــه در زمــان ماجــرای آتــش زدن خانــه حضــرت زهـرا سلام الله علیها حضـور داشـتند، بـه تصویـر کشــیده می شــود.",
      director: "محمد امین دست کار",
      producer: "محمد امین دست کار",
      writer: "رضا عادلی",
      backgroundImageLg: "/images/archive/1402/poster416.webp",
      backgroundImageMd: "/images/archive/1402/poster43.32664f5d9d1f1c34050e.webp",
      posterImage: "/images/archive/1402/poster43.32664f5d9d1f1c34050e.webp",
      showReserveButton: false,
    },
    actors: [
      { name: 'محمد رضاییان', img: '/images/archive/1402/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'سید امیرعباس روحانی', img: '/images/archive/1402/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'سید احسان رجایی', img: '/images/archive/1402/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'سید جواد حسینی', img: '/images/archive/1402/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'علی محمدی فرید', img: '/images/archive/1402/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'محمد حسن آقائی', img: '/images/archive/1402/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'علیرضا نیکخوئی', img: '/images/archive/1402/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'محمدحسین نیکبخت', img: '/images/archive/1402/Screenshot from 2025-06-11 23-22-48.png' },
    ],
    directors: [
      { name: 'رضا عادلی', img: '/images/archive/1402/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'محمد امین دست کار', img: '/images/archive/1402/Screenshot from 2025-06-11 23-22-48.png' },
    ],
  },
  '1401': {
    heroSectionData: {
      title: "وهم",
      year: "1401",
      location: "تالار سوره حوزه هنری انقلاب اسلامی",
      shortDescription: "وهــم درون ذهــن فــردی بــه نــام الجابــری اسـت. الجابـری زمانـی کـه وارد حالـت کما میشـود، بـه دنیـای وهـم میـرود.",
      fullDescription: "وهــم درون ذهــن فــردی بــه نــام الجابــری اسـت. الجابـری زمانـی کـه وارد حالـت کما میشـود، بـه دنیـای وهـم میـرود. ایـن دنیـای خیالـی دادگاهـی اسـت کـه الجابـری بـر علیـه خـود برگـزار مـی کنـد تـا ببینـد کـه در طـول عمـر خـود مرتکب چـه گناه هایی شده و چه چیزهای مهمی را در زندگی ندیده است. تعصـب نداشـتن در برابـر حقیقـت، راضـی بودن بر فعلـی کـه در گذشـته رقـم خـورده از جملـه گناهانـی است که الجابری را مورد محاکــمه قرار می دهد. و در نهایــت الجابــری بــه جــرم شــرکت در ماجــرای حملـه بـه خانـه وحـی محکـوم خواهـد شـد. چـرا کـه او نیـز بـر ایـن ماجـرا رضایـت داشـته اسـت..",
      director: "محمد امین دست کار",
      producer: "محمد امین دست کار",
      writer: "رضا عادلی",
      backgroundImageLg: "/images/archive/1401/poster316.webp",
      backgroundImageMd: "/images/archive/1401/poster33.d86b40f675619743ddaa.webp",
      posterImage: "/images/archive/1401/poster33.d86b40f675619743ddaa.webp",
      showReserveButton: false,
    },
    actors: [
      { name: 'ابوالفضل حبیبی', img: '/images/archive/1401/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'محمدحسین نیکبخت', img: '/images/archive/1401/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'امیرحسین فکور', img: '/images/archive/1401/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'امیرحسین حسن زاده', img: '/images/archive/1401/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'علی محمدی فرید', img: '/images/archive/1401/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'سید امیرعباس روحانی', img: '/images/archive/1401/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'سید جواد حسینی', img: '/images/archive/1401/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'علی عرب', img: '/images/archive/1401/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'محمد حسن آقائی', img: '/images/archive/1401/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'علیرضا نیکخوئی', img: '/images/archive/1401/Screenshot from 2025-06-11 23-22-48.png' },
    ],
    directors: [
      { name: 'رضا عادلی', img: '/images/archive/1401/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'محمد امین دست کار', img: '/images/archive/1401/Screenshot from 2025-06-11 23-22-48.png' },
    ],
  },
  '1400': {
    heroSectionData: {
      title: "سرزمین مادری",
      year: "1400",
      location: "سالن امام علی (علیه السلام)",
      shortDescription: "پــس از فتــح خیبــر یهودیــان از قــدرت اسلام بــه لــرزه درآمــده انــد و بــرای جلوگیــری از شكســت هــای بعــدی",
      fullDescription: "پــس از فتــح خیبــر یهودیــان از قــدرت اسلام بــه لــرزه درآمــده انــد و بــرای جلوگیــری از شكســت هــای بعــدی بهتریــن زمینشــان را كــه فــدك باشــد بــه پیامبــر هبــه كــرده انــد. پیامبــر هــم بــه دســتور خــدا آن را بــه دختــرش فاطمــه سلام الله علیهــا بخشــیده اســت. عــده ای هــم بــه ظاهــر مســلمان شــده انــد تــا در فرصــت مناسب بتوانــند به مــسلمانان ضرــبه بزنــند. اسـحاق هـم لبـاس اسلام پوشـیده و حـاال از جانـب دخــت پیامبــر بــاغ دار فــدك اســت. ســه ســال گذشــته و پیامبــر از ایــن جهــان رخــت بــر بســته اسـت. آشـفتگی و جـدال بـر سـر جانشـینی پیامبـر بـرای یهودیـان بهتریـن فرصـت اسـت بـرای بازپـس گیـری سرزمینشـان آن هـا بـه سـراغ اسـحاق آمـده انــد امــا.",
      director: "محمد امین دست کار",
      producer: "محمد امین دست کار",
      writer: "علی قادری",
      backgroundImageLg: "/images/archive/1400/poster216.webp",
      backgroundImageMd: "/images/archive/1400/poster23.5e5770820b232713bd66.webp",
      posterImage: "/images/archive/1400/poster23.5e5770820b232713bd66.webp",
      showReserveButton: false,
    },
    actors: [
      { name: 'محمدحسن اسلامی', img: '/images/archive/1400/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'سید احسان رجایی', img: '/images/archive/1400/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'ابوالفضل حبیبی', img: '/images/archive/1400/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'مجتبی رستگار', img: '/images/archive/1400/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'محمد رضاییان', img: '/images/archive/1400/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'علی عرب', img: '/images/archive/1400/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'علیرضا نیکخوئی', img: '/images/archive/1400/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'علی محمدی فرید', img: '/images/archive/1400/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'علی حیدری', img: '/images/archive/1400/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'محمدعلی پنبه بُر', img: '/images/archive/1400/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'سید امیرعباس روحانی', img: '/images/archive/1400/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'سید جواد حسینی', img: '/images/archive/1400/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'حسین سالکی', img: '/images/archive/1400/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'محمد حسن آقائی', img: '/images/archive/1400/Screenshot from 2025-06-11 23-22-48.png' },
    ],
    directors: [
      { name: 'علی قادری', img: '/images/archive/1400/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'محمد امین دست کار', img: '/images/archive/1400/Screenshot from 2025-06-11 23-22-48.png' },
    ],
  },
  '1397': {
    heroSectionData: {
      title: "حرامیان در احرام",
      year: "1397",
      location: "دبیرستان حلی و امام صادق",
      shortDescription: "ایــن داســتان حــول شــخصیتی بــه نــام ضیاافنــدی مــی باشــد کــه پســر خــود را از دســت داده و در پــی انتقــام",
      fullDescription: "ایــن داســتان حــول شــخصیتی بــه نــام ضیاافنــدی مــی باشــد کــه پســر خــود را از دســت داده و در پــی انتقــام جویــی از مقصریــن ایــن اتفــاق مــی باشــد. حــرم و حرامیــان در حریــم کعبــه رســول خاتــم گشـتند تـا روزی کـه کعبـه درهـم مـی شـکند، بـه یغمــا برنــد میــراث نبــوی را.",
      director: "محمد امین دست کار",
      producer: "محمد امین دست کار",
      writer: "مسعود اسماعیلی",
      backgroundImageLg: "/images/archive/1397/poster116.webp",
      backgroundImageMd: "/images/archive/1397/poster13.f8af9d6d4fd2413b19a0.webp",
      posterImage: "/images/archive/1397/poster13.f8af9d6d4fd2413b19a0.webp",
      showReserveButton: false,
    },
    actors: [
      { name: 'محمد کریمی', img: '/images/archive/1397/Screenshot from 2025-06-11 23-22-48.png'},
      { name: 'محمد رضاییان', img: '/images/archive/1397/Screenshot from 2025-06-11 23-22-48.png'},
      { name: 'محمدحسن آقائی', img: '/images/archive/1397/Screenshot from 2025-06-11 23-22-48.png'},
      { name: 'علی محمدی فرید', img: '/images/archive/1397/Screenshot from 2025-06-11 23-22-48.png'},
      { name: 'محمدحسین صفی آریان', img: '/images/archive/1397/Screenshot from 2025-06-11 23-22-48.png'},
      { name: 'علی حیدری', img: '/images/archive/1397/Screenshot from 2025-06-11 23-22-48.png'},
      { name: 'محمدعلی پنبه بُر', img: '/images/archive/1397/Screenshot from 2025-06-11 23-22-48.png'},
      { name: 'حسین سالکی', img: '/images/archive/1397/Screenshot from 2025-06-11 23-22-48.png'},
      { name: 'امیرحسین حسن زاده  ', img: '/images/archive/1397/Screenshot from 2025-06-11 23-22-48.png'},
    ],
    directors: [
      { name: 'مسعود اسماعیلی', img: '/images/archive/1397/Screenshot from 2025-06-11 23-22-48.png' },
      { name: 'محمد امین دست کار', img: '/images/archive/1397/Screenshot from 2025-06-11 23-22-48.png' },
    ],
  },
};

export { archiveData }; 