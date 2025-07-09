import React from 'react';
import SectionTitle from './SectionTitle';
import { CONTACT_INFO, SOCIAL_MEDIA } from '../constants';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { useI18n } from '../contexts/I18nContext';

const Contact = (): React.ReactNode => {
  const { t } = useI18n();
  return (
    <section className="py-16">
      <div className="text-center">
        <SectionTitle>{t('contact.title')}</SectionTitle>
      </div>
      <div className="bg-[#1A2332] border border-gray-700/50 p-8 md:p-12 rounded-2xl flex flex-col md:flex-row justify-between gap-12 shadow-sm">
        
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-6">{t('contact.info')}</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-400 mb-1">{t('contact.email')}:</h4>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center text-slate-200 hover:text-cyan-400 transition-colors">
                <FaEnvelope className="h-5 w-5 mr-3" />
                <span>{CONTACT_INFO.email}</span>
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-gray-400 mb-1">{t('contact.phone')}:</h4>
              <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`} className="flex items-center text-slate-200 hover:text-cyan-400 transition-colors">
                <FaPhone className="h-5 w-5 mr-3" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-l border-gray-700/50 hidden md:block"></div>

        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-6">{t('contact.social')}</h3>
          <div className="space-y-4">
            {SOCIAL_MEDIA.map(social => {
              const Icon = social.icon;
              return (
                <div key={social.name}>
                  <h4 className="font-semibold text-gray-400 mb-1">{social.name}:</h4>
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-200 hover:text-cyan-400 transition-colors">
                    <Icon className="h-5 w-5 mr-3" />
                    <span>{social.username}</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;