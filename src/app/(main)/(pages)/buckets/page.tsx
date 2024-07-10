import React from 'react'
import { Button } from '@/components/ui/button'
import { Cylinder } from 'lucide-react'

export default function BucketsPage() {
  return (
    <>
        <div className="inline-flex items-center gap-1.5">
          <Cylinder />
          <h1 className="text-lg font-semibold md:text-2xl">Buckets</h1>
        </div>
        <div
          className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
        >
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              You have no buckets yet
            </h3>
            <p className="text-sm text-muted-foreground">
              Add new buckets
            </p>
            <Button className="mt-4">Add Bucket</Button>
          </div>
        </div>
    </>
  )
}
