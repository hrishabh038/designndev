import { BlogCard } from '@/components/components'
import React from 'react'

type Props = {}

const BlogContainer = (props: Props) => {
  return (
    <div className='grid  gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
    </div>
  )
}

export default BlogContainer