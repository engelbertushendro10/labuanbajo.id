"use client";
import Sidebar from "@/components/admin/Sidebar";
import AdminNavbar from "@/components/admin/AdminNavbar";
import useToast from "@/lib/useToast";

export default function AdminLayout({ children }) {
  const { ToastComponent } = useToast();

  return (
    <div className="min-h-screen bg-surface">
      <Sidebar />
      <AdminNavbar />
      <main className="stisla-main-content">
        {children}
      </main>
      <ToastComponent />
    </div>
  );
}
