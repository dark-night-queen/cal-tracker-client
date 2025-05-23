import React from 'react';
import { Cookie, Wheat, Ham } from 'lucide-react-native';
import { Image } from '@/components/ui/image';
import { Box, Card, Icon, Text, VStack } from '@/components/ui';

type INutrient = {
  value: number;
  icon: any;
  iconColor: string;
};

type ILoggedItem = {
  name: string;
  calories: number;
  score: number;
  protein: number;
  carb: number;
  fat: number;
  timestamp: string;
};

export const LoggedItem = (props: ILoggedItem) => {
  const { name, calories, score, protein, carb, fat, timestamp } = props;

  const scoreColor =
    score >= 7 ? 'text-green-400' : score >= 5 ? 'text-yellow-400' : 'text-red-400';

  const nutrients = [
    {
      name: 'protein',
      value: protein,
      icon: Ham,
      iconColor: 'text-red-400',
    },
    {
      name: 'carb',
      value: carb,
      icon: Wheat,
      iconColor: 'text-yellow-400',
    },
    {
      name: 'fat',
      value: fat,
      icon: Cookie,
      iconColor: 'text-blue-400',
    },
  ];

  const IconImage = require('@/assets/images/adaptive-icon.png');

  return (
    <Card size="lg" className="flex-row items-center gap-4 p-4">
      <Image source={IconImage} alt={name} className="h-16 w-16 rounded-lg object-cover" />

      <VStack className="flex-1">
        <Box className="items-center">
          <Text className="flex-1 font-semibold">{name}</Text>
          <Text className="text-xs text-gray-400">{timestamp}</Text>
        </Box>

        <Box className="mt-1 items-center gap-2">
          <Text className="text-sm">{calories} cal</Text>
          <Text className={scoreColor + ' mx-2 text-sm'}>Score: {score.toFixed(1)}</Text>
        </Box>

        <Box className="items-center gap-2">
          {nutrients.map((item) => (
            <Nutrient key={item.name} {...item} />
          ))}
        </Box>
      </VStack>
    </Card>
  );
};

const Nutrient = ({ value, icon, iconColor }: INutrient) => {
  return (
    <Box className="items-center gap-1">
      <Icon as={icon} size="sm" className={iconColor} />
      <Text className="text-sm text-gray-400">{value}g</Text>
    </Box>
  );
};
