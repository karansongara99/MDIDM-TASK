import React, { useEffect, useRef } from 'react';

const TypewriterText = ({ html, speed = 100 }) => {
  const targetRef = useRef();

  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    let i = 0;
    element.innerHTML = '';

    const type = () => {
      if (i < html.length) {
        if (html[i] === '<') {
          const tagEnd = html.indexOf('>', i);
          if (tagEnd !== -1) {
            const tagContent = html.substring(i, tagEnd + 1);
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = tagContent;
            element.appendChild(tempDiv.firstChild);
            i = tagEnd + 1;
          }
        } else {
          const span = document.createElement('span');
          span.className = 'animated-character';
          span.textContent = html[i];
          span.style.transform = `translateY(${(Math.random() * 6 - 3)}px)`;

          setTimeout(() => {
            span.style.transform = 'translateY(0)';
          }, 100);

          element.appendChild(span);
          i++;
        }
        setTimeout(type, speed);
      }
    };

    type();
  }, [html, speed]);

  return <div className="animated-text" ref={targetRef}></div>;
};

export default TypewriterText;
