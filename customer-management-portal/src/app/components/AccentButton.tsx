import React from 'react';
import { PlusIcon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';

type AccentButton = {
  displayText: string;
};

export default function AccentButton({ displayText }: AccentButton) {
  return (
    <Button variant="solid" className="accentButton">
      <PlusIcon data-testid="plus-icon" />
      {displayText}
    </Button>
  );
}
