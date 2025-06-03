export default function AboutSection() {
    return (
        <section className="px-6 sm:px-20 py-24 text-center sm:text-left">
            <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-2xl sm:text-4xl font-bold text-white">About Me</h2>
                <p className="text-gray-400 text-base sm:text-lg">
                    Hi! I'm a software engineer with over 6 years of experience building web apps, mobile platforms, and automation tools. I started coding in high school and quickly fell in love with using code to bring ideas to life.
                </p>
                <p className="text-gray-400 text-base sm:text-lg">
                    I specialize in taking early-stage product ideas and turning them into real, usable applications. I love working with people from all backgrounds — whether you're technical or not, I can help break down complex problems into understandable, visual, and interactive solutions.
                </p>
                <p className="text-gray-400 text-base sm:text-lg">
                    I'm fluent in modern frontend and backend technologies, and I often blend my technical background with business strategy and design thinking.
                </p>
                <div className="mt-10 text-blue-400 text-base font-medium animate-pulse">
                    ↓ Scroll down to explore my resume
                </div>
            </div>
        </section>
    );
}