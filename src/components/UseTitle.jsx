import { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `${title} |وب اپلیکیشن هواشناسی`;
  }, []);
};

export default UseTitle;
