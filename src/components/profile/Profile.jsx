import { ProfileIcon } from 'components/profile/ProfileIcon';
import { PersonalInfo } from 'components/profile/personalInfo/PersonalInfo';

const Profile = ({ description }) => (
  <div className='flex flex-col md:flex-row lg:flex-row gap-4 justify-center pt-4'>
    <div className='flex flex-col text-zinc-100 items-center gap-1'>
      <h1 className='text-3xl text-zinc-100 font-bold'>
        Karol Daniela Alzate M.
      </h1>
      <ProfileIcon />
      <span>Estudiante de Ingeniería de Sistemas</span>
      <span>Universidad de Antioquia</span>
    </div>
    <div className='flex'>
      <PersonalInfo description={description} />
    </div>
  </div>
);

export { Profile };
