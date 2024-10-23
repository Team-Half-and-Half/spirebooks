import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Container, ToggleButton } from 'react-bootstrap';

/** ToggleSlider component to display a slider with a toggle button. */
const ToggleSlider = ({ id, checkedText, uncheckedText, defaultVal, min, max, step }) => {
  // define defaultVal if undef
  const setDefaultVal = (val) => {
    if ((val === undefined)) {
      return max / 2;
    }
    return val;
  };
  // set slider value with default value
  const [sliderValue, setSliderValue] = useState(setDefaultVal(defaultVal));

  // set toggle slider buttons to false
  const [checked, setChecked] = useState(false);

  return (
    <Container className="d-flex align-items-center height-auto my-2">
      <ToggleButton
        className="btn btn-outline-primary flex-fill w-75"
        style={{ maxWidth: '35%' }}
        id={id}
        type="checkbox"
        variant="outline-primary"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        {checked ? checkedText : uncheckedText}
      </ToggleButton>

      {/* conditionally renders the slider and value based on button */}
      {checked && (
        <>
          <Slider
            className="mx-4"
            value={sliderValue}
            onChange={(val) => setSliderValue(val)}
            min={min}
            max={max}
            step={step}
          />
          <small className="mb-0 align-self-center">{sliderValue}%</small>
        </>
      )}
    </Container>
  );
};

// Require data to be passed to this component
ToggleSlider.propTypes = {
  id: PropTypes.string.isRequired,
  checkedText: PropTypes.string.isRequired,
  uncheckedText: PropTypes.string.isRequired,
  defaultVal: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};

// define default value when undefined
ToggleSlider.defaultProps = {
  min: 0,
  max: 100,
  defaultVal: undefined, // set to undef to trigger calculation inside ToggleSlider
  step: 1,
};
export default ToggleSlider;
