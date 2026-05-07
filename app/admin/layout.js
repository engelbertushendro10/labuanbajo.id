import Sidebar from "@/components/admin/Sidebar";
import AdminNavbar from "@/components/admin/AdminNavbar";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-surface">
      <Sidebar />
      <AdminNavbar />
      <main className="stisla-main-content">
        {children}
      </main>
    </div>
  );
}
