import { Box } from '@radix-ui/themes';

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box display={'block'} py={'var(--space-7)'} px={'2'}>
      {children}
    </Box>
  );
}
