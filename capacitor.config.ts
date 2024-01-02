import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "capacitor-nextauth",
  webDir: "out",
  server: {
    androidScheme: "https",
    hostname: `mob.capacitor-nextauth.vercel.app`,
  },
};

export default config;
