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
            <div className="post-wrapper">
                <h2 className="post-title large">{postData.title}</h2>
                <Date className="post-date" dateString={postData.date} />
                <div className="post-author">{postData.author}</div>
                <div
                    className="post-content"
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
            </div>
        </Layout>
    );
}
