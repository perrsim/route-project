import {Link, useNavigate} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function HomePage(){

    const navigate = useNavigate();
    
    function navigateHandler(){
        navigate('/products');
    }


    return (
        <div>
            <h1>My Home Page</h1>
            <p>Go to <Link to='products'>List of product </Link></p>
            <button onClick={navigateHandler}>Confirm</button>
        </div>
        );
   

}

export default HomePage;