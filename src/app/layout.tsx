import type { Metadata } from "next";
import "./styles/main.scss";
import FinanceProvider from "./Store/FinanceProvider";
import AuthProvider from "../../Auth/AuthProvider";
import Navigation from "./Navigation";


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
                <Navigation/>
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
