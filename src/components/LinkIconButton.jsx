import { useState } from "react";

export const LinkIconButton = (props) => {
  const {
    imagePath,
    linkPath,
    position = "bottom-right",
    size = [50, 50],
  } = props;
  const [hover, setHover] = useState(false);

  const publicImagePath = process.env.PUBLIC_URL + imagePath;

  let positionStyle;
  switch (position) {
    case "top-left":
      positionStyle = styles.topLeft;
      break;
    case "top-right":
      positionStyle = styles.topRight;
      break;
    case "bottom-left":
      positionStyle = styles.bottomLeft;
      break;
    default:
      positionStyle = styles.bottomRight;
  }

  return (
    <a
      style={positionStyle}
      href={linkPath}
      target="_blank"
      rel="noreferrer noopener"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        style={hover ? hoverStyles.img : styles.img}
        src={publicImagePath}
        alt=""
        width={size[0]}
        height={size[1]}
      />
    </a>
  );
};

// Styles
const styles = {
  topLeft: {
    position: "absolute",
    top: "10px",
    left: "10px",
    fontSize: "0",
  },
  // ... other positions styles
  img: {
    objectFit: "cover",
    opacity: "0.5",
    transform: "rotate(0deg)",
    transition: "all 0.3s",
  },
};

const hoverStyles = {
  img: {
    ...styles.img,
    opacity: "1",
    transform: "rotate(360deg)",
  },
};
