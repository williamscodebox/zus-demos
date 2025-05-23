import type { WrappedComponentProps } from "../types/access-control.types";

function Authorized({
  message,
  userName,
  userPermissions,
}: WrappedComponentProps) {
  return (
    <div>
      <h1>{message}</h1>
      <p>Welcome, {userName}</p>
      <p>Your permissions: {userPermissions?.join(", ")}</p>
    </div>
  );
}

export default Authorized;
