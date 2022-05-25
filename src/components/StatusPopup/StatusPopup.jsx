import { StatusMessage } from "./styled.js";

function StatusPopup({ message }) {
  return <StatusMessage active={message}>{message}</StatusMessage>;
}

export default StatusPopup;
