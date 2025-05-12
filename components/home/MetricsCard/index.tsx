import React from 'react';
import { Box } from '@/components/ui/box';

import { HealthScore } from './HealthScore';
import { MicronutrientCard } from './MicronutrientCard';

export const MetricsCard = () => {
  return (
    <Box className="flex-row gap-4">
      <HealthScore />
      <MicronutrientCard />
    </Box>
  );
};
