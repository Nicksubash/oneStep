import React from 'react';
import { useTranslation } from 'react-i18next';

export default function TeamMemberCard({ image, nameJp, nameEn, titleJp, aboutJp, index = 0 }) {
  const { t } = useTranslation();
  const isEven = index % 2 === 0;

  // Format the about text with proper highlighting for key points
  const formatAboutText = (text) => {
    if (index === 1) { // Sailendra's card - second member
      return (
        <div className="space-y-4">
          <p dangerouslySetInnerHTML={{ __html: t('teamMemberCard.member2.formattedText.part1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('teamMemberCard.member2.formattedText.part2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('teamMemberCard.member2.formattedText.part3') }} />
          <p className="pt-2 border-t border-gray-200" dangerouslySetInnerHTML={{ __html: t('teamMemberCard.member2.formattedText.part4') }} />
        </div>
      );
    } else {
      // For the first member (Rishi), apply similar formatting
      return (
        <div className="space-y-4">
          <p dangerouslySetInnerHTML={{ __html: t('teamMemberCard.member1.formattedText.part1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('teamMemberCard.member1.formattedText.part2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('teamMemberCard.member1.formattedText.part3') }} />
          <p className="pt-2 border-t border-gray-200" dangerouslySetInnerHTML={{ __html: t('teamMemberCard.member1.formattedText.part4') }} />
        </div>
      );
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div
        className={`flex flex-col md:flex-row ${
          isEven ? 'md:flex-row' : 'md:flex-row-reverse'
        } items-start md:gap-16 gap-8`}
      >
        {/* Profile Image */}
        <div className="w-full md:w-80 md:h-80 flex-shrink-0 mx-auto md:mx-0">
          <div className="w-full h-full overflow-hidden rounded-xl shadow-md">
            <img
              src={image}
              alt={nameJp}
              className="w-full h-full object-cover  hover:grayscale-0 hover:scale-110 transition-all duration-500"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Name */}
          <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-2 text-left">
            {nameJp}
          </h2>

          {/* English Name */}
          <p className="text-lg md:text-xl text-brand-navyBright mb-4 font-light text-left">
            {nameEn}
          </p>

          {/* Title */}
          <h3 className="text-base md:text-lg text-brand-navy mb-8 font-medium text-left">
            {titleJp}
          </h3>

          {/* Profile Section */}
          <div className="text-left">
            <div className="text-gray-800 leading-relaxed text-base md:text-lg max-w-3xl">
              {formatAboutText(aboutJp)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}