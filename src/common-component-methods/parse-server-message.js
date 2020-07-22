// #############################################################################
// this function will parse the server message to an string;
// #############################################################################

export function parseServerMessage(messageObj){
  const keys = Object.keys(messageObj);
  let message = "";
  keys.forEach(key => {
    message += messageObj[key];
  })
  return message;
}