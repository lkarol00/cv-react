import { TextDescription } from 'components/profile/personalInfo/TextDescription';
import { TextBox } from 'components/profile/personalInfo/TextBox';

const PersonalInfo = ({ description }) => (
  <div className='flex flex-col w-96 gap-y-4'>
    <TextDescription text='Información personal' />
    <TextBox text='Correo electrónico' description={description.email} />
    <TextBox text='GitHub' description={description.github} />
    <TextBox text='LinkedIn' description={description.linkedin} />
  </div>
);

export { PersonalInfo };
