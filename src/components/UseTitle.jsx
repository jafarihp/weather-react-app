import { useEffect } from "react";

const UseTitle = () => {
  useEffect((title) => {
    document.title = `${title} |وب اپلیکیشن هواشناسی`;
  }, []);
};

export default UseTitle;
