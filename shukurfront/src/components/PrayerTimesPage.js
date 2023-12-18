import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopNavbar from "./TopNavbar";
import MainNavbar from "./MainNavbar";
const PrayerTimesPage = () => {
    const [prayerTimes, setPrayerTimes] = useState(null);

    useEffect(() => {
        const fetchPrayerTimes = async (lat, lng) => {
            try {
                const response = await axios.get(`https://namaztimes.kz/api/praytimes?lat=${lat}&lng=${lng}`);
                setPrayerTimes(response.data);
            } catch (error) {
                console.error('Error fetching prayer times:', error);
            }
        };

        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    fetchPrayerTimes(position.coords.latitude, position.coords.longitude);
                }, (error) => {
                    console.error('Error getting location:', error);
                });
            } else {
                console.log("Geolocation is not supported by this browser.");
            }
        };

        getLocation();
    }, []);

    return (
        <div>
            <h1>Prayer Times</h1>
            {prayerTimes ? (
                <div>
                    <p>Date: {prayerTimes.date}</p>
                    <p>Islamic Date: {prayerTimes.islamic_date}</p>
                    <p>Imsak: {prayerTimes.praytimes.imsak}</p>
                    <p>Fajr (Bamdat): {prayerTimes.praytimes.bamdat}</p>
                    <p>Sunrise (Kun): {prayerTimes.praytimes.kun}</p>
                    <p>Ishraq: {prayerTimes.praytimes.ishraq}</p>
                    <p>Kerahat: {prayerTimes.praytimes.kerahat}</p>
                    <p>Dhuhr (Besin): {prayerTimes.praytimes.besin}</p>
                    <p>Asr (Asriauual): {prayerTimes.praytimes.asriauual}</p>
                    <p>Asr (Second - Ekindi): {prayerTimes.praytimes.ekindi}</p>
                    <p>Isfirar: {prayerTimes.praytimes.isfirar}</p>
                    <p>Maghrib (Aqsham): {prayerTimes.praytimes.aqsham}</p>
                    <p>Ishtibaq: {prayerTimes.praytimes.ishtibaq}</p>
                    <p>Isha (Quptan): {prayerTimes.praytimes.quptan}</p>
                    <p>Tahajjud (Ishaisani): {prayerTimes.praytimes.ishaisani}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}

        </div>
    );
};

export default PrayerTimesPage;
