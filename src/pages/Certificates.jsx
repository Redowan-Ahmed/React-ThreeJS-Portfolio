import { CTA, CTACUS } from "../components";
import { useState, useEffect } from "react";
import axios from "axios";


const Certificates = () => {
  const apiServer = process.env.SERVER_ADDRESS
  const [loading, setLoading] = useState(false);
  const [certificates, setCertificates] = useState([])
  const [close, setClose] = useState(false)  
  const [imageViewData, setImageViewData] = useState({})

  useEffect(() => {
    const loadCertificates = async () => {
      setLoading(true);
      const headersConf = {
        headers: {
          'decoader772': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3NTQ2NTQ2ODQ2NTQxNTE5ODE1NjE4ODkwIiwibmFtZSI6IlJlZG93YW4gQWhtZWQiLCJpYXQiOjEuNTE2MjM5MDIyNzQ1NDQ2NWUrMzksIndlYnNpdGUiOiJodHRwczovL3JlZG93YW4ubWVyY2Vncm93ZXIuY29tLyJ9.LqkkmeKglcJNzP6KRFtGV6brqCJ7VQ5RFauVioQqlvU',
          "decoader552": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3NTQ2NTQ2ODQ2NTQxNTE5ODE1NjE46aw8789564awda498r6d4ghtdf4h6fy5g4j89gty4j654seADAWAWDa6w4d6aw4d AD6WD6WDAAWDW4ODkwIiwibmFtZSI6IlJlZG93YW4gQWhtZWQiLCJpYXQiOjEuNTE2MjM5MDIyNzQ1NDQ2NWUrMzksIndlYnNpdGUiOiJodHRwczovL3JlZG93YW4ubWVyY2Vncm93ZXIuY29tLyJ9.LqkkmeKglcJNzP6KRFtGV6brqCJ7VQ5RFauVioQqlvU',
          "decoader221": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3NTQ2NTQ2ODQ2NTQxAWDAWDAJDjLAWDahwdawdawdawdaAWDAWDAWDawDAWdawdOPEkfopaWJlAWD TE5ODE1NjE4ODkwIiwibmFtZSI6IlJlZG93YW4gQWhtZWQiLCJpYXQiOjEuNTE2MjM5MDIyNzQ1NDQ2NWUrMzksIndlYnNpdGUiOiJodHRwczovL3JlZG93YW4ubWVyY2Vncm93ZXIuY29tLyJ9.LqkkmeKglcJNzP6KRFtGV6brqCJ7VQ5RFauVioQqlvU',
        }
      }
      const response = await axios.get(
        `${apiServer}all-certificates/`,
        headersConf
      );
      setCertificates(response.data.results);
      setLoading(false);
    };
    loadCertificates();
  }, []);
  const loadingData = [1, 2, 3, 4]

  function handelClose(){
    if(close){
      setClose(false)
    }else{
      setClose(true)
    }
  }

  return (
    <section className='max-container select-none'>
      <h1 className='head-text text-white'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Certificates
        </span>
      </h1>

      <p className='text-slate-400 mt-2 leading-relaxed'>
        Unlocking Knowledge: Explore My Certificates! 🎓 Dive into a treasure trove of my educational achievements and course certificates, showcasing my dedication to continuous learning and personal growth. Each certificate represents a milestone in my journey towards expertise and excellence. Join me as I celebrate knowledge gained and skills honed. Let's embark on a journey of discovery together!
      </p>

      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 py-9">

        {loading ? loadingData.map((value) => (
          <div key={value} className='w-full h-96 bg-black-500 animate-pulse rounded-md'>
          </div>
        )) : certificates.map((certificate) => (
          <div key={certificate.id}>
            <img src={certificate.certificate_image} title={certificate.name} className="rounded-md bg-black-500 w-full h-96 object-cover object-center cursor-zoom-in" onClick={()=>{
                setImageViewData(certificate)
                handelClose()
            }} />
          </div>
        ))}
        </div>

        <hr className='border-slate-800' />

        <div className="py-20">
            <CTACUS text="Want Your OWN Custom Task Manager For Free?" buttonLink='/tasks' buttonName='Use Free Task Manager' />
        </div>

      <hr className='border-slate-800' />
      {close? (
        <div className="fixed z-20 left-0 top-0 w-full bg-black-500 bg-opacity-90 h-full">
          <div className="flex flex-col justify-center container mx-auto align-middle items-center h-full gap-2 px-2 cursor-zoom-out" onClick={handelClose}>
                  <button className="absolute top-3 right-3 bg-gray-700 py-2 px-3 text-red-600 text-xl rounded-full leading-none" onClick={handelClose}>
                      x
                  </button>
                <img src={imageViewData.certificate_image} title='test' className="rounded-md w-full h-3/4 object-contain object-center" />
                <div className="text-center">
                    <h2 className="text-white text-2xl font-bold py-2">{imageViewData.name}</h2>
                    <div className="text-white" dangerouslySetInnerHTML={{ __html: imageViewData.description }}></div>
                </div>
          </div>
        </div>
      ):(
        <div className="hidden">

        </div>
      )}


      <CTA />
    </section>
  );
};

export default Certificates;
