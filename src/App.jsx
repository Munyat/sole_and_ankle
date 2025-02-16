import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import ShoeIndex from "./components/ShoeIndex";

// Import and start MirageJS server
import { makeServer } from "../server"; // Make sure this path is correct

// makeServer();

const App = () => {
  const [sortId, setSortId] = React.useState("newest");
  // const [shoes, setShoes] = React.useState([]);

  // React.useEffect(() => {
  //   fetch("/api/shoes")
  //     .then((res) => res.json())
  //     .then((data) => setShoes(data))
  //     .catch((err) => console.error("Error fetching shoes:", err));
  // }, []);

  // console.log(shoes);

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;
`;

export default App;
