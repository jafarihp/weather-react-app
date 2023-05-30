import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} |وب اپلیکیشن هواشناسی`;
  }, []);
};

export default useTitle;
