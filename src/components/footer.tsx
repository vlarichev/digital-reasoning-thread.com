import { Github, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col sm:flex-row items-center justify-between py-4 px-4 sm:px-6 gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <div className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Digital Reasoning Thread 
          </div>
          <div className="text-sm flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <a 
              href="https://www.linkedin.com/in/vladlarichev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              <Linkedin className="h-4 w-4" />
              Vlad Larichev
            </a>
            <span className="text-muted-foreground">&</span>
            <a 
              href="https://www.linkedin.com/in/dirk-molitor/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              <Linkedin className="h-4 w-4" />
              Dr. Dirk Molitor
            </a>
          </div>
        </div>
        <a 
          href="https://github.com/vlarichev/digital-reasoning-thread" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="h-5 w-5" />
        </a>
      </div>
    </footer>
  )
}
