import { useEffect } from 'react';

export function ScrollToTop({ trigger }: { trigger: unknown }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [trigger]);
  return null;
}
