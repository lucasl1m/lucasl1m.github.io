import { useReveal } from '../../hooks/useReveal';
import { useI18n } from '../../i18n/useI18n';
import { slideDetails } from '../../utils/slideDetails';
import styles from './PagoParceladoCase.module.css';
import { ProjectDecisions, ProjectFacts, ProjectHeader } from './ProjectParts';
import { TopologySimulation } from './TopologySimulation';

export function PagoParceladoCase() {
  const { t } = useI18n();
  const copy = t.projects.pagoParcelado;
  const reveal = useReveal<HTMLDivElement>();

  return (
    <article id="project-pagoParcelado" className={styles.pagoParcelado} data-tone="stage" aria-labelledby="project-pagoParcelado-title">
      <div ref={reveal} className="container reveal">
        <ProjectHeader id="pagoParcelado" number="01" />
        <div className={styles.lead}>
          <TopologySimulation />
          <ProjectFacts id="pagoParcelado" />
        </div>
        <ProjectDecisions id="pagoParcelado" />
        <details className={styles.more}>
          <summary onClick={slideDetails}>{copy.moreTitle}</summary>
          <ul>
            {copy.more.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </details>
      </div>
    </article>
  );
}
