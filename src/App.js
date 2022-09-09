import './App.css';
import TextareaAutosize from 'react-textarea-autosize';
import { useState } from "react";
import { calculate } from 'specificity';

function App() {

   const [textArea, setTextArea] = useState('');
   const resultData = calculate(textArea);
   const resultConverted = resultData.map(item => ({
      body: item.specificityArray.slice(1).join(''),
      id: Math.floor(Math.random() * 1000),
   }));

   return (
      <div className="container">
         <h3 className='text-center my-3'>Specificity Calculator</h3>
         <h5 className='text-center font-italic'>Visualisation of
            <a href="https://www.w3.org/TR/selectors-3/#specificity" target="_blank" rel="noreferrer"> w3.org CSS specificity</a>.
            Calculate selectors weight below:
         </h5>
         <div className='row mb-3'>
            <div className='col selector-wrapper' >
               <TextareaAutosize
                  type="text"
                  className='selector-input'
                  cacheMeasurements
                  value={textArea}
                  onChange={e => setTextArea(e.target.value)}
               />
               <div className='d-flex my-3 justify-content-between'>
                  <span className='font-weight-light'>Selectors weight:</span>
                  <div className='specification-wrapper'>
                     <div className='description-wrapper'>
                        <span>#1-IDs</span><span className='mx-2'>|</span>
                        <span>#2-Class, attr, pseudo-class</span><span className='mx-2'>|</span>
                        <span>#3-Element, pseudo-element</span>
                     </div>
                     <ol>
                        {resultConverted.map(item => {
                           return (
                              <li className='ny-1' key={item.id}>: {item.body}</li>
                           )
                        })}
                     </ol>
                  </div>
               </div>
            </div>
         </div>
         <div className='footer'>
            <p>Specificity Calculator is built for
               <a href="https://www.w3.org/TR/selectors-3/" target="_blank" rel="noreferrer"> CSS Selectors Level 3</a>.
            </p>
            <p>
               The <a href="https://github.com/keeganstreet/specificity" target="_blank" rel="noreferrer">specificity calculator JavaScript module </a>
               is available on GitHub or via <code>npm install specificity</code>.
            </p>
            <p>
               Specificity Calculator isn`t a CSS validator. If you enter invalid selectors it will return incorrect results.
               For example, the <a href="https://www.w3.org/TR/selectors-3/#negation" target="_blank" rel="noreferrer">negation pseudo-class</a> may only take a simple selector as an argument.
               Using a pseudo-element or combinator as an argument for <code>:not()</code> is invalid CSS3 so Specificity Calculator will return incorrect results.
            </p>
            <p>
               Specificity Calculator doesn`t support
               <a href="https://mathiasbynens.be/notes/css-escapes" target="_blank" rel="noreferrer"> CSS character escape sequences</a>.
            </p>
            <p>
               Care has been taken to ensure results are accurate.
               If you find a defect, please <a href="#" target="_blank" rel="noreferrer">report it</a>.
            </p>
         </div>
      </div >
   );
}

export default App;
