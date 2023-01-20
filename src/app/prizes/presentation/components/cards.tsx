import React, { useContext, useState } from 'react';

import {
  Box,
  Text,
} from '../../../../libs/ui';
import { PrizeLaureate } from '../../domain';
import { LaureateContext } from '../containers';

export const LaureateCard: React.FC<{ laureate: PrizeLaureate }> = (
  { laureate }: { laureate: PrizeLaureate },
) => {
  const [isHovered, setIsHovered] = useState(false);
  const { setSelectedLaureateId } = useContext(LaureateContext);

  return (
    <Box
      cursor="pointer"
      mr={2}
      my={2}
      p={4}
      w={{ sm: 'xs', md: 'sm' }}
      borderColor="gray.500"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow={isHovered ? 'lg' : 'md'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setSelectedLaureateId && setSelectedLaureateId(laureate.id)}
    >
      <Text variant="h6" color={isHovered ? 'gold' : 'black'} mt={3} mb={6}>
        {laureate.fullName()}
      </Text>
      <Text>{laureate.motivation}</Text>
    </Box>
  );
};
