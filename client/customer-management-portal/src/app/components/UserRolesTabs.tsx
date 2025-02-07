import { Box, Flex, Tabs } from '@radix-ui/themes';
import Search from './Search';
import AccentButton from './AccentButton';
import Users from './Users';
import Roles from './Roles';

export default function UserRolesTabs() {
  // state in this component to hold whether users or roles is in focus
  // will change when user clicks on either
  return (
    <Tabs.Root defaultValue="users">
      <Tabs.List size={'2'}>
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
