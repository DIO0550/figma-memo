import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Card from '@site/src/components/Card';
import DocumentImage from '@site/src/components/DocumentImage';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Card>" tag to our Card component
  Card,
  // Map the "<DocumentImage>" tag to our DocumentImage component
  DocumentImage,
};
