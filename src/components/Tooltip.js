import { Tooltip } from '@chakra-ui/react'


export default function Tip(props) {
  return (
    <div>
      <Tooltip 
      hasArrow 
      label={props.label} 
      aria-label='A tooltip' 
      closeDelay={1} 
      >
        {props.children}
      </Tooltip>
    </div>
  );
}