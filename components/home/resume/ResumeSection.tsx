import EducationSection from "./EducationSection";
import WorkExperienceSection from "./WorkExperienceSection";
import SkillsSection from "./SkillsSection";
import ClientProjectsSection from "./ClientProjectsSection";

export default function ResumeSection() {
    return (
        <section className="w-full px-4">
            <div className="max-w-6xl mx-auto flex flex-col gap-8">
                {/* Responsive two-to-one column layout */}
                <div className="flex flex-col sm:flex-row lg:flex-col gap-8">
                    <div className="w-full sm:w-1/2 lg:w-full">
                        <EducationSection />
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-full">
                        <WorkExperienceSection />
                    </div>
                </div>

                <SkillsSection />
                <ClientProjectsSection />
            </div>
        </section>
    );
}
