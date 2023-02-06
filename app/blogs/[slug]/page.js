'use client'

import { blogs } from '@/data/blogsData'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './Blog.module.css'

const BlogPage = ({ params }) => {
    const { slug } = params
    const [blog, setBlog] = useState('')

    useEffect(() => {
        console.log(slug)
        setBlog(...blogs.filter(curBlog => curBlog.slug == slug))
    }, [])
    return (
        <div className={styles.blog}>
            {
                blog
                &&
                <>
                    <Image src={blog.img} alt={blog.title} width={1000} height={1000} />
                    <h1>{blog.title}</h1>
                    <p>{blog.description}</p>
                </>
            }
        </div>
    )
}

export default BlogPage;