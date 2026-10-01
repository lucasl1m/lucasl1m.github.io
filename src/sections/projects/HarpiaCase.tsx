import { useReveal } from '../../hooks/useReveal';
import { useI18n } from '../../i18n/useI18n';
import { ProjectDecisions, ProjectFacts, ProjectHeader } from './ProjectParts';
import styles from './HarpiaCase.module.css';

export function HarpiaCase() {
  const { t } = useI18n();
  const reveal = useReveal<HTMLDivElement>();

  return (
    <article id="project-harpia" className={styles.harpia} aria-labelledby="project-harpia-title">
      <div ref={reveal} className="container reveal">
        <ProjectHeader id="harpia" number="02" />
        <div className={styles.legend}>
          <h4 className={styles.legendTitle}>{t.projects.harpia.annotationsTitle}</h4>
          <ol className={styles.legendList}>
            {t.projects.harpia.annotations.map((item, index) => (
              <li key={item}>
                <span className={styles.legendNumber} aria-hidden="true">{index + 1}</span>
                {item}
              </li>
            ))}
          </ol>
          <p className={styles.dataNote}>{t.projects.harpia.dataNote}</p>
        </div>
        <ProjectFacts id="harpia" columns />
        <ProjectDecisions id="harpia" />
      </div>
    </article>
  );
}
