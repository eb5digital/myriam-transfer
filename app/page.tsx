'use client'

import { useState } from 'react'

const WA = 'https://wa.me/5493757469737'

type Lang = 'es' | 'en' | 'pt'

const T = {
  es: {
    nav: {
      services: 'Servicios',
      about: 'Sobre Myriam',
      reviews: 'Reseñas',
      faq: 'Preguntas',
      cta: 'Reservar',
    },
    hero: {
      badge: '✈️ Transfer Oficial · Aeropuerto IGR',
      title: 'Tu traslado privado en Iguazú',
      subtitle:
        'Aeropuerto · Cataratas · Foz do Iguaçu · Tour 3 Países · Luna Llena. Cómoda, puntual y segura. Más de 8 años de experiencia.',
      cta: 'Reservar por WhatsApp',
      ctaSub: 'Respuesta inmediata · Sin costo de consulta',
    },
    stats: [
      { value: '8+', label: 'Años de experiencia' },
      { value: '5★', label: 'Calificación promedio' },
      { value: '3', label: 'Idiomas: ES · EN · PT' },
      { value: '24/7', label: 'Disponibilidad' },
    ],
    services: {
      title: 'Servicios',
      subtitle:
        'Todo lo que necesitás en Iguazú, con una sola conductora de confianza',
      items: [
        {
          icon: '✈️',
          title: 'Transfer Aeropuerto IGR',
          desc: 'Te espero con cartel a tu nombre. Monitoreo de vuelo en tiempo real. Directo a tu hotel en Puerto Iguazú o Foz do Iguaçu.',
        },
        {
          icon: '🌊',
          title: 'Cataratas del Iguazú',
          desc: 'Lado argentino y brasilero. Garganta del Diablo, Catamarán y Safari Macuco. El espectáculo natural más impresionante del mundo.',
        },
        {
          icon: '🌍',
          title: 'Tour 3 Países en un Día',
          desc: 'Argentina, Brasil y Paraguay. Hito Tres Fronteras, Ciudad del Este y Foz do Iguaçu en una sola jornada memorable.',
        },
        {
          icon: '🌕',
          title: 'Paseo Luna Llena',
          desc: 'Caminata nocturna a la Garganta del Diablo bajo la luna llena. Solo 5 noches al mes — reservá con anticipación.',
        },
        {
          icon: '🏙️',
          title: 'Foz do Iguaçu',
          desc: 'Itaipú Binacional, Templo Budista, Mesquita Islámica y Parque de las Aves. Cruce de frontera ágil y sin complicaciones.',
        },
        {
          icon: '💎',
          title: 'Excursiones Full Day',
          desc: 'Minas de Wanda, Ruinas Jesuíticas de San Ignacio, Salto del Moconá, La Aripuca e Ice Bar.',
        },
      ],
    },
    trust: {
      title: '¿Por qué elegir a Myriam?',
      items: [
        { icon: '🗣️', title: 'Trilingüe', desc: 'Español · English · Português' },
        { icon: '🚗', title: 'Vehículo con AC', desc: 'Cómodo, limpio y espacioso' },
        { icon: '📍', title: 'Conductora oficial', desc: 'Habilitada en Aeropuerto IGR' },
        { icon: '⏱️', title: 'Puntualidad total', desc: 'Monitoreo de vuelos en tiempo real' },
        { icon: '💳', title: 'Múltiples pagos', desc: 'ARS · USD · BRL · Transferencia' },
        { icon: '🌟', title: 'Trato personal', desc: 'No sos un número, sos un viajero' },
      ],
    },
    about: {
      title: 'Sobre Myriam',
      p1: 'Soy Myriam, conductora privada con más de 8 años acompañando turistas en Iguazú. Conozco cada ruta, cada frontera y cada atracción para que tu visita sea perfecta.',
      p2: 'Hablo español, inglés y portugués — sin importar de dónde vengas, nos entendemos. Mi vehículo tiene aire acondicionado, está siempre impecable y con espacio para todo tu equipaje.',
      p3: 'No soy una empresa: soy una persona real que pone cuidado y atención en cada viaje. Mis clientes vuelven y me recomiendan porque lo sienten.',
      cta: 'Hablar con Myriam',
    },
    reviews: {
      title: 'Lo que dicen los viajeros',
      items: [
        {
          name: 'Alison Jara',
          flag: '🇦🇷',
          text: 'Súper recomendable! Una genia Myriam, muy atenta y profesional. Nos recibió en el aeropuerto con cartel y el auto estaba impecable. Highly recommend!',
        },
        {
          name: 'Máximo Kresta',
          flag: '🇦🇷',
          text: 'La vuelvo a elegir mil veces más. Excelente servicio, puntual, auto cómodo y con aire. Nos llevó a las Cataratas y a Foz sin problemas. 100% recomendada.',
        },
        {
          name: 'Nilda Paniagua',
          flag: '🇧🇷',
          text: 'Muito bom serviço, pontual e atenciosa. A Myriam fala português muito bem! Nos buscou no aeroporto e levou para todas as atrações. Recomendo!',
        },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Cómo reservo mi transfer?',
          a: 'Por WhatsApp al +54 9 3757 46-9737. Confirmamos disponibilidad y te enviamos todos los detalles del servicio.',
        },
        {
          q: '¿Qué formas de pago aceptan?',
          a: 'Efectivo en ARS, USD y BRL. También transferencia bancaria.',
        },
        {
          q: '¿Hacen traslados nocturnos desde el aeropuerto?',
          a: 'Sí, los 365 días del año. Monitoreamos tu vuelo en tiempo real para adaptarnos a cualquier demora.',
        },
        {
          q: '¿Cruzan la frontera a Brasil y Paraguay?',
          a: 'Sí. Realizamos cruces a Foz do Iguaçu y Ciudad del Este. Te acompañamos en todo el trámite migratorio.',
        },
        {
          q: '¿Cómo reservo el Paseo de Luna Llena?',
          a: 'El Paseo Luna Llena está disponible solo 5 noches al mes. Escribinos por WhatsApp con anticipación para asegurar tu lugar.',
        },
        {
          q: '¿Hablan inglés y portugués?',
          a: 'Sí. Myriam habla español, inglés y portugués. Atendemos turistas de todo el mundo.',
        },
      ],
    },
    footer: {
      tagline: 'Transfer privado · Puerto Iguazú · English spoken · Falamos Português',
      rights: '© 2025 Myriam Transfers Iguazú. Todos los derechos reservados.',
    },
    waFloat: '¡Reservá ahora!',
  },

  en: {
    nav: {
      services: 'Services',
      about: 'About',
      reviews: 'Reviews',
      faq: 'FAQ',
      cta: 'Book Now',
    },
    hero: {
      badge: '✈️ Official Transfer · IGR Airport',
      title: 'Your private transfer in Iguazú',
      subtitle:
        'Airport · Falls · Foz do Iguaçu · 3-Country Tour · Full Moon Walk. Comfortable, punctual and safe. Over 8 years of experience.',
      cta: 'Book via WhatsApp',
      ctaSub: 'Instant reply · Free consultation',
    },
    stats: [
      { value: '8+', label: 'Years of experience' },
      { value: '5★', label: 'Average rating' },
      { value: '3', label: 'Languages: ES · EN · PT' },
      { value: '24/7', label: 'Availability' },
    ],
    services: {
      title: 'Services',
      subtitle: 'Everything you need in Iguazú, with one trusted driver',
      items: [
        {
          icon: '✈️',
          title: 'IGR Airport Transfer',
          desc: "I'll wait for you with a name sign. Real-time flight monitoring. Direct to your hotel in Puerto Iguazú or Foz do Iguaçu.",
        },
        {
          icon: '🌊',
          title: 'Iguazú Falls',
          desc: "Argentine and Brazilian side. Devil's Throat, Catamaran and Macuco Safari. The most impressive natural spectacle in the world.",
        },
        {
          icon: '🌍',
          title: '3-Country Tour in One Day',
          desc: 'Argentina, Brazil and Paraguay. Triple Frontier, Ciudad del Este and Foz do Iguaçu in one memorable journey.',
        },
        {
          icon: '🌕',
          title: 'Full Moon Walk',
          desc: "Nighttime walk to Devil's Throat under the full moon. Only 5 nights per month — book in advance.",
        },
        {
          icon: '🏙️',
          title: 'Foz do Iguaçu',
          desc: 'Itaipú Dam, Buddhist Temple, Islamic Mosque and Bird Park. Smooth and hassle-free border crossing.',
        },
        {
          icon: '💎',
          title: 'Full Day Excursions',
          desc: 'Wanda Mines, San Ignacio Jesuit Ruins, Moconá Falls, La Aripuca and Ice Bar.',
        },
      ],
    },
    trust: {
      title: 'Why choose Myriam?',
      items: [
        { icon: '🗣️', title: 'Trilingual', desc: 'Español · English · Português' },
        { icon: '🚗', title: 'AC Vehicle', desc: 'Comfortable, clean and spacious' },
        { icon: '📍', title: 'Official driver', desc: 'Licensed at IGR Airport' },
        { icon: '⏱️', title: 'Always on time', desc: 'Real-time flight monitoring' },
        { icon: '💳', title: 'Multiple payments', desc: 'ARS · USD · BRL · Bank transfer' },
        { icon: '🌟', title: 'Personal touch', desc: "You're not a number, you're a traveler" },
      ],
    },
    about: {
      title: 'About Myriam',
      p1: "I'm Myriam, a private driver with over 8 years accompanying tourists in Iguazú. I know every route, every border crossing and every attraction to make your visit perfect.",
      p2: "I speak Spanish, English and Portuguese — no matter where you're from, we'll understand each other. My vehicle has air conditioning, is always spotless and has space for all your luggage.",
      p3: "I'm not a company: I'm a real person who puts care and attention into every trip. My clients come back and recommend me because they feel it.",
      cta: 'Talk to Myriam',
    },
    reviews: {
      title: 'What travelers say',
      items: [
        {
          name: 'Alison Jara',
          flag: '🇦🇷',
          text: 'Super recommended! Myriam is amazing, very attentive and professional. She greeted us at the airport with a sign and the car was spotless. Highly recommend!',
        },
        {
          name: 'Máximo Kresta',
          flag: '🇦🇷',
          text: "I'd choose her a thousand times again. Excellent service, punctual, comfortable car with AC. She took us to the Falls and Foz without any issues. 100% recommended.",
        },
        {
          name: 'Nilda Paniagua',
          flag: '🇧🇷',
          text: "Very good service, punctual and attentive. Myriam speaks Portuguese very well! She picked us up at the airport and took us to all the attractions. I recommend it!",
        },
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          q: 'How do I book my transfer?',
          a: 'Via WhatsApp at +54 9 3757 46-9737. We confirm availability and send you all the service details.',
        },
        {
          q: 'What payment methods do you accept?',
          a: 'Cash in ARS, USD and BRL. Bank transfer also available.',
        },
        {
          q: 'Do you do nighttime airport transfers?',
          a: 'Yes, 365 days a year. We monitor your flight in real time to adapt to any delay.',
        },
        {
          q: 'Do you cross the border to Brazil and Paraguay?',
          a: 'Yes. We do crossings to Foz do Iguaçu and Ciudad del Este. We guide you through the entire immigration process.',
        },
        {
          q: 'How do I book the Full Moon Walk?',
          a: 'The Full Moon Walk is available only 5 nights per month. Message us on WhatsApp in advance to secure your spot.',
        },
        {
          q: 'Do you speak English and Portuguese?',
          a: 'Yes. Myriam speaks Spanish, English and Portuguese. We serve tourists from all over the world.',
        },
      ],
    },
    footer: {
      tagline: 'Private transfer · Puerto Iguazú · English spoken · Falamos Português',
      rights: '© 2025 Myriam Transfers Iguazú. All rights reserved.',
    },
    waFloat: 'Book now!',
  },

  pt: {
    nav: {
      services: 'Serviços',
      about: 'Sobre Myriam',
      reviews: 'Avaliações',
      faq: 'FAQ',
      cta: 'Reservar',
    },
    hero: {
      badge: '✈️ Transfer Oficial · Aeroporto IGR',
      title: 'Seu transfer privado em Iguazú',
      subtitle:
        'Aeroporto · Cataratas · Foz do Iguaçu · Tour 3 Países · Lua Cheia. Confortável, pontual e seguro. Mais de 8 anos de experiência.',
      cta: 'Reservar pelo WhatsApp',
      ctaSub: 'Resposta imediata · Consulta gratuita',
    },
    stats: [
      { value: '8+', label: 'Anos de experiência' },
      { value: '5★', label: 'Avaliação média' },
      { value: '3', label: 'Idiomas: ES · EN · PT' },
      { value: '24/7', label: 'Disponibilidade' },
    ],
    services: {
      title: 'Serviços',
      subtitle: 'Tudo que você precisa em Iguazú, com uma motorista de confiança',
      items: [
        {
          icon: '✈️',
          title: 'Transfer Aeroporto IGR',
          desc: 'Te espero com placa com seu nome. Monitoramento do voo em tempo real. Direto ao seu hotel em Puerto Iguazú ou Foz do Iguaçu.',
        },
        {
          icon: '🌊',
          title: 'Cataratas do Iguaçu',
          desc: 'Lado argentino e brasileiro. Garganta do Diabo, Catamarã e Safari Macuco. O espetáculo natural mais impressionante do mundo.',
        },
        {
          icon: '🌍',
          title: 'Tour 3 Países em Um Dia',
          desc: 'Argentina, Brasil e Paraguai. Marco das Três Fronteiras, Ciudad del Este e Foz do Iguaçu em uma jornada memorável.',
        },
        {
          icon: '🌕',
          title: 'Passeio Lua Cheia',
          desc: 'Caminhada noturna à Garganta do Diabo sob a lua cheia. Só 5 noites por mês — reserve com antecedência.',
        },
        {
          icon: '🏙️',
          title: 'Foz do Iguaçu',
          desc: 'Itaipú Binacional, Templo Budista, Mesquita Islâmica e Parque das Aves. Travessia de fronteira rápida e sem complicações.',
        },
        {
          icon: '💎',
          title: 'Excursões Full Day',
          desc: 'Minas de Wanda, Ruínas Jesuíticas de San Ignacio, Salto del Moconá, La Aripuca e Ice Bar.',
        },
      ],
    },
    trust: {
      title: 'Por que escolher a Myriam?',
      items: [
        { icon: '🗣️', title: 'Trilíngue', desc: 'Español · English · Português' },
        { icon: '🚗', title: 'Veículo com AC', desc: 'Confortável, limpo e espaçoso' },
        { icon: '📍', title: 'Motorista oficial', desc: 'Habilitada no Aeroporto IGR' },
        { icon: '⏱️', title: 'Sempre pontual', desc: 'Monitoramento de voos em tempo real' },
        { icon: '💳', title: 'Múltiplos pagamentos', desc: 'ARS · USD · BRL · Transferência' },
        { icon: '🌟', title: 'Atendimento pessoal', desc: 'Você não é um número, é um viajante' },
      ],
    },
    about: {
      title: 'Sobre Myriam',
      p1: 'Sou Myriam, motorista particular com mais de 8 anos acompanhando turistas em Iguazú. Conheço cada rota, cada fronteira e cada atração para que sua visita seja perfeita.',
      p2: 'Falo espanhol, inglês e português — não importa de onde você venha, nos entendemos. Meu veículo tem ar-condicionado, está sempre impecável e com espaço para toda a sua bagagem.',
      p3: 'Não sou uma empresa: sou uma pessoa real que coloca cuidado e atenção em cada viagem. Meus clientes voltam e me recomendam porque sentem isso.',
      cta: 'Falar com Myriam',
    },
    reviews: {
      title: 'O que os viajantes dizem',
      items: [
        {
          name: 'Alison Jara',
          flag: '🇦🇷',
          text: 'Super recomendável! A Myriam é incrível, muito atenciosa e profissional. Nos recebeu no aeroporto com placa e o carro estava impecável. Altamente recomendado!',
        },
        {
          name: 'Máximo Kresta',
          flag: '🇦🇷',
          text: 'Escolheria ela mil vezes mais. Excelente serviço, pontual, carro confortável e com ar. Nos levou às Cataratas e a Foz sem problemas. 100% recomendada.',
        },
        {
          name: 'Nilda Paniagua',
          flag: '🇧🇷',
          text: 'Muito bom serviço, pontual e atenciosa. A Myriam fala português muito bem! Nos buscou no aeroporto e levou para todas as atrações. Recomendo!',
        },
      ],
    },
    faq: {
      title: 'Perguntas frequentes',
      items: [
        {
          q: 'Como reservo meu transfer?',
          a: 'Pelo WhatsApp no +54 9 3757 46-9737. Confirmamos disponibilidade e enviamos todos os detalhes do serviço.',
        },
        {
          q: 'Quais formas de pagamento aceitam?',
          a: 'Dinheiro em ARS, USD e BRL. Transferência bancária também disponível.',
        },
        {
          q: 'Fazem transfers noturnos do aeroporto?',
          a: 'Sim, 365 dias por ano. Monitoramos seu voo em tempo real para nos adaptar a qualquer atraso.',
        },
        {
          q: 'Cruzam a fronteira para o Brasil e Paraguai?',
          a: 'Sim. Fazemos travessias para Foz do Iguaçu e Ciudad del Este. Acompanhamos todo o processo migratório.',
        },
        {
          q: 'Como reservo o Passeio Lua Cheia?',
          a: 'O Passeio Lua Cheia está disponível apenas 5 noites por mês. Nos escreva pelo WhatsApp com antecedência para garantir seu lugar.',
        },
        {
          q: 'Vocês falam inglês e português?',
          a: 'Sim. Myriam fala espanhol, inglês e português. Atendemos turistas de todo o mundo.',
        },
      ],
    },
    footer: {
      tagline: 'Transfer privado · Puerto Iguazú · English spoken · Falamos Português',
      rights: '© 2025 Myriam Transfers Iguazú. Todos os direitos reservados.',
    },
    waFloat: 'Reservar agora!',
  },
}

const LANGS: { code: Lang; flag: string; label: string }[] = [
  { code: 'es', flag: '🇦🇷', label: 'ES' },
  { code: 'en', flag: '🇺🇸', label: 'EN' },
  { code: 'pt', flag: '🇧🇷', label: 'PT' },
]

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Home() {
  const [lang, setLang] = useState<Lang>('es')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const t = T[lang]

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl font-bold text-emerald-600">Myriam</span>
            <span className="text-xl font-light text-gray-500">Transfer</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-emerald-600 transition-colors">{t.nav.services}</a>
            <a href="#about" className="hover:text-emerald-600 transition-colors">{t.nav.about}</a>
            <a href="#reviews" className="hover:text-emerald-600 transition-colors">{t.nav.reviews}</a>
            <a href="#faq" className="hover:text-emerald-600 transition-colors">{t.nav.faq}</a>
          </div>

          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                    lang === l.code
                      ? 'bg-emerald-500 text-white shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <span>{l.flag}</span>
                  <span>{l.label}</span>
                </button>
              ))}
            </div>

            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              {t.nav.cta}
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-3 text-sm font-medium text-gray-600">
            <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-emerald-600">{t.nav.services}</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-emerald-600">{t.nav.about}</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)} className="hover:text-emerald-600">{t.nav.reviews}</a>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="hover:text-emerald-600">{t.nav.faq}</a>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-full w-fit font-semibold"
            >
              <WhatsAppIcon className="w-4 h-4" />
              {t.nav.cta}
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative pt-16 min-h-screen flex items-center bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-emerald-200 text-sm font-medium px-4 py-2 rounded-full mb-6">
              {t.hero.badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t.hero.title}
            </h1>
            <p className="text-lg text-emerald-100 mb-8 leading-relaxed max-w-lg">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="w-6 h-6" />
                {t.hero.cta}
              </a>
            </div>
            <p className="mt-3 text-emerald-300 text-sm">{t.hero.ctaSub}</p>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {['🇦🇷', '🇧🇷', '🇺🇸', '🇩🇪'].map((flag, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-emerald-700 border-2 border-emerald-600 flex items-center justify-center text-sm">
                    {flag}
                  </div>
                ))}
              </div>
              <p className="text-emerald-200 text-sm">
                {lang === 'es' && 'Viajeros de todo el mundo confían en Myriam'}
                {lang === 'en' && 'Travelers from all over the world trust Myriam'}
                {lang === 'pt' && 'Viajantes de todo o mundo confiam na Myriam'}
              </p>
            </div>
          </div>

          {/* Hero card */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-white max-w-sm w-full">
              <div className="w-20 h-20 rounded-full bg-emerald-400/30 flex items-center justify-center text-4xl mx-auto mb-4">
                🚗
              </div>
              <h3 className="text-xl font-bold text-center mb-1">Myriam</h3>
              <p className="text-emerald-200 text-sm text-center mb-4">
                {lang === 'es' && 'Conductora Privada · 8+ años'}
                {lang === 'en' && 'Private Driver · 8+ years'}
                {lang === 'pt' && 'Motorista Particular · 8+ anos'}
              </p>
              <div className="flex justify-center mb-5">
                <StarRating />
              </div>
              <div className="space-y-3 text-sm">
                {[
                  lang === 'es' ? '✅ Habla Español, English & Português' : lang === 'en' ? '✅ Speaks Español, English & Português' : '✅ Fala Español, English & Português',
                  lang === 'es' ? '✅ Vehículo con AC · siempre limpio' : lang === 'en' ? '✅ AC Vehicle · always clean' : '✅ Veículo com AC · sempre limpo',
                  lang === 'es' ? '✅ Monitoreo de vuelo en tiempo real' : lang === 'en' ? '✅ Real-time flight monitoring' : '✅ Monitoramento de voo em tempo real',
                  lang === 'es' ? '✅ Cartel con tu nombre en el aeropuerto' : lang === 'en' ? '✅ Name sign at the airport' : '✅ Placa com seu nome no aeroporto',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-emerald-100">
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-emerald-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {t.stats.map((s, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold">{s.value}</div>
                <div className="text-emerald-200 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.services.title}</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t.services.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.items.map((s, i) => (
              <a
                key={i}
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 rounded-2xl p-6 transition-all hover:shadow-md"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-emerald-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>
                    {lang === 'es' && 'Consultar precio'}
                    {lang === 'en' && 'Ask for price'}
                    {lang === 'pt' && 'Consultar preço'}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST / WHY MYRIAM */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.trust.title}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {t.trust.items.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-emerald-100">
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-bold text-gray-900 mb-1">{item.title}</div>
                <div className="text-sm text-gray-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/myriam-profile.jpg"
                    alt="Myriam - Transfer Iguazú"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      target.parentElement!.innerHTML = '<span class="text-8xl">👩‍✈️</span>'
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-white rounded-2xl px-4 py-2 text-sm font-bold shadow-lg">
                  {lang === 'es' && '8+ años en Iguazú'}
                  {lang === 'en' && '8+ years in Iguazú'}
                  {lang === 'pt' && '8+ anos em Iguazú'}
                </div>
                <div className="absolute -top-4 -left-4 bg-white border border-emerald-100 rounded-2xl px-4 py-2 shadow-lg">
                  <StarRating />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.about.title}</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p className="font-medium text-gray-800">{t.about.p3}</p>
              </div>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl"
              >
                <WhatsAppIcon className="w-5 h-5" />
                {t.about.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.reviews.title}</h2>
            <div className="flex items-center justify-center gap-2">
              <StarRating />
              <span className="text-gray-500 text-sm ml-1">5.0 · Google</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.reviews.items.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <StarRating />
                <p className="mt-4 text-gray-700 text-sm leading-relaxed italic">"{r.text}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-lg">
                    {r.flag}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{r.name}</div>
                    <div className="text-xs text-gray-400">Google Review</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.faq.title}</h2>
          </div>
          <div className="space-y-3">
            {t.faq.items.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{item.q}</span>
                  <svg
                    className={`w-5 h-5 text-emerald-500 flex-shrink-0 ml-4 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="py-20 bg-gradient-to-br from-emerald-700 to-teal-800 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {lang === 'es' && '¿Listo para tu viaje a Iguazú?'}
            {lang === 'en' && 'Ready for your trip to Iguazú?'}
            {lang === 'pt' && 'Pronto para sua viagem a Iguazú?'}
          </h2>
          <p className="text-emerald-200 text-lg mb-8">
            {lang === 'es' && 'Escribime por WhatsApp y te respondo al toque. Sin complicaciones.'}
            {lang === 'en' && "Message me on WhatsApp and I'll reply right away. No hassle."}
            {lang === 'pt' && 'Me escreva pelo WhatsApp e te respondo na hora. Sem complicações.'}
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-5 rounded-2xl text-xl transition-all shadow-xl hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="w-7 h-7" />
            {t.hero.cta}
          </a>
          <p className="mt-4 text-emerald-300 text-sm">
            +54 9 3757 46-9737
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-white font-bold text-lg mb-1">
                Myriam Transfer Iguazú
              </div>
              <div className="text-sm">{t.footer.tagline}</div>
            </div>
            <div className="text-center md:text-right">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-medium text-sm"
              >
                +54 9 3757 46-9737
              </a>
              <div className="text-xs mt-1">{t.footer.rights}</div>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-5 py-3 rounded-full shadow-2xl transition-all hover:-translate-y-0.5 hover:shadow-green-500/40"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6" />
        <span className="text-sm hidden sm:inline">{t.waFloat}</span>
      </a>
    </div>
  )
}
