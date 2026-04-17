import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Taxi & Transfers Iguazú | Myriam - English Spoken / Falamos Português',
  description: 'Official Private Driver at Iguazú Airport (IGR). Safe transfers to Foz do Iguaçu & Falls. English Spoken. WhatsApp Booking.',
  keywords: 'Transfer Iguazu Airport, Taxi Cataratas, Motorista Privado Foz, Remis Aeropuerto IGR, Private Driver Iguazu, Transporte Puerto Iguazú',
  openGraph: {
    title: 'Taxi & Transfers Iguazú | Myriam - English Spoken / Falamos Português',
    description: 'Official Private Driver at Iguazú Airport (IGR). Safe transfers to Foz do Iguaçu & Falls.',
    locale: 'es_AR',
    alternateLocale: ['en_US', 'pt_BR'],
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  generator: 'v0.app',
  alternates: {
    types: {
      'text/plain': 'https://www.myriamtransfer.com/llms.txt',
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#10B981',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>

        {/* SCHEMA — LocalBusiness + GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.myriamtransfer.com/#business",
              "name": "Myriam Transfers Iguazú",
              "alternateName": ["Myriam Transfer", "Taxi Cataratas Myriam", "Transfer Iguazu Airport"],
              "description": "Servicio de transfer privado VIP en Puerto Iguazú. Traslados desde el Aeropuerto IGR, tours a las Cataratas del Iguazú, Foz do Iguaçu, Tour 3 Países y Paseo de Luna Llena. English spoken. Falamos Português.",
              "url": "https://www.myriamtransfer.com",
              "telephone": "+5493757469737",
              "email": "losportenostot@gmail.com",
              "priceRange": "$$",
              "currenciesAccepted": "ARS, USD, BRL",
              "paymentAccepted": "Cash, Credit Card, Transferencia bancaria",
              "image": "https://www.myriamtransfer.com/images/myriam-profile.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Puerto Iguazú",
                "addressLocality": "Puerto Iguazú",
                "addressRegion": "Misiones",
                "addressCountry": "AR",
                "postalCode": "3370"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -25.5995,
                "longitude": -54.5783
              },
              "areaServed": [
                { "@type": "City", "name": "Puerto Iguazú" },
                { "@type": "City", "name": "Foz do Iguaçu" },
                { "@type": "AdministrativeArea", "name": "Misiones, Argentina" }
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                  "opens": "00:00",
                  "closes": "23:59"
                }
              ],
              "hasMap": "https://g.page/r/Cejma71kfr8aEBM",
              "sameAs": ["https://g.page/r/Cejma71kfr8aEBM"],
              "knowsLanguage": ["es", "en", "pt"],
              "founder": {
                "@type": "Person",
                "name": "Myriam",
                "jobTitle": "Conductora y Guía de Turismo",
                "description": "Más de 8 años cuidando turistas en Iguazú. English spoken. Falamos Português."
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "3",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Alison Jara" },
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "reviewBody": "Súper recomendable! Una genia Myriam, muy atenta y profesional. Nos recibió en el aeropuerto con cartel y el auto estaba impecable. Highly recommend!",
                  "inLanguage": "es"
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Máximo Kresta" },
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "reviewBody": "La vuelvo a elegir mil veces más. Excelente servicio, puntual, auto cómodo y con aire. Nos llevó a las Cataratas y a Foz sin problemas. 100% recomendada.",
                  "inLanguage": "es"
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Nilda Paniagua" },
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "reviewBody": "Muito bom serviço, pontual e atenciosa. A Myriam fala português muito bem! Nos buscou no aeroporto e levou para todas as atrações. Recomendo!",
                  "inLanguage": "pt"
                }
              ]
            })
          }}
        />

        {/* SCHEMA — TaxiService */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TaxiService",
              "name": "Transfer Aeropuerto Iguazú IGR — Myriam Transfers",
              "description": "Servicio de transfer privado desde el Aeropuerto Internacional de Iguazú (IGR) a hoteles en Puerto Iguazú y Foz do Iguaçu. Meet & Greet con cartel, monitoreo de vuelo en tiempo real, vehículo con AC.",
              "provider": { "@id": "https://www.myriamtransfer.com/#business" },
              "areaServed": "Puerto Iguazú, Misiones, Argentina",
              "url": "https://www.myriamtransfer.com/#airport",
              "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": "https://wa.me/5493757469737",
                "servicePhone": "+5493757469737",
                "availableLanguage": ["Spanish", "English", "Portuguese"]
              }
            })
          }}
        />

        {/* SCHEMA — Tours */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Tours y Excursiones en Iguazú — Myriam Transfers",
              "url": "https://www.myriamtransfer.com/#services",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "TouristTrip",
                    "name": "Tour 3 Países en un Día — Argentina, Brasil y Paraguay",
                    "description": "Visitá Argentina, Brasil y Paraguay en un solo día. Conocé el Hito Tres Fronteras con traslados exclusivos desde Puerto Iguazú.",
                    "provider": { "@id": "https://www.myriamtransfer.com/#business" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "TouristTrip",
                    "name": "Paseo de Luna Llena — Cataratas del Iguazú",
                    "description": "Caminata nocturna a la Garganta del Diablo bajo la luna llena. Solo 5 noches al mes. Reserva anticipada requerida.",
                    "provider": { "@id": "https://www.myriamtransfer.com/#business" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "TouristTrip",
                    "name": "Excursión Cataratas del Iguazú Argentinas y Brasileras",
                    "description": "Tour privado a las Cataratas del Iguazú, lado argentino y brasilero. Incluye Parque de Aves, Güira Oga, Catamarán y Safari Macuco.",
                    "provider": { "@id": "https://www.myriamtransfer.com/#business" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "TouristTrip",
                    "name": "Transfer Foz do Iguaçu — Itaipú, Templo Budista, Mesquita",
                    "description": "Traslado a Foz do Iguaçu con visitas a Itaipú Binacional, Templo Budista y Mesquita Islámica. Cruce de frontera ágil.",
                    "provider": { "@id": "https://www.myriamtransfer.com/#business" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "TouristTrip",
                    "name": "Excursión Minas de Wanda y Ruinas de San Ignacio",
                    "description": "Full day con Minas de Wanda, Ruinas Jesuíticas de San Ignacio, Salto del Moconá, La Aripuca e Ice Bar.",
                    "provider": { "@id": "https://www.myriamtransfer.com/#business" }
                  }
                }
              ]
            })
          }}
        />

        {/* SCHEMA — FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "¿Cuáles son los horarios de los parques de Iguazú?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El Parque Nacional Iguazú (lado argentino) y el Parque Nacional do Iguaçu (lado brasilero) abren de 8:00 a 16:00 hs. Se recomienda llegar temprano para aprovechar mejor la visita."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Realizan cruce de frontera entre Argentina y Brasil?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí. Myriam Transfers realiza cruces de frontera entre Argentina y Brasil (Foz do Iguaçu) y también a Paraguay (Ciudad del Este). El trámite migratorio es ágil y te acompañamos en todo el proceso."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Hacen traslados nocturnos desde el aeropuerto de Iguazú?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, realizamos traslados nocturnos desde el Aeropuerto Internacional Cataratas del Iguazú (IGR). Monitoreamos el vuelo en tiempo real para adaptarnos a cualquier demora."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cómo reservo el Paseo de Luna Llena en Iguazú?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El Paseo de Luna Llena está disponible solo 5 noches al mes. Reservá con anticipación contactándonos por WhatsApp al +54 9 3757 46-9737 para confirmar disponibilidad."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Qué formas de pago aceptan?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Aceptamos efectivo en pesos argentinos (ARS), dólares estadounidenses (USD) y reales brasileros (BRL). También realizamos transferencias bancarias."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cómo ir del aeropuerto de Iguazú al centro de Puerto Iguazú?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La mejor opción es contratar un transfer privado. El Aeropuerto Internacional Cataratas (IGR) está a unos 20 minutos del centro de Puerto Iguazú. Myriam te espera con cartel a tu nombre y te lleva directo a tu hotel."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Hablan inglés o portugués?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí. Myriam habla español, inglés y portugués (English spoken / Falamos Português). Atendemos turistas de todo el mundo."
                  }
                }
              ]
            })
          }}
        />

      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        {/* v0 – built-with badge */}
        <div dangerouslySetInnerHTML={{ __html: `<div id="v0-built-with-button-d422d7db-0c1c-49a3-a3b1-9188c38c5c13" style="
border: 1px solid hsl(0deg 0% 100% / 12%);
position: fixed;
bottom: 24px;
right: 24px;
z-index: 1000;
background: #121212;
color: white;
padding: 8px 12px;
border-radius: 8px;
font-weight: 400;
font-size: 14px;
box-shadow: 0 2px 8px rgba(0,0,0,0.12);
letter-spacing: 0.02em;
transition: all 0.2s;
display: flex;
align-items: center;
gap: 4px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
">
<a
  href="https://v0.app/chat/api/open/built-with-v0/b_0QTtKX5UxKD?ref=ZBRHLC"
  target="_blank"
  rel="noopener"
  style="
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 4px;
  "
>
  Built with
  <svg
    fill="currentColor"
    viewBox="0 0 147 70"
    xmlns="http://www.w3.org/2000/svg"
    style="width: 20px; height: 20px;"
  >
    <path d="M56 50.2031V14H70V60.1562C70 65.5928 65.5928 70 60.1562 70C57.5605 70 54.9982 68.9992 53.1562 67.1573L0 14H19.7969L56 50.2031Z" />
    <path d="M147 56H133V23.9531L100.953 56H133V70H96.6875C85.8144 70 77 61.1856 77 50.3125V14H91V46.1562L123.156 14H91V0H127.312C138.186 0 147 8.81439 147 19.6875V56Z" />
  </svg>
</a>
<button
  onclick="document.getElementById('v0-built-with-button-d422d7db-0c1c-49a3-a3b1-9188c38c5c13').style.display='none'"
  onmouseenter="this.style.opacity='1'"
  onmouseleave="this.style.opacity='0.7'"
  style="
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 2px;
    margin-left: 4px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    opacity: 0.7;
    transition: opacity 0.2s;
    transform: translateZ(0);
  "
  aria-label="Close"
>
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 6L6 18M6 6l12 12"/>
  </svg>
</button>
<span style="
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
">
  v0
</span>
</div>` }} />
      </body>
    </html>
  )
}
