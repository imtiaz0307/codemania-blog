import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogCard.module.css'

const BlogCard = ({ blog }) => {
    return (
        <div className={styles.blog}>
            <div className={styles.blogImg}>
                <Image width={1000} height={1000} src={blog.banner} alt={blog.title} />
            </div>
            <h2>{blog.title.slice(0, 100)}</h2>
            <p>{blog.metadesc.slice(0, 230)}... <Link href={`/blogs/${blog.slug}`}>read more</Link></p>
            <Link href={`/blogs/${blog.slug}`} className={styles.btn}>Continue Reading</Link>
        </div>
    )
}

export default BlogCard;