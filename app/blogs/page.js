"use client"

import { filters } from "@/data/blogFilters";
import { useState } from "react";
import { blogs } from '../../data/blogsData'
import BlogCard from "../components/BlogCard/BlogCard";
import styles from './Blogs.module.css'

const BlogsPage = () => {
    const [blogsToShow, setBlogsToShow] = useState(blogs)
    const [tabName, setTabName] = useState('ALL')

    const filterHandler = (e, filterName) => {
        e.target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
        setTabName(filterName)
        const filteredBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(filterName.toLowerCase()) || blog.description.toLowerCase().includes(filterName.toLowerCase()))

        setBlogsToShow(filteredBlogs)

        if (filterName === 'ALL') return setBlogsToShow(blogs);
    }

    return (
        <div className={styles.blogsPage}>
            <div className={styles.filters}>
                {
                    filters.map((filter, index) => {
                        return <button key={index} className={`${styles.btn} ${filter === tabName && styles.active}`} onClick={(e) => filterHandler(e, filter)}>{filter}</button>
                    })
                }
            </div>

            <div className={styles.blogs}>
                {
                    blogsToShow.length > 0
                        ?
                        blogsToShow.map((blog, index) => {
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