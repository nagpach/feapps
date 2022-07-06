import React from 'react';
//import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  //const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const mode = primary ? 'bg-blue-400 m-2 p-2  font-bold rounded-md text-gray'  : 'bg-green-400 m-2 p-2 text-2xl font-bold rounded-md text-block';
  let sizeClass;
  if (size == 'small' ) {
    sizeClass =  'text-xl';
  } else if (size == 'medium' ) {
    sizeClass =  'text-2xl';
  } else if (size == 'large' ) {
    sizeClass =  'text-4xl';
  }
  
  
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode, sizeClass].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
