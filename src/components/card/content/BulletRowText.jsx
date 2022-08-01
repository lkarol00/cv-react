const BulletRowText = ({ description }) => (
  <div className='flex gap-2 items-center'>
    <div className='bullet-style'> </div>
    <div className='flex flex-col'>
      <span>{description.school}</span>
      <span>{description.career}</span>
      <span>{description.date}</span>
    </div>
  </div>
);

export { BulletRowText };
