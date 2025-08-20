import { Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex items-center justify-between h-14 px-4 sm:px-6">
        <div className="text-sm text-muted-foreground">
          {new Date().getFullYear()} Digital Reasoning Thread
        </div>
        <a 
          href="https://github.com/vladislav-larichev/digital-reasoning-thread" 
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
