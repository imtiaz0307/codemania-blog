"use client"

import { filters } from "@/data/blogFilters";
import { useState } from "react";
import styles from './Filter.module.css'

const Filter = ({ blogs }) => {
    const [tabName, setTabName] = useState('ALL')

    const filterHandler = (e, filterName) => {
        e.target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
        setTabName(filterName)
        blogs = blogs.filter(blog => blog.title.toLowerCase().includes(filterName.toLowerCase()) || blog.description.toLowerCase().includes(filterName.toLowerCase()))

        blogs = filteredBlogs

        if (filterName === 'ALL') return setBlogsToShow(blogs);
    }

    return (
        <div className={styles.filters}>
            {
                filters.map((filter, index) => {
                    return <button key={index} className={`${styles.btn} ${filter === tabName && styles.active}`} onClick={(e) => filterHandler(e, filter)}>{filter}</button>
                })
            }
        </div>
    )
}

export default Filter