import { ScrollView } from 'react-native';
import { ProfileComponent } from '@/components/profile';
import { useColorScheme } from 'nativewind';
import { Colors } from '@/lib/utils/Colors';

export default function Profile() {
  const { colorScheme } = useColorScheme();

  return (
    <ScrollView style={[Colors[colorScheme!]]}>
      <ProfileComponent />
    </ScrollView>
  );
}
