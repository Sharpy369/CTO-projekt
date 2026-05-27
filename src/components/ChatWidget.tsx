'use client';
import { useEffect } from 'react';

declare global {
  interface Window {
    voiceflow?: {
      chat: {
        load: (config: unknown) => void;
      };
    };
  }
}

export default function ChatWidget({ projectID }: { projectID: string }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
    script.onload = () => {
      if (window.voiceflow && window.voiceflow.chat) {
        window.voiceflow.chat.load({
          verify: { projectID },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production'
        });
      }
    };
    document.body.appendChild(script);
  }, [projectID]);

  return null;
}
