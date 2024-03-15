
import bannerImage from '../../assets/images/2.png'
import profile from '../../assets/images/profile.png'
import buttonPng from '../../assets/images/Frame.png'
const Main = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row gap-5">
            <div className='max-w-full lg:max-w-[66%] shadow-2xl rounded-xl'>
                <div >
                    <img src={bannerImage} alt="" />
                    <div>
                        <div className='p-8
                        '>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-4'>
                                <img src={profile} alt="" />
                                <div>
                                    <h3 className='font-bold text-2xl'>Mr. Raju</h3>
                                    <p className='font-medium'>Mar 14 (4 Days ago)</p>
                                </div>
                                </div>
                                <div className='flex gap-2'>
                                    <p>05 min read</p>
                                    <img src={buttonPng} alt="" />
                                </div>
                            </div>
                            <h2 className=' py-5 md:leading-[50px] text-3xl font-bold md:text-4xl'>How to get your first job as a self-taught programmer</h2>
                            <p className='py-5'>#beginners</p>
                            <p className='text-[#6047EC] text-xl font-bold underline'>Mark as read</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='max-w-full lg:max-w-[33%] shadow-2xl bg-slate-200 rounded-xl'>
                <div className='bg-[#6047ec4c] border-2  border-[#ec47ce] rounded-xl'>
                    <h3 className='p-5 text-[#6047ec] text-2xl font-bold'>Spent time on read : 0 min</h3>
                </div>
                <div className=' p-5 '>
                    <h3 className='py-5
                     text-2xl font-bold'>Bookmarked Blogs : 8</h3>
                    <div className='p-5
                     bg-white rounded-[10px]'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni sunt totam nemo! Et, dignissimos consectetur? Soluta, quidem dolore totam, alias, minus delectus corporis vitae possimus voluptate doloremque quis ratione consequuntur?
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Main;