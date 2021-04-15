import IndexTyping from './components/typing/IndexTyping';
import IndexTutorial from './components/tutorial1/IndexTutorial';


function App() {

  return (
    <div className="container mb-5 mb-5">
      <div className="row">
        <IndexTutorial />
        <IndexTyping />
      </div>
    </div>
  );
}

export default App;
