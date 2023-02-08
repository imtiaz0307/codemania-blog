import Image from 'next/image'
import styles from './Blog.module.css'
import fs from 'fs'

const BlogPage = ({ params }) => {
    const blog = JSON.parse(fs.readFileSync(`blogs/${params.slug}.json`, 'utf-8'))

    const htmlToText = () => {
        return { __html: blog.description }
    }
    return (
        <div className={styles.blog}>
            {
                blog
                &&
                <>
                    <Image src={blog.banner} alt={blog.title} width={1000} height={1000} />
                    <h1>{blog.title}</h1>
                    <div className={styles.description} dangerouslySetInnerHTML={htmlToText()}></div>
                </>
            }
        </div>
    )
}

export default BlogPage;