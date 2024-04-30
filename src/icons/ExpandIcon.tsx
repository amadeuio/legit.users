interface ExpandIconProps {
  isExpanded: boolean;
  className?: string;
}

const ExpandIcon: React.FC<ExpandIconProps> = ({ isExpanded, className = "" }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24">
      {isExpanded ? (
        <path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z" />
      ) : (
        <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
      )}
    </svg>
  );
};

export default ExpandIcon;
