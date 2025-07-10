import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/shared/Footer';
import InfoTitle from '../components/shared/InfoTitle';
import TeamGrid from '../components/TeamMembers/TeamGrid';
import Member1 from '../image/ceoTeams.png';
import Member2 from '../image/sailendra.png';

const Teams = () => {
  const { t } = useTranslation();
  
  const teamMembers = t('teams.members', { returnObjects: true }).map((member, index) => ({
    id: index + 1,
    image: index === 0 ? Member1 : Member2,
    nameJp: member.nameJp,
    nameEn: member.nameEn,
    titleJp: member.titleJp,
    aboutJp: member.aboutJp
  }));

  return (
    <>
      <Navbar />

      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=1600&h=600&fit=crop&crop=center"
        title={t('teams.infoTitle.title')}
        description={t('teams.infoTitle.description')}
        highlightText={t('teams.infoTitle.highlightText')}
        highlightAlign='left'
      />
      

      <div className="bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <TeamGrid members={teamMembers} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Teams;