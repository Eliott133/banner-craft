import { FaRegLightbulb, FaPalette, FaCode } from "react-icons/fa6";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaRegLightbulb />,
      title: "Choose your template",
      description: "Browse through our collection of professionally designed banner templates tailored for e-commerce success.",
      color: "bg-blue-500"
    },
    {
      icon: <FaPalette />,
      title: "Customize your design",
      description: "Use our intuitive editor to modify colors, text, and images. See changes in real-time with instant preview.",
      color: "bg-purple-500"
    },
    {
      icon: <FaCode />,
      title: "Generate & integrate",
      description: "Get your banner's code with one click and easily integrate it into your e-commerce platform.",
      color: "bg-green-500"
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create your perfect banner in three simple steps
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />

            {steps.map((step, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-full ${step.color} text-white flex items-center justify-center shadow-lg z-10`}>
                      <span className="text-2xl">
                        {step.icon}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors">
            Start Creating Your Banner
          </button>
        </div>
      </div>
    </section>
  );
}