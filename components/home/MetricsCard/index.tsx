import React from 'react';
import { Box } from '@/components/ui/box';

import { HealthScore } from './health-score';
import { Micronutrient } from './micronutrient';

export const MetricsCard = () => {
  return (
    <Box className="gap-4">
      <HealthScore />
      <Micronutrient />
    </Box>
  );
};
