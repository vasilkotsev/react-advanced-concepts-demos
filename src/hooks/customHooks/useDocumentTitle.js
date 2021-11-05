import { useEffect } from "react";

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
    console.log("useEffect");
    return () => {
      console.log("Clean UP");
    };
  });
}
