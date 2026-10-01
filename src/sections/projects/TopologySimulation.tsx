import { useId, useState, type CSSProperties } from 'react';
import { useI18n } from '../../i18n/useI18n';
import styles from './TopologySimulation.module.css';

type PaymentMethod = 'pix' | 'card';

export function TopologySimulation() {
  const { t } = useI18n();
  const sim = t.projects.pagoParcelado.sim;
  const [method, setMethod] = useState<PaymentMethod>('pix');
  const radioName = useId();
  const isPix = method === 'pix';
  const steps = isPix ? sim.pixSteps : sim.cardSteps;
  const journeyLabel = isPix ? sim.pixJourneyLabel : sim.cardJourneyLabel;

  return (
    <div className={styles.sim}>
      <h4 className={styles.title}>{sim.title}</h4>

      <fieldset className={styles.methods}>
        <legend className="visually-hidden">{sim.methodLabel}</legend>
        {(['pix', 'card'] as const).map((option) => (
          <label key={option} className={styles.method}>
            <input
              type="radio"
              name={radioName}
              value={option}
              checked={method === option}
              onChange={() => setMethod(option)}
            />
            <span>{option === 'pix' ? sim.pix : sim.card}</span>
          </label>
        ))}
      </fieldset>

      <ol key={method} className={styles.journey} aria-label={journeyLabel} data-method={method}>
        {steps.map((step, index) => (
          <li
            key={step}
            className={styles.step}
            style={{ '--step-delay': `${index * 850}ms` } as CSSProperties}
          >
            <span className={styles.marker} aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>

      <p className={styles.summary} aria-live="polite">
        {isPix ? sim.pixSummary : sim.cardSummary}
      </p>
      <p className={styles.caption}>{isPix ? sim.pixCaption : sim.cardCaption}</p>
    </div>
  );
}
