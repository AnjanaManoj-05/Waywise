import { useEffect } from 'react';
import * as SystemUI from 'expo-system-ui';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { LogBox, Platform } from 'react-native';

// Suppress specific warning
LogBox.ignoreLogs([
  'Text strings must be rendered within a <Text> component',
]);

if (__DEV__) {
  const originalConsoleError = console.error;
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Text strings must be rendered within a <Text> component')
    ) {
      return;
    }
    originalConsoleError(...args);
  };
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // 💡 Make system nav bar (bottom bar) transparent
  useEffect(() => {
    if (Platform.OS === 'android') {
      SystemUI.setBackgroundColorAsync('transparent');
    }
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        initialRouteName="onboarding"
        screenOptions={{
          headerShown: false,
          animation: 'default',
          statusBarStyle: 'dark',
          statusBarTranslucent: true,
        }}
      >
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="signin" />
         <Stack.Screen name="1135ad" />
        <Stack.Screen name="clothingessentials" />
        <Stack.Screen name="conrad" />
        <Stack.Screen name="createtrip" />
        <Stack.Screen name="essentials" />
        <Stack.Screen name="fooditernary" />
        <Stack.Screen name="iternarycart" />
        <Stack.Screen name="iternarylist" />
        <Stack.Screen name="jaipurpark" />
        <Stack.Screen name="johnson" />
        <Stack.Screen name="lalitashok" />
        <Stack.Screen name="langhacks" />
        <Stack.Screen name="langjaipur" />
        <Stack.Screen name="langmanali" />
        <Stack.Screen name="nandi" />
        <Stack.Screen name="places" />
        <Stack.Screen name="profile" />
        <Stack.Screen name="shopping" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="skandagiri" />
        <Stack.Screen name="tripprep" />
        <Stack.Screen name="ulsoorlake" />
        <Stack.Screen name="weathermain" />
        <Stack.Screen name="zoo" />
      </Stack>

      {/* Transparent status bar */}
      <StatusBar style="dark" translucent backgroundColor="transparent" />
    </ThemeProvider>
  );
}
