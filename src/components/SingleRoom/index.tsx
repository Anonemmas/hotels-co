import PhotoAndTitle from "./Photos_Title";
import PricingAndDescription from "./Pricing_Description";
import ThingsToKnow from "./ThingsToKnow";
import useSingleRoom from "./useSingleRoom";

export default function SingleRoom() {
  const { back, width, room, isLoading } = useSingleRoom();

  return (
    <div className="mb-16 flex flex-col gap-8 lg:mb-8">
      <PhotoAndTitle
        back={back}
        isLoading={isLoading}
        room={room}
        width={width as number}
      />
      <PricingAndDescription
        isLoading={isLoading}
        room={room}
        width={width as number}
      />
      <ThingsToKnow isLoading={isLoading} room={room} />
    </div>
  );
}
