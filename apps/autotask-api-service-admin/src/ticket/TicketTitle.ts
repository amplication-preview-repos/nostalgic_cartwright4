import { Ticket as TTicket } from "../api/ticket/Ticket";

export const TICKET_TITLE_FIELD = "ticketTitle";

export const TicketTitle = (record: TTicket): string => {
  return record.ticketTitle?.toString() || String(record.id);
};