import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Card from '@site/src/components/Card';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Card>" tag to our Card component
  Card,
};
