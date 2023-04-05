import React from 'react'

const ob=[
  {
    l:'https://nickwignall.com/better-mental-health-habits/',
    i: 'https://nickwignall.com/wp-content/uploads/2020/04/better-mental-health-habits-nick-wignall-1.jpg',
    d:'You should try practising some better mental habits',
  },
  {
    l:'https://nickwignall.com/3-limiting-beliefs-sabotaging-your-confidence/',
    i: 'https://nickwignall.com/wp-content/uploads/2021/06/limiting-beliefs-confidence-Nick-Wignall.jpg',
    d:'Hey, no need to break down your confidence',
  },
  {
    l:'https://nickwignall.com/peace-of-mind/',
    i: 'https://nickwignall.com/wp-content/uploads/2020/06/Peaceful-Mind-Nick-Wignall-2.jpg',
    d:'Try practising some techniques for a peace of mind',
  },
  {
    l:'https://nickwignall.com/10-healthy-ways-to-deal-with-negative-thinking/',
    i: 'https://nickwignall.com/wp-content/uploads/2022/06/10-healthy-ways-to-deal-with-negative-thinking-Nick-Wignall.jpg',
    d:"Just grit isn't everything, you need methods to deal with negativity too",
  },
]

export default function blog_card() {
  return (
    <div className='p-16'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
        {ob.map((index) => (
          <div className='bg-gray-200 rounded-lg shadow-lg p-4'>
            <h1 className='text-xl font-bold mb-4'>Blog {ob.indexOf(index)+1}</h1>
            <span>
              <img src={index.i} className='rounded-lg mb-2' />
            </span>
            <a className=' text-blue-400 mb-2' target="_blank" href={index.l} >{index.l}</a>
            <p className='text-gray-600'>{index.d}</p>
          </div>
        ) )
        }
      </div>
    </div>
    
  )
}