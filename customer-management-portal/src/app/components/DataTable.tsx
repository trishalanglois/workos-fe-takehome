import {
  Avatar,
  Flex,
  HoverCard,
  IconButton,
  Link,
  Select,
  Table,
  Text,
  Tooltip,
} from '@radix-ui/themes';
import { DataTableProps, User } from '../types';
import { formatDate, nameGenerator, nameInitialGenerator } from '../utils';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

export default function DataTable({ dataType, tableData }: DataTableProps) {
  const [moreButtonClicked, setMoreButtonClicked] = useState(false);
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
        {tableData?.map((user: User, index: number) => (
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
            <Table.Cell>
              <HoverCard.Root>
                <HoverCard.Trigger>
                  <IconButton radius="full" className="iconButton">
                    <DotsHorizontalIcon />
                  </IconButton>
                </HoverCard.Trigger>
                <HoverCard.Content size="2" width={"143px"}>
                  <Flex gap={'2'} direction={"column"}>
                    <Text as="div" size="2">
                      Add user
                    </Text>
                    <Text as="div" size="2">
                      Delete user
                    </Text>
                  </Flex>
                </HoverCard.Content>
              </HoverCard.Root>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
