import { Injectable } from "@nestjs/common";
import { CreateTicketInput } from "../tickets/CreateTicketInput";
import { UpdateTicketInput } from "../tickets/UpdateTicketInput";

@Injectable()
export class TicketsService {
  constructor() {}
  async CreateNewTicket(args: CreateTicketInput): Promise<CreateTicketInput> {
    throw new Error("Not implemented");
  }
  async CreateTicket(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetAllTickets(args: string): Promise<CreateTicketInput[]> {
    throw new Error("Not implemented");
  }
  async GetTickets(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async PatchTicket(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UpdateTicket(args: UpdateTicketInput): Promise<UpdateTicketInput> {
    throw new Error("Not implemented");
  }
}
