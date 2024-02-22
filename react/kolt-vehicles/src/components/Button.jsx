export default function Button({
  text = "Button",
  color = "red",
  onClick,
  textColor = "white",
}) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`px-4 break-keep py-1 rounded-md buttonas`}
      style={{ color: textColor, backgroundColor: color }}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
