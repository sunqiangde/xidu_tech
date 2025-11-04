import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface ContactDialogProps {
  trigger?: React.ReactNode;
  buttonText?: string;
}

export function ContactDialog({ trigger, buttonText = "联系我们" }: ContactDialogProps) {
  return (
    <div>
      {trigger || (
        <Button
          size="lg"
          className="group relative overflow-hidden bg-gradient-to-r from-[#0F62FE] to-[#00BFA6] hover:shadow-[0_0_40px_rgba(15,98,254,0.5)] transition-all duration-300"
          style={{ fontSize: '1.125rem', padding: '1.5rem 3rem' }}
        >
          <span className="relative z-10 flex items-center gap-2">
            {buttonText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </Button>
      )}
    </div>
  );
}