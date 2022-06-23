import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
    const [category, setCategory] = useState('general');
    const [noticias, setNoticias] = useState([]);
    const [page, setPage] = useState(1);
    const [totalNoticias, setTotalNoticias] = useState(0);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=${
                import.meta.env.VITE_API_KEY
            }`;
            const { data } = await axios(url);
            setNoticias(data.articles);
            setTotalNoticias(data.totalResults);
            setPage(1); // Cuando cambie de category, regresar page=1
        };
        consultarAPI()
            .then((r) => r)
            .catch((e) => console.log(e));
    }, [category]);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=ar&page=${page}&category=${category}&apiKey=${
                import.meta.env.VITE_API_KEY
            }`;
            const { data } = await axios(url);
            setNoticias(data.articles);
            setTotalNoticias(data.totalResults);
        };
        consultarAPI()
            .then((r) => r)
            .catch((e) => console.log(e));
    }, [page]);

    const handleChangeCategory = (e) => {
        setCategory(e.target.value);
    };

    const handleChangePage = (e, value) => {
        setPage(value);
    };

    return (
        <NoticiasContext.Provider
            value={{
                category,
                handleChangeCategory,
                noticias,
                totalNoticias,
                handleChangePage,
                page,
            }}
        >
            {children}
        </NoticiasContext.Provider>
    );
};

export { NoticiasProvider };
export default NoticiasContext;
