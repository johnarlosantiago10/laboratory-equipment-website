import { useEffect, useState, useCallback } from 'react';

type RouteState =
  | { name: 'home' }
  | { name: 'products' }
  | { name: 'product'; id: string }
  | { name: 'services' }
  | { name: 'about' }
  | { name: 'contact' };

function parseHash(): RouteState {
  const raw = window.location.hash.replace(/^#\/?/, '');
  const [segment, param] = raw.split('/');

  if (segment === 'products' && param) {
    return { name: 'product', id: decodeURIComponent(param) };
  }
  if (segment === 'products') return { name: 'products' };
  if (segment === 'services') return { name: 'services' };
  if (segment === 'about') return { name: 'about' };
  if (segment === 'contact') return { name: 'contact' };
  return { name: 'home' };
}

export function routeToHash(route: RouteState): string {
  switch (route.name) {
    case 'home':
      return '#/';
    case 'products':
      return '#/products';
    case 'product':
      return `#/products/${encodeURIComponent(route.id)}`;
    case 'services':
      return '#/services';
    case 'about':
      return '#/about';
    case 'contact':
      return '#/contact';
  }
}

export function useRouter() {
  const [route, setRoute] = useState<RouteState>(parseHash());

  useEffect(() => {
    const onChange = () => setRoute(parseHash());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const navigate = useCallback((to: RouteState) => {
    window.location.hash = routeToHash(to);
  }, []);

  return { route, navigate };
}

export type { RouteState };
