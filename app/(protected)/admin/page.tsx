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
      <Title className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Zahtjevi za servis</Title>
      {/* <Text>
        A list of users retrieved from a MySQL database (PlanetScale).
      </Text> */}
      <Card className="mt-6">
        <TableUserQueryProvider>
          <h4>Neobradjeni</h4>
          <UsersTable processed={false} />
          <br />
          <br />
          <hr />
          <h4>Obradjeni</h4>
          <UsersTable processed={true} />
        </TableUserQueryProvider>
      </Card>
    </main>
  );
}