import React from 'react';
import { Utensils } from 'lucide-react-native';
import { Box, Card, Icon, Text, VStack } from '@/components/ui';
import { useNutrientStore } from '@/store/nutrients-store';

export const MacroDistribution = () => {
  const { proteinConsumed, targetProtein, carbsConsumed, targetCarbs, fatsConsumed, targetFats } =
    useNutrientStore();

  const percentageProteinConsumed = (proteinConsumed / targetProtein) * 100;
  const percentageCarbsConsumed = (carbsConsumed / targetCarbs) * 100;
  const percentageFatsConsumed = (fatsConsumed / targetFats) * 100;

  return (
    <Card className="gap-4">
      <Box className="items-center">
        <Text className="flex-1">Macro Distribution</Text>
        <Icon as={Utensils} className="text-gray-400" />
      </Box>

      <Box className="justify-around">
        <VStack className="items-center">
          <Text className="text-base font-bold tabular-nums text-rose-400">
            {percentageProteinConsumed.toFixed(2)}%
          </Text>
          <Text className="text-xs text-gray-400">Protein</Text>
        </VStack>

        <VStack className="items-center">
          <Text className="text-base font-bold tabular-nums text-amber-400">
            {percentageCarbsConsumed.toFixed(2)}%
          </Text>
          <Text className="text-xs text-gray-400">Carbs</Text>
        </VStack>

        <VStack className="items-center">
          <Text className="text-base font-bold tabular-nums text-blue-400">
            {percentageFatsConsumed.toFixed(2)}%
          </Text>
          <Text className="text-xs text-gray-400">Fat</Text>
        </VStack>
      </Box>
    </Card>
  );
};
