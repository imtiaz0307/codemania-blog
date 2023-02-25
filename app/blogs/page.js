"use client"

import BlogCard from "../components/BlogCard/BlogCard";
import styles from './Blogs.module.css'
import { blogPosts } from "@/data/blogPosts";
import Filter from "../components/Filter/Filter";
import { useState } from "react";
import { useSearchParams } from "next/navigation";


const BlogsPage = () => {
    const search = useSearchParams()
    const searchQuery = search.get('search')

    const [blogs, setBlogs] = useState(blogPosts)

    const filtered = blogs.filter(blog => {
        return blog.title.toLowerCase().includes(searchQuery)
            ||
            blog.description.toLowerCase().includes(searchQuery)
            ||
            blog.slug.toLowerCase().includes(searchQuery)
            ||
            blog.metadesc.toLowerCase().includes(searchQuery)
    })

    return (
        <div className={styles.blogsPage}>

            <Filter blogs={blogPosts} setBlogs={setBlogs} />

            <div className={styles.blogs}>
                {
                    searchQuery
                        ?
                        filtered.map((blog, index) => {
                            return <BlogCard key={index} blog={blog} />
                        })
                        :
                        blogs.length > 0
                            ?
                            blogs.map((blog, index) => {
                                return <BlogCard key={index} blog={blog} />
                            })
                            :
                            'No Blogs To Show'
                }
            </div>
        </div>
    )
}

export default BlogsPage;