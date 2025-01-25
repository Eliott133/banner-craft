import { FaPalette, FaCode, FaChartLine, FaBolt } from "react-icons/fa6";

export default function Features() {
  const features = [
    {
      icon: <FaPalette />,
      title: "Smart Design Templates",
      description: "Choose from dozens of pre-designed, conversion-optimized banner templates that match your brand"
    },
    {
      icon: <FaBolt />,
      title: "Real-time Editor",
      description: "Edit text, colors, and images with instant preview. No design skills required"
    },
    {
      icon: <FaCode />,
      title: "One-Click Integration",
      description: "Generate clean code and integrate your banner into any e-commerce platform effortlessly"
    },
    {
      icon: <FaChartLine />,
      title: "Performance Analytics",
      description: "Track your banner's performance with detailed conversion and engagement metrics"
    }
  ];

  return (
    <section className="py-24 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Create Converting Banners
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features that make banner creation simple, fast, and effective
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-primary-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <span className="text-2xl">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}