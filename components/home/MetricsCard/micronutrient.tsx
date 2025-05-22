import React from 'react';
import { Apple, Info } from 'lucide-react-native';
import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { Icon } from '@/components/ui/icon';
import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { useNutrientStore } from '@/store/nutrients-store';

export const Micronutrient = () => {
  const { micronutrients } = useNutrientStore();

  const getColor = (percent: number) => {
    if (percent >= 60) return 'text-emerald-400';
    if (percent <= 20) return 'text-red-500';
    return 'text-background-600';
  };

  return (
    <Card className={styles.cardContainer}>
      <Box className={styles.cardHeader}>
        <Icon as={Apple} className={styles.iconColor} />
        <Text className="flex-1 text-sm">Micronutrients</Text>
        <Icon as={Info} size="sm" />
      </Box>

      <Box className={styles.micronutrientContainer}>
        {micronutrients.map((nutrient, index) => (
          <VStack key={index} className="items-center gap-1">
            <Text className={`text-[11px] font-bold ${getColor(nutrient.value)}`}>
              {nutrient.value}%
            </Text>
            <Text className={styles.nutrientNameText}>{nutrient.shortName}</Text>
          </VStack>
        ))}
      </Box>
    </Card>
  );
};

const styles = {
  cardContainer: 'gap-4 flex-1',
  cardHeader: 'items-center gap-2',
  iconColor: 'text-indigo-400',
  micronutrientContainer: 'items-center justify-between',
  nutrientNameText: 'text-xs text-background-400',
};
