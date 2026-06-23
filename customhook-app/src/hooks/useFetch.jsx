import { useState, useEffect } from 'react';
function useFetch(url, count) {
    const [output, setoutput] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => { setoutput(data); })
    }, []);
    return output.slice(0, count);
}
export default useFetch;
