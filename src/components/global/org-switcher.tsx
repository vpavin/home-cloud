
import { useOrganization, useOrganizationList } from '@clerk/nextjs'
import React from 'react'
import { Skeleton } from '@/components/ui/skeleton';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { Building2, ChevronDown } from 'lucide-react';

export default function OrgSwitcher() {

    const { isLoaded, setActive, userMemberships } = useOrganizationList({
        userMemberships: {
            infinite: true,
        },
    });

    const { organization } = useOrganization();

    if (!isLoaded) {
        return <Skeleton className="h-6 w-[56px]"></Skeleton>;
    }

    return (
        <div className="flex items-center gap-3 text-muted-foreground transition-all hover:text-primary">
            <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                    <span>{organization?.name}</span>
                    <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                    <DropdownMenuLabel>Organizations</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {userMemberships.data?.map(org =>
                        <DropdownMenuItem key={org.id} onClick={() => setActive({ organization: org.id })}>
                            <Building2 className="mr-2 h-4 w-4" />
                            <span>{org.organization.name}</span>
                        </DropdownMenuItem>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
