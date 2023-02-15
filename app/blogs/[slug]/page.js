"use client"

import { blogPosts } from '@/data/blogPosts'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import styles from './Blog.module.css'

const BlogPage = ({ params }) => {
    const postDescription = useRef()
    const blog = blogPosts.filter(blogPost => blogPost.slug === params.slug)[0]


    useEffect(() => {
        postDescription.current.innerHTML = blog.description
    }, [])
    return (
        <div className={styles.blog}>
            {
                blog
                &&
                <>
                    <Image src={blog.banner} alt={blog.title} width={1000} height={1000} />
                    <h1>{blog.title}</h1>
                    <div className={styles.description} ref={postDescription}></div>
                </>
            }
        </div>
    )
}

export default BlogPage;