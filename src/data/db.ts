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
      title: "رویداد ۱۴۰۲",
      year: "۱۴۰۲",
      location: "مرکز همایش‌ها",
      shortDescription: "توضیح کوتاه برای رویداد ۱۴۰۲.",
      fullDescription: "جزئیات کامل رویداد سال ۱۴۰۲، شامل برنامه‌ها و شرکت‌کنندگان.",
      director: "مدیر رویداد",
      producer: "تیم اجرایی",
      writer: "گزارشگر",
      backgroundImageLg: "/images/archive/default/bg_lg.webp",
      backgroundImageMd: "/images/archive/default/bg_md.webp",
      posterImage: "/images/archive/default/poster.webp",
      showReserveButton: false,
    },
    actors: [
      { name: 'سخنران ۱', img: '/images/archive/default/person1.webp' },
      { name: 'سخنران ۲', img: '/images/archive/default/person2.webp' },
    ],
    directors: [],
  },
  '1401': {
    heroSectionData: {
      title: "نمایش ۱۴۰۱",
      year: "۱۴۰۱",
      location: "تئاتر شهر",
      shortDescription: "خلاصه‌ای از نمایش اجرا شده در سال ۱۴۰۱.",
      fullDescription: "توضیحات کامل نمایش ۱۴۰۱، داستان، بازیگران و عوامل.",
      director: "کارگردان نمایش",
      producer: "گروه هنری",
      writer: "نویسنده نمایشنامه",
      backgroundImageLg: "/images/archive/default/bg_lg.webp",
      backgroundImageMd: "/images/archive/default/bg_md.webp",
      posterImage: "/images/archive/default/poster.webp",
      showReserveButton: false,
    },
    actors: [
      { name: 'بازیگر اصلی (۱۴۰۱)', img: '/images/archive/default/person4.webp' },
    ],
    directors: [],
  },
  '1400': {
    heroSectionData: {
      title: "همایش ۱۴۰۰",
      year: "۱۴۰۰",
      location: "دانشگاه",
      shortDescription: "همایش سالیانه ۱۴۰۰.",
      fullDescription: "جزئیات و سخنرانی‌های همایش علمی سال ۱۴۰۰.",
      director: "رئیس همایش",
      producer: "کمیته برگزاری",
      writer: "دبیر علمی",
      backgroundImageLg: "/images/archive/default/bg_lg.webp",
      backgroundImageMd: "/images/archive/default/bg_md.webp",
      posterImage: "/images/archive/default/poster.webp",
      showReserveButton: false,
    },
    actors: [],
    directors: [],
  },
  '1397': {
    heroSectionData: {
      title: "پروژه ۱۳۹۷",
      year: "۱۳۹۷",
      location: "لوکیشن پروژه",
      shortDescription: "معرفی پروژه تحقیقاتی سال ۱۳۹۷.",
      fullDescription: "توضیحات کامل پروژه و نتایج حاصله.",
      director: "سرپرست تیم",
      producer: "سرمایه‌گذار",
      writer: "پژوهشگر",
      backgroundImageLg: "/images/archive/default/bg_lg.webp",
      backgroundImageMd: "/images/archive/default/bg_md.webp",
      posterImage: "/images/archive/default/poster.webp",
      showReserveButton: false,
    },
    actors: [
      { name: 'محقق اصلی', img: '/images/archive/default/person6.webp' },
    ],
    directors: [],
  },
};

export { archiveData }; 