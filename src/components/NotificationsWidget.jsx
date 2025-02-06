// NotificationsWidget.jsx

import { AlertTriangle, Clock, FileText } from "lucide-react";
import React from "react";
import { Alert, AlertDescription } from "./Alert";

/**
 * This widget replaces the old "AlertsSection" so it doesn't stretch full width.
 */
const NotificationsWidget = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 text-gray-800">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">
        Important Notifications
      </h2>

      <div className="space-y-3">
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            URGENT: CAD payment for Global Imports Ltd (SHP001) due in 2 days –
            $12,450
          </AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            AMPS Penalty Notice received for Tech Solutions Inc – $1,200 (C080)
          </AlertDescription>
        </Alert>
        <Alert>
          <Clock className="h-4 w-4" />
          <AlertDescription>
            Ruling Request (8471.30) pending review – Submitted 15 days ago
          </AlertDescription>
        </Alert>
        <Alert>
          <FileText className="h-4 w-4" />
          <AlertDescription>
            Missing Certificate of Origin for SHP003 – Required for preferential
            tariff treatment
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default NotificationsWidget;
