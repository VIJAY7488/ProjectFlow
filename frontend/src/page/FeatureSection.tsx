import { useEffect, useState } from 'react';
import { CheckCircle, FileText, MessageCircle, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const FeatureSection = ({featureRef} : { featureRef: React.RefObject<HTMLDivElement> }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (featureRef.current) {
        const element = featureRef.current;
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        // Calculate scroll progress percentage
        const progress = Math.max(0, Math.min(1, 
          (scrollY - elementTop + windowHeight) / (elementHeight)
        ));
        
        setScrollProgress(progress * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [featureRef]);

  return (
    <div ref={featureRef} className="relative bg-slate-900/50 backdrop-blur-sm py-20">
      {/* What You Can Do */}
      <section className="max-w-7xl mx-auto px-6 py-28 text-center">
        <div className="space-y-4 mb-32">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
            ✨ What You Can Do with ProjectFlow
          </h2>
          <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto">
            Whether you're a startup founder, a remote team, or an enterprise group — ProjectFlow transforms the way you work.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line with Gradient */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1">
            {/* Background line */}
            <div className="h-full w-full rounded-full bg-slate-800/50"></div>
            
            {/* Animated gradient line */}
            <div 
              className="absolute top-0 w-full rounded-full transition-all duration-500 ease-out"
              style={{
                height: `${scrollProgress}%`,
                background: 'linear-gradient(180deg, #38bdf8 0%, #818cf8 50%, #2563eb 100%)',
                boxShadow: '0 0 20px rgba(56, 189, 248, 0.5)'
              }}
            ></div>
          </div>

          <div className="relative space-y-24">
            {[
              {
                icon: <MessageCircle className="w-6 h-6 text-white" />,
                title: "Real-Time Team Chat",
                description: "Effortless private and group conversations that keep everyone connected.",
              },
              {
                icon: <CheckCircle className="w-6 h-6 text-white" />,
                title: "Task & Project Management",
                description: "Plan, assign, and track work with intuitive Kanban boards and timelines.",
              },
              {
                icon: <FileText className="w-6 h-6 text-white" />,
                title: "Live Collaborative Docs",
                description: "Real-time editing and writing with your team — on the same page, always.",
              },
              {
                icon: <Users className="w-6 h-6 text-white" />,
                title: "Custom Team Boards",
                description: "Organized, focused spaces for each team with roles and permissions.",
              },
              {
                icon: <CheckCircle className="w-6 h-6 text-white" />,
                title: "Smart Notifications",
                description: "Stay updated on what matters without getting overwhelmed.",
              },
              {
                icon: <FileText className="w-6 h-6 text-white" />,
                title: "Transparent Activity Feed",
                description: "Track every change and update. See your team’s heartbeat in one glance.",
              },
              {
                icon: <Users className="w-6 h-6 text-white" />,
                title: "Enterprise-Grade Security",
                description: "End-to-end encryption, granular access, and top-tier data protection.",
              },
              {
                icon: <CheckCircle className="w-6 h-6 text-white" />,
                title: "Built for Every Team",
                description: "From dev squads to creative agencies — CollabSphere adapts to your workflow.",
              },
            ].map((feature, idx) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.2,
                rootMargin: '-50px'
              });

              return (
                <div
                  ref={ref}
                  key={idx}
                  className={`flex items-center justify-between gap-8 ${
                    idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-slate-900 rounded-full border-2 border-sky-400 shadow-lg shadow-sky-400/50">
                    <div className="absolute inset-1 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 animate-pulse"></div>
                  </div>

                  {/* Content Box */}
                  <div
                    className={`w-[calc(50%-4rem)] bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-left transition-all duration-700 hover:shadow-2xl hover:shadow-sky-400/10 border border-slate-700/50 ${
                      inView
                        ? 'opacity-100 translate-y-0'
                        : `opacity-0 ${
                            idx % 2 === 0 ? '-translate-x-full' : 'translate-x-full'
                          }`
                    }`}
                  >
                    <div className="bg-gradient-to-r from-sky-500 to-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-sky-400/20">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Empty div for spacing on the other side */}
                  <div className="w-[calc(50%-4rem)]"></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-32 space-y-6">
          <p className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
            One workspace. Infinite possibilities.
          </p>
          <p className="text-xl text-gray-300">
            Experience better teamwork today.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
