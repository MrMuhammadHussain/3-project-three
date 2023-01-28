import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="Highlight"
      pos={"fixed"}
      top={"4"}
      right={"4"}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      zIndex={"overlay"}
      {...props}
    />
  );
};
export default ColorModeSwitcher