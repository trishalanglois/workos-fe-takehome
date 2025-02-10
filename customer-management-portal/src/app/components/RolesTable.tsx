import {
  Button,
  Dialog,
  Flex,
  IconButton,
  Popover,
  Table,
  Text,
} from '@radix-ui/themes';
import { Role, RolesTableProps } from '../types';
import { formatDate } from '../utils';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';

export default function RolesTable({ roles }: RolesTableProps) {
  const columnHeaders: string[] = ['Name', 'Date Added', 'Description', ''];

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
        {roles?.map((role: Role, index: number) => (
          <Table.Row key={index}>
            <Table.RowHeaderCell>
              <Text>{role.name}</Text>
            </Table.RowHeaderCell>
            <Table.Cell>{formatDate(role.createdAt)}</Table.Cell>
            <Table.Cell>
              <Text>{role.description}</Text>
            </Table.Cell>
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
                          <Text size="2">Add role</Text>
                          <Text size="2">Delete role</Text>
                        </Flex>
                      </Dialog.Trigger>
                      <Dialog.Content maxWidth="450px">
                        <Dialog.Title>Feature coming soon!</Dialog.Title>
                        <Dialog.Description size="2" mb="4">
                          Check back in for functionality to add or delete a
                          role.
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
