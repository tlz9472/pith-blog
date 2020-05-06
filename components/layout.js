import Head from "next/head";

export default function Layout({ children, description, title }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            {children}
        </div>
    );
}
