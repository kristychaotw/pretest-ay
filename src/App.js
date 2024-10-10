import { ChakraProvider } from "@chakra-ui/react";
import AgeGroupPriceList from "./components/widgets/AgeGroupPriceList";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <AgeGroupPriceList onChange={(result) => console.log(result)} />
      </div>
    </ChakraProvider>
  );
}

export default App;
