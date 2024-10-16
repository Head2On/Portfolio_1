import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';

import Fox from '../models/Fox';
import Loader from '../components/Loader';
import useAlert from '../hooks/useAler';
import Alert from '../components/Alert';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({name:'', email:'',message:''})
  const [isLoading,setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const {alert, showAlert,hideAlert } = useAlert();

  const handleFocus = () => setCurrentAnimation('walk');
  
  const handleBlur = () => setCurrentAnimation('idle');

  const handleChange = (e) => {
    setForm({ form, [e.target.name]: e.target.value })
  };  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsLoading(false);
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
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setIsLoading(false);
          console.error(error);
          setCurrentAnimation("idle");

          showAlert({
            show: true,
            text: "I can't receive your message 😭",
            type: "danger",
          });
        }
      );
  };
  
  
  return (
   <section className="relative flex lg:flex-row flex-col max-container h-[100vh] ">
    {alert.show && <Alert {...alert} />}

    <div className="flex-1 min-w-[50%] flex flex-col">
      <h1 className="head-text">Get in touch</h1>

      <form className="w-full flex flex-col gap-7 mt-14"  onSubmit = { handleSubmit}>
        <label className="text-black-500 font-semibold">
          Name
          <input 
           type='text'
           name='name'
           className='input'
           placeholder='Ishan'
           required
           value={form.name}
           onChange={handleChange}
           onFocus={handleFocus}
           onBlur={handleBlur}
          />
        </label>
        <label className="text-black-500 font-semibold">
          Email
          <input 
          type='email'
          name='email'
          className='input'
          placeholder='Ishan@gmail.com'
          required
          value={form.email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          />
        </label>
        <label className="text-black-500 font-semibold">
          Message
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
            disabled={isLoading}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
    <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
    <Canvas 
     camera={{
      position:[0,0,5],
      fov:75,
      near: 0.1,
      far: 1000,
      zoom: 1,
      rotation: [0, 0, 0],
      focalLength: 0.01,
    }}
    >
      <directionalLight intensity={3} position = {[0,0,1]} />
      <ambientLight intensity={0.3} />
      <Suspense fallback = {<Loader />}> 
        <Fox
        currentAnimation={currentAnimation}
        position= {[0.5, 0.3, 0]}
        rotation= {[12.629, -0.6, 0]}
        scale={[0.6, 0.6, 0.6]}
        />
      </Suspense>
    </Canvas>
    </div>
   </section>
  )
}

export default Contact;