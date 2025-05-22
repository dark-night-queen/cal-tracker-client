import React from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { ChevronLeft, Heart } from 'lucide-react-native';
import { Box, Text, Icon, Card, Button, ButtonIcon, VStack } from '@/components/ui';

export const HealthDataComponent = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const closeComponent = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      router.push('/(main)/profile');
    }
  };

  return (
    <VStack className="h-screen px-5 py-5 dark:bg-gray-900">
      {/* Go back btn */}
      <Button variant="ghost" className="self-start rounded-lg p-2" onPress={closeComponent}>
        <ButtonIcon as={ChevronLeft} className="text-gray-400" />
      </Button>

      {/* Coming Soon */}
      <VStack className="h-3/4 items-center justify-center gap-8 p-4">
        <Box className={styles.iconContainer}>
          <Icon as={Heart} className={styles.icon} />
        </Box>

        <VStack className="items-center">
          <Text className={styles.heading}>Health Data Coming Soon</Text>
          <Text className={styles.description}>
            We're working on bringing you comprehensive health tracking features. Monitor your
            vitals, track your progress, and get personalized insights to improve your overall
            well-being.
          </Text>
        </VStack>

        {/* Features */}
        <Box className="gap-4">
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
      </VStack>
    </VStack>
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
