"use client";

import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
} from "@tremor/react";

import { useQuery } from "react-query";

const fetchUsers = async () => {
  const res = await fetch("/api/users");
  return res.json();
};

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  problem: string;
}

export default function UsersTable() {
  const { data, status } = useQuery<User[]>("users", fetchUsers);

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
          {data &&
            data.map((user) => (
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
