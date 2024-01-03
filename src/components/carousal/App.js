import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";

function Carousal() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
      )
    },
    {
      key: uuidv4(),
      content: <Card imagen="https://i.imgur.com/XWi3nRI.png" />
    },
    {
      key: uuidv4(),
      content: <Card imagen="https://i.imgur.com/XWi3nRI.png" />
    },
    {
      key: uuidv4(),
      content: <Card imagen="https://i.imgur.com/nAmRKAk.png" />
    }
  ];
  return (
    <div className="">
      <Carousel
        cards={cards}
        height="500px"
        width="100%"
        margin="0 auto"
        offset={200}
        showArrows={false}
      />
    </div>
  );
}

export default Carousal;
