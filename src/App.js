import { Box } from "@mui/material";
import { useRef } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";


function App() {
  /*   const myRef1 = useRef(null)
    const myRef2 = useRef(null)
    const myRef3 = useRef(null) */


  return (
    <Box>
      <Navbar /* myRef1={myRef1} myRef2={myRef2} myRef3={myRef3} */ />
      <Main /* myRef1={myRef1} myRef2={myRef2} myRef3={myRef3} */ />
    </Box>

  );
}

export default App;
