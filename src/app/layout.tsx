import type { Metadata } from "next";
import Link from "next/link";
import "./styles/main.scss";
import FinanceProvider from "./Store/FinanceProvider";
import AuthProvider from "../../Auth/AuthProvider";


export const metadata: Metadata = {
  title: "Piggy Finance",
  description: "Manage your income and expenditure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="app-body">
    <AuthProvider>
        <FinanceProvider>
            <header className="site-header">
              <div className="container">
                <nav className="navigation">
                  <Link className="navigation__logo" href="/">PiggyFinance</Link>

                  <ul className="navigation__menu">
                    <li><Link href="/about" className="navigation__link">About</Link></li>
                    <li><Link href="/login" className="navigation__link">Sign In</Link></li>
                    <li><Link href="/sign-up" className="navigation__link">Sign Up</Link></li>
                  </ul>
                </nav>
              </div>
            </header>
            {children}
            <footer className="footer">
              <div className="container">
                <p className="footer__credits">&copy;2025 - Created By Pilate For ALX Webstack Portfolio</p>
              </div>
            </footer>
        </FinanceProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
