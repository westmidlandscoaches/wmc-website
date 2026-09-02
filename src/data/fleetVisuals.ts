/**
 * Lightweight visual-asset manifest for the real WMC fleet photography.
 * Intentionally contains no invented specification data (model, year,
 * capacity, luggage, amenities, accessibility). Those facts are not yet
 * verified and belong in a future W9B fleet data model once confirmed.
 */

import car01Exterior from '../assets/images/fleet/cars/wmc-car-01-exterior.webp';
import car02Exterior from '../assets/images/fleet/cars/wmc-car-02-exterior.webp';

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

import car01NoBg from '../assets/images/fleet/cars/wmc-car-01-nobg.webp';
import car02NoBg from '../assets/images/fleet/cars/wmc-car-02-nobg.webp';
import car03NoBg from '../assets/images/fleet/cars/wmc-car-03-nobg.webp';
import minibus01NoBg from '../assets/images/fleet/minibuses/wmc-minibus-01-nobg.webp';
import minibus02NoBg from '../assets/images/fleet/minibuses/wmc-minibus-02-nobg.webp';
import minibus03NoBg from '../assets/images/fleet/minibuses/wmc-minibus-03-nobg.webp';
import minibus04NoBg from '../assets/images/fleet/minibuses/wmc-minibus-04-nobg.webp';
import minibus05NoBg from '../assets/images/fleet/minibuses/wmc-minibus-05-nobg.webp';
import minibus06NoBg from '../assets/images/fleet/minibuses/wmc-minibus-06-nobg.webp';
import minibus07NoBg from '../assets/images/fleet/minibuses/wmc-minibus-07-nobg.webp';
import minibus08NoBg from '../assets/images/fleet/minibuses/wmc-minibus-08-nobg.webp';
import minibus09NoBg from '../assets/images/fleet/minibuses/wmc-minibus-09-nobg.webp';
import coach01NoBg from '../assets/images/fleet/coaches/wmc-coach-01-nobg.webp';
import coach02NoBg from '../assets/images/fleet/coaches/wmc-coach-02-nobg.webp';

export type FleetCategory = 'car' | 'minibus' | 'coach';
export type FleetView = 'exterior' | 'interior';

export interface FleetVisual {
  id: string;
  category: FleetCategory;
  view: FleetView;
  image: ImageMetadata;
  alt: string;
  /**
   * Internal grouping key: which supplied vehicle set the photograph belongs
   * to. Never rendered publicly and never a fleet or model designation — it
   * only keeps a vehicle's own photographs together in one gallery.
   */
  vehicleGroup: string;
  /** Position within its group's gallery. Lower sorts first. */
  galleryOrder: number;
  /** Suitable as a large hero/LCP image (quality, composition, negative space). */
  homepageHero?: boolean;
  /** Suitable as a featured/gallery-scale image. */
  homepageFeatured?: boolean;
  /** Strongest image of its group; used as the browsing card cover. */
  groupCover?: boolean;
  /** Supplied with the background removed: renders on a WMC surface, not in a scene. */
  cutout?: boolean;
}

export const fleetVisuals: FleetVisual[] = [
  {
    id: 'car-01-exterior',
    vehicleGroup: 'car-01',
    galleryOrder: 1,
    category: 'car',
    view: 'exterior',
    image: car01Exterior,
    alt: 'WMC chauffeur car photographed from the front three-quarter view',
    homepageFeatured: true,
  },
  {
    id: 'car-02-exterior',
    vehicleGroup: 'car-02',
    galleryOrder: 1,
    category: 'car',
    view: 'exterior',
    image: car02Exterior,
    alt: 'WMC chauffeur vehicle photographed from the front three-quarter view',
  },

  {
    id: 'minibus-01-exterior',
    vehicleGroup: 'minibus-01',
    galleryOrder: 1,
    category: 'minibus',
    view: 'exterior',
    image: minibus01Exterior,
    alt: 'WMC minibus photographed from the side, parked at a roadside',
    homepageFeatured: true,
  },
  {
    id: 'minibus-01-interior-01',
    vehicleGroup: 'minibus-01',
    galleryOrder: 2,
    category: 'minibus',
    view: 'interior',
    image: minibus01Interior,
    alt: 'Interior seating view from supplied WMC minibus photography',
  },
  {
    id: 'minibus-02-exterior',
    vehicleGroup: 'minibus-02',
    galleryOrder: 1,
    category: 'minibus',
    view: 'exterior',
    image: minibus02Exterior,
    alt: 'WMC minibus photographed from the front three-quarter view outside a residential property',
  },
  {
    id: 'minibus-02-interior-01',
    vehicleGroup: 'minibus-02',
    galleryOrder: 3,
    category: 'minibus',
    view: 'interior',
    image: minibus02Interior1,
    alt: 'Driver cab and dashboard view from supplied WMC minibus photography',
  },
  {
    id: 'minibus-02-interior-02',
    vehicleGroup: 'minibus-02',
    galleryOrder: 2,
    category: 'minibus',
    view: 'interior',
    image: minibus02Interior2,
    alt: 'Interior seating view toward the front of a supplied WMC minibus',
  },
  {
    id: 'minibus-03-exterior',
    vehicleGroup: 'minibus-03',
    galleryOrder: 1,
    category: 'minibus',
    view: 'exterior',
    image: minibus03Exterior,
    alt: 'WMC minibus photographed from the front three-quarter view',
  },
  {
    id: 'minibus-03-interior-01',
    vehicleGroup: 'minibus-03',
    galleryOrder: 2,
    category: 'minibus',
    view: 'interior',
    image: minibus03Interior,
    alt: 'Interior seating view with fold-out tables from supplied WMC minibus photography',
  },
  {
    id: 'minibus-04-exterior',
    vehicleGroup: 'minibus-04',
    galleryOrder: 1,
    category: 'minibus',
    view: 'exterior',
    image: minibus04Exterior,
    alt: 'WMC minibus photographed from the front three-quarter view indoors',
  },
  {
    id: 'minibus-05-exterior-01',
    vehicleGroup: 'minibus-05',
    galleryOrder: 1,
    category: 'minibus',
    view: 'exterior',
    image: minibus05Exterior1,
    alt: 'WMC minibus photographed from the front three-quarter view in a car park',
    homepageFeatured: true,
  },
  {
    id: 'minibus-05-exterior-02',
    vehicleGroup: 'minibus-05',
    galleryOrder: 2,
    category: 'minibus',
    view: 'exterior',
    image: minibus05Exterior2,
    alt: 'WMC minibus photographed from the front three-quarter view showing registration plate area',
  },
  {
    id: 'minibus-05-interior-01',
    vehicleGroup: 'minibus-05',
    galleryOrder: 3,
    category: 'minibus',
    view: 'interior',
    image: minibus05Interior,
    alt: 'Interior seating view down the aisle of a supplied WMC minibus',
  },
  {
    id: 'minibus-06-exterior',
    vehicleGroup: 'minibus-06',
    galleryOrder: 1,
    category: 'minibus',
    view: 'exterior',
    image: minibus06Exterior,
    alt: 'WMC minibus photographed from the front on a residential street',
  },

  {
    id: 'coach-01-exterior',
    vehicleGroup: 'coach-01',
    galleryOrder: 1,
    category: 'coach',
    view: 'exterior',
    image: coach01Exterior,
    alt: 'WMC coach in West Midland Coaches livery, photographed from the front three-quarter view',
    homepageHero: true,
    homepageFeatured: true,
  },
  {
    id: 'coach-01-interior-01',
    vehicleGroup: 'coach-01',
    galleryOrder: 2,
    category: 'coach',
    view: 'interior',
    image: coach01Interior,
    alt: 'Interior seating view down the aisle of a supplied WMC coach',
  },
  {
    id: 'coach-02-exterior-01',
    vehicleGroup: 'coach-02',
    galleryOrder: 1,
    category: 'coach',
    view: 'exterior',
    image: coach02Exterior1,
    alt: 'WMC coach photographed from the front three-quarter view',
    homepageFeatured: true,
  },
  {
    id: 'coach-02-exterior-02',
    vehicleGroup: 'coach-02',
    galleryOrder: 2,
    category: 'coach',
    view: 'exterior',
    image: coach02Exterior2,
    alt: 'WMC coach photographed from the front three-quarter view with a member of staff nearby',
  },

  {
    id: 'car-01-cutout',
    vehicleGroup: 'car-01',
    galleryOrder: 0,
    groupCover: true,
    cutout: true,
    category: 'car',
    view: 'exterior',
    image: car01NoBg,
    alt: 'WMC chauffeur car in West Midlands Coaches livery, front three-quarter studio view with the background removed',
  },
  {
    id: 'car-02-cutout',
    vehicleGroup: 'car-02',
    galleryOrder: 0,
    groupCover: true,
    cutout: true,
    category: 'car',
    view: 'exterior',
    image: car02NoBg,
    alt: 'WMC chauffeur vehicle, front three-quarter studio view with the background removed',
  },
  {
    id: 'car-03-cutout',
    vehicleGroup: 'car-03',
    galleryOrder: 0,
    groupCover: true,
    cutout: true,
    category: 'car',
    view: 'exterior',
    image: car03NoBg,
    alt: 'WMC Mercedes-Benz S-Class in West Midlands Coaches livery, front three-quarter studio view with the background removed',
  },
  {
    id: 'minibus-01-cutout',
    vehicleGroup: 'minibus-01',
    galleryOrder: 0,
    groupCover: true,
    cutout: true,
    category: 'minibus',
    view: 'exterior',
    image: minibus01NoBg,
    alt: 'WMC minibus, front three-quarter studio view with the background removed',
  },
  {
    id: 'minibus-02-cutout',
    vehicleGroup: 'minibus-02',
    galleryOrder: 0,
    groupCover: true,
    cutout: true,
    category: 'minibus',
    view: 'exterior',
    image: minibus02NoBg,
    alt: 'WMC minibus, front three-quarter studio view with the background removed',
  },
  {
    id: 'minibus-03-cutout',
    vehicleGroup: 'minibus-03',
    galleryOrder: 0,
    groupCover: true,
    cutout: true,
    category: 'minibus',
    view: 'exterior',
    image: minibus03NoBg,
    alt: 'WMC minibus in West Midlands Coaches livery, front three-quarter studio view with the background removed',
  },
  {
    id: 'minibus-04-cutout',
    vehicleGroup: 'minibus-04',
    galleryOrder: 0,
    groupCover: true,
    cutout: true,
    category: 'minibus',
    view: 'exterior',
    image: minibus04NoBg,
    alt: 'WMC minibus, front three-quarter studio view with the background removed',
  },
  {
    id: 'minibus-05-cutout',
    vehicleGroup: 'minibus-05',
    galleryOrder: 0,
    groupCover: true,
    cutout: true,
    category: 'minibus',
    view: 'exterior',
    image: minibus05NoBg,
    alt: 'WMC minibus, front three-quarter studio view with the background removed',
  },
  {
    id: 'minibus-06-cutout',
    vehicleGroup: 'minibus-06',
    galleryOrder: 0,
    groupCover: true,
    cutout: true,
    category: 'minibus',
    view: 'exterior',
    image: minibus06NoBg,
    alt: 'WMC minibus, front three-quarter studio view with the background removed',
  },
  {
    id: 'minibus-07-cutout',
    vehicleGroup: 'minibus-07',
    galleryOrder: 0,
    groupCover: true,
    cutout: true,
    category: 'minibus',
    view: 'exterior',
    image: minibus07NoBg,
    alt: 'WMC Mercedes-Benz Sprinter in West Midlands Coaches livery, front three-quarter studio view with the background removed',
  },
  {
    id: 'minibus-08-cutout',
    vehicleGroup: 'minibus-08',
    galleryOrder: 0,
    groupCover: true,
    cutout: true,
    category: 'minibus',
    view: 'exterior',
    image: minibus08NoBg,
    alt: 'WMC Mercedes-Benz Sprinter in West Midlands Coaches livery, front three-quarter studio view with the background removed',
  },
  {
    id: 'minibus-09-cutout',
    vehicleGroup: 'minibus-09',
    galleryOrder: 0,
    groupCover: true,
    cutout: true,
    category: 'minibus',
    view: 'exterior',
    image: minibus09NoBg,
    alt: 'WMC Mercedes-Benz Sprinter in West Midlands Coaches livery, front three-quarter studio view with the background removed',
  },
  {
    id: 'coach-01-cutout',
    vehicleGroup: 'coach-01',
    galleryOrder: 0,
    groupCover: true,
    cutout: true,
    category: 'coach',
    view: 'exterior',
    image: coach01NoBg,
    alt: 'WMC coach in West Midland Coaches livery, front three-quarter studio view with the background removed',
  },
  {
    id: 'coach-02-cutout',
    vehicleGroup: 'coach-02',
    galleryOrder: 0,
    groupCover: true,
    cutout: true,
    category: 'coach',
    view: 'exterior',
    image: coach02NoBg,
    alt: 'WMC coach, front three-quarter studio view with the background removed',
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

/** The background-removed cutout for a vehicle group, when one was supplied. */
export function getCutout(vehicleGroup: string): FleetVisual | undefined {
  return fleetVisuals.find((v) => v.vehicleGroup === vehicleGroup && v.cutout);
}

export interface FleetGroup {
  /** Internal key. Not shown to visitors. */
  id: string;
  category: FleetCategory;
  /** Neutral browsing label, e.g. "Vehicle 01". Not a fleet or model number. */
  label: string;
  cover: FleetVisual;
  exterior: FleetVisual[];
  interior: FleetVisual[];
  visuals: FleetVisual[];
}

/**
 * Groups a category's photography by the vehicle set it came from. Labels are
 * positional browsing identifiers only — nothing here asserts a model, a
 * specification or an official fleet number.
 */
export function getFleetGroups(category: FleetCategory): FleetGroup[] {
  const byGroup = new Map<string, FleetVisual[]>();

  for (const visual of fleetVisuals) {
    if (visual.category !== category) continue;
    const list = byGroup.get(visual.vehicleGroup) ?? [];
    list.push(visual);
    byGroup.set(visual.vehicleGroup, list);
  }

  return Array.from(byGroup.entries()).map(([id, all], index) => {
    const visuals = [...all].sort((a, b) => a.galleryOrder - b.galleryOrder);
    return {
      id,
      category,
      label: `Vehicle ${String(index + 1).padStart(2, '0')}`,
      cover: visuals.find((v) => v.groupCover) ?? visuals[0],
      exterior: visuals.filter((v) => v.view === 'exterior'),
      interior: visuals.filter((v) => v.view === 'interior'),
      visuals,
    };
  });
}
