import { CardGeneral } from 'components/card/CardGeneral';
import { Profile } from 'components/profile/Profile';
import React from 'react';

const Home = () => {
  const contentLanguages = ['Inglés- B2', 'Francés - A2', 'Español - Nativo'];
  const contentProfile = [
    'Soy estudiante de décimo semestre de Ingeniería de Sistemas en la Universidad de Antioquia, siento gran interés por la parte de desarrollo de páginas web y aplicaciones. Soy una persona responsable, dedicada, comprometida, trabajo bien en equipo y tengo la capacidad de aprender rápido.',
  ];
  const contentWorkInfo = [
    {
      company: 'Universidad de Antioquia',
      position: 'Auxiliar de programación',
      date: 'Agosto, 2019 - Octubre, 2020',
    },
    {
      company: 'Globant',
      position: 'TestAutomationEngineer',
      date: 'Diciembre, 2020 - actual',
    },
  ];
  const contentStudyInfo = [
    {
      school: 'Institución Educativa Centro Formativo de Antioquia CEFA',
      career:
        'Bachillerato Técnico en Informática con énfasis en Desarrollo de Software',
      date: 'Medellín, 2016',
    },
    {
      school: 'Universidad de Antioquia',
      career: 'Ingeniería de Sistemas',
      date: 'Medellín, 2017 - actual',
    },
  ];
  const contentPersonalInfo = {
    email: 'lkaroldaniela1@gmail.com',
    github: 'lkarol00',
    linkedin: 'karol-alzate-mejia',
  };
  const contentHobbies = [
    'Ver anime',
    'Bailar',
    'Tejer',
    'Aprender nuevos idiomas',
  ];
  const contentLikedSubjects = [
    'Desarrollo de aplicaciones empresariales',
    'Matemáticas discretas II',
    'Sistemas operativos',
    'Modelos y simulación II',
    'Pruebas de software',
  ];

  return (
    <main className='bg-zinc-200 w-full min-w-[410px] h-full p-3 lg:h-screen'>
      <div className='bg-gradient-to-r from-fuchsia-600 via-sky-600 to-teal-400 rounded-2xl h-full w-full'>
        <div>
          <Profile description={contentPersonalInfo} />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8'>
          <CardGeneral text='Perfil' description={contentProfile} />
          <CardGeneral
            text='Información académica'
            description={contentStudyInfo}
          />
          <CardGeneral
            text='Información laboral'
            description={contentWorkInfo}
          />
          <CardGeneral text='Hobbies' description={contentHobbies} />
          <CardGeneral text='Idiomas' description={contentLanguages} />
          <CardGeneral
            text='Cursos afines de la universidad'
            description={contentLikedSubjects}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
