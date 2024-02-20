'use client'
import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';


const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-400 ease-in-out">
      <button
        type="button"
        className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
        onClick={toggleAccordion}
      >
        <span className="flex text-lg font-semibold text-black">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 pb-5 sm:px-6 sm:pb-6">
          <p className="text-gray-500">{content}</p>
        </div>
      )}
    </div>
  );
};



const FAQs = () => {
  const faqsData = [
    {
      "title": "What is AmiColo?",
      "content": "AmiColo is a housing platform designed specifically for newcomers to Canada, facilitating a seamless transition by offering a roommate matching system that integrates social media data for initial matches and refines those matches through quizzes. We also provide property matches using the Zillo API, ensuring you find the perfect home and roommates."
    },
    {
      "title": "How does the roommate matching system work?",
      "content": "Our roommate matching system uses advanced algorithms to analyze social media data and quiz responses to find potential roommates with compatible communication traits, habits, and preferences. We focus on ensuring high prosocial similarity for increased satisfaction and liking among roommates."
    },
    {
      "title": "Can I find properties in Montreal through AmiColo?",
      "content": "Yes, we use the Zillo API to extract and offer a comprehensive list of available properties in Montreal, catering to various preferences and budgets. Whether you're looking for a studio or a multi-bedroom apartment, AmiColo helps you find suitable accommodations."
    },
    {
      "title": "What makes AmiColo different from other roommate and property finding platforms?",
      "content": "AmiColo is uniquely designed for newcomers to Canada, incorporating communication traits and social habits into our matching algorithm. Our integration of social media data for initial matches, refined by quiz responses, ensures a more personalized and compatible roommate matching process. Plus, our use of the Zillo API for property matches offers a wide range of housing options."
    },
    {
      "title": "How do I sign up and start using AmiColo?",
      "content": "Signing up is easy! Just visit our website, click on the sign-up button, and follow the instructions. You'll need to fill out a profile, including your preferences and lifestyle habits, and link your social media accounts for initial matching. Once your profile is set up, you can start searching for roommates and properties."
    },
    {
      "title": "Is AmiColo available in languages other than English?",
      "content": "Currently, AmiColo is primarily available in English. However, we are working on adding multilingual support to make our platform more accessible to newcomers from diverse backgrounds."
    },
    {
      "title": "What are the costs associated with using AmiColo?",
      "content": "AmiColo offers various services, some of which are free, while others, such as premium features like advanced matching and additional support, may come with a fee. Detailed pricing information is available on our website."
    },
    {
      "title": "How does AmiColo ensure the safety and privacy of its users?",
      "content": "User safety and privacy are our top priorities. We employ strict data protection measures, comply with legal standards for privacy, and ensure all user interactions on the platform are secure and respectful."
    },
    {
      "title": "Can I use AmiColo if I'm not a student or a newcomer to Canada?",
      "content": "While AmiColo is tailored for students and newcomers to Canada, we welcome anyone looking for roommates or accommodations. Our platform can be a valuable resource for anyone in need of housing solutions."
    },
    {
      "title": "How can I contact AmiColo for support or feedback?",
      "content": "For support or to provide feedback, please contact us through the contact form on our website, or email us directly at support@amicolo.com. We value your input and are here to help with any questions or concerns you may have."
    }
  ];
  

  return (
    <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, assumenda
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          {faqsData.map((faq, index) => (
            <Accordion key={index} title={faq.title} content={faq.content} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
