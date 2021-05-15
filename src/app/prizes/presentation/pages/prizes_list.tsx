import React from 'react';

import { Box, Text } from '../../../../libs/ui';
import { useListPrizes } from '../../application/use_list_prizes';
import { Prize, Laureate } from '../../domain';
import { LoadingScaffold, ErrorState, EmptyState } from '../components';

const LaureatesPerMotivation: React.FC<{ laureates: Laureate[] }> = (
  { laureates }: { laureates: Laureate[] },
) => {
  const laureatesByMotivation: { [motivation: string]: Laureate[] } = {};

  laureates.forEach((laureate) => {
    laureatesByMotivation[laureate.motivation] = [
      ...(laureatesByMotivation[laureate.motivation] || []),
      laureate,
    ];
  });

  return (
    <>
      {Object.values(laureatesByMotivation).map((laureateGroup) => {
        const names = laureateGroup.map((laureate) => laureate.fullName()).join(', ');
        const { motivation } = laureateGroup[0];
        return (
          <Box ml={2}>
            <Text>{names}</Text>
            <Box ml={2}>
              <Text>{motivation}</Text>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

const PrizeList: React.FC<{ prizes: Prize[] }> = ({ prizes }: { prizes: Prize[] }) => (
  <>
    {
      prizes.map((prize) => (
        <Box>
          <Text>{prize.category}</Text>
          <LaureatesPerMotivation laureates={prize.laureates} />
        </Box>
      ))
    }
  </>
);

const PrizesPerYear: React.FC<{ prizes: Prize[] }> = ({ prizes }: { prizes: Prize[] }) => {
  const prizesPerYear: { [year: string]: Prize[] } = {};

  prizes.forEach((prize) => {
    prizesPerYear[prize.year] = [...(prizesPerYear[prize.year] || []), prize];
  });

  return (
    <>
      {
        Object.entries(prizesPerYear).map(([year, prizesInYear]) => (
          <>
            <Box bg="yellow">
              <Text>{year}</Text>
            </Box>
            <PrizeList prizes={prizesInYear} />
          </>
        ))
      }
    </>
  );
};

const PrizesListPage: React.FC<{}> = () => {
  const { data, isLoading, isError } = useListPrizes();

  if (isLoading) return <LoadingScaffold />;

  if (isError) return <ErrorState />;

  if (!data || data.length === 0) return <EmptyState />;

  return <PrizesPerYear prizes={data} />;
};

export default PrizesListPage;
