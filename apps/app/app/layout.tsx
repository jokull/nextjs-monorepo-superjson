export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Test</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
