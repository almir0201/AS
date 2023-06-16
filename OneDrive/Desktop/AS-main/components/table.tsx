import {
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text
  } from '@tremor/react';
  
  interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    service: string;
    problem: string;
  }
  
  export default function UsersTable({ users }: { users: User[] }) {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Username</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>
                <Text>{user.email}</Text>
              </TableCell>
              <TableCell>
                <Text>{user.phone}</Text>
              </TableCell>
              <TableCell>
                <Text>{user.service}</Text>
              </TableCell>
              <TableCell>
                <Text>{user.problem}</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }