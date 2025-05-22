import React from 'react';
import { PenLine, RefreshCcw } from 'lucide-react-native';
import { Box, Icon, Text, VStack } from '@/components/ui';
import { LoggedItem } from './logged-item';
import { NoItemAvailable } from './item-not-available';

export const RecentlyLoggedItem = () => {
  return (
    <VStack className="gap-4">
      <Box className="items-center justify-between">
        <Text className="text-xl font-semibold">Recently uploaded</Text>

        <Box className="gap-6">
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
    </VStack>
  );
};
