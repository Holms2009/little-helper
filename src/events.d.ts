type EvtChangeMonthPayload = { direction: 'prev' | 'current' | 'next' };
type EvtChangeMonth = {
  "change-month": EvtChangeMonthPayload;
}

type EvtDateSelectPayload = { date: Date };
type EvtDateSelect = {
  "date-select": EvtDateSelectPayload;
}

type TUiViews = 'month' | 'day';
type EvtChangeViewPayload = { view: TUiViews };
type EvtChangeView = {
  "change-view": EvtChangeViewPayload;
}