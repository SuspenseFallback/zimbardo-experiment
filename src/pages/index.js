import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />"
    >
      <main className={styles.homePage}>
        <div className={styles.homePage1}>
          <div className={styles.homePage1Overlay}></div>
          <h1 className={styles.homePage1Header}>
            The Stanford Prison Experiment
          </h1>
          <h2 className={styles.homePage1SubHeader}>or Zimbardo et. al. </h2>
        </div>
      </main>
    </Layout>
  );
}
