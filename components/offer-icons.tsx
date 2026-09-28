// Icônes simples, dessinées à la main, pour illustrer les 3 offres
// sans dépendre d'une librairie d'icônes externe.

export function StrategyIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="17" stroke="currentColor" strokeWidth="1.6" />
      <path d="M26 14l-8.5 3.5L14 26l8.5-3.5L26 14z" fill="currentColor" />
      <circle cx="20" cy="20" r="1.8" fill="currentColor" />
    </svg>
  );
}

export function ContentIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M9 30V12a2 2 0 012-2h14l6 6v14a2 2 0 01-2 2H11a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M25 10v5a1 1 0 001 1h5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M14 20h9M14 24h9M14 16h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function WebIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="9" width="28" height="22" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 15h28" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="10.5" cy="12" r="0.9" fill="currentColor" />
      <circle cx="13.5" cy="12" r="0.9" fill="currentColor" />
      <path d="M12 21l4 4-4 4M20 29l6-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HarmonyIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="20" r="9" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="25" cy="20" r="9" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
