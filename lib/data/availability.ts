export type AvailabilityDay = {
  date: string;
  label: string;
  status: "open" | "limited" | "request-only" | "unavailable";
  times: string[];
  note: string;
};

export const availabilityDays: AvailabilityDay[] = [
  {
    date: "2026-06-06",
    label: "Sat, Jun 6",
    status: "limited",
    times: ["11:00 AM", "2:30 PM", "5:00 PM"],
    note: "A few ceremony windows may be possible by request."
  },
  {
    date: "2026-06-12",
    label: "Fri, Jun 12",
    status: "open",
    times: ["10:30 AM", "1:00 PM", "4:30 PM"],
    note: "Good fit for elopements and smaller chapel ceremonies."
  },
  {
    date: "2026-06-13",
    label: "Sat, Jun 13",
    status: "request-only",
    times: ["By request"],
    note: "The chapel team can advise on timing around French Quarter activity."
  },
  {
    date: "2026-06-20",
    label: "Sat, Jun 20",
    status: "open",
    times: ["10:00 AM", "12:30 PM", "3:00 PM", "5:30 PM"],
    note: "Several mock windows are shown for presentation."
  },
  {
    date: "2026-06-27",
    label: "Sat, Jun 27",
    status: "limited",
    times: ["1:30 PM", "4:00 PM"],
    note: "Best for couples with flexible guest arrival plans."
  },
  {
    date: "2026-07-04",
    label: "Sat, Jul 4",
    status: "request-only",
    times: ["By request"],
    note: "Holiday timing should be reviewed by the chapel team."
  },
  {
    date: "2026-07-11",
    label: "Sat, Jul 11",
    status: "open",
    times: ["11:30 AM", "2:00 PM", "4:30 PM"],
    note: "A strong mock option for a classic chapel gathering."
  },
  {
    date: "2026-07-18",
    label: "Sat, Jul 18",
    status: "unavailable",
    times: [],
    note: "Shown as unavailable in this concept calendar."
  }
];
