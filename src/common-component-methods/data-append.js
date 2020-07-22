
// #############################################################################
// this function will append data to the fromData object
// #############################################################################


export function appendDataToFormData(object = {}){
  const data = new FormData();
  const keys = Object.keys(object);
  keys.forEach(key => {
    data.append(key, object[key]);
  })
  return data;
}