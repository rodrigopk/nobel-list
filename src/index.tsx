import React from 'react';
import ReactDOM from 'react-dom';

import { ChakraProvider } from './libs/ui';
import { QueryProvider, ReactQueryDevtools } from './libs/query';
import { EnvironmentService } from './libs/config';
import reportWebVitals from './reportWebVitals';
import PrizesList from './app/prizes/presentation/pages/prizes_list';

ReactDOM.render(
  <React.StrictMode>
    <QueryProvider>
      <ChakraProvider>
        <PrizesList />
        {EnvironmentService.isReactQueryDevtoolsEnabled() && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </ChakraProvider>
    </QueryProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
