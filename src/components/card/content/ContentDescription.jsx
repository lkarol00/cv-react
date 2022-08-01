import { nanoid } from 'nanoid';
import { BulletText } from 'components/card/content/BulletText';

const ContentDescription = ({ description }) => {
  return (
    <div className='flex flex-col h-full p-4 content-center justify-center gap-y-4'>
      {description.map((data) => (
        <BulletText key={nanoid()} text={data} />
      ))}
    </div>
  );
};

export { ContentDescription };
