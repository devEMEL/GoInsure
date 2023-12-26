import windInsuranceImg from '../assets/windstorm.png'

const Homepage = () => {
  return (
    <>
      <div className="sm:max-w-[94%] md:max-w-[90%] xl:max-w-[80%] w-[100%] mx-auto bg-[#FFFFFF] text-[#737373] font-['Lato']">
        <div className="mb-60 md:mb-80">
          <div className="flex flex-col justify-center items-center mt-40">
            <h1 className="text-[40px] md:text-[50px] lg:text-[60px] font-bold">Industry leading on-chain protection</h1>
            <p className="text-[20px]">Nexus Mutual is the insurance alternative for crypto and more.</p>
          </div>
          <div className="text-center mt-20">
            <button className="h-[60px] px-20 border-b-2 border-l-2 outline-0 text-[20px] text-[#FFFFFF] bg-[#737373] font-bold">
              <span className="text-[20px]">Learn More</span>
              <span className="inline-block ml-10 -mb-2">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#737373] text-[#FFFFFF]">
        <div className="sm:max-w-[94%] md:max-w-[90%] xl:max-w-[80%] w-[100%] mx-auto bg-[#FFFFFF] text-[#737373] font-['Lato']">
          <div className="flex items-center bg-[#737373] text-[#FFFFFF] py-10">
            <div className="basis-1/2">
              <p className="text-[40px] md:text-[50px] lg:text-[60px] leading-[50px]">
                Insurance <br /> for everyone
              </p>
            </div>
            <div className="basis-1/2 flex justify-end">
              <img src={windInsuranceImg} className="w-[500px]" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="sm:max-w-[94%] md:max-w-[90%] xl:max-w-[80%] w-[100%] mx-auto bg-[#FFFFFF] text-[#737373] my-40 font-['Lato']">
        <div className="flex justify-center">
          <div className="">
            <p className="text-[#737373] md:text-[24px] sm:text-[20px] font-[500] leading-[30px] tracking-[0.2px] text-center">
              Join the waitlist today and be the first to <br /> know when we launch!
            </p>
            <div className="">
              <form
                action=""
                onSubmit={(e) => {
                  e.preventDefault()
                }}
              >
                <div className="flex flex-col md:flex-row mt-[40px]">
                  <div className="mr-0 md:mr-8">
                    <input
                      type="text"
                      placeholder="Email address"
                      className="w-[100%] mb-[20px] md:mb-[0px] sm:mb-4 md:w-[357px] md:h-[60px] sm:h-[60px] px-[37px] py-[13px] outline-0 border border-solid border-[#C1C1C1] placeholder:text-[#A5A5A5] placeholder:text-[18px] font-['Sora'] font-[400]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-[100%] mb-[20px] md:mb-[0px] sm:mb-4 md:w-[357px] md:h-[60px] sm:h-[60px] px-[37px] py-[13px] outline-0 border border-solid border-[#C1C1C1] placeholder:text-[#A5A5A5] placeholder:text-[18px] font-['Sora'] font-[400] bg-[#737373] text-[#FFFFFF]"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage
