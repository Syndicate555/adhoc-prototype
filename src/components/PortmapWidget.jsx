// PortMapWidget.jsx

import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { PORTS } from "../data/data";

/**
 * A refined PortMapWidget that uses a flexible layout to remove empty space.
 * The map will fill the height of its parent container if you give it enough space.
 */
const PortmapWidget = () => {
  const center = [56.1304, -106.3468]; // approximate Canada center
  const zoomLevel = 4;

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col h-full">
      {/* Header */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Canadian Ports Overview
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Map of major Canadian ports with pending and held shipments data.
      </p>

      {/* Flexible container that lets the map stretch */}
      <div className="flex-1 relative">
        <MapContainer
          center={center}
          zoom={zoomLevel}
          scrollWheelZoom
          // "absolute inset-0" ensures the map covers the entire parent "relative" box.
          className="absolute inset-0 rounded-lg overflow-hidden"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Place markers for each port */}
          {PORTS.map((port) => (
            <Marker key={port.portCode} position={[port.lat, port.lng]}>
              <Popup>
                <div>
                  <p className="font-bold text-sm">
                    {port.portName} – {port.portCode}
                  </p>
                  <p className="text-xs">Pending: {port.pendingShipments}</p>
                  <p className="text-xs">Held: {port.heldShipments}</p>
                  <p className="text-xs">
                    Avg Clearance: {port.avgClearanceTime}
                  </p>
                  <p className="text-xs">
                    24h Shipments: {port.shipmentsLast24h}
                  </p>
                  <p className="text-xs">
                    Inspection Rate: {port.inspectionRate}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default PortmapWidget;
