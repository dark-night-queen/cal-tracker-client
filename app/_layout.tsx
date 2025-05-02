import { Stack } from 'expo-router';
import { colorScheme, useColorScheme } from "nativewind";

import '@/global.css';

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
  );
}

export default function RootLayout() {
  const { setColorScheme } = useColorScheme();
  setColorScheme("dark");
  colorScheme.set("dark");

  return (
    <>
      <RootLayoutNav />
    </>
  );
}
