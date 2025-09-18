import { useState } from "react";
import "./App.css";
import { useClickOutside } from "./hooks/use-click-outside";

function App() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button onClick={() => setOpened(true)} style={{ position: "relative", zIndex: 1 }}>Open</button>
      {/* かぶせるdiv。openedがtrueのときbuttonの上に重ねる */}
      {opened && (
        <div
          ref={ref}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "white",
            color: "black",
            border: "1px solid black",
            padding: 20,
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          Click outside to close
        </div>
      )}
    </div>
  )
}

export default App
