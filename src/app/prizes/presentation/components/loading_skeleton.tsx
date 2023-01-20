import React from 'react';

import {
  Box, Center, Divider, Flex, Skeleton, Text,
} from '../../../../libs/ui';
import { PrizeLaureate, prizeLaureateFixture } from '../../domain';
import { LaureateCard } from './cards';

export const LoadingSkeleton: React.FC<{}> = () => (
  <Box m={3}>
    <Center justifyContent="center" alignItems="center">
      <Skeleton>
        <Text variant="h1">Header placeholder</Text>
      </Skeleton>
    </Center>
    <Box my={2}>
      <Divider />
      <Skeleton>
        <Text variant="h5" color="gold" my={1}>
          Subheader placeholder
        </Text>
      </Skeleton>
      <Divider />
      <Flex direction={{ sm: 'column', md: 'row' }}>
        <Skeleton mr={2}>
          <LaureateCard laureate={PrizeLaureate.create(prizeLaureateFixture)} />
        </Skeleton>
      </Flex>
    </Box>
  </Box>
);
