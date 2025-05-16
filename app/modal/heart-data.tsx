import React from 'react';
import { View } from 'react-native';
import { useColorScheme } from 'nativewind';
import { Colors } from '@/lib/utils/Colors';

import { HealthDataComponent } from '@/components/profile/MenuSection/HealthDataModal';

export default function HeartData() {
  const { colorScheme } = useColorScheme();

  return (
    <View style={[Colors[colorScheme!]]}>
      <HealthDataComponent />
    </View>
  );
}
