import React from 'react'
import { Card } from '../ui/card'
import { LucideIcon } from 'lucide-react'

interface DashboardCardProps {
    title: string,
    count: number,
    icon: React.ReactElement<LucideIcon>
}

const DashboardCard = ({ title, count, icon }: DashboardCardProps) => {
  return (
    <div>
        <Card className='bg-orange-100 dark:bg-orange-800 p-4 pb-0'>
            <h3 className='text-3xl text-center mb-4 font-bold text-orange-500 dark:text-orange-200'>{title}</h3>
            <div className='flex gap-5 justify-center items-center'>
                {icon}
                <h3 className='text-5xl font-semibold text-orange-500 dark:text-orange-200'>{count}</h3>
            </div>
        </Card>
    </div>
  )
}

export default DashboardCard
