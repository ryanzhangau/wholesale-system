import { Card } from '@/components/Card'

export default function Dashboard () {
  return <div className='p-3 flex flex-col w-full'>
    <h1>Dashboard</h1>
    <Card url={ '/' } src={ '/test.jpg' } title={ 'Test product' } price={ {
      was: '600.99',
      now: '300.95'
    } } />
  </div>
}