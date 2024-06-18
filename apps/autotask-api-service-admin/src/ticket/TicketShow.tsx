import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const TicketShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="priority" source="priority" />
        <TextField label="status" source="status" />
        <TextField label="ticketDescription" source="ticketDescription" />
        <TextField label="ticketPriority" source="ticketPriority" />
        <TextField label="ticketStatus" source="ticketStatus" />
        <TextField label="ticketTitle" source="ticketTitle" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
