import { useEffect, useState } from 'react';

interface CodeBlock {
  id: number;
  code: string;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

export default function FloatingCode() {
  const [codeBlocks] = useState<CodeBlock[]>(() => {
    const snippets = [
      'const func = () => {}',
      'import React from "react"',
      'async/await',
      'interface Props {}',
      'return <div />',
      'useState()',
      'useEffect(() => {})',
      'fetch("/api")',
      'map(item => {})',
      'Promise.all([])',
      'try { } catch { }',
      'console.log()',
      'export default',
      'let x = 0',
      'if (true) { }',
    ];

    return snippets.map((code, index) => ({
      id: index,
      code,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 5,
    }));
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeBlocks.map((block) => (
        <div
          key={block.id}
          className="absolute text-xs font-mono text-blue-400/20 whitespace-nowrap animate-float"
          style={{
            left: `${block.x}%`,
            top: `${block.y}%`,
            animation: `float ${block.duration}s ease-in-out infinite`,
            animationDelay: `${block.delay}s`,
          }}
        >
          {block.code}
        </div>
      ))}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10%, 90% {
            opacity: 1;
          }
          50% {
            transform: translateY(-30px) translateX(20px);
          }
        }
      `}</style>
    </div>
  );
}
