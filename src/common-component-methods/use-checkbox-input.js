import React from "react";

// #############################################################################
// Use Check Box Input 
// #############################################################################

export function useCheckBoxInput(initialValue = false){
  const [value, setValue] = React.useState(initialValue);
  const onClick = () => setValue(!value);
  return  {value, onClick}
}