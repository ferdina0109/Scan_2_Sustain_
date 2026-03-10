import './globals.css'

export const metadata = {
  title: 'Scan2Sustain',
  description: 'Smart QR Based Cleanliness Reporting System',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}