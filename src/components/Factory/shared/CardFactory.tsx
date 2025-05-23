import ImageCard from "../ImageCard";
import TextCard from "../TextCard";
import ProfileCard from "../ProfileCard";

function CardFactory({ type, data }: any) {
  switch (type) {
    case "image":
      return <ImageCard imageSrc={data.src} altText={data.alt} />;
    case "text":
      return <TextCard text={data.text} />;
    case "profile":
      return (
        <ProfileCard name={data.name} bio={data.bio} avatar={data.avatar} />
      );
    default:
      return <div>Unknown card type</div>;
  }
}

export default CardFactory;
