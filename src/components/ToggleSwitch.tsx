import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// TODO : make atom and implement it
// Define the types for the ToggleSwitch props
interface ToggleSwitchProps {
  checked?: boolean;  // Optional prop for the initial checked state
  onChange?: (checked: boolean) => void;  // Optional callback when the switch changes
  disabled?: boolean;  // Optional prop for disabling the switch
}

// Wrapper for the switch
const SwitchWrapper = styled(motion.div)<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

// Hidden input to manage the state of the switch
const SwitchInput = styled(motion.input)`
  display: none;
`;

// Label for the switch, styled and animated
const SwitchLabel = styled(motion.label)<{ isChecked: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  width: 40px;  // Width decreased
  height: 22px;  // Height decreased
  background-color: ${({ isChecked }) => (isChecked ? '#4CAF50' : '#ccc')};
  border-radius: 22px;  // Radius adjusted to match new height
  transition: background-color 0.15s linear;  // Linear background color transition
`;

// Handle of the switch, styled and animated
const SwitchHandle = styled(motion.div)`
  position: absolute;
  top: 2px;  // Adjusted to fit the smaller switch
  left: 2px;  // Adjusted to fit the smaller switch
  width: 18px;  // Size decreased
  height: 18px;  // Size decreased
  background-color: white;
  border-radius: 50%;
  transition: transform 0.15s linear;  // Linear transition for handle movement
`;

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked = false, onChange, disabled = false }) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  // Handle the toggle action
  const handleClick = () => {
    if (disabled) return;
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    if (onChange) onChange(newCheckedState);
  };

  return (
    <SwitchWrapper onClick={handleClick} disabled={disabled}>
      <SwitchInput
        type="checkbox"
        checked={isChecked}
        readOnly
        aria-checked={isChecked}
        role="switch"
      />
      <SwitchLabel
        isChecked={isChecked}
        initial={{ backgroundColor: '#ccc' }}
        animate={{ backgroundColor: isChecked ? '#4CAF50' : '#ccc' }}
        transition={{ duration: 0.05, ease: 'linear' }}
      >
        <SwitchHandle
          initial={{ x: 0 }}
          animate={{ x: isChecked ? 18 : 0 }}  // Adjusted for smaller switch
          transition={{ duration: 0.05, ease: 'linear' }}
        />
      </SwitchLabel>
    </SwitchWrapper>
  );
};

export default ToggleSwitch;
