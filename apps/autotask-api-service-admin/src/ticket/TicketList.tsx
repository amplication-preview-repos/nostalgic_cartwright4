import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TicketList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tickets"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
