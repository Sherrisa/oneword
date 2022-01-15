import React from "react";
import "../App.css";
import { ListRedHen } from "../components/ListRedHenComp";
import { ListBrownBear } from "../components/ListBrownBearComp";

function Books() {
  return (
    <div>
      <main>
        <h2>This is the Books Page</h2>
        <ListBrownBear />
        <ListRedHen />
      </main>
    </div>
  );
}
export default Books;
