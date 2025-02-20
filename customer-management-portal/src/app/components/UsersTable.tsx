import {
  Avatar,
  Button,
  Dialog,
  Flex,
  IconButton,
  Popover,
  Spinner,
  Table,
  Text,
} from '@radix-ui/themes';
import { UserTableProps, User } from '../types';
import { formatDate, nameGenerator } from '../utils';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';

export default function UsersTable({ users }: UserTableProps) {
  const columnHeaders: string[] = ['User', 'Role', 'Joined', ''];

  if (users?.length === 0) {
    return (
      <Flex justify={'center'}>
        <Spinner size={'3'} />
      </Flex>
    );
  }

  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          {columnHeaders.map((column: string) => (
            <Table.ColumnHeaderCell key={column}>
              {column}
            </Table.ColumnHeaderCell>
          ))}{' '}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {users?.map((user: User, index: number) => (
          <Table.Row key={index}>
            <Table.RowHeaderCell>
              <Flex gap={'2'}>
                <Avatar
                  size="1"
                  radius="full"
                  src={user.photo || undefined}
                  fallback={user.photo}
                />
                <Text>{nameGenerator(user.first, user.last)}</Text>
              </Flex>
            </Table.RowHeaderCell>
            <Table.Cell>{user.roleName}</Table.Cell>
            <Table.Cell>{formatDate(user.createdAt)}</Table.Cell>
            <Table.Cell>
              <Popover.Root>
                <Popover.Trigger>
                  <IconButton radius="full" className="iconButton">
                    <DotsHorizontalIcon />
                  </IconButton>
                </Popover.Trigger>
                <Popover.Content width="143px">
                  <Popover.Close>
                    <Dialog.Root>
                      <Dialog.Trigger>
                        <Flex gap="2" direction="column">
                          <Text size="2">Add user</Text>
                          <Text size="2">Delete user</Text>
                        </Flex>
                      </Dialog.Trigger>
                      <Dialog.Content maxWidth="450px">
                        <Dialog.Title>Feature coming soon!</Dialog.Title>
                        <Dialog.Description size="2" mb="4">
                          Check back in for functionality to add or delete a
                          user .
                        </Dialog.Description>
                        <Dialog.Close>
                          <Button>Close</Button>
                        </Dialog.Close>
                      </Dialog.Content>
                    </Dialog.Root>
                  </Popover.Close>
                </Popover.Content>
              </Popover.Root>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
