const BlogPage = ({ params }) => {
    const { blogtitle } = params
    return (
        <div>Blog: {blogtitle}</div>
    )
}

export default BlogPage;