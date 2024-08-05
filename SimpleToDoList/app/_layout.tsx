import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="Simple To Do List" />
    </Stack>
  );
}
