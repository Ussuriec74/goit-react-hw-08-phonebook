import { useDispatch } from "react-redux";
import { ImExit } from 'react-icons/im';
import { useAuth } from "hooks/useAuth";
import { logOut } from "redux/auth/operations";
import { Box } from "components/Box";
import { UserMenuText, ExitButton } from "./UserMenu.styled";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box display="flex" gridGap={3} mr={5}>
      <UserMenuText>Welcome, {user.name}</UserMenuText>
      <ExitButton type="button" onClick={() => dispatch(logOut())}>
        <ImExit />
      </ExitButton>
    </Box>
  )
}
