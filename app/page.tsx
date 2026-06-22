'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  MapPin, Plane, Car, UserCheck, Clock, Shield, Heart, Globe,
  Droplets, Mountain, ShoppingBag, Music, Utensils, Moon,
  Menu, X, Send, Phone, Star, ChevronDown, Mail
} from 'lucide-react'

const WA_BASE = 'https://wa.me/5493757469737'
const wa = (msg: string) => `${WA_BASE}?text=${encodeURIComponent(msg)}`

type Lang = 'es' | 'en' | 'pt'

const LANGS: { code: Lang; flag: string; label: string }[] = [
  { code: 'es', flag: '🇦🇷', label: 'ES' },
  { code: 'en', flag: '🇺🇸', label: 'EN' },
  { code: 'pt', flag: '🇧🇷', label: 'PT' },
]

const T = {
  es: {
    title: 'Transfer Privado en Cataratas del Iguazú | Myriam Transfer 24/7',
    nav: { services: 'Servicios', airport: 'Aeropuerto', reviews: 'Reviews', call: 'Llamar', whatsapp: 'WhatsApp' },
    heroBadge: 'Transfer VIP & Seguro · English Spoken · Falamos Português',
    heroTitle: 'Tu Transfer Privado en Cataratas',
    heroSub: 'Transfer privado desde/hacia el Aeropuerto IGR · Tours a Cataratas Argentinas y Brasileras · Tour 3 Fronteras · Disponible las 24 horas, los 7 días.',
    heroTags: ['Airport IGR Pick-up', 'Foz do Iguaçu & Cataratas', 'Autos con AC'],
    heroCta: 'Cotizar / Book Now (WhatsApp)',
    airportTitle: 'Especialistas en Aeropuerto IGR',
    airportSub: 'Transfer Iguazu Airport | Taxi Cataratas | Motorista Privado Foz',
    airportCards: [
      { icon: UserCheck, title: 'Meet & Greet Service', desc: 'Te esperamos con cartel a tu nombre' },
      { icon: Clock, title: 'Sin Esperas', desc: 'Directo a tu hotel o Foz do Iguaçu' },
      { icon: Shield, title: 'Monitoreo de Vuelo', desc: 'Seguimos tu vuelo en tiempo real' },
    ],
    servicesTitle: 'Excursiones & Tours',
    services: [
      {
        icon: Droplets, title: 'Cataratas & Naturaleza', sub: 'Excursiones exclusivas',
        items: ['Cataratas Argentinas & Brasileras', 'Parque de Aves', 'Reserva Güira Oga', 'Paseos en Catamarán', 'Safari Macuco'],
        badge: 'Horarios Parques: 8:00 a 16:00 hs',
      },
      {
        icon: Globe, title: 'Foz do Iguaçu & Cultura', sub: 'Brasil / Paraguay',
        items: ['Represa Itaipú Binacional', 'Templo Budista', 'Museo de Cera', 'Mesquita Islámica', 'Rueda Gigante'],
        badge: 'Cruce de frontera ágil',
      },
      {
        icon: Mountain, title: 'Misiones & Aventura', sub: 'Full day excursions',
        items: ['Minas de Wanda', 'Ruinas de San Ignacio', 'Salto del Moconá', 'La Aripuca', 'Ice Bar'],
        badge: null,
      },
    ],
    contactTitle: 'Solicitá tu Cotización',
    contactSub: 'Completá el formulario y te responderemos a la brevedad',
    contactForm: {
      name: 'Nombre completo *', namePh: 'Tu nombre',
      email: 'Email *',
      phone: 'Teléfono / WhatsApp (opcional)',
      date: 'Fecha del viaje *',
      people: 'Cantidad de personas *',
      service: 'Servicio de interés *', servicePh: 'Seleccionar servicio',
      serviceOptions: ['Transfer Aeropuerto IGR', 'Cataratas Argentinas', 'Cataratas Brasileras', 'Tour 3 Países', 'Paseo Luna Llena', 'Foz do Iguaçu', 'Minas de Wanda', 'Full Day Misiones'],
      message: 'Mensaje adicional (opcional)', messagePh: 'Detalles adicionales sobre tu viaje...',
      submit: 'Solicitar Cotización',
    },
    featuredTitle: 'Experiencias Destacadas',
    featuredSub: 'Experiencias únicas que solo encontrarás en Iguazú',
    tour3: {
      title: 'Tour 3 Países en un Día',
      desc: 'Visitá Argentina, Brasil y Paraguay en un solo día. Conocé 3 culturas y el Hito Tres Fronteras con nuestros traslados exclusivos.',
      items: ['Puerto Iguazú (Argentina)', 'Foz do Iguaçu (Brasil)', 'Ciudad del Este (Paraguay)'],
      cta: 'Consultar Tour 3 Países',
    },
    luna: {
      title: 'Paseo de Luna Llena',
      desc: 'Experiencia única en Parque Nacional Iguazú. Caminata a la Garganta del Diablo bajo la luz de la luna.',
      note: 'Solo disponible 5 noches al mes. Reserva anticipada requerida.',
      cta: 'Reservar Luna Llena',
    },
    shoppingTitle: 'Compras & Vida Nocturna',
    shopping: [
      { icon: ShoppingBag, title: 'Duty Free Shop', desc: 'Compras libres de impuestos en la frontera' },
      { icon: Utensils, title: 'Feirinha de Puerto Iguazú', desc: 'Artesanías locales y gastronomía regional' },
      { icon: Music, title: 'Rafain Cena Show', desc: 'Show folclórico con cena incluida en Foz' },
    ],
    shoppingNote: 'Te llevamos y buscamos para que disfrutes sin preocupaciones',
    whyTitle: '¿Por qué elegir a Myriam?',
    why: [
      { icon: Shield, title: 'Seguridad', desc: 'Vehículo habilitado y seguro' },
      { icon: Clock, title: 'Puntualidad', desc: 'Monitoreo de vuelos en tiempo real' },
      { icon: Heart, title: 'Atención Maternal', desc: 'Te cuido como a mi familia' },
    ],
    whyQuote: 'Más de 8 años cuidando turistas de todo el mundo. Tu viaje seguro es mi prioridad.',
    vehiclesTitle: 'Nuestros Vehículos',
    vehiclesSub: 'Viajá con comodidad en vehículos modernos, climatizados y habilitados.',
    vehicles: [
      { img: '/images/vehicle-citroen.png', name: 'Citroën C3 Aircross', cap: 'Hasta 4 pasajeros' },
      { img: '/images/vehicle-fleet.png', name: 'Nuestra Flota', cap: 'SUVs y Van para todos los grupos' },
      { img: '/images/vehicle-van.png', name: 'Van para Grupos', cap: 'Hasta 12 pasajeros' },
    ],
    vehicleTags: ['Aire Acondicionado / AC', 'Vehículo Habilitado', 'Seguro al Día', 'Cómodo y Limpio'],
    reviewsTitle: 'Lo que dicen nuestros clientes',
    reviews: [
      { name: 'Alison Jara', flag: '🇺🇸', text: '"Súper recomendable! Una genia Myriam, muy atenta y profesional. Nos recibió en el aeropuerto con cartel y el auto estaba impecable. Highly recommend!"' },
      { name: 'Máximo Kresta', flag: '🇦🇷', text: '"La vuelvo a elegir mil veces más. Excelente servicio, puntual, auto cómodo y con aire. Nos llevó a las Cataratas y a Foz sin problemas. 100% recomendada."' },
      { name: 'Nilda Paniagua', flag: '🇧🇷', text: '"Muito bom serviço, pontual e atenciosa. A Myriam fala português muito bem! Nos buscou no aeroporto e levou para todas as atrações. Recomendo!"' },
    ],
    faqTitle: 'Preguntas Frecuentes',
    faq: [
      { q: '¿Cuáles son los horarios de los parques?', a: 'Tanto en Argentina como en Brasil, el ingreso es de 8:00 a 16:00 hs. Te buscamos temprano para aprovechar el día.' },
      { q: '¿Realizan cruce de frontera?', a: 'Sí, realizamos todos los trámites migratorios para ir a Foz do Iguaçu, Ciudad del Este o Duty Free.' },
      { q: '¿Hacen traslados nocturnos?', a: 'Sí, te llevamos a cenar, al Ice Bar, a la Feirinha o al Show de Aguas Danzantes.' },
      { q: '¿Qué formas de pago aceptan?', a: 'Efectivo en ARS, USD y BRL. También transferencia bancaria.' },
      { q: '¿Cómo reservo el Paseo de Luna Llena?', a: 'Solo disponible 5 noches al mes. Escribinos por WhatsApp con anticipación para asegurar tu lugar.' },
    ],
    footerTagline: 'Transfer privado en Puerto Iguazú · English spoken · Falamos Português',
    footerRights: '© 2025 Myriam Transfers Iguazú. Todos los derechos reservados.',
    yearsExp: '8+ años de experiencia',
  },
  en: {
    title: 'Private Transfer at Iguazú Falls | Myriam Transfer 24/7',
    nav: { services: 'Services', airport: 'Airport', reviews: 'Reviews', call: 'Call', whatsapp: 'WhatsApp' },
    heroBadge: 'VIP & Safe Transfer · English Spoken · Falamos Português',
    heroTitle: 'Your Private Driver in Iguazu',
    heroSub: 'Private transfer to/from IGR Airport · Tours to Argentine & Brazilian Falls · 3 Borders Tour · Available 24/7.',
    heroTags: ['Airport IGR Pick-up', 'Foz do Iguaçu & Falls', 'Cars with AC'],
    heroCta: 'Book Now (WhatsApp)',
    airportTitle: 'Airport IGR Specialists',
    airportSub: 'Transfer Iguazu Airport | Taxi Cataratas | Private Driver Foz',
    airportCards: [
      { icon: UserCheck, title: 'Meet & Greet Service', desc: "We'll wait for you with your name sign" },
      { icon: Clock, title: 'No Waiting', desc: 'Direct to your hotel or Foz do Iguaçu' },
      { icon: Shield, title: 'Flight Monitoring', desc: 'We track your flight in real time' },
    ],
    servicesTitle: 'Excursions & Tours',
    services: [
      {
        icon: Droplets, title: 'Falls & Nature', sub: 'Private Tours',
        items: ['Argentine & Brazilian Falls', 'Bird Park', 'Güira Oga Reserve', 'Catamaran Rides', 'Macuco Safari'],
        badge: 'Park Hours: 8:00 to 16:00',
      },
      {
        icon: Globe, title: 'Foz do Iguaçu & Culture', sub: 'Brazil / Paraguay',
        items: ['Itaipú Binacional Dam', 'Buddhist Temple', 'Wax Museum', 'Islamic Mosque', 'Giant Wheel'],
        badge: 'Smooth border crossing',
      },
      {
        icon: Mountain, title: 'Misiones & Adventure', sub: 'Full day excursions',
        items: ['Wanda Mines', 'San Ignacio Ruins', 'Moconá Falls', 'La Aripuca', 'Ice Bar'],
        badge: null,
      },
    ],
    contactTitle: 'Request a Quote',
    contactSub: "Fill out the form and we'll get back to you shortly",
    contactForm: {
      name: 'Full name *', namePh: 'Your name',
      email: 'Email *',
      phone: 'Phone / WhatsApp (optional)',
      date: 'Travel date *',
      people: 'Number of people *',
      service: 'Service of interest *', servicePh: 'Select service',
      serviceOptions: ['IGR Airport Transfer', 'Argentine Falls', 'Brazilian Falls', '3-Country Tour', 'Full Moon Walk', 'Foz do Iguaçu', 'Wanda Mines', 'Misiones Full Day'],
      message: 'Additional message (optional)', messagePh: 'Additional details about your trip...',
      submit: 'Request Quote',
    },
    featuredTitle: 'Featured Experiences',
    featuredSub: 'Unique experiences you can only find in Iguazú',
    tour3: {
      title: '3-Country Tour in One Day',
      desc: 'Visit Argentina, Brazil and Paraguay in one day. Discover 3 cultures and the Triple Frontier with our exclusive transfers.',
      items: ['Puerto Iguazú (Argentina)', 'Foz do Iguaçu (Brazil)', 'Ciudad del Este (Paraguay)'],
      cta: 'Book 3-Country Tour',
    },
    luna: {
      title: 'Full Moon Walk',
      desc: "Unique experience at Iguazú National Park. Walk to Devil's Throat under the moonlight.",
      note: 'Only available 5 nights per month. Advance booking required.',
      cta: 'Book Full Moon Walk',
    },
    shoppingTitle: 'Shopping & Nightlife',
    shopping: [
      { icon: ShoppingBag, title: 'Duty Free Shop', desc: 'Tax-free shopping at the border' },
      { icon: Utensils, title: 'Puerto Iguazú Market', desc: 'Local crafts and regional food' },
      { icon: Music, title: 'Rafain Dinner Show', desc: 'Folk show with dinner in Foz' },
    ],
    shoppingNote: 'We take you and pick you up so you can enjoy worry-free',
    whyTitle: 'Why Choose Myriam?',
    why: [
      { icon: Shield, title: 'Safety First', desc: 'Licensed and safe vehicle' },
      { icon: Clock, title: 'Always On Time', desc: 'Real-time flight monitoring' },
      { icon: Heart, title: 'Caring Service', desc: "I'll take care of you like family" },
    ],
    whyQuote: 'Over 8 years taking care of tourists from all over the world. Your safe trip is my priority.',
    vehiclesTitle: 'Our Vehicles',
    vehiclesSub: 'Travel comfortably in modern, air-conditioned, licensed vehicles.',
    vehicles: [
      { img: '/images/vehicle-citroen.png', name: 'Citroën C3 Aircross', cap: 'Up to 4 passengers' },
      { img: '/images/vehicle-fleet.png', name: 'Our Fleet', cap: 'SUVs and Vans for all groups' },
      { img: '/images/vehicle-van.png', name: 'Group Van', cap: 'Up to 12 passengers' },
    ],
    vehicleTags: ['Air Conditioning / AC', 'Licensed Vehicle', 'Fully Insured', 'Comfortable & Clean'],
    reviewsTitle: 'What Our Clients Say',
    reviews: [
      { name: 'Alison Jara', flag: '🇺🇸', text: '"Super recommended! Myriam is amazing, very attentive and professional. She greeted us at the airport with a sign and the car was spotless. Highly recommend!"' },
      { name: 'Máximo Kresta', flag: '🇦🇷', text: '"I\'d choose her a thousand times again. Excellent service, punctual, comfortable car with AC. She took us to the Falls and Foz without any issues. 100% recommended."' },
      { name: 'Nilda Paniagua', flag: '🇧🇷', text: '"Very good service, punctual and attentive. Myriam speaks Portuguese very well! She picked us up at the airport and took us to all the attractions. I recommend it!"' },
    ],
    faqTitle: 'Frequently Asked Questions',
    faq: [
      { q: 'What are the park opening hours?', a: 'Both in Argentina and Brazil, entry is from 8:00 to 16:00. We pick you up early to make the most of the day.' },
      { q: 'Do you cross the border?', a: 'Yes, we handle all immigration procedures for Foz do Iguaçu, Ciudad del Este or Duty Free.' },
      { q: 'Do you do nighttime transfers?', a: 'Yes, we take you to dinner, Ice Bar, the Feirinha or the Dancing Waters Show.' },
      { q: 'What payment methods do you accept?', a: 'Cash in ARS, USD and BRL. Bank transfer also available.' },
      { q: 'How do I book the Full Moon Walk?', a: 'Only available 5 nights per month. Message us on WhatsApp in advance to secure your spot.' },
    ],
    footerTagline: 'Private transfer in Puerto Iguazú · English spoken · Falamos Português',
    footerRights: '© 2025 Myriam Transfers Iguazú. All rights reserved.',
    yearsExp: '8+ years of experience',
  },
  pt: {
    title: 'Transfer Privado nas Cataratas do Iguaçu | Myriam Transfer 24/7',
    nav: { services: 'Serviços', airport: 'Aeroporto', reviews: 'Avaliações', call: 'Ligar', whatsapp: 'WhatsApp' },
    heroBadge: 'Transfer VIP & Seguro · English Spoken · Falamos Português',
    heroTitle: 'Seu Transfer Privado nas Cataratas',
    heroSub: 'Transfer privativo de/para o Aeroporto IGR · Passeios às Cataratas Argentinas e Brasileiras · Tour 3 Fronteiras · Disponível 24 horas.',
    heroTags: ['Embarque Aeroporto IGR', 'Foz do Iguaçu & Cataratas', 'Carros com AC'],
    heroCta: 'Solicitar Cotação (WhatsApp)',
    airportTitle: 'Especialistas no Aeroporto IGR',
    airportSub: 'Transfer Aeroporto Iguazú | Táxi Cataratas | Motorista Privado Foz',
    airportCards: [
      { icon: UserCheck, title: 'Meet & Greet Service', desc: 'Te esperamos com placa com seu nome' },
      { icon: Clock, title: 'Sem Esperas', desc: 'Direto ao seu hotel ou Foz do Iguaçu' },
      { icon: Shield, title: 'Monitoramento de Voo', desc: 'Acompanhamos seu voo em tempo real' },
    ],
    servicesTitle: 'Excursões & Passeios',
    services: [
      {
        icon: Droplets, title: 'Cataratas & Natureza', sub: 'Passeios exclusivos',
        items: ['Cataratas Argentinas e Brasileiras', 'Parque das Aves', 'Reserva Güira Oga', 'Passeio de Catamarã', 'Safari Macuco'],
        badge: 'Horários: 8:00 às 16:00',
      },
      {
        icon: Globe, title: 'Foz do Iguaçu & Cultura', sub: 'Brasil / Paraguai',
        items: ['Itaipú Binacional', 'Templo Budista', 'Museu de Cera', 'Mesquita Islâmica', 'Roda Gigante'],
        badge: 'Travessia de fronteira rápida',
      },
      {
        icon: Mountain, title: 'Misiones & Aventura', sub: 'Excursões full day',
        items: ['Minas de Wanda', 'Ruínas de San Ignacio', 'Salto del Moconá', 'La Aripuca', 'Ice Bar'],
        badge: null,
      },
    ],
    contactTitle: 'Solicite uma Cotação',
    contactSub: 'Preencha o formulário e responderemos em breve',
    contactForm: {
      name: 'Nome completo *', namePh: 'Seu nome',
      email: 'Email *',
      phone: 'Telefone / WhatsApp (opcional)',
      date: 'Data da viagem *',
      people: 'Número de pessoas *',
      service: 'Serviço de interesse *', servicePh: 'Selecionar serviço',
      serviceOptions: ['Transfer Aeroporto IGR', 'Cataratas Argentinas', 'Cataratas Brasileiras', 'Tour 3 Países', 'Passeio Lua Cheia', 'Foz do Iguaçu', 'Minas de Wanda', 'Full Day Misiones'],
      message: 'Mensagem adicional (opcional)', messagePh: 'Detalhes adicionais sobre sua viagem...',
      submit: 'Solicitar Cotação',
    },
    featuredTitle: 'Experiências em Destaque',
    featuredSub: 'Experiências únicas que só você encontra em Iguazú',
    tour3: {
      title: 'Tour 3 Países em Um Dia',
      desc: 'Visite Argentina, Brasil e Paraguai em um só dia. Conheça 3 culturas e o Marco das Três Fronteiras com nossos transfers exclusivos.',
      items: ['Puerto Iguazú (Argentina)', 'Foz do Iguaçu (Brasil)', 'Ciudad del Este (Paraguai)'],
      cta: 'Reservar Tour 3 Países',
    },
    luna: {
      title: 'Passeio Lua Cheia',
      desc: 'Experiência única no Parque Nacional do Iguaçu. Caminhada à Garganta do Diabo sob a luz da lua.',
      note: 'Disponível apenas 5 noites por mês. Reserva antecipada obrigatória.',
      cta: 'Reservar Lua Cheia',
    },
    shoppingTitle: 'Compras & Vida Noturna',
    shopping: [
      { icon: ShoppingBag, title: 'Duty Free Shop', desc: 'Compras isentas de impostos na fronteira' },
      { icon: Utensils, title: 'Feirinha de Puerto Iguazú', desc: 'Artesanato local e gastronomia regional' },
      { icon: Music, title: 'Rafain Jantar Show', desc: 'Show folclórico com jantar em Foz' },
    ],
    shoppingNote: 'Levamos e buscamos para que você aproveite sem preocupações',
    whyTitle: 'Por que escolher a Myriam?',
    why: [
      { icon: Shield, title: 'Segurança', desc: 'Veículo habilitado e seguro' },
      { icon: Clock, title: 'Pontualidade', desc: 'Monitoramento de voos em tempo real' },
      { icon: Heart, title: 'Atenção Especial', desc: 'Te cuido como família' },
    ],
    whyQuote: 'Mais de 8 anos cuidando de turistas de todo o mundo. Sua viagem segura é minha prioridade.',
    vehiclesTitle: 'Nossos Veículos',
    vehiclesSub: 'Viaje com conforto em veículos modernos, climatizados e habilitados.',
    vehicles: [
      { img: '/images/vehicle-citroen.png', name: 'Citroën C3 Aircross', cap: 'Até 4 passageiros' },
      { img: '/images/vehicle-fleet.png', name: 'Nossa Frota', cap: 'SUVs e Vans para todos os grupos' },
      { img: '/images/vehicle-van.png', name: 'Van para Grupos', cap: 'Até 12 passageiros' },
    ],
    vehicleTags: ['Ar-condicionado / AC', 'Veículo Habilitado', 'Seguro em Dia', 'Confortável e Limpo'],
    reviewsTitle: 'O que nossos clientes dizem',
    reviews: [
      { name: 'Alison Jara', flag: '🇺🇸', text: '"Super recomendável! A Myriam é incrível, muito atenciosa e profissional. Nos recebeu no aeroporto com placa e o carro estava impecável. Altamente recomendado!"' },
      { name: 'Máximo Kresta', flag: '🇦🇷', text: '"Escolheria ela mil vezes mais. Excelente serviço, pontual, carro confortável e com ar. Nos levou às Cataratas e a Foz sem problemas. 100% recomendada."' },
      { name: 'Nilda Paniagua', flag: '🇧🇷', text: '"Muito bom serviço, pontual e atenciosa. A Myriam fala português muito bem! Nos buscou no aeroporto e levou para todas as atrações. Recomendo!"' },
    ],
    faqTitle: 'Perguntas Frequentes',
    faq: [
      { q: 'Quais são os horários dos parques?', a: 'Tanto na Argentina quanto no Brasil, o acesso é das 8:00 às 16:00. Buscamos cedo para aproveitar bem o dia.' },
      { q: 'Fazem travessia de fronteira?', a: 'Sim, realizamos todos os trâmites migratórios para ir a Foz do Iguaçu, Ciudad del Este ou Duty Free.' },
      { q: 'Fazem transfers noturnos?', a: 'Sim, levamos ao jantar, Ice Bar, Feirinha ou Show das Águas Dançantes.' },
      { q: 'Quais formas de pagamento aceitam?', a: 'Dinheiro em ARS, USD e BRL. Transferência bancária também disponível.' },
      { q: 'Como reservo o Passeio Lua Cheia?', a: 'Disponível apenas 5 noites por mês. Nos escreva pelo WhatsApp com antecedência para garantir seu lugar.' },
    ],
    footerTagline: 'Transfer privado em Puerto Iguazú · English spoken · Falamos Português',
    footerRights: '© 2025 Myriam Transfers Iguazú. Todos os direitos reservados.',
    yearsExp: '8+ anos de experiência',
  },
}

function Stars({ n = 5, size = 'w-4 h-4' }: { n?: number; size?: string }) {
  return (
    <div className="flex">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} className={`${size} text-yellow-500 fill-yellow-500`} />
      ))}
    </div>
  )
}

export default function Home() {
  const [lang, setLang] = useState<Lang>('es')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const t = T[lang]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a className="flex items-center gap-2" href="/">
              <MapPin className="w-6 h-6 text-emerald-500" />
              <span className="font-bold text-lg md:text-xl text-white">
                Myriam | <span className="text-emerald-500">Transfers Iguazú</span>
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-sm font-medium text-white hover:text-emerald-400 transition-colors">{t.nav.services}</a>
              <a href="#airport" className="text-sm font-medium text-white hover:text-emerald-400 transition-colors">{t.nav.airport}</a>
              <a href="#reviews" className="text-sm font-medium text-white hover:text-emerald-400 transition-colors">{t.nav.reviews}</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              {/* Language switcher */}
              <div className="flex items-center gap-1 bg-white/10 rounded-full p-1">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${lang === l.code ? 'bg-emerald-500 text-white' : 'text-white/70 hover:text-white'}`}
                  >
                    <span>{l.flag}</span><span>{l.label}</span>
                  </button>
                ))}
              </div>
              <a href="tel:+5493757469737" className="flex items-center gap-1.5 border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-all">
                <Phone className="w-4 h-4" />{t.nav.call}
              </a>
              <a href={wa('Hola Myriam! Te vi en tu web y quiero cotizar...')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-md text-sm font-medium transition-all">
                {t.nav.whatsapp}
              </a>
            </div>

            <button className="md:hidden p-2 text-white" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-900/98 border-t border-white/10 px-4 py-4 flex flex-col gap-3 text-sm font-medium">
            <a href="#services" onClick={() => setMenuOpen(false)} className="text-white hover:text-emerald-400">{t.nav.services}</a>
            <a href="#airport" onClick={() => setMenuOpen(false)} className="text-white hover:text-emerald-400">{t.nav.airport}</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)} className="text-white hover:text-emerald-400">{t.nav.reviews}</a>
            <div className="flex items-center gap-1 bg-white/10 rounded-full p-1 w-fit mt-1">
              {LANGS.map((l) => (
                <button key={l.code} onClick={() => setLang(l.code)} className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${lang === l.code ? 'bg-emerald-500 text-white' : 'text-white/70'}`}>
                  <span>{l.flag}</span><span>{l.label}</span>
                </button>
              ))}
            </div>
            <a href={wa('Hola Myriam! Te vi en tu web y quiero cotizar...')} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 text-white px-4 py-2 rounded-md w-fit font-semibold">
              {t.nav.whatsapp}
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/iguazu-falls-hero.jpg" alt="Cataratas del Iguazú" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-20 pb-12 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-emerald-400 font-medium text-sm">{t.heroBadge}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {t.heroTitle}
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t.heroSub}
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                { icon: Plane, label: t.heroTags[0] },
                { icon: MapPin, label: t.heroTags[1] },
                { icon: Car, label: t.heroTags[2] },
              ].map((tag, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <tag.icon className="w-5 h-5 text-emerald-400" />
                  <span className="text-white text-sm">{tag.label}</span>
                </div>
              ))}
            </div>

            <a
              href={wa('Hola Myriam! Te vi en tu web y quiero cotizar...')}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg shadow-emerald-500/30 animate-pulse hover:animate-none transition-all"
            >
              {t.heroCta}
            </a>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
              <span className="text-white/60 text-sm">Scroll</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
                <div className="w-1.5 h-3 bg-emerald-400 rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AIRPORT */}
      <section id="airport" className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Plane className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.airportTitle}</h2>
              <p className="text-gray-400 text-lg">{t.airportSub}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {t.airportCards.map((card, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-emerald-500/30 transition-colors">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                    <card.icon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                  <p className="text-gray-400">{card.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <div className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-3">
                <Plane className="w-5 h-5 text-emerald-500" />
                <span className="text-white font-medium">Cataratas del Iguazú International Airport (IGR)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.servicesTitle}</h2>
              <p className="text-gray-500 text-lg">Transfer Iguazu Airport | Taxi Cataratas | Private Tours</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {t.services.map((s, i) => (
                <div key={i} className="rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 group bg-white">
                  <div className="p-6">
                    <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 transition-colors">
                      <s.icon className="w-7 h-7 text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{s.title}</h3>
                    <p className="text-emerald-600 font-medium text-sm mb-4">{s.sub}</p>
                    <ul className="space-y-2 mb-4">
                      {s.items.map((item, j) => (
                        <li key={j} className="text-gray-500 text-sm flex items-start gap-2">
                          <span className="text-emerald-500 mt-1">•</span>{item}
                        </li>
                      ))}
                    </ul>
                    {s.badge && (
                      <span className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-600 text-xs font-medium px-2 py-1 rounded-md">
                        <Clock className="w-3 h-3" />{s.badge}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-emerald-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.contactTitle}</h2>
              <p className="text-gray-500">{t.contactSub}</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="p-6 md:p-8">
                <form onSubmit={(e) => {
                  e.preventDefault()
                  const fd = new FormData(e.currentTarget as HTMLFormElement)
                  const msg = `Hola Myriam! Quiero cotizar:\nNombre: ${fd.get('name')}\nFecha: ${fd.get('date')}\nPersonas: ${fd.get('people')}\nServicio: ${fd.get('service')}\nMensaje: ${fd.get('message') || '-'}`
                  window.open(wa(msg), '_blank')
                }}>
                  <div className="grid gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.contactForm.name}</label>
                      <input name="name" required placeholder={t.contactForm.namePh} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.contactForm.email}</label>
                      <input type="email" name="email" required placeholder="tu@email.com" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.contactForm.phone}</label>
                      <input type="tel" name="phone" placeholder="+54 9 ..." className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.contactForm.date}</label>
                        <input type="date" name="date" required className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.contactForm.people}</label>
                        <input type="number" name="people" min="1" required placeholder="2" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.contactForm.service}</label>
                      <select name="service" required className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-700">
                        <option value="">{t.contactForm.servicePh}</option>
                        {t.contactForm.serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.contactForm.message}</label>
                      <textarea name="message" placeholder={t.contactForm.messagePh} rows={4} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none" />
                    </div>
                    <button type="submit" className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-md transition-colors">
                      <Send className="w-5 h-5" />{t.contactForm.submit}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-1 border border-emerald-500 text-emerald-600 text-xs font-medium px-2 py-1 rounded-md mb-4">
                ✨ {t.featuredTitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{t.featuredTitle}</h2>
              <p className="text-gray-500 text-lg">{t.featuredSub}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Tour 3 Países */}
              <div className="rounded-xl border border-emerald-200 bg-gradient-to-br from-white to-emerald-50 shadow-sm overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-emerald-500" />
                    </div>
                    <span className="bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-md">Popular</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.tour3.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">{t.tour3.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {t.tour3.items.map((item, i) => (
                      <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />{item}
                      </li>
                    ))}
                  </ul>
                  <a href={wa(`Hola Myriam! Quiero info sobre ${t.tour3.title}`)} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 rounded-md transition-colors text-sm">
                    {t.tour3.cta}
                  </a>
                </div>
              </div>

              {/* Luna Llena */}
              <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-900/5 shadow-sm overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center">
                      <Moon className="w-8 h-8 text-white" />
                    </div>
                    <span className="border border-gray-300 text-gray-600 text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1">
                      📅 5 noches/mes
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.luna.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">{t.luna.desc}</p>
                  <div className="bg-slate-100 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-500"><strong className="text-gray-800">Importante:</strong> {t.luna.note}</p>
                  </div>
                  <a href={wa(`Hola Myriam! Quiero info sobre ${t.luna.title}`)} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-slate-900 hover:bg-slate-700 text-white font-semibold py-2.5 rounded-md transition-colors text-sm">
                    {t.luna.cta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOPPING */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-flex text-xs font-medium border border-gray-200 text-gray-600 px-2 py-1 rounded-md mb-3">Shopping & Nightlife</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.shoppingTitle}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {t.shopping.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-8">{t.shoppingNote}</p>
          </div>
        </div>
      </section>

      {/* WHY MYRIAM */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.whyTitle}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 order-2 md:order-1">
                {t.why.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-emerald-300 transition-colors">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-200">
                  <p className="text-gray-800 italic text-lg">"{t.whyQuote}"</p>
                  <p className="text-emerald-600 font-semibold mt-3">— Myriam</p>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative">
                  <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-emerald-200 shadow-xl">
                    <Image src="/images/myriam-profile.jpg" alt="Myriam - Tu conductora de confianza en Iguazú" fill className="object-cover object-top" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-full shadow-lg">
                    <span className="font-semibold text-sm">{t.yearsExp}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VEHICLES */}
      <section id="vehicles" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Car className="w-7 h-7 text-emerald-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.vehiclesTitle}</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">{t.vehiclesSub}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {t.vehicles.map((v, i) => (
                <div key={i} className="rounded-xl border border-gray-200 hover:border-emerald-300 transition-colors overflow-hidden bg-white shadow-sm">
                  <div className="relative aspect-[4/3] bg-gray-100">
                    <Image src={v.img} alt={v.name} fill className="object-cover" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-gray-900">{v.name}</h3>
                    <p className="text-sm text-gray-500">{v.cap}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {t.vehicleTags.map((tag, i) => (
                <div key={i} className="bg-emerald-500/10 rounded-full px-4 py-2">
                  <span className="text-emerald-600 font-medium text-sm">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.reviewsTitle}</h2>
              <div className="flex items-center justify-center gap-3 mt-4">
                <Stars size="w-5 h-5" />
                <span className="text-gray-500 font-medium">5.0 en Google</span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {t.reviews.map((r, i) => (
                <div key={i} className="rounded-xl border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden bg-white">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-sm font-bold text-emerald-600">
                        {r.name[0]}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-gray-900 text-sm">{r.name}</span>
                        <span className="text-base">{r.flag}</span>
                      </div>
                    </div>
                    {/* Google icon */}
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                  </div>
                  <div className="p-4">
                    <Stars />
                    <p className="text-gray-700 text-sm leading-relaxed mt-3">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t.faqTitle}</h2>
            <div className="space-y-3">
              {t.faq.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{item.q}</span>
                    <ChevronDown className={`w-5 h-5 text-emerald-500 flex-shrink-0 ml-4 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">{item.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-gray-400 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-5 h-5 text-emerald-500" />
                <span className="text-white font-bold text-lg">Myriam | Transfers Iguazú</span>
              </div>
              <div className="text-sm">{t.footerTagline}</div>
            </div>
            <div className="text-center md:text-right">
              <a href="tel:+5493757469737" className="text-emerald-400 hover:text-emerald-300 font-medium text-sm block">+54 9 3757 46-9737</a>
              <div className="text-xs mt-1">{t.footerRights}</div>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={wa('Hola Myriam! Te vi en tu web y quiero cotizar...')}
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-5 py-3 rounded-full shadow-2xl transition-all hover:-translate-y-0.5"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="text-sm hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  )
}
