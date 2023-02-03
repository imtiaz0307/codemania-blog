import Link from "next/link";

const BlogsPage = () => {
    return (
        <div>
            <Link href={'/blogs/blog1'}>Blog1</Link>
            <Link href={'/blogs/blog2'}>Blog2</Link>
            <Link href={'/blogs/blog3'}>Blog3</Link>
            <Link href={'/blogs/blog4'}>Blog4</Link>
        </div>
    )
}

export default BlogsPage;