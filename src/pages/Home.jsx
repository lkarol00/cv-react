import { CardGeneral } from 'components/card/CardGeneral';
import React from 'react';

const Home = () => {
  const contentLanguages = ['Inglés- B2', 'Francés - A2', 'Español - Nativo'];
  const contentProfile = [
    'Soy estudiante de décimo semestre de Ingeniería de Sistemas en la Universidad de Antioquia, siento gran interés por la parte de desarrollo de páginas web y aplicaciones. Soy una persona responsable, dedicada, comprometida, trabajo bien en equipo y tengo la capacidad de aprender rápido. Me gusta aprender mucho y más si son cosas relacionadas con mi carrera, también estoy llena de metas y siempre doy lo mejor de mí en lo que me proponga.',
  ];
  return (
    <main className='bg-zinc-300 w-full h-full p-3 lg:h-screen'>
      <div className='bg-gradient-to-r from-teal-400 via-sky-500 to-fuchsia-600 rounded-2xl h-full w-full md:grid md:grid-cols-1 lg:grid lg:grid-row-2'>
        <div>
          <h1 className='text-3xl text-zinc-100 font-bold'>
            Karol Daniela Alzate M.
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8'>
          <CardGeneral text='Idiomas' description={contentLanguages} />
          <CardGeneral text='Perfil' description={contentProfile} />
          <CardGeneral text='Perfil' description={contentProfile} />
          <CardGeneral text='Perfil' description={contentProfile} />
          <CardGeneral text='Perfil' description={contentProfile} />
        </div>
      </div>
    </main>
  );
};

export default Home;
