import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';
import { ExperienceItem } from '../types';
import SectionTitle from './SectionTitle';
import { FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { useI18n } from '../contexts/I18nContext';

interface ExperienceCardProps {
  item: ExperienceItem;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ item, isOpen, onToggle, id }) => {
  const { t } = useI18n();
  return (
    <div className="bg-[#1A2332] rounded-xl overflow-hidden mb-4 shadow-sm transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-6 text-left"
        aria-expanded={isOpen}
        aria-controls={id}
      >
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white">{`${t(item.roleKey)} - ${item.company}`}</h3>
        </div>
        <div className="text-gray-400 font-fira-code mr-4 hidden sm:block">{item.period}</div>
        <div className={`text-slate-200 text-2xl font-light transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          +
        </div>
      </button>

      <div
        id={id}
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-0">
            <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row gap-6">
              <div className="flex-grow">
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
                  <div className="flex items-center text-gray-400">
                    <FaMapMarkerAlt className="h-4 w-4 mr-2" />
                    <span>{item.location}</span>
                  </div>
                  <a
                    href={item.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt className="h-4 w-4 mr-2" />
                    <span>{item.companyUrl.replace('https://www.', '')}</span>
                  </a>
                </div>
                <p className="text-gray-300 leading-relaxed">{t(item.descriptionKey)}</p>
              </div>
              <div className="flex-shrink-0 w-full md:w-48 flex items-center justify-center p-4 bg-white/5 rounded-lg">
                <img src={item.companyLogoUrl} alt={`${item.company} logo`} className="max-h-12 w-auto" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const Experience = (): React.ReactNode => {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="text-center">
        <SectionTitle>{t('experience.title')}</SectionTitle>
      </div>
      <div>
        {EXPERIENCES.map((exp, index) => (
          <ExperienceCard
            key={index}
            id={`experience-panel-${index}`}
            item={exp}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;