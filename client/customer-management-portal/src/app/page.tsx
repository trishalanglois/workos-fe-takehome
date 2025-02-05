import '@radix-ui/themes/styles.css';

import {
  Box,
  Button,
  Container,
  Flex,
  Tabs,
  TextField,
  Theme,
} from '@radix-ui/themes';
import Users from './Users';
import Roles from './Roles';
import {
  BookmarkIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from '@radix-ui/react-icons';

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <Box display={'block'} py={'var(--space-7)'} px={'2'}>
    {children}
  </Box>
);

const Search = () => {
  return (
    <TextField.Root
      placeholder="Search by name…"
      variant="classic"
      style={{ width: '100%' }}
    >
      <TextField.Slot gap={'var(--space-2)'}>
        <MagnifyingGlassIcon height="16" width="16" color="#000713" />
      </TextField.Slot>
    </TextField.Root>
  );
};

export default function Home() {
  return (
    <Theme>
      <PageWrapper>
        <Container>
          <Flex
            direction={'column'}
            gap={'9'}
            style={{ border: '1px solid red' }}
          >
            <Tabs.Root defaultValue="users">
              <Tabs.List size={'1'}>
                <Tabs.Trigger value="users">Users</Tabs.Trigger>
                <Tabs.Trigger value="roles">Roles</Tabs.Trigger>
              </Tabs.List>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 'var(--space-2)',
                  margin: 'var(--space-5) 0',
                  border: '1px solid blue',
                }}
              >
                <Search />

                <Button className="button">
                  <PlusIcon />
                  Add user
                </Button>
              </div>

              <Box>
                <Tabs.Content value="users">
                  <Users />
                </Tabs.Content>

                <Tabs.Content value="roles">
                  <Roles />
                </Tabs.Content>
              </Box>
            </Tabs.Root>
          </Flex>
        </Container>
      </PageWrapper>
    </Theme>
  );
}

// TODO: extract Tab Root, Search, Button into their own components
// TODO: Figure out how to use the purple 9 accent color and add purple a3 for border
// TODO: Extract styling
