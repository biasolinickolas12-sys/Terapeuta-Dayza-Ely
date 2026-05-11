import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView, useMotionValue, useMotionTemplate } from "motion/react";
import { 
  Sparkles, 
  Heart, 
  Eye,
  ArrowRight, 
  CheckCircle2, 
  Leaf, 
  Magnet,
  Zap,
  AlertCircle,
  Calendar, 
  Instagram, 
  Power,
  MessageCircle,
  XCircle,
  ShieldCheck,
  Facebook,
  Quote,
  Twitter,
  User,
  Users,
  Layers,
  Stars,
  BookOpen,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  HelpCircle,
  Infinity,
  Sunrise,
  Orbit,
  Check,
  Star,
  DollarSign,
  Bird,
  HandFist,
  Brain,
  UserMinus,
  CircleDashed,
  BatteryWarning,
  RefreshCcw,
  Moon,
  HeartCrack,
  AlertTriangle
} from "lucide-react";
import React, { useState, useEffect } from "react";
import ConstellationBackground from "./components/ConstellationBackground";

const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

const SystemicTree = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.14" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {/* Trunk and Main Branches */}
    <path d="M12 18V10" />
    <path d="M12 14l-4-3" />
    <path d="M12 14l4-3" />
    <path d="M12 12l-2-4" />
    <path d="M12 12l2-4" />
    
    {/* Leaves/Canopy Shapes */}
    <path d="M12 5.5c1.5-1.5 3.5-1.5 3.5 0s-2 3.5-3.5 4.5c-1.5-1-3.5-3-3.5-4.5s2-1.5 3.5 0z" />
    <path d="M8 9.5c1.5-1.5 3.3-1 3.3.5s-1.8 3-3.3 4c-1.5-1-3.3-2.5-3.3-4s1.8-2 3.3-.5z" />
    <path d="M16 9.5c-1.5-1.5-3.3-1-3.3.5s1.8 3 3.3 4c1.5-1 3.3-2.5 3.3-4s-1.8-2-3.3-.5z" />
    <path d="M6 14.5c1-1 2.5-0.5 2.5 1s-1.5 2.5-2.5 3c-1-0.5-2.5-1.5-2.5-3s1.5-2 2.5-1z" />
    <path d="M18 14.5c-1-1-2.5-0.5-2.5 1s1.5 2.5 2.5 3c1-0.5 2.5-1.5 2.5-3s-1.5-2-2.5-1z" />

    {/* Roots */}
    <path d="M12 18c-1 1-3 1.5-4 3" />
    <path d="M12 18c1 1 3 1.5 4 3" />
    <path d="M12 18v4" />
    <path d="M12 19.5l-1.5 1.5" />
    <path d="M12 19.5l1.5 1.5" />
  </svg>
);

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-16 md:py-24 px-4 md:px-12 lg:px-24 overflow-hidden ${className}`}>
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

// Custom Family Tree Icon to match the user's attachment
const FamilyTreeIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.425" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {/* Trunk and Branches */}
    <path d="M12 22V10" />
    <path d="M12 18l-4-3" />
    <path d="M12 15l4-3" />
    <path d="M12 12l-5-4" />
    <path d="M12 10l5-4" />
    
    {/* Top Node */}
    <circle cx="12" cy="5" r="3" className="fill-current/5" />
    <path d="M11 5.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M10 7a2 2 0 0 1 4 0" />
    
    {/* Mid Left Node */}
    <circle cx="6" cy="11" r="2.5" className="fill-current/5" />
    <path d="M5.2 11.2a0.8 0 1 0 1.6 0 0.8 0 0 0-1.6 0M4.5 12.5a1.5 1.5 0 0 1 3 0" />
    
    {/* Mid Right Node */}
    <circle cx="18" cy="11" r="2.5" className="fill-current/5" />
    <path d="M17.2 11.2a0.8 0 1 0 1.6 0 0.8 0 0 0-1.6 0M16.5 12.5a1.5 1.5 0 0 1 3 0" />
    
    {/* Low Left Node */}
    <circle cx="7" cy="17" r="2.5" className="fill-current/5" />
    <path d="M6.2 17.2a0.8 0 1 0 1.6 0 0.8 0 0 0-1.6 0M5.5 18.5a1.5 1.5 0 0 1 3 0" />
    
    {/* Low Right Node */}
    <circle cx="17" cy="17" r="2.5" className="fill-current/5" />
    <path d="M16.2 17.2a0.8 0 1 0 1.6 0 0.8 0 0 0-1.6 0M15.5 18.5a1.5 1.5 0 0 1 3 0" />
  </svg>
);

const CrystalDiamond = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} style={{ filter: "drop-shadow(0 0 15px currentColor)" }}>
    <g stroke="currentColor" strokeWidth="0.5" strokeLinejoin="miter" opacity="0.9">
      <polygon points="50,5 85,35 50,50 15,35" fill="currentColor" fillOpacity="0.2" />
      <polygon points="15,35 50,50 50,95" fill="currentColor" fillOpacity="0.4" />
      <polygon points="85,35 50,50 50,95" fill="currentColor" fillOpacity="0.6" />
      <line x1="15" y1="35" x2="85" y2="35" opacity="0.5" />
      <line x1="50" y1="5" x2="50" y2="95" opacity="0.5" />
    </g>
  </svg>
);

const CrystalPrism = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} style={{ filter: "drop-shadow(0 0 15px currentColor)" }}>
    <g stroke="currentColor" strokeWidth="0.5" strokeLinejoin="miter" opacity="0.9">
      <polygon points="30,15 70,15 85,50 70,85 30,85 15,50" fill="currentColor" fillOpacity="0.1" />
      <polygon points="30,15 70,15 50,50" fill="currentColor" fillOpacity="0.3" />
      <polygon points="70,15 85,50 50,50" fill="currentColor" fillOpacity="0.5" />
      <polygon points="85,50 70,85 50,50" fill="currentColor" fillOpacity="0.7" />
      <polygon points="70,85 30,85 50,50" fill="currentColor" fillOpacity="0.6" />
      <polygon points="30,85 15,50 50,50" fill="currentColor" fillOpacity="0.4" />
      <polygon points="15,50 30,15 50,50" fill="currentColor" fillOpacity="0.2" />
    </g>
  </svg>
);

const CrystalOctahedron = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} style={{ filter: "drop-shadow(0 0 15px currentColor)" }}>
    <g stroke="currentColor" strokeWidth="0.5" strokeLinejoin="miter" opacity="0.9">
      <polygon points="50,10 90,50 50,55" fill="currentColor" fillOpacity="0.2" />
      <polygon points="50,10 10,50 50,55" fill="currentColor" fillOpacity="0.4" />
      <polygon points="50,90 90,50 50,55" fill="currentColor" fillOpacity="0.6" />
      <polygon points="50,90 10,50 50,55" fill="currentColor" fillOpacity="0.8" />
    </g>
  </svg>
);

const RecursiveTreeStatic = ({ 
  x, y, length, angle, depth, maxDepth, branchIndex = 0 
}: { 
  x: number; y: number; length: number; angle: number; depth: number; maxDepth: number; branchIndex?: number;
}) => {
  if (depth > maxDepth) return null;

  const endX = x + length * Math.cos((angle * Math.PI) / 180);
  const endY = y + length * Math.sin((angle * Math.PI) / 180);
  
  const curveOffset = (branchIndex % 2 === 0 ? 1 : -1) * length * 0.15;
  const midX = x + (length / 2) * Math.cos((angle * Math.PI) / 180) + curveOffset * Math.cos(((angle + 90) * Math.PI) / 180);
  const midY = y + (length / 2) * Math.sin((angle * Math.PI) / 180) + curveOffset * Math.sin(((angle + 90) * Math.PI) / 180);
  
  const strokeWidth = Math.max(0.45, Math.pow(maxDepth - depth + 1, 1.4) * 0.76);
  const inverseOpacity = Math.max(0.1, 0.45 - (depth / maxDepth) * 0.2);
  
  const spread1 = -22 + (branchIndex % 3) * 2;
  const spread2 = 25 - (depth % 2) * 4;
  const lenMultiplier1 = 0.80 + (branchIndex % 3) * 0.02;
  const lenMultiplier2 = 0.78 - (depth % 2) * 0.03;

  const isLeaf = depth >= maxDepth - 1;
  const showSparkle = isLeaf || (depth > 3 && branchIndex % 3 === 0);

  return (
    <g>
      <path 
        d={`M ${x} ${y} Q ${midX} ${midY} ${endX} ${endY}`}
        fill="none"
        stroke="currentColor" 
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        opacity={inverseOpacity}
      />
      {showSparkle && (
        <circle 
          cx={endX} cy={endY} 
          r={0.8 + (branchIndex % 3)} 
          fill={branchIndex % 2 === 0 ? "#FDE68A" : "#FFFFFF"}
          opacity={0.8}
          style={{ filter: "drop-shadow(0 0 6px currentColor)" }}
        />
      )}
      <RecursiveTreeStatic 
        x={endX} y={endY} 
        length={length * lenMultiplier1} 
        angle={angle + spread1} 
        depth={depth + 1} 
        maxDepth={maxDepth} 
        branchIndex={branchIndex * 2} 
      />
      <RecursiveTreeStatic 
        x={endX} y={endY} 
        length={length * lenMultiplier2} 
        angle={angle + spread2} 
        depth={depth + 1} 
        maxDepth={maxDepth} 
        branchIndex={branchIndex * 2 + 1} 
      />
      {depth > 1 && depth < maxDepth - 2 && branchIndex % 4 === 1 && (
        <RecursiveTreeStatic 
          x={endX} y={endY} 
          length={length * 0.6} 
          angle={angle + (branchIndex % 2 === 0 ? 35 : -35)} 
          depth={depth + 2} 
          maxDepth={maxDepth} 
          branchIndex={branchIndex * 3} 
        />
      )}
    </g>
  );
};

const ConstellationLayer = () => {
  const points = [
    {x: 10, y: 15}, {x: 25, y: 10}, {x: 45, y: 25}, {x: 15, y: 40}, 
    {x: 35, y: 55}, {x: 5, y: 75}, {x: 55, y: 80}, {x: 65, y: 15}, 
    {x: 85, y: 20}, {x: 75, y: 50}, {x: 95, y: 40}, {x: 90, y: 75}, 
    {x: 65, y: 65}, {x: 45, y: 45}, {x: 50, y: 30}, {x: 20, y: 65}, 
    {x: 80, y: 60}, {x: 70, y: 85}, {x: 30, y: 85}, {x: 95, y: 10},
    {x: 40, y: 10}, {x: 10, y: 90}, {x: 90, y: 90}, {x: 50, y: 5}
  ];

  const connections = [
    [0,1], [1,2], [0,3], [3,4], [2,14], [4,13], [3,15], [15,5], 
    [15,18], [13,14], [14,7], [7,8], [8,10], [10,9], [9,16], [16,11],
    [9,12], [12,17], [13,12], [4,6], [6,12], [1,20], [20,14], [5,21], [11,22],
    [7,23], [20,23]
  ];

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 mix-blend-screen opacity-70" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      {connections.map(([i, j], idx) => (
        <line 
          key={`conn-${idx}`}
          x1={points[i].x} y1={points[i].y} 
          x2={points[j].x} y2={points[j].y} 
          stroke="rgba(233,213,255,0.4)" 
          strokeWidth="0.15"
        />
      ))}
      {points.map((p, idx) => (
        <g key={`pt-${idx}`}>
          <circle cx={p.x} cy={p.y} r="0.15" fill="#FFF" />
          <circle cx={p.x} cy={p.y} r="0.5" fill="rgba(255,255,255,0.15)" />
          <motion.circle 
            cx={p.x} cy={p.y} r="0.3" 
            fill={idx % 2 === 0 ? "#FDE68A" : "#FFFFFF"} 
            style={{ filter: 'drop-shadow(0 0 2px currentColor)' }}
            animate={{ opacity: [0.3, 1, 0.3], r: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3 + (idx % 3), repeat: Infinity, ease: "easeInOut", delay: idx % 2 }}
          />
        </g>
      ))}
    </svg>
  );
};

const WhoIsForModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <div className="mt-12 w-full flex flex-col items-center">
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative group rounded-full px-8 py-4 border border-brand-magenta/40 bg-linear-to-r from-[#0D0718] via-[#2D1B4E] to-[#0D0718] shadow-[0_4px_15px_rgba(217,70,239,0.15)] hover:shadow-[0_8px_25px_rgba(217,70,239,0.3)] hover:border-brand-magenta/80 transition-all duration-500 overflow-hidden"
      >
        <div className="absolute inset-0 bg-brand-magenta/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 flex items-center justify-center gap-3">
          <Sparkles className="w-5 h-5 text-brand-magenta drop-shadow-[0_0_8px_rgba(217,70,239,0.5)]" />
          <span className="text-[#E9D5FF] tracking-wide font-medium text-lg uppercase font-accent">Para quem é esse trabalho?</span>
          <ArrowRight className="w-5 h-5 text-brand-magenta transition-transform group-hover:translate-x-1" />
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />
            
            {/* Modal Content */}            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2rem] border border-brand-magenta/40 bg-linear-to-b from-[#0D0718] via-[#2D1B4E] to-[#0D0718] shadow-[0_25px_50px_-12px_rgba(168,85,247,0.5)] p-0"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-20 p-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors group"
                aria-label="Fecar"
              >
                <XCircle className="w-6 h-6 text-white/50 group-hover:text-brand-magenta transition-colors" />
              </button>

              <div className="p-6 md:p-10 relative">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-magenta/50 to-transparent" />
                
                <div className="text-center mb-8">
                   <h3 className="text-2xl md:text-3xl font-display text-white italic mb-3">Para quem é esse trabalho?</h3>
                   <div className="ornamental-line max-w-[150px] mx-auto opacity-60" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Positives */}
                  <div className="space-y-4 relative">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-brand-green/20 border border-brand-green/30">
                        <Check className="w-4 h-4 text-[#4ADE80]" />
                      </div>
                      <h4 className="text-xl font-display text-white italic">Para mulheres que:</h4>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Estão cansadas de repetir os mesmos ciclos",
                        "Sentem que já tentaram de tudo e nada resolve",
                        "Querem se libertar emocionalmente",
                        "Desejam viver com mais paz e leveza"
                      ].map((text, i) => (
                        <li key={i} className="flex gap-2.5 text-white/80 leading-relaxed text-sm md:text-base font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#A855F7] mt-2 shrink-0 shadow-[0_0_8px_#A855F7]" />
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Negatives */}
                  <div className="space-y-4 relative">
                    <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -ml-4" />
                    
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-red-500/10 border border-red-500/20">
                        <svg className="w-4 h-4 text-[#F87171]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-display text-white italic">Para quem NÃO é:</h4>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Para quem busca solução superficial",
                        "Para quem não quer olhar para si",
                        "Para quem quer manter o mesmo padrão"
                      ].map((text, i) => (
                        <li key={i} className="flex gap-2.5 text-white/60 leading-relaxed text-sm md:text-base">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F87171]/50 mt-2 shrink-0" />
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 text-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="inline-flex flex-col items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-full border border-brand-magenta/30 flex items-center justify-center">
                      <Infinity className="w-5 h-5 text-brand-magenta opacity-70" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};


const whatsappLink = "https://wa.me/554584055138"; // Real Contact Number

const FeedbackSection = () => {
  const images = [
    "feedback_1.jpeg",
    "feedback_2.jpeg",
    "feedback_3.jpeg",
    "feedback_4.jpeg",
    "feedback_5.jpeg",
    "feedback_6.jpeg",
    "feedback_7.jpeg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Responsive cards to show
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSteps = Math.max(0, images.length - cardsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= totalSteps ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? totalSteps : prev - 1));
  };

  // Close modal on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedImage]);

  return (
    <Section id="feedbacks" className="bg-[#0D0718] pt-16 md:pt-48 relative overflow-hidden text-white">
      <div className="pb-16 md:pb-48 relative z-10">
        {/* Glowing Particle Background - Mature Spiritual Tones */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(40)].map((_, i) => {
          const size = Math.random() * 2 + 1;
          const colors = ['#9D4EDD', '#581845', '#C77DFF', '#B79494', '#9CAF88'];
          const color = colors[i % colors.length];
          return (
            <motion.div
              key={`particle-feedback-${i}`}
              animate={{ 
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                duration: 4 + Math.random() * 3, 
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              className="absolute rounded-full"
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
                boxShadow: `0 0 ${size * 8}px ${color}`,
              }}
            />
          );
        })}
      </div>

      {/* Subtle Aura Glows */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#581845]/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#9CAF88]/5 blur-[160px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 text-center mb-24 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-[#D946EF]/30 bg-[#0D0718]/40 mb-8 backdrop-blur-xl group relative overflow-hidden"
        >
          {/* Neon border glow effect */}
          <div className="absolute inset-0 border border-[#D946EF]/20 rounded-full blur-[2px]" />
          
          <div className="relative flex items-center gap-4">
            <div className="relative">
              <Brain className="w-5 h-5 text-[#D946EF] drop-shadow-[0_0_10px_#D946EF]" />
              <motion.div 
                animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-[#D946EF] blur-xl opacity-20 -z-10"
              />
            </div>
            <span className="text-white font-accent font-black uppercase tracking-[0.5em] text-[11px] drop-shadow-[0_0_15px_rgba(217,70,239,0.6)]">Relatos de Transformação</span>
          </div>
        </motion.div>
        
        <h2 className="text-4xl md:text-6xl font-display text-white leading-tight mb-8">
          Vidas que se <span className="heading-serif border-b-2 border-brand-magenta/40 italic">Reconectaram</span>
        </h2>
        
        <p className="max-w-2xl mx-auto text-slate-200 text-lg md:text-xl font-light mb-10 leading-relaxed">
          Histórias reais de mulheres que permitiram a cura sistêmica e abriram caminhos para uma nova vida através do <span className="text-[#C77DFF] font-bold">Método Dayza Ely</span>.
        </p>
        
        <div className="ornamental-line max-w-[240px] mx-auto opacity-50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-12">
        {/* Carousel Controls */}
        <div className="absolute top-1/2 -left-2 md:-left-12 -translate-y-1/2 z-30">
          <motion.button 
            whileHover={{ scale: 1.15, boxShadow: "0 0 25px rgba(217, 70, 239, 0.6)" }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="group relative p-4 md:p-6 rounded-full bg-[#0D0718]/60 backdrop-blur-xl border border-[#D946EF]/50 text-white shadow-[0_0_15px_rgba(217,70,239,0.2)] transition-all duration-500 flex items-center justify-center overflow-hidden"
          >
            {/* Animated background pulse */}
            <motion.div 
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-[#D946EF]"
            />
            <ChevronLeft className="w-5 h-5 md:w-7 md:h-7 relative z-10 group-hover:text-[#D946EF] transition-colors drop-shadow-[0_0_8px_#D946EF]" />
          </motion.button>
        </div>
        
        <div className="absolute top-1/2 -right-2 md:-right-12 -translate-y-1/2 z-30">
          <motion.button 
            whileHover={{ scale: 1.15, boxShadow: "0 0 25px rgba(217, 70, 239, 0.6)" }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="group relative p-4 md:p-6 rounded-full bg-[#0D0718]/60 backdrop-blur-xl border border-[#D946EF]/50 text-white shadow-[0_0_15px_rgba(217,70,239,0.2)] transition-all duration-500 flex items-center justify-center overflow-hidden"
          >
            {/* Animated background pulse */}
            <motion.div 
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-[#D946EF]"
            />
            <ChevronRight className="w-5 h-5 md:w-7 md:h-7 relative z-10 group-hover:text-[#D946EF] transition-colors drop-shadow-[0_0_8px_#D946EF]" />
          </motion.button>
        </div>

        {/* Carousel Window */}
        <div className="overflow-hidden pt-12 -mt-12">
          <motion.div 
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50) nextSlide();
              if (info.offset.x > 50) prevSlide();
            }}
            animate={{ x: `-${currentIndex * (100 / cardsToShow)}%` }}
            transition={{ type: "spring", stiffness: 180, damping: 28 }}
            className="flex pb-12 cursor-grab active:cursor-grabbing"
          >
            {images.map((img, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / cardsToShow}%` }}
              >
                <motion.div
                  whileHover={{ y: -15, scale: 1.02 }}
                  onClick={() => setSelectedImage(img)}
                  className="cursor-zoom-in group/card relative rounded-[2.5rem] bg-[#0D0718]/90 backdrop-blur-xl border-2 border-[#D946EF] p-4 transition-all duration-700 shadow-[0_0_20px_rgba(217,70,239,0.3)] hover:shadow-[0_0_40px_rgba(217,70,239,0.5)]"
                >
                  {/* Persistent Border Glow Shadow Layer */}
                  <div className="absolute -inset-[1px] rounded-[2.5rem] shadow-[0_0_15px_rgba(217,70,239,0.4)] pointer-events-none" />
                  
                  {/* Screenshot Container - Unified Background with Intense Border */}
                  <div className="relative aspect-[3/4.5] rounded-[1.8rem] overflow-hidden bg-[#0D0718] border border-[#D946EF]/50 flex items-center justify-center p-2 shadow-[inset_0_0_30px_rgba(217,70,239,0.1)] group-hover/card:border-[#D946EF] transition-all duration-700">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] pointer-events-none" />
                    
                    <img 
                      src={`/${img}`} 
                      alt={`Feedback ${i + 1}`} 
                      className="w-full h-full object-contain mix-blend-lighten opacity-85 group-hover/card:opacity-100 transition-all duration-700 group-hover/card:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Artistic Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#0D0718]/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Zoom Icon Overlay */}
                    <div className="absolute inset-0 bg-[#581845]/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="w-16 h-16 rounded-full bg-[#D946EF]/20 border border-[#D946EF]/40 backdrop-blur-2xl flex items-center justify-center shadow-[0_0_20px_rgba(217,70,239,0.4)] scale-75 group-hover/card:scale-100 transition-all duration-500">
                        <Eye className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Footer Info */}
                  <div className="mt-6 px-2 flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#D946EF]" />
                        <span className="text-[10px] font-accent font-bold uppercase tracking-[0.2em] text-[#D946EF] drop-shadow-[0_0_8px_rgba(217,70,239,0.4)]">Relato Verificado</span>
                      </div>
                      <span className="text-xs font-display text-white/50 italic">Depoimento {i + 1}</span>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-[#D946EF] text-[#D946EF] drop-shadow-[0_0_10px_rgba(217,70,239,0.5)]" />
                      ))}
                    </div>
                  </div>

                  {/* Subtle Corner Detail */}
                  <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-[#D946EF]/40 group-hover/card:bg-[#D946EF] group-hover/card:shadow-[0_0_12px_#D946EF] transition-all" />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dots Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {Array.from({ length: totalSteps + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 rounded-full transition-all duration-700 ${currentIndex === i ? 'w-10 bg-[#C77DFF] shadow-[0_0_15px_#C77DFF]' : 'w-3 bg-white/10'}`}
            />
          ))}
        </div>

        {/* CTA below feedbacks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <motion.a
            href="#vendas"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('vendas')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px #F0ABFC, inset 0 0 20px #F0ABFC" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-4 bg-gradient-to-r from-[#A02D68] to-[#581C87] text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold uppercase tracking-[0.2em] text-sm md:text-base transition-all z-20 border-2 border-[#F0ABFC] shadow-[0_0_20px_#F0ABFC,inset_0_0_10px_#F0ABFC]"
          >
            <HandFist className="w-6 h-6" />
            <span>Quero uma nova vida</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-brand-deep/95 backdrop-blur-xl cursor-zoom-out"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = images.indexOf(selectedImage);
                  if (currentIndex > 0) {
                    setSelectedImage(images[currentIndex - 1]);
                  } else {
                    setSelectedImage(images[images.length - 1]);
                  }
                }}
                className="absolute left-0 md:-left-16 z-30 p-4 rounded-full bg-black/50 hover:bg-brand-magenta text-white/50 hover:text-white transition-all"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <div className="relative bg-[#0D0718] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] border border-white/20 w-full">
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-6 right-6 z-20 p-3 rounded-full bg-white/5 hover:bg-brand-magenta transition-colors group text-white"
                >
                  <XCircle className="w-7 h-7 text-white/50 group-hover:text-white" />
                </button>
                
                <div className="overflow-y-auto max-h-[90vh] p-4 text-center">
                  <img 
                    src={`/${selectedImage}`} 
                    alt="Feedback Expanded" 
                    className="inline-block w-full h-auto rounded-[2rem] shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = images.indexOf(selectedImage);
                  if (currentIndex < images.length - 1) {
                    setSelectedImage(images[currentIndex + 1]);
                  } else {
                    setSelectedImage(images[0]);
                  }
                }}
                className="absolute right-0 md:-right-16 z-30 p-4 rounded-full bg-black/50 hover:bg-brand-magenta text-white/50 hover:text-white transition-all"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      </div>
    </Section>
  );
};


const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "O que é a Constelação Sistêmica Espiritual?",
      answer: "É uma abordagem terapêutica profunda que olha para além do indivíduo, acessando o campo de força da sua família e história. Ela permite identificar emaranhamentos e bloqueios energéticos que impedem sua vida de fluir, trazendo clareza e caminhos para a cura emocional e espiritual."
    },
    {
      question: "Como funciona uma sessão com o Método Dayza Ely?",
      answer: "🔓 Como funciona o atendimento:\n\n• Sessão individual (online ou presencial)\n• Condução segura, acolhedora e profunda\n• Acesso às raízes emocionais e sistêmicas do seu problema\n• Liberação de padrões e reorganização energética\n• Clareza, leveza e reconexão com sua força interior"
    },
    {
      question: "A Constelação tem vínculo religioso?",
      answer: "Não. Embora utilize o termo 'Espiritual', a Constelação Sistêmica é uma metodologia fenomenológica e terapêutica baseada na observação de campos de informação. Ela respeita todas as crenças, focando na inteligência maior que rege os sistemas humanos."
    },
    {
      question: "Quantas sessões são necessárias para ver resultados?",
      answer: "Diferente de terapias convencionais, a Constelação é uma intervenção pontual e poderosa. Muitas vezes, uma única sessão sobre um tema específico é suficiente para desencadear grandes mudanças. O processo continua agindo no sistema por semanas ou meses após a vivência."
    },
    {
      question: "Preciso que meus familiares participem da sessão?",
      answer: "Não é necessário. Quando você se movimenta e cura algo em si mesma, todo o seu sistema sente o impacto. A mudança na sua postura interna reverbera em todos os seus relacionamentos e gerações, sem precisar da presença física de mais ninguém."
    }
  ];

  return (
    <Section id="faq" className="bg-[#0D0718] py-24 relative overflow-hidden border-y border-brand-magenta/20 shadow-[inset_0_0_150px_rgba(168,85,247,0.1)]">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-brand-magenta/10 blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#C084FC]/10 blur-[120px] -z-10" />

      {/* Glowing Particle Background for FAQ */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(isTouch ? 10 : 30)].map((_, i) => {
          const size = Math.random() * 3 + 1;
          const colors = ['#A855F7', '#C084FC', '#E879F9', '#D946EF', '#FFFFFF'];
          const color = colors[i % colors.length];
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: color,
                opacity: Math.random() * 0.5 + 0.2,
                boxShadow: `0 0 ${size * 3}px ${color}`,
              }}
              animate={{
                y: [0, Math.random() * -40 - 20],
                opacity: [0, Math.random() * 0.6 + 0.4, 0],
                scale: [0, Math.random() * 1.5 + 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          );
        })}
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-4"
          >
            <div className="flex items-center gap-2 border border-brand-magenta/30 bg-[#0D0718] px-5 py-2 rounded-[2rem] shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
              <HelpCircle className="w-4 h-4 text-brand-magenta" />
              <span className="text-white font-accent font-black uppercase tracking-[0.4em] text-[10px]">FAQ</span>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white tracking-tight mb-2 drop-shadow-sm uppercase">
            Perguntas <span className="heading-serif italic text-brand-magenta border-b-0 drop-shadow-none uppercase">Frequentes</span>
          </h2>
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-brand-magenta/30 to-transparent mx-auto mt-6 mb-2" />
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden transition-all duration-500 rounded-3xl ${
                activeIndex === index 
                ? 'bg-white/10 shadow-[0_8px_30px_rgba(217,70,239,0.1)] border border-brand-magenta/40' 
                : 'bg-white/5 hover:bg-white/10 border border-white/10'
              }`}
            >
              {activeIndex === index && (
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#A02D68] via-brand-magenta to-[#A02D68]" />
              )}
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className={`text-lg md:text-xl font-semibold transition-colors duration-300 pr-4 ${
                  activeIndex === index ? 'text-brand-magenta' : 'text-white/95 group-hover:text-white'
                }`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 p-2 rounded-full border transition-all duration-500 flex items-center justify-center ${
                  activeIndex === index 
                  ? 'border-brand-magenta bg-brand-magenta text-white rotate-180 shadow-[0_0_15px_rgba(217,70,239,0.4)]' 
                  : 'border-white/20 text-white/70 bg-white/5 group-hover:bg-white/10 group-hover:border-white/40 group-hover:text-white'
                }`}>
                  {activeIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-6 md:px-8 pb-8 text-white/90 leading-relaxed text-base md:text-lg whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center flex flex-col items-center"
        >
          <p className="text-[#3A2A56] font-medium mb-6 text-lg">Ainda tem alguma dúvida específica?</p>
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(160,45,104,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#A02D68] to-[#581C87] text-white font-semibold text-lg hover:from-[#832253] hover:to-[#411267] transition-all shadow-[0_8px_20px_rgba(160,45,104,0.3)]"
          >
            Fale com nossa equipe
            <MessageCircle className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </Section>
  );
};
const DiagnosticIcon = ({ icon: Icon }: { icon: any }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {!isTouch && (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-brand-magenta/30 rounded-full border-dashed"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 border border-brand-magenta/20 rounded-full border-dotted"
          />
        </>
      )}
      <div className={`absolute inset-0 bg-brand-magenta/5 rounded-full ${isTouch ? 'blur-md' : 'blur-[20px]'}`} />
      <div className="relative z-10 text-white transition-all duration-700">
        <Icon strokeWidth={1} className="w-14 h-14 md:w-16 md:h-16 drop-shadow-[0_0_15px_rgba(217,70,239,0.8)] opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
      </div>
    </div>
  );
};

const DiagnosticCard = ({ item, index, isTouch }: any) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      whileHover={!isTouch ? "hover" : undefined}
      initial="initial"
      variants={{
        initial: { opacity: 0, y: 40 },
        hover: { 
          y: -15,
          scale: 1.01,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1] 
      }}
      onMouseMove={!isTouch ? handleMouseMove : undefined}
      className={`group relative w-full h-auto min-h-[380px] sm:min-h-[420px] md:min-h-[480px] overflow-hidden rounded-2xl bg-[#08040C] border-2 border-brand-magenta shadow-[0_0_20px_rgba(217,70,239,0.5)] flex flex-col justify-between p-4 sm:p-6 md:p-8 cursor-default ${!isTouch ? 'perspective-1000' : ''}`}
    >
      {/* Dynamic Mouse Mask */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(217, 70, 239, 0.12),
              transparent 80%
            )
          `,
        }}
      />

      {/* Decorative Outer Frame */}
      <div className="absolute inset-3 border border-brand-magenta/20 rounded-xl z-0 pointer-events-none transition-all duration-700 group-hover:border-brand-magenta/40 group-hover:inset-4" />
      
      {/* Corner Ornaments */}
      <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-brand-magenta/50 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 group-hover:top-4 group-hover:left-4" />
      <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-brand-magenta/50 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 group-hover:top-4 group-hover:right-4" />
      <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-brand-magenta/50 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 group-hover:bottom-4 group-hover:left-4" />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-brand-magenta/50 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 group-hover:bottom-4 group-hover:right-4" />

      {/* Glow Behind Icon */}
      <motion.div
        variants={{
          hover: { scale: 1.2, opacity: 0.25 }
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-brand-magenta rounded-full blur-[80px] opacity-5 transition-all duration-700 pointer-events-none z-0"
      />

      <div className="relative z-10 w-full flex justify-center pt-2 pb-4 sm:pb-6">
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-brand-magenta/60 font-bold font-accent group-hover:tracking-[0.5em] group-hover:text-brand-magenta transition-all duration-700">
          Arquétipo de Cura
        </span>
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center mt-1 sm:mt-2">
        {/* Icon Container */}
        <motion.div 
          variants={{ 
            hover: { 
              scale: 1.15,
              filter: "drop-shadow(0px 0px 25px rgba(217,70,239,0.4))"
            } 
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center transform-gpu"
        >
          {item.icon}
        </motion.div>
      </div>

      <div className="relative z-10 w-full pt-6 sm:pt-8 pb-2 text-center mt-auto">
        <div className="h-[1px] w-12 bg-brand-magenta/30 mx-auto mb-4 sm:mb-6 group-hover:w-24 group-hover:bg-brand-magenta transition-all duration-700" />
        <h4 className="text-white font-display text-base md:text-[1.35rem] leading-snug tracking-tight mx-auto max-w-[200px] sm:max-w-[240px] transition-colors duration-500 group-hover:text-brand-magenta drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          {item.text}
        </h4>
      </div>
    </motion.div>
  );
};

const ProductsSection = () => {
  const products = [
    {
      id: "oracoes-profeticas",
      name: "ORAÇÕES PROFÉTICAS",
      price: "47,00",
      icon: <Sunrise className="w-10 h-10 text-[#C77DFF]" />,
      duration: "30 DIAS DE JORNADA",
      headline: "O seu caminho de volta à Fonte Criadora.",
      description: "Você sente que precisa de uma reconexão profunda com Deus? O Protocolo Orações Proféticas é um processo de 30 dias de transformação espiritual, criado para te reconectar com a Energia da Fonte Criadora de Deus, limpar bloqueios espirituais e abrir caminhos em todas as áreas da sua vida.",
      bullets: [
        "Volta para o Pai do Céu — restauração da sua aliança.",
        "Despertar do chamado espiritual — ouça a voz de Deus.",
        "Restauração de casamentos e libertação de filhos.",
        "Quebra de ciclos repetitivos e opressão espiritual.",
        "Ativação dos anjos do governo e prosperidade.",
        "Acesso via canal exclusivo no Telegram."
      ],
      cta: "Quero me Reconectar",
      link: `${whatsappLink}?text=Olá,%20quero%20adquirir%20o%20Protocolo%20Orações%20Proféticas`
    },
    {
      id: "quebra-maldicoes",
      name: "QUEBRA DE MALDIÇÕES LIGADAS AO DINHEIRO",
      price: "47,00",
      icon: <DollarSign className="w-10 h-10 text-[#C77DFF]" />,
      duration: "21 DIAS DE LIMPEZA",
      headline: "Rompa as correntes da escassez em sua vida.",
      description: "Você sente que o dinheiro escapa das suas mãos? Talvez existam maldições, votos inconscientes ou bloqueios espirituais agindo no seu campo. Este protocolo une Constelações Sistêmicas Espirituais e Orações Proféticas para purificar seu campo e abrir as portas da abundância.",
      bullets: [
        "Curar raízes profundas de escassez e lealdades.",
        "Romper pactos e maldições ligadas ao dinheiro.",
        "Limpar o campo energético de culpa e falta.",
        "Reativar o fluxo divino da prosperidade mundial.",
        "Restaurar a confiança no seu poder de criar riqueza.",
        "Acesso via canal exclusivo no Telegram."
      ],
      cta: "Quero Prosperar",
      link: `${whatsappLink}?text=Olá,%20quero%20adquirir%20o%20Protocolo%20Quebra%20de%20Maldições`
    },
    {
      id: "ativacoes-magneticas",
      name: "ATIVAÇÕES MAGNÉTICAS DO DINHEIRO",
      price: "47,00",
      icon: <Magnet className="w-10 h-10 text-[#C77DFF]" />,
      duration: "30 DIAS DE ATIVAÇÃO",
      headline: "Torne-se um verdadeiro ímã para a abundância.",
      description: "Pronta(o) para mudar sua vibração? Este protocolo ajusta sua frequência vibracional, reprograma crenças limitantes e alinha corpo e mente para que o fluxo do dinheiro se manifeste naturalmente. Cada ativação é uma semente de expansão e confiança absoluta.",
      bullets: [
        "Reprogramar padrões inconscientes de escassez.",
        "Aumentar sua vibração de merecimento real.",
        "Desbloquear o fluxo energético da prosperidade.",
        "Ativar o poder pessoal de cocriação divina.",
        "Conectar-se à energia do dinheiro com leveza.",
        "Acesso via canal exclusivo no Telegram."
      ],
      cta: "Quero ser Magnética",
      link: `${whatsappLink}?text=Olá,%20quero%20adquirir%20o%20Protocolo%20Ativações%20Magnéticas`
    },
    {
      id: "transformacao-21",
      name: "21 CONSTELAÇÕES SISTÊMICAS GUIADAS",
      price: "97,00",
      icon: <Star className="w-10 h-10 text-[#C77DFF]" />,
      duration: "JORNADA DE RENASCIMENTO",
      headline: "Cure suas raízes e floresça em seu destino.",
      description: "Cansada de carregar dores e padrões que se repetem? Através de áudios, meditações e ativações de cura, você mergulhará profundamente no seu sistema familiar para liberar vínculos inconscientes, traumas e lealdades ocultas que impedem o seu florescimento pleno.",
      bullets: [
        "Reconexão profunda com a força da mãe e do pai.",
        "Liberação de traumas e lealdades ancestrais.",
        "Harmonização de vínculos e ordens do amor.",
        "Saída do ciclo de autossabotagem e sofrimento.",
        "Reorganização do campo para amor e plenitude.",
        "Acesso via canal exclusivo no Telegram."
      ],
      cta: "Quero me Transformar",
      link: `${whatsappLink}?text=Olá,%20quero%20adquirir%20as%2021%20Constelações%20Guiadas`
    }
  ];

  return (
    <Section id="vendas" className="bg-linear-to-br from-[#F5E6FF] via-[#D8B4FE] to-[#F3E8FF] text-[#1A0B2E] border-y border-brand-lilac/30 relative overflow-hidden py-20 md:py-48 shadow-[inset_0_0_150px_rgba(168,85,247,0.2)]">
      {/* Atmospheric Background matching Method */}
      <div className="absolute inset-0 bg-linear-to-br from-white/10 via-[#C084FC]/30 to-white/10 pointer-events-none" />
      <div className={`absolute top-0 right-0 w-[700px] h-[700px] bg-brand-magenta/20 ${isTouch ? 'blur-[80px]' : 'blur-[120px]'} rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none z-0`} />
      <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-plum/20 ${isTouch ? 'blur-[80px]' : 'blur-[120px]'} rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none z-0`} />
      
      {/* Glowing Systemic Tree Background */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-end opacity-30 md:opacity-70 overflow-hidden mix-blend-screen">
        <ConstellationLayer />
        <svg viewBox="0 0 1400 900" preserveAspectRatio="xMidYMax slice" className="w-[1400px] h-[900px] text-[#E9D5FF] drop-shadow-[0_0_15px_rgba(233,213,255,0.4)] absolute bottom-0 left-1/2 -translate-x-1/2 min-w-full min-h-full">
          <RecursiveTreeStatic x={150} y={900} length={220} angle={-65} depth={1} maxDepth={isTouch ? 5 : 8} />
          <RecursiveTreeStatic x={1250} y={900} length={220} angle={-115} depth={1} maxDepth={isTouch ? 5 : 8} />
        </svg>
      </div>

      {/* Floating Background Particles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden mix-blend-overlay">
        {[...Array(isTouch ? 20 : 60)].map((_, i) => {
          const size = Math.random() * 2 + 1;
          const colors = ['#FFFFFF', '#FDE68A', '#E9D5FF', '#D8B4FE'];
          const color = colors[i % colors.length];
          return (
            <div
              key={`particle-vendas-${i}`}
              className="absolute rounded-full opacity-40 animate-pulse"
              style={{
                width: size,
                height: size,
                backgroundColor: color,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 text-center mb-24 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-8 py-3 rounded-full border-2 border-brand-magenta/40 bg-[#0D0718] mb-10 shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
        >
          <Stars className="w-5 h-5 text-brand-magenta animate-pulse" />
          <span className="text-white font-accent font-black uppercase tracking-[0.5em] text-[11px] md:text-xs">Escolha seu Ciclo de Cura</span>
        </motion.div>
        
        <h2 className="text-3xl sm:text-5xl md:text-8xl font-display text-[#0F0716] leading-none md:leading-[0.9] mb-8 md:mb-10 tracking-tighter">
          Sua Jornada de <br className="hidden md:block" />
          <div className="relative inline-block">
            <span className="heading-serif italic text-brand-magenta drop-shadow-sm">Libertação Completa</span>
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="absolute -bottom-4 md:-bottom-6 left-0 h-1 md:h-1.5 bg-brand-magenta shadow-[0_0_20px_#D946EF,0_0_40px_#D946EF] rounded-full"
            />
          </div>
        </h2>
        
        <p className="max-w-3xl mx-auto text-[#1E1135] text-lg md:text-2xl font-bold leading-relaxed mb-10 md:mb-14 drop-shadow-sm">
          Protocolos desenhados para agir diretamente no campo espiritual e sistêmico, <span className="text-brand-magenta/80">rompendo bloqueios</span> que nenhuma terapia convencional conseguiu alcançar.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mb-20 px-4">
          <div className="px-8 py-4 rounded-full bg-emerald-600 text-white text-sm font-black uppercase tracking-[0.15em] flex items-center gap-4 shadow-[0_10px_30px_rgba(5,150,105,0.4)] transition-transform hover:scale-105">
            <div className="p-2 bg-white/20 rounded-full shadow-inner">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">Compra 100% Segura</span>
          </div>
          <div className="px-8 py-4 rounded-full bg-red-600 text-white text-sm font-black uppercase tracking-[0.15em] flex items-center gap-4 shadow-[0_10px_30px_rgba(220,38,38,0.4)] transition-transform hover:scale-105">
            <div className="p-2 bg-white/20 rounded-full shadow-inner">
              <AlertCircle className="w-5 h-5 text-white" />
            </div>
            <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">Acesso Imediato</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 relative z-10 max-w-6xl mx-auto">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative"
          >
            {/* Glow effect on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-magenta/50 to-brand-lilac/50 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            
            <div className="relative h-full bg-[#0D0718] rounded-[2.5rem] p-6 md:p-12 border-4 border-brand-magenta shadow-[0_0_30px_rgba(217,70,239,0.4),inset_0_0_15px_rgba(217,70,239,0.2)] flex flex-col items-start overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(217,70,239,0.6),inset_0_0_20px_rgba(217,70,239,0.3)]">
              {/* Background accent */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-magenta/5 blur-3xl rounded-full" />
              
              <div className="flex w-full items-start justify-between mb-8">
                <div className="p-4 rounded-2xl bg-brand-magenta/10 border border-brand-magenta/20">
                  {product.icon}
                </div>
                <div className="text-right">
                  <span className="block text-[10px] font-bold text-white/70 uppercase tracking-widest mb-1">Duração</span>
                  <span className="text-brand-magenta font-accent text-xs font-bold tracking-widest">{product.duration}</span>
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-display text-white mb-2 leading-tight uppercase">
                {product.name}
              </h3>
              <p className="text-[#F0ABFC] font-medium text-sm md:text-base italic mb-6">
                {product.headline}
              </p>

              <p className="text-white/90 font-medium leading-relaxed mb-8 text-sm md:text-base">
                {product.description}
              </p>

              <div className="space-y-4 mb-10 w-full font-medium">
                {product.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-4 text-white group-hover:text-white transition-colors">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-magenta shadow-[0_0_8px_#D946EF]" />
                    <span className="text-[13px] md:text-sm font-medium">{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto w-full pt-8 border-t border-white/20 flex flex-wrap items-center justify-between gap-6">
                <div>
                  <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest block mb-1">Investimento à Vista</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-bold text-white/80">R$</span>
                    <span className="text-4xl md:text-5xl font-bold text-white tracking-tighter">{product.price}</span>
                  </div>
                </div>

                <motion.a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(217,70,239,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#A02D68] to-[#581C87] text-white px-8 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[11px] transition-all border border-[#D946EF]/50"
                >
                  <span>{product.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust Elements */}
      <div className="mt-24 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative z-10">
        <div className="flex items-center gap-3">
          <Calendar className="w-6 h-6 text-[#A02D68]" />
          <span className="text-[#3A2A56] text-xs font-bold uppercase tracking-widest">Início Imediato</span>
        </div>
        <div className="flex items-center gap-3">
          <Orbit className="w-6 h-6 text-[#A02D68]" />
          <span className="text-[#3A2A56] text-xs font-bold uppercase tracking-widest">Suporte Vitalício</span>
        </div>
        <div className="flex items-center gap-3">
          <BookOpen className="w-6 h-6 text-[#A02D68]" />
          <span className="text-[#3A2A56] text-xs font-bold uppercase tracking-widest">Método Único</span>
        </div>
      </div>
    </Section>
  );
};


const ExitIntentPopup = ({ isOpen, onClose, whatsappLink }: { isOpen: boolean; onClose: () => void; whatsappLink: string }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-24 backdrop-blur-md bg-black/80"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-2xl bg-[#0D0718] rounded-[2rem] p-8 md:p-14 overflow-hidden border-2 border-brand-lilac/30 shadow-[0_0_80px_rgba(168,85,247,0.3)] text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#C77DFF] to-transparent opacity-50" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(160,45,104,0.1)_0%,transparent_70%)] pointer-events-none" />
            
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-white/30 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              <XCircle className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-magenta/10 rounded-full mb-8 border border-brand-magenta/20">
                <SystemicTree className="w-10 h-10 text-brand-magenta animate-pulse" />
              </div>

              <h2 className="text-3xl md:text-5xl font-display text-white mb-6 leading-tight">
                Espera! Não vá embora <br className="hidden md:block" />
                <span className="text-[#F0ABFC] italic">sem se reconectar.</span>
              </h2>

              <p className="text-lg md:text-xl text-white/70 mb-10 font-light leading-relaxed max-w-lg mx-auto">
                Você sentiu o chamado, mas os medos tentaram te parar? 
                Essa é a sua chance de romper o ciclo e começar sua nova vida hoje.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <motion.a
                  href="#vendas"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    document.getElementById('vendas')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px #D946EF, inset 0 0 20px #D946EF" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-gradient-to-r from-[#A02D68] to-[#581C87] text-white px-10 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-sm transition-all border-2 border-[#D946EF] shadow-[0_0_25px_#D946EF,inset_0_0_12px_#D946EF]"
                >
                  <span>Ver Opções de Cura</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                
                <button 
                  onClick={onClose}
                  className="text-white/40 hover:text-white/60 font-medium uppercase tracking-widest text-xs transition-colors"
                >
                  Talvez outra hora
                </button>
              </div>
            </motion.div>

            {/* Glowing Rings */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-magenta/10 blur-[100px] rounded-full" />
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#C77DFF]/10 blur-[100px] rounded-full" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const whatsappLink = "https://wa.me/554584055138"; // Real Contact Number
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasShownExitPopup, setHasShownExitPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Show when mouse leaves the viewport at the top
      if (e.clientY <= 0 && !hasShownExitPopup) {
        setShowExitPopup(true);
        setHasShownExitPopup(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShownExitPopup]);

  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-[#A855F7]/30 bg-[#0D0718] overflow-hidden">
      {/* Texture and Ambient Overlays */}
      <div className="grain-overlay opacity-20" />
      
      {!isTouch && (
        <>
          <motion.div 
            animate={{ 
              x: [0, 100, -50, 0], 
              y: [0, -80, 120, 0],
              scale: [1, 1.4, 0.8, 1] 
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="ambient-glow -top-[10%] -left-[10%] opacity-50 fixed" 
          />

          {/* Intense Lilac Blush Spots */}
          <motion.div 
            animate={{ 
              opacity: [0.6, 0.9, 0.6],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="ambient-blush-lilac top-[10%] left-[60%] fixed" 
          />

          <motion.div 
            animate={{ 
              opacity: [0.5, 0.8, 0.5],
              scale: [1.2, 1, 1.2],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="ambient-blush-lilac bottom-[15%] left-[5%] fixed" 
          />

          <motion.div 
            animate={{ 
              opacity: [0.4, 0.7, 0.4],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            className="ambient-blush-lilac middle-y right-[10%] fixed" 
          />
          
          <motion.div 
            animate={{ 
              x: [0, -120, 80, 0], 
              y: [0, 60, -90, 0],
              scale: [1, 0.9, 1.2, 1] 
            }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="ambient-glow top-[30%] -right-[15%] bg-brand-coral/5 fixed" 
          />

          <motion.div 
            animate={{ 
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="ambient-glow bottom-0 left-[20%] bg-[#A855F7]/10 fixed" 
          />
        </>
      )}



      {/* Navigation - Dynamic Floating Style */}
      <motion.nav 
        id="nav" 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-in-out ${
          scrolled 
            ? 'top-4 w-[95%] max-w-[900px] bg-[#FDFBFF]/95 backdrop-blur-md md:backdrop-blur-xl rounded-full h-16 border-2 border-[#A855F7]/40 shadow-[0_0_25px_rgba(168,85,247,0.3)] px-4' 
            : 'top-0 w-full bg-[#0D0718]/40 md:bg-transparent h-20 md:h-28 px-4 md:px-8 border-b border-white/5'
        }`}
      >
        <div className="h-full flex items-center justify-between relative">
          
          {/* Left Side: Navigation Links */}
          <div className="flex-1 flex items-center transition-colors duration-500">
            {/* Desktop Links */}
            <div className={`hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.25em] ${scrolled ? 'text-brand-deep pl-4' : 'text-white/90'}`}>
              {['Home', 'Quem Sou Eu', 'Feedbacks'].map((item) => (
                <a 
                  key={item}
                  href={`#${item === 'Home' ? 'hero' : item.toLowerCase().replace(/ /g, '-')}`} 
                  className="group relative py-2 transition-all hover:text-[#C084FC]"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#C084FC] to-[#A855F7] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#A855F7]" />
                </a>
              ))}
            </div>

            {/* Mobile Links (Left) */}
            <div className={`flex md:hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[0.1em] ${scrolled ? 'text-brand-deep' : 'text-white/90'}`}>
              <a href="#hero" className="hover:text-brand-magenta transition-colors">Home</a>
              <a href="#quem-sou-eu" className="hover:text-brand-magenta transition-colors whitespace-nowrap">Quem Sou</a>
            </div>
          </div>
          
          {/* Center: Professional Floating Icon */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              animate={scrolled ? { 
                scale: [1, 1.1, 1],
                filter: ["drop-shadow(0 0 8px #A855F7)", "drop-shadow(0 0 20px #D8B4FE)", "drop-shadow(0 0 8px #A855F7)"]
              } : {}}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className={`flex items-center justify-center rounded-full transition-all duration-500 shadow-xl ${
                scrolled 
                  ? 'w-10 h-10 md:w-14 md:h-14 bg-[#FDFBFF] border-2 border-[#A855F7]/30' 
                  : 'w-12 h-12 border border-white/20 backdrop-blur-sm'
              }`}
            >
              <SystemicTree className={`transition-all duration-500 ${scrolled ? 'w-6 h-6 md:w-8 md:h-8 text-[#A855F7]' : 'w-6 h-6 text-white'}`} />
            </motion.div>
          </div>

          {/* Right Side: Navigation & Social */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Desktop Links (Right) */}
            <div className={`hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.25em] transition-colors duration-500 ${scrolled ? 'text-brand-deep' : 'text-white/90'}`}>
              <a 
                href="#metodo" 
                className="group relative py-2 transition-all hover:text-[#C084FC]"
              >
                O Método
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#C084FC] to-[#A855F7] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#A855F7]" />
              </a>
              <a 
                href="#faq" 
                className="group relative py-2 transition-all hover:text-[#C084FC]"
              >
                FAQ
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#C084FC] to-[#A855F7] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#A855F7]" />
              </a>
            </div>

            {/* Mobile Links (Right) */}
            <div className={`flex md:hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[0.1em] ${scrolled ? 'text-brand-deep' : 'text-white/90'}`}>
              <a href="#metodo" className="hover:text-brand-magenta transition-colors whitespace-nowrap">Método</a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Image Model Layout */}
      <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20">
        {/* Shooting Stars Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="shooting-star"
              style={{
                top: `${10 + Math.random() * 40}%`,
                left: `${70 + Math.random() * 30}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${2.5 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Background Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        {/* Full Screen Background - 100% Atmosphere */}
        <div className="absolute inset-0 bg-[#0A0514] overflow-hidden">
          {/* Subtle atmospheric gradients */}
          <div className="absolute inset-0 bg-linear-to-br from-[#1A0B2E]/40 via-[#0F051D] to-[#050209]/60" />
          <div className={`absolute top-0 right-0 w-[800px] h-[800px] bg-brand-magenta/5 ${isTouch ? 'blur-[80px]' : 'blur-[120px]'} rounded-full -translate-y-1/2 translate-x-1/2`} />
          <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-indigo/10 ${isTouch ? 'blur-[60px]' : 'blur-[100px]'} rounded-full translate-y-1/2 -translate-x-1/4`} />
          
          {/* 3D Constellations layer */}
          <div className="absolute inset-0 z-10 opacity-90">
            <ConstellationBackground />
          </div>
        </div>
        {/* Hero Content */}
        <div className="relative z-20 w-full flex flex-col items-center justify-center px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 md:space-y-10 max-w-5xl w-full"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="inline-block"
            >
              <span className="text-brand-lilac font-accent font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] text-[9px] md:text-xs mb-2 block">
                Terapia Sistêmica & Transcendência
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.4, duration: 1.5 }}
              className="relative py-2 md:py-4"
            >
              <h1 className="text-4xl sm:text-5xl md:text-8xl font-display text-white leading-[1.1] tracking-tight text-glow-lilac">
                <div className="relative inline-block group">
                  <span className="block mb-2 font-medium">Constelação Sistêmica</span>
                  <div className="neon-underline w-full opacity-60" />
                </div>
                <div className="relative inline-block mt-2">
                  <span className="heading-serif italic font-light text-polished-spiritual block">
                    Espiritual
                  </span>
                  <div className="neon-underline w-4/5 mx-auto opacity-40 mt-1" />
                </div>
              </h1>
            </motion.div>
            
                <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "none" }}
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: -2,
                  transition: { duration: 0.4 }
                }}
                transition={{ 
                  delay: 0.8, 
                  duration: 1.2, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="mt-6 mb-6 mx-auto w-full max-w-2xl perspective-1000 will-change-transform"
              >
                <div className="relative group cursor-default">
                  {/* Card Background Layers */}
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#0D0718]/85 backdrop-blur-2xl rounded-[1.2rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:border-brand-magenta/40 group-hover:shadow-[0_0_100px_rgba(168,85,247,0.15)]" />
                    
                    {/* Internal Reflection Effect */}
                    <div className="card-shine rounded-[1.2rem]" />

                    {/* Refined Decorative corner accents */}
                    <div className="absolute -top-px -left-px w-6 h-6 border-t-2 border-l-2 border-brand-magenta/60 rounded-tl-[1.2rem] transition-all duration-700 group-hover:w-14 group-hover:h-14 group-hover:border-brand-magenta group-hover:shadow-[0_0_20px_rgba(174,45,104,0.6)]" />
                    <div className="absolute -bottom-px -right-px w-6 h-6 border-b-2 border-r-2 border-brand-magenta/60 rounded-br-[1.2rem] transition-all duration-700 group-hover:w-14 group-hover:h-14 group-hover:border-brand-magenta group-hover:shadow-[0_0_20px_rgba(174,45,104,0.6)]" />
                  </div>

                  <div className="relative z-10 py-8 px-6 md:px-12 text-center space-y-5 antialiased [transform-style:preserve-3d] [backface-visibility:hidden] translate-z-[1px] [text-rendering:optimizeLegibility]">
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "100%", opacity: 1 }}
                      transition={{ delay: 1.2, duration: 1.5, ease: "circOut" }}
                      className="ornamental-line max-w-[150px] mx-auto opacity-70"
                    />

                    <p className="text-white text-base md:text-xl font-normal tracking-wide leading-relaxed">
                      <span className="text-white font-semibold border-b-2 border-[#A855F7] pb-0.5 transition-colors duration-500">Rompa o ciclo</span> de repetições invisíveis que <span className="text-polished-spiritual italic px-1 font-medium">trava</span> sua vida financeira e emocional há <span className="text-brand-magenta font-bold tracking-wider">gerações</span>.
                    </p>

                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "100%", opacity: 1 }}
                      transition={{ delay: 1.4, duration: 1.5, ease: "circOut" }}
                      className="ornamental-line max-w-[150px] mx-auto opacity-50"
                    />
                  </div>
                </div>
              </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0, rotate: -20, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
              transition={{ 
                delay: 1.1, 
                duration: 1.2,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className="flex flex-col md:flex-row gap-8 justify-center items-center pt-12"
            >
              <div className="relative">
                {/* Portal Aperture Effect (flashes when appearing) */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1.5, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    delay: 1.1,
                    duration: 0.8,
                    ease: "easeOut"
                  }}
                  className="absolute inset-0 bg-[#9333EA] rounded-full blur-3xl z-0"
                />
                
                <motion.button 
                  onClick={() => document.getElementById('vendas')?.scrollIntoView({ behavior: 'smooth' })}
                  id="cta-hero-primary"
                  className="group relative px-12 py-5 overflow-hidden rounded-full font-bold transition-all hover:scale-110 active:scale-95 shadow-[0_0_40px_rgba(147,51,234,0.3)] hover:shadow-[0_0_70px_rgba(147,51,234,0.6)] block border-2 border-white/30"
                >
                {/* Outer Pulse Glow */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 bg-[#9333EA] opacity-30 rounded-full blur-2xl group-hover:blur-3xl transition-all"
                />

                {/* Elegant Animated Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#C084FC] via-[#A855F7] to-[#9333EA] bg-[length:200%_100%] animate-gradient-slow group-hover:animate-gradient-fast" />
                
                {/* Dynamic Shine/Flare Effect */}
                <motion.div 
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 10, 
                    ease: "linear"
                  }}
                  className="absolute top-1/2 left-1/2 -ml-[150%] -mt-[150%] w-[300%] h-[300%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.1)_180deg,transparent_200deg)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                />

                {/* Refined Shimmer Effect */}
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2.5, 
                    ease: "easeInOut",
                    repeatDelay: 1
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 pointer-events-none"
                />

                <span className="relative z-10 flex items-center gap-4 tracking-[0.25em] text-[11px] uppercase text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                  Quero romper o ciclo
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </span>
                
                {/* Subtle Inner Border Glow */}
                <div className="absolute inset-[1px] rounded-full border-2 border-white/40 pointer-events-none" />
                
                {/* Active/Pressed Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-active:opacity-100 transition-opacity" />
              </motion.button>
            </div>
              
              <a 
                href="#metodo"
                className="group relative px-12 py-5 bg-black border-2 border-[#A855F7] text-white rounded-full font-bold transition-all active:scale-95 tracking-[0.25em] text-[11px] uppercase overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.8)] hover:border-[#D8B4FE]"
              >
                {/* Intense Internal Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#A855F7]/0 via-[#A855F7]/10 to-[#A855F7]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated Neon Border Pulse overlay */}
                <div className="absolute inset-0 rounded-full border border-[#A855F7] animate-pulse opacity-50 shadow-[inset_0_0_10px_#A855F7]" />
                
                <span className="relative z-10 transition-colors group-hover:text-[#D8B4FE] drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
                  Conheça o Método
                </span>
              </a>
            </motion.div>
          </motion.div>

      {/* Hero Content Removed scroll indicator */}
    </div>
  </section>

  {/* Neon Pulse Transition Line - Thicker and Static Star-centered */}
  <div className="relative h-1 w-full z-30 pointer-events-none flex items-center justify-center overflow-visible">
    {/* Full-width neon line - Thicker */}
    <motion.div 
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 bg-linear-to-r from-transparent via-[#D946EF] to-transparent shadow-[0_0_40px_#D946EF,0_0_80px_rgba(217,70,239,0.5)]"
      style={{ height: '5px' }}
    />
    
    {/* Central Brilliant Star - Static and Radiant */}
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1.2, duration: 1.5, ease: "backOut" }}
      className="relative z-10 flex items-center justify-center"
    >
      {/* Radiant Glow Layers - Static but Pulsating Softly */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-32 h-32 bg-[#A855V7] rounded-full blur-3xl opacity-50"
      />
      
      {/* The Specific Diamond Star Shape from Print */}
      <div className="relative z-20 flex items-center justify-center">
        {/* Outer Glow of the Star */}
        <div className="absolute inset-0 scale-150 bg-brand-magenta blur-xl opacity-80" />
        
        <svg 
          width="64" 
          height="64" 
          viewBox="0 0 100 100" 
          className="drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] drop-shadow-[0_0_30px_#D946EF]"
        >
          <path 
            d="M 50 0 C 50 40 60 50 100 50 C 60 50 50 60 50 100 C 50 60 40 50 0 50 C 40 50 50 40 50 0 Z" 
            fill="white"
          />
          {/* Internal gradient/glow for the star core */}
          <path 
            d="M 50 10 C 50 45 55 50 90 50 C 55 50 50 55 50 90 C 50 55 45 50 10 50 C 45 50 50 45 50 10 Z" 
            fill="url(#starGradient)"
            opacity="0.8"
          />
          <defs>
            <radialGradient id="starGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#fff" />
              <stop offset="100%" stopColor="#D946EF" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Cross Spikes - Sharp and Static */}
      <div className="absolute w-[1px] h-24 bg-linear-to-b from-transparent via-white/80 to-transparent blur-[0.5px]" />
      <div className="absolute h-[1px] w-24 bg-linear-to-r from-transparent via-white/80 to-transparent blur-[0.5px]" />
    </motion.div>
  </div>

  {/* Diagnostic / Pains Section - Ethereal Narrative Style */}
      <Section id="diagnostico" className="bg-linear-to-br from-[#F5E6FF] via-[#D8B4FE] to-[#F3E8FF] text-[#1A0B2E] border-y border-brand-lilac/30 relative overflow-hidden py-24 md:py-32 shadow-[inset_0_0_150px_rgba(168,85,247,0.2)]">
        {/* Advanced Background: Vibrant Atmospheric Atmosphere */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Stronger atmospheric gradients for depth */}
          <div className="absolute inset-0 bg-linear-to-br from-white/10 via-[#C084FC]/30 to-white/10" />
          
          <motion.div 
            animate={{ 
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] bg-brand-magenta/40 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-plum/30 rounded-full blur-[100px]" 
          />
          
          {/* Constellations integration Removed */}

          {/* Neural Neon SVG Network - Flowing architectural lines matching the screenshots */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="rootGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C77DFF" />
                <stop offset="100%" stopColor="#E0AAFF" />
              </linearGradient>
              <linearGradient id="rootGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9D4EDD" />
                <stop offset="100%" stopColor="#E0AAFF" />
              </linearGradient>
              <linearGradient id="rootGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7B2CBF" />
                <stop offset="100%" stopColor="#B185DB" />
              </linearGradient>
            </defs>
            
            {/* Re-modeled Organic Crossing Network - Dense, Multi-curved Ribbons */}
            {[...Array(22)].map((_, i) => {
                const strokeWidth = (1.0 + (i % 4) * 1.5) * 0.5;
                const colors = ['#7B2CBF', '#9D4EDD', '#5A189A', '#C77DFF', '#E0AAFF'];
                const strokeColor = colors[i % colors.length];
                
                // Varied spread for start and end
                const isLeftToRight = i % 2 === 0;
                const startX = isLeftToRight ? -400 + (i * 80) : 1400 - (i * 80);
                const startY = -500;
                
                const endX = isLeftToRight ? 1200 - (i * 60) : -200 + (i * 60);
                const endY = 1600;
                
                // Multi-segment path for "more curves"
                const midY1 = 300;
                const midY2 = 900;
                
                const cp1x = isLeftToRight ? startX + 500 : startX - 500;
                const cp1y = startY + 200;
                
                const midX = 500 + (Math.sin(i) * 400);
                
                const cp2x = midX - (isLeftToRight ? 400 : -400);
                const cp2y = midY1 - 200;
                
                const cp3x = midX + (isLeftToRight ? 400 : -400);
                const cp3y = midY1 + 200;
                
                const cp4x = endX - (isLeftToRight ? 500 : -500);
                const cp4y = endY - 200;
                
                // Complex path with multiple bezier segments
                const d = `M ${startX} ${startY} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${midX} ${midY1} S ${cp4x} ${cp4y} ${endX} ${endY}`;
                
                return (
                    <motion.path 
                        key={`organic-crossing-${i}`}
                        d={d}
                        stroke={strokeColor} 
                        strokeWidth={strokeWidth}
                        fill="none" 
                        opacity={0.8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                );
            })}

            {/* Curved Accent Beams - Replacing straight lines with arcs */}
            {[...Array(11)].map((_, i) => {
                const x1 = i % 2 === 0 ? -200 + (i * 150) : 1200 - (i * 150);
                const y1 = -300;
                const x2 = i % 2 === 0 ? 1200 - (i * 100) : -200 + (i * 100);
                const y2 = 1500;
                const cx = 500 + (Math.cos(i) * 600);
                const cy = 600;

                return (
                    <motion.path
                        key={`curved-accent-${i}`}
                        d={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`}
                        stroke="#C77DFF"
                        strokeWidth="0.6"
                        fill="none"
                        opacity={0.5}
                        strokeLinecap="round"
                    />
                );
            })}
          </svg>
        </div>

        <div className="relative z-10">
          {/* Header - The Insightful Question */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-5xl mx-auto mb-20 px-6 relative"
          >
            {/* Background Glow for Text Content */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[120%] bg-brand-magenta/5 ${isTouch ? 'blur-[60px]' : 'blur-[100px]'} -z-10 rounded-full opacity-100 transition-opacity duration-1000`} />

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="flex flex-col items-center mb-10"
            >
              <div className="flex items-center justify-center gap-6 mb-6 group cursor-default">
                {/* Left Line - Animated Expansion on Hover */}
                <motion.div 
                  variants={{
                    hover: { width: 80, opacity: 1, backgroundColor: "rgba(168, 85, 247, 0.8)" }
                  }}
                  whileHover="hover"
                  className="hidden md:block h-[1px] w-16 bg-linear-to-r from-transparent via-brand-magenta/40 to-brand-magenta/60 relative overflow-hidden transition-all duration-500"
                >
                  <motion.div 
                    animate={{ x: ['100%', '-100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent"
                  />
                </motion.div>

                {/* Main Pill Card */}
                <motion.div 
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 10px 40px rgba(168, 85, 247, 0.4)",
                    borderColor: "rgba(217, 70, 239, 0.8)"
                  }}
                  className="px-6 py-2.5 sm:px-10 sm:py-3 rounded-full md:rounded-full bg-linear-to-r from-[#0D0718] via-brand-indigo to-[#0D0718] border border-brand-magenta/50 shadow-[0_4px_30px_rgba(168,85,247,0.25)] backdrop-blur-md relative overflow-hidden flex items-center justify-center transition-all duration-500"
                >
                  {/* Internal Pulse */}
                  <motion.div 
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-brand-magenta/10"
                  />
                  
                  {/* Hover Shine Sweep */}
                  <motion.div
                    initial={{ x: "-150%" }}
                    whileHover={{ x: "150%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12 z-20"
                  />

                  <span className="relative z-10 text-white font-accent text-[10px] md:text-[13px] font-bold tracking-[0.4em] sm:tracking-[0.6em] uppercase drop-shadow-[0_0_10px_rgba(217,70,239,0.4)] group-hover:text-glow-lilac transition-all duration-500 whitespace-nowrap">
                    A Jornada da Alma
                  </span>
                </motion.div>

                {/* Right Line - Animated Expansion on Hover */}
                <motion.div 
                  variants={{
                    hover: { width: 80, opacity: 1, backgroundColor: "rgba(168, 85, 247, 0.8)" }
                  }}
                  whileHover="hover"
                  className="hidden md:block h-[1.5px] w-16 bg-linear-to-l from-transparent via-brand-magenta/40 to-brand-magenta/60 relative overflow-hidden transition-all duration-500"
                >
                  <motion.div 
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent"
                  />
                </motion.div>
              </div>
              <motion.div 
                animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-brand-magenta shadow-[0_0_15px_#D946EF]"
              />
            </motion.div>
            
            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { 
                    duration: 0.8, 
                    ease: [0.22, 1, 0.36, 1],
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  } 
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-5xl lg:text-[4rem] font-display leading-[1.12] mb-12 tracking-tight text-[#1D1030] max-w-4xl mx-auto"
            >
              <span className="block font-medium mb-1 tracking-tight">
                Você sente que está vivendo
              </span>
              <div className="flex flex-col md:flex-row items-center justify-center gap-x-4 gap-y-2 lg:gap-x-6 mt-1 md:mt-3 group">
                <span className="font-medium text-[#1D1030] tracking-tight">sempre a</span>
                <span className="relative inline-block">
                  <span className="relative z-10 italic font-serif text-transparent bg-clip-text bg-linear-to-r from-brand-magenta to-brand-plum pb-2 drop-shadow-[0_4px_12px_rgba(102,15,86,0.2)] font-semibold pr-3">
                    mesma história?
                  </span>
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    style={{ originX: 0 }}
                    transition={{ delay: 0.6, duration: 1.2, ease: "circOut" }}
                    className="absolute bottom-3 left-0 right-0 h-[6px] bg-brand-magenta/30 rounded-full z-0 pointer-events-none -rotate-1"
                  />
                </span>
              </div>
            </motion.h2>
            
          <div className="flex flex-col items-center mb-16">
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { delay: 0.8, duration: 0.8, ease: "easeOut" } }
              }}
              className="flex items-center justify-center gap-4 sm:gap-8 mb-8 w-full"
            >
              <div className="h-[2px] flex-1 max-w-[60px] sm:max-w-[160px] bg-linear-to-r from-transparent via-brand-magenta/40 to-transparent" />
              <p className="text-brand-magenta font-bold tracking-[0.3em] sm:tracking-[0.5em] uppercase text-[9px] sm:text-[14px] drop-shadow-[0_0_12px_rgba(217,70,239,0.5)] whitespace-nowrap">
                Auto-observação Sistêmica
              </p>
              <div className="h-[2px] flex-1 max-w-[60px] sm:max-w-[160px] bg-linear-to-r from-transparent via-brand-magenta/40 to-transparent" />
            </motion.div>

            {/* Grouped Navigation Card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-1 p-1.5 rounded-full bg-[#0D0718] border border-brand-magenta/30 shadow-[0_10px_30px_rgba(0,0,0,0.3),0_0_20px_rgba(217,70,239,0.15)] relative z-30"
            >
              <button 
                onClick={() => setCurrentPage(prev => (prev === 0 ? 1 : prev - 1))}
                className="p-3 rounded-full hover:bg-brand-magenta/20 text-brand-magenta transition-all duration-300 flex items-center justify-center group/nav"
                title="Página Anterior"
              >
                <ChevronLeft className="w-6 h-6 group-hover/nav:-translate-x-1 transition-transform" />
              </button>
              
              <div className="w-px h-6 bg-brand-magenta/20" />
              
              <button 
                onClick={() => setCurrentPage(prev => (prev === 1 ? 0 : prev + 1))}
                className="p-3 rounded-full hover:bg-brand-magenta/20 text-brand-magenta transition-all duration-300 flex items-center justify-center group/nav"
                title="Próxima Página"
              >
                <ChevronRight className="w-6 h-6 group-hover/nav:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
          </motion.div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="relative group">

              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentPage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                  {[
                    [
                      { 
                        text: "Se envolve com pessoas que te ferem ou te ignoram", 
                        icon: <DiagnosticIcon icon={HeartCrack} />,
                        featured: true
                      },
                      { 
                        text: "Se anula dentro dos relacionamentos", 
                        icon: <DiagnosticIcon icon={UserMinus} />,
                        featured: true 
                      },
                      { 
                        text: "Sente um vazio que nada preenche", 
                        icon: <DiagnosticIcon icon={Moon} />,
                        featured: true 
                      },
                    ],
                    [
                      { 
                        text: "Vive sobrecarregada, cansada e emocionalmente esgotada", 
                        icon: <DiagnosticIcon icon={BatteryWarning} />,
                        featured: true 
                      },
                      { 
                        text: "Tenta mudar… mas sempre volta para o mesmo lugar", 
                        icon: <DiagnosticIcon icon={RefreshCcw} />,
                        featured: true 
                      },
                      { 
                        text: "Sente que a vida está travada em ciclos repetitivos", 
                        icon: <DiagnosticIcon icon={Infinity} />,
                        featured: true 
                      },
                    ],
                  ][currentPage].map((item, i) => (
                    <DiagnosticCard key={`${currentPage}-${i}`} item={item} index={i} isTouch={isTouch} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Elegant Revelation Pill Card (Compact Neon Style) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-24 md:mt-40 px-4 md:px-6 flex justify-center"
          >
            <div className="relative group max-w-4xl w-full">
              {/* Neon Glow Outer Border (Animated) */}
              <div className="absolute -inset-[1px] bg-linear-to-r from-brand-magenta/40 via-brand-plum/40 to-brand-magenta/40 rounded-3xl md:rounded-full opacity-70 blur-[1px] group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Premium Dark Pill Card - Link to Method Section */}
              <motion.a 
                href="#metodo"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 80px rgba(76, 29, 149, 0.6)",
                  borderColor: "rgba(168, 85, 247, 0.9)"
                }}
                className="relative flex flex-col md:flex-row items-center justify-between bg-linear-to-r from-[#0D0718] via-brand-indigo to-[#0D0718] border-3 md:border-4 border-brand-indigo/80 rounded-3xl md:rounded-full px-6 py-8 md:px-10 md:py-8 shadow-[0_0_40px_rgba(76, 29, 149,0.6)] backdrop-blur-xl transition-all duration-700 overflow-hidden cursor-pointer"
              >
                {/* Internal Ambient Pulse */}
                <motion.div 
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-radial-[at_50%_50%] from-brand-magenta/30 to-transparent"
                />

                {/* Hover Shine Sweep */}
                <motion.div
                  initial={{ x: "-150%" }}
                  whileHover={{ x: "150%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-12 z-20 pointer-events-none"
                />
                
                {/* Left Icon - Elevated with Glow */}
                <div className="flex-shrink-0 relative z-10 mb-6 md:mb-0">
                  <div className="absolute inset-0 bg-brand-magenta/20 blur-xl rounded-full scale-125" />
                  <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/5 backdrop-blur-md border-3 border-brand-indigo/60 rounded-2xl shadow-[0_0_20px_rgba(76,29,149,0.4)] group-hover:border-brand-indigo transition-all duration-500">
                    <Eye className="w-6 h-6 md:w-9 md:h-9 text-white drop-shadow-[0_0_8px_rgba(217,70,239,0.8)]" />
                  </div>
                </div>

                {/* Central Text - High Contrast Glow */}
                <div className="flex-1 px-4 md:px-12 text-center relative z-10 mb-6 md:mb-0">
                  <div className="space-y-1">
                    <span className="text-brand-magenta block text-[9px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.6em] font-accent font-bold drop-shadow-[0_0_5px_rgba(217,70,239,0.5)]">
                      A grande revelação
                    </span>
                    <p className="text-white font-display text-lg sm:text-xl md:text-3xl leading-tight tracking-tight font-medium group-hover:text-glow-lilac transition-all duration-500">
                      "E no fundo, você sabe: <br className="hidden md:block" />
                      <span className="italic font-serif text-brand-magenta brightness-125 drop-shadow-[0_0_10px_rgba(217,70,239,0.4)]">isso não começou com você.</span>"
                    </p>
                  </div>
                </div>

                {/* Right Action Circle - Minimalist & Glassy */}
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-brand-magenta transition-all duration-500 cursor-pointer shadow-xl relative z-10"
                >
                  <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
                </motion.div>
              </motion.a>
            </div>
          </motion.div>

          {/* Remodeled Roots System Section - Vertical Alignment */}
          <section className="mt-32 md:mt-60 relative max-w-7xl mx-auto px-0 md:px-6 overflow-hidden">
            {/* Atmospheric Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none z-0">
              <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-magenta/10 blur-[150px] rounded-full animate-pulse" />
              <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-indigo/15 blur-[180px] rounded-full animate-pulse [animation-delay:2s]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-24 relative z-10 items-center px-4 md:px-0">
              
              {/* Left Column - Diagnostic Cards (Vertical Column) */}
              <div className="space-y-8 lg:pt-10">
                {[
                  {
                    id: "01",
                    icon: <RefreshCw className="w-10 h-10 group-hover:rotate-180 transition-transform duration-1000 ease-in-out" />,
                    tag: "Padrão Invisível",
                    title: "Repetição de Padrões",
                    text: "\"Repetindo histórias da sua mãe ou das mulheres da sua família no seu cotidiano.\"",
                    color: "magenta"
                  },
                  {
                    id: "02",
                    icon: <FamilyTreeIcon className="w-12 h-12" />,
                    tag: "Cargas Ancestrais",
                    title: "Herança Emocional",
                    text: "\"Dores e traumas de quem veio antes que continuam vibrando no seu corpo agora.\"",
                    color: "indigo"
                  },
                  {
                    id: "03",
                    icon: (
                      <motion.div
                        animate={{ 
                          x: [0, -1, 1, -1, 1, 0],
                          y: [0, 1, -1, 1, -1, 0],
                          opacity: [1, 0.8, 1, 0.9, 1]
                        }}
                        transition={{ 
                          duration: 0.3, 
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <Zap className="w-10 h-10" />
                      </motion.div>
                    ),
                    tag: "Auto-Sabotagem",
                    title: "Sabotagem Inconsciente",
                    text: "\"Frenagem silenciosa que impede sua prosperidade e trava o amor real na sua vida.\"",
                    color: "magenta"
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                    whileHover={{ scale: 1.01 }}
                    className="group relative w-full max-w-full md:max-w-xl mx-auto md:mx-0"
                  >
                    <div className={`absolute -inset-1 bg-linear-to-r ${item.color === 'magenta' ? 'from-brand-magenta to-brand-indigo' : 'from-brand-indigo to-brand-magenta'} rounded-2xl md:rounded-[3rem] blur opacity-15 group-hover:opacity-40 transition duration-500`} />
                    <div className="relative p-5 sm:p-8 md:p-10 rounded-2xl md:rounded-[3rem] bg-linear-to-br from-[#0D0718] via-[#1A0B2E] to-[#0D0718] border-2 border-white/10 overflow-hidden box-border">
                      <div className="absolute top-0 right-0 p-4 md:p-8 text-4xl md:text-6xl font-display font-black text-white/[0.03] select-none">
                        {item.id}
                      </div>
                      <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-center md:items-start relative z-10 text-center md:text-left">
                        <div className={`flex-shrink-0 w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-3xl bg-white/5 border border-white/20 flex items-center justify-center ${item.color === 'magenta' ? 'text-brand-magenta group-hover:border-brand-magenta group-hover:shadow-[0_0_30px_rgba(217,70,239,0.3)]' : 'text-brand-indigo group-hover:border-brand-indigo group-hover:shadow-[0_0_30px_rgba(76,29,149,0.3)]'} transition-all duration-500`}>
                          {React.cloneElement(item.icon as React.ReactElement, { className: "w-7 h-7 md:w-10 md:h-10" })}
                        </div>
                        <div className="space-y-3 md:space-y-4">
                          <span className={`text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.6em] ${item.color === 'magenta' ? 'text-brand-magenta' : 'text-brand-indigo'} font-bold`}>
                            {item.tag}
                          </span>
                          <h4 className="text-white font-display text-lg md:text-3xl font-bold tracking-tight leading-tight">
                            {item.title}
                          </h4>
                          <p className={`text-white/70 font-light text-[13px] sm:text-sm md:text-lg leading-relaxed italic border-l-0 md:border-l-2 ${item.color === 'magenta' ? 'border-brand-magenta/30' : 'border-brand-indigo/30'} md:pl-6`}>
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right Column - Text Section */}
              <div className="space-y-16 order-first lg:order-last">
                <motion.div
                  initial={{ opacity: 0, y: 20, x: isTouch ? 0 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-10"
                >
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="relative w-full md:w-fit p-5 sm:p-10 md:p-14 rounded-2xl md:rounded-[5rem_2rem_5rem_2rem] bg-[#0D0718] border border-brand-magenta/40 overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.5),0_0_80px_rgba(217,70,239,0.15)] group mb-8 md:mb-12 transition-all duration-1000 box-border"
                    >
                      {/* Interactive Dark Purple Glow Border with matching shape */}
                      <div className="absolute inset-0 rounded-2xl md:rounded-[5rem_2rem_5rem_2rem] border-2 border-brand-magenta/30 group-hover:border-brand-magenta/70 blur-[1px] transition-all duration-700" />
                      <div className="absolute inset-x-12 top-0 h-px bg-linear-to-r from-transparent via-brand-magenta to-transparent group-hover:via-brand-magenta brightness-150 transition-all duration-700 blur-[1px]" />
                      <div className="absolute inset-x-20 bottom-0 h-px bg-linear-to-r from-transparent via-brand-magenta/50 to-transparent group-hover:via-brand-magenta transition-all duration-700" />

                      {/* Ambient Internal Glow */}
                      <motion.div 
                        animate={{ 
                          opacity: [0.1, 0.25, 0.1],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-magenta/20 rounded-full blur-[120px] pointer-events-none"
                      />

                      <h3 className="relative z-10 text-3xl sm:text-5xl md:text-7xl font-display tracking-tighter text-white leading-[0.85] lowercase filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(217,70,239,0.4)] transition-all duration-700">
                        A raiz <br />
                        <span className="text-brand-magenta font-black italic relative z-10 brightness-125 drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]">
                          invisível
                          <motion.div 
                            initial={{ width: 0 }} 
                            whileInView={{ width: isTouch ? "100%" : "110%" }} 
                            transition={{ delay: 1, duration: 1.5 }} 
                            className={`absolute -bottom-1 ${isTouch ? 'left-0' : '-left-[5%]'} h-4 bg-brand-magenta/20 -z-10 skew-x-12`} 
                          />
                        </span> <br /> 
                        de tudo.
                      </h3>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="relative p-5 sm:p-10 md:p-16 rounded-2xl md:rounded-[2rem_5rem_2rem_5rem] bg-[#0D0718] border border-brand-magenta/40 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.4),0_0_70px_rgba(217,70,239,0.15)] group box-border"
                    >
                      {/* Interactive Neon Glow Border with matching shape */}
                      <div className="absolute inset-0 rounded-2xl md:rounded-[2rem_5rem_2rem_5rem] border-2 border-brand-magenta/30 group-hover:border-brand-magenta/70 blur-[1px] transition-all duration-700" />
                      <div className="absolute inset-x-12 top-0 h-px bg-linear-to-r from-transparent via-brand-magenta to-transparent group-hover:via-brand-magenta brightness-150 transition-all duration-700 blur-[1px]" />
                      
                      <div className="relative z-10 space-y-8">
                        <p className="text-white/90 font-light text-lg sm:text-2xl md:text-3xl leading-[1.4] max-w-xl tracking-tight italic">
                          "Muitas dores que você vive hoje são <span className="text-brand-indigo font-bold brightness-125 drop-shadow-[0_0_10px_rgba(129,140,248,0.4)]">reflexos</span> de um sistema maior que opera no fundo da sua alma, <span className="text-brand-magenta font-black brightness-125 drop-shadow-[0_0_10px_rgba(217,70,239,0.5)]">conectando você</span> a histórias que ainda precisam ser vistas."
                        </p>

                        {/* Decorative systemic divider inside card */}
                        <div className="flex items-center gap-6">
                          <div className="h-px flex-1 bg-linear-to-r from-transparent to-brand-magenta/40" />
                          <span className="text-brand-magenta text-[10px] md:text-[12px] uppercase tracking-[0.5em] font-accent font-bold whitespace-nowrap drop-shadow-[0_0_8px_rgba(217,70,239,0.4)]">
                            Auto-Observação Sistêmica
                          </span>
                          <div className="h-px w-20 bg-linear-to-r from-brand-magenta/40 to-transparent" />
                        </div>
                      </div>

                      {/* Subtle Ambient Internal Glow */}
                      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-magenta/15 rounded-full blur-[80px] pointer-events-none" />
                    </motion.div>


                </motion.div>
              </div>

            </div>

            {/* Ciclo Ininterrupto - Banner Card (Interactive Pill) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onMouseMove={(e) => {
                if (isTouch) return;
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
              }}
              className="mt-20 relative group p-[2px] rounded-3xl md:rounded-full bg-linear-to-r from-brand-magenta via-brand-indigo to-brand-magenta shadow-[0_0_30px_rgba(217,70,239,0.3)] hover:shadow-[0_0_50px_rgba(217,70,239,0.5)] transition-all duration-700 overflow-hidden box-border mx-2 sm:mx-0"
            >
              {/* Floating Light Layer (Spotlight) */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(217, 70, 239, 0.1), transparent 80%)`,
                }}
              />

              <div className="absolute inset-0 bg-[#0D0718]/95 backdrop-blur-2xl rounded-3xl md:rounded-full z-0" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 py-8 px-5 md:px-16">
                <div className="flex flex-col md:flex-row shadow-2xl items-center gap-6 md:gap-10 text-center md:text-left flex-1">
                  {/* Left Pill Badge */}
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-brand-magenta/40 bg-brand-magenta/10 backdrop-blur-md">
                    <motion.div 
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2.5 h-2.5 rounded-full bg-brand-magenta shadow-[0_0_10px_#D946EF]" 
                    />
                    <span className="text-brand-magenta text-[10px] uppercase tracking-[0.5em] font-accent font-bold">
                      Ciclo Ininterrupto
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-white font-display text-xl md:text-2xl leading-tight tracking-tight">
                      E enquanto isso não é olhado...
                    </h4>
                    <p className="italic font-serif text-lg md:text-xl text-brand-magenta brightness-125 drop-shadow-[0_0_15px_rgba(217,70,239,0.4)] opacity-90">
                      a vida continua repetindo os mesmos ciclos.
                    </p>
                  </div>
                </div>

                <motion.button
                  onClick={() => document.getElementById('vendas')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group/btn relative px-8 py-4 bg-[#0D0718] text-white rounded-full flex items-center gap-4 border border-white/20 shadow-2xl transition-all duration-500 overflow-hidden shrink-0"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-brand-magenta/10 to-brand-indigo/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 text-[10px] md:text-xs uppercase tracking-[0.3em] font-accent font-bold">
                    Quebrar o ciclo agora
                  </span>
                  <ArrowRight className="relative z-10 w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-500" />
                </motion.button>
              </div>
            </motion.div>
          </section>
        </div>
      </Section>
      
      {/* Neon Pulse Transition Line - Star-centered */}
      <div className="relative h-1 w-full z-30 pointer-events-none flex items-center justify-center overflow-visible">
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-linear-to-r from-transparent via-[#D946EF] to-transparent shadow-[0_0_40px_#D946EF,0_0_80px_rgba(217,70,239,0.5)]"
          style={{ height: '5px' }}
        />
        
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 1.5, ease: "backOut" }}
          className="relative z-10 flex items-center justify-center"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-32 h-32 bg-[#A855V7] rounded-full blur-3xl opacity-50"
          />
          
          <div className="relative z-20 flex items-center justify-center">
            <div className="absolute inset-0 scale-150 bg-brand-magenta blur-xl opacity-80" />
            
            <svg 
              width="64" 
              height="64" 
              viewBox="0 0 100 100" 
              className="drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] drop-shadow-[0_0_30px_#D946EF]"
            >
              <path 
                d="M 50 0 C 50 40 60 50 100 50 C 60 50 50 60 50 100 C 50 60 40 50 0 50 C 40 50 50 40 50 0 Z" 
                fill="white"
              />
              <path 
                d="M 50 10 C 50 45 55 50 90 50 C 55 50 50 55 50 90 C 50 55 45 50 10 50 C 45 50 50 45 50 10 Z" 
                fill="url(#starGradient_JornadaSobre)"
                opacity="0.8"
              />
              <defs>
                <radialGradient id="starGradient_JornadaSobre" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#fff" />
                  <stop offset="100%" stopColor="#D946EF" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute w-[1px] h-24 bg-linear-to-b from-transparent via-white/80 to-transparent blur-[0.5px]" />
          <div className="absolute h-[1px] w-24 bg-linear-to-r from-transparent via-white/80 to-transparent blur-[0.5px]" />
        </motion.div>
      </div>

      {/* Sobre Mim Section */}
      <Section id="quem-sou-eu" className="bg-[#0D0718] py-16 sm:py-24 relative overflow-hidden z-10 isolate text-white">
        {/* Glowing Particle Background - Purple and Pink Tones */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(isTouch ? 20 : 80)].map((_, i) => {
            const size = Math.random() * 2.5 + 1.2;
            const colors = ['#F0ABFC', '#D946EF', '#C77DFF', '#E879F9', '#FFD6FF']; // Brighter palette
            const color = colors[i % colors.length];
            return (
              <div
                key={`particle-${i}`}
                className="absolute rounded-full"
                style={{ 
                  left: `${Math.random() * 100}%`, 
                  top: `${Math.random() * 100}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: color,
                  opacity: Math.random() * 0.5 + 0.5,
                  boxShadow: `0 0 ${size * 6}px ${color}, 0 0 ${size * 3}px white`,
                }}
              />
            );
          })}
        </div>

        {/* Spiral Wavy Background Decor - Static, Denser and Spread Out */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 select-none opacity-80">
          {/* Abstract Spiral Curves - Distributed and Static for Performance */}
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute border-t-[0.5px] rounded-full opacity-25"
                style={{
                  width: `${120 + i * 25}%`,
                  height: `${120 + i * 25}%`,
                  top: `-${30 + i * 10}%`,
                  left: `-${40 + i * 8}%`,
                  transform: `rotate(${5 + i * 12}deg)`,
                  borderColor: i % 2 === 0 ? 'rgba(217, 70, 239, 0.4)' : 'rgba(199, 125, 255, 0.3)',
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Text Side (Left) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-6 lg:space-y-8 text-center lg:text-left"
            >
              <div className="flex flex-col items-center lg:items-start gap-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 group"
                >
                  <motion.div 
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 10px 40px rgba(168, 85, 247, 0.4)",
                      borderColor: "rgba(217, 70, 239, 0.8)"
                    }}
                    className="px-10 py-3 rounded-full bg-linear-to-r from-[#0D0718] via-brand-indigo to-[#0D0718] border border-brand-magenta/50 shadow-[0_4px_30px_rgba(168,85,247,0.25)] backdrop-blur-md relative overflow-hidden flex items-center justify-center transition-all duration-500"
                  >
                    {/* Internal Pulse */}
                    <motion.div 
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-brand-magenta/10"
                    />
                    
                    {/* Hover Shine Sweep */}
                    <motion.div
                      initial={{ x: "-150%" }}
                      whileHover={{ x: "150%" }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12 z-20"
                    />

                    <span className="relative z-10 text-white font-accent text-[10px] md:text-[13px] font-bold tracking-[0.6em] uppercase drop-shadow-[0_0_10px_rgba(217,70,239,0.4)] group-hover:text-glow-lilac transition-all duration-500 flex items-center gap-3">
                      <Sparkles className="w-4 h-4 text-brand-magenta" />
                      quem sou eu ?
                    </span>
                  </motion.div>
                </motion.div>

                <div className="space-y-4">
                  <h2 className="text-5xl md:text-7xl xl:text-8xl font-display text-white leading-none tracking-tighter">
                    Dayza Ely
                  </h2>
                  <div className="h-1 bg-[#C77DFF] w-24 mx-auto lg:mx-0 rounded-full drop-shadow-[0_0_10px_rgba(199,125,255,0.8)]" />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-4xl md:text-6xl xl:text-7xl font-display text-white leading-[1.1] tracking-tight lowercase">
                  Sou terapeuta e <br className="hidden lg:block" />
                  <span className="text-[#C77DFF] font-black italic relative z-10 px-2 drop-shadow-[0_0_15px_rgba(199,125,255,0.5)]">
                    consteladora sistêmica
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: "100%" }} 
                      transition={{ delay: 0.8, duration: 1.2 }} 
                      className="absolute -bottom-1 left-0 h-4 bg-[#C77DFF]/20 -z-10 skew-x-12" 
                    />
                  </span> <br className="hidden lg:block" />
                  espiritual.
                </h3>
                
                <p className="text-xl md:text-2xl text-slate-200 font-light leading-[1.6] tracking-tight max-w-2xl mx-auto lg:mx-0">
                  Meu propósito é ajudar mulheres a <span className="text-[#C77DFF] font-bold underline decoration-[#C77DFF]/60 underline-offset-8 drop-shadow-[0_0_10px_rgba(199,125,255,0.3)]">romperem padrões invisíveis</span> e se reconectarem com sua essência, sua força e seu valor.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="relative p-8 md:p-12 bg-white/5 backdrop-blur-sm rounded-[3rem] border border-white/10"
              >
                <div className="absolute -top-6 left-12 lg:left-12 bg-[#2D0B5A] rounded-full p-3 border border-[#C77DFF]/30 shadow-[0_0_20px_rgba(199,125,255,0.2)]">
                  <Heart className="w-6 h-6 text-[#C77DFF] fill-[#C77DFF]/20" />
                </div>
                
                <blockquote className="space-y-4">
                  <p className="font-serif italic text-2xl md:text-3xl text-slate-100 leading-snug">
                    "Eu acredito que quando você se cura… <br className="hidden md:block" />
                    <span className="text-[#C77DFF] font-bold drop-shadow-[0_0_20px_rgba(199,125,255,0.6)] brightness-110">
                      toda a sua geração também começa a se transformar.
                    </span>"
                  </p>
                </blockquote>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 flex flex-col items-center gap-6 group"
            >
              <div className="relative w-[287px] h-[431px] md:w-[528px] md:h-[739px] xl:w-[581px] xl:h-[792px]">
                {/* Architectural Layered Frames - Enhanced with more color layers and glowing rings */}
                <div className="absolute -inset-14 bg-brand-magenta/10 rounded-[6rem] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
                <div className="absolute -inset-8 bg-brand-lilac/5 rounded-[5.5rem] blur-[40px] -z-10" />
                
                {/* Decorative Rotating Glowing Rings */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-12 border-[0.5px] border-[#C77DFF]/20 rounded-[6rem] -z-10 opacity-30 group-hover:opacity-60 transition-opacity duration-700"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 border-[1px] border-[#EC4899]/15 rounded-[4.5rem] -z-10 opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                />

                <div className="absolute -inset-6 border border-[#C77DFF]/20 rounded-[5rem] -z-10 bg-linear-to-br from-[#C77DFF]/5 to-transparent blur-[2px] group-hover:border-[#C77DFF]/40 transition-colors duration-700" />
                <div className="absolute -inset-10 border border-white/5 rounded-[5.5rem] -z-20 opacity-20 group-hover:scale-105 transition-transform duration-1000 group-hover:border-[#EC4899]/30" />
                
                {/* Additional Inner Glow Layer */}
                <div className="absolute inset-0 rounded-[4rem] shadow-[inset_0_0_50px_rgba(199,125,255,0.2)] z-10 pointer-events-none" />
                
                {/* Elegant Corner Accents */}
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#C77DFF]/40 rounded-tl-[3rem] z-10 transition-all duration-700 group-hover:-top-6 group-hover:-left-6 group-hover:border-[#C77DFF]" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#C77DFF]/40 rounded-br-[3rem] z-10 transition-all duration-700 group-hover:-bottom-6 group-hover:-right-6 group-hover:border-[#C77DFF]" />
                
                <div className="absolute -inset-2 border border-brand-magenta/30 rounded-[4.2rem] z-10 opacity-50 pointer-events-none group-hover:scale-102 transition-transform duration-500" />
                <div className="absolute -inset-[3px] border border-brand-lilac/40 rounded-[4.1rem] z-10 opacity-30 pointer-events-none" />
                
                {/* Main Image Container */}
                <div className="relative h-full w-full rounded-[4rem] overflow-hidden border-2 border-white/10 shadow-[0_60px_100px_rgba(0,0,0,0.6)] bg-[#0A0514] items-center">
                  <img 
                    src="/dayza_about.jpeg" 
                    alt="Dayza Ely" 
                    className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1] transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                    style={{ mixBlendMode: 'normal' }}
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Decorative Overlays */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-[#C77DFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />
                  
                  {/* Light Sweep (Premium Detail) */}
                  <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out pointer-events-none" />
                </div>

                {/* Soft Backlighting */}
                <div className="absolute inset-0 bg-[#C77DFF]/15 blur-[120px] -z-30 rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-1000" />
              </div>

              {/* CTA Below Photo - Repositioned and Styled with Pink Glow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-6 lg:mt-8"
              >
                <motion.button
                  onClick={() => document.getElementById('vendas')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 35px #D946EF, inset 0 0 15px #D946EF" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-4 bg-gradient-to-r from-[#A02D68] to-[#581C87] text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold uppercase tracking-[0.2em] text-sm transition-all z-20 border-2 border-[#D946EF] shadow-[0_0_25px_#D946EF,inset_0_0_12px_#D946EF]"
                >
                  <Sparkles className="w-5 h-5 text-[#D946EF]" />
                  <span>Preciso me Reconectar</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Neon Pulse Transition Line - Star-centered */}
      <div className="relative h-1 w-full z-30 pointer-events-none flex items-center justify-center overflow-visible">
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-linear-to-r from-transparent via-[#D946EF] to-transparent shadow-[0_0_40px_#D946EF,0_0_80px_rgba(217,70,239,0.5)]"
          style={{ height: '5px' }}
        />
        
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 1.5, ease: "backOut" }}
          className="relative z-10 flex items-center justify-center"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-32 h-32 bg-[#A855F7] rounded-full blur-3xl opacity-50"
          />
          
          <div className="relative z-20 flex items-center justify-center">
            <div className="absolute inset-0 scale-150 bg-brand-magenta blur-xl opacity-80" />
            
            <svg 
              width="64" 
              height="64" 
              viewBox="0 0 100 100" 
              className="drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] drop-shadow-[0_0_30px_#D946EF]"
            >
              <path 
                d="M 50 0 C 50 40 60 50 100 50 C 60 50 50 60 50 100 C 50 60 40 50 0 50 C 40 50 50 40 50 0 Z" 
                fill="white"
              />
              <path 
                d="M 50 10 C 50 45 55 50 90 50 C 55 50 50 55 50 90 C 50 55 45 50 10 50 C 45 50 50 45 50 10 Z" 
                fill="url(#starGradient_SobreConstelacao)"
                opacity="0.8"
              />
              <defs>
                <radialGradient id="starGradient_SobreConstelacao" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#fff" />
                  <stop offset="100%" stopColor="#D946EF" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute w-[1px] h-24 bg-linear-to-b from-transparent via-white/80 to-transparent blur-[0.5px]" />
          <div className="absolute h-[1px] w-24 bg-linear-to-r from-transparent via-white/80 to-transparent blur-[0.5px]" />
        </motion.div>
      </div>

      {/* What is Constellation Section - Redesigned to match Hero Aesthetic */}
      <Section id="metodo" className="bg-linear-to-br from-[#F5E6FF] via-[#D8B4FE] to-[#F3E8FF] text-[#1A0B2E] border-y border-brand-lilac/30 relative overflow-hidden py-16 md:py-32 shadow-[inset_0_0_150px_rgba(168,85,247,0.2)]">
        {/* Atmospheric Background matching Jornada */}
        <div className="absolute inset-0 bg-linear-to-br from-white/10 via-[#C084FC]/30 to-white/10 pointer-events-none" />
        <div className={`absolute top-0 right-0 w-[700px] h-[700px] bg-brand-magenta/20 ${isTouch ? 'blur-[80px]' : 'blur-[120px]'} rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none z-0`} />
        <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-plum/20 ${isTouch ? 'blur-[80px]' : 'blur-[120px]'} rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none z-0`} />
        
        {/* Glowing Systemic Tree Background */}
        <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-end opacity-30 md:opacity-70 overflow-hidden mix-blend-screen">
          <ConstellationLayer />
          <svg viewBox="0 0 1400 900" preserveAspectRatio="xMidYMax slice" className="w-[1400px] h-[900px] text-[#E9D5FF] drop-shadow-[0_0_15px_rgba(233,213,255,0.4)] absolute bottom-0 left-1/2 -translate-x-1/2 min-w-full min-h-full">
            <RecursiveTreeStatic x={150} y={900} length={220} angle={-65} depth={1} maxDepth={isTouch ? 5 : 8} />
            <RecursiveTreeStatic x={1250} y={900} length={220} angle={-115} depth={1} maxDepth={isTouch ? 5 : 8} />
          </svg>
        </div>

        {/* Floating Background Particles */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden mix-blend-overlay">
          {[...Array(isTouch ? 40 : 250)].map((_, i) => {
            const size = Math.random() * 2 + 1;
            const colors = ['#FFFFFF', '#FDE68A', '#E9D5FF', '#D8B4FE'];
            const color = colors[i % colors.length];
            return (
              <div
                key={`particle-${i}`}
                className="absolute rounded-full"
                style={{ 
                  left: `${Math.random() * 100}%`, 
                  top: `${Math.random() * 100}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: color,
                  opacity: Math.random() * 0.5 + 0.3,
                  boxShadow: `0 0 ${size * 5}px ${color}`,
                }}
              />
            );
          })}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Diagnostics List + Quote */}
          <div className="order-2 lg:order-1 flex flex-col w-full relative z-20">
            
            {/* Detailed Top Divider */}
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#581C87] to-transparent relative opacity-80 mb-2">
              <div className="absolute top-1/2 left-[15%] -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-[#9D174D] shadow-[0_0_8px_rgba(157,23,77,0.8)]" />
              <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-[#9D174D] shadow-[0_0_8px_rgba(157,23,77,0.8)]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-[1.5px] border-[#9D174D] bg-[#1A0B2E] shadow-[0_0_12px_rgba(88,28,135,1)]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#C084FC]" />
            </div>

            <div className="flex flex-col">
              {[
                { 
                  text: "Relacionamentos e padrões de dor", 
                  icon: <Infinity className="w-6 h-6" />,
                  desc: "Cura de laços afetivos e ciclos repetitivos."
                },
                { 
                  text: "Ansiedade e conexão interna", 
                  icon: <Bird className="w-6 h-6" />,
                  desc: "Resgate da paz interior e presença."
                },
                { 
                  text: "Prosperidade e vida financeira", 
                  icon: <DollarSign className="w-6 h-6" />,
                  desc: "Liberação de crenças e fluxos estagnados."
                },
                { 
                  text: "Autoestima e amor próprio", 
                  icon: <Heart className="w-6 h-6" />,
                  desc: "Fortalecimento da identidade e valor."
                },
                { 
                  text: "Maternidade e fardos", 
                  icon: <Leaf className="w-6 h-6" />,
                  desc: "Leveza nos processos de cuidado e criação."
                },
                { 
                  text: "Posicionamento e Escolhas", 
                  icon: <HandFist className="w-6 h-6" />,
                  desc: "Coragem para ocupar seu lugar no mundo."
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative flex flex-col md:flex-row items-center py-6 md:py-8 gap-4 md:gap-4 transition-all duration-500 hover:bg-white/40 hover:shadow-[0_8px_40px_rgba(88,28,135,0.12)] px-4 md:px-6 md:-mx-6 rounded-2xl cursor-default text-center md:text-left"
                >
                  {/* Detailed Bottom Divider for each item */}
                  <div className="absolute bottom-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-[#581C87]/10 via-[#581C87]/80 to-[#581C87]/10 group-hover:via-[#9D174D] group-hover:h-[2px] transition-all duration-500" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[0.5px] w-2 h-2 rotate-45 border border-[#581C87] bg-white group-hover:bg-[#9D174D] group-hover:border-[#9D174D] group-hover:shadow-[0_0_10px_rgba(157,23,77,0.8)] transition-all duration-500" />

                  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-7 flex-1">
                     <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#0D0718] border border-brand-magenta/40 shadow-[0_4px_15px_rgba(217,70,239,0.15),0_0_20px_rgba(0,0,0,0.1)] flex items-center justify-center text-brand-magenta group-hover:text-white group-hover:scale-105 group-hover:shadow-[0_8px_25px_rgba(217,70,239,0.3)] group-hover:border-brand-magenta/80 transition-all duration-500 shrink-0">
                       <div className="absolute inset-0 bg-brand-magenta/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                       <div className="relative z-10 transition-transform duration-300 filter drop-shadow-[0_2px_8px_rgba(217,70,239,0.4)]">{item.icon}</div>
                     </div>
                     <p className="text-[#3B0764] font-medium text-[14px] md:text-[16px] tracking-wide max-w-full md:max-w-[200px] leading-snug group-hover:text-[#581C87] transition-colors duration-300">
                       {item.desc}
                     </p>
                  </div>
                  
                  <div className="flex-1 flex justify-center md:justify-end">
                    <h3 className="text-[20px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-display text-[#3B0764] md:text-right group-hover:text-[#9D174D] transition-colors duration-300 leading-[1.1] max-w-full md:max-w-[280px] drop-shadow-sm">
                      {item.text}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <WhoIsForModal />
          </div>

          {/* Right Column: Main Text Content */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left space-y-8 lg:sticky lg:top-32"
            >
              <div className="inline-block mb-8">
                <motion.div 
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 10px 40px rgba(168, 85, 247, 0.4)",
                    borderColor: "rgba(217, 70, 239, 0.8)"
                  }}
                  className="px-10 py-3 rounded-full bg-linear-to-r from-[#0D0718] via-brand-indigo to-[#0D0718] border border-brand-magenta/50 shadow-[0_4px_30px_rgba(168,85,247,0.25)] backdrop-blur-md relative overflow-hidden flex items-center justify-center transition-all duration-500 cursor-default"
                >
                  {/* Internal Pulse */}
                  <motion.div 
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-brand-magenta/10"
                  />
                  
                  {/* Hover Shine Sweep */}
                  <motion.div
                    initial={{ x: "-150%" }}
                    whileHover={{ x: "150%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12 z-20"
                  />

                  <span className="relative z-10 text-white font-accent text-[10px] md:text-[13px] font-bold tracking-[0.6em] uppercase drop-shadow-[0_0_10px_rgba(217,70,239,0.4)] group-hover:text-glow-lilac transition-all duration-500 flex items-center gap-3">
                    <Star className="w-4 h-4 text-brand-magenta" />
                    O Método
                  </span>
                </motion.div>
              </div>
              
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-[#1A0B2E] leading-tight md:leading-[1.1] drop-shadow-md">
                O que é a <br className="hidden md:block" />
                <div className="relative inline-block mt-1 mb-2">
                  <div className="absolute inset-0 bg-brand-magenta/10 blur-xl rounded-full" />
                  <span className="relative text-[#A02D68] italic font-black tracking-tight pr-2 drop-shadow-[0_2px_15px_rgba(217,70,239,0.4)]">
                    Constelação Sistêmica
                  </span>
                </div>
                <br />
                <span className="inline-block text-[#3B0764] font-medium mt-1">Espiritual?</span>
              </h2>
              
              <div className="space-y-12 pt-6">
                <div className="relative">
                  <div className="absolute -inset-6 bg-white/40 backdrop-blur-xl rounded-[2rem] border border-white/60 shadow-[0_8px_32px_rgba(107,33,168,0.1)] -z-10" />
                  
                  <div className="relative pl-8 py-2">
                    {/* Decorative side accent with glow */}
                    <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#9D174D] via-[#C084FC] to-[#9D174D] rounded-full shadow-[0_0_12px_rgba(157,23,77,0.6)]" />
                    
                    <p className="text-[#3A2A56] text-[22px] md:text-[26px] font-medium leading-[1.6]">
                      É um <span className="text-[#9D174D] font-bold bg-[#9D174D]/10 px-2 rounded-md">processo profundo</span> de liberação emocional e energética que acessa a <span className="italic font-serif text-[#A02D68] font-bold text-[26px] md:text-[30px] pr-1">raiz dos seus bloqueios</span>
                    </p>
                    
                    <div className="mt-6 flex items-center gap-4">
                      <div className="h-[1px] w-12 bg-brand-magenta/40" />
                      <span className="text-sm md:text-base tracking-[0.25em] uppercase font-accent font-bold text-[#6B21A8] bg-[#6B21A8]/5 px-4 py-1.5 rounded-full border border-[#6B21A8]/10">
                        no seu sistema familiar e na sua história
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row py-5 px-6 sm:px-7 rounded-[1.5rem] sm:rounded-[2rem] border border-brand-magenta/40 bg-[#0D0718] items-center gap-4 sm:gap-5 shadow-[0_4px_15px_rgba(217,70,239,0.15),0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_25px_rgba(217,70,239,0.3)] hover:-translate-y-1 hover:border-brand-magenta/80 transition-all duration-500 group relative overflow-hidden w-full sm:w-fit text-center sm:text-left">
                  <div className="absolute inset-0 bg-brand-magenta/5 rounded-[2rem] blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="bg-brand-magenta/10 p-2.5 rounded-2xl group-hover:bg-brand-magenta/20 transition-colors z-10 relative shrink-0">
                    <Power className="w-6 h-6 text-brand-magenta shrink-0 group-hover:text-white transition-colors duration-300 filter drop-shadow-[0_2px_8px_rgba(217,70,239,0.4)]" />
                  </div>
                  <p className="text-[#E9D5FF] font-semibold tracking-wide text-[16px] md:text-[19px] leading-snug z-10 relative group-hover:text-white transition-colors duration-300">
                    Aqui, você não trata só o sintoma.<br className="hidden sm:block" />
                    <span className="text-brand-magenta font-black italic drop-shadow-sm group-hover:text-brand-magenta/90">Você vai direto na origem.</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </Section>

      {/* Neon Pulse Transition Line - Star-centered */}
      <div className="relative h-1 w-full z-30 pointer-events-none flex items-center justify-center overflow-visible">
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-linear-to-r from-transparent via-[#D946EF] to-transparent shadow-[0_0_40px_#D946EF,0_0_80px_rgba(217,70,239,0.5)]"
          style={{ height: '5px' }}
        />
        
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 1.5, ease: "backOut" }}
          className="relative z-10 flex items-center justify-center"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-32 h-32 bg-[#A855F7] rounded-full blur-3xl opacity-50"
          />
          
          <div className="relative z-20 flex items-center justify-center">
            <div className="absolute inset-0 scale-150 bg-brand-magenta blur-xl opacity-80" />
            
            <svg 
              width="64" 
              height="64" 
              viewBox="0 0 100 100" 
              className="drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] drop-shadow-[0_0_30px_#D946EF]"
            >
              <path 
                d="M 50 0 C 50 40 60 50 100 50 C 60 50 50 60 50 100 C 50 60 40 50 0 50 C 40 50 50 40 50 0 Z" 
                fill="white"
              />
              <path 
                d="M 50 10 C 50 45 55 50 90 50 C 55 50 50 55 50 90 C 50 55 45 50 10 50 C 45 50 50 45 50 10 Z" 
                fill="url(#starGradient_SobreMetodo)"
                opacity="0.8"
              />
              <defs>
                <radialGradient id="starGradient_SobreMetodo" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#fff" />
                  <stop offset="100%" stopColor="#D946EF" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute w-[1px] h-24 bg-linear-to-b from-transparent via-white/80 to-transparent blur-[0.5px]" />
          <div className="absolute h-[1px] w-24 bg-linear-to-r from-transparent via-white/80 to-transparent blur-[0.5px]" />
        </motion.div>
      </div>



      {/* Feedback Section */}
      <FeedbackSection />

      {/* Neon Pulse Transition Line - Star-centered (Sales) */}
      <div className="relative h-1 w-full z-30 pointer-events-none flex items-center justify-center overflow-visible">
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-linear-to-r from-transparent via-[#D946EF] to-transparent shadow-[0_0_40px_#D946EF,0_0_80px_rgba(217,70,239,0.5)]"
          style={{ height: '3px' }}
        />
        
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 1.5, ease: "backOut" }}
          className="relative z-10 flex items-center justify-center"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-24 h-24 bg-[#A855F7] rounded-full blur-3xl opacity-40"
          />
          
          <div className="relative z-20 flex items-center justify-center">
            <div className="absolute inset-0 scale-125 bg-brand-magenta blur-xl opacity-60" />
            
            <svg 
              width="48" 
              height="48" 
              viewBox="0 0 100 100" 
              className="drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] drop-shadow-[0_0_20px_#D946EF]"
            >
              <path 
                d="M 50 0 C 50 40 60 50 100 50 C 60 50 50 60 50 100 C 50 60 40 50 0 50 C 40 50 50 40 50 0 Z" 
                fill="white"
              />
              <path 
                d="M 50 15 C 50 45 55 50 85 50 C 55 50 50 55 50 85 C 50 55 45 50 15 50 C 45 50 50 45 50 15 Z" 
                fill="url(#starGradient_Sales)"
                opacity="0.8"
              />
              <defs>
                <radialGradient id="starGradient_Sales" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#fff" />
                  <stop offset="100%" stopColor="#D946EF" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute w-[1px] h-16 bg-linear-to-b from-transparent via-white/60 to-transparent blur-[0.5px]" />
          <div className="absolute h-[1px] w-16 bg-linear-to-r from-transparent via-white/60 to-transparent blur-[0.5px]" />
        </motion.div>
      </div>

      {/* Sales Section */}
      <ProductsSection />

      {/* Neon Pulse Transition Line - Star-centered (FAQ) */}
      <div className="relative h-1 w-full z-30 pointer-events-none flex items-center justify-center overflow-visible">
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-linear-to-r from-transparent via-[#D946EF] to-transparent shadow-[0_0_40px_#D946EF,0_0_80px_rgba(217,70,239,0.5)]"
          style={{ height: '5px' }}
        />
        
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 1.5, ease: "backOut" }}
          className="relative z-10 flex items-center justify-center"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-32 h-32 bg-[#A855F7] rounded-full blur-3xl opacity-50"
          />
          
          <div className="relative z-20 flex items-center justify-center">
            <div className="absolute inset-0 scale-150 bg-brand-magenta blur-xl opacity-80" />
            
            <svg 
              width="64" 
              height="64" 
              viewBox="0 0 100 100" 
              className="drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] drop-shadow-[0_0_30px_#D946EF]"
            >
              <path 
                d="M 50 0 C 50 40 60 50 100 50 C 60 50 50 60 50 100 C 50 60 40 50 0 50 C 40 50 50 40 50 0 Z" 
                fill="white"
              />
              <path 
                d="M 50 10 C 50 45 55 50 90 50 C 55 50 50 55 50 90 C 50 55 45 50 10 50 C 45 50 50 45 50 10 Z" 
                fill="url(#starGradient_Final)"
                opacity="0.8"
              />
              <defs>
                <radialGradient id="starGradient_Final" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#fff" />
                  <stop offset="100%" stopColor="#D946EF" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute w-[1px] h-24 bg-linear-to-b from-transparent via-white/80 to-transparent blur-[0.5px]" />
          <div className="absolute h-[1px] w-24 bg-linear-to-r from-transparent via-white/80 to-transparent blur-[0.5px]" />
        </motion.div>
      </div>

      {/* FAQ Section */}
      <FAQSection />

      {/* Neon Pulse Transition Line - Star-centered (Final CTA) */}
      <div className="relative h-1 w-full z-30 pointer-events-none flex items-center justify-center overflow-visible">
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-linear-to-r from-transparent via-[#D946EF] to-transparent shadow-[0_0_40px_#D946EF,0_0_80px_rgba(217,70,239,0.5)]"
          style={{ height: '5px' }}
        />
        
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 1.5, ease: "backOut" }}
          className="relative z-10 flex items-center justify-center"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-32 h-32 bg-[#A855F7] rounded-full blur-3xl opacity-50"
          />
          
          <div className="relative z-20 flex items-center justify-center">
            <div className="absolute inset-0 scale-150 bg-brand-magenta blur-xl opacity-80" />
            
            <svg 
              width="64" 
              height="64" 
              viewBox="0 0 100 100" 
              className="drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] drop-shadow-[0_0_30px_#D946EF]"
            >
              <path 
                d="M 50 0 C 50 40 60 50 100 50 C 60 50 50 60 50 100 C 50 60 40 50 0 50 C 40 50 50 40 50 0 Z" 
                fill="white"
              />
              <path 
                d="M 50 10 C 50 45 55 50 90 50 C 55 50 50 55 50 90 C 50 55 45 50 10 50 C 45 50 50 45 50 10 Z" 
                fill="url(#starGradient_Final2)"
                opacity="0.8"
              />
              <defs>
                <radialGradient id="starGradient_Final2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#fff" />
                  <stop offset="100%" stopColor="#D946EF" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute w-[1px] h-24 bg-linear-to-b from-transparent via-white/80 to-transparent blur-[0.5px]" />
          <div className="absolute h-[1px] w-24 bg-linear-to-r from-transparent via-white/80 to-transparent blur-[0.5px]" />
        </motion.div>
      </div>

      {/* Final CTA Section */}
      <Section id="final-cta" className="bg-linear-to-br from-[#FDFCFE] via-[#F5E8FF] to-[#FAF5FF] relative overflow-hidden text-[#1A0B2E] border-t border-brand-lilac/30">
        {/* Subtle Background Glows */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className={`absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-magenta/10 ${isTouch ? 'blur-[80px]' : 'blur-[120px]'} rounded-full`} />
          <div className={`absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#581C87]/10 ${isTouch ? 'blur-[80px]' : 'blur-[120px]'} rounded-full`} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center mb-16">
            
            {/* Left Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.2] mb-8 text-[#0F0716]">
                Chegou a sua hora de <span className="heading-serif italic text-brand-magenta block mt-2 lg:inline lg:mt-0 lg:ml-2 drop-shadow-sm">mudar isso</span>
              </h2>
              
              <div className="text-lg md:text-xl text-[#1E1135] font-medium leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                <p className="mb-4">Eu vou te direcionar com clareza, leveza e profundidade.</p>
                <p className="text-[#0F0716] font-bold text-xl md:text-2xl flex items-center justify-center lg:justify-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-brand-magenta shrink-0" />
                  Você não precisa carregar tudo isso sozinha.
                </p>
              </div>
 
              <motion.button
                onClick={() => document.getElementById('vendas')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(217,70,239,0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-4 bg-gradient-to-r from-brand-magenta to-[#581C87] text-white px-8 py-4 md:px-12 md:py-6 rounded-full font-black uppercase tracking-[0.25em] text-sm md:text-base transition-all z-20 shadow-[0_0_20px_rgba(217,70,239,0.4)] border-2 border-brand-magenta"
              >
                <HandFist className="w-6 h-6" />
                <span>Já tomei minha decisão</span>
              </motion.button>
            </motion.div>
 
            {/* Right Column */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border-4 border-brand-magenta shadow-[0_0_30px_rgba(217,70,239,0.4),inset_0_0_15px_rgba(217,70,239,0.1)] rounded-[3rem] p-8 md:p-12 text-center lg:text-left max-w-lg mx-auto w-full relative group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <SystemicTree className="w-24 h-24 text-brand-magenta" />
              </div>

              <p className="text-[#581C87] text-xl font-black mb-10 uppercase tracking-widest border-b border-brand-lilac/20 pb-4">
                Você pode continuar:
              </p>
              <ul className="space-y-8 text-lg md:text-xl text-[#3A2A56] font-bold mb-12">
                <li className="flex items-center justify-center lg:justify-start gap-5">
                  <div className="w-3 h-3 rounded-full bg-brand-magenta shrink-0 shadow-[0_0_10px_rgba(217,70,239,0.5)]" />
                  Se anulando
                </li>
                <li className="flex items-center justify-center lg:justify-start gap-5">
                  <div className="w-3 h-3 rounded-full bg-brand-magenta shrink-0 shadow-[0_0_10px_rgba(217,70,239,0.5)]" />
                  Sofrendo em silêncio
                </li>
                <li className="flex items-center justify-center lg:justify-start gap-5 text-left">
                  <div className="w-3 h-3 rounded-full bg-brand-magenta shrink-0 shadow-[0_0_10px_rgba(217,70,239,0.5)]" />
                  Repetindo histórias que não são suas
                </li>
              </ul>
              
              <p className="text-xl md:text-2xl text-[#0F0716] font-black uppercase tracking-[0.2em] pt-8 border-t-2 border-brand-lilac/30 mt-4 leading-relaxed italic">
                Ou pode tomar uma<br className="hidden lg:block lg:mb-1" />
                <span className="text-brand-magenta not-italic underline decoration-brand-lilac/30 underline-offset-8">decisão hoje.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Light Footer Section */}
      <footer id="contato" className="bg-linear-to-br from-[#FDFCFE] via-[#F5E8FF] to-[#FAF5FF] py-20 relative overflow-hidden text-[#1A0B2E] border-t border-brand-lilac/30">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C084FC]/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-10">
            <div className="flex justify-center gap-2 mb-6">
              <SystemicTree className="w-6 h-6 text-brand-magenta filter drop-shadow-[0_0_5px_rgba(217,70,239,0.3)]" />
              <span className="font-accent font-bold tracking-[0.4em] uppercase text-xs text-[#3A2A56]">Constelação Sistêmica</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[11px] font-bold uppercase tracking-[0.25em] text-[#581C87]/80">
              <a href="#hero" className="hover:text-brand-magenta transition-all hover:tracking-[0.3em]">Home</a>
              <a href="#quem-sou-eu" className="hover:text-brand-magenta transition-all hover:tracking-[0.3em]">Quem Sou Eu</a>
              <a href="#feedbacks" className="hover:text-brand-magenta transition-all hover:tracking-[0.3em]">Feedbacks</a>
              <a href="#metodo" className="hover:text-brand-magenta transition-all hover:tracking-[0.3em]">O Método</a>
              <a href="#faq" className="hover:text-brand-magenta transition-all hover:tracking-[0.3em]">FAQ</a>
              <a href="#final-cta" className="hover:text-brand-magenta transition-all hover:tracking-[0.3em]">Transformação</a>
            </div>

            <div className="text-[#3A2A56]/60 text-[10px] font-bold uppercase tracking-[0.2em] space-y-3">
              <p>© 2026 • Constelação Sistêmica Espiritual</p>
              <p>Todos os direitos reservados</p>
            </div>
            
            <div className="flex justify-center gap-10 md:gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-[#3A2A56]/40">
              <a href="#" className="hover:text-brand-magenta transition-colors">Termos</a>
              <a href="#" className="hover:text-brand-magenta transition-colors">Privacidade</a>
              <a href="#" className="hover:text-brand-magenta transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
      
      <ExitIntentPopup 
        isOpen={showExitPopup} 
        onClose={() => setShowExitPopup(false)} 
        whatsappLink={whatsappLink} 
      />
    </div>
  );
}
