import { FaUser } from 'react-icons/fa';

const ProfileIcon = () => {
  const style = { color: '#f4f4f5' };
  return (
    <div className='flex-none flex w-44 h-44 bg-gradient-to-r from-teal-400 via-sky-600 to-fuchsia-600 border-2 border-zinc-100 rounded-full items-center content-center justify-center'>
      <FaUser style={style} size={110} />
    </div>
  );
};

export { ProfileIcon };
