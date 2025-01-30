// export const Sidebar = ({ activeTab, setActiveTab }) => (
//   <div className="fixed left-0 top-0 h-screen w-64 bg-[#131927] flex flex-col">
//     {/* Logo / Title */}
//     <div className="p-6">
//       <h1 className="text-3xl font-bold text-white">adhoc</h1>
//     </div>

//     {/* Main Nav */}
//     <nav className="flex-1 mt-2">
//       <NavItem
//         icon={LayoutDashboard}
//         label="Dashboard"
//         tab="dashboard"
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//       />
//       <NavItem
//         icon={Package}
//         label="Shipments"
//         tab="shipments"
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//       />
//       <NavItem
//         icon={Users}
//         label="Clients"
//         tab="clients"
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//       />
//       <NavItem
//         icon={Clock}
//         label="Create Shipment"
//         tab="create"
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//       />
//       <NavItem
//         icon={Share2}
//         label="Outstanding CADs"
//         tab="cads"
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//       />
//     </nav>

//     {/* Footer / Settings / Profile */}
//     <div className="mt-auto mb-4">
//       <NavItem
//         icon={Settings}
//         label="Settings"
//         tab="settings"
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//       />
//       <NavItem
//         icon={HelpCircle}
//         label="Help center"
//         tab="help"
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//       />

//       {/* Updated: Profile with actual picture */}
//       <div className="p-4 border-t border-gray-700 flex items-center gap-3">
//         <img
//           src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           className="rounded-full w-10 h-10 object-cover"
//           alt="Profile"
//         />
//         <div>
//           <p className="text-sm font-medium text-white">Louise Thompson</p>
//           <p className="text-xs text-gray-400">Enterprise plan</p>
//         </div>
//       </div>
//     </div>
//   </div>
// );
