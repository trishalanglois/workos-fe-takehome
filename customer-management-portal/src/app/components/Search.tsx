import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { TextField } from '@radix-ui/themes';

export default function Search() {
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
}
