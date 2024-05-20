import { ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function UserAuthorized() {
  const navigate = useNavigate();

  const navigateToOrderList = () => {
    navigate("/order-list");
  }

  const logOut = () => {
    //TODO: Add log out logic
  }

  return (
    <>
        <ListItem button>
            <ListItemText primary="Order List" onClick={navigateToOrderList} />
        </ListItem>
        <ListItem button>
            <ListItemText primary="Log Out" onClick={logOut} />
        </ListItem>
    </>
  )
}
