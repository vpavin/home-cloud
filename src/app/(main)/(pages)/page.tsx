import React from 'react'
import { LayoutDashboard } from 'lucide-react'

export default function DashboardPage() {
  return (
    <>
        <div className="inline-flex items-center gap-1.5">
          <LayoutDashboard />
          <h1 className="text-lg font-semibold md:text-2xl">Your Cloud</h1>
        </div>
        <div
          className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
        >
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              Page is not implemented yet
            </h3>
            <p className="text-sm text-muted-foreground">
              But will be soon
            </p>
          </div>
        </div>
    </>
  )
}
