/**
 * Central WMC fleet record.
 *
 * Every field here is CLIENT-PROVIDED. Nothing may be inferred from
 * photography or filenames, and features are listed only where the client
 * supplied them — vehicles with no supplied features carry an empty list
 * rather than invented ones.
 */

export type ServiceLevel = 'Standard' | 'Executive' | 'Luxury';

export interface FleetVehicle {
  /** Stable machine value used in form payloads and URLs. */
  id: string;
  seats: number;
  /** Capacity grouping label, e.g. "16-Seater". */
  seatGroup: string;
  makeModel: string;
  colour: string;
  serviceLevel: ServiceLevel;
  /** Client-supplied features. Empty when none were provided. */
  features: string[];
}

export const fleetVehicles: FleetVehicle[] = [
  {
    id: 'audi-a7-black-executive',
    seats: 4,
    seatGroup: '4-Seater',
    makeModel: 'Audi A7',
    colour: 'Black',
    serviceLevel: 'Executive',
    features: [],
  },
  {
    id: 'mercedes-s-class-black-executive',
    seats: 4,
    seatGroup: '4-Seater',
    makeModel: 'Mercedes-Benz S-Class',
    colour: 'Black',
    serviceLevel: 'Executive',
    features: [],
  },

  {
    id: 'mercedes-v-class-black-executive',
    seats: 8,
    seatGroup: '8-Seater',
    makeModel: 'Mercedes-Benz V-Class',
    colour: 'Black',
    serviceLevel: 'Executive',
    features: [],
  },
  {
    id: 'ford-transit-custom-silver-executive',
    seats: 8,
    seatGroup: '8-Seater',
    makeModel: 'Ford Transit Custom',
    colour: 'Silver',
    serviceLevel: 'Executive',
    features: [],
  },

  {
    id: 'sprinter-16-white-luxury',
    seats: 16,
    seatGroup: '16-Seater',
    makeModel: 'Mercedes-Benz Sprinter',
    colour: 'White',
    serviceLevel: 'Luxury',
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
    features: ['Air Conditioning', 'Leather Seats', 'Armrests', 'Charging Ports'],
  },
  {
    id: 'sprinter-16-white-standard',
    seats: 16,
    seatGroup: '16-Seater',
    makeModel: 'Mercedes-Benz Sprinter',
    colour: 'White',
    serviceLevel: 'Standard',
    features: ['Standard Seating'],
  },

  {
    id: 'sprinter-19-white-standard',
    seats: 19,
    seatGroup: '19-Seater',
    makeModel: 'Mercedes-Benz Sprinter',
    colour: 'White',
    serviceLevel: 'Standard',
    features: ['Standard Seating'],
  },

  {
    id: 'sprinter-20-silver-executive',
    seats: 20,
    seatGroup: '20-Seater',
    makeModel: 'Mercedes-Benz Sprinter',
    colour: 'Silver',
    serviceLevel: 'Executive',
    features: ['Air Conditioning', 'Leather Seats', 'Armrests', 'Charging Ports', 'TV'],
  },

  {
    id: 'yutong-tc9-grey-executive',
    seats: 35,
    seatGroup: '35-Seater',
    makeModel: 'Yutong TC9',
    colour: 'Grey',
    serviceLevel: 'Executive',
    features: [
      'Air Conditioning',
      'Half-Leather Seats',
      'Armrests',
      'Charging Ports',
      'High-Capacity Luggage Storage',
      'Fridge',
    ],
  },

  {
    id: 'yutong-gt12-white-executive',
    seats: 53,
    seatGroup: '53-Seater',
    makeModel: 'Yutong GT12',
    colour: 'White',
    serviceLevel: 'Executive',
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
