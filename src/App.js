import React from 'react';
import './App.css';
import Foundation from 'react-foundation';


function App() {
  return (
    <div className="App">
      <div className="header">
        <h2 className="text-center text-4xl">Shoppies: Nominate your favorite movie</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1">
        <div className="w-full mb-24">
          <form>
            <input className="shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Search movie by title ..." />
          </form>
        </div>
        <div>
          It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your machine. To create a project, run:
        </div>
      </div>
    </div>
  );
}

export default App;
