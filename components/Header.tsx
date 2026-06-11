"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, Heart } from "lucide-react";
import Image from "next/image";

const whatsappLink = "https://wa.me/5515996542105?text=Ol%C3%A1%2C%20Sueli%21%20Gostaria%20de%20agendar%20uma%20consulta.";

// Componente para criar os coraçõezinhos animados
const FloatingHeart = ({ delay, startX, startY }: { delay: number, startX: number, startY: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0, y: startY, x: startX }}
            animate={{
                opacity: [0, 0.9, 0.8, 0], // Aparece e vai sumindo aos poucos
                scale: [0.3, 1.2, 0.8], // Dá um salto para aparecer e depois estabiliza
                y: [startY, startY - 40, startY - 90], // Flutua para cima saindo da lâmpada
                x: [startX, startX + (Math.random() - 0.5) * 30, startX + (Math.random() - 0.5) * 50], // Movimento lateral como bolhas
            }}
            transition={{
                duration: 3.5, // Duração da flutuação
                delay: delay, // Tempo de espera para sair um depois do outro
                ease: "easeOut",
                repeat: Infinity, // Repete a animação
                repeatDelay: 4 // Espera 4 segundos antes de soltar mais corações
            }}
            className="absolute z-10 pointer-events-none"
        >
            <Heart
                size={14}
                fill="currentColor"
                strokeWidth={1}
                className="text-sueli-rose opacity-90 drop-shadow-sm"
            />
        </motion.div>
    );
};

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Efeito para detectar o scroll da página
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { name: "Início", href: "#inicio" },
        { name: "Sobre mim", href: "#sobre" },
        { name: "Atuação", href: "#atuacao" },
        { name: "Conteúdos do Instagram", href: "#conteudos" },
        { name: "Avaliações", href: "#avaliacoes" },
        { name: "Onde nos encontrar", href: "#contato" },
    ];

    return (
        <>
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm py-0"
                    : "bg-transparent py-2"
                    }`}
            >
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-28 flex items-center justify-between">

                    {/* Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="p-2 -ml-2 text-sueli-teal hover:bg-sueli-rose/20 rounded-full transition-colors flex items-center justify-center"
                        aria-label="Abrir menu"
                    >
                        <Menu className="w-7 h-7" strokeWidth={1.5} />
                    </button>

                    {/* Logo Area Centralizada */}
                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                        <div className="relative inline-flex items-center justify-center">
                            <Image
                                src="/logo.png"
                                alt="Sueli Lopes Psicóloga"
                                width={240}
                                height={96}
                                className="object-contain h-24 w-auto relative z-20"
                                priority
                            />
                            {/* Container dos corações flutuantes */}
                            <div className="absolute z-10" style={{ left: '55.5%', top: '56%', transform: 'translate(-50%, -50%)' }}>
                                <FloatingHeart delay={0.2} startX={0} startY={0} />
                                <FloatingHeart delay={0.9} startX={3} startY={-2} />
                                <FloatingHeart delay={1.6} startX={-3} startY={3} />
                                <FloatingHeart delay={2.3} startX={5} startY={-5} />
                                <FloatingHeart delay={3.0} startX={-4} startY={4} />
                            </div>
                        </div>
                    </div>

                    <div className="w-10"></div>
                </div>
            </motion.header>

            {/* Menu Lateral (Sidebar) */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Fundo escuro/desfocado */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-sueli-teal/20 backdrop-blur-sm z-50"
                        />

                        {/* Painel do Menu */}
                        <motion.aside
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 h-screen w-[85vw] max-w-sm bg-white z-50 shadow-2xl flex flex-col"
                        >
                            {/* Cabeçalho do Menu */}
                            <div className="h-24 flex items-center justify-between px-8 border-b border-sueli-teal/5 shrink-0">
                                <span className="font-bold text-sueli-teal tracking-widest uppercase text-sm">Navegação</span>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 -mr-2 text-sueli-teal hover:text-sueli-rose hover:bg-sueli-rose/10 rounded-full transition-colors flex items-center justify-center"
                                >
                                    <X className="w-6 h-6" strokeWidth={1.5} />
                                </button>
                            </div>

                            {/* Links de Navegação */}
                            <nav className="flex flex-col px-6 py-8 gap-2 overflow-y-auto">
                                {menuItems.map((item, index) => (
                                    <motion.a
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + index * 0.05 }}
                                        key={index}
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-foreground/80 text-lg font-medium py-3 px-4 rounded-xl hover:bg-[#F7FBFB] hover:text-sueli-teal transition-all flex items-center group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-sueli-rose opacity-0 group-hover:opacity-100 mr-0 group-hover:mr-4 transition-all duration-300"></span>
                                        {item.name}
                                    </motion.a>
                                ))}
                            </nav>

                            {/* Rodapé do Menu (Contatos) */}
                            <div className="mt-auto bg-[#F7FBFB] p-8 shrink-0 rounded-t-3xl border-t border-sueli-teal/5">
                                <h3 className="text-xs font-bold text-sueli-teal/70 mb-6 uppercase tracking-[0.15em]">Fale Conosco</h3>

                                <div className="flex flex-col gap-5 text-sm text-foreground/80">
                                    <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.03)] group-hover:shadow-[0_4px_15px_rgba(76,161,155,0.1)] transition-all">
                                            <Phone className="w-4 h-4 text-sueli-rose" />
                                        </div>
                                        <span className="font-medium group-hover:text-sueli-teal transition-colors">(15) 99654-2105</span>
                                    </a>

                                    <a href="mailto:suelilopespsicologa@gmail.com" className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.03)] group-hover:shadow-[0_4px_15px_rgba(76,161,155,0.1)] transition-all">
                                            <Mail className="w-4 h-4 text-sueli-rose" />
                                        </div>
                                        <span className="font-medium group-hover:text-sueli-teal transition-colors truncate">suelilopespsicologa@gmail.com</span>
                                    </a>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.03)] shrink-0">
                                            <MapPin className="w-4 h-4 text-sueli-rose" />
                                        </div>
                                        <span className="leading-relaxed font-medium pt-1">Av. Darcí Viêira, 1904 <br />Centro, Itapetininga - SP</span>
                                    </div>
                                </div>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}