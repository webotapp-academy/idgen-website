import type { StateContent } from "./types";

export const states: StateContent[] = [
  {
    slug: "assam",
    name: "Assam",
    cities: [
      {
        slug: "guwahati",
        name: "Guwahati",
        isPrimary: true,
        localContent:
          "Guwahati is iDGen's primary dispatch hub for Northeast India — schools, colleges, and corporate offices across the city and the wider Kamrup region get the shortest turnaround times on bulk ID card and lanyard orders.",
      },
    ],
  },
  {
    slug: "meghalaya",
    name: "Meghalaya",
    cities: [
      {
        slug: "shillong",
        name: "Shillong",
        isPrimary: true,
        localContent:
          "iDGen prints and dispatches ID cards for schools, colleges, and offices in Shillong and the East Khasi Hills district, with orders routed through our Guwahati facility.",
      },
    ],
  },
  {
    slug: "nagaland",
    name: "Nagaland",
    cities: [
      {
        slug: "dimapur",
        name: "Dimapur",
        isPrimary: true,
        localContent:
          "Dimapur, as Nagaland's commercial and transport hub, is our fastest-turnaround city in the state for bulk school, college, and employee ID card orders.",
      },
      {
        slug: "kohima",
        name: "Kohima",
        isPrimary: false,
        localContent:
          "Kohima institutions — schools, government offices, and colleges — are served on the same print run as our Dimapur orders, keeping delivery timelines consistent across the state capital.",
      },
    ],
  },
  {
    slug: "manipur",
    name: "Manipur",
    cities: [
      {
        slug: "imphal",
        name: "Imphal",
        isPrimary: true,
        localContent:
          "iDGen serves schools, colleges, and corporate clients across Imphal and the surrounding valley districts, with bulk orders dispatched directly from our production facility.",
      },
    ],
  },
  {
    slug: "mizoram",
    name: "Mizoram",
    cities: [
      {
        slug: "aizawl",
        name: "Aizawl",
        isPrimary: true,
        localContent:
          "Aizawl's schools, colleges, and offices order ID cards and lanyards through iDGen with bulk-batch printing and dispatch to the city and surrounding areas.",
      },
    ],
  },
  {
    slug: "tripura",
    name: "Tripura",
    cities: [
      {
        slug: "agartala",
        name: "Agartala",
        isPrimary: true,
        localContent:
          "Agartala institutions — schools, colleges, and government and corporate offices — are served with the same bulk printing and quality standards as our other Northeast hubs.",
      },
    ],
  },
  {
    slug: "arunachal-pradesh",
    name: "Arunachal Pradesh",
    cities: [
      {
        slug: "itanagar",
        name: "Itanagar",
        isPrimary: true,
        localContent:
          "Itanagar is our primary service point for Arunachal Pradesh, covering schools, colleges, and offices in and around the state capital.",
      },
      {
        slug: "tawang",
        name: "Tawang",
        isPrimary: false,
        localContent:
          "Tawang's schools and institutions are served on longer lead times given the region's remoteness — plan bulk ID card orders a little further ahead of the date you need them.",
      },
    ],
  },
];

export function getState(slug: string) {
  return states.find((s) => s.slug === slug);
}

export function getCity(stateSlug: string, citySlug: string) {
  const state = getState(stateSlug);
  return state?.cities.find((c) => c.slug === citySlug);
}

export function allCities() {
  return states.flatMap((s) => s.cities.map((c) => ({ state: s, city: c })));
}
