import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export default function Post({ postData }) {
    return (
        <Layout title={`${postData.title} - Pith Blog`} description="Test">
            <h1>{postData.title}</h1>
            <h2>{postData.author}</h2>
            <Date dateString={postData.date} />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
    );
}
