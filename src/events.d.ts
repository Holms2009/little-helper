type EvtChangeMonthPayload = { direction: 'prev' | 'current' | 'next' };

type EvtChangeMonth = {
  "change-month": EvtChangeMonthPayload;
}

type EvtDateSelectPayload = { date: Date, type: 'prev' | 'current' | 'next' };

type EvtDateSelect = {
  "date-select": EvtDateSelectPayload;
}