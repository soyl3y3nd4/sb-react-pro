import './mylabel.css';

export interface MyLabelProps {
  /**
  * This is the label text
  * @default 'No Label'
  */
  label: string;
  /**
   * This is the size for the label
   * @default normal
  */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * This transforms the label to all caps
   * @default false
   **/
  allCaps?: boolean;
  /**
   * This is the color for the label
   */
  color: 'primary' | 'secondary' | 'tertiary';
  /**
   * Custom color for the label
   */
  fontColor?: string;
  /**
   * Custom color for the background
   * @default 'transparent' 
   */
  backgroundColor?: string;
};

export const MyLabel = ({
  allCaps = false,
  backgroundColor = 'transparent',
  color = 'primary',
  label = 'No Label',
  size = 'normal',
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
};

export default MyLabel;
