import React from 'react'
import Header from '@/components/global/header'
import Navbar from '@/components/global/navbar'

type Props = { children: React.ReactNode }

const layout = (props: Props) => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <Navbar />
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        { props.children }
      </main>
    </div>
  </div>
  )
}

export default layout