import axios from "axios";
import { createContext, useState, Children, useEffect } from "react";
import { options } from '../utils/constants';

export const YoutubeContext = createContext();

// context'te tutulan verileri bütün uygulamaya aktaracak.
export const YoutubeProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState({
        name: 'New',
        type: 'category'
    });

    const [videos, setVideos] = useState(null);

    // selected kategorisinin değşimini izleme
    useEffect(() => {
        // eski videoları sil
        setVideos(null);
        // seçeneğin tipi kategori ise verileri çek 
        if (selectedCategory.type === 'category') {
            fetchCategory(selectedCategory.name);
        }
    }, [selectedCategory]);

    // Youtube'dan verileri çekme
    const fetchCategory = (category) => {
        axios
            .get(`https://youtube138.p.rapidapi.com/search/?q=${category}`, options)
            .then((res) => setVideos(res.data.contents))
            .catch((err) => console.log(err));
    };

    return (
        <YoutubeContext.Provider
            value={{ selectedCategory, setSelectedCategory, videos }}>
            {children}
        </YoutubeContext.Provider>
    );
};