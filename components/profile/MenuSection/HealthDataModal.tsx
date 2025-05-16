import React from 'react';
import { useNavigation } from 'expo-router';
import { ChevronLeft, Heart } from 'lucide-react-native';

import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Icon } from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Button, ButtonIcon } from '@/components/ui/button';

export const HealthDataComponent = () => {
  const navigation = useNavigation();
  const closeComponent = () => navigation.goBack();

  return (
    <Box className="h-screen px-5 py-5 dark:bg-gray-900">
      {/* Go back btn */}
      <Button variant="ghost" className="self-start rounded-lg p-2" onPress={closeComponent}>
        <ButtonIcon as={ChevronLeft} className="text-gray-400" />
      </Button>

      {/* Coming Soon */}
      <Box className="h-3/4 items-center justify-center gap-8 p-4">
        <Box className={styles.iconContainer}>
          <Icon as={Heart} className={styles.icon} />
        </Box>

        <Box className="items-center">
          <Text className={styles.heading}>Health Data Coming Soon</Text>
          <Text className={styles.description}>
            We're working on bringing you comprehensive health tracking features. Monitor your
            vitals, track your progress, and get personalized insights to improve your overall
            well-being.
          </Text>
        </Box>

        {/* Features */}
        <Box className="flex-row gap-4">
          <Card className={styles.cardContainer}>
            <Box className={`${styles.cardIconContainer} bg-indigo-500/10`}>
              <Icon as={Heart} className="text-indigo-400" />
            </Box>

            <Text className={styles.cardHeader}>Vital Tracking</Text>
            <Text className={styles.cardDescription}>
              Monitor your heart rate, blood pressure, and other key health metrics
            </Text>
          </Card>

          <Card className={styles.cardContainer}>
            <Box className={`${styles.cardIconContainer} bg-green-500/10`}>
              <Icon as={Heart} className="text-green-400" />
            </Box>
            <Text className={styles.cardHeader}>Health Insights</Text>
            <Text className={styles.cardDescription}>
              Get personalized recommendations based on your health data
            </Text>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  iconContainer: 'p-4 rounded-2xl bg-background-0 dark:bg-gray-800',
  icon: 'text-indigo-400 h-12 w-12',
  heading: 'text-2xl font-bold text-background-950 mb-3',
  description: 'text-gray-400 text-sm leading-relaxed text-center',

  cardContainer: 'flex-1 gap-1',
  cardIconContainer: 'mb-2 self-start rounded-lg p-2',
  cardHeader: 'text-sm font-medium',
  cardDescription: 'text-xs text-gray-400',
};
