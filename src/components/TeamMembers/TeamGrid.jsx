import React, { useEffect, useRef, useState } from 'react';
import TeamMemberCard from './TeamMemberCard';

export default function TeamGrid({ members }) {
  const [visibleCards, setVisibleCards] = useState(new Set([0])); 
  const cardRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -100px 0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const cardIndex = parseInt(entry.target.dataset.index);
        
        if (entry.isIntersecting) {
          setVisibleCards(prev => new Set([...prev, cardIndex]));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all cards except the first one (which is visible by default)
    cardRefs.current.slice(1).forEach((ref, index) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="space-y-32">
      {members.map((member, index) => (
        <div
          key={member.id}
          ref={el => cardRefs.current[index] = el}
          data-index={index}
          className={`transform transition-all duration-1000 ease-out ${
            visibleCards.has(index)
              ? 'translate-x-0 opacity-100'
              : index % 2 === 0
                ? 'translate-x-20 opacity-0'
                : '-translate-x-20 opacity-0'
          }`}
        >
          <TeamMemberCard
            image={member.image}
            nameJp={member.nameJp}
            nameEn={member.nameEn}
            titleJp={member.titleJp}
            aboutJp={member.aboutJp}
            index={index}
          />
        </div>
      ))}
    </div>
  );
}