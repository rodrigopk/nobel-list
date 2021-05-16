import React, { useState } from 'react';

import {
  Box,
  Text,
} from '../../../../libs/ui';
import { Laureate } from '../../domain';

export const LaureateCard: React.FC<{ laureate: Laureate }> = (
  { laureate }: { laureate: Laureate },
) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      cursor="pointer"
      mr={2}
      my={2}
      p={2}
      w="sm"
      borderColor="gray.500"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Text variant="h6" color={isHovered ? 'gold' : 'black'} mt={3} mb={6}>
        {laureate.fullName()}
      </Text>
      <Text>{laureate.motivation}</Text>
    </Box>
  );
};
