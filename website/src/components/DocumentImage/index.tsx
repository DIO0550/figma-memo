import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

interface DocumentImageProps {
  src: string;
  alt: string;
  width?: number | string;
}

const DocumentImage = ({ src, alt, width = 600 }: DocumentImageProps) => {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <img
        src={useBaseUrl(src)}
        alt={alt}
        width={width}
        style={{
          border: '1px solid #e1e4e8',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      />
    </div>
  );
};

export default DocumentImage;
