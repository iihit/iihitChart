export default () => {
  try {
    const setupWebSocket = (url, messageHandler, closeHandler) => {
      const socket = new WebSocket(url);
    
      socket.onopen = function (event) {
        console.log(`WebSocket START...`, event)
      }
    
      socket.onmessage = messageHandler
    
      socket.onclose = closeHandler;
    
      return socket;
    }

    return {
      setupWebSocket
    }

  } catch (error) {
    console.error(error)
  }
}