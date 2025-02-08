import '@radix-ui/themes/styles.css';

import { Container, Flex, Theme } from '@radix-ui/themes';
import PageWrapper from './components/PageWrapper';
import UserRolesTabs from './components/UserRolesTabs';

export default function Home() {
  return (
    <Theme>
      <PageWrapper>
        <Container>
          <Flex direction={'column'} gap={'9'}>
            <UserRolesTabs />
          </Flex>
        </Container>
      </PageWrapper>
    </Theme>
  );
}

// TODO: Why isn't purple variable working in styles.scss?
