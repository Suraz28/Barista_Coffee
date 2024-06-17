import React from 'react';
import { MetroSpinner as OriginalMetroSpinner } from 'react-spinners-kit';

function MetroSpinner({
  size = 40,
  color = "#686769",
  loading = true,
}) {
  return <OriginalMetroSpinner size={size} color={color} loading={loading} />;
}

export default MetroSpinner;
