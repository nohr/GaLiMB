import MenuProvider from "context";
import { Feedback, ReadMe } from "ui/Modals";
import MenuModal from "./MenuModal";
import { MenuToggle } from "./MenuToggle";

export default function Menu() {
  return (
    <MenuProvider>
      <MenuToggle />
      <MenuModal />
      <ReadMe />
      <Feedback />
    </MenuProvider>
  );
}
