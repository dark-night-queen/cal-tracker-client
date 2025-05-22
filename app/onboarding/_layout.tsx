import React from 'react';
import { Stack } from 'expo-router';

export default function OnboardingLayout() {  
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Heart Data Modal Screen */}
      <Stack.Screen name="index" options={{ presentation: 'modal' }} />
    </Stack>
  );
}
