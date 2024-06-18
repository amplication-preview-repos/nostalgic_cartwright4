import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TicketWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  priority?: "Option1";
  status?: "Option1";
  ticketDescription?: StringNullableFilter;
  ticketPriority?: "Option1";
  ticketStatus?: "Option1";
  ticketTitle?: StringNullableFilter;
  title?: StringNullableFilter;
};
