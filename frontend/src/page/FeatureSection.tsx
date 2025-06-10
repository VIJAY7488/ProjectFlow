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
    <div ref={featureRef}>
      {/* What You Can Do */}
      <section className="max-w-6xl mx-auto px-6 py-28 text-center">
        <h2 className="text-5xl font-extrabold mb-10 text-sky-700">✨ What You Can Do with CollabSphere</h2>
        <p className="text-gray-700 text-2xl mb-20 max-w-4xl mx-auto">
          Whether you're a startup founder, a remote team, or an enterprise group — CollabSphere transforms the way you work.
        </p>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line with Gradient */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1">
            {/* Background line */}
            <div className="h-full w-full rounded-full bg-gray-200"></div>
            
            {/* Animated gradient line */}
            <div 
              className="absolute top-0 w-full rounded-full transition-all duration-300 ease-out"
              style={{
                height: `${scrollProgress}%`,
                background: 'linear-gradient(180deg, #0ea5e9 0%, #7c3aed 50%, #2563eb 100%)',
                boxShadow: '0 0 8px rgba(14, 165, 233, 0.3)'
              }}
            ></div>
          </div>

          <div className="relative space-y-8">
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
                threshold: 0.1,
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
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white rounded-full border-2 border-sky-600 shadow-lg">
                    <div className="absolute inset-1 rounded-full bg-gradient-to-r from-sky-500 to-purple-500"></div>
                  </div>

                  {/* Content Box */}
                  <div
                    className={`w-[calc(50%-2rem)] bg-white rounded-2xl shadow-md p-6 text-left transition-all duration-700 ${
                      inView
                        ? 'opacity-100 translate-y-0'
                        : `opacity-0 ${
                            idx % 2 === 0 ? '-translate-x-full' : 'translate-x-full'
                          }`
                    }`}
                  >
                    <div className="bg-sky-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Empty div for spacing on the other side */}
                  <div className="w-[calc(50%-2rem)]"></div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="mt-24 text-3xl font-semibold text-sky-600">
          One workspace. Infinite possibilities. Experience better teamwork today.
        </p>
      </section>
    </div>
  );
};

export default FeatureSection;
