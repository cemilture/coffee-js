import { useSelector } from "react-redux";

const CoffeeList = () => {
  const filteredCoffees = useSelector((state) => state.filteredCoffees);

  return (
    <ul>
      {filteredCoffees.map((coffee) => (
        <li key={coffee.id}>
          <strong>{coffee.title}</strong>
          <p>{coffee.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default CoffeeList;
