import React from 'react';

import {
  Box,
  Divider,
  Center,
  Text,
  Flex,
} from '../../../../libs/ui';
import { Prize, PrizeLaureate } from '../../domain';
import { LaureateCard } from './cards';

const LaureatesList: React.FC<{ laureates: PrizeLaureate[] }> = ({
  laureates,
}: {
  laureates: PrizeLaureate[];
}) => (
  <Flex direction={{ sm: 'column', md: 'row' }}>
    {laureates.map((laureate, index) => (
      <LaureateCard key={index} laureate={laureate} />
    ))}
  </Flex>
);

export const PrizeList: React.FC<{ prizes: Prize[] }> = ({
  prizes,
}: {
  prizes: Prize[];
}) => (
  <>
    {prizes.map((prize, index) => (
      <Box my={8} key={index}>
        <Text fontSize={{ sm: '1.25rem', md: '1.5rem' }} color="gold" my={3}>
          {`The Nobel Prize in ${prize.capitalizedCategory()} ${prize.year}`}
        </Text>
        <Divider mb={2} />
        <LaureatesList laureates={prize.laureates} />
      </Box>
    ))}
  </>
);

export const PrizesPerYearList: React.FC<{ prizes: Prize[] }> = ({
  prizes,
}: {
  prizes: Prize[];
}) => {
  const byYear: { [year: string]: Prize[] } = {};

  prizes.forEach((prize) => {
    byYear[prize.year] = [...(byYear[prize.year] || []), prize];
  });

  return (
    <Box px={{ md: 4 }}>
      {Object.entries(byYear).reverse().map(([year, prizesInYear]) => (
        <Box m={3} key={year}>
          <Center justifyContent="center" alignItems="center">
            <Text
              fontSize={{ sm: '2rem', md: '4rem' }}
            >
              {`NOBEL PRIZES ${year}`}

            </Text>
          </Center>
          <PrizeList prizes={prizesInYear} />
        </Box>
      ))}
    </Box>
  );
};
