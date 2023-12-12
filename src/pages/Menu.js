import React from "react";

import css from "./menu.module.css";
import Card from "../components/Card";
import Loading from "../utils/Loading";

const Menu = () => {
    const [data, setData] = React.useState([]);
    const [errorHandler, setErrorHandler] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        const abortController = new AbortController();
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(
                    `https://pizzabackend-6am6.onrender.com/api/v1/products`,
                    {
                        signal: abortController.signal,
                    }
                );
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                const result = await response.json();
                setIsLoading(false);

                setData(result.data);
            } catch (error) {
                console.log(error);
                setErrorHandler(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
        return () => {
            abortController.abort();
        };
    }, []);
    let content = null;
    content = (
        <div className={css.row}>
            {data?.map((item) => (
                <Card key={item._id} {...item} />
            ))}
        </div>
    );
    let loading = (
        <div className={css.loading}>
            <Loading />
        </div>
    );
    return (
        <div className={css.container}>
            {isLoading ? loading : content}
            {errorHandler && <p>Something went wrong</p>}
        </div>
    );
};

export default Menu;
