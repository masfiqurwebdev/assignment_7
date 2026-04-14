

export default function Home() {

  return (
    <div className="container mx-auto mt-20 text-center  ">
       <h1 className='text-[48px] font-bold mb-5'>Friends to keep close in your life</h1>
       <p className='text-[#64748B] text-[16px] mb-8'>Your personal shelf of meaningful connections. Browse, tend, and nurture <br/> the relationships that matter most.</p>
       <button className='btn border-0 bg-[#244D3F] text-white mb-7'>+Add a Friend</button>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-15'>

        <div className=" sado px-6 py-8 mx-5">
          <h2 className="text-3xl mb-0.5">10</h2>
          <p className="text-[#64748B] text-[18px]">Total Friends</p>
        </div>

        <div className=" sado px-6 py-8 mx-5">
          <h2 className="text-3xl mb-0.5">3</h2>
          <p className="text-[#64748B] text-[18px]">On Track</p>
        </div>

        <div className=" sado px-6 py-8 mx-5">
          <h2 className="text-3xl mb-0.5">6</h2>
          <p className="text-[#64748B] text-[18px]">Need Attention</p>
        </div>

        <div className=" sado px-6 py-8 mx-5">
          <h2 className="text-3xl mb-0.5">12</h2>
          <p className="text-[#64748B] text-[18px]">Interactions This Month</p>
        </div>

        
      </div>

       
       
    </div>
  );
}
