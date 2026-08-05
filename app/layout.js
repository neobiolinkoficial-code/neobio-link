export const metadata = {
  title: 'NeoBio Link',
  description: 'Gerador de Bio Site que nunca falha',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{margin:0, padding:0}}>{children}</body>
    </html>
  )
}
