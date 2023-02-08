import BlogCard from "../components/BlogCard/BlogCard";
import fs from 'fs'
import styles from './Blogs.module.css'

// uncomment below import to import filters
// import Filter from "../components/Filter/Filter";

const BlogsPage = () => {
    const blogTitlesArray = fs.readdirSync('blogs')
    let blogs = blogTitlesArray.map(blog => JSON.parse(fs.readFileSync(`blogs/${blog}`, 'utf-8')))

    return (
        <div className={styles.blogsPage}>

            {/* you can enable filters, but i am disabling it for now */}
            {/* <Filter blogs={blogs} /> */}

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