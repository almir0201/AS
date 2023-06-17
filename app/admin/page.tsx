import { Card, Title, Text } from '@tremor/react';
import UsersTable from '@/components/table';
import TableUserQueryProvider from '@/components/TableUseQueryProvider';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) { 
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Text>
        A list of users retrieved from a MySQL database (PlanetScale).
      </Text>
      <Card className="mt-6">
        <TableUserQueryProvider>
          <UsersTable />
        </TableUserQueryProvider>
      </Card>
    </main>
  );
}