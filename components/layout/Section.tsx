import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
  background?: 'white' | 'gray' | 'soft-green' | 'soft-blue' | 'brand' | 'transparent';
}

export function Section({
  children,
  className,
  containerSize = 'lg',
  id,
  background = 'white',
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-soft-green', // Legacy: map gray to soft-green
    'soft-green': 'bg-soft-green',
    'soft-blue': 'bg-soft-blue',
    brand: 'bg-brand text-white',
    transparent: '',
  };

  return (
    <section
      id={id}
      className={cn('py-16 md:py-24', backgrounds[background], className)}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
