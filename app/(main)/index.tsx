import { StyleSheet, View } from 'react-native';
import { WeeklyCalendar } from '@/components/home';

// import {
//   // MacroCard,
//   // MetricsCard,
//   RecentlyLogged,
//   ScannerButton,
//   // WeeklyCalendar,
// } from "@/components/home";
// import { View } from "@/components/Themed";
// // import { Box } from "@/components/ui/box";

export default function Home() {
  return (
    <View>
      <WeeklyCalendar />
      {/* <MacroCard />
      <MetricsCard /> */}
      {/* <ScannerButton />
      <RecentlyLogged /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
