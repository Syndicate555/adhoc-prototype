import {
  AlertTriangle,
  Clock,
  DollarSign,
  FileText,
  FileWarning,
  Gavel,
  HelpCircle,
  LayoutDashboard,
  Package,
  PlusCircle,
  Scale,
  Search,
  Settings,
  Share2,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import {
  MOCK_CLIENTS,
  MOCK_SHIPMENTS,
  MOCK_TASKS,
  MOCK_TOP_CLIENTS,
} from "../data/data";
import { Alert, AlertDescription } from "./Alert";
import HSCodeLookupWidget from "./HSCodeLookupWidget";
import KanbanBoard from "./KanbanBoard";
import NotificationsWidget from "./NotificationsWidget";
import ResourceLinksWidget from "./ResourceLinksWidget";
const Sidebar = ({ activeTab, setActiveTab }) => (
  <div className="fixed left-0 top-0 h-screen w-64 bg-[#131927] flex flex-col">
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white">adhoc</h1>
    </div>

    <nav className="flex-1 mt-2">
      <NavItem
        icon={LayoutDashboard}
        label="Dashboard"
        tab="dashboard"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <NavItem
        icon={Package}
        label="Workflow Board"
        tab="kanban"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <NavItem
        icon={Package}
        label="Shipments"
        tab="shipments"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <NavItem
        icon={Users}
        label="Clients"
        tab="clients"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <NavItem
        icon={Clock}
        label="Create Shipment"
        tab="create"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <NavItem
        icon={Share2}
        label="Outstanding CADs"
        tab="cads"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </nav>

    <div className="mt-auto mb-4">
      <NavItem
        icon={Settings}
        label="Settings"
        tab="settings"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <NavItem
        icon={HelpCircle}
        label="Help center"
        tab="help"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Profile in Sidebar */}
      <div className="p-4 border-t border-gray-700 flex items-center gap-3">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded-full w-10 h-10 object-cover"
          alt="Profile"
        />
        <div>
          <p className="text-sm font-medium text-white">Louise Thompson</p>
          <p className="text-xs text-gray-400">Enterprise plan</p>
        </div>
      </div>
    </div>
  </div>
);

const NavItem = ({ icon: Icon, label, tab, activeTab, setActiveTab }) => (
  <button
    onClick={() => setActiveTab(tab)}
    className={`w-full px-6 py-3 flex items-center gap-3 text-sm transition-colors duration-200
      ${
        activeTab === tab
          ? "bg-gray-800 text-white"
          : "text-gray-300 hover:bg-gray-700"
      }
    `}
  >
    <Icon className="h-5 w-5" />
    {label}
  </button>
);

const ClientList = ({ clients }) => (
  <div className="bg-white rounded-lg shadow-sm p-4 text-gray-800">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold">Clients</h2>
      <div className="flex gap-2">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search clients..."
            className="pl-9 pr-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors duration-200">
          <PlusCircle className="h-4 w-4" />
          Add Client
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 gap-4">
      {clients.map((client) => (
        <div
          key={client.id}
          className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow"
        >
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-medium text-gray-900">{client.name}</h3>
              <p className="text-sm text-gray-500">
                BN: {client.businessNumber}
              </p>
            </div>
            <div className="flex gap-2">
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  client.riskProfile === "Low"
                    ? "bg-green-100 text-green-800"
                    : client.riskProfile === "Medium"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {client.riskProfile} Risk
              </span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                Rating: {client.complianceRating}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
            <div>
              <p className="text-xs text-gray-500">Active Shipments</p>
              <p className="font-medium">{client.activeShipments}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Open CADs</p>
              <p className="font-medium">{client.openCADs}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Pending Appeals</p>
              <p className="font-medium">{client.pendingAppeals}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Surety Bond</p>
              <p className="font-medium">{client.surety}</p>
            </div>
          </div>

          <div className="text-sm text-gray-600 mb-3">
            <p>
              <span className="text-gray-500">Common HS Codes:</span>{" "}
              {client.commonHsCodes.join(", ")}
            </p>
            <p>
              <span className="text-gray-500">Preferred Carriers:</span>{" "}
              {client.preferredCarriers.join(", ")}
            </p>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-700">
            <div>
              <span className="text-gray-500">Account Manager:</span>{" "}
              {client.accountManager} |
              <span className="text-gray-500 ml-2">Last Audit:</span>{" "}
              {client.lastAudit}
            </div>
            <div className="flex gap-2">
              <button className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                View Details
              </button>
              <button className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                Edit
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const FinancialSummary = () => (
  <div className="bg-white rounded-lg shadow-sm p-4 text-gray-800">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold">Financial Overview</h2>
      <select className="px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 focus:outline-none focus:border-blue-500">
        <option>This Month</option>
        <option>Last Month</option>
        <option>Last 3 Months</option>
      </select>
    </div>

    <div className="space-y-4">
      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm text-gray-500">Outstanding CADs</p>
          <span className="text-red-600 text-sm">Due within 5 days</span>
        </div>
        <p className="text-xl font-semibold">$45,250</p>
        <div className="mt-2 text-sm text-gray-500">Across 8 shipments</div>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm text-gray-500">AMPS Penalties</p>
          <span className="text-yellow-600 text-sm">2 pending appeals</span>
        </div>
        <p className="text-xl font-semibold">$2,500</p>
        <div className="mt-2 text-sm text-gray-500">C080, C360 violations</div>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm text-gray-500">Monthly Billing</p>
          <span className="text-green-600 text-sm">+12% from last month</span>
        </div>
        <p className="text-xl font-semibold">$12,800</p>
        <div className="mt-2 text-sm text-gray-500">16 active clients</div>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm text-gray-500">Bond Utilization</p>
          <span className="text-blue-600 text-sm">$500K limit</span>
        </div>
        <p className="text-xl font-semibold">68%</p>
        <div className="mt-2 text-sm text-gray-500">
          $340K in active security
        </div>
      </div>
    </div>

    <div className="mt-4 pt-4 border-t">
      <h3 className="text-sm font-medium mb-3">Quick Actions</h3>
      <div className="flex gap-2">
        <button className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors duration-200">
          Process CAD Payment
        </button>
        <button className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
          View All Transactions
        </button>
      </div>
    </div>
  </div>
);

const ShipmentTable = ({ shipments }) => (
  <div className="bg-white rounded-lg shadow-sm p-4 text-gray-800">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold">Active Shipments</h2>
      <div className="flex gap-2">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search shipments..."
            className="pl-9 pr-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
        <select className="px-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 focus:outline-none focus:border-blue-500">
          <option>All Status</option>
          <option>Pending Release</option>
          <option>In Clearance</option>
          <option>Held for Review</option>
          <option>Cleared</option>
          <option>CAD Due</option>
        </select>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50 text-gray-600 text-xs uppercase">
          <tr>
            <th className="px-4 py-2 text-left font-medium">ID</th>
            <th className="px-4 py-2 text-left font-medium">Client</th>
            <th className="px-4 py-2 text-left font-medium">Type</th>
            <th className="px-4 py-2 text-left font-medium">Port</th>
            <th className="px-4 py-2 text-left font-medium">ETA</th>
            <th className="px-4 py-2 text-left font-medium">Value</th>
            <th className="px-4 py-2 text-left font-medium">Duties/Taxes</th>
            <th className="px-4 py-2 text-left font-medium">CAD Due</th>
            <th className="px-4 py-2 text-left font-medium">Status</th>
            <th className="px-4 py-2 text-left font-medium">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {shipments.map((shipment) => (
            <tr
              key={shipment.id}
              className={shipment.hasErrors ? "bg-red-50" : ""}
            >
              <td className="px-4 py-3">{shipment.id}</td>
              <td className="px-4 py-3">{shipment.clientName}</td>
              <td className="px-4 py-3">{shipment.declarationType}</td>
              <td className="px-4 py-3">{shipment.portOfEntry}</td>
              <td className="px-4 py-3">{shipment.eta}</td>
              <td className="px-4 py-3">
                ${shipment.customsValue?.toLocaleString()}
              </td>
              <td className="px-4 py-3">
                {(shipment.dutyAmount + shipment.gstAmount)?.toLocaleString(
                  "en-US",
                  {
                    style: "currency",
                    currency: "USD",
                  }
                )}
              </td>
              <td className="px-4 py-3">{shipment.cadDueDate}</td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    shipment.status === "Cleared"
                      ? "bg-green-100 text-green-800"
                      : shipment.status === "Pending Release"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {shipment.status}
                </span>
              </td>
              <td className="px-4 py-3">
                <button className="text-blue-600 hover:text-blue-800 mr-2 transition-colors duration-200">
                  View
                </button>
                {shipment.documentStatus?.commercialInvoice === "Missing" && (
                  <span
                    className="inline-flex items-center text-red-600"
                    title="Missing Commercial Invoice"
                  >
                    <AlertTriangle className="h-4 w-4 ml-1" />
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const KPICard = ({ icon: Icon, title, value, trend, className = "" }) => (
  <div
    className={`p-4 rounded-lg shadow-sm bg-white text-gray-800 ${className}`}
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold mt-1">{value}</p>
        {trend && (
          <p
            className={`text-sm ${
              trend.type === "increase" ? "text-green-600" : "text-red-600"
            }`}
          >
            {trend.value}
          </p>
        )}
      </div>
      <Icon className="h-8 w-8 text-gray-400" />
    </div>
  </div>
);

const AlertsSection = () => (
  <div className="space-y-2 mt-6">
    <Alert variant="destructive">
      <AlertTriangle className="h-4 w-4" />
      <AlertDescription>
        URGENT: CAD payment for Global Imports Ltd (SHP001) due in 2 days -
        $12,450
      </AlertDescription>
    </Alert>
    <Alert variant="destructive">
      <AlertTriangle className="h-4 w-4" />
      <AlertDescription>
        AMPS Penalty Notice received for Tech Solutions Inc - $1,200 (C080)
      </AlertDescription>
    </Alert>
    <Alert>
      <Clock className="h-4 w-4" />
      <AlertDescription>
        Ruling Request (8471.30) pending review - Submitted 15 days ago
      </AlertDescription>
    </Alert>
    <Alert>
      <FileText className="h-4 w-4" />
      <AlertDescription>
        Missing Certificate of Origin for SHP003 - Required for preferential
        tariff treatment
      </AlertDescription>
    </Alert>
  </div>
);

const TaskList = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 text-gray-800">
      <h2 className="text-lg font-semibold mb-4">Broker Tasks / To-Do</h2>
      <ul className="space-y-3">
        {MOCK_TASKS.map((task) => (
          <li
            key={task.id}
            className="p-3 border border-gray-200 rounded-md hover:shadow-sm transition-shadow"
          >
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium">{task.description}</p>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  task.priority === "High"
                    ? "bg-red-100 text-red-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {task.priority} Priority
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Due: {task.dueDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TopClients = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 text-gray-800">
      <h2 className="text-lg font-semibold mb-4">Top Clients This Month</h2>
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
          <tr>
            <th className="py-2 px-3 text-left">Client</th>
            <th className="py-2 px-3 text-right">Total Duties</th>
            <th className="py-2 px-3 text-right"># Shipments</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {MOCK_TOP_CLIENTS.map((client, i) => (
            <tr key={i}>
              <td className="py-2 px-3">{client.name}</td>
              <td className="py-2 px-3 text-right">
                ${client.totalDuties.toLocaleString()}
              </td>
              <td className="py-2 px-3 text-right">{client.shipments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Placeholder for month‐over‐month changes or any small chart
const MonthOverMonthTrends = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 text-gray-800">
      <h2 className="text-lg font-semibold mb-4">Month‐Over‐Month Trends</h2>
      <p className="text-sm text-gray-600">
        Placeholder for small bar/line chart or bullet stats that compare this
        month’s shipments, duties, or appeals to last month. For example, +15%
        more shipments, -5% in overall duties, etc.
      </p>
      {/* You might embed a charting library in a real implementation */}
      <div className="h-32 mt-4 bg-gray-50 border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm">
        Chart Placeholder
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------
   MAIN DASHBOARD
------------------------------------------------------------------ */
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 ml-64 text-gray-800">
        <main className="p-6">
          {activeTab === "dashboard" && (
            <>
              {/* KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <KPICard
                  icon={Package}
                  title="Active Declarations"
                  value="16"
                  trend={{ type: "increase", value: "+3 from last week" }}
                />
                <KPICard
                  icon={AlertTriangle}
                  title="CADs Due < 5 Days"
                  value="8"
                  trend={{ type: "decrease", value: "-2 from last week" }}
                />
                <KPICard icon={Scale} title="Pending Appeals" value="5" />
                <KPICard
                  icon={FileWarning}
                  title="Overdue Penalties"
                  value="3"
                  trend={{ type: "increase", value: "+1 from last week" }}
                />
              </div>

              {/* Additional row of KPI cards (if needed) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                <KPICard icon={Gavel} title="Ruling Requests" value="4" />
                <KPICard
                  icon={DollarSign}
                  title="Outstanding Duties"
                  value="$45,250"
                />
                <KPICard icon={Users} title="Active Clients" value="12" />
                <KPICard
                  icon={AlertTriangle}
                  title="AMPS Penalties"
                  value="$2,500"
                />
              </div>

              {/* NEW: 3-Column row for the notifications + HS code + resources */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                <NotificationsWidget />
                <HSCodeLookupWidget />
                <ResourceLinksWidget />
              </div>

              {/* Shipment & Financial Summaries */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                {/* Left: Shipments table */}
                <div className="lg:col-span-2">
                  <ShipmentTable shipments={MOCK_SHIPMENTS} />
                </div>
                {/* Right: Financial summary */}
                <FinancialSummary />
              </div>

              {/* Additional Features: Tasks, Top Clients, Trends */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <TaskList />
                <TopClients />
              </div>

              <div className="mt-6">
                <MonthOverMonthTrends />
              </div>
            </>
          )}

          {activeTab === "kanban" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">CAD Workflow Board</h2>
              <KanbanBoard />
            </div>
          )}

          {activeTab === "clients" && <ClientList clients={MOCK_CLIENTS} />}

          {activeTab === "shipments" && (
            <ShipmentTable shipments={MOCK_SHIPMENTS} />
          )}

          {/* Additional tabs/views can be placed here */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
