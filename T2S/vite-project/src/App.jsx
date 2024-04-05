import { useState, useEffect } from 'react';
import Profile from "./Aakash.jpg";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'font-awesome/css/font-awesome.min.css';
// @ts-ignore
import { FaShareAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
function App() {
  const [text, setText] = useState('');
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [currentUtterance, setCurrentUtterance] = useState(null);

  useEffect(() => {
    const getVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      setVoices(voices);
      setSelectedVoice(voices[0]);
    };

    window.speechSynthesis.onvoiceschanged = getVoices;
    getVoices();

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  function speak() {
    if (!window.speechSynthesis) {
      alert("Your browser doesn't support speech synthesis.");
      return;
    }

    if (!selectedVoice) {
      alert("Please select a voice.");
      return;
    }

    if (playing) {
      stopSpeaking();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = selectedVoice;
    setCurrentUtterance(utterance);
    window.speechSynthesis.speak(utterance);
    setPlaying(true);
  }

  function stopSpeaking() {
    if (currentUtterance) {
      window.speechSynthesis.cancel();
      setPlaying(false);
      setCurrentUtterance(null);
    }
  }

  const gradientBorder = {
    filter: 'drop-shadow(0 0 6px rgba(103,30,117,1)) drop-shadow(0 0 12px rgba(252,76,2,1))',
  };

  return (
    <>
      <div style={{ backgroundImage: 'linear-gradient( 109.6deg,  rgba(103,30,117,1) 11.2%, rgba(252,76,2,1) 91.1% )', minHeight: '100vh', minWidth: '100vw' }} className='cursor-crosshair'>
        <div className='flex flex-col justify-center items-center min-h-screen'>
          <div className='bg-white w-auto lg:w-5/6 py-10 h-auto lg:h-[600px] rounded-lg opacity-[0.9]' style={gradientBorder}>
            <div className='flex justify-between mx-auto p-4 md:p-8 lg:p-10'>
              <div>
                <img src={Profile} className='w-16 rounded-full' alt="Profile" style={gradientBorder} />
              </div>
              <div>
                <h1 className="hidden lg:flex font-bold text-2xl text-center uppercase light" style={{ letterSpacing: "10px"}}>Text 2 Speech Application</h1>
              </div>
              <div className='flex items-center gap-4'>
                <a href="https://www.facebook.com/AakashAare/" target="_blank"><i style={gradientBorder} className="fa fa-facebook hover:animate-bounce" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/meme_um_naan_um/" target="_blank"><i style={gradientBorder} className="fa fa-instagram hover:animate-bounce" aria-hidden="true"></i></a>
                <a href="https://devaakashportfolio.w3spaces.com/" target="_blank"><i style={gradientBorder} className="fa fa-globe hover:animate-bounce" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/in/aakash-r-9a151024b" target="__blank"><i style={gradientBorder} className="fa fa-linkedin hover:animate-bounce" aria-hidden="true"></i></a>
                <a href="https://github.com/AakashTheDev" target="__blank"><i style={gradientBorder} className="fa fa-github hover:animate-bounce" aria-hidden="true"></i></a>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-10 px-8'>
              <div className='flex flex-col gap-2 space-y-3 w-auto lg:w-1/2'>
                <h1 className='font-bold text-2xl uppercase'>Text 2 Speech: Unlocking Seamless Communication &#129505;</h1>
                <p className='text-lg uppercase text-justify'> "Step into the future of communication with <span className='font-bold uppercase'>SpeechifyPro</span> – your ultimate solution for effortless text-to-speech conversion. Convert written text into spoken words instantly, reliably, and effortlessly. Enhance accessibility, improve comprehension, and simplify your communication process. Embrace the SpeechifyPro innovation today and transform the way you interact!"</p>
                <div className='flex flex-col lg:flex-row gap-2'>
                  <label htmlFor='File' style={{ backgroundImage: 'linear-gradient( 109.6deg,  rgba(103,30,117,1) 11.2%, rgba(252,76,2,1) 91.1% )' }} className='text-center p-3 px-4 font-semibold uppercase rounded-lg shadow-lg text-white cursor-pointer opacity-[0.9] hover:opacity-[1]' onClick={speak}>Start<span className='px-2 font-bold'><i style={gradientBorder} className="fa fa-long-arrow-right" aria-hidden="true"></i></span></label>
                  <button style={{ backgroundImage: 'linear-gradient( 109.6deg,  rgba(103,30,117,1) 11.2%, rgba(252,76,2,1) 91.1% )' }} className='p-3 px-4 font-semibold uppercase rounded-lg shadow-lg text-white opacity-[0.9] hover:opacity-[1]'>Developer <a href='https://devaakashportfolio.w3spaces.com/' target='_blank' className='px-2 font-bold'><i style={gradientBorder} className="fa fa-globe" aria-hidden="true"></i></a></button>
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <div className='flex flex-row'>
                  <textarea className='border-2 border-black rounded-xl p-2' style={{ width: "550px" }} placeholder='Enter the text' rows={13} onChange={(e) => setText(e.target.value)} value={text} />
                </div>
                <div className='flex flex-row gap-4'>
                  <select className='border-2 border-black rounded-lg' style={{ width: "450px" }} onChange={(e) => setSelectedVoice(voices.find(v => v.name === e.target.value))}>
                    <option value={""} selected disabled>--Choose a voice--</option>
                    {voices.map(voice => (
                      <option key={voice.name}>{voice.name}</option>
                    ))}
                  </select>
                  <div className=''>
                    <button style={{ backgroundImage: 'linear-gradient( 109.6deg,  rgba(103,30,117,1) 11.2%, rgba(252,76,2,1) 91.1% )' }} className='p-3 px-4 font-semibold uppercase rounded-lg shadow-lg text-white opacity-[0.9] hover:opacity-[1]' onClick={speak}>Play</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='fixed bottom-0'>
            <h1 className='font-bold text-center uppercase light' style={{ letterSpacing: "20px"}}>Developed with &#x1F90D; by <a href="https://devaakashportfolio.w3spaces.com/" target="_blank">Aakash</a></h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
