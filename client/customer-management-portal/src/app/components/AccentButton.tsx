import { PlusIcon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';
import '../styles.scss';

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
