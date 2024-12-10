import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import FieldLibrary from "./FieldLibrary";
import FieldRenderer from "./FieldRenderer";
import reorder from "../../utils/reorder";

const FormBuilder = () => {
  const [formFields, setFormFields] = useState([]);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedFields = reorder(
      formFields,
      result.source.index,
      result.destination.index
    );
    setFormFields(reorderedFields);
  };

  const addField = (field) => {
    setFormFields([...formFields, field]);
  };

  return (
    <div className="form-builder">
      <FieldLibrary addField={addField} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="form-fields">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {formFields.map((field, index) => (
                <Draggable key={field.id} draggableId={field.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <FieldRenderer field={field} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default FormBuilder;
