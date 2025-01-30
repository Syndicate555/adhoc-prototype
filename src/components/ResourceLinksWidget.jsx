// ResourceLinksWidget.jsx

import { ExternalLink, FileText } from "lucide-react";
import React from "react";

/**
 * A widget that provides quick access to commonly used templates,
 * CBSA/CARM docs, or any other references the broker might need frequently.
 */
const ResourceLinksWidget = () => {
  const resources = [
    {
      label: "CBSA Customs Tariff",
      url: "https://www.cbsa-asfc.gc.ca/trade-commerce/tariff-tarif-eng.html",
    },
    {
      label: "CARM Client Portal",
      url: "https://www.cbsa-asfc.gc.ca/prog/carm-gcra/menu-eng.html",
    },
    {
      label: "B3 Declaration Template",
      url: "#",
    },
    {
      label: "HS Classification Guidelines",
      url: "#",
    },
    {
      label: "AMPS Penalty Lookup",
      url: "#",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 text-gray-800 h-full">
      <h2 className="text-lg font-semibold mb-4">Quick Access Resources</h2>
      <ul className="space-y-3">
        {resources.map((res) => (
          <li key={res.label} className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-gray-400" />
            <a
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              {res.label}
              <ExternalLink className="w-4 h-4 inline" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceLinksWidget;
