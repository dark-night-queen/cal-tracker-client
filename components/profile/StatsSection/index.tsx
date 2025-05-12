import React from 'react';
import { Flame, Scale, Target } from 'lucide-react-native';

import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';

type ICustomCard = {
  icon: any;
  className: string;
  name: string;
  value: string;
};

const CustomCard = ({ icon, className, name, value }: ICustomCard) => {
  return (
    <Card className="flex-1 gap-y-1 rounded-xl">
      <Box className="flex-row items-center gap-2">
        <Icon as={icon} className={className} />
        <Text className="text-xs text-gray-400">{name}</Text>
      </Box>
      <Text className="text-lg font-semibold text-white">{value}</Text>
    </Card>
  );
};

export const Stats = () => {
  return (
    <Box className="gap-4">
      <Box className="flex-row gap-4">
        <CustomCard icon={Scale} className="text-blue-400" value="61.8 kg" name="Current Weight" />
        <CustomCard icon={Target} className="text-green-400" value="55 kg" name="Target Weight" />
      </Box>

      <CustomCard icon={Flame} className="text-orange-400" value="1458 kcal" name="Daily Calorie Target" />
    </Box>
  );
};
