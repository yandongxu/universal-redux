import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../shared/components/App';

export default {
  home: async (ctx) => {
    ctx.body = renderToString(<App />);
  }
};
