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
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <Table className="min-w-full text-center text-sm font-light">
              <TableHead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                <TableRow>
                  <TableHeaderCell className=" px-6 py-4">Ime</TableHeaderCell>
                  <TableHeaderCell className=" px-6 py-4">Email</TableHeaderCell>
                  <TableHeaderCell className=" px-6 py-4">Broj telefona</TableHeaderCell>
                  <TableHeaderCell className=" px-6 py-4">Usluga</TableHeaderCell>
                  <TableHeaderCell className=" px-6 py-4">Problem</TableHeaderCell>
                  <TableHeaderCell className=" px-6 py-4">Prihvati/Odbij</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data &&
                  data.map((user) => (
                    <TableRow key={user.id} className="border-b dark:border-neutral-500">
                      <TableCell className="whitespace-nowrap  px-6 py-4">
                        <Text>{user.name}</Text>
                      </TableCell>
                      <TableCell className="whitespace-nowrap  px-6 py-4">
                        <Text>{user.email}</Text>
                      </TableCell>
                      <TableCell className="whitespace-nowrap  px-6 py-4">
                        <Text>{user.phone}</Text>
                      </TableCell>
                      <TableCell className="whitespace-nowrap  px-6 py-4">
                        <Text>{user.service}</Text>
                      </TableCell>
                      <TableCell className="whitespace-nowrap  px-6 py-4">
                        <Text>{user.problem}</Text>
                      </TableCell>
                      <TableCell className="whitespace-nowrap  px-6 py-4">
                        
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
