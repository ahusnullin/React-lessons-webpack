import {Button} from "@mui/material";
import {changeName, toggleProfile} from "store/profile/actions";
import {useDispatch, useSelector} from "react-redux";
import {iProfileState} from "store/profile/reduser";
import TextField from '@mui/material/TextField';
import {useState} from "react";

export const ProfilePage = () => {
  const visible = useSelector((state: iProfileState) => state.visible);
  const name = useSelector((state: iProfileState) => state.name);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState(name);


  return <div>
    <h1>
      Профиль {name}
    </h1>

    <div>
      <TextField id="outlined-basic"
                 label="Имя пользователя"
                 variant="outlined"
                 defaultValue={name}
                 onChange={(e) => {
                   setNewName(e.target.value)
                 }}
      />
      <br/><br/>

      <Button variant={"contained"} onClick={() => { dispatch(changeName(newName)) }}>Изменить имя</Button>
    </div>

    <br/><br/>
    <hr/>
    <br/><br/>

    <div>
      <input type="checkbox" checked={visible} readOnly />
      Видимость
      <Button variant={"contained"} onClick={() => { dispatch(toggleProfile()) }}>Изменить видимость</Button>
    </div>
  </div>;
};
