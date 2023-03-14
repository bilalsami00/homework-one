
import logo from './logo.svg';
import {useState} from 'react'
import './App.css';

function App() {

      // homework...
      const name = "Hello World"
      const obj = { message: "Welcome to expertizo" }
      const data = ['We', 'are', 'United'] //Show these in separate tags
      const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}] //Render this using the map function
      const complex = [{company: 'XYZ', jobs: ['JavaScript,', 'React']}, {company: 'ABC', jobs: ['Angular', 'Ionic']}] //Show these in a Table
    
      const tableRows=complex.map(
        (element)=>{
            return( 
              <tr>
                <td>{element.company}</td>
                <td>{element.jobs.map((value,index)=>{
                  return <>{index} {value}</>
                  // this is done cuz Return only returns only one thing--- hence we wrap using fragments
                })}</td>
              </tr>
                
            )
        }
    )

  return (
    <div className="App">
      <header className="App-header">
        
        {/* homework... */}
        <h3>task 1:</h3>
        <h1>{name}</h1>
        
        <h3>task 2:</h3>
         <h4>{obj.message}</h4>

         <h3>task 3:</h3>
         <p>{data[0]}</p>
         <p>{data[1]}</p>
         <p>{data[2]}</p>
        
         <h3>task 4:</h3>
         {list.map((item, index)=>{
            return index + item.name
          }
         )}

         <h3>task 5</h3>
          <table>
            <thead>
            <tr>
              <th>company</th>
              <th>jobs</th>            
            </tr>
            </thead>
            <tbody>
              {tableRows}
            </tbody>
          </table>
  

      </header>
    </div>
  );
}

export default App;
