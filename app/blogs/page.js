"use client"

import BlogCard from "../components/BlogCard/BlogCard";
import styles from './Blogs.module.css'
import { blogPosts } from "@/data/blogPosts";
import Filter from "../components/Filter/Filter";
import { useState } from "react";

const BlogsPage = () => {
    const [blogs, setBlogs] = useState(blogPosts)
    return (
        <div className={styles.blogsPage}>

            <Filter blogs={blogPosts} setBlogs={setBlogs} />

            <div className={styles.blogs}>
                {
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