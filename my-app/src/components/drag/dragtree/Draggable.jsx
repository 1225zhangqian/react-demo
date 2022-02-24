import React, { useState, useCallback, useMemo, memo, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Colors } from './Color';
const style = {
  border: '1px dashed gray',
  padding: '0.5rem',
  margin: '0.5rem',
};
const Draggable = memo(function SourceBox({
  id,
  index,
  color,
  children,
  moveCard,
  title,
}) {
  const [forbidDrag, setForbidDrag] = useState(false);
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: color,
      canDrag: !forbidDrag,
      item: () => ({ id, index }),
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [forbidDrag, color]
  );
  const onToggleForbidDrag = useCallback(() => {
    setForbidDrag(!forbidDrag);
  }, [forbidDrag, setForbidDrag]);
  const backgroundColor = useMemo(() => {
    switch (color) {
      case Colors.YELLOW:
        return 'lightgoldenrodyellow';
      case Colors.BLUE:
        return 'lightblue';
      default:
        return 'lightgoldenrodyellow';
    }
  }, [color]);
  const containerStyle = useMemo(
    () => ({
      ...style,
      backgroundColor,
      opacity: isDragging ? 0.4 : 1,
      cursor: forbidDrag ? 'default' : 'move',
    }),
    [isDragging, forbidDrag, backgroundColor]
  );
  const ref = useRef(null);
  const [{ handlerId, isOver, isOverCurrent }, drop] = useDrop({
    accept: [Colors.YELLOW, Colors.BLUE],
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      console.log('isOverCurrent', isOverCurrent);
      console.log('isOver', isOver);
      const dragIndex = item.index;
      console.log('dragid', id);
      const hoverIndex = index;
      console.log('hoverid', item.id);
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      if (moveCard) {
        moveCard(dragIndex, hoverIndex);
      }

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });
  drag(drop(ref));
  return (
    <div
      ref={ref}
      style={containerStyle}
      role="SourceBox"
      data-color={color}
      data-handler-id={handlerId}
    >
      <hr style={{ display: `${isOverCurrent ? 'block' : 'none'}` }} />
      {/* <input
        type="checkbox"
        checked={forbidDrag}
        onChange={onToggleForbidDrag}
      /> */}
      {children}
    </div>
  );
});
export default Draggable;
