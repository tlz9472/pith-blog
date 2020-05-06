import Link from "next/link";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div className="container">
      <main>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>

              <Date dateString={date} />
            </li>
          ))}
        </ul>
      </main>

      <footer>blah</footer>
    </div>
  );
}
