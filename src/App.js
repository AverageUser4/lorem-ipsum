import React from 'react';

import paragraphsData from './resources/paragraphs.js';

export default function App() {
  const [paragraphsInfo, setParagraphsInfo] = React.useState({
    shown: 1,
    toBeShown: 1
  });

  const paragraphElements = paragraphsData.filter(
    (_, index) => index < paragraphsInfo.shown)
      .map((text, index) =>
      <p 
        key={index}
        className="paragraph"
      >
        {text}
      </p>
    );

  function handleChange(event) {
    setParagraphsInfo(prev => ({
      ...prev,
      toBeShown: event.target.value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setParagraphsInfo(prev => ({
      ...prev,
      shown: prev.toBeShown
    }));
  }

  return (
    <div className="website">

      <h1 className="heading">Tired of boring Lorem Ipsum?</h1>

      <main className="main">

        <form 
          className="inputs"
          onSubmit={handleSubmit}  
        >

          <label className="label">

            <span>Paragraphs:</span>

            <input
              className="clean-input"
              type="number"
              value={paragraphsInfo.toBeShown}
              onChange={handleChange}
              min={1}
              max={paragraphsData.length}
            />

          </label>

          <input 
            className="button"
            type="submit"
            value="Generate"
          />

        </form>

        <section className="paragraphs">

          {paragraphElements}

        </section>

      </main>

    </div>
  );
}