import { AiFillBell, AiOutlineSearch, AiFillYoutube, } from 'react-icons/ai';
import {MdKeyboardVoice} from 'react-icons/md'
import {PiTelevisionSimpleFill} from 'react-icons/pi'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    // form gönderildiğinde çalışr
    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/results?search_query=${e.target[0].value}`);

        e.target[0].value = '';
    }
    return (
        <header className='flex justify-between items-center p-4 bg-[#0F0F0F] text-[#fff]'>
            <Link to={'/'} className='flex items-center gap-3 text-2xl'>
                <AiFillYoutube className='text-red-500 text-5xl' />
                <h1 className='font-medium'>Youtube</h1>
            </Link>

            <form
                onSubmit={handleSubmit}
                className='flex items-center place-items-center bg-white rounded'>
                <input
                    className='rounded-3xl px-9 py-1 text-black outline-none'
                    placeholder="Ara"
                    type="text" />
                <button
                    className='mr-3 text-black text-2xl'>
                    <AiOutlineSearch /></button>
            </form>
            <div className='flex gap-10 text-2xl cursor-pointer'>
            <MdKeyboardVoice/>
            <PiTelevisionSimpleFill/>
            <AiFillBell/>
            </div>
        </header>
    );
};
export default Header;