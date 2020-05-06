/** @jsx jsx */
import { jsx } from "theme-ui";

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
    <svg viewBox="0 0 32 32" width="24" height="24" fill="currentcolor" style={{ display: `block` }}>
      <circle cx="16" cy="16" r="14" fill="none" stroke="currentcolor" strokeWidth="4" />
      <path
        d="
            M 16 0
            A 16 16 0 0 0 16 32
            z
          "
      />
    </svg>
  </button>
);

export default ThemeSwitch;
