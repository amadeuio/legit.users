// import styles from "./ChevronIcon.module.css";

interface ChevronIconProps {
  direction: "up" | "down" | "left" | "right";
  className?: string;
}

const ChevronIcon: React.FC<ChevronIconProps> = ({ direction, className = "" }) => {
  return (
    <>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24">
        {direction === "right" && (
          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
        )}
        {direction === "left" && <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />}
      </svg>
    </>
  );
};

export default ChevronIcon;
