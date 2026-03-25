import { motion } from "framer-motion";
import { useScrollFromBottom } from "../Hooks/useScrollFromBottom";

const ScrollFromBottom = ({ children }) => {
  const { ref, translateY } = useScrollFromBottom();

  return (
    <motion.div
      ref={ref}
      style={{
        position: "relative",
        y: translateY,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFromBottom;
