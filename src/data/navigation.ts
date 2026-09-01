export interface NavLink {
  label: string;
  href: string;
}

export const primaryNav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Fleet', href: '/fleet/' },
  { label: 'Services', href: '/services/' },
  { label: 'Airport Transfers', href: '/services/#airport-transfers' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export const primaryCta: NavLink = { label: 'Request a Quote', href: '/request-a-quote/' };

export const contact = {
  phoneDisplay: '0121 661 8560',
  phoneHref: 'tel:+441216618560',
  whatsappHref: 'https://wa.me/441216618560',
  address: '429 Meadway, Birmingham, B33 0DZ, United Kingdom',
  addressLines: ['429 Meadway', 'Birmingham', 'B33 0DZ', 'United Kingdom'],
  /** Client-supplied Google Maps destination. Do not alter this URL. */
  mapsHref: 'https://maps.app.goo.gl/aLFbEQ5DdB2ef1Wi7?g_st=ic',
  companyName: 'West Midlands Coaches Ltd',
  registeredName: 'WEST MIDLANDS COACHES LIMITED',
  companyNumber: '14835736',
};
