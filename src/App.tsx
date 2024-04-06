import "./App.css";
import { type ReactElement } from "react";
import { Grid } from "./components/grid/Grid.tsx";
import { Inspector } from "./components/inspector/Inspector.tsx";

function App(): ReactElement {
  return (
    <>
      <h1>Factory</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Grid />
        <Inspector />
      </div>
    </>
  );
}

export default App;
