const fs = require('fs');
const path = require('path');
const configManager = require('./ConfigManager');

class Logger {
  constructor() {
    this.config = configManager.get('logging');
    this.logLevels = {
      error: 0,
      warn: 1,
      info: 2,
      debug: 3
    };
    
    this.currentLevel = this.logLevels[this.config.level] || this.logLevels.info;
    
    // Ensure log directory exists if file logging is enabled
    if (this.config.file) {
      const logDir = path.dirname(this.config.file);
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
      }
    }
  }

  formatMessage(level, message, meta = {}) {
    const timestamp = new Date().toISOString();
    const metaString = Object.keys(meta).length > 0 ? ` ${JSON.stringify(meta)}` : '';
    return `[${timestamp}] ${level.toUpperCase()}: ${message}${metaString}`;
  }

  log(level, message, meta = {}) {
    const levelValue = this.logLevels[level];
    
    if (levelValue > this.currentLevel) {
      return; // Skip logging if level is below threshold
    }

    const formattedMessage = this.formatMessage(level, message, meta);

    // Console logging
    if (this.config.console) {
      switch (level) {
        case 'error':
          console.error(formattedMessage);
          break;
        case 'warn':
          console.warn(formattedMessage);
          break;
        case 'debug':
          console.debug(formattedMessage);
          break;
        default:
          console.log(formattedMessage);
      }
    }

    // File logging
    if (this.config.file) {
      try {
        fs.appendFileSync(this.config.file, formattedMessage + '\n');
      } catch (error) {
        console.error('Failed to write to log file:', error);
      }
    }
  }

  error(message, meta = {}) {
    this.log('error', message, meta);
  }

  warn(message, meta = {}) {
    this.log('warn', message, meta);
  }

  info(message, meta = {}) {
    this.log('info', message, meta);
  }

  debug(message, meta = {}) {
    this.log('debug', message, meta);
  }

  // Game-specific logging methods
  logPlayerAction(playerId, action, roomId, data = {}) {
    this.info(`Player action: ${action}`, {
      playerId,
      roomId,
      action,
      ...data
    });
  }

  logGameEvent(roomId, event, data = {}) {
    this.info(`Game event: ${event}`, {
      roomId,
      event,
      ...data
    });
  }

  logRoomActivity(roomId, activity, data = {}) {
    this.info(`Room activity: ${activity}`, {
      roomId,
      activity,
      ...data
    });
  }

  logConnectionEvent(socketId, event, data = {}) {
    this.info(`Connection event: ${event}`, {
      socketId,
      event,
      ...data
    });
  }

  logError(error, context = {}) {
    const errorData = {
      message: error.message,
      stack: error.stack,
      ...context
    };
    
    this.error('Application error', errorData);
  }

  // Performance logging
  logPerformance(operation, duration, data = {}) {
    this.debug(`Performance: ${operation} took ${duration}ms`, data);
  }

  // Security logging
  logSecurityEvent(event, severity = 'warn', data = {}) {
    this[severity](`Security event: ${event}`, data);
  }

  // Create request middleware for Express
  createRequestLogger() {
    return (req, res, next) => {
      const start = Date.now();
      
      res.on('finish', () => {
        const duration = Date.now() - start;
        this.info(`${req.method} ${req.url}`, {
          method: req.method,
          url: req.url,
          statusCode: res.statusCode,
          duration: `${duration}ms`,
          userAgent: req.get('User-Agent'),
          ip: req.ip
        });
      });
      
      next();
    };
  }

  // Rotate log file if it gets too large
  rotateLogs() {
    if (!this.config.file) return;

    try {
      const stats = fs.statSync(this.config.file);
      const maxSize = 10 * 1024 * 1024; // 10MB

      if (stats.size > maxSize) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const rotatedFile = `${this.config.file}.${timestamp}`;
        
        fs.renameSync(this.config.file, rotatedFile);
        this.info('Log file rotated', { oldFile: rotatedFile });
      }
    } catch (error) {
      console.error('Failed to rotate log file:', error);
    }
  }
}

// Create singleton instance
const logger = new Logger();

// Set up log rotation interval
if (logger.config.file) {
  setInterval(() => {
    logger.rotateLogs();
  }, 60 * 60 * 1000); // Check every hour
}

module.exports = logger;
