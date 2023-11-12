import Breadcrumb from '@/components/Breadcrumb'
import SideNav from '@/components/Sidebar'
import { mockCats } from '@/mocks'

type Props = {
  children: React.ReactNode
}

export default function Layout ({ children }: Props) {
  return (
    <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
      <div className="w-full flex-none md:w-64">
        <SideNav links={ mockCats } />
      </div>
      <div className="flex-grow flex flex-col p-6 md:overflow-y-auto md:p-12">
        <Breadcrumb prefix='/cat' />
        { children }
      </div>
    </div >
  )
}