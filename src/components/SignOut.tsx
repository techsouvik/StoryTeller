import { signOut } from "@/utils/auth";
import { Button } from "./ui/button";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button className="bg-green-800 hover:bg-green-900" type="submit">
        SignOut
      </Button>
    </form>
  );
}
