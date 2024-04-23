import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'euroalliance',
  appName: 'euroalliance',
  webDir: 'dist',
  loggingBehavior: 'none',
  server: {
    androidScheme: 'https'
  }
}

export default config
