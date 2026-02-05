
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Shield, 
  BookOpen, 
  AlertOctagon, 
  Gavel, 
  Download, 
  Search, 
  MessageSquare, 
  User as UserIcon,
  Menu,
  Sun,
  Moon,
  Zap,
  Monitor,
  Bell,
  Cpu,
  ChevronRight,
  Settings,
  LogOut,
  Activity,
  X,
  Hash
} from 'lucide-react';
import { AppTheme } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, theme, setTheme }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { name: 'Control Center', path: '/', icon: <Monitor size={20} /> },
    { name: 'Intel Library', path: '/awareness', icon: <BookOpen size={20} /> },
    { name: 'Attack Methods', path: '/attacks', icon: <AlertOctagon size={20} /> },
    { name: 'Threat Engine', path: '/analysis', icon: <Search size={20} /> },
    { name: 'Legal Vault', path: '/legal', icon: <Gavel size={20} /> },
    { name: 'Knowledge Glossary', path: '/glossary', icon: <Hash size={20} /> },
    { name: 'Toolbox', path: '/resources', icon: <Download size={20} /> },
    { name: 'SafeChat AI', path: '/chat', icon: <MessageSquare size={20} /> },
  ];

  const getThemeClasses = () => {
    switch(theme) {
      case 'dark': return 'bg-gray-950 text-gray-100';
      case 'cyber-blue': return 'bg-slate-950 text-sky-400 theme-cyber-blue';
      case 'neon-green': return 'bg-black text-green-400 theme-neon-green';
      default: return 'bg-slate-50 text-slate-900';
    }
  };

  const getSidebarClasses = () => {
    switch(theme) {
      case 'dark': return 'bg-gray-900 border-gray-800/50';
      case 'cyber-blue': return 'bg-slate-900/40 border-sky-500/10 backdrop-blur-3xl';
      case 'neon-green': return 'bg-neutral-900/40 border-green-500/10 backdrop-blur-3xl';
      default: return 'bg-white/80 border-slate-200/50 backdrop-blur-xl';
    }
  };

  const Logo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
    const dim = size === "sm" ? "w-10 h-10" : size === "lg" ? "w-16 h-16" : "w-12 h-12";
    const iconSize = size === "sm" ? 24 : size === "lg" ? 48 : 32;
    return (
      <div className="relative group flex items-center justify-center shrink-0">
        <div className="absolute inset-0 bg-blue-500 blur-xl opacity-30 group-hover:opacity-60 transition-opacity"></div>
        <div className={`relative bg-gradient-to-br from-blue-600 to-indigo-700 ${dim} rounded-2xl shadow-2xl flex items-center justify-center transform transition-transform group-hover:rotate-6`}>
          <Shield className="text-white/20 absolute inset-0 m-auto" size={iconSize} />
          <span className="relative z-10 text-white font-black text-2xl mb-0.5 select-none">S</span>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen flex transition-all duration-700 ${getThemeClasses()}`}>
      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-md z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-80 transform transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] border-r
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:inset-0
        ${getSidebarClasses()}
      `}>
        <div className="flex flex-col h-full">
          {/* Sidebar Logo Area (Hidden on mobile as it's in header) */}
          <div className="p-10 hidden lg:flex items-center gap-5">
            <Logo />
            <div>
              <h1 className="font-black text-2xl tracking-tight leading-none shimmer-text select-none">SAFECLICK</h1>
              <p className="text-[9px] uppercase font-black tracking-[0.2em] opacity-30 mt-1">Shielded Intel</p>
            </div>
          </div>

          <div className="lg:hidden p-8 flex justify-between items-center border-b border-white/5">
             <div className="flex items-center gap-4">
                <Logo size="sm" />
                <h1 className="font-black text-xl tracking-tighter">SAFECLICK</h1>
             </div>
             <button onClick={() => setIsSidebarOpen(false)} className="p-2"><X /></button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-8 space-y-2.5 pt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsSidebarOpen(false)}
                className={({ isActive }) => `
                  flex items-center justify-between px-6 py-4 rounded-[1.25rem] transition-all duration-500 group relative overflow-hidden
                  ${isActive 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/25 font-bold scale-[1.02]' 
                    : 'opacity-60 hover:opacity-100 hover:bg-slate-100 dark:hover:bg-white/5'
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-4 relative z-10">
                      <span className={`transition-all duration-500 ${isActive ? 'scale-110' : 'group-hover:scale-110 group-hover:text-blue-500'}`}>{item.icon}</span>
                      <span className="text-sm tracking-tight">{item.name}</span>
                    </div>
                    {isActive && <ChevronRight size={14} className="relative z-10 opacity-70" />}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* User Profile Area */}
          <div className="p-8 space-y-6">
            <div className="glass p-5 rounded-[1.75rem] border border-white/10">
               <div className="flex items-center gap-4 mb-5">
                  <div className="relative">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="w-11 h-11 rounded-2xl bg-slate-200" alt="Profile" />
                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-black truncate">Agent Alpha</p>
                    <p className="text-[10px] uppercase font-black opacity-30 tracking-widest">Security Analyst</p>
                  </div>
               </div>
               <div className="flex gap-2">
                 <button className="flex-1 p-3 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-blue-500 hover:text-white transition-all"><Settings size={18} className="mx-auto" /></button>
                 <button className="flex-1 p-3 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-red-500 hover:text-white transition-all"><LogOut size={18} className="mx-auto" /></button>
               </div>
            </div>

            {/* Theme Engine */}
            <div className="glass-card p-4 rounded-[1.5rem]">
               <div className="flex justify-between items-center mb-4 px-2">
                 <span className="text-[10px] uppercase font-bold opacity-30">UI Protocol</span>
                 <Cpu size={14} className="opacity-20" />
               </div>
               <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: 'light', icon: <Sun size={18} /> },
                    { id: 'dark', icon: <Moon size={18} /> },
                    { id: 'cyber-blue', icon: <Zap size={18} /> },
                    { id: 'neon-green', icon: <Zap size={18} /> }
                  ].map((t) => (
                    <button 
                      key={t.id}
                      onClick={() => setTheme(t.id as AppTheme)} 
                      className={`p-3 rounded-xl transition-all flex items-center justify-center ${
                        theme === t.id 
                          ? 'bg-blue-600 text-white shadow-lg' 
                          : 'bg-slate-100 dark:bg-white/5 opacity-50 hover:opacity-100'
                      }`}
                    >
                      {t.icon}
                    </button>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto h-screen relative flex flex-col">
        {/* Top Header */}
        <header className={`sticky top-0 z-30 flex items-center justify-between p-4 px-6 lg:px-10 border-b ${getSidebarClasses()} bg-opacity-70 transition-all duration-500`}>
          <div className="flex items-center gap-6">
            <button 
              className="p-3 lg:hidden hover:bg-slate-200 dark:hover:bg-white/10 rounded-2xl transition-all"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            
            {/* Logo and App Name in Header */}
            <div className="flex items-center gap-4">
               <Logo size="sm" />
               <div className="flex flex-col">
                 <h1 className="font-black text-xl lg:text-2xl tracking-tighter leading-none shimmer-text select-none">SAFECLICK</h1>
                 <p className="hidden md:block text-[9px] uppercase font-black tracking-[0.2em] opacity-40 mt-1">THINK BEFORE CLICK – STAY DIGITALLY SECURE</p>
               </div>
            </div>
          </div>

          <div className="flex items-center gap-4 lg:gap-8">
            <div className="hidden lg:flex items-center gap-4 px-5 py-2.5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/5">
              <Activity className="text-green-500 animate-pulse" size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">SAFECLICK: Synchronized</span>
            </div>

            <div className="hidden sm:flex items-center gap-3">
               <div className="flex -space-x-3">
                 {[1,2,3].map(i => <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 bg-slate-200" alt="User" />)}
               </div>
               <span className="text-[10px] font-black uppercase tracking-widest opacity-30">42 Online</span>
            </div>
            
            <div className="h-8 w-[1px] bg-slate-200 dark:bg-white/10 hidden sm:block"></div>

            <button className="relative p-3 hover:bg-slate-200 dark:hover:bg-white/10 rounded-2xl transition-all group">
              <Bell size={22} className="opacity-70 group-hover:scale-110 transition-transform" />
              <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-red-500 border-2 border-white dark:border-gray-900 rounded-full animate-ping"></span>
            </button>
          </div>
        </header>

        {/* Dynamic Page Container */}
        <div className="flex-1 p-6 lg:p-12">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
