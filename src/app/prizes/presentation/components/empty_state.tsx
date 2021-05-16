import React from 'react';

import { Center, Text } from '../../../../libs/ui';

export const EmptyState: React.FC<{}> = () => (
  <>
    <Center>
      <Text variant="h5">No Prizes found between 2015 and 2017</Text>
    </Center>
    <Center my={2}>
      <Text>Something must have gone wrong!</Text>
    </Center>
  </>
);
