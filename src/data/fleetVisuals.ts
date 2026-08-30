/**
 * Lightweight visual-asset manifest for the real WMC fleet photography.
 * Intentionally contains no invented specification data (model, year,
 * capacity, luggage, amenities, accessibility). Those facts are not yet
 * verified and belong in a future W9B fleet data model once confirmed.
 */

import carAudiA7 from '../assets/images/fleet/cars/wmc-car-01-exterior.webp';
import carVClass from '../assets/images/fleet/cars/wmc-car-02-exterior.webp';

import minibus01Exterior from '../assets/images/fleet/minibuses/wmc-minibus-01-exterior.webp';
import minibus01Interior from '../assets/images/fleet/interiors/wmc-minibus-01-interior-01.webp';
import minibus02Exterior from '../assets/images/fleet/minibuses/wmc-minibus-02-exterior.webp';
import minibus02Interior1 from '../assets/images/fleet/interiors/wmc-minibus-02-interior-01.webp';
import minibus02Interior2 from '../assets/images/fleet/interiors/wmc-minibus-02-interior-02.webp';
import minibus03Exterior from '../assets/images/fleet/minibuses/wmc-minibus-03-exterior.webp';
import minibus03Interior from '../assets/images/fleet/interiors/wmc-minibus-03-interior-01.webp';
import minibus04Exterior from '../assets/images/fleet/minibuses/wmc-minibus-04-exterior.webp';
import minibus05Exterior1 from '../assets/images/fleet/minibuses/wmc-minibus-05-exterior-01.webp';
import minibus05Exterior2 from '../assets/images/fleet/minibuses/wmc-minibus-05-exterior-02.webp';
import minibus05Interior from '../assets/images/fleet/interiors/wmc-minibus-05-interior-01.webp';
import minibus06Exterior from '../assets/images/fleet/minibuses/wmc-minibus-06-exterior.webp';

import coach01Exterior from '../assets/images/fleet/coaches/wmc-coach-01-exterior.webp';
import coach01Interior from '../assets/images/fleet/interiors/wmc-coach-01-interior-01.webp';
import coach02Exterior1 from '../assets/images/fleet/coaches/wmc-coach-02-exterior-01.webp';
import coach02Exterior2 from '../assets/images/fleet/coaches/wmc-coach-02-exterior-02.webp';

export type FleetCategory = 'car' | 'minibus' | 'coach';
export type FleetView = 'exterior' | 'interior';

export interface FleetVisual {
  id: string;
  category: FleetCategory;
  view: FleetView;
  image: ImageMetadata;
  alt: string;
  /** Suitable as a large hero/LCP image (quality, composition, negative space). */
  homepageHero?: boolean;
  /** Suitable as a featured/gallery-scale image. */
  homepageFeatured?: boolean;
}

export const fleetVisuals: FleetVisual[] = [
  {
    id: 'car-01-exterior',
    category: 'car',
    view: 'exterior',
    image: carAudiA7,
    alt: 'WMC chauffeur car photographed from the front three-quarter view',
    homepageFeatured: true,
  },
  {
    id: 'car-02-exterior',
    category: 'car',
    view: 'exterior',
    image: carVClass,
    alt: 'WMC chauffeur MPV photographed from the front three-quarter view',
  },

  {
    id: 'minibus-01-exterior',
    category: 'minibus',
    view: 'exterior',
    image: minibus01Exterior,
    alt: 'WMC minibus photographed from the side, parked at a roadside',
    homepageFeatured: true,
  },
  {
    id: 'minibus-01-interior-01',
    category: 'minibus',
    view: 'interior',
    image: minibus01Interior,
    alt: 'Interior seating view from supplied WMC minibus photography',
  },
  {
    id: 'minibus-02-exterior',
    category: 'minibus',
    view: 'exterior',
    image: minibus02Exterior,
    alt: 'WMC minibus photographed from the front three-quarter view outside a residential property',
  },
  {
    id: 'minibus-02-interior-01',
    category: 'minibus',
    view: 'interior',
    image: minibus02Interior1,
    alt: 'Driver cab and dashboard view from supplied WMC minibus photography',
  },
  {
    id: 'minibus-02-interior-02',
    category: 'minibus',
    view: 'interior',
    image: minibus02Interior2,
    alt: 'Interior seating view toward the front of a supplied WMC minibus',
  },
  {
    id: 'minibus-03-exterior',
    category: 'minibus',
    view: 'exterior',
    image: minibus03Exterior,
    alt: 'WMC minibus photographed from the front three-quarter view',
  },
  {
    id: 'minibus-03-interior-01',
    category: 'minibus',
    view: 'interior',
    image: minibus03Interior,
    alt: 'Interior seating view with fold-out tables from supplied WMC minibus photography',
  },
  {
    id: 'minibus-04-exterior',
    category: 'minibus',
    view: 'exterior',
    image: minibus04Exterior,
    alt: 'WMC minibus photographed from the front three-quarter view indoors',
  },
  {
    id: 'minibus-05-exterior-01',
    category: 'minibus',
    view: 'exterior',
    image: minibus05Exterior1,
    alt: 'WMC minibus photographed from the front three-quarter view in a car park',
    homepageFeatured: true,
  },
  {
    id: 'minibus-05-exterior-02',
    category: 'minibus',
    view: 'exterior',
    image: minibus05Exterior2,
    alt: 'WMC minibus photographed from the front three-quarter view showing registration plate area',
  },
  {
    id: 'minibus-05-interior-01',
    category: 'minibus',
    view: 'interior',
    image: minibus05Interior,
    alt: 'Interior seating view down the aisle of a supplied WMC minibus',
  },
  {
    id: 'minibus-06-exterior',
    category: 'minibus',
    view: 'exterior',
    image: minibus06Exterior,
    alt: 'WMC minibus photographed from the front on a residential street',
  },

  {
    id: 'coach-01-exterior',
    category: 'coach',
    view: 'exterior',
    image: coach01Exterior,
    alt: 'WMC coach in West Midland Coaches livery, photographed from the front three-quarter view',
    homepageHero: true,
    homepageFeatured: true,
  },
  {
    id: 'coach-01-interior-01',
    category: 'coach',
    view: 'interior',
    image: coach01Interior,
    alt: 'Interior seating view down the aisle of a supplied WMC coach',
  },
  {
    id: 'coach-02-exterior-01',
    category: 'coach',
    view: 'exterior',
    image: coach02Exterior1,
    alt: 'WMC coach photographed from the front three-quarter view',
    homepageFeatured: true,
  },
  {
    id: 'coach-02-exterior-02',
    category: 'coach',
    view: 'exterior',
    image: coach02Exterior2,
    alt: 'WMC coach photographed from the front three-quarter view with a member of staff nearby',
  },
];

export function getFleetVisuals(category: FleetCategory, view?: FleetView): FleetVisual[] {
  return fleetVisuals.filter(
    (v) => v.category === category && (view === undefined || v.view === view),
  );
}

export function getHomepageHero(): FleetVisual | undefined {
  return fleetVisuals.find((v) => v.homepageHero);
}
