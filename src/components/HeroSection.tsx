export function HeroSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center" />

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-50 dark:to-slate-900" />

      <div className="absolute inset-0 backdrop-blur-[2px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl mb-6">
            Monitor Snow Cover Across the
            <span className="block mt-3 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Himalayan Regions
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-100 drop-shadow-lg mb-8">
            Access high-resolution satellite imagery to track and analyze snow coverage patterns
            across the world's highest mountain ranges. Select your parameters below to begin.
          </p>
        </div>
      </div>
    </section>
  );
}
