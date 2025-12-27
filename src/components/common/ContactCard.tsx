import { CONTACTS } from '@/constants';
import IconContainer from './IconContainer';

/**
 * Reusable Contact Card Component
 * 연락처 카드 중복 제거
 */
interface ContactCardProps {
  type: 'president' | 'promotion';
}

const ContactCard = ({ type }: ContactCardProps) => {
  const contact = CONTACTS[type];

  const icons = {
    president: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    promotion: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
      <IconContainer icon={icons[type]} className="mx-auto mb-4" />
      <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.name}</h3>
      <p className="text-gray-600 mb-4">{contact.contact}</p>
      <p className="text-sm text-gray-500">{contact.description}</p>
    </div>
  );
};

export default ContactCard;
