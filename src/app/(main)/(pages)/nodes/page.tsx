import { Server } from 'lucide-react'
import React from 'react'

export default function NodesPage() {
  return (
    <>
    <div className="inline-flex items-center gap-1.5">
      <Server />
      <h1 className="text-lg font-semibold md:text-2xl">Nodes</h1>
    </div>
    <div
      className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
    >
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">
          Cluster has no nodes yet
        </h3>
        <p className="text-sm text-muted-foreground">
          Open a new case to have your infrastructure configured
        </p>
      </div>
    </div>
</>
  )
}
