export type Ticket = {
  createdAt: Date;
  description: string | null;
  id: string;
  priority?: "Option1" | null;
  status?: "Option1" | null;
  ticketDescription: string | null;
  ticketPriority?: "Option1" | null;
  ticketStatus?: "Option1" | null;
  ticketTitle: string | null;
  title: string | null;
  updatedAt: Date;
};
