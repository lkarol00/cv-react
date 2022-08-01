import {
  FaUser,
  FaLanguage,
  FaBriefcase,
  FaGraduationCap,
  FaGamepad,
  FaBook,
} from 'react-icons/fa';

const IconBox = ({ text }) => {
  const style = { color: '#c026d3' };
  return (
    <div className='flex-none flex bg-zinc-200 w-12 h-11 rounded-full items-center content-center justify-center'>
      {text === 'Perfil' && <FaUser style={style} size={37} />}
      {text === 'Idiomas' && <FaLanguage style={style} size={37} />}
      {text === 'Información laboral' && (
        <FaBriefcase style={style} size={37} />
      )}
      {text === 'Información académica' && (
        <FaGraduationCap style={style} size={37} />
      )}
      {text === 'Hobbies' && <FaGamepad style={style} size={37} />}
      {text === 'Cursos afines de la universidad' && (
        <FaBook style={style} size={37} />
      )}
    </div>
  );
};

export { IconBox };
