import { useCollection } from "../hooks/useCollection";
import Avatar from "./Avatar";

export default function OnlineUsers() {
    const {error, documents} = useCollection('users')

  return (
    <div>
      <h2>All Users</h2>
    </div>
  );
}
