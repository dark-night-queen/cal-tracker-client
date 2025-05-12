import { ScrollView } from 'react-native';
import { HomeComponent } from '@/components/home';
import { useColorScheme } from 'nativewind';
import { Colors } from '@/lib/utils/Colors';

export default function Home() {
  const { colorScheme } = useColorScheme();

  return (
    <ScrollView style={[Colors[colorScheme!]]}>
      <HomeComponent />
    </ScrollView>
  );
}
