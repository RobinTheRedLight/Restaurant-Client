import ItemCard from "../ItemCard/ItemCard";

const TabCard = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-5 p-5">
      {items.map((item) => (
        <ItemCard key={item._id} item={item}></ItemCard>
      ))}
    </div>
  );
};

export default TabCard;
