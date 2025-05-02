import { CircularProgress } from '../ui/circular-progress';
import { Box } from '../ui/box';
import { Text } from '../ui/text';
import { Card } from '../ui/card';
import { useState } from 'react';
import { Divider } from '../ui/divider';

const MacroCircle = ({
  name,
  value,
  total,
  tintColor,
}: {
  name: string;
  value: number;
  total: number;
  tintColor?: string;
}) => {
  const fill = (value / total) * 100;
  const valueLeft = total - value;

  return (
    <Box className={styles.macroCircle}>
      <CircularProgress size={60} width={8} fill={fill} tintColor={tintColor}>
        {() => <Text className="text-xs">{value}g</Text>}
      </CircularProgress>
      <Text className="text-xs text-typography-200">{name}</Text>
      <Text className="text-xs">{valueLeft}g left</Text>
    </Box>
  );
};

export const MacroCard = () => {
  const [calories, setCalories] = useState(400);
  const [totalCalories, setTotalCalories] = useState(1458);

  const [protein, setProtein] = useState(15);
  const [totalProtein, setTotalProtein] = useState(150);

  const [carbs, setCarbs] = useState(45);
  const [totalCarbs, setTotalCarbs] = useState(300);

  const [fat, setFat] = useState(18);
  const [totalFat, setTotalFat] = useState(65);

  return (
    <Card className={styles.cardContainer}>
      <Box className={styles.calorieContainer}>
        <CircularProgress size={90} width={12} fill={(calories / totalCalories) * 100}>
          {() => <Text className="text-sm">{totalCalories - calories}</Text>}
        </CircularProgress>
        <Text className="text-sm">Calories Left</Text>
      </Box>

      <Divider className={styles.divider} orientation="vertical" />

      <Box className={styles.macroContainer}>
        <Text className="text-sm">Daily Macros Progress</Text>

        <Box className="flex-row justify-between">
          <MacroCircle name="Protein" value={protein} total={totalProtein} tintColor="#EF4444" />
          <MacroCircle name="Carbs" value={carbs} total={totalCarbs} tintColor="#F59E0B" />
          <MacroCircle name="Fat" value={fat} total={totalFat} tintColor="#3B82F6" />
        </Box>
      </Box>
    </Card>
  );
};

const styles = {
  cardContainer: 'flex-row items-center gap-3 rounded-xl p-3',
  calorieContainer: 'flex-[2] items-center justify-center gap-2 max-w-[100px]',
  divider: 'h-16 opacity-60',
  macroContainer: 'flex-[3] gap-3',
  macroCircle: 'items-center justify-center gap-2',
};
