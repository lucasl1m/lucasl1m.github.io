import { lazy, Suspense } from 'react';
import { useNearViewport } from '../../hooks/useNearViewport';
import { useReveal } from '../../hooks/useReveal';
import { useI18n } from '../../i18n/useI18n';
import styles from './DevRoastCase.module.css';
import { ProjectDecisions, ProjectFacts, ProjectHeader } from './ProjectParts';

const StackGuess = lazy(() => import('./TechGuess'));

export function DevRoastCase() {
  const { t } = useI18n();
  const reveal = useReveal<HTMLDivElement>();
  const [gameRef, gameNear] = useNearViewport<HTMLDivElement>();

  return (
    <article id="project-devroast" className={styles.devRoast} aria-labelledby="project-devroast-title">
      <div ref={reveal} className="container reveal">
        <ProjectHeader id="devroast" number="03" />
        <div className={styles.lead}>
          <ProjectFacts id="devroast" />
        </div>
        <ProjectDecisions id="devroast" />
        <div ref={gameRef} className={styles.game}>
          {gameNear ? (
            <Suspense fallback={<div className={styles.placeholder}>{t.common.loading}</div>}>
              <StackGuess />
            </Suspense>
          ) : <div className={styles.placeholder} />}
        </div>
      </div>
    </article>
  );
}
