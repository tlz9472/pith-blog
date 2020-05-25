import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicColorMode = dynamic(() => import("./colorMode"), { ssr: false });

export default function Layout({ children, description, title }) {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="/global.css" />
                <meta name="description" content={description} />
                <title>{title}</title>
            </Head>
            <div>
                <nav>
                    <Link href="/">
                        <div id="logo">
                            Pith <span className="blog">Blog</span>
                        </div>
                    </Link>
                </nav>
                {children}
                <DynamicColorMode />
            </div>
        </div>
    );
}
