import React from 'react';

const BlogPage = () => {
    return (
        <main>
            <h1>Blog</h1>
            <p>Latest industry news and updates.</p>
            <section className="blog-posts">
                <article className="post">
                    <h2>Post Title 1</h2>
                    <p>Post content...</p>
                </article>
                <article className="post">
                    <h2>Post Title 2</h2>
                    <p>Post content...</p>
                </article>
            </section>
        </main>
    );
};

export default BlogPage;