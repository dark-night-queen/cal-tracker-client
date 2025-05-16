import { Stack } from 'expo-router';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';

import '@/global.css';

function RootLayoutNav() {
  return (
    <GluestackUIProvider mode="dark">
      <Stack>
        <Stack.Screen name="(main)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ headerShown: false, presentation: 'modal' }} />
      </Stack>
    </GluestackUIProvider>
  );
}

export default function RootLayout() {
  return (
    <>
      <RootLayoutNav />
    </>
  );
}
