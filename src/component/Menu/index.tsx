import React from "react";
import { Link } from "react-router-dom";

export const Menu: React.FC = React.memo((): JSX.Element => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/addUser'}>Add user</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
});
