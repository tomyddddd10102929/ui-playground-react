import { useRef, useState } from "react";
import "./App.css";
import { Sidebar } from "./components/sidebar/Sidebar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <header className="app-header">
        <button
          ref={hamburgerRef}
          className="hamburger"
          onClick={() => setSidebarOpen((prev) => !prev)}
          aria-label="メニュー"
        >
          <span className="hamburger-icon">
            <span />
            <span />
            <span />
          </span>
        </button>
      </header>

      <Sidebar
        opened={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        excludeNodes={[hamburgerRef.current]}
      />

      <main className="app-main">
        <h1>Main Content</h1>
        <p>サイドバーはハンバーガーメニューから開閉できます。</p>
      </main>
    </>
  );
}

export default App
