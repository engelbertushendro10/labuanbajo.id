export default function AdminNavbar() {
  return (
    <nav className="fixed top-0 left-[250px] right-0 h-[70px] bg-primary flex items-center justify-between px-8 z-[870]">
      <div className="flex items-center gap-4">
        <button className="text-white lg:hidden">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div className="hidden md:flex items-center bg-white/10 rounded-full px-4 py-1 gap-2">
          <span className="material-symbols-outlined text-white/70 text-[20px]">search</span>
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent border-none focus:ring-0 text-white placeholder:text-white/50 text-sm"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-white cursor-pointer group">
          <img 
            src="https://ui-avatars.com/api/?name=Admin+Bajo&background=fff&color=6777ef" 
            alt="Avatar" 
            className="w-8 h-8 rounded-full border-2 border-white/20"
          />
          <span className="font-semibold text-sm hidden sm:block">Hi, Admin Bajo</span>
        </div>
      </div>
    </nav>
  );
}
