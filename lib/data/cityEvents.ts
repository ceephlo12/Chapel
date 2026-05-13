export type CityEvent = {
  date: string;
  name: string;
  neighborhood: string;
  summary: string;
  planningTip: string;
};

export const cityEvents: CityEvent[] = [
  {
    date: "2026-06-06",
    name: "French Quarter gallery weekend",
    neighborhood: "Royal Street",
    summary: "A mock cultural weekend with heavier afternoon foot traffic near galleries.",
    planningTip: "Consider an earlier ceremony window for calmer portraits."
  },
  {
    date: "2026-06-13",
    name: "Summer music blocks",
    neighborhood: "French Quarter",
    summary: "Concept event listing for a lively music-forward Saturday in the Quarter.",
    planningTip: "Ask the chapel team for a quieter arrival and departure plan."
  },
  {
    date: "2026-07-04",
    name: "Independence Day riverfront activity",
    neighborhood: "Riverfront",
    summary: "Holiday crowds may affect hotel, dining, and transportation timing.",
    planningTip: "Build extra travel time into the ceremony request."
  },
  {
    date: "2026-07-11",
    name: "Antique market weekend",
    neighborhood: "Chartres Street",
    summary: "A softer neighborhood event that pairs well with a morning chapel ceremony.",
    planningTip: "Plan portraits before the warmest part of the day."
  }
];

export function eventsForDate(date: string) {
  return cityEvents.filter((event) => event.date === date);
}
