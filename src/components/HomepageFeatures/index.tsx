import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  index: string;
  title: string;
  href: string;
  description: string;
  detail: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    index: "01",
    title: "Deploy the backend",
    href: "/docs/backend/getting-started",
    description:
      "Install prerequisites, configure the environment, and get the API online on port 5000.",
    detail:
      "Includes local development, Docker notes, and every current backend environment variable.",
  },
  {
    index: "02",
    title: "Run media workflows",
    href: "/docs/backend/media-library",
    description:
      "Understand indexing, filtering, uploads, secure downloads, file rename, and delete behavior.",
    detail:
      "The docs map the API to the actual watcher, reconciliation, and storage behavior in the backend.",
  },
  {
    index: "03",
    title: "Understand the frontend app",
    href: "/docs/frontend/overview",
    description:
      "Follow the React shell, OIDC authentication flow, service wrappers, and page-level user workflows.",
    detail:
      "The frontend docs tie the route structure and UI behavior back to the backend contracts they consume.",
  },
];

function Feature({ index, title, href, description, detail }: FeatureItem) {
  return (
    <article className={styles.featureCard}>
      <span className={styles.featureIndex}>{index}</span>
      <Heading as="h3" className={styles.featureTitle}>
        {title}
      </Heading>
      <p className={styles.featureDescription}>{description}</p>
      <p className={styles.featureDetail}>{detail}</p>
      <Link className={styles.featureLink} to={href}>
        Open section
      </Link>
    </article>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionIntro}>
          <p className={styles.sectionEyebrow}>Start where you are working</p>
          <Heading as="h2" className={styles.sectionTitle}>
            A docs structure built around the current product split
          </Heading>
          <p className={styles.sectionBody}>
            The backend pages are written for operators and integrators, while
            the frontend pages cover the React application shell, integration
            patterns, and user-facing workflows.
          </p>
        </div>
        <div className={styles.featureGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
