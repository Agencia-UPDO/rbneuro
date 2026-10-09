import { cn } from '@/src/utils/cn';

type StairCardProps = {
  children: React.ReactNode;
  className?: string;
};

const StairCard = ({ children, className }: StairCardProps) => (
  <div data-stair-card className={cn(className)}>
    {children}
  </div>
);

export { StairCard };
