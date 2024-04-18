type EvtChangeMonthPayload = { direction: 'prev' | 'current' | 'next' };

type EvtChangeMonth = {
  "change-month": EvtChangeMonthPayload;
}

type EvtDateSelectPayload = { date: Date };

type EvtDateSelect = {
  "date-select": EvtDateSelectPayload;
}