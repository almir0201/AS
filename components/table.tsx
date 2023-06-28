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

import { useMutation, useQuery, useQueryClient } from "react-query";

const fetchUsers = async (processed: boolean) => {
  const res = await fetch(`/api/users?processed=${processed}`);
  return res.json();
};

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  problem: string;
  processed: boolean;
}

export default function UsersTable({ processed }: { processed: boolean; }) {
  const { data } = useQuery<User[]>(`users-processed-${processed}`, async () => await fetchUsers(processed));
  const queryClient = useQueryClient()
  const addMutation = useMutation({
    mutationFn: (value: {processed: boolean, id: number}) => fetch(`/api/users-processed`, {
      method:"POST",
      body:JSON.stringify({
        processed: value.processed,
        id: value.id
      })
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`users-processed-true`] })
      queryClient.invalidateQueries({ queryKey: [`users-processed-false`] })
    },
  })

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
                  {!processed && (
                    <TableHeaderCell className=" px-6 py-4">Prihvati/Odbij</TableHeaderCell>
                  )}
                  
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
                      {!processed && (
                      <TableCell className="whitespace-nowrap flex gap-3 justify-center px-6 py-4">
                        <button onClick={() => addMutation.mutate({processed: true, id: user.id})}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </button>
                        <button onClick={() => addMutation.mutate({processed: false, id: user.id})}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </button>
                      </TableCell>
                      )}
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
