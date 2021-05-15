import React from 'react';

import { Box, Heading, Text } from '../../../../libs/ui';
import { useListPrizes } from '../../application/use_list_prizes';

const PrizesList: React.FC<{}> = () => {
  const { data, isLoading, isError } = useListPrizes();

  if (isLoading) {
    return (
      <Box>
        <Heading as="h1">Loading...</Heading>
      </Box>
    );
  }

  if (isError) {
    return (
      <Box>
        <Heading as="h1">Error!</Heading>
      </Box>
    );
  }

  return (
    <>
      {
        data?.map((prize) => (
          <Box>
            <Text>{prize.year}</Text>
            <Text>{prize.category}</Text>
          </Box>
        ))
      }
    </>
  );
};

export default PrizesList;
