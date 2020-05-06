import Link from "next/link";
import Date from "../components/date";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div>
      <Layout title="Posts - Pith Blog">
        <p className="about">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac dui
          vel nunc bibendum sodales. Nulla at lorem velit. Suspendisse bibendum
          feugiat turpis ac sollicitudin.
        </p>
        {allPostsData.map(({ id, date, author, title, summary }) => (
          <div key={id}>
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <div className="post-wrapper link">
                <h2 className="post-title">{title}</h2>
                <Date className="post-date" dateString={date} />
                <div className="post-author">{author}</div>
                <summary className="post-summary">{summary}</summary>
              </div>
            </Link>
          </div>
        ))}
      </Layout>
    </div>
  );
}
