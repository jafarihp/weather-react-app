import { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `${title} |وب اپلیکیشن هواشناسی`;
    // eslint-disable-next-line
  }, []);
};

export default UseTitle;
