import './App.css';
import { Input } from './components/ui/Input';
import { Checkbox } from './components/ui/Checkbox';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Input
        className="
            bg-inputbg 
            w-[696px] 
            h-[36px] 
            rounded-[40px] 
            font-sanspro 
            text-dark
            placeholder-dark
            text-base 
            font-normal 
            px-5 
            py-2
            mb-2"
        placeholder="Encuentra tu pokémon..."
      />
      <Input
        className="
           bg-inputbg 
            w-[322px] 
            h-[53px] 
            rounded-[40px] 
            font-sanspro 
            text-dark
            placeholder-dark
            text-base 
            font-normal 
            px-5 
            py-2"
        placeholder="Encuentra tu pokémon..."
      />
      <Checkbox
        className="
          w-3 
          h-3 
          my-1 
          mr-2 
          rounded-none 
          border-dark"
        label="Electric"
      />
    </div>
  );
}

export default App;
