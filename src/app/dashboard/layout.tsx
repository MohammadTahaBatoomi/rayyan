'use client'

import Sidebar from '@/components/dashboard/sidebar'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()

  // فقط زمانی که مسیر دقیقا /dashboard نیست، سایدبار نشون داده بشه
  const showSidebar = pathname !== '/dashboard'

  return (
    <div className="flex bg-[#151515] p-3.5 overflow-none">
      {showSidebar && <Sidebar />}
      <div className="flex-1">{children}</div>
    </div>
  )
}

export default DashboardLayout
