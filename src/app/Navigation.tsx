'use client'

import React from 'react';
import Link from 'next/link';
import  { usePathname, useRouter } from 'next/navigation';

export default function Navigation() {
  const router = useRouter()
    const pathname = usePathname();
   const pathArr = pathname.split('/')
   let menu;
    if (pathname === '/dashboard' || pathArr.includes('account')) {
        menu = <ul className="navigation__menu">
        <li><Link href="/dashboard" className="navigation__link">Dashboard</Link></li>
        <li><p className="navigation__link" style={{
          marginBottom: 0,
          cursor: 'pointer'
        }} onClick={e => {
          e.preventDefault();
          router.push('/login');
        }}>Logout</p></li>
        </ul>
    } else {
        menu = <ul className="navigation__menu">
        <li><Link href="/about" className="navigation__link">About</Link></li>
        <li><Link href="/login" className="navigation__link">Sign In</Link></li>
        <li><Link href="/sign-up" className="navigation__link">Sign Up</Link></li>
        </ul>
    }
  return (
    <nav className="navigation">
        <Link className="navigation__logo" href="/">PiggyFinance</Link>

        {menu}
    </nav>
  )
}
