import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';
import styled from 'styled-components';

function Draggable(props : any) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
    border : '0px',
    backgroundColor : 'transparent',
    width : '100%',
    touchAction : 'none',
  };

  return (
    <DragDiv ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </DragDiv>
  );
}

export default Draggable

const DragDiv = styled.div`
  border-radius : 10px;
  &:hover{
    z-index : 1000;
    box-shadow : 0px 8px 23px #b0b0b0;
    touch-action : none;
  }
`