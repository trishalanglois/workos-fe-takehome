import { Box, Flex } from '@radix-ui/themes';

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex justify={'center'}>
      <Box display={'block'} py={'var(--space-7)'} px={'2'} width={'850px'}>
        {children}
      </Box>
    </Flex>
  );
}
