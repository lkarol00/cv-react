const TextDescription = ({ text }) => (
  <div className='flex flex-col w-full align-center justify-center'>
    <span className='text-fuchsia-600 text-lg font-bold'>{text}</span>
    <hr className='bg-fuchsia-600 w-full h-1' />
  </div>
);

export { TextDescription };
