import { View } from 'react-native';
import { UserData } from '@/components/onboarding/UserData';
import { useColorScheme } from 'nativewind';
import { Colors } from '@/lib/utils/Colors';

export default function Onboarding() {
  const { colorScheme } = useColorScheme();

  return (
    <View style={[Colors[colorScheme!]]}>
      <UserData />
    </View>
  );
}
