import { FaUser, FaLanguage } from 'react-icons/fa';

const IconBox = ({ text }) => {
  const style = { color: '#c026d3' };
  return (
    <div className='flex-none flex bg-zinc-200 w-12 h-11 rounded-full items-center content-center justify-center'>
      {text === 'Perfil' && <FaUser style={style} size={37} />}
      {text === 'Idiomas' && <FaLanguage style={style} size={37} />}
    </div>
  );
};

export { IconBox };
