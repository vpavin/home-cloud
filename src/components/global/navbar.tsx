import React from 'react'
import Link from 'next/link'
import { Cloud, Server, Box, Cylinder } from 'lucide-react'

export default function Navbar() {
  return (
    <aside className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Cloud className="h-6 w-6" />
            <span className="">Home Cloud</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Server className="h-4 w-4" />
              Nodes

            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
            >
              <Box className="h-4 w-4" />
              Deployments
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Cylinder className="h-4 w-4" />
              Buckets
            </Link>
          </nav>
        </div>
      </div>
    </aside>
  )
}
