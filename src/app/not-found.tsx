import Redirect from "@element/Redirect";

export default function NotFound() {
  return (
    <div>
      <Redirect url="/home" />
    </div>
  );
}
