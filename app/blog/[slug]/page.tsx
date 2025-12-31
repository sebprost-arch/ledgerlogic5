import BlogPostContent from '../../../src/views/BlogPost';

export default function Page({ params }: { params: { slug: string } }) {
    return <BlogPostContent slug={params.slug} />;
}
