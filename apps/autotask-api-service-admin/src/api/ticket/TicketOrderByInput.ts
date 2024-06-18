import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  priority?: SortOrder;
  status?: SortOrder;
  ticketDescription?: SortOrder;
  ticketPriority?: SortOrder;
  ticketStatus?: SortOrder;
  ticketTitle?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
