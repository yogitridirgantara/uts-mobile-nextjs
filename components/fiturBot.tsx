"use client";

import { useState } from "react";

type WeatherData = {
    cod: string;
    name: string;
    main?: { temp: number };
    weather?: { description: string; icon: string }[];
    wind?: { speed: number };
};

export default function FiturBot() {
    const [city, setCity] = useState<string>("");
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(false);

    const fetchWeather = async () => {
        if (!city) {
            alert("Masukkan nama kota terlebih dahulu");
            return;
        }
        setLoading(true);
        try {
            const apiKey = "0cdb29be99a4c4359da428437e8af5e1";
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=id`
            );
            const data: WeatherData = await response.json();
            if (data.cod === "404") {
                alert("Kota tidak ditemukan");
                setWeather(null);
            } else {
                setWeather(data);
            }
        } catch (error) {
            console.error("Gagal mengambil data cuaca:", error);
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className="max-w-lg w-70 sm:w-full mx-auto p-4 bg-white rounded-2xl shadow-lg space-y-4 mt-4 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 transition-all">
            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Cek Cuaca</h2>
            <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-3 sm:space-y-0">
                <input
                    type="text"
                    placeholder="Masukkan nama kota"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="flex-1 p-2 rounded-lg border dark:bg-gray-700 dark:text-white"
                />
                <button
                    onClick={fetchWeather}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                    Cari
                </button>
            </div>

            {loading && <p className="text-center text-gray-600 dark:text-gray-300">Memuat data cuaca...</p>}

            {weather && weather.main && weather.weather && weather.wind && (
                <div className="text-center space-y-2">
                    <h3 className="text-xl font-semibold">{weather.name}</h3>
                    <img
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt="icon cuaca"
                        className="mx-auto"
                    />
                    <p className="text-lg">{weather.weather[0].description}</p>
                    <p className="text-xl font-bold">{weather.main.temp}°C</p>
                    <p>Angin: {weather.wind.speed} m/s</p>
                </div>
            )}

            {!loading && !weather && <p className="text-center text-gray-500">Silakan cari kota untuk melihat cuaca.</p>}
        </div>
    );
}
