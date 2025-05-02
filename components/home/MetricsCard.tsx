import React from 'react';
import { Box } from '../ui/box';

import { HealthScore } from './HealthScore';
import { MicronutrientCard } from './MicronutrientCard';

export const MetricsCard = () => {
  return (
    <Box className="flex-row justify-between gap-4">
      <HealthScore />
      <MicronutrientCard />
    </Box>
  );
};

const styles = ({});
