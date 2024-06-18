import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TicketsService } from "./tickets.service";
import { UpdateTicketInput } from "../tickets/UpdateTicketInput";
import { CreateTicketInput } from "../tickets/CreateTicketInput";

@swagger.ApiTags("tickets")
@common.Controller("tickets")
export class TicketsController {
  constructor(protected readonly service: TicketsService) {}

  @common.Post("/tickets")
  @swagger.ApiOkResponse({
    type: CreateTicketInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateNewTicket(
    @common.Body()
    body: UpdateTicketInput
  ): Promise<CreateTicketInput> {
        return this.service.CreateNewTicket(body);
      }

  @common.Get("/:id/create-ticket")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateTicket(
    @common.Body()
    body: UpdateTicketInput
  ): Promise<string> {
        return this.service.CreateTicket(body);
      }

  @common.Get("/tickets")
  @swagger.ApiOkResponse({
    type: CreateTicketInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetAllTickets(
    @common.Body()
    body: UpdateTicketInput
  ): Promise<CreateTicketInput[]> {
        return this.service.GetAllTickets(body);
      }

  @common.Get("/:id/get-tickets")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetTickets(
    @common.Body()
    body: UpdateTicketInput
  ): Promise<string> {
        return this.service.GetTickets(body);
      }

  @common.Get("/:id/patch-ticket")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PatchTicket(
    @common.Body()
    body: UpdateTicketInput
  ): Promise<string> {
        return this.service.PatchTicket(body);
      }

  @common.Patch("/tickets/:id")
  @swagger.ApiOkResponse({
    type: UpdateTicketInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateTicket(
    @common.Body()
    body: UpdateTicketInput
  ): Promise<UpdateTicketInput> {
        return this.service.UpdateTicket(body);
      }
}
