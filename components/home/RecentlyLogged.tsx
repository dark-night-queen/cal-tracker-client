import React from 'react';
import { Cookie, PenLine, Wheat, RefreshCcw, Ham } from 'lucide-react-native';
import { Box } from '../ui/box';
import { Icon } from '../ui/icon';
import { Text } from '../ui/text';
import { Card } from '../ui/card';
import { Image } from '../ui/image';

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

const NoItemAvailable = () => {
  return (
    <Card size="lg" className="mt-4">
      <Text className="text-center text-gray-400">No food items logged for this day</Text>
    </Card>
  );
};

const Nutrient = ({ value, icon, iconColor }: INutrient) => {
  return (
    <Box className="flex-row items-center gap-1">
      <Icon as={icon} size="sm" className={iconColor} />
      <Text className="text-sm text-gray-400">{value}g</Text>
    </Box>
  );
};

const LoggedItem = (props: ILoggedItem) => {
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
    <Card size="lg" className="mt-4 flex-row items-center gap-4 p-4">
      <Image source={IconImage} alt={name} className="h-16 w-16 rounded-lg object-cover" />

      <Box className='flex-1'>
        <Box className="flex-row items-center">
          <Text className="flex-1 font-semibold">{name}</Text>
          <Text className="text-xs text-gray-400">{timestamp}</Text>
        </Box>

        <Box className="mt-1 flex-row items-center gap-2">
          <Text className="text-sm">{calories} cal</Text>
          <Text className={scoreColor + ' mx-2 text-sm'}>Score: {score.toFixed(1)}</Text>
        </Box>

        <Box className="flex-row items-center gap-2">
          {nutrients.map((item) => (
            <Nutrient key={item.name} {...item} />
          ))}
        </Box>
      </Box>
    </Card>
  );
};

export const RecentlyLogged = () => {
  return (
    <Box className="py-2">
      <Box className="flex-row items-center justify-between">
        <Text className="text-xl font-semibold">Recently uploaded</Text>

        <Box className="flex-row gap-6">
          <Icon as={RefreshCcw} size={'xl'} className="text-gray-400" />
          <Icon as={PenLine} size={'xl'} className="text-gray-400" />
        </Box>
      </Box>

      {/* <NoItemAvailable /> */}
      <LoggedItem
        name="Cheese Pizza"
        calories={400}
        score={0.0}
        protein={15}
        carb={25}
        fat={4}
        timestamp="08:51 AM"
      />

      <LoggedItem
        name="Cheese Pizza"
        calories={400}
        score={0.0}
        protein={15}
        carb={25}
        fat={4}
        timestamp="08:51 AM"
      />
    </Box>
  );
};
