"use client";

import React, { useCallback, useMemo } from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { Heart, Compass, Sparkles, Star, Quote, ArrowRight, ChevronLeft, ChevronRight, MapPin, Clock, MessageCircle, Mail, ArrowUp, Calendar } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

// Ícone customizado do Instagram
const InstagramIcon = ({ size = 24, className = "", strokeWidth = 1.5 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

// Dados dos posts do Instagram com as URLs limpas
const instagramPosts = [
  { id: 1, image: "/insta1.jpg", link: "https://www.instagram.com/p/DYSSab0EVhY/" },
  { id: 2, image: "/insta2.jpg", link: "https://www.instagram.com/p/DY2Yuahka55/" },
  { id: 3, image: "/insta3.jpg", link: "https://www.instagram.com/p/DVG9LF8Ec3f/" },
  { id: 4, image: "/insta4.jpg", link: "https://www.instagram.com/p/DT3etUID-ml/" },
  { id: 5, image: "/insta5.jpg", link: "https://www.instagram.com/p/DTk1Viskals/" },
];

const testimonials = [
  {
    id: 1,
    author: "Alisson Soares",
    text: "Sueli é um excelente profissional, tenho um carinho e uma admiração enorme por toda ajuda que me deu durante todos esses anos! Profissional extremamente competente e com brilho nos olhos pela profissão! "
  },
  {
    id: 2,
    author: "Eliana Alves",
    text: "Foi muito boa ,sempre muito calma ,educada e dedicada a seus pacientes e familiares,uma excelente profissional "
  },
  {
    id: 3,
    author: "Rebeca Fagundes",
    text: "Alguém que faz da profissão além ofício. Atenciosa e doce!"
  },
  {
    id: 4,
    author: "Roseane Sales",
    text: "Excelente profissional "
  },
  {
    id: 5,
    author: "Julieta Camargo",
    text: "Sueli é uma das melhores profissionais de psicologia que eu conheço e tenho a honra de ser paciente. Uma profissional ímpar, que trata a paciente com humanidade, ética e técnica. Sou muito grata por estar há dois anos sendo cuidada por essa psicóloga maravilhosa! Indico demais!"
  }
];

// Horários de Funcionamento
const operatingHours = [
  { day: "Segunda-feira", hours: "08:00–11:00" },
  { day: "Terça-feira", hours: "08:00–11:00" },
  { day: "Quarta-feira", hours: "08:00–11:00" },
  { day: "Quinta-feira", hours: "13:00–18:00" },
  { day: "Sexta-feira", hours: "07:30–12:00" },
  { day: "Sábado", hours: "07:30–14:00" },
  { day: "Domingo", hours: "Fechado" },
];

const whatsappLink = "https://wa.me/5515996542105?text=Ol%C3%A1%2C%20Sueli%21%20Gostaria%20de%20agendar%20uma%20consulta.";

export default function Home() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const autoScrollPlugin = useMemo(() =>
    AutoScroll({ speed: 1, stopOnMouseEnter: true, stopOnInteraction: true }),
    []);

  const instaAutoScrollPlugin = useMemo(() =>
    AutoScroll({ speed: 1.2, stopOnMouseEnter: true, stopOnInteraction: true }),
    []);

  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true, dragFree: false }, [autoScrollPlugin]);
  const [emblaInstaRef, emblaInstaApi] = useEmblaCarousel({ align: "start", loop: true, dragFree: false }, [instaAutoScrollPlugin]);

  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev(); }, [emblaApi]);
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext(); }, [emblaApi]);

  const scrollInstaPrev = useCallback(() => { if (emblaInstaApi) emblaInstaApi.scrollPrev(); }, [emblaInstaApi]);
  const scrollInstaNext = useCallback(() => { if (emblaInstaApi) emblaInstaApi.scrollNext(); }, [emblaInstaApi]);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* 1. Hero Section */}
      <section id="inicio" className="relative pt-32 pb-28 lg:pt-36 lg:pb-32 px-4 sm:px-6 lg:px-8 bg-[#E6F1F0] min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-white/50 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-sueli-rose-light/15 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 } as any}
            className="order-2 lg:order-1 flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="w-16 h-1.5 bg-sueli-rose rounded-full mb-8 shadow-sm"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] font-bold text-sueli-teal mb-4 leading-[1.15] tracking-tight max-w-2xl text-balance">
              Cuidar da sua saúde mental, <span className="text-sueli-rose">é transformar a sua história.</span>
            </h1>
            <p className="text-sueli-teal/70 font-semibold mb-10 tracking-[0.1em] uppercase text-sm">CRP 06/87929</p>

            <motion.button
              onClick={() => window.open(whatsappLink, '_blank')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-sueli-teal hover:bg-sueli-rose text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-[0_8px_30px_rgba(76,161,155,0.25)] w-full sm:w-auto"
            >
              Agendar Consulta
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 } as any}
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end mb-4 lg:mb-0 lg:mt-0"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] xl:w-[460px] xl:h-[460px] group">
              <div className="absolute inset-0 bg-white/40 backdrop-blur-md border-[3px] border-sueli-rose shadow-xl rounded-full overflow-hidden transition-all duration-500 group-hover:bg-white/60">
                <Image
                  src="/hero.png"
                  alt="Sueli Lopes"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Áreas de Atuação */}
      <section id="atuacao" className="pt-20 pb-24 lg:pt-28 lg:pb-32 relative bg-white -mt-12 lg:-mt-16 rounded-t-[3rem] lg:rounded-t-[4rem] z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" } as any}
            className="text-center max-w-4xl mx-auto mb-16 lg:mb-24 flex flex-col items-center"
          >
            <div className="w-12 h-1.5 bg-sueli-rose rounded-full mb-8 shadow-sm"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sueli-teal tracking-tight text-balance">
              Como posso ajudar na sua jornada?
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <motion.div variants={itemVariants} className="group bg-white rounded-[2rem] p-8 lg:p-10 border border-sueli-teal/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(76,161,155,0.08)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center md:items-start md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-[#FDF0F0] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Heart className="w-8 h-8 text-sueli-rose" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-sueli-teal mb-4">Psicoterapia Clínica</h3>
              <p className="text-sm text-foreground/70 leading-relaxed font-light flex-grow">
                Acolhimento para crianças, adolescentes e adultos. Um espaço seguro para lidar com ansiedade, depressão, transições de vida e encontrar maior equilíbrio emocional.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="group bg-white rounded-[2rem] p-8 lg:p-10 border border-sueli-teal/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(76,161,155,0.08)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center md:items-start md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-[#FDF0F0] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Compass className="w-8 h-8 text-sueli-rose" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-sueli-teal mb-4">Orientação de Carreira</h3>
              <p className="text-sm text-foreground/70 leading-relaxed font-light flex-grow">
                Apoio em processos de escolha profissional, transição de carreira ou recolocação no mercado. Encontre clareza, propósito e alinhamento com seus valores.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="group bg-white rounded-[2rem] p-8 lg:p-10 border border-sueli-teal/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(76,161,155,0.08)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center md:items-start md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-[#FDF0F0] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Sparkles className="w-8 h-8 text-sueli-rose" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-sueli-teal mb-4">Desenvolvimento Pessoal</h3>
              <p className="text-sm text-foreground/70 leading-relaxed font-light flex-grow">
                Foco no autoconhecimento e na construção da inteligência emocional para melhorar seus relacionamentos interpessoais e a sua qualidade de vida diária.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Sobre Mim */}
      <section id="sobre" className="py-24 lg:py-32 relative bg-[#F7FBFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" } as any}
              className="order-1 lg:hidden text-center flex flex-col items-center"
            >
              <div className="w-12 h-1.5 bg-sueli-rose rounded-full mb-6 shadow-sm"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-sueli-teal mb-4 tracking-tight leading-tight">Muito prazer, <span className="text-sueli-rose">sou Sueli Lopes.</span></h2>
              <h3 className="text-sm font-bold text-sueli-teal/70 uppercase tracking-[0.2em]">Psicóloga Clínica • CRP 06/87929</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" } as any}
              className="order-2 lg:order-1"
            >
              <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-[2rem] border-[3px] border-sueli-rose bg-white shadow-[0_8px_30px_rgba(76,161,155,0.1)] overflow-hidden group">
                <Image
                  src="/aboutme.png"
                  alt="Sueli Lopes"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-sueli-teal/0 transition-all duration-500 group-hover:bg-sueli-teal/5 pointer-events-none"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 } as any}
              className="order-3 lg:order-2 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="hidden lg:block">
                <div className="w-12 h-1.5 bg-sueli-rose rounded-full mb-8 shadow-sm"></div>
                <h2 className="text-4xl lg:text-5xl font-bold text-sueli-teal mb-4 tracking-tight leading-tight">Muito prazer, <br /><span className="text-sueli-rose">sou Sueli Lopes.</span></h2>
                <h3 className="text-sm font-bold text-sueli-teal/70 mb-8 uppercase tracking-[0.2em]">Psicóloga Clínica • CRP 06/87929</h3>
              </div>

              <div className="space-y-6 text-foreground/80 font-light leading-relaxed text-lg max-w-lg lg:max-w-none">
                <p>Acredito que a terapia é um espaço sagrado de reencontro consigo mesmo. Com mais de 20 anos de experiência clínica, dedico minha trajetória a oferecer uma escuta atenta, ética e profundamente humana.</p>
                <p>Meu objetivo não é apenas tratar sintomas, mas caminhar ao seu lado na construção de uma vida mais leve, com significado e alinhada à sua verdadeira essência.</p>
                <p>Seja bem-vindo(a) a um ambiente seguro, livre de julgamentos e totalmente preparado para acolher a sua história em qualquer fase da vida.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Instagram Carousel */}
      <section id="conteudos" className="py-24 bg-white overflow-hidden border-t border-sueli-teal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-1.5 bg-sueli-rose rounded-full mb-8 shadow-sm"></div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sueli-teal mb-4 tracking-tight">
                Acompanhe meus conteúdos
              </h2>

              <p className="text-foreground/80 text-lg">
                Acompanhe o perfil <a href="https://instagram.com/suelilopespsicologa" target="_blank" rel="noreferrer" className="text-sueli-rose font-bold hover:underline">@suelilopespsicologa</a> para reflexões diárias sobre psicologia e bem-estar.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <button
              onClick={scrollInstaPrev}
              className="absolute left-0 md:-left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-sueli-rose/30 text-sueli-rose hover:bg-sueli-rose hover:text-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} strokeWidth={1.5} />
            </button>

            <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaInstaRef}>
              <div className="flex -ml-6">
                {instagramPosts.map((post) => (
                  <div key={post.id} className="flex-[0_0_80%] sm:flex-[0_0_40%] lg:flex-[0_0_25%] pl-6 min-w-0">
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noreferrer"
                      className="block relative aspect-square rounded-[2rem] overflow-hidden group transition-shadow duration-500 hover:shadow-[0_10px_40px_rgba(209,158,159,0.3)] bg-sueli-rose/5"
                    >
                      <Image
                        src={post.image}
                        alt={`Postagem do Instagram ${post.id}`}
                        fill
                        sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-sueli-rose/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                        <InstagramIcon size={40} className="text-white" strokeWidth={1.5} />
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollInstaNext}
              className="absolute right-0 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-sueli-rose/30 text-sueli-rose hover:bg-sueli-rose hover:text-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
              aria-label="Próximo"
            >
              <ChevronRight size={24} strokeWidth={1.5} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 5. Avaliações */}
      <section id="avaliacoes" className="py-24 bg-[#F7FBFB] relative overflow-hidden border-t border-sueli-teal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-1.5 bg-sueli-rose rounded-full mb-8 shadow-sm"></div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sueli-teal mb-4 tracking-tight">Avaliações</h2>
              <p className="text-foreground/70 text-lg text-balance">Experiências reais de quem redescobriu o próprio caminho.</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-12"
          >
            <button
              onClick={scrollPrev}
              className="absolute left-0 md:-left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-sueli-rose/30 text-sueli-rose hover:bg-sueli-rose hover:text-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} strokeWidth={1.5} />
            </button>

            <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
              <div className="flex -ml-6 items-stretch">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6 min-w-0">
                    <div className="bg-white border border-sueli-teal/5 p-8 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-full relative">
                      <div className="absolute top-6 right-6 text-sueli-teal/5"><Quote className="w-12 h-12" fill="currentColor" /></div>
                      <div className="relative z-10">
                        <div className="flex gap-1 mb-6">
                          {[...Array(5)].map((_, i) => (<Star key={i} size={18} className="text-sueli-rose" fill="currentColor" strokeWidth={1} />))}
                        </div>
                        <p className="text-foreground/80 font-light text-base leading-relaxed mb-8 italic">"{testimonial.text}"</p>
                      </div>
                      <div className="mt-auto relative z-10">
                        <p className="font-bold text-sm text-sueli-teal uppercase tracking-widest">{testimonial.author}</p>
                        <p className="text-xs text-foreground/50 mt-1 font-medium">Avaliação no Google</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollNext}
              className="absolute right-0 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-sueli-rose/30 text-sueli-rose hover:bg-sueli-rose hover:text-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
              aria-label="Próximo"
            >
              <ChevronRight size={24} strokeWidth={1.5} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <a
              href="https://share.google/b2jFC2G3pzujZnfLZ"
              target="_blank"
              rel="noreferrer"
              className="group relative px-8 py-4 bg-transparent border border-sueli-rose text-sueli-rose hover:bg-sueli-rose hover:text-white uppercase tracking-[0.15em] text-xs font-bold rounded-full overflow-hidden transition-all duration-500 flex items-center gap-3 shadow-sm"
            >
              Ler mais avaliações no Google
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 6. Onde Nos Encontrar / Contato */}
      <section id="contato" className="py-24 lg:py-32 relative bg-white border-t border-sueli-teal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-16 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-1.5 bg-sueli-rose rounded-full mb-8 shadow-sm"></div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sueli-teal mb-4 tracking-tight">
                Onde nos encontrar
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center lg:items-start max-w-lg mx-auto lg:max-w-none">

            {/* Bloco de Informações 100% Centralizado no Mobile */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" } as any}
              className="bg-white p-8 lg:p-10 rounded-[2rem] border border-sueli-teal/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col items-center lg:items-start text-center lg:text-left space-y-10 w-full"
            >

              {/* Seção Endereço */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 w-full border-b border-sueli-teal/10 pb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#FDF0F0] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-sueli-rose" />
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <h3 className="text-xl font-bold text-sueli-teal mb-2">Endereço</h3>
                  <p className="text-foreground/80 leading-relaxed text-center lg:text-left">
                    Av. Darcí Viêira, 1904 - Centro<br />
                    Itapetininga - SP<br />
                    CEP: 18200-310
                  </p>
                </div>
              </div>

              {/* Seção Horários */}
              <div className="w-full flex flex-col items-center lg:items-start">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FDF0F0] flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-sueli-rose" />
                  </div>
                  <h3 className="text-xl font-bold text-sueli-teal mt-2 lg:mt-0 lg:pt-2">Horário de Atendimento</h3>
                </div>

                {/* Container estreito no mobile para centralizar a lista */}
                <div className="space-y-4 w-full max-w-[300px] lg:max-w-none mx-auto lg:mx-0">
                  {operatingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <span className="text-foreground/70 font-medium">{schedule.day}</span>
                      <span className={`font-semibold ${schedule.hours === "Fechado" ? "text-sueli-rose" : "text-sueli-teal"}`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>

            {/* Bloco do Mapa Centralizado no Mobile */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 } as any}
              className="w-full h-[400px] sm:h-[450px] lg:h-full lg:min-h-[500px]"
            >
              <div className="w-full h-full rounded-[2rem] overflow-hidden border-[3px] border-sueli-teal/10 shadow-[0_8px_30px_rgba(0,0,0,0.05)] bg-[#F7FBFB]">
                <iframe
                  src="https://maps.google.com/maps?q=Av.%20Darcí%20Viêira,%201904%20-%20Centro,%20Itapetininga%20-%20SP,%2018200-310&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de localização Sueli Lopes"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="bg-[#E6F1F0] pt-20 pb-8 border-t border-sueli-teal/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

            <div className="md:col-span-5 flex flex-col items-start text-center md:text-left mx-auto md:mx-0">
              <span className="text-sueli-rose text-xs font-bold tracking-[0.2em] uppercase mb-6 block mx-auto md:mx-0">
                CRP 06/87929
              </span>
              <div className="flex items-center gap-4 mb-6 justify-center md:justify-start w-full">
                <Image
                  src="/logo.png"
                  alt="Sueli Lopes Psicóloga"
                  width={110}
                  height={110}
                  className="object-contain h-24 w-auto"
                />
                <div className="text-left">
                  <h3 className="text-sueli-teal font-bold text-lg leading-tight">Sueli Lopes</h3>
                  <p className="text-sueli-rose text-xs uppercase tracking-widest">Psicóloga Clínica</p>
                </div>
              </div>

              <p className="text-foreground/80 font-medium leading-relaxed mb-8 max-w-sm mx-auto md:mx-0">
                Acolhimento humanizado e escuta ativa para te ajudar a ressignificar sua história e encontrar o equilíbrio emocional.
              </p>

              <motion.button
                onClick={() => window.open(whatsappLink, '_blank')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-sueli-rose hover:bg-sueli-teal text-white px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-sm flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                Agendar Consulta
                <Calendar className="w-4 h-4" strokeWidth={2} />
              </motion.button>
            </div>

            <div className="md:col-span-3 text-center md:text-left">
              <h4 className="text-sueli-rose text-xs font-bold tracking-[0.2em] uppercase mb-6">Navegação</h4>
              <ul className="space-y-4 text-foreground/80 font-medium">
                <li><a href="#inicio" className="hover:text-sueli-teal transition-colors">Início</a></li>
                <li><a href="#atuacao" className="hover:text-sueli-teal transition-colors">Como posso ajudar?</a></li>
                <li><a href="#sobre" className="hover:text-sueli-teal transition-colors">Sobre mim</a></li>
                <li><a href="#conteudos" className="hover:text-sueli-teal transition-colors">Conteúdos no Instagram</a></li>
                <li><a href="#avaliacoes" className="hover:text-sueli-teal transition-colors">Avaliações</a></li>
                <li><a href="#contato" className="hover:text-sueli-teal transition-colors">Onde nos encontrar</a></li>
              </ul>
            </div>

            <div className="md:col-span-4 text-center md:text-left">
              <h4 className="text-sueli-rose text-xs font-bold tracking-[0.2em] uppercase mb-6">Contato</h4>
              <ul className="space-y-5 text-foreground/80 font-medium inline-block text-left">
                <li>
                  <a href="mailto:suelilopespsicologa@gmail.com" className="flex items-center gap-3 hover:text-sueli-teal transition-colors">
                    <Mail className="w-5 h-5 text-sueli-rose shrink-0" />
                    <span className="truncate">suelilopespsicologa@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/suelilopespsicologa" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-sueli-teal transition-colors">
                    <InstagramIcon size={20} className="text-sueli-rose shrink-0" />
                    <span>@suelilopespsicologa</span>
                  </a>
                </li>
                <li>
                  <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-sueli-teal transition-colors">
                    <MessageCircle className="w-5 h-5 text-sueli-rose shrink-0" />
                    <span>(15) 99654-2105</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-sueli-teal/20 flex flex-col items-center justify-center relative">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="absolute -top-6 bg-white text-sueli-rose hover:text-sueli-teal p-3 rounded-full transition-colors shadow-sm"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5" strokeWidth={2} />
            </button>
            <p className="text-foreground/50 text-sm font-medium text-center mt-2">
              © 2026 Sueli Lopes - Psicóloga Clínica.<br className="md:hidden" /> Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}