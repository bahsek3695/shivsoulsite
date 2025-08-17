// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "SHIVSOUL — JAYA SHIVA SHAKTI",
  description: "Golden, divine, and fast.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Blessing bar (sticky) */}
        <div className="blessing">
          <span>ॐ नमः शिवाय</span>
        </div>

        {/* Simple navbar */}
        <header className="nav">
          <div className="brand">
            <span className="logo">🔱</span>
            <span className="title">SHIVSOUL</span>
          </div>
          <nav className="links">
            <a href="/">Home</a>
            <a href="/gallery">Gallery</a>
          </nav>
        </header>

        <main className="container">{children}</main>

        <footer className="footer">© {new Date().getFullYear()} SHIVSOUL • Jaya Shiva Shakti</footer>
      </body>
    </html>
  );
}