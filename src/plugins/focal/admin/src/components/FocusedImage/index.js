import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FocusedImage } from "image-focus";

const Image = styled.img`
  transition: top 0.25s ease-in-out, left 0.25s ease-in-out;
`;

const FocusedImageComponent = ({ imageSrc, x, y }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current !== null) {
      new FocusedImage(imageRef.current, {
        focus: {
          x,
          y,
        },
      });
    }
  }, [x, y]);

  return <Image alt="Focused" ref={imageRef} src={imageSrc} />;
};

FocusedImageComponent.defaultProps = {
  x: 0,
  y: 0,
};

FocusedImageComponent.propTypes = {
  imageSrc: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
};

export default FocusedImageComponent;
