"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, Briefcase, FileText, Award } from 'lucide-react';
export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState<'en' | 'tr'>('en');


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'experience', 'projects', 'articles', 'skills', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const translations = {
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        projects: 'Projects',
        articles: 'Articles',
        skills: 'Skills',
        certifications: 'Certifications',
        contact: 'Contact'
      },
      hero: {
        greeting: "Hi, I'm",
        name: 'Enes Eren Seven',
        title: 'Full Stack Developer & Creative Problem Solver',
        viewWork: 'View My Work',
        contactMe: 'Contact Me'
      },
      about: {
        title: 'About Me',
        paragraph1: "I'm an engineering candidate with a passion for technology and innovative solutions. I combine my academic background with practical experience gained through various projects. I've taken an active role, particularly as president, in university communities. I develop projects in a variety of areas, primarily web-based. ",
        paragraph2: "While continuing my education, I worked on various projects as a freelance, part-time, and volunteer intern. I prioritize teamwork when implementing innovative ideas and always maintain an open-to-learning, solution-oriented approach.",
        cleanCode: 'Clean Code',
        modernDesign: 'Modern Design',
        fastPerformance: 'Fast Performance'
      },
      experience: {
        title: 'Professional Experience',
        items: [
          {
            role: 'Full Stack Intern',
            company: 'Bewell Technology.',
            duration: 'July 2025 - Present',
            description: "Using React and FastAPI, I saved data coming from MQTT to a PostgreSQL database and displayed it on the panel I created with React using API requests and WebSocket." +
                "I made improvements to this panel, including personnel management, device management, device profile management, log management, and alarm protocol." +
                "Through my interest in SaaS solutions, I learned to use the ThingsBoard platform. I developed bridge software to display data from our device on this platform." +
                "I developed deep learning algorithms with PyTorch. I took part in the data preprocessing and image detection tasks of image processing projects."},
          {
            role: 'Part - Time Backend Developer',
            company: 'Necmettin Erbakan University',
            duration: 'March 2025 - June 2025',
            description: 'I specialized in the Laravel framework, developed a solid understanding of the MVC architecture, and gained hands-on experience with API integration. ' +
                'I contributed to the development of a digital platform that supports over 200 university communities and students, facilitating communication, event management, and participation. ' +
                'I contributed to the development of a digital platform that facilitates communication, event management, and participation.'},
        ]
      },
      projects: {
        title: 'Featured Projects',
        viewProject: 'View Project',
        items: [
          {
            title: 'E-Commerce Platform',
            description: 'A full-stack online shopping platform with payment integration and real-time inventory management.'
          },
          {
            title: 'Turkish Recipe Assistant',
            description: 'It helps you learn how to cook Turkish dishes with ingredients and recipes. It helps you decide what to eat today and what you can make with the ingredients you have.'
          },
          {
            title: 'Sensor Dashboard',
            description: 'A dashboard that can be assigned to a profile and user, which can receive sensor data and display it on the interface'
          }
        ]
      },
      articles: {
        title: 'Latest Articles',
        readMore: 'Read More',
        items: [
          {
            title: 'Future Sales Forecast for Small Businesses Using Artificial Algae Colony Algorithm and ARIMA Model',
            date: 'December 2025',
            excerpt: 'In this study, we employed a hybrid forecasting approach combining the Artificial Algae Algorithm (AAA) and the AutoRegressive Integrated Moving Average (ARIMA) model to predict future turnover using historical sales data from the Tulipi Coffee Köyceğiz branch, located near Necmettin Erbakan University’s Köyceğiz Campus.'
          }
        ]
      },
      certifications: {
        title: 'Certifications & Achievements',
        items: [
          {
            name: 'Generative AI Bootcamp',
            issuer: 'Akbank',
            date: 'November 2025'
          },
          {
            name: 'Creating Value from Data with Machine Learning Applications Training',
            issuer: 'Doğuş Technology',
            date: 'October 2025'
          },
          {
            name: 'Clean Code 101 Training',
            issuer: 'Doğuş Technology',
            date: 'October 2025'
          },
          {
            name: 'Deep Learning Bootcamp',
            issuer: 'Akbank',
            date: 'October 2025'
          },
        ]
      },
      skills: {
        title: 'Skills & Technologies',
        frontend: 'Frontend',
        backend: 'Backend',
        ai: 'AI',
        tools: 'Tools'
      },
      contact: {
        title: "Let's Work Together",
        description: "Have a project in mind? I'd love to hear about it. Get in touch and let's create something amazing.",
        sendEmail: 'Send Me an Email'
      },
      footer: {
        rights: 'All rights reserved.'
      }
    },
    tr: {
      nav: {
        home: 'Ana Sayfa',
        about: 'Hakkımda',
        experience: 'Deneyim',
        projects: 'Projeler',
        articles: 'Makaleler',
        skills: 'Yetenekler',
        certifications: 'Sertifikalar',
        contact: 'İletişim'
      },
      hero: {
        greeting: 'Merhaba, Ben',
        name: 'Enes Eren Seven',
        title: 'Full Stack Geliştirici & Yaratıcı Problem Çözücü',
        viewWork: 'Çalışmalarımı Gör',
        contactMe: 'İletişime Geç'
      },
      about: {
        title: 'Hakkımda',
        paragraph1: "Teknolojiye ve yenilikçi çözümlere tutkuyla yaklaşan mühendis adayıyım. Aldığım akademik altyapıyı, çeşitli projelerde edindiğim pratik deneyimlerle birleştiriyorum. Üniversite topluluklarında başkanlık başta olmak üzere aktif rol aldım. Çoğunlukla web olmak üzere bir çok alanda proje geliştirmekteyim.",
        paragraph2: "Eğitim hayatıma devam ederken Freelance, part time ve gönüllü stajyer olarak çeşitli projelerde görev aldım. Yenilikçi fikirleri hayata geçirirken ekip çalışmasına önem veririm ve her zaman öğrenmeye açık, çözüm odaklı bir yaklaşım sergilerim.",
        cleanCode: 'Temiz Kod',
        modernDesign: 'Modern Tasarım',
        fastPerformance: 'Hızlı Performans'
      },
      experience: {
        title: 'Profesyonel Deneyim',
        items: [
          {
            role: 'Full Stack Stajyeri',
            company: 'Bewell Teknoloji',
            duration: 'Temmuz 2025 - Günümüz',
            description: 'React ve FastAPI kullanarak MQTT üzerinden gelen verileri Postgresql veri tabanına kayıt ederek API istekleri ve WebSocet ile React ile oluşturduğum panelde görüntülenmesini sağladım.' +
                ' Bu panelde personel yönetimi, cihaz yönetimi, cihaz profili yönetimi, log yönetimi ve alarm protokolu gibi geliştirmeler yaptım.' +
                ' SaaS çözümleri ile ilgilenerek ThingsBoard platformunu kullanmayı öğrendim. Bizim cihazımızdan gelen verileri bu platformda görüntüleyebilmek için köprü yazılım geliştirdim.' +
                ' PyTorch ile derin öğrenme algoritmaları geliştirdim. Görüntü işleme üzerine projelerin veri ön işleme ve görüntü tespiti görevlerinde rol aldım. '
          },
          {
            role: 'Part - Time Backend Geliştirici',
            company: 'Necmettin Erbakan Üniversitesi',
            duration: 'Mart 2025 - Haziran 2025',
            description: 'Laravel framework\'ünde uzmanlaştım, MVC mimarisi hakkında sağlam bir anlayış geliştirdim ve API entegrasyonu konusunda uygulamalı deneyim kazandım.' +
                ' 200\'den fazla üniversite topluluğu ve öğrencisini destekleyen,\n' +
                'iletişimi, etkinlik yönetimini ve katılımı kolaylaştıran bir dijital\n' +
                'platform geliştirilmesine katkı sağladım.'
          },
        ]
      },
      projects: {
        title: 'Öne Çıkan Projeler',
        viewProject: 'Projeyi Gör',
        items: [
          {
            title: 'E-Ticaret Platformu',
            description: 'Ödeme entegrasyonu ve gerçek zamanlı envanter yönetimi içeren tam kapsamlı bir online alışveriş platformu.'
          },
          {
            title: 'Türkçe Tarif Asistanı',
            description: 'Türkçe olarak yemeklerin nasıl yapıldığını içerik ve tarifleri ile sana yardımcı olur. Bugun ne yiyeceğine ve elindeki malzemelerle neler yapabileceğine karar verir.'
          },
          {
            title: 'Sensör Paneli',
            description: 'Bir profile ve kullanıcıya atanabilen, sensör verilerini alabilen ve arayüzde görüntüleyebilen bir gösterge paneli.'
          }
        ]
      },
      articles: {
        title: 'Son Makaleler',
        readMore: 'Devamını Oku',
        items: [
          {
            title: 'Yapay Alg Kolonisi Algoritması ve ARIMA Modeli Kullanılarak Küçük İşletmeler İçin Gelecekteki Satış Tahmini',
            date: 'Aralık 2024',
            excerpt: 'Bu çalışmada, Necmettin Erbakan Üniversitesi Köyceğiz Kampüsü yakınında bulunan Tulipi Kahve Köyceğiz şubesine ait geçmiş satış verilerini kullanarak gelecekteki ciroyu tahmin etmek için Yapay Alg Algoritması (AAA) ve Otoregresif Entegre Hareketli Ortalama (ARIMA) modelini birleştiren hibrit bir tahmin yaklaşımı kullanılmıştır.'
          }
        ]
      },
      certifications: {
        title: 'Sertifikalar & Başarılar',
        items: [
          {
            name: 'Üretken Yapay Zeka Bootcampi',
            issuer: 'Akbank',
            date: 'Kasım 2025'
          },
          {
            name: 'Makine Öğrenmesi Uygulamaları ile Veriden Değer Yaratma Eğitimi',
            issuer: 'Doğuş Teknolohi',
            date: 'Ekim 2025'
          },
          {
            name: 'Clean Code 101 Eğitimi',
            issuer: 'Doğuş Teknoloji',
            date: 'Ekim 2025'
          },
          {
            name: 'Derin Öğrenme Bootcampi',
            issuer: 'Akbank',
            date: 'Ekim 2025'
          }
        ]
      },
      skills: {
        title: 'Yetenekler & Teknolojiler',
        frontend: 'Ön Yüz',
        backend: 'Arka Yüz',
        ai: 'Yapay Zeka',
        tools: 'Araçlar'
      },
      contact: {
        title: 'Birlikte Çalışalım',
        description: "Aklınızda bir proje mi var? Bunu duymak isterim. İletişime geçin ve birlikte harika bir şeyler yaratalım.",
        sendEmail: 'Bana E-posta Gönder'
      },
      footer: {
        rights: 'Tüm hakları saklıdır.'
      },
    }
  };

  const t = translations[language];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack online shopping platform with payment integration and real-time inventory management.',
      tech: ['React', 'FastAPI', 'Postgresql'],
      link: 'https://github.com/svenes25/asimturan'
    },
    {
      title: 'Turkish Recipe Assistant',
      description: 'Collaborative project management tool with real-time updates and team collaboration features.',
      tech: ['Python', 'Langchain', 'RAG'],
      link: 'https://github.com/svenes25/Turkish-Recipe-ChatBot'
    },
    {
      title: 'Sensor Dashboard',
      description: 'Interactive weather application with forecasts, maps, and location-based alerts.',
      tech: ['React','FastAPI','Postgresql','MQTT'],
      link: 'https://github.com/svenes25/dashboard'
    }
  ];

  const skills = [
    { name: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'] },
    { name: 'Backend', items: ['Next.js', 'Laravel', 'PHP', 'PostgreSQL', 'FastAPI'] },
    { name: 'ai', items: ['Torch', 'Langchain', 'APIs' ] },
    { name: 'Tools', items: ['Git', 'Docker', 'MQTT' ] }
  ];
  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Portfolio
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
                {['home', 'about', 'experience', 'projects', 'articles', 'skills','certifications', 'contact'].map(item => (
                    <button
                        key={item}
                        onClick={() => scrollToSection(item)}
                        className={`capitalize transition-colors duration-300 text-xl lg:text-m whitespace-nowrap ${
                            activeSection === item ? 'text-purple-400' : 'text-gray-300 hover:text-white'
                        }`}
                    >
                      {t.nav[item]}
                    </button>
                ))}
                <button
                    onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
                    className="ml-2 lg:ml-4 px-2 lg:px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 text-xs lg:text-sm"
                >
                  <span className="font-semibold">{language === 'en' ? 'TR' : 'EN'}</span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                  className="lg:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
              <div className="lg:hidden bg-slate-900/98 backdrop-blur-sm max-h-96 overflow-y-auto">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {['home', 'about', 'experience', 'projects', 'articles', 'certifications', 'skills', 'contact'].map(item => (
                      <button
                          key={item}
                          onClick={() => scrollToSection(item)}
                          className="capitalize block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-purple-900/50 rounded transition-colors"
                      >
                        {t.nav[item]}
                      </button>
                  ))}
                  <button
                      onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
                      className="w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-purple-900/50 rounded transition-colors"
                  >
                    {language === 'en' ? '🇹🇷 Türkçe' : '🇬🇧 English'}
                  </button>
                </div>
              </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <div
                  className="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl overflow-hidden">
                <img
                    src="/images/enes.jpeg"  // Mutlak yol
                    alt="Profil Resmi"
                    className="w-[175%] h-[175%] object-cover"
                />
              </div>
            </div>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
                {t.hero.greeting} <span
                    className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">{t.hero.name}</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up animation-delay-200">
                {t.hero.title}
              </p>
              <div className="flex justify-center space-x-4 animate-slide-up animation-delay-400">
                <button
                    onClick={() => scrollToSection('projects')}
                    className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {t.hero.viewWork}
              </button>
              <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400/10 hover:scale-105 transition-all duration-300"
              >
                {t.hero.contactMe}
              </button>
            </div>
            <div className="flex justify-center space-x-4 animate-slide-up animation-delay-400 p-5">
              <div className="flex justify-center space-x-6">
                <a href="https://github.com/svenes25" className="bg-white/5 p-4 rounded-full hover:bg-purple-500/20 transition-all hover:scale-110">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/enes-eren-seven/" className="bg-white/5 p-4 rounded-full hover:bg-purple-500/20 transition-all hover:scale-110">
                  <Linkedin size={24} />
                </a>
                <a
                    href="https://www.kaggle.com/eneserenseven"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 p-4 rounded-full hover:bg-purple-500/20 transition-all hover:scale-110 flex items-center justify-center"
                >
                  <img
                      src="/images/image.png" // Public klasöründeki mutlak yol
                      alt="Kaggle Profilim"
                      className="w-6 h-6 object-contain" // Konteyner p-4'ün içine sığması için w-6 h-6 (24x24) kullanılır
                  />
                </a>
                <a href="mailto:eneseren2526@gmail.com" className="bg-white/5 p-4 rounded-full hover:bg-purple-500/20 transition-all hover:scale-110">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">{t.about.title}</h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <p className="text-lg text-gray-300 mb-6">
                {t.about.paragraph1}
              </p>
              <p className="text-lg text-gray-300 mb-6">
                {t.about.paragraph2}
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center space-x-2 bg-purple-900/30 px-4 py-2 rounded-full">
                  <Code size={20} className="text-purple-400" />
                  <span>{t.about.cleanCode}</span>
                </div>
                <div className="flex items-center space-x-2 bg-purple-900/30 px-4 py-2 rounded-full">
                  <Palette size={20} className="text-pink-400" />
                  <span>{t.about.modernDesign}</span>
                </div>
                <div className="flex items-center space-x-2 bg-purple-900/30 px-4 py-2 rounded-full">
                  <Zap size={20} className="text-yellow-400" />
                  <span>{t.about.fastPerformance}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 bg-black/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">{t.experience.title}</h2>
            <div className="space-y-6">
              {t.experience.items.map((item, index) => (
                  <div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                      <div className="flex items-start space-x-4">
                        <div className="bg-purple-500/20 p-3 rounded-lg group-hover:bg-purple-500/30 transition-all flex-shrink-0">
                          <Briefcase size={24} className="text-purple-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{item.role}</h3>
                          <p className="text-purple-400">{item.company}</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-400 md:text-right">{item.duration}</span>
                    </div>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">{t.projects.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.projects.items.map((project, index) => (
                  <div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="h-48 bg-gradient-to-br from-purple-600/50 to-pink-600/50 rounded-xl mb-4 flex items-center justify-center">
                      <Code size={48} className="text-white/80 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {projects[index].tech.map((tech, i) => (
                          <span key={i} className="text-xs bg-purple-900/50 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                      ))}
                    </div>
                    <a
                        href={projects[index].link}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      {t.projects.viewProject} <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section id="articles" className="py-20 px-4 bg-black/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">{t.articles.title}</h2>
            <div className="space-y-6">
              {t.articles.items.map((article, index) => (
                  <div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-pink-500/20 p-3 rounded-lg group-hover:bg-pink-500/30 transition-all flex-shrink-0">
                        <FileText size={24} className="text-pink-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors">{article.title}</h3>
                        <p className="text-gray-400 mb-3 text-sm">{article.excerpt}</p>
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span className="text-sm text-gray-500">{article.date}</span>
                          <a href="#" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm">
                            {t.articles.readMore} <ExternalLink size={14} className="ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">{t.skills.title}</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {skills.map((category, index) => (
                  <div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold mb-4 text-purple-400">{t.skills[category.name.toLowerCase()]}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                          <li key={i} className="text-gray-300 flex items-center">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                            {item}
                          </li>
                      ))}
                    </ul>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications  Section */}
        <section id="certifications" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">{t.certifications.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {t.certifications.items.map((cert, index) => (
                  <div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-yellow-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-yellow-500/20 p-3 rounded-lg group-hover:bg-yellow-500/30 transition-all flex-shrink-0">
                        <Award size={24} className="text-yellow-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-1">{cert.name}</h3>
                        <p className="text-yellow-400 text-sm mb-2">{cert.issuer}</p>
                        <p className="text-gray-400 text-sm">{cert.date}</p>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.contact.title}</h2>
            <p className="text-xl text-gray-300 mb-12">
              {t.contact.description}
            </p>
            <div className="flex justify-center space-x-6 mb-12">
              <a href="https://github.com/svenes25" className="bg-white/5 p-4 rounded-full hover:bg-purple-500/20 transition-all hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/enes-eren-seven/" className="bg-white/5 p-4 rounded-full hover:bg-purple-500/20 transition-all hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a
                  href="https://www.kaggle.com/eneserenseven"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 p-4 rounded-full hover:bg-purple-500/20 transition-all hover:scale-110 flex items-center justify-center"
              >
                <img
                    src="/images/image.png" // Public klasöründeki mutlak yol
                    alt="Kaggle Profilim"
                    className="w-6 h-6 object-contain" // Konteyner p-4'ün içine sığması için w-6 h-6 (24x24) kullanılır
                />
              </a>
              <a href="mailto:eneseren2526@gmail.com" className="bg-white/5 p-4 rounded-full hover:bg-purple-500/20 transition-all hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
            <a
                href="mailto:eneseren2526@gmail.com"
                className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {t.contact.sendEmail}
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto text-center text-gray-400">
            <p>&copy; 2024 {t.hero.name}. {t.footer.rights}</p>
          </div>
        </footer>
      </div>
  );
}
