import { Popover, List } from '@mui/material';
import UserAuthorized from '../UserAuthorized';

export default function UserOptionsPopover({anchorEl, handleClose}) {
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <List>
                <UserAuthorized />
            </List>
        </Popover>
    )
}
