/** @format */

const Heading = ({ heading }: { heading: string }) => {
  return (
    <div className='container mx-auto px-4'>
      <div className='flex items-center gap-4 my-12'>
        <h2 className='text-2xl md:text-3xl font-bold text-primary whitespace-nowrap'>
          {heading}
        </h2>
        <div className='w-full h-px bg-border' />
      </div>
    </div>
  );
};

export default Heading;
