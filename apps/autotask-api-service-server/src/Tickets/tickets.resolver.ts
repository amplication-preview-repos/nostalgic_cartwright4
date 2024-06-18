import * as graphql from "@nestjs/graphql";
import { CreateTicketInput } from "../tickets/CreateTicketInput";
import { UpdateTicketInput } from "../tickets/UpdateTicketInput";
import { TicketsService } from "./tickets.service";

export class TicketsResolver {
  constructor(protected readonly service: TicketsService) {}

  @graphql.Mutation(() => CreateTicketInput)
  async CreateNewTicket(
    @graphql.Args()
    args: CreateTicketInput
  ): Promise<CreateTicketInput> {
    return this.service.CreateNewTicket(args);
  }

  @graphql.Query(() => String)
  async CreateTicket(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateTicket(args);
  }

  @graphql.Query(() => [CreateTicketInput])
  async GetAllTickets(
    @graphql.Args()
    args: string
  ): Promise<CreateTicketInput[]> {
    return this.service.GetAllTickets(args);
  }

  @graphql.Query(() => String)
  async GetTickets(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetTickets(args);
  }

  @graphql.Query(() => String)
  async PatchTicket(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.PatchTicket(args);
  }

  @graphql.Mutation(() => UpdateTicketInput)
  async UpdateTicket(
    @graphql.Args()
    args: UpdateTicketInput
  ): Promise<UpdateTicketInput> {
    return this.service.UpdateTicket(args);
  }
}
