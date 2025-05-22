import React from 'react';
import { Activity, Info } from 'lucide-react-native';
import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { Icon } from '@/components/ui/icon';
import { Box } from '@/components/ui/box';
import { Progress, ProgressGradientTrack } from '@/components/ui/progress';
import { useNutrientStore } from '@/store/nutrients-store';

export const HealthScore = () => {
  const { healthScore } = useNutrientStore();

  return (
    <Card className={styles.cardContainer}>
      <Box className={styles.cardHeader}>
        <Icon as={Activity} className={styles.iconColor} />
        <Text className="flex-1 text-sm">Health Score</Text>
        <Icon as={Info} size="sm" />
      </Box>

      <Box>
        <Progress value={healthScore}>
          <ProgressGradientTrack colors={['#ef4444', '#eab308', '#22c55e']} />
        </Progress>

        <Box className={styles.scoreMetricContainer}>
          <Text className={styles.scoreMetricText}>Poor</Text>
          <Text className={styles.scoreMetricText}>Excellent</Text>
        </Box>
      </Box>
    </Card>
  );
};

const styles = {
  cardContainer: 'flex-1 gap-4',
  cardHeader: 'flex-row items-center gap-3',
  iconColor: 'text-indigo-400',
  scoreMetricContainer: 'mt-2 flex-row justify-between',
  scoreMetricText: 'text-xs text-background-400',
};
