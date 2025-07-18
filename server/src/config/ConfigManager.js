const path = require('path');
const fs = require('fs');

class ConfigManager {
  constructor() {
    this.config = {};
    this.loadConfig();
  }

  loadConfig() {
    // Load environment variables
    this.config = {
      // Server Configuration
      server: {
        port: parseInt(process.env.PORT) || 3501,  // enforce default ≥3500
        host: process.env.HOST || 'localhost',
        cors: {
          origin: process.env.CORS_ORIGIN || 'http://localhost:3500',
          credentials: true
        }
      },

      // Game Configuration
      game: {
        minPlayers: parseInt(process.env.MIN_PLAYERS) || 2,
        maxPlayers: parseInt(process.env.MAX_PLAYERS) || 8,
        defaultChips: parseInt(process.env.DEFAULT_CHIPS) || 1000,
        timeouts: {
          playerTurn: parseInt(process.env.TURN_TIMEOUT) || 30000,
          betting: parseInt(process.env.BETTING_TIMEOUT) || 30000,
          dealerSelection: parseInt(process.env.DEALER_TIMEOUT) || 45000
        },
        betting: {
          minBet: parseInt(process.env.MIN_BET) || 10,
          maxBet: parseInt(process.env.MAX_BET) || 500
        }
      },

      // Database Configuration (for future use)
      database: {
        url: process.env.DATABASE_URL || null,
        options: {
          maxConnections: parseInt(process.env.DB_MAX_CONNECTIONS) || 10,
          timeout: parseInt(process.env.DB_TIMEOUT) || 5000
        }
      },

      // Logging Configuration
      logging: {
        level: process.env.LOG_LEVEL || 'info',
        file: process.env.LOG_FILE || null,
        console: process.env.LOG_CONSOLE !== 'false'
      },

      // Security Configuration
      security: {
        rateLimit: {
          windowMs: parseInt(process.env.RATE_LIMIT_WINDOW) || 900000, // 15 minutes
          maxRequests: parseInt(process.env.RATE_LIMIT_MAX) || 100
        },
        sessionSecret: process.env.SESSION_SECRET || 'default-dev-secret',
        enableCsrf: process.env.ENABLE_CSRF === 'true'
      },

      // Feature Flags
      features: {
        enableStatistics: process.env.ENABLE_STATS !== 'false',
        enableReconnection: process.env.ENABLE_RECONNECTION !== 'false',
        enableSpectators: process.env.ENABLE_SPECTATORS === 'true',
        enableTournaments: process.env.ENABLE_TOURNAMENTS === 'true'
      },

      // Development Configuration
      development: {
        enableDebug: process.env.NODE_ENV === 'development',
        hotReload: process.env.HOT_RELOAD === 'true',
        mockData: process.env.USE_MOCK_DATA === 'true'
      }
    };

    // Load config file if it exists
    this.loadConfigFile();
    
    // Validate configuration
    this.validateConfig();
  }

  loadConfigFile() {
    const configPath = path.join(process.cwd(), 'config.json');
    
    if (fs.existsSync(configPath)) {
      try {
        const fileConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
        this.config = this.mergeDeep(this.config, fileConfig);
      } catch (error) {
        console.warn('Failed to load config.json:', error.message);
      }
    }
  }

  validateConfig() {
    const errors = [];

    // Validate server configuration
    if (this.config.server.port < 1 || this.config.server.port > 65535) {
      errors.push('Invalid server port');
    }

    // Validate game configuration
    if (this.config.game.minPlayers < 1) {
      errors.push('Minimum players must be at least 1');
    }

    if (this.config.game.maxPlayers < this.config.game.minPlayers) {
      errors.push('Maximum players must be greater than minimum players');
    }

    if (this.config.game.defaultChips < 1) {
      errors.push('Default chips must be positive');
    }

    // Validate betting configuration
    if (this.config.game.betting.minBet < 1) {
      errors.push('Minimum bet must be positive');
    }

    if (this.config.game.betting.maxBet < this.config.game.betting.minBet) {
      errors.push('Maximum bet must be greater than minimum bet');
    }

    if (errors.length > 0) {
      throw new Error(`Configuration validation failed:\n${errors.join('\n')}`);
    }
  }

  mergeDeep(target, source) {
    const result = { ...target };
    
    for (const key in source) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        result[key] = this.mergeDeep(result[key] || {}, source[key]);
      } else {
        result[key] = source[key];
      }
    }
    
    return result;
  }

  get(path) {
    return this.getNestedValue(this.config, path);
  }

  set(path, value) {
    this.setNestedValue(this.config, path, value);
  }

  getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => {
      return current && current[key] !== undefined ? current[key] : undefined;
    }, obj);
  }

  setNestedValue(obj, path, value) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const target = keys.reduce((current, key) => {
      if (!current[key] || typeof current[key] !== 'object') {
        current[key] = {};
      }
      return current[key];
    }, obj);
    
    target[lastKey] = value;
  }

  // Convenience getters for commonly used config values
  getServerConfig() {
    return this.config.server;
  }

  getGameConfig() {
    return this.config.game;
  }

  getDatabaseConfig() {
    return this.config.database;
  }

  getSecurityConfig() {
    return this.config.security;
  }

  isFeatureEnabled(feature) {
    return this.get(`features.${feature}`) === true;
  }

  isDevelopment() {
    return process.env.NODE_ENV === 'development';
  }

  isProduction() {
    return process.env.NODE_ENV === 'production';
  }

  // Export configuration for external use
  export() {
    return JSON.parse(JSON.stringify(this.config));
  }

  // Generate example config file
  generateExampleConfig() {
    const exampleConfig = {
      server: {
        port: 3001,
        host: 'localhost'
      },
      game: {
        minPlayers: 2,
        maxPlayers: 8,
        defaultChips: 1000,
        timeouts: {
          playerTurn: 30000,
          betting: 30000
        }
      },
      features: {
        enableStatistics: true,
        enableReconnection: true
      }
    };

    return JSON.stringify(exampleConfig, null, 2);
  }
}

// Create singleton instance
const configManager = new ConfigManager();

module.exports = configManager;
