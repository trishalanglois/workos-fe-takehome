import { Avatar, Flex, Table, Text } from '@radix-ui/themes';

type User = {
  createdAt: string,
  first: string,
  id: string,
  last: string,
  photo: string,
  roleId: string,
  updatedAt: string
}

type DataTableProps = {
  dataType: string;
  tableData: User[]
};

export default function DataTable({ dataType, tableData }: DataTableProps
) {

  console.log('TL BE data --> ', tableData)
  // update avatar fallback to initials of user
  // update avatar src to user img

  // create objects with user column headers and role column headers to use dynamically. can use bracket notation to target the values

  const columnHeaders: Record<string, string[]> = {
    users: ['User', 'Role', 'Joined', ''],
    roles: ['Placeholder1', 'Placeholder2', 'Placeholder3', '']
  };

  const nameGenerator = (firstName: string, lastName: string) => {
    return (`${firstName} ${lastName}`)
  }

  const nameInitialGenerator = (firstName: string, lastName: string) => {
    return firstName.charAt(0), lastName.charAt(0)
  }

  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          {/* put conditional here to wait for data */}
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
            <Flex gap={"2"}>
              <Avatar
                size="1"
                radius="full"
                src={user.photo || undefined}
                fallback={user.photo || nameInitialGenerator(user.first, user.last)}
              />
              <Text>{nameGenerator(user.first, user.last)}</Text>
            </Flex>
          </Table.RowHeaderCell>
          <Table.Cell>{user.roleId}</Table.Cell>
          <Table.Cell>{user.createdAt}</Table.Cell>
          <Table.Cell>Insert Button</Table.Cell>
        </Table.Row>
      ))}

        {/* <Table.Row>
          <Table.RowHeaderCell>
            <Flex gap={'2'}>
              <Avatar
                size="1"
                radius="full"
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                fallback="A"
              />
              <Text>Danilo Sousa</Text>
            </Flex>
          </Table.RowHeaderCell>
          <Table.Cell>Engineering</Table.Cell>
          <Table.Cell>November 9, 2015</Table.Cell>
          <Table.Cell>Insert Button</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeaderCell>
            <Flex gap={'2'}>
              <Avatar size="1" radius="full" fallback="ZA" />
              <Text>Zadi Acumba</Text>
            </Flex>
          </Table.RowHeaderCell>{' '}
          <Table.Cell>Design</Table.Cell>
          <Table.Cell>April 1, 2022</Table.Cell>
          <Table.Cell>Insert Button</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeaderCell>
            <Flex gap={'2'}>
              <Avatar size="1" radius="full" fallback="AP" />
              <Text>Andrew Pink</Text>
            </Flex>
          </Table.RowHeaderCell>{' '}
          <Table.Cell>Sales</Table.Cell>
          <Table.Cell>July 4, 2012</Table.Cell>
          <Table.Cell>Insert Button</Table.Cell>
        </Table.Row> */}
      </Table.Body>
    </Table.Root>
  );
}
