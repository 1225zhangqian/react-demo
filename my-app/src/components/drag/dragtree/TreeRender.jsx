import React from 'react';
import Draggable from './Draggable';
import Droppable from './Droppable';
export const treeRender = (node, index) => {
  const renderDraggable = (item, index) => (
    <Draggable id={item.id} color={'blue'} index={index} title={item.title}>
      <div>{item.title}</div>
    </Draggable>
  );
  return (
    <Droppable>
      <div>
        <div> {node.title}</div>
        {node?.children?.map((item, index) =>
          !item?.children?.length ? (
            renderDraggable(item, index)
          ) : (
            <Draggable
              id={item.id}
              color={'yellow'}
              index={index}
              title={item.title}
            >
              <div>{treeRender(item, index)}</div>
            </Draggable>
          )
        )}
      </div>
    </Droppable>
  );
};
