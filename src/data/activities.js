import stakeholder from '../assets/portfolio/stakeholder.jpg';
import training from '../assets/portfolio/training.jpg';
import workshop from '../assets/portfolio/workshop.jpg';
import service from '../assets/portfolio/service.jpg';
import governance from '../assets/portfolio/governance.jpg';
import advocacy from '../assets/portfolio/advocacy.jpg';
import peerEducation from '../assets/portfolio/peer_education.jpg';

export const activities = [
  { 
    id: 'stakeholder-engagement',
    title: 'Networking Stakeholder Engagement', 
    image: stakeholder, 
    category: 'Networking',
    description: 'Strengthening relationships with key community leaders and organizations to drive sustainable growth.',
    fullDescription: 'Our networking stakeholder engagement programs are designed to bridge the gap between youth organizations and community leaders. We believe that sustainable development is only possible through collaboration. This initiative focuses on building long-term partnerships with local government agencies, international NGOs, and private sector leaders to create a supportive ecosystem for Somali youth.',
    impact: 'Established over 50 key partnerships across Mogadishu and surrounding regions.',
    gallery: [stakeholder, training, workshop]
  },
  { 
    id: 'gbv-response',
    title: 'Awareness Raising on Youth-led GBV Response', 
    image: training, 
    category: 'SYGO Activities',
    description: 'Awareness Raising on Youth-led GBV response and social norms change to empower young people to challenge harmful practices.',
    fullDescription: 'Gender-Based Violence (GBV) remains a critical challenge. SYGO leads youth-driven awareness campaigns that target deep-rooted social norms. By empowering young people to become advocates for change, we are challenging harmful practices and promoting a culture of respect, equality, and protection for all.',
    impact: 'Reached over 10,000 youth through community dialogues and radio broadcasts.',
    gallery: [training, advocacy, peerEducation]
  },
  { 
    id: 'gender-equality',
    title: 'Staff Training: Gender Equality & Youth Engagement', 
    image: workshop, 
    category: 'Advocacy',
    description: 'Comprehensive training for staff to promote gender equity and active youth participation in decision-making.',
    fullDescription: 'Internal capacity building is at the heart of our mission. We provide intensive training for our staff and volunteers on gender equality frameworks and youth engagement strategies. This ensures that every SYGO program is implemented with a gender-sensitive lens and promotes meaningful youth participation at all levels.',
    impact: 'Trained 100+ staff members and volunteers in Mogadishu.',
    gallery: [workshop, service, governance]
  },
  { 
    id: 'inclusive-services',
    title: 'Survivor-Centered Support & Inclusive Services', 
    image: service, 
    category: 'Service Provision',
    description: 'Providing compassionate, inclusive support services for survivors, focusing on holistic recovery and empowerment.',
    fullDescription: 'Our survivor-centered support services provide a safe haven for those affected by violence. We offer holistic care, including psychosocial support, legal aid referrals, and economic empowerment opportunities. Our goal is to ensure that every survivor feels heard, supported, and empowered to rebuild their life.',
    impact: 'Provided direct support services to over 500 survivors.',
    gallery: [service, training, peerEducation]
  },
  { 
    id: 'org-governance',
    title: 'Training: Organizational Governance & Operations', 
    image: governance, 
    category: 'Governance',
    description: 'Equipping youth leaders with the skills to manage organizations effectively and transparently.',
    fullDescription: 'Transparency and accountability are the foundations of strong organizations. SYGO provides governance training to emerging youth-led groups in Somalia. We cover financial management, project planning, and ethical leadership to ensure these groups can manage their operations effectively and attract sustainable funding.',
    impact: 'Mentored 20+ youth-led NGOs on organizational standards.',
    gallery: [governance, stakeholder, workshop]
  },
  { 
    id: 'media-advocacy',
    title: 'Youth Advocacy: Radio Discourse & SBCC', 
    image: advocacy, 
    category: 'Media',
    description: 'Using radio and social behavior change communication to amplify youth voices and drive social change.',
    fullDescription: 'Media is a powerful tool for social behavior change. Our radio discourse programs provide a platform for young people to discuss critical issues such as education, peacebuilding, and human rights. Through these broadcasts, we reach millions of listeners across Somalia, promoting positive social transformation.',
    impact: 'Produced 50+ radio episodes with a reach of 2 million listeners.',
    gallery: [advocacy, training, peerEducation]
  },
  { 
    id: 'peer-education',
    title: 'Youth Peer-to-Peer Education', 
    image: peerEducation, 
    category: 'Education',
    description: 'Empowering young people to educate their peers on critical health and social issues.',
    fullDescription: 'Peer-to-peer education is one of our most effective strategies. We train young "Change Agents" who then educate their peers within their own communities. This approach builds trust and ensures that information is communicated in a way that is relevant and culturally sensitive.',
    impact: 'Trained 200 peer educators reaching 5,000 students.',
    gallery: [peerEducation, advocacy, training]
  },
];
