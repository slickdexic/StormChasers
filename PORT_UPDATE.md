# 🔌 Port Configuration Update - Havoc Speedway

## 🎯 **Port Changes Summary**

To avoid conflicts with your existing projects using ports 3000-3002, all ports have been updated by adding 500:

### **NEW PORT CONFIGURATION**
- **Server**: `3001` → `3501` 
- **Client**: `3000` → `3500`

## ✅ **Files Updated**

### **Server Configuration**
- ✅ `server/src/server.js` - Main server port and CORS settings
- ✅ `server/simple-server.js` - Simple server port and CORS settings  
- ✅ `client/package.json` - Proxy configuration to point to new server port

### **Client Configuration** 
- ✅ `client/src/contexts/GameContext.js` - Socket.IO connection URL
- ✅ `client/package.json` - Added PORT environment variable and cross-env

### **Documentation & Scripts**
- ✅ `README.md` - Updated client URL references
- ✅ `QUICK_START.md` - Updated all port references and health check URLs
- ✅ `setup.sh` & `setup.bat` - Updated port information in scripts
- ✅ `start-server.sh` & `start-server.bat` - Updated port information

## 🚀 **New URLs**

### **Development URLs**
- **Client**: http://localhost:3500
- **Server Health Check**: http://localhost:3501/health
- **Server API**: http://localhost:3501/api/rooms

### **WebSocket Connection**
- **Socket.IO**: ws://localhost:3501

## 🎮 **Testing the Changes**

### **Server (Already Running!)**
✅ Server is currently running on port 3501
✅ Health check confirmed: http://localhost:3501/health

### **Client (Next Steps)**
To test the client with the new port:
```bash
cd client
npm install  # Install cross-env if needed
npm start    # Will now start on port 3500
```

## 🔧 **Windows Compatibility**

Added both Unix and Windows-compatible scripts:
- **Cross-platform**: `npm start` (uses cross-env)
- **Windows-specific**: `npm run start:win` (uses SET command)

## 🏁 **Ready to Race!**

Your Havoc Speedway multiplayer game is now configured to run on ports 3500-3501, completely avoiding your existing projects on ports 3000-3002!

**All systems updated and ready for racing! 🏎️💨**
