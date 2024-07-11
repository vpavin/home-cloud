"use client"

import React from 'react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Cloud, ChevronDown } from 'lucide-react'
import { OrganizationSwitcher, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { navbarItems } from '@/lib/constants';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import OrgSwitcher from './org-switcher';

export default function Header() {

    const pathName = usePathname();
    const page = navbarItems.filter(item => pathName === item.link)[0];

    return (
        <header className="flex h-14 items-center gap-4 px-4 lg:h-[60px] lg:px-6">
            <div className="w-full flex-1">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">
                                <Cloud />
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        { page?.isAdmin ?
                            <BreadcrumbItem>
                                Administration
                            </BreadcrumbItem>
                            :
                            <BreadcrumbItem>
                                Namespace:
                                <Badge variant="outline">
                                    Production
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="flex items-center gap-1">
                                            <ChevronDown className="h-4 w-4" />
                                            <span className="sr-only">Toggle menu</span>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="start">
                                            <DropdownMenuItem>Production</DropdownMenuItem>
                                            <DropdownMenuItem>Development</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>                                    
                                </Badge>
                            </BreadcrumbItem>
                        }
                        { page &&
                            <>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href={page.link}>
                                        { page.label }
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </>
                        }
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <OrgSwitcher />
            <ModeToggle />            
            <SignedIn>
              <UserButton />
            </SignedIn>
        </header>
    )
}
