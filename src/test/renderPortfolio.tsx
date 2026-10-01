import { render } from '@testing-library/react';
import type { Locale } from '../data/types';
import { App } from '../App';
import { BuddyProvider } from '../buddy/BuddyProvider';
import { ImageViewerProvider } from '../components/ImageViewerProvider';
import { I18nProvider } from '../i18n/I18nProvider';
import { ThemeProvider } from '../theme/ThemeProvider';

export function renderPortfolio(locale: Locale = 'pt-BR') {
  document.documentElement.lang = locale;
  document.documentElement.dataset.theme = 'light';

  return render(
    <ThemeProvider>
      <I18nProvider>
        <ImageViewerProvider>
          <BuddyProvider>
            <App />
          </BuddyProvider>
        </ImageViewerProvider>
      </I18nProvider>
    </ThemeProvider>,
  );
}
