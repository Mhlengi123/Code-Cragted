import { Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-slate-200 py-4 px-8 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex gap-6">
          <a href="mailto:mathonsimhlengi8@gmail.com" className="hover:text-accent transition-colors font-medium">mathonsimhlengi8@gmail.com</a>
          <a href="tel:0662527664" className="hover:text-accent transition-colors font-medium">066 252 7664</a>
        </div>
        <p>© {currentYear} Mhlengi Mathonsi. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://github.com/Mhlengi123" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
            <Twitter size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
