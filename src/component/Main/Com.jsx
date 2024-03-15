import profile from '../../assets/images/profile.png'
const Com = () => {
    return (
        <div>

          <div className='flex justify-between pb-2 px-5 items-center'>
          <h1 className="text-2xl md:text-4xl font-bold ">
                Knowledge Cafe
            </h1>
        <img src={profile} alt="" />
            
          </div>
             <hr />
        </div>

    );
};

export default Com;