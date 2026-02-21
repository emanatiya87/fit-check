import { CardComponent } from "./Card";
export default function Products() {
  return (
    <div className="w-[85vw] m-auto  flex flex-wrap items-center content-center">
      <CardComponent
        title=" كارديجان رمضان | Cardigan"
        price="400"
        lastPrice="500"
        imgSrc="/cardkin.jpg"
      />
    </div>
  );
}
