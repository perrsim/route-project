import {Link, useNavigate} from 'react-router-dom';
import Classes from './Home.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function HomePage(){

    const navigate = useNavigate();
    
    function navigateHandler(){
        navigate('/products');
    }


    return (
        <div className={Classes.header}>
            <h1>My Home Page</h1>
            <p>Go to <Link to='products'>List of product </Link></p>
            <button onClick={navigateHandler}>Go to products Page</button>
        </div>
        );
   

}

export default HomePage;