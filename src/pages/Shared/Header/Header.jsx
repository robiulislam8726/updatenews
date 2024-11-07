import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <p>Journalism Without Fear or favour</p>
            <p className='text-xl'> {moment().format("dddd, MMMM Do, YYYY, h:mm A")}</p>
        </div>
    );
};
export default Header;