import { Bell, Menu, Search, Settings, X } from 'lucide-react';
import { useState } from 'react'
import { Outlet } from 'react-router-dom';

const WorkspaceLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="h-screen flex bg-slate-900">
      {/* Sidebar */}
      <aside className={`${
        isSidebarOpen ? 'w-64' : 'w-20'
      } bg-slate-800/50 border-r border-slate-700/50 transition-all duration-300 backdrop-blur-md`}>
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-700/50">
          <div className="flex items-center gap-3">
            {/* <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600"></div> */}
            {isSidebarOpen && (
              <span className="text-white font-semibold">ProjectFlow</span>
            )}
          </div>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="p-4">
          {/* Add your sidebar navigation items here */}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-slate-800/50 border-b border-slate-700/50 backdrop-blur-md px-4">
          <div className="h-full flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input 
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 w-64"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-400 hover:text-white transition-colors relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 h-2 w-2 bg-sky-500 rounded-full"></span>
              </button>
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <Settings size={20} />
              </button>
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 cursor-pointer"></div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default WorkspaceLayout
