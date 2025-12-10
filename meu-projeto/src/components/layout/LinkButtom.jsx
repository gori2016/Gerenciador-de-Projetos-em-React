import styles from './LinkButtom.module.css'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function LinkButtom({ to, text }) {
    return (
        <div>
            <Link className={`btn btn-dark ${styles.btnCustom}`} to={to}>
                {text}
            </Link>

        </div>
    )
}
export default LinkButtom 