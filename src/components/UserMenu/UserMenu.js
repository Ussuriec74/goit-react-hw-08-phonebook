import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { logOut } from "redux/auth/operations";
import { Box } from "components/Box";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box>
      <p>Welcome {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Box>
  )
}
