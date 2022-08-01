const BulletColumnText = ({ description }) => (
  <div className='flex gap-2 items-center'>
    <div className='bullet-style'> </div>
    <div className='flex flex-col text-fuchsia-600 font-semibold'>
      <span>Empresa</span>
      <span>Cargo</span>
      <span>Fecha</span>
    </div>
    <div className='flex flex-col'>
      <span>{description.company}</span>
      <span>{description.position}</span>
      <span>{description.date}</span>
    </div>
  </div>
);

export { BulletColumnText };
