import '@radix-ui/themes/styles.css';

import { Box, Container, Tabs, Theme } from '@radix-ui/themes';
import Users from './Users';
import Roles from './Roles';

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <Box display={'block'} py={'var(--space-7)'} px={'2'}>
    {children}
  </Box>
);

export default function Home() {
  return (
    <Theme>
      <PageWrapper>
        <Container size={'4'} style={{ border: '1px solid red' }}>
          <Tabs.Root defaultValue="users">
            <Tabs.List>
              <Tabs.Trigger value="users">Users</Tabs.Trigger>
              <Tabs.Trigger value="roles">Roles</Tabs.Trigger>
            </Tabs.List>
            <Box pt="3">
              <Tabs.Content value="users">
                <Users />
              </Tabs.Content>

              <Tabs.Content value="roles">
                <Roles />
              </Tabs.Content>
            </Box>
          </Tabs.Root>
        </Container>
      </PageWrapper>
    </Theme>
  );
}

// TODO: update PageWrapper p to use the CSS variable instead of the string
