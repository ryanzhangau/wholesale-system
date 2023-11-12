import Image from 'next/image'
import Link from 'next/link'
import { CardProp } from './types'

export function Card ({ url, src, title, price: { was, now } }: CardProp) {

  return <div className='flex flex-col max-w-[320px] relative  shadow-gray-500 shadow-md'>
    <div className='absolute bg-sky-500 text-white px-2 py-1 text-sm'>- 25%</div>
    <Link href={ url } className=' '>
      <Image src={ src } alt={ title } width={ 320 } height={ 300 } />

      <h4 className='font-bold p-2 text-xl'>{ title }</h4>

      <div className='flex p-2'>
        { was && <span className='line-through text-gray-400 pr-4'>Was: ${ was }</span> }
        <span>Now: ${ now }</span>
      </div>

    </Link>

    <button className='bg-sky-500 text-white py-2 mt-3 text-lg'>View</button>
  </div>
}