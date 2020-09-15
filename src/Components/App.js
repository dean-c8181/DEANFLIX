import React from 'react';
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";

// Link는 Router안에 있어야 하기 때문에 Header.Js의 컴포넌트를 Router안에서 Import하게 변경

function App() {
  return (
    <>
      <Router>

      </Router>
      <GlobalStyles></GlobalStyles>
    </>
  );
}

export default App;