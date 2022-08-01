const TextDescription = ({ text }) => (
  <div className='flex flex-col w-full align-center justify-center'>
    <span className='text-zinc-100 text-lg font-bold'>{text}</span>
    <hr className='text-zinc-100 w-full h-2' />
  </div>
);

export { TextDescription };
