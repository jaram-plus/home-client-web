import { IconContainerProps } from '@/types';

/**
 * Reusable Icon Container
 * 원형 아이콘 컨테이너 중복 제거
 */
const IconContainer = ({
  icon,
  size = 'md',
  className = '',
}: IconContainerProps) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
  };

  const iconSizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  return (
    <div
      className={`${sizeClasses[size]} ${className} rounded-full flex items-center justify-center bg-jaram-400`}
    >
      <div className={`${iconSizeClasses[size]} text-white flex items-center justify-center`}>
        {icon}
      </div>
    </div>
  );
};

export default IconContainer;
