import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { Fox } from "../models";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";
import axios from "axios";
import { QR } from "../assets/images";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const headersConf = {
    headers: {
      'decoader772': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3NTQ2NTQ2ODQ2NTQxNTE5ODE1NjE4ODkwIiwibmFtZSI6IlJlZG93YW4gQWhtZWQiLCJpYXQiOjEuNTE2MjM5MDIyNzQ1NDQ2NWUrMzksIndlYnNpdGUiOiJodHRwczovL3JlZG93YW4ubWVyY2Vncm93ZXIuY29tLyJ9.LqkkmeKglcJNzP6KRFtGV6brqCJ7VQ5RFauVioQqlvU',
      "decoader552": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3NTQ2NTQ2ODQ2NTQxNTE5ODE1NjE46aw8789564awda498r6d4ghtdf4h6fy5g4j89gty4j654seADAWAWDa6w4d6aw4d AD6WD6WDAAWDW4ODkwIiwibmFtZSI6IlJlZG93YW4gQWhtZWQiLCJpYXQiOjEuNTE2MjM5MDIyNzQ1NDQ2NWUrMzksIndlYnNpdGUiOiJodHRwczovL3JlZG93YW4ubWVyY2Vncm93ZXIuY29tLyJ9.LqkkmeKglcJNzP6KRFtGV6brqCJ7VQ5RFauVioQqlvU',
      "decoader221": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3NTQ2NTQ2ODQ2NTQxAWDAWDAJDjLAWDahwdawdawdawdaAWDAWDAWDawDAWdawdOPEkfopaWJlAWD TE5ODE1NjE4ODkwIiwibmFtZSI6IlJlZG93YW4gQWhtZWQiLCJpYXQiOjEuNTE2MjM5MDIyNzQ1NDQ2NWUrMzksIndlYnNpdGUiOiJodHRwczovL3JlZG93YW4ubWVyY2Vncm93ZXIuY29tLyJ9.LqkkmeKglcJNzP6KRFtGV6brqCJ7VQ5RFauVioQqlvU',
    }
  }
  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    axios.post(
      'https://redowan.voxnetconsulting.co.uk/contact/',
       {
        email: form.email,
        full_name: form.name,
        phoneNumber: form.phone,
        massage: form.message
      },
      headersConf
    ).then(
      (response) => {
        setLoading(false);
        showAlert({
          show: true,
          text: "Thank you for your message 😃",
          type: "success",
        });

        setTimeout(() => {
          hideAlert(false);
          setCurrentAnimation("idle");
          setForm({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        }, [3000]);
      },
      (error) => {
        setLoading(false);
        console.error(error);
        setCurrentAnimation("idle");

        showAlert({
          show: true,
          text: "I didn't receive your message 😢",
          type: "danger",
        });
      }
    )
  };

  return (
    <section className='relative flex lg:flex-row flex-col-reverse max-container'>
      {alert.show && <Alert {...alert} />}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text text-white text-center lg:text-left'>Get in Touch</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14 z-20'
        >
          <label className='text-gray-100 font-semibold'>
            Full Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Full Name'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-gray-100 font-semibold'>
            Email Address
            <input
              type='email'
              name='email'
              className='input'
              placeholder='email@example.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-gray-100 font-semibold'>
            Phone Number
            <input
              type='tel'
              name='phone'
              className='input'
              placeholder='+00 000000000'
              required
              value={form.phone}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-gray-100 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='Write your thoughts here...'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
        <div className="flex justify-center py-8 flex-col items-center gap-3">
          <img src={QR} alt="QR Code Scanner" className="w-full rounded-md" />
          <h2 className="text-white font-bold text-lg">Scan To contact via Whatsapp</h2>
        </div>
      </div>

      <div className='lg:full w-full lg:h-[750px] md:h-[350px] h-[250px] sticky top-0'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
