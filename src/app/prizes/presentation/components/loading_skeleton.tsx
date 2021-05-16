import React from 'react';

import {
  Box, Center, Divider, Flex, Skeleton, Text,
} from '../../../../libs/ui';
import { Laureate, laureateFixture } from '../../domain';
import { LaureateCard } from './cards';

export const LoadingSkeleton: React.FC<{}> = () => (
  <Box m={3}>
    <Center justify="center" align="center">
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
          <LaureateCard laureate={Laureate.create(laureateFixture)} />
        </Skeleton>
      </Flex>
    </Box>
  </Box>
);
