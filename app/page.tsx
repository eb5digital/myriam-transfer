export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-50 to-white">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-emerald-600 mb-4">
          Myriam Transfer Iguazu
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Servicio de transporte privado y excursiones turisticas
        </p>
        <a
          href="https://wa.me/5493757469737"
          className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors"
        >
          Contactar por WhatsApp
        </a>
      </div>
    </main>
  )
}
