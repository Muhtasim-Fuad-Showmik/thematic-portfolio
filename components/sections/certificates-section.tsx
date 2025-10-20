import { certificates } from "@/constants/certificates";
import { cn } from "@/lib/utils";
import { Award } from "lucide-react";
import { SectionDivider } from "../section-divider";

const CertificatesSection = () => {
  return (
    <section
      id="certificates"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionDivider
          title="Certifications"
          subtitle="Continuous learning and professional development"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={cn(
                {
                  "transform hover:-translate-y-1 hover:shadow-xl hover:cursor-pointer dark:hover:shadow-green-900/20":
                    cert.url && cert.url !== "#",
                },
                "rounded-lg p-6 shadow-lg transition-all bg-white border border-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700"
              )}
            >
              {cert.url && cert.url !== "#" ? (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30">
                      <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {cert.organization}
                      </p>
                      <p className="text-green-500 font-semibold">
                        {cert.date}
                      </p>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30">
                    <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {cert.organization}
                    </p>
                    <p className="text-green-500 font-semibold">{cert.date}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
