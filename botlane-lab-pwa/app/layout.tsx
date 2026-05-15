
import './globals.css'

export const metadata = {
  title: 'Botlane Lab',
  description: 'DuoQ Assistant'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
