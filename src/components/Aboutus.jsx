import React from 'react';
import { Link } from 'react-router-dom';

// Data Constants
const VALUES = [
  {
    img: "https://t4.ftcdn.net/jpg/02/95/55/33/240_F_295553342_9Qo1pCR39CaYAk3J2J2RC2pGAO2CkDxj.jpg",
    title: "Quality",
    description: "We use the best ingredients to ensure top-notch taste and health."
  },
  {
    img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
    title: "Customer First", 
    description: "Your satisfaction is our priority, every single time."
  },
  {
    img: "https://as1.ftcdn.net/v2/jpg/02/29/35/60/1000_F_229356062_PE0RA4NISrLn5Gj4cqttiuVrme9ihe2w.jpg",
    title: "Innovation",
    description: "We continuously explore new recipes and ideas to delight you."
  }
];

const TEAM_MEMBERS = [
  {
    img: "https://media.gettyimages.com/id/170945965/photo/professional-chefs.jpg?s=612x612&w=0&k=20&c=CNQ4OVOALsi2tcuixWhvrZlakjbSVHkdJd8ef_51cOw=",
    name: "Arjun Khanna",
    role: "Founder & Head Chef"
  },
  {
    img: "https://i.pinimg.com/736x/2b/4a/0b/2b4a0b51b6b1d5a0d51edadfe685a7b3.jpg",
    name: "Siddharth Desai", 
    role: "Marketing Head"
  },
  {
    img: "https://media.gettyimages.com/id/1337494696/photo/indian-man-studio-portrait.jpg?s=612x612&w=0&k=20&c=51Vt7ZQ7t4nbADtwVzRdFfp3D0wrQmwdgdKziMG1t04=",
    name: "Akshay Bansal",
    role: "Operations Manager"
  }
];

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
      {/* Hero Section */}
      <header className="relative py-16 sm:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a"
            alt="Pizza background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Delivering happiness with every slice since 2024.</p>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-12 sm:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
            alt="Fresh pizza"
            className="rounded-lg shadow-lg w-full h-64 object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At Slice of Heaven, we strive to bring people together with the
              universal love for pizza. Our mission is not just to deliver food
              but to create moments of joy, bonding, and satisfaction. By
              blending tradition with innovation, we craft pizzas that cater to
              every taste bud, from classic Margherita lovers to adventurous
              foodies. With sustainability and quality at our core, we aim to
              leave a positive impact on our customers, employees, and the
              community we serve. We are committed to sourcing fresh,
              locally-grown ingredients, supporting local farmers, and minimizing
              our environmental footprint. At the heart of our mission is a
              passion for excellence, ensuring every slice tells a story of love,
              care, and dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {VALUES.map((value, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={value.img}
                alt={value.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-red-600">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-gray-50 rounded-lg my-12 py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Want to Know More?</h2>
        <p className="text-gray-600 mb-8">
          Contact us or explore our menu to experience the joy of pizza!
        </p>
        <Link
          to="/menu"
          className="inline-block bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors"
        >
          Explore Menu
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;