import { Box, Flex, Tabs } from '@radix-ui/themes';
import Search from './Search';
import AccentButton from './AccentButton';
import Users from './Users';
import Roles from './Roles';

export default function UserRolesTabs() {
  return (
    <Tabs.Root defaultValue="users">
      <Tabs.List size={'1'}>
        <Tabs.Trigger value="users">Users</Tabs.Trigger>
        <Tabs.Trigger value="roles">Roles</Tabs.Trigger>
      </Tabs.List>

      <Flex gap={'var(--space-2)'} justify={'between'} py={'var(--space-5)'}>
        <Search />
        <AccentButton displayText="Add user" />
      </Flex>

      <Box>
        <Tabs.Content value="users">
          <Users />
        </Tabs.Content>

        <Tabs.Content value="roles">
          <Roles />
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  );
}
