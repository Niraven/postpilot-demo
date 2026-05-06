import './globals.css'

export const metadata = {
  title: 'PostPilot — AI Content Repurposing',
  description: 'Turn one blog post into platform-optimized content for Twitter, LinkedIn, Instagram, and TikTok.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
