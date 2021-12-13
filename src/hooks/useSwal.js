import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { codeMessage } from '../helpers/CodeMessage';
const useSwal = (page) => {
    const [statusCode, setStatusCode] = useState(null)  
    useEffect(() => {
        if(page && statusCode) {
            Swal.fire({
                title:codeMessage[page][statusCode],
            });        
        }
    }, [statusCode, page]);
    
    return {
        setStatusCode
    };
}
export default useSwal;
