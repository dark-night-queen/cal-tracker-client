import React from 'react';
import { Activity, Info } from 'lucide-react-native';
import { Card } from '../ui/card';
import { Text } from '../ui/text';
import { Icon } from '../ui/icon';
import { Box } from '../ui/box';
import { Progress, ProgressGradientTrack } from '../ui/progress';

export const HealthScore = () => {
  return (
    <Card className={styles.cardContainer}>
      <Box className={styles.cardHeader}>
        <Icon as={Activity} className={styles.iconColor} />
        <Text>Health Score</Text>
        <Icon as={Info} />
      </Box>

      <Box>
        <Progress value={70}>
          <ProgressGradientTrack />
        </Progress>

        <Box className="mt-2 flex-row justify-between">
          <Text className="text-xs text-background-400">Poor</Text>
          <Text className="text-xs text-background-400">Excellent</Text>
        </Box>
      </Box>
    </Card>
  );
};

const styles = {
  cardContainer: 'gap-4',
  cardHeader: 'flex-row items-center gap-3',
  iconColor: 'text-indigo-400',
};
