

function Banner() {
  return (

    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
<div>
    <h1 className='text-7xl'>Rohit's Daily Blog</h1>
    <h2 className='mt-5 md:mt-0'>
        welcome to {" "}
        <span className='underline decoration-4 decoration-[#F7AB0A]'>
            Every Developers 
        </span>{" "}
           Favourite Blog in the Devosphere 
    </h2>
</div>
<p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
    New Product features  the latest in technology the weekly dedugging nightmares & more!
</p>

    </div>

  );
}

export default Banner;
