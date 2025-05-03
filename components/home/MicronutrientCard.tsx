import React from 'react';
import { Apple, Info } from 'lucide-react-native';
import { Card } from '../ui/card';
import { Text } from '../ui/text';
import { Icon } from '../ui/icon';
import { Box } from '../ui/box';

export const MicronutrientCard = () => {
  const micronutrients = [
    { name: 'Fiber', value: 5 },
    { name: 'Vitamin C', value: 7 },
    { name: 'Calcium', value: 4 },
    { name: 'Iron', value: 4 },
    { name: 'Potassium', value: 5 },
  ];

  const getColor = (percent: number) => {
    if (percent >= 60) return 'text-emerald-400';
    if (percent <= 20) return 'text-red-500';
    return "text-background-600";
  };

  return (
    <Card className={styles.cardContainer}>
      <Box className={styles.cardHeader}>
        <Icon as={Apple} className={styles.iconColor} />
        <Text className='flex-1'>Micronutrients</Text>
        <Icon as={Info} size="sm" />
      </Box>

      <Box className={styles.micronutrientContainer}>
        {micronutrients.map((nutrient, index) => (
          <Box key={index} className="items-center gap-1">
            <Text className={`text-[11px] font-bold ${getColor(nutrient.value)}`}>{nutrient.value}%</Text>
            <Text className={styles.text}>{nutrient.name.slice(0, 3)}</Text>
          </Box>
        ))}
      </Box>
    </Card>
  );
};

const styles = {
  cardContainer: 'gap-4 flex-1',
  cardHeader: 'flex-row items-center gap-2',
  iconColor: 'text-indigo-400',
  micronutrientContainer: 'flex-row items-center justify-between',
  text: 'text-xs text-background-400',
};
