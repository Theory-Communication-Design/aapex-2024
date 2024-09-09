import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('section1');

  const showSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Interactive Page with Next.js</h1>
      <p>Click the buttons below to show different content or videos:</p>

      <button onClick={() => showSection('section1')}>Show Section 1 (Text)</button>
      <button onClick={() => showSection('section2')}>Show Section 2 (Video 1)</button>

      {activeSection === 'section1' && (
        <div>
          <h2>Section 1: Some Text Content</h2>
          <p>This is some sample text content. You can change what’s displayed by clicking the buttons above.</p>
        </div>
      )}

      {activeSection === 'section2' && (
        <div>
          <h2>Section 2: Video Player 1</h2>
          <video controls width="600">
            <source src="/videos/example.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}
