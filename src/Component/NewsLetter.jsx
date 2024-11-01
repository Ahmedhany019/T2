
export default function NewsLetter() {
  return (
    <div className="w-11/12 py-5 mx-auto">
    <div className='w-full bg-gray-200 h-full flex justify-center items-center px-2 py-14'>
        <div className='max-w-md w-full'>
            <h1 className='py-5 text-center text-3xl font-bold'>Subscribe for Exclusive Updates</h1>
            <div className='w-full flex'>
                <input className='w-full border focus:outline-none border-gray-400 focus:border-gray-400 h-10 p-2'/>
                <button className='bg-black hover:bg-slate-900 transition-all duration-300 ease-in text-white px-5'>Send</button>
            </div>
        </div>
    </div>
    </div>
  )
}
