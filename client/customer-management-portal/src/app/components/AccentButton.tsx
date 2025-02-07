import { PlusIcon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';

// TODO: figure out why CSS import isn't working here for button accent colors

type AccentButton = {
  displayText: string;
};

export default function AccentButton({ displayText }: AccentButton) {
  return (
    <Button variant="solid" className="accentButton">
      <PlusIcon />
      {displayText}
    </Button>
  );
}
