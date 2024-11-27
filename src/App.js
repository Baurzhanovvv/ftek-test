import React, { useState } from "react";
import CargoTable from "./components/CargoTable";
import AddCargoForm from "./components/AddCargoForm";

const App = () => {
  const [cargoList, setCargoList] = useState([
    {
      id: "CARGO001",
      name: "Строительные материалы",
      status: "В пути",
      origin: "Москва",
      destination: "Казань",
      departureDate: "2024-11-24",
    },
    {
      id: "CARGO002",
      name: "Хрупкий груз",
      status: "Ожидает отправки",
      origin: "Санкт-Петербург",
      destination: "Екатеринбург",
      departureDate: "2024-11-26",
    },
  ]);

  const addCargo = (newCargo) => {
    setCargoList([...cargoList, newCargo]);
  };

  const updateCargoStatus = (id, newStatus) => {
    setCargoList(
      cargoList.map((cargo) =>
        cargo.id === id ? { ...cargo, status: newStatus } : cargo
      )
    );
  };

  return (
    <div className="container mt-4">
      <h1>Отслеживание грузов</h1>
      <AddCargoForm addCargo={addCargo} />
      <CargoTable cargoList={cargoList} updateCargoStatus={updateCargoStatus} />
    </div>
  );
};

export default App;
