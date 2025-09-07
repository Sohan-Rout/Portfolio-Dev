import React from 'react';
import { Award, Trophy, Star, Users, Code, Zap, Target, BookOpen } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Devolympus Winners",
      description: "Secured first place for innovative AI-driven Ecommercsolutions, awarded by the Honorable CEO of API Market.",
      date: "2025",
      color: "from-black to-black",
      bgColor: "from-neutral-100 to-white"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Open Source Contributor",
      description: "Active contributor to various open source projects with GitHub contributions",
      date: "2023 - Present",
      color: "from-black to-black",
      bgColor: "from-neutral-100 to-white"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Qualifier of the TOI School League",
      description: "The City Qualifier of the Times of India School League is a competitive round where top students from various schools in a city compete in quizzes, aptitude, and subject-based challenges. It serves as a gateway to the regional and national stages, recognizing academic excellence and talent.",
      date: "2022",
      color: "from-black to-black",
      bgColor: "from-neutral-100 to-white"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Competitive Programming Enthusiast",
      description: "I'm a 5-star coder on HackerRank, a LeetCode enthusiast, and an active member of the Student Coding Group at my college.",
      date: "2022 - Present",
      color: "from-black to-black",
      bgColor: "from-neutral-100 to-white"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "GDG Technical Lead",
      description: "Driving innovation and pushing the boundaries of what's possible. From solving complex problems to building incredible solutions, they're here to turn ideas into reality.",
      date: "2023",
      color: "from-black to-black",
      bgColor: "from-neutral-100 to-white"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Conversion Rate Specialist",
      description: "Increased client conversion rates by 150% through strategic UX improvements",
      date: "2023 - 2024",
      color: "from-black to-black",
      bgColor: "from-neutral-100 to-white"
    }
  ];

  const certifications = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "AWS APAC - Solutions Architecture",
      issuer: "Amazon Web Services",
      date: "June 2025",
      color: "border-orange-200 bg-orange-50",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_QEkb5CtdKMv8wECQa_1749883671311_completion_certificate.pdf"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "FullStack(MERN) Certification",
      issuer: "Apna College",
      date: "November2023",
      color: "border-blue-200 bg-blue-50",
      link: "https://www.linkedin.com/in/ayush-thakur-542bb4202/details/certifications/1746290789024/single-media-viewer/?profileId=ACoAADPKfQIBtRlfTmTCDgeTufrsQgFc5eIdpeU"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Google UX Design Certificate",
      issuer: "Google",
      date: "March 2024",
      color: "border-green-200 bg-green-50",
      link: "https://www.coursera.org/account/accomplishments/verify/4579Q33VABFY"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Problem Solving",
      issuer: "HackerRank",
      date: "Jul 2023",
      color: "border-purple-200 bg-purple-50",
      link: "https://www.hackerrank.com/certificates/6b9d97251a09"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Frontend Development (React)",
      issuer: "HackerRank",
      date: "May 2025",
      color: "border-gray-200 bg-gray-50",
      link: "https://www.hackerrank.com/certificates/8d8524210c26"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Data Structures and Algorithms",
      issuer: " coursera",
      date: "2021",
      color: "border-yellow-200 bg-yellow-50",
      link: "https://www.linkedin.com/in/ayush-thakur-542bb4202/details/certifications/1746290986004/single-media-viewer/?profileId=ACoAADPKfQIBtRlfTmTCDgeTufrsQgFc5eIdpeU"
    },
     {
      icon: <BookOpen className="w-6 h-6" />,
      title: "TSP Training",
      issuer: "Microsoft & Edunet",
      date: "2025",
      color: "border-orange-200 bg-orange-50",
      link: "https://drive.google.com/file/d/1drlkrXcB5ThZEy-0NtBCIe1x2axgw_ak/view?usp=sharing"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Google Analytics",
      issuer: "Google",
      date: "2025",
      color: "border-purple-200 bg-purple-50",
      link: "https://skillshop.credential.net/9c43363e-a07b-45a9-b844-69adbe032271"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Project Management Skills",
      issuer: "HP",
      date: "May 2025",
      color: "border-gray-200 bg-gray-50",
      link: "https://www.linkedin.com/in/ayush-thakur-542bb4202/details/certifications/1746290715769/single-media-viewer/?profileId=ACoAADPKfQIBtRlfTmTCDgeTufrsQgFc5eIdpeU"
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      {/* Achievements Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Achievements</h2>
          <p className="text-lg text-gray-600">
            Milestones that define my journey as a design engineer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${achievement.bgColor} border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 group hover:scale-105`}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${achievement.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {achievement.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {achievement.title}
              </h3>
              
              <p className="text-gray-600 mb-3 leading-relaxed">
                {achievement.description}
              </p>
              
              <div className="text-sm font-medium text-gray-500">
                {achievement.date}
              </div>
              
              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full opacity-50"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications</h2>
          <p className="text-lg text-gray-600">
            Professional certifications that validate my expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className={`block p-6 rounded-xl border-2 ${cert.color} hover:shadow-md transition-all duration-300 hover:scale-105 group cursor-pointer`}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1 text-sm">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {cert.issuer}
                  </p>
                  <div className="text-xs font-medium text-gray-500">
                    {cert.date}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Stats Summary */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl">
          <div>
            <div className="text-2xl font-bold text-gray-900">6</div>
            <div className="text-sm text-gray-600">Major Achievements</div>
          </div>
          <div className="w-px h-12 bg-gray-300"></div>
          <div>
            <div className="text-2xl font-bold text-gray-900">6</div>
            <div className="text-sm text-gray-600">Certifications</div>
          </div>
          <div className="w-px h-12 bg-gray-300"></div>
          <div>
            <div className="text-2xl font-bold text-gray-900">1+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;