import React from 'react';
import { PenLine, RefreshCcw } from 'lucide-react-native';
import { Box } from '@/components/ui/box';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { LoggedItem } from './LoggedItem';
import { NoItemAvailable } from './NoItemAvailable';

export const RecentlyLoggedItem = () => {
  return (
    <Box className="py-2">
      <Box className="flex-row items-center justify-between">
        <Text className="text-xl font-semibold">Recently uploaded</Text>

        <Box className="flex-row gap-6">
          <Icon as={RefreshCcw} size={'xl'} className="text-gray-400" />
          <Icon as={PenLine} size={'xl'} className="text-gray-400" />
        </Box>
      </Box>

      <NoItemAvailable />
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
