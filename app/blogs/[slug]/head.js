import { blogPosts } from "@/data/blogPosts"


export default function Head({ params }) {
    const blog = blogPosts.filter(blogPost => params.slug === blogPost.slug)[0]

    return (
        <>
            <title>{`Codemania | ${blog.title}`}</title>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="description" content={blog.metadesc} />
            <link rel="icon" href="/favicon.png" />
        </>
    )
}