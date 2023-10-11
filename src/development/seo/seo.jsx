import React from 'react';
import { Helmet } from 'react-helmet';

function Seo({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content="Exchange rates" />
      <meta name="keywords" content="keyword1, keyword2, keyword3" />
    </Helmet>
  );
};

export default Seo;