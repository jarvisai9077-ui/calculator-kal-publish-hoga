import { Redirect } from "expo-router";

// App entry: open the Calculator directly on launch.
export default function Index() {
  return <Redirect href="/calculator" />;
}
