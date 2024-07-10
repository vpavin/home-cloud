import React from 'react'
import { Button } from '@/components/ui/button'
import { Box } from 'lucide-react'

export default function DeploymentsPage() {
  return (
    <>
        <div className="inline-flex items-center gap-1.5">
          <Box />
          <h1 className="text-lg font-semibold md:text-2xl">Deployments</h1>
        </div>
        <div
          className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
        >
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              You have no deployments yet
            </h3>
            <p className="text-sm text-muted-foreground">
              Configure your first deployment by clicking Add Deployment
            </p>
            <Button className="mt-4">Add Deployment</Button>
          </div>
        </div>
    </>
  )
}
