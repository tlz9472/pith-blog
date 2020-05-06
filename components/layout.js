import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicColorMode = dynamic(() => import("./colorMode"), { ssr: false });

export default function Layout({ children, description, title }) {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="/global.css" />
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
