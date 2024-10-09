import { ChakraProvider } from "@chakra-ui/react";
import AgeGroupSelect from "./components/units/AgeGroupSelect";
import PriceInput from "./components/units/PriceInput";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <AgeGroupSelect />
        <PriceInput />
      </div>
    </ChakraProvider>
  );
}

export default App;
