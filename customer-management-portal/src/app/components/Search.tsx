import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { TextField } from '@radix-ui/themes';
import { useState } from 'react';
import { SearchProps } from '../types';

export default function Search({onSearch}: SearchProps) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(inputValue);
    }
  };

  return (
    <TextField.Root
      placeholder="Search by name…"
      variant="classic"
      style={{ width: '100%' }}
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
    >
      <TextField.Slot gap={'var(--space-2)'}>
        <MagnifyingGlassIcon height="16" width="16" color="#000713" />
      </TextField.Slot>
    </TextField.Root>
  );
}
