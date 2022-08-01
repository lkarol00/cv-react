import { nanoid } from 'nanoid';
import { BulletText } from 'components/card/content/BulletText';
import { BulletColumnText } from 'components/card/content/BulletColumnText';
import { BulletRowText } from 'components/card/content/BulletRowText';

const ContentDescription = ({ text, description }) => (
  <div className='flex flex-col h-full p-4 content-center justify-center gap-y-4'>
    {text === 'Información laboral' || text === 'Información académica'
      ? {
          'Información laboral': description.map((data) => (
            <BulletColumnText key={nanoid()} description={data} />
          )),
          'Información académica': description.map((data) => (
            <BulletRowText key={nanoid()} description={data} />
          )),
        }[text]
      : description.map((data) => <BulletText key={nanoid()} text={data} />)}
  </div>
);

export { ContentDescription };
