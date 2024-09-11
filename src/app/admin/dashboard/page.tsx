import BarChart from '@/app/components/charts/BarChart'
import React from 'react'

const AdminDashboardPage = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='"sm:w-1/5 sm:h-3/4 md:w-1/2 md:h-3/4 lg:w-2/3 max-h-full max-w-full'>
        <BarChart />
      </div>
    </div>
  )
}

export default AdminDashboardPage