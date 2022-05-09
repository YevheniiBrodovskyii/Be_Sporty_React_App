import { MrMiyagi } from "@uiball/loaders";

import { LoaderContent, LoaderTitle } from "./styled.js";

function Loader() {
  return (
    <LoaderContent>
      <MrMiyagi size={250} lineWeight={3.5} speed={1} color="white" />
      <LoaderTitle>Loading...</LoaderTitle>
    </LoaderContent>
  );
}

export default Loader;
