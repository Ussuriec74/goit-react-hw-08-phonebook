import { HeaderNavLink } from "./Navigation.styled";
import { useAuth } from "hooks/useAuth";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <HeaderNavLink to="/">
        Home
      </HeaderNavLink>
      {isLoggedIn && (
        <HeaderNavLink to="/contacts">
          Phonebook
        </HeaderNavLink>
      )}
    </nav>
  );
};