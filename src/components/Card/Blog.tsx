import Link from 'next/link'
import React from 'react'

type Props = {}

const Blog = (props: Props) => {
  return (
    <div className=' flex flex-col gap-3'>
        <div className=' aspect-video bg-white/25'>

        </div>
        <h3 className='text-xl font-semibold line-clamp-2  text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laudantium odit nesciunt impedit sequi repellat adipisci expedita laboriosam corporis eligendi quam quia, veniam molestiae quidem sed esse, quaerat architecto deserunt.</h3>
        <p className=' line-clamp-6 text-neutral-400  text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis incidunt eveniet ipsa molestias, in illo esse deleniti quidem? Libero, vitae. Nostrum consectetur at eius sint repellat fugiat fuga perferendis autem?</p>
        <Link href="/read-more/shtbgiuwlkhyasgifr" className=' text-indigo-400 underline hover:text-indigo-600 w-fit'>read more</Link>
        <div className='flex justify-center py-2 border-t border-white/5'>
            <span className='text-neutral-600 text-xs'>27-March-2024</span>
        </div>
    </div>
  )
}

export default Blog