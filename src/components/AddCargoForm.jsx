import React, { useState } from "react";

const AddCargoForm = ({ addCargo }) => {
    const [form, setForm] = useState({
        name: "",
        origin: "",
        destination: "",
        departureDate: "",
    });

    const cities = ["Москва", "Казань", "Санкт-Петербург", "Екатеринбург"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, origin, destination, departureDate } = form;
        if (!name || !origin || !destination || !departureDate) {
            alert("Все поля должны быть заполнены.");
            return;
        }

        const newCargo = {
            id: `CARGO${Math.random().toString().slice(2, 8)}`,
            name,
            status: "Ожидает отправки",
            origin,
            destination,
            departureDate,
        };

        addCargo(newCargo);
        setForm({ name: "", origin: "", destination: "", departureDate: "" });
    };

    return (
        <form className="mt-4" onSubmit={handleSubmit}>
            <div className="row g-3">
                <div className="col-md-3">
                    <input
                        type="text"
                        name="name"
                        placeholder="Название груза"
                        className="form-control"
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-2">
                    <select
                        name="origin"
                        className="form-select"
                        value={form.origin}
                        onChange={handleChange}
                    >
                        <option value="">Пункт отправления</option>
                        {cities.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-2">
                    <select
                        name="destination"
                        className="form-select"
                        value={form.destination}
                        onChange={handleChange}
                    >
                        <option value="">Пункт назначения</option>
                        {cities.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-3">
                    <input
                        type="date"
                        name="departureDate"
                        className="form-control"
                        value={form.departureDate}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-2">
                    <button type="submit" className="btn btn-primary w-100">
                        Добавить
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddCargoForm;
