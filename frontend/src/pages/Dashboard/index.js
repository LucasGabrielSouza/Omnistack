import Reactimport api from "../../services/api";
 {useEffect} from 'react';

export default function Dashboard(){
    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
            headers:{ user_id }
            });
            console.log(response.data);
        }

        loadSpots();
    }, []);
    return <div/>
}