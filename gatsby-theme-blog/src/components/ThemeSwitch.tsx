/** @jsx jsx */
import { jsx } from "theme-ui";
import ColorToggleIcon from "../icons/ColorToggleIcon";

type Props = {
  changeTheme: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ThemeSwitch = ({ changeTheme }: Props) => (
  <button
    type="button"
    sx={{
      variant: `buttons.transparent`,
      p: 1,
    }}
    title="Change color mode"
    onClick={changeTheme}
  >
    <ColorToggleIcon />
  </button>
);

export default ThemeSwitch;
