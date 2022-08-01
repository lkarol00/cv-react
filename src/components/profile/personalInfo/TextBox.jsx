import { FaGithub, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';

const TextBox = ({ text, description }) => {
  const style = { color: '#c026d3' };
  return (
    <div className='flex bg-zinc-50/40 rounded-r-3xl justify-between items-center p-1.5 pr-4'>
      <div className='flex flex-col text-zinc-100'>
        <span className='font-semibold'>{text}</span>
        <span>{description}</span>
      </div>
      <div className=''>
        {text === 'Correo electrónico' && (
          <FaMailBulk style={style} size={35} />
        )}
        {text === 'LinkedIn' && <FaLinkedinIn style={style} size={35} />}
        {text === 'GitHub' && <FaGithub style={style} size={35} />}
      </div>
    </div>
  );
};

export { TextBox };
