// File: KanbanBoard.jsx

import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { AlertTriangle } from "lucide-react";
import React, { useState } from "react";

// Accent colors for column borders
const accentColors = {
  "new-intake": "border-green-500",
  "missing-docs": "border-red-500",
  "under-review": "border-blue-500",
  "ready-to-submit": "border-purple-500",
  submitted: "border-teal-500",
  "pending-release": "border-yellow-500",
  "released-awaiting-payment": "border-indigo-500",
  "closed-completed": "border-gray-500",
  "adjustments-appeals": "border-pink-500",
};

// *** HEAVIER MOCK DATA for testing a big workflow ***
// Each column has multiple items to see how the board looks with many shipments.
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
      },
      {
        id: "CAD-101",
        shipmentId: "SHP101",
        clientName: "Tech Solutions Inc",
        type: "B3 - Highway",
        value: "$12,000",
        dutiesOwed: "$360",
      },
      {
        id: "CAD-110",
        shipmentId: "SHP110",
        clientName: "AutoZone Exports",
        type: "Type 10",
        value: "$42,000",
        dutiesOwed: "$1,260",
      },
      {
        id: "CAD-111",
        shipmentId: "SHP111",
        clientName: "Fashion House LLC",
        type: "B15 - Casual",
        value: "$28,000",
        dutiesOwed: "$840",
      },
      {
        id: "CAD-112",
        shipmentId: "SHP112",
        clientName: "Mobile Tech Freight",
        type: "Type 10",
        value: "$50,000",
        dutiesOwed: "$1,500",
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
      },
      {
        id: "CAD-113",
        shipmentId: "SHP113",
        clientName: "Green Earth Supplies",
        type: "B3 - Rail",
        value: "$16,000",
        dutiesOwed: "$480",
      },
      {
        id: "CAD-114",
        shipmentId: "SHP114",
        clientName: "Pacific Interiors",
        type: "Type 10",
        value: "$85,000",
        dutiesOwed: "$2,550",
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
      },
      {
        id: "CAD-115",
        shipmentId: "SHP115",
        clientName: "HighTech Imports",
        type: "B3 - Highway",
        value: "$72,000",
        dutiesOwed: "$2,160",
      },
      {
        id: "CAD-116",
        shipmentId: "SHP116",
        clientName: "Eastern Clothing",
        type: "Type 10",
        value: "$19,000",
        dutiesOwed: "$570",
      },
    ],
  },
  "ready-to-submit": {
    title: "Ready to Submit",
    items: [
      {
        id: "CAD-117",
        shipmentId: "SHP117",
        clientName: "Rapid Express",
        type: "B15 - Casual",
        value: "$8,000",
        dutiesOwed: "$240",
      },
      {
        id: "CAD-118",
        shipmentId: "SHP118",
        clientName: "Steel Industrial Corp",
        type: "Type 10",
        value: "$90,000",
        dutiesOwed: "$2,700",
      },
    ],
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
      },
      {
        id: "CAD-119",
        shipmentId: "SHP119",
        clientName: "Ace Chemical",
        type: "Type 10",
        value: "$45,000",
        dutiesOwed: "$1,350",
      },
      {
        id: "CAD-120",
        shipmentId: "SHP120",
        clientName: "Solar Winds Freight",
        type: "B3 - Rail",
        value: "$34,000",
        dutiesOwed: "$1,020",
      },
    ],
  },
  "pending-release": {
    title: "Pending Release",
    items: [
      {
        id: "CAD-121",
        shipmentId: "SHP121",
        clientName: "Avion Tech",
        type: "Type 10",
        value: "$18,000",
        dutiesOwed: "$540",
      },
    ],
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
      },
      {
        id: "CAD-122",
        shipmentId: "SHP122",
        clientName: "Global Sports",
        type: "B15 - Casual",
        value: "$22,000",
        dutiesOwed: "$660",
      },
      {
        id: "CAD-123",
        shipmentId: "SHP123",
        clientName: "Oceanic Cargo",
        type: "Type 10",
        value: "$65,000",
        dutiesOwed: "$1,950",
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
      },
      {
        id: "CAD-124",
        shipmentId: "SHP124",
        clientName: "Citi Fashion",
        type: "B15 - Casual",
        value: "$10,000",
        dutiesOwed: "$300",
      },
      {
        id: "CAD-125",
        shipmentId: "SHP125",
        clientName: "Tech Edge",
        type: "Type 10",
        value: "$52,000",
        dutiesOwed: "$1,560",
      },
      {
        id: "CAD-126",
        shipmentId: "SHP126",
        clientName: "Winnipeg Wholesale",
        type: "B3 - Highway",
        value: "$25,000",
        dutiesOwed: "$750",
      },
      {
        id: "CAD-127",
        shipmentId: "SHP127",
        clientName: "Low Cost Imports",
        type: "Type 10",
        value: "$15,000",
        dutiesOwed: "$450",
      },
    ],
  },
  "adjustments-appeals": {
    title: "Adjustments/Appeals",
    items: [
      {
        id: "CAD-128",
        shipmentId: "SHP128",
        clientName: "Summit Gear",
        type: "Type 10",
        value: "$29,000",
        dutiesOwed: "$870",
      },
      {
        id: "CAD-129",
        shipmentId: "SHP129",
        clientName: "Royal Furniture",
        type: "B3 - Rail",
        value: "$60,000",
        dutiesOwed: "$1,800",
      },
    ],
  },
};

const KanbanBoard = () => {
  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const startColumn = columns[source.droppableId];
    const finishColumn = columns[destination.droppableId];

    // Moving within the same column
    if (startColumn === finishColumn) {
      const updatedItems = Array.from(startColumn.items);
      const [movedItem] = updatedItems.splice(source.index, 1);
      updatedItems.splice(destination.index, 0, movedItem);

      setColumns((prev) => ({
        ...prev,
        [source.droppableId]: { ...startColumn, items: updatedItems },
      }));
    } else {
      // Moving to a different column
      const startItems = Array.from(startColumn.items);
      const [movedItem] = startItems.splice(source.index, 1);

      // If needed, you can update the status on the item
      // movedItem.status = finishColumn.title;

      const finishItems = Array.from(finishColumn.items);
      finishItems.splice(destination.index, 0, movedItem);

      setColumns((prev) => ({
        ...prev,
        [source.droppableId]: { ...startColumn, items: startItems },
        [destination.droppableId]: { ...finishColumn, items: finishItems },
      }));
    }
  };

  const renderCard = (item, index) => {
    // Show an alert if duties > 2000
    const dutiesNum = parseInt(item.dutiesOwed.replace(/[^0-9]/g, ""), 10);
    const showAlert = dutiesNum > 2000;

    return (
      <Draggable key={item.id} draggableId={item.id} index={index}>
        {(provided) => (
          <div
            className="bg-white border border-gray-200 p-4 mb-3 rounded-lg shadow-sm
                       hover:shadow-lg transform hover:scale-105 transition-transform duration-200 cursor-pointer"
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
    <div className="relative w-full min-h-screen bg-gray-100">
      {/* Fixed header offset by the sidebar width */}
      <header className="fixed top-0 left-64 right-0 h-16 z-50 flex items-center justify-center bg-gray-100 shadow">
        <h2 className="text-2xl font-bold text-gray-800">CAD Workflow Board</h2>
      </header>

      <DragDropContext onDragEnd={onDragEnd}>
        {/*
          Main scrollable area:
          - space for the fixed header (pt-16)
          - horizontal scroll for columns
        */}
        <div className="pt-16 h-full overflow-x-auto">
          <div className="flex flex-nowrap gap-6 px-6">
            {Object.entries(columns).map(([columnId, columnData]) => {
              const accentClass = accentColors[columnId] || "border-gray-300";
              return (
                <Droppable key={columnId} droppableId={columnId}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={`flex-shrink-0 w-72 bg-white p-4 rounded-lg shadow border-l-4 ${accentClass}`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-gray-800 text-lg">
                          {columnData.title}
                        </h3>
                        <span className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                          {columnData.items.length}
                        </span>
                      </div>

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
        </div>
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;
