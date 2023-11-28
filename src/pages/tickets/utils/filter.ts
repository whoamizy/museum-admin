import format from "date-fns/format";
import { Exhibition } from "entities/exhibition";
import { Ticket } from "entities/ticket";

export const filterTickets = (
  tickets: Ticket[],
  selectedExhibition: Exhibition | null,
  selectedDate: string | null
) => {
  if (selectedExhibition && selectedDate) {
    return tickets.filter(
      (t) =>
        t.exhibition.name === selectedExhibition.name &&
        format(new Date(t.date), "dd.MM.yyyy") === selectedDate
    );
  } else if (selectedExhibition) {
    return tickets.filter((t) => t.exhibition.name === selectedExhibition.name);
  } else if (selectedDate) {
    return tickets.filter(
      (t) => format(new Date(t.date), "dd.MM.yyyy") === selectedDate
    );
  } else {
    return tickets;
  }
};
