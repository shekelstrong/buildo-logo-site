import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Логотип за минуту — Buildo Logo",
  description: "AI-генератор логотипов для малого бизнеса и стартапов",
  themeColor: "#EC4899",
  openGraph: {
    title: "Buildo Logo",
    description: "AI-генератор логотипов для малого бизнеса и стартапов",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="dark">
      <body className="bg-bg text-ink antialiased">{children}</body>
    </html>
  )
}
