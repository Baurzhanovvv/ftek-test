import React from "react";

const CargoTable = ({ cargoList, updateCargoStatus }) => {
    const getStatusClass = (status) => {
        switch (status) {
            case "Ожидает отправки":
                return "text-warning";
            case "В пути":
                return "text-primary";
            case "Доставлен":
                return "text-success";
            default:
                return "";
        }
    };

    const handleStatusChange = (id, newStatus, departureDate) => {
        const currentDate = new Date();
        const departure = new Date(departureDate);
        if (newStatus === "Доставлен" && departure > currentDate) {
            alert("Ошибка: Груз нельзя пометить как 'Доставлен', если дата отправления в будущем.");
            return;
        }
        updateCargoStatus(id, newStatus);
    };

    return (
        <table className="table mt-4">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Статус</th>
                    <th>Отправление</th>
                    <th>Назначение</th>
                    <th>Дата</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                {cargoList.map((cargo) => (
                    <tr key={cargo.id}>
                        <td>{cargo.id}</td>
                        <td>{cargo.name}</td>
                        <td className={getStatusClass(cargo.status)}>{cargo.status}</td>
                        <td>{cargo.origin}</td>
                        <td>{cargo.destination}</td>
                        <td>{cargo.departureDate}</td>
                        <td>
                            <select
                                className="form-select"
                                value={cargo.status}
                                onChange={(e) =>
                                    handleStatusChange(cargo.id, e.target.value, cargo.departureDate)
                                }
                            >
                                <option>Ожидает отправки</option>
                                <option>В пути</option>
                                <option>Доставлен</option>
                            </select>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CargoTable;
