import {List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {iRoom} from "src/components/RoomsList/types";
import {FC} from "react";

export interface iRoomsListProps {
    roomsList: iRoom[]
}

export const RoomsList: FC<iRoomsListProps> = ({roomsList}) => {
    return <List>
        {roomsList.map((room, idx) => (
            <ListItemButton key={room.id} component="a" href="#simple-list">
                <ListItemIcon>
                    <SendIcon />
                </ListItemIcon>
                <ListItemText primary={room.name} />
            </ListItemButton>
        ))}
    </List>
}