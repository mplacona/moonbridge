const features = [
  {
    title: "More Affordable, More Features",
    text: "Get enterprise-grade functionality without breaking the bank.",
  },
  {
    title: "Fully Personalized Feeds",
    text: "Tailor job feeds and UI elements to match the preferences of your audience.",
  },
  {
    title: "Dynamic Filtering & Advanced Search",
    text: "Find the right opportunities faster with more refined search options.",
  },
  {
    title: "Seamless Integration with Any Website",
    text: "Embed effortlessly into your existing site without disrupting branding.",
  },
  {
    title: "Automatic Updates",
    text: "Jobs stay current, so your team doesn’t have to manually update anything.",
  },
  {
    title: "Smart Warm Intros",
    text: "Boost hiring outcomes and accelerate sales leads through personal, curated connections.",
  },
];

const Mission = () => {
  return (
    <section className="text-white bg-[#013533]">
      <div className="max-w-7xl mx-auto p-8 md:py-16 text-center">
        <h2 className="max-w-3xl mx-auto font-extrabold text-4xl md:text-5xl tracking-tight mb-6 md:mb-8">
          What Makes WorkPadHQ Stand Out?
        </h2>
        <div className="grid md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center gap-4 md:gap-8 mb-8 md:mb-12">
              <div className="w-full md:w-[98%] flex flex-col gap-2 items-center">
                <span className="text-3xl">{index + 1}.</span>
                <h3 className="font-bold text-xl">{feature.title}</h3>
                <p className="max-w-[15rem] text-sm opacity-90 leading-relaxed">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Mission;
