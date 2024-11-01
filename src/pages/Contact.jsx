
export default function Contact() {
  return (
    <section className='py-10 rounded-3xl bg-radial flex flex-col items-center justify-center text-[white]'>
    <div className='text-center mt-10'>
        <h1 className='md:text-[36px] text-gray-700 text-[24px] font-extrabold'>Contact Us</h1>
        <hr className=' text-secondary my-5 w-[70%] mx-auto'/>
        <p className='md:text-[36px] text-gray-300 text-[24px] font-light'>Feel free to contact us </p>
    </div>
    <form className=' w-[70%] pt-16 text-center'>
        <div className='sm:flex gap-2'>
            <input type='text' placeholder='First Name' className=' mt-10 outline-gray-500 bg-[transparent] rounded-full p-4 w-full text-[14px] border-2'/>
            <input type='text' placeholder='Last Name' className=' mt-10 outline-gray-500 bg-[transparent] rounded-full p-4 w-full text-[14px] border-2'/>
        </div>
        <div className='sm:flex gap-2'>
            <input type='email' placeholder='Email' className=' mt-10 outline-gray-500 bg-[transparent] rounded-full p-4 w-full text-[14px] border-2'/>
            <input type='phone' placeholder='Phone Number' className=' mt-10 outline-gray-500 bg-[transparent] rounded-full p-4 w-full text-[14px] border-2'/>
        </div>
        <input type='text' placeholder='Last Name' className='outline-gray-500  mt-10 bg-[transparent] rounded-full p-4 w-full text-[14px] border-2'/>
        <textarea placeholder='Tell Us Something' className='outline-gray-500 resize-none mt-10 bg-[transparent] rounded-3xl p-4 w-full h-[210px] text-[14px] border-2'/>
        <button className="mx-auto md:mx-0 mt-5 font-extrabold text-[12px] py-2 px-4 bg-linearR text-primary rounded-full w-[214px]">SEND TO HYDRA</button>
    </form>
</section>

  )
}
