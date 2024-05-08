import React from "react";

export const MyError: React.FC = React.memo((): JSX.Element => {
  return (
    <div>
      <h2>Oops!</h2>
      <h3>Error 404</h3>
      <p>Page is not definded</p>
      <p>Try again, i'm sorry</p>
    </div>
  );
});
