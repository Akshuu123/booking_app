export default function AdminLayout({ children }) {
    return (
      <div className="admin-layout">
        <h1>Admin Layout</h1>
        <main>{children}</main>
      </div>
    );
  }
  