import React from 'react';

import {
  Box,
  Divider,
  Center,
  Text,
  Flex,
} from '../../../../libs/ui';
import { Prize, Laureate } from '../../domain';
import { LaureateCard } from './cards';

const LaureatesList: React.FC<{ laureates: Laureate[] }> = (
  { laureates }: { laureates: Laureate[] },
) => (
  <Flex direction={{ sm: 'column', md: 'row' }}>
    {laureates.map((laureate, index) => (
      <LaureateCard key={index} laureate={laureate} />
    ))}
  </Flex>
);

export const PrizeList: React.FC<{ prizes: Prize[] }> = ({ prizes }: { prizes: Prize[] }) => (
  <>
    {
      prizes.map((prize, index) => (
        <Box my={2} key={index}>
          <Divider />
          <Text variant="h5" color="gold" my={1}>
            {`The Nobel Prize in ${prize.capitalizedCategory()} ${prize.year}`}
          </Text>
          <Divider />
          <LaureatesList laureates={prize.laureates} />
        </Box>
      ))
    }
  </>
);

export const PrizesPerYearList: React.FC<{ prizes: Prize[] }> = (
  { prizes }: { prizes: Prize[] },
) => {
  const byYear: { [year: string]: Prize[] } = {};

  prizes.forEach((prize) => {
    byYear[prize.year] = [...(byYear[prize.year] || []), prize];
  });

  return (
    <>
      {
        Object.entries(byYear).map(([year, prizesInYear]) => (
          <Box m={3} key={year}>
            <Center justify="center" align="center">
              <Text variant="h1">{`NOBEL PRIZES ${year}`}</Text>
            </Center>
            <PrizeList prizes={prizesInYear} />
          </Box>
        ))
      }
    </>
  );
};
