"use client"

import React from 'react'
import Link from 'next/link'
import { Cloud } from 'lucide-react'
import { adminItems, navbarItems } from '@/lib/constants'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathName = usePathname();
    
    return (
        <aside className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col">
                <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <Cloud className="h-6 w-6" />
                        <span className="">Home Cloud</span>
                    </Link>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4 py-4 lg:py-6">
                        <span className="px-2 py-2 text-xs font-bold font-mono uppercase text-muted-foreground">Your infra</span>
                        {navbarItems.map(item => (
                            <Link
                            key={item.label}
                            href={item.link}
                            className={clsx(
                                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                                {"bg-muted" : pathName === item.link}
                            )}
                        >
                            {item.icon}
                            {item.label}
                            </Link>
                        ))}
                    </nav>
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        <span className="px-2 py-2 text-xs font-bold font-mono uppercase text-muted-foreground">Administration</span>
                        {adminItems.map(item => (
                            <Link
                            key={item.label}
                            href={item.link}
                            className={clsx(
                                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                                {"bg-muted" : pathName === item.link}
                            )}
                        >
                            {item.icon}
                            {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </aside>
    )
}
