import SingleRoom from "components/SingleRoom";
import { lg } from "constants/MediaQueries";
import useWindowSize from "hooks/useWindowSize";
import AppLayout from "layouts/AppLayout";
export default function Room() {
  const { width } = useWindowSize();

  return (
    <AppLayout variant="narrow" navHide={(width as number) < lg ? true : false}>
      <SingleRoom />
    </AppLayout>
  );
}
