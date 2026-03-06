import type { Config } from 'jest'

const config: Config = {
  testEnvironment: 'jsdom',
  // Use the ESM preset for ts-jest
  preset: 'ts-jest/presets/default-esm', 
  
  moduleNameMapper: {
    // Ensure the alias ends with '$' to prevent partial matches
    '^@/(.*)$': '<rootDir>/src/$1',
    // Force Vue to use the browser-compatible ESM version
    '^vue$': 'vue/dist/vue.runtime.esm-bundler.js'
  },

  transform: {
    // Use @vue/vue3-jest to handle .vue files
    '^.+\\.vue$': '@vue/vue3-jest',
    // Ensure ts-jest uses your specific jest tsconfig
    '^.+\\.ts$': ['ts-jest', { 
      useESM: true,
      tsconfig: 'tsconfig.jest.json' 
    }]
  },

  // Explicitly treat these as ESM
  extensionsToTreatAsEsm: ['.ts', '.vue'],

  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },

  transformIgnorePatterns: [
    'node_modules/(?!(vue|@vue|@heroicons)/)'
  ]
}

export default config
