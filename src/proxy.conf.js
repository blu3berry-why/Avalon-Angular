const PROXY_CONFIG = [
  {"context": ["/test", "/lobby/create"],
  "target": "http://localhost:8080",
  "secure": false
  },
  {"context": ["/login"],
  "target": "http://127.0.0.1:5000",
  "secure": false
  }

]
module.exports = PROXY_CONFIG;