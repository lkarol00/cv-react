import { TextDescription } from 'components/card/content/TextDescription';
import { IconBox } from 'components/card/content/IconBox';
import { ContentDescription } from 'components/card/content/ContentDescription';

const CardGeneral = ({ text, description }) => (
  <div className='flex flex-col w-full h-72 bg-stone-100 rounded-2xl'>
    <div className='flex w-full h-14 gap-1 pl-4 pt-4'>
      <IconBox text={text} />
      <TextDescription text={text} />
    </div>
    <ContentDescription text={text} description={description} />
  </div>
);

export { CardGeneral };
