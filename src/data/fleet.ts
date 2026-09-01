/**
 * Central WMC fleet record.
 *
 * Every field here is CLIENT-PROVIDED. Nothing may be inferred from
 * photography or filenames, and features are listed only where the client
 * supplied them — vehicles with no supplied features carry an empty list
 * rather than invented ones.
 */

import car01NoBg from '../assets/images/fleet/cars/wmc-car-01-nobg.webp';
import car02NoBg from '../assets/images/fleet/cars/wmc-car-02-nobg.webp';
import minibus04NoBg from '../assets/images/fleet/minibuses/wmc-minibus-04-nobg.webp';
import minibus05NoBg from '../assets/images/fleet/minibuses/wmc-minibus-05-nobg.webp';
import minibus06NoBg from '../assets/images/fleet/minibuses/wmc-minibus-06-nobg.webp';
import coach01NoBg from '../assets/images/fleet/coaches/wmc-coach-01-nobg.webp';
import coach02NoBg from '../assets/images/fleet/coaches/wmc-coach-02-nobg.webp';

export type ServiceLevel = 'Standard' | 'Executive' | 'Luxury';
export type VehicleCategory = 'car' | 'minibus' | 'coach';

export interface FleetVehicle {
  /** Stable machine value used in form payloads and URLs. */
  id: string;
  seats: number;
  /** Capacity grouping label, e.g. "16-Seater". */
  seatGroup: string;
  makeModel: string;
  colour: string;
  serviceLevel: ServiceLevel;
  /** Booking category this vehicle belongs to. */
  category: VehicleCategory;
  /** Client-supplied features. Empty when none were provided. */
  features: string[];
  /**
   * Photograph, used only where the supplied filename or folder identified
   * this exact vehicle. Undefined means imagery is still awaited — never a
   * stand-in borrowed from another vehicle.
   */
  image?: ImageMetadata;
}

/**
 * One slot in the 14-vehicle fleet. Three slots are unconfirmed: WMC has not
 * yet supplied those vehicle identities, so they are shown as awaiting
 * confirmation rather than filled with invented vehicles.
 */
export type FleetSlot =
  | { status: 'confirmed'; vehicle: FleetVehicle }
  | { status: 'awaiting-confirmation' };

/** Official fleet size stated by WMC. */
export const FLEET_TOTAL = 14;

export const fleetVehicles: FleetVehicle[] = [
  {
    id: 'audi-a7-black-executive',
    seats: 4,
    seatGroup: '4-Seater',
    makeModel: 'Audi A7',
    colour: 'Black',
    serviceLevel: 'Executive',
    category: 'car',
    features: [],
    image: car01NoBg,
  },
  {
    id: 'mercedes-s-class-black-executive',
    seats: 4,
    seatGroup: '4-Seater',
    makeModel: 'Mercedes-Benz S-Class',
    colour: 'Black',
    serviceLevel: 'Executive',
    category: 'car',
    features: [],
  },

  {
    id: 'mercedes-v-class-black-executive',
    seats: 8,
    seatGroup: '8-Seater',
    makeModel: 'Mercedes-Benz V-Class',
    colour: 'Black',
    serviceLevel: 'Executive',
    category: 'minibus',
    features: [],
    image: car02NoBg,
  },
  {
    id: 'ford-transit-custom-silver-executive',
    seats: 8,
    seatGroup: '8-Seater',
    makeModel: 'Ford Transit Custom',
    colour: 'Silver',
    serviceLevel: 'Executive',
    category: 'minibus',
    features: [],
    image: minibus06NoBg,
  },

  {
    id: 'sprinter-16-white-luxury',
    seats: 16,
    seatGroup: '16-Seater',
    makeModel: 'Mercedes-Benz Sprinter',
    colour: 'White',
    serviceLevel: 'Luxury',
    category: 'minibus',
    features: [
      'Air Conditioning',
      'Leather Seats',
      'Armrests',
      'Charging Ports',
      'Table',
      'TV',
      'Fridge',
    ],
  },
  {
    id: 'sprinter-16-white-executive',
    seats: 16,
    seatGroup: '16-Seater',
    makeModel: 'Mercedes-Benz Sprinter',
    colour: 'White',
    serviceLevel: 'Executive',
    category: 'minibus',
    features: ['Air Conditioning', 'Leather Seats', 'Armrests', 'Charging Ports'],
  },
  {
    id: 'sprinter-16-white-standard',
    seats: 16,
    seatGroup: '16-Seater',
    makeModel: 'Mercedes-Benz Sprinter',
    colour: 'White',
    serviceLevel: 'Standard',
    category: 'minibus',
    features: ['Standard Seating'],
    image: minibus04NoBg,
  },

  {
    id: 'sprinter-19-white-standard',
    seats: 19,
    seatGroup: '19-Seater',
    makeModel: 'Mercedes-Benz Sprinter',
    colour: 'White',
    serviceLevel: 'Standard',
    category: 'minibus',
    features: ['Standard Seating'],
  },

  {
    id: 'sprinter-20-silver-executive',
    seats: 20,
    seatGroup: '20-Seater',
    makeModel: 'Mercedes-Benz Sprinter',
    colour: 'Silver',
    serviceLevel: 'Executive',
    category: 'minibus',
    features: ['Air Conditioning', 'Leather Seats', 'Armrests', 'Charging Ports', 'TV'],
    image: minibus05NoBg,
  },

  {
    id: 'yutong-tc9-grey-executive',
    seats: 35,
    seatGroup: '35-Seater',
    makeModel: 'Yutong TC9',
    colour: 'Grey',
    serviceLevel: 'Executive',
    category: 'coach',
    features: [
      'Air Conditioning',
      'Half-Leather Seats',
      'Armrests',
      'Charging Ports',
      'High-Capacity Luggage Storage',
      'Fridge',
    ],
    image: coach01NoBg,
  },

  {
    id: 'yutong-gt12-white-executive',
    seats: 53,
    seatGroup: '53-Seater',
    makeModel: 'Yutong GT12',
    colour: 'White',
    serviceLevel: 'Executive',
    category: 'coach',
    features: [
      'Air Conditioning',
      'Half-Leather Seats',
      'Armrests',
      'Charging Ports',
      'Onboard Toilet & Sink',
      'PSVAR Wheelchair Accessibility',
      'High-Capacity Luggage Storage',
      'TV',
      'Fridge',
    ],
    image: coach02NoBg,
  },
];

/** Public display label, e.g. "Mercedes-Benz Sprinter | White — Luxury". */
export function vehicleLabel(vehicle: FleetVehicle): string {
  return `${vehicle.makeModel} | ${vehicle.colour} — ${vehicle.serviceLevel}`;
}

/** Vehicles grouped by capacity, in the client's listed order. */
export function fleetBySeatGroup(): { seatGroup: string; vehicles: FleetVehicle[] }[] {
  const groups: { seatGroup: string; vehicles: FleetVehicle[] }[] = [];

  for (const vehicle of fleetVehicles) {
    const existing = groups.find((group) => group.seatGroup === vehicle.seatGroup);
    if (existing) existing.vehicles.push(vehicle);
    else groups.push({ seatGroup: vehicle.seatGroup, vehicles: [vehicle] });
  }

  return groups;
}

/** All 14 slots: the 11 confirmed vehicles, then the 3 still to be supplied. */
export function fleetSlots(): FleetSlot[] {
  const confirmed: FleetSlot[] = fleetVehicles.map((vehicle) => ({
    status: 'confirmed',
    vehicle,
  }));
  const pending: FleetSlot[] = Array.from({ length: FLEET_TOTAL - fleetVehicles.length }, () => ({
    status: 'awaiting-confirmation',
  }));
  return [...confirmed, ...pending];
}

/** Vehicles in one booking category. */
export function fleetByCategory(category: VehicleCategory): FleetVehicle[] {
  return fleetVehicles.filter((vehicle) => vehicle.category === category);
}
