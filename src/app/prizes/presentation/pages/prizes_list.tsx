import React from 'react';

import {
  LoadingScaffold,
  ErrorState,
  EmptyState,
  ImageHeader,
  PrizesPerYearList,
} from '../components';
import { useListPrizes } from '../../application/use_list_prizes';

const PageContent: React.FC<{}> = () => {
  const { data, isLoading, isError } = useListPrizes();

  if (isLoading) return <LoadingScaffold />;

  if (isError) return <ErrorState />;

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
