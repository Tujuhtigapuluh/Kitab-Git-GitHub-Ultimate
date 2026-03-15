import { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  title?: string;
  language?: string;
}

export function CodeBlock({ code, title, language = 'bash' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-4 rounded-xl overflow-hidden border border-gray-700/50 bg-[#0d1117] shadow-lg">
      {title && (
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#161b22] border-b border-gray-700/50">
          <Terminal size={14} className="text-green-400" />
          <span className="text-xs font-medium text-gray-400">{title}</span>
          <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-gray-700/50 text-gray-500 font-mono">{language}</span>
        </div>
      )}
      <div className="relative group">
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/70 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
          title="Copy to clipboard"
        >
          {copied ? (
            <Check size={14} className="text-green-400" />
          ) : (
            <Copy size={14} className="text-gray-400" />
          )}
        </button>
        <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
          <code className="text-gray-200 font-mono">{code}</code>
        </pre>
      </div>
    </div>
  );
}
