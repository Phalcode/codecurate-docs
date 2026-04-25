import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Documentation for the Codecurate platform</p>
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.title}
            </Heading>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
            <p className={styles.heroBody}>
              Both sides of Codecurate are documented now. The backend pages cover
              setup, authentication, media workflows, FFmpeg automation, compare
              jobs, and TMDB integration, while the frontend pages describe the
              React app shell, route map, OIDC flow, API integration, and user-facing workflows.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primaryAction} to="/docs/backend/overview">
                Read backend docs
              </Link>
              <Link className={styles.secondaryAction} to="/docs/frontend/overview">
                See frontend structure
              </Link>
            </div>
          </div>
          <div className={styles.heroPanel}>
            <div className={styles.panelCard}>
              <span className={styles.panelLabel}>Backend</span>
              <strong className={styles.panelValue}>Documented</strong>
              <p className={styles.panelText}>
                Runtime architecture, operations, endpoint groups, and deployment notes.
              </p>
            </div>
            <div className={styles.panelCard}>
              <span className={styles.panelLabel}>Frontend</span>
              <strong className={styles.panelValue}>Documented</strong>
              <p className={styles.panelText}>
                Application structure, auth flow, service layer, and workflow guides.
              </p>
            </div>
            <div className={styles.quickStrip}>
              <div>
                <span className={styles.quickStripLabel}>Security</span>
                <strong>JWT + allowed client checks</strong>
              </div>
              <div>
                <span className={styles.quickStripLabel}>Operations</span>
                <strong>MongoDB, watchers, FFmpeg queue</strong>
              </div>
              <div>
                <span className={styles.quickStripLabel}>Reference</span>
                <strong>OpenAPI at `/api/docs` and `/api/docs-yaml`</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Codecurate backend documentation with space reserved for future frontend guides.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
