export type CityEvent = {
  date: string;
  title: string;
  type: string;
  description: string;
  location?: string;
  planningTip: string;
};

export const cityEvents: CityEvent[] = [
  {
    date: "2026-06-05",
    title: "Royal Street Gallery Evening",
    type: "Arts & Culture",
    location: "Royal Street",
    description:
      "A polished mock gallery evening with antique shops, courtyard music, and a softer French Quarter pace for arriving guests.",
    planningTip: "Consider an earlier ceremony window for calmer portraits."
  },
  {
    date: "2026-06-13",
    title: "French Quarter Summer Music Blocks",
    type: "Live Music",
    location: "French Quarter",
    description:
      "A lively mock music weekend that gives guests an easy way to feel the city before or after the chapel ceremony.",
    planningTip: "Ask the chapel team for a quieter arrival and departure plan."
  },
  {
    date: "2026-06-21",
    title: "Garden District Brunch Weekend",
    type: "Dining",
    location: "Garden District",
    description:
      "A graceful mock brunch weekend for couples who want to suggest a slow Sunday meal for family and close friends.",
    planningTip: "Pair a late-morning ceremony request with a relaxed afternoon meal."
  },
  {
    date: "2026-06-28",
    title: "Courtyard Jazz Supper",
    type: "Dining & Music",
    location: "French Quarter",
    description:
      "A warm mock supper-club style evening with candlelit courtyards and intimate New Orleans jazz nearby.",
    planningTip: "Good for guests staying close to Burgundy Street."
  },
  {
    date: "2026-07-04",
    title: "Riverfront Holiday Evening",
    type: "City Weekend",
    location: "Mississippi Riverfront",
    description:
      "A holiday mock listing with riverfront energy, heavier foot traffic, and extra planning considerations for guest movement.",
    planningTip: "Build extra travel time into the ceremony request."
  },
  {
    date: "2026-07-11",
    title: "Chartres Street Antique Market",
    type: "Shopping & Strolling",
    location: "Chartres Street",
    description:
      "A softer mock neighborhood weekend with antiques, old architecture, and easy pre-ceremony wandering.",
    planningTip: "Plan portraits before the warmest part of the day."
  }
];

export function eventsForDate(date: string) {
  return cityEvents.filter((event) => event.date === date);
}

export function eventsNearDate(date: string, windowDays = 3) {
  const selected = new Date(`${date}T00:00:00Z`);

  if (Number.isNaN(selected.getTime())) {
    return [];
  }

  const dayInMs = 24 * 60 * 60 * 1000;

  return cityEvents
    .map((event) => {
      const eventDate = new Date(`${event.date}T00:00:00Z`);
      const distance = Math.abs(eventDate.getTime() - selected.getTime()) / dayInMs;

      return { event, distance };
    })
    .filter(({ distance }) => distance <= windowDays)
    .sort((a, b) => a.distance - b.distance || a.event.date.localeCompare(b.event.date))
    .map(({ event }) => event);
}
