import { Tooltip } from '@chakra-ui/react'


export default function Tooltip(props) {
  return (
    <div>
      <Tooltip hasArrow label={props.text} aria-label='A tooltip'>
        {props.children}
      </Tooltip>
    </div>
  );
}