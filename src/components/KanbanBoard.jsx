// File: KanbanBoard.jsx

import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { AlertTriangle } from "lucide-react";
import React, { useState } from "react";

// Example initial state remains the same (columns, items)
const initialColumns = {
  "new-intake": {
    title: "New / Intake",
    items: [
      {
        id: "CAD-100",
        shipmentId: "SHP100",
        clientName: "Global Imports Ltd",
        type: "Type 10",
        value: "$35,000",
        dutiesOwed: "$1,050",
        status: "New / Intake",
      },
      {
        id: "CAD-101",
        shipmentId: "SHP101",
        clientName: "Tech Solutions Inc",
        type: "B3 - Highway",
        value: "$12,000",
        dutiesOwed: "$360",
        status: "New / Intake",
      },
    ],
  },
  "missing-docs": {
    title: "Missing Docs",
    items: [
      {
        id: "CAD-102",
        shipmentId: "SHP102",
        clientName: "Auto Parts Co",
        type: "Type 10",
        value: "$70,000",
        dutiesOwed: "$2,100",
        status: "Missing Docs",
      },
    ],
  },
  "under-review": {
    title: "Under Broker Review",
    items: [
      {
        id: "CAD-103",
        shipmentId: "SHP103",
        clientName: "Fashion House LLC",
        type: "B15 - Casual",
        value: "$30,000",
        dutiesOwed: "$900",
        status: "Under Broker Review",
      },
    ],
  },
  "ready-to-submit": {
    title: "Ready to Submit",
    items: [],
  },
  submitted: {
    title: "Submitted to CBSA",
    items: [
      {
        id: "CAD-105",
        shipmentId: "SHP105",
        clientName: "Cool Gadgets Corp",
        type: "Type 10",
        value: "$80,000",
        dutiesOwed: "$2,400",
        status: "Submitted to CBSA",
      },
    ],
  },
  "pending-release": {
    title: "Pending Release",
    items: [],
  },
  "released-awaiting-payment": {
    title: "Released / Awaiting Payment",
    items: [
      {
        id: "CAD-107",
        shipmentId: "SHP107",
        clientName: "Food Imports Unlimited",
        type: "B3 - Rail",
        value: "$14,000",
        dutiesOwed: "$420",
        status: "Released / Awaiting Payment",
      },
    ],
  },
  "closed-completed": {
    title: "Closed / Completed",
    items: [
      {
        id: "CAD-108",
        shipmentId: "SHP108",
        clientName: "Green Earth Supplies",
        type: "Type 10",
        value: "$18,000",
        dutiesOwed: "$540",
        status: "Closed / Completed",
      },
    ],
  },
  "adjustments-appeals": {
    title: "Adjustments/Appeals",
    items: [],
  },
};

const KanbanBoard = () => {
  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const startColumn = columns[source.droppableId];
    const finishColumn = columns[destination.droppableId];

    // Moving within the same column
    if (startColumn === finishColumn) {
      const newItems = Array.from(startColumn.items);
      const [movedItem] = newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, movedItem);

      const updatedColumn = {
        ...startColumn,
        items: newItems,
      };

      setColumns((prev) => ({
        ...prev,
        [source.droppableId]: updatedColumn,
      }));
    } else {
      // Moving to a different column
      const startItems = Array.from(startColumn.items);
      const [movedItem] = startItems.splice(source.index, 1);

      movedItem.status = finishColumn.title;

      const finishItems = Array.from(finishColumn.items);
      finishItems.splice(destination.index, 0, movedItem);

      const updatedStartColumn = {
        ...startColumn,
        items: startItems,
      };
      const updatedFinishColumn = {
        ...finishColumn,
        items: finishItems,
      };

      setColumns((prev) => ({
        ...prev,
        [source.droppableId]: updatedStartColumn,
        [destination.droppableId]: updatedFinishColumn,
      }));
    }
  };

  const renderCard = (item, index) => {
    const dutiesNum = parseInt(item.dutiesOwed.replace(/[^0-9]/g, ""), 10);
    const showAlert = dutiesNum > 2000;

    return (
      <Draggable key={item.id} draggableId={item.id} index={index}>
        {(provided) => (
          <div
            className="bg-white border border-gray-200 p-4 mb-3 rounded-lg shadow-sm
                       hover:shadow-md transition-shadow"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {/* Top section: ID + alert icon */}
            <div className="flex justify-between items-center mb-1">
              <h4 className="text-base font-semibold text-gray-800">
                {item.id}
              </h4>
              {showAlert && (
                <AlertTriangle
                  className="text-red-500 w-5 h-5"
                  title="High duties owed!"
                />
              )}
            </div>

            {/* Details */}
            <div className="text-sm text-gray-600 space-y-1">
              <p>
                <span className="text-gray-500">Shipment:</span>{" "}
                {item.shipmentId}
              </p>
              <p>
                <span className="text-gray-500">Client:</span> {item.clientName}
              </p>
              <p>
                <span className="text-gray-500">Type:</span> {item.type}
              </p>
              <p>
                <span className="text-gray-500">Value:</span> {item.value}
              </p>
              <p>
                <span className="text-gray-500">Duties Owed:</span>{" "}
                {item.dutiesOwed}
              </p>
            </div>
          </div>
        )}
      </Draggable>
    );
  };

  return (
    <div className="w-full h-full p-4 bg-gray-100">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex flex-nowrap overflow-x-auto gap-6 pb-4">
          {Object.entries(columns).map(([columnId, columnData]) => {
            return (
              <Droppable key={columnId} droppableId={columnId}>
                {(provided) => (
                  <div
                    className="flex-shrink-0 w-72 bg-white p-4 rounded-lg shadow
                               border border-gray-200"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {/* Column title */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-gray-700 text-lg">
                        {columnData.title}
                      </h3>
                      <span className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                        {columnData.items.length}
                      </span>
                    </div>

                    {/* CAD cards */}
                    {columnData.items.map((item, index) =>
                      renderCard(item, index)
                    )}

                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;
