import './styles.css';
import { Form } from './components/form';

const App = () => {
  return (
    <div className="App">
      <div className="p-4 flex justify-center">
        <div className="w-1/2 min-h-full shadow-sm p-6 bg-white my-8">
          <p className="text-lg">Add Products</p>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
