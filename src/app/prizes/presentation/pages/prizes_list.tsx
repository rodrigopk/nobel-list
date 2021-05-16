import React from 'react';

import {
  LoadingSkeleton,
  ErrorState,
  EmptyState,
  ImageHeader,
  PrizesPerYearList,
} from '../components';
import { useListPrizes } from '../../application/use_list_prizes';

const PageContent: React.FC<{}> = () => {
  const {
    data, isLoading, isError, error,
  } = useListPrizes();

  if (isLoading) return <LoadingSkeleton />;

  if (isError) return <ErrorState error={error as Error} />;

  if (!data || data.length === 0) return <EmptyState />;

  return <PrizesPerYearList prizes={data} />;
};

const PrizesListPage: React.FC<{}> = () => (
  <>
    <ImageHeader />
    <PageContent />
  </>
);

export default PrizesListPage;
