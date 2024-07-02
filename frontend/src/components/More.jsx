import React from 'react';
import { Link } from 'react-router-dom';
import CampusNITR from '../assets/CampusNITR.jpg'
import TrendCard1 from '../assets/TrendCard1.jpg';
import TrendCard2 from '../assets/TrendCard2.jpg';
import TrendCard3 from '../assets/TrendCard3.jpg';
import Card3 from '../assets/Card3.webp';
import Footer from './Footer';

const More = () => {
  return (
    <>
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-[570px] bg-cover bg-center" style={{ backgroundImage: `url(${CampusNITR})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-6xl font-bold text-white">We are the voice of youth and students</h1>
          <div className="absolute top-4 right-4 flex space-x-4 text-white">
              <Link to="/" className="text-md font-medium px-4 py-2 hover:underline">home</Link>
              <Link to="/leadership" className="text-md font-medium px-4 py-2 hover:underline">leadership</Link>
              <Link to="/alumni" className="text-md font-medium px-4 py-2 hover:underline">team</Link>
              <Link to="/more" className="text-md font-medium px-4 py-2 hover:underline">alumni</Link>
            </div>
        </div>
      </div>
      

      {/* Who We Are Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-[#AF8D64] mb-8">"Diverse topics, unified by a commitment to truth."</h2>
          <h2 className="text-4xl font-bold text-center mb-8">Who We Are</h2>
          <p className="text-lg text-center">Our club started in 20.., founded by ..... We publish articles related to various topics like History, Politics, World Affairs, Economics, and more. Our mission is to provide unbiased, independent perspectives and be the voice of youth and students.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem totam quidem, blanditiis aliquid pariatur, animi beatae necessitatibus accusantium id deleniti laborum eligendi soluta sequi corrupti repellat maxime possimus. Exercitationem, cupiditate?</p>
        </div>
      </section>

      {/* Our Goals Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-8">Our Goals</h2>
          <div className="absolute top-0 right-0 mt-10 mr-6 text-[#AF8D64] flex items-center">
          <i className="ml-2 fas fa-arrow-left"></i>
            <span>Tap to know more</span>
            
          </div>
          <div className="flex justify-around gap-6 h-[375px]">
            <div className="flip-card w-1/3">
              <div className="flip-card-inner">
                <div className="flip-card-front" style={{ backgroundImage: `url(${TrendCard1})` }}>
                  <h3 className="text-xl font-semibold mt-4">Promote Knowledge</h3>
                  <p className="mt-2 text-gray-600">Encouraging critical thinking and informed discussions.</p>
                </div>
                <div className="flip-card-back bg-green-500 text-white flex flex-col justify-center items-center">
                  <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque dignissimos corrupti mollitia officia obcaecati fugit distinctio iste est delectus velit quam, ea alias commodi voluptatem possimus, consectetur magnam doloremque!
                  </p>
                  <div className="flex items-center justify-center mt-4">
                    
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="flip-card w-1/3">
              <div className="flip-card-inner">
                <div className="flip-card-front" style={{ backgroundImage: `url(${TrendCard2})` }}>
                  <h3 className="text-xl font-semibold mt-4">Foster Community</h3>
                  <p className="mt-2 text-gray-600">Building a strong network of engaged students and alumni.</p>
                </div>
                <div className="flip-card-back bg-green-500 text-white flex flex-col justify-center items-center">
                  <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus earum omnis assumenda, maxime sequi delectus architecto modi labore a, facilis ut! Maiores eaque, dicta impedit rem ab non consectetur dolor.</p>
                  <div className="flex items-center justify-center mt-4">
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="flip-card w-1/3">
              <div className="flip-card-inner">
                <div className="flip-card-front" style={{ backgroundImage: `url(${TrendCard3})` }}>
                  <h3 className="text-xl font-semibold mt-4">Inspire Action</h3>
                  <p className="mt-2 text-gray-600">Motivating youth to take initiative and drive positive change.</p>
                </div>
                <div className="flip-card-back bg-green-500 text-white flex flex-col justify-center items-center">
                  <p className="text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi expedita harum dolore reprehenderit quas aperiam deleniti molestias, repudiandae laborum error nesciunt sint odit. Magnam laudantium, exercitationem ratione dignissimos ex similique!</p>
                  <div className="flex items-center justify-center mt-4">
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Letter from Founders Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">A Letter from Our Founders</h2>
          <div className="flex justify-center">
            <div className="max-w-2xl">
              <img src={Card3} alt="Founders" className="w-full h-96 object-cover mb-4" />
              <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae blanditiis aspernatur maxime quaerat quia quasi mollitia. Recusandae ipsa illum modi dolore architecto alias animi est consectetur corrupti, quibusdam cum incidunt.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ducimus explicabo, cupiditate nam, quae sit non neque libero ratione quaerat provident fuga optio amet? Excepturi, optio fuga? Tenetur, in porro?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why to Read Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-8">Our Goals</h2>
          <div className="absolute top-0 right-0 mt-10 mr-6 text-[#AF8D64] flex items-center">
          <i className="ml-2 fas fa-arrow-left"></i>
            <span>Tap to know more</span>
            
          </div>
          <div className="flex justify-around gap-6 h-[375px]">
            <div className="flip-card w-1/3">
              <div className="flip-card-inner">
                <div className="flip-card-front" style={{ backgroundImage: `url(${TrendCard1})` }}>
                  <h3 className="text-xl font-semibold mt-4">Promote Knowledge</h3>
                  <p className="mt-2 text-gray-600">Encouraging critical thinking and informed discussions.</p>
                </div>
                <div className="flip-card-back bg-green-500 text-white flex flex-col justify-center items-center">
                  <p className="text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed in numquam doloremque voluptates corporis aut a ad, exercitationem recusandae, deserunt ullam, accusantium deleniti temporibus reprehenderit eum natus commodi facilis?</p>
                  <div className="flex items-center justify-center mt-4">
                    
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="flip-card w-1/3">
              <div className="flip-card-inner">
                <div className="flip-card-front" style={{ backgroundImage: `url(${TrendCard2})` }}>
                  <h3 className="text-xl font-semibold mt-4">Foster Community</h3>
                  <p className="mt-2 text-gray-600">Building a strong network of engaged students and alumni.</p>
                </div>
                <div className="flip-card-back bg-green-500 text-white flex flex-col justify-center items-center">
                  <p className="text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, odit nisi exercitationem, totam natus, quibusdam ipsam inventore laboriosam deserunt laudantium eaque ex dolorem facere eos pariatur libero explicabo sed suscipit.</p>
                  <div className="flex items-center justify-center mt-4">
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="flip-card w-1/3">
              <div className="flip-card-inner">
                <div className="flip-card-front" style={{ backgroundImage: `url(${TrendCard3})` }}>
                  <h3 className="text-xl font-semibold mt-4">Inspire Action</h3>
                  <p className="mt-2 text-gray-600">Motivating youth to take initiative and drive positive change.</p>
                </div>
                <div className="flip-card-back bg-green-500 text-white flex flex-col justify-center items-center">
                  <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quod quidem distinctio, quo rem quibusdam commodi officia, amet eligendi debitis veritatis necessitatibus iste atque voluptatum blanditiis recusandae inventore pariatur nemo.</p>
                  <div className="flex items-center justify-center mt-4">
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default More;
