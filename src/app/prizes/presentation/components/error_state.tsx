import React from 'react';

import { Center, Text } from '../../../../libs/ui';

export const ErrorState: React.FC<{ error: Error }> = ({ error }: { error: Error }) => (
  <>
    <Center>
      <Text variant="h5">Something went wrong</Text>
    </Center>
    <Center my={2}>
      <Text>Please try again later.</Text>
    </Center>
    <Center>
      <Text variant="caption" color="gray.600">{`Error: ${error.message}`}</Text>
    </Center>
  </>
);
