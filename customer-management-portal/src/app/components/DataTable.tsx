import { Avatar, Flex, Table, Text } from '@radix-ui/themes';
import { DataTableProps, User } from '../types';
import { formatDate, nameGenerator, nameInitialGenerator } from '../utils';
import { table } from 'console';

export default function DataTable({ dataType, tableData }: DataTableProps) {

  const columnHeaders: Record<string, string[]> = {
    users: ['User', 'Role', 'Joined', ''],
    roles: ['Placeholder1', 'Placeholder2', 'Placeholder3', ''],
  };

  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          {columnHeaders[dataType].map((column: string) => (
            <Table.ColumnHeaderCell key={column}>
              {column}
            </Table.ColumnHeaderCell>
          ))}{' '}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {tableData.map((user: User, index: number) => (
          <Table.Row key={index}>
            <Table.RowHeaderCell>
              <Flex gap={'2'}>
                <Avatar
                  size="1"
                  radius="full"
                  src={user.photo || undefined}
                  fallback={
                    user.photo || nameInitialGenerator(user.first, user.last)
                  }
                />
                <Text>{nameGenerator(user.first, user.last)}</Text>
              </Flex>
            </Table.RowHeaderCell>
            <Table.Cell>{user.roleName}</Table.Cell>
            <Table.Cell>{formatDate(user.createdAt)}</Table.Cell>
            <Table.Cell>Insert Button</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
