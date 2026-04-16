import { useClickOutside } from "../../hooks/use-click-outside";
import "./Sidebar.css";

type SidebarProps = {
  opened: boolean;
  onClose: () => void;
  excludeNodes?: (HTMLElement | null)[];
};

export function Sidebar({ opened, onClose, excludeNodes }: SidebarProps) {
  const ref = useClickOutside<HTMLElement>(
    () => {
      if (opened) onClose();
    },
    null,
    excludeNodes
  );

  return (
    <>
      <div
        className={`sidebar-overlay${opened ? " visible" : ""}`}
        onClick={onClose}
      />
      <nav ref={ref} className={`sidebar${opened ? " open" : ""}`}>
        <ul className="sidebar-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </>
  );
}
