import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
const defaultMarkdown = `## markdown preview
> Here is a quote by someone famouse
##### Hello world
I'm baby hella tattooed **disrupt** 90's vaporware activated charcoal *listicle* celiac next level biodiesel XOXO blog franzen 8-bit.

- first 
- second
- third

1. first
2. second
3. third

\`\`\`
alert()
\`\`\`

[google](https://www.google.com)
![image](https://images.pexels.com/photos/10406844/pexels-photo-10406844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)
`;
function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  return (
    <main>
      <section className='markdown'>
        <textarea
          className='input'
          onChange={(e) => setMarkdown(e.target.value)}
          value={markdown}
        ></textarea>
        <article className='result'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
