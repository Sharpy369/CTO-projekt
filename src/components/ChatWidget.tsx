'use client';
import { useEffect } from 'react';

export default function ChatWidget({ projectID }: { projectID: string }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
    script.onload = () => {
      (window as any).voiceflow.chat.load({
        verify: { projectID },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    };
    document.body.appendChild(script);
  }, [projectID]);

  return null;
}
