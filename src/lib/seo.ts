export const SITE_URL = 'https://westmidlandscoaches.co.uk/';

export interface SeoProps {
  /** Full page title, already suffixed with the brand name where appropriate. */
  title: string;
  description: string;
  /** Path relative to the site root, e.g. "/about/". Must include the trailing slash. */
  path: string;
  /** Absolute URL to a social share image. Omit until an approved image exists. */
  ogImage?: string;
  noindex?: boolean;
}

export function canonicalUrl(path: string): string {
  const normalised = path.endsWith('/') ? path : `${path}/`;
  return new URL(normalised, SITE_URL).toString();
}
