import { Box } from "components/Box";
import { HeaderNavLink } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <Box mr={5}>
      <HeaderNavLink to="/register">
        Sign up
      </HeaderNavLink>
      <HeaderNavLink to="/login">
        Log in
      </HeaderNavLink>
    </Box>
  );
};
