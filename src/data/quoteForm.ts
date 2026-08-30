/**
 * Option sets and URL-context rules for the quotation request form.
 *
 * Nothing here may describe vehicle specifications, capacities, amenities or
 * availability. Service levels are customer *preferences*, not guarantees.
 */

export interface Option {
  value: string;
  label: string;
  description?: string;
}

export const serviceLevels: Option[] = [
  {
    value: 'standard',
    label: 'Standard',
    description: 'Professional transport organised around the journey.',
  },
  {
    value: 'executive',
    label: 'Executive',
    description: 'A more executive-focused vehicle or service preference where suitable.',
  },
  {
    value: 'luxury',
    label: 'Luxury',
    description: 'A premium preference, where an appropriate WMC option is available.',
  },
];

export const vehicleCategories: Option[] = [
  { value: 'recommend', label: 'Please recommend a suitable vehicle' },
  { value: 'car', label: 'Car' },
  { value: 'minibus', label: 'Minibus' },
  { value: 'coach', label: 'Coach' },
];

/**
 * Approved, publicly nameable WMC vehicles.
 *
 * Intentionally empty: the fleet photography carries internal visual IDs only,
 * and no public vehicle or model names have been verified. Never populate this
 * from filenames, photographs or alt text. When WMC supplies approved names,
 * add them here as { value, label } and the select renders them automatically.
 */
export const approvedVehicles: Option[] = [];

export const journeyPurposes: Option[] = [
  { value: 'airport', label: 'Airport' },
  { value: 'corporate', label: 'Corporate / Business' },
  { value: 'private-group', label: 'Private Group / Event' },
  { value: 'wedding', label: 'Wedding' },
  { value: 'school', label: 'School / Education' },
  { value: 'day-trip', label: 'Day Trip / Excursion' },
  { value: 'sporting', label: 'Sporting / Race-Day' },
  { value: 'contract', label: 'Contract / Recurring Transport' },
  { value: 'other', label: 'Other' },
];

export const referralSources: Option[] = [
  { value: 'google', label: 'Google' },
  { value: 'google-maps', label: 'Google Maps' },
  { value: 'recommendation', label: 'Recommendation' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'returning', label: 'Returning customer' },
  { value: 'other', label: 'Other' },
];

export const luggageOptions: Option[] = [
  { value: 'none', label: 'No luggage' },
  { value: 'yes', label: 'Yes' },
  { value: 'unsure', label: 'Not sure yet' },
];

export const contactMethods: Option[] = [
  { value: 'email', label: 'Email' },
  { value: 'whatsapp', label: 'WhatsApp' },
];

export const steps = [
  { id: 1, label: 'Journey' },
  { id: 2, label: 'Passengers & Contact' },
  { id: 3, label: 'Vehicle & Requirements' },
];

/** Values accepted from ?fleet= and ?service=. Anything else is ignored. */
export const allowedFleetParams = ['car', 'minibus', 'coach'] as const;
export const allowedServiceParams = journeyPurposes.map((p) => p.value);
