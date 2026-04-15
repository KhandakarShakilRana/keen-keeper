import Charts from '@/components/chart/Charts'
import React from 'react'

export const metadata = {
  title: "Friends Stats",
  description: "Friens Stats",
};


const Stats = () => {
  return (
    <div className="max-w-300 w-full mx-auto py-5">
      <Charts></Charts>
    </div>
  )
}

export default Stats