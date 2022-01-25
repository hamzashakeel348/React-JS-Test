import React, { useState } from "react";
import ScreenOne from "./views/screenOne";
import ScreenThree from "./views/screenThree";
import ScreenTwo from "./views/screenTwo";

function SignUp() {
  const [pageCount, setPageCount] = useState(1);
  return (
    <>
      {pageCount == 1 && <ScreenOne increasePageCount={setPageCount} />}
      {pageCount == 2 && <ScreenTwo increasePageCount={setPageCount} />}
      {pageCount == 3 && <ScreenThree increasePageCount={setPageCount} />}
    </>
  );
}

export default SignUp;
