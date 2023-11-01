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
          <h2 className={styles.homePage1SubHeader}>or Zimbardo et. al. 1971</h2>
        </div>
        <div className={styles.homePage2}>
          <h1 className={styles.homePage2Header}>
            What was the Stanford Prison Experiment?
          </h1>
          <p className={styles.homePage2Description}>
            The Stanford Prison Experiment was an experiment set up by Philip
            Zimbardo of Stanford. He wanted to see how stereotypes of roles such
            as prisoners and guards could influence the behaviour of people in
            those social roles. He did this by setting up an experiment where 20
            male college students who signed up from a newspaper for $15/hour
            were assigned to 10 prisoners and 10 guards. They were given proper
            prison treatment, and they had rules in place. These rules, however,
            were broken, causing extreme psychological damage to some prisoners
            and ended after 6 days, instead of the planned 14 days. The Stanford
            Prison Experiment created a huge debate on ethics for psychological
            experiments and led to the creation of multiple committees that were
            in charge of regulating experiments to ensure that they were ethical
            and did not cause harm to people.
          </p>
          <h1 className={styles.homePage2Header}>
            What psychological effects were caused by the experiment?
          </h1>
          <p className={styles.homePage2Description}>
            <ul>
              <li>The experiment did not follow ethical guidelines</li>
              <li>The rules given to the guards were not followed:</li>
              <ul>
                <li>
                  The prisoners were placed in solitary confinement for more
                  than an hour
                </li>
                <li>They were physically and mentally abused</li>
              </ul>
              <li>
                This is largely accredited to the fact that people's imagination
                of social roles were very different compared to the social roles
                themselves. This could be because of:
              </li>
              <ul>
                <li>Modern mainstream media depictions</li>
                <li>Books and newspapers</li>
                <li>Movies</li>
                <li>People's imagination,</li>
              </ul>
            </ul>
          </p>
          <h1 className={styles.homePage2Header}>Who was Philip Zimbardo?</h1>
          <p className={styles.homePage2Description}>
            Philip Zimbardo (1933-) was an American psychologist and professor
            who worked at Stanford University. He became well-known for the
            experiment he set up - Zimbardo et. al., which later came about to
            be the Stanford Prison Experiment. His experiment raised lots of ethical concerns regard
          </p>
        </div>
      </main>
    </Layout>
  );
}
