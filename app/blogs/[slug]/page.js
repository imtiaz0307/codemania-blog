import Image from 'next/image'
import styles from './Blog.module.css'
import fs from 'fs'

const getBlogPost = (postSlug) => {
    return JSON.parse(fs.readFileSync(`../../blogposts/${encodeURIComponent(postSlug)}.json`, 'utf-8'))
}

const BlogPage = ({ params }) => {
    const blog = getBlogPost(params.slug)

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