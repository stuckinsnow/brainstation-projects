import { Link } from 'react-router-dom';
import './DeletePage.scss'; 

function DeletePage() {

    return (

      <>
        <div className=''>File successfully deleted.</div>
        <Link to="/">Home</Link>
      </>

    );
}

export default DeletePage;