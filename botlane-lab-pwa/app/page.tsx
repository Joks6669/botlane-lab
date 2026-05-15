
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-2">Botlane Lab</h1>

        <p className="text-zinc-400 mb-8">
          Votre coach duoQ intelligent.
        </p>

        <div className="space-y-4">

          <div className="bg-zinc-900 rounded-3xl p-5">
            <p className="text-sm text-zinc-500 mb-1">
              Combo recommandé
            </p>

            <h2 className="text-2xl font-bold">
              Twitch + Yuumi
            </h2>

            <p className="text-green-400 mt-2">
              71% WR sur vos games
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-5">
            <p className="text-sm text-zinc-500 mb-1">
              Style conseillé
            </p>

            <h2 className="text-xl font-semibold">
              Scaling / Teamfight
            </h2>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-5">
            <p className="text-sm text-zinc-500 mb-1">
              Pire matchup
            </p>

            <h2 className="text-xl font-semibold">
              Caitlyn + Lux
            </h2>
          </div>

        </div>
      </div>
    </main>
  )
}
