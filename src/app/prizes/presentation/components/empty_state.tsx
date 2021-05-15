import React from 'react';

import { Box, Heading } from '../../../../libs/ui';

export const EmptyState: React.FC<{}> = () => (
  <Box>
    <Heading as="h1">No Prizes between 2015 and 2017</Heading>
  </Box>
);
