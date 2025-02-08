import { Avatar, Flex, Table, Text } from '@radix-ui/themes';

export default function Users() {
  // will make BE call
  // render map of table rows

  // update avatar fallback to initials of user
  // update avatar src to user img
  // test untracked files and gitignore
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>User</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Joined</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Button column</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
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
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
}
