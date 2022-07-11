import React, { useEffect, useRef } from "react";
import debounce from "lodash.debounce";
import PropTypes from "prop-types";
import { FocusPicker } from "image-focus";

const startingFocus = { x: 0, y: 0 };

const FocusPickerComponent = ({
  debounceTime = 200,
  imageSrc,
  onFocusChanged,
}) => {
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current !== null) {
      const debouncedOnFocusChanged = debounce(onFocusChanged, debounceTime);
      new FocusPicker(imageRef.current, {
        onChange: debouncedOnFocusChanged,
        focus: startingFocus,
      });
    }
  }, [debounceTime, onFocusChanged]);

  return <img alt="Focus picker" ref={imageRef} src={imageSrc} />;
};

FocusPickerComponent.defaultProps = {
  onFocusChanged: () => {},
};

FocusPickerComponent.propTypes = {
  debounceTime: PropTypes.number,
  imageSrc: PropTypes.string,
  onFocusChanged: PropTypes.func,
};

export default React.memo(FocusPickerComponent);
