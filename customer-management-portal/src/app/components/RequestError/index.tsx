import { InfoCircledIcon } from '@radix-ui/react-icons';
import { Callout } from '@radix-ui/themes';
import { RequestErrorProps } from '../types';

export default function RequestError({ requestError }: RequestErrorProps) {
  return requestError ? (
    <Callout.Root color="red" mb={'5'}>
      <Callout.Icon>
        <InfoCircledIcon />
      </Callout.Icon>
      <Callout.Text>
        Some of your information is missing. Please refresh the page.
      </Callout.Text>
    </Callout.Root>
  ) : null;
}
