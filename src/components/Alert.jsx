import React from "react";

const Alert = ({ children, variant = "default" }) => {
  const baseStyles =
    "relative w-full rounded-lg border p-4 flex items-center gap-3";

  const variantStyles = {
    default: "bg-gray-50 border-gray-200 text-gray-800",
    destructive: "bg-red-50 border-red-200 text-red-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    success: "bg-green-50 border-green-200 text-green-800",
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]}`}>{children}</div>
  );
};

const AlertDescription = ({ children }) => {
  return <div className="text-sm font-medium">{children}</div>;
};

// Example usage:
const ExampleAlerts = () => {
  return (
    <div className="space-y-4">
      {/* Default Alert */}
      <Alert>
        <AlertDescription>A new shipment has been created.</AlertDescription>
      </Alert>

      {/* Destructive Alert */}
      <Alert variant="destructive">
        <AlertDescription>
          Missing Commercial Invoice for shipment SHP001.
        </AlertDescription>
      </Alert>

      {/* Warning Alert */}
      <Alert variant="warning">
        <AlertDescription>CAD payment due in 2 days.</AlertDescription>
      </Alert>

      {/* Success Alert */}
      <Alert variant="success">
        <AlertDescription>Shipment cleared successfully.</AlertDescription>
      </Alert>
    </div>
  );
};

export { Alert, AlertDescription, ExampleAlerts };
