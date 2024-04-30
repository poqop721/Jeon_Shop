import {useDroppable} from '@dnd-kit/core';
import styled from 'styled-components';

export function Droppable(props : any) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    // opacity: isOver ? 1 : 0.5,
  };

  return (
    <DropDiv ref={setNodeRef} style={style}>
      {props.children}
    </DropDiv>
  );
}
  

const DropDiv = styled.div`
  width : 100%;
  display : flex;
  flex-direction : column;
  gap : 2em 1.5em;
  min-height : 3em;
`