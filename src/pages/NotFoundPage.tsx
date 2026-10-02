import React, { useState } from 'react';
import { Home, RefreshCw } from 'lucide-react';

interface NotFoundPageProps {
  onBackToHome: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onBackToHome }) => {
  const [reconnected, setReconnected] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-notebook-grid text-navy font-mono text-xs">
      <div className="max-w-md w-full border-2 border-navy bg-white p-8 shadow-sm">
        <div className="flex items-center justify-between pb-3 border-b border-navy/15 text-[11px] text-navy/70">
          <span>HTTP_STATUS // 404</span>
          <span className="text-navy font-bold bg-yellow/30 px-2 py-0.5 border border-navy/20">[NOT_FOUND]</span>
        </div>

        <h1 className="font-display text-5xl font-bold text-navy mt-6">
          404.
        </h1>

        <h2 className="text-sm font-bold text-navy mt-1">
          RECORD NOT LOCATED IN INDEX
        </h2>

        <p className="mt-3 text-xs text-navy/80 font-sans leading-relaxed">
          The requested path does not map to any active table or record in this portfolio ledger.
        </p>

        {/* Reconnect Diagnostic */}
        <div className="my-6 p-4 border border-navy/15 bg-[#FAF9F6]">
          <div className="flex justify-between items-center text-[10px] text-navy/60 mb-2">
            <span>DIAGNOSTIC_QUERY</span>
            <span className={reconnected ? 'text-navy font-bold' : 'text-navy/50'}>
              {reconnected ? 'TABLE RE-INDEXED' : 'NULL_POINTER'}
            </span>
          </div>
          <p className="text-[11px] font-bold text-navy">
            SELECT * FROM index WHERE path = window.location.pathname;
          </p>
          <p className="text-[10px] text-navy/60 mt-1">
            Result: 0 rows returned (Execution time: 0.04ms)
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-navy text-white hover:bg-navy-dark transition-colors font-mono text-xs font-bold uppercase tracking-wider"
          >
            <Home className="w-3.5 h-3.5" />
            <span>RETURN HOME</span>
          </button>

          <button
            onClick={() => setReconnected(!reconnected)}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border-2 border-navy text-navy hover:bg-navy hover:text-white transition-colors font-mono text-xs font-bold uppercase tracking-wider"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>RETRY QUERY</span>
          </button>
        </div>
      </div>
    </div>
  );
};
