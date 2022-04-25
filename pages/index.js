import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninja" />
    </Head>
    <div >
      <h1 className={styles.title}>Homepage</h1>
      <p  className={styles.text}>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
        leo. Quisque sit amet est et sapien ullamcorper{" "}
      </p>
      <p  className={styles.text}>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
        leo. Quisque sit amet est et sapien ullamcorper{" "}
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>
          See Ninja Listing
        </a>
      </Link>
    </div>
    </>
  );
}
