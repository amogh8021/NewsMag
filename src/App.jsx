import { useState } from "react";
import Navbar from "./Components/Navbar";
import NavBoard from "./Components/NavBoard";

function App() {
  const [category, setCategory] = useState("general");

  return (
    <>
      <Navbar setCategory={setCategory} />
      <NavBoard category={category} />
    </>
  );
}

export default App;
