import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#050508]">
      <style>{`
        :root {
          --background: #050508;
          --foreground: #ffffff;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          background-color: #050508;
          color: #ffffff;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0a0a0f;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #22d3ee, #3b82f6);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #06b6d4, #2563eb);
        }
        
        ::selection {
          background: rgba(34, 211, 238, 0.3);
          color: #ffffff;
        }
      `}</style>
      {children}
    </div>
  );
}
