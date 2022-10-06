import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { logOut } from "redux/auth/operations";
import { Box } from "components/Box";
import { UserMenuText } from "./UserMenu.styled";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box display="flex" mr={5}>
      <UserMenuText>Welcome, {user.name}</UserMenuText>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Box>
  )
}
