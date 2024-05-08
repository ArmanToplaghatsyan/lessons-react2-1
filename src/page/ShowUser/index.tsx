import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteuser } from "../../store/reducer3";
import { IUser } from "../../type/type";

export const ShowUser: React.FC = React.memo((): JSX.Element => {
  const {users} = useSelector((state: any) => state)
  console.log(users);
  
  const dispatch = useDispatch();
  
  return (
    <div>
      <h2>Show User</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>&times;</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((elm:IUser) => {
              return(
              <tr key={elm.id}>
                <td>{elm.name}</td>
                <td>{elm.surname}</td>
                <td>{elm.age}</td>
                <td><button onClick={() => dispatch(deleteuser(elm.id))}>&times;</button></td>
              </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
});
