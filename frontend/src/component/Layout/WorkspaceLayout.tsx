import { Bell, LogOut, Menu, Search, Settings, User, X } from 'lucide-react';
import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const WorkspaceLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const navigate = useNavigate();

    const handleProfileClick = () => {
      navigate('/workspace/profile');
      setIsProfileOpen(false);
    };

    const userProfile = {
        name: "Alex Johnson",
        email: "alex@projectflow.com",
        tags: ["Frontend Developer", "Full Stack"],
        avatar: "https://avatars.githubusercontent.com/u/1234567?v=4"
    };

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
              {/* profile */}
              <div className='relative'>
                <button 
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className='relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-slate-700/50 hover:ring-sky-500 transition-all duration-200'>
                  <img 
                    src={userProfile.avatar}
                    alt={userProfile.name}
                    // onError={handleImageError}
                    className="h-full w-full object-cover"/>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:opacity-0 transition-opacity"></div>
                </button>
                {isProfileOpen && (
                  <div className='absolute right-6 mt-6 w-48 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-lg shadow-lg py-1 z-50'>
                        <div className='px-4 pb-3 border-b border-slate-700/50'>
                          <div className='flex items-start gap-3'>
                            <img 
                              src={userProfile.avatar}
                              alt={userProfile.name}
                              // onError={handleImageError}
                              className="h-10 w-10 flex-shrink-0 rounded-full ring-2 ring-slate-700/50"
                            />
                            <div className='flex-1 min-w-0'>
                              <h3 className="text-white font-medium truncate">         {userProfile.name}
                              </h3>
                              <p className="text-sm text-gray-400 truncate">{userProfile.email}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-1 mt-2">
                            {userProfile.tags.map((tag, index) => (
                              <span key={index} className='px-2 py-0.5 bg-slate-700/50 text-sky-400 rounded-full text-xs'>{tag}</span>
                            ))}
                          </div>
                        </div>
                        

                        <div className='py-1'>
                          <button
                            onClick={handleProfileClick}
                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:bg-slate-700/50 transition-colors">
                            <User size={16} />
                            View Profile
                          </button>

                          <button
                            onClick={() => {
                                navigate('/workspace/settings');
                                setIsProfileOpen(false);
                            }}
                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:bg-slate-700/50 transition-colors">
                            <Settings size={16} />
                            Settings
                          </button>
                        </div>
                        <div className="border-t border-slate-700/50 mt-1 pt-1">
                            <button
                              onClick={() => {/* Add logout handler */}}
                              className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-slate-700/50 transition-colors">
                              <LogOut size={16} />
                              Sign Out
                            </button>
                        </div>
                      </div>
                    )}
              </div>
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
