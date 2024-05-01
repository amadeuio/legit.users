import { useRef } from "react";
import { useEffect, useState } from "react";
import styles from "./Collapse.module.scss";

// Utility component that collapses or expands children passed to it, based on the isExpanded boolean
// Solves the problem of having to use fixed height for animations, thanks to calculating the height in JS
const Collapse = ({ isExpanded, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        setContentHeight(ref.current.clientHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [children]);

  return (
    <div
      className={styles.collapse}
      style={{
        maxHeight: isExpanded ? contentHeight : 0,
      }}>
      <div ref={ref}>{children}</div>
    </div>
  );
};

export default Collapse;
