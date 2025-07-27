import "./App.css";
import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";

function App() {
  function handleClick() {}
  return (
    <>
      <div>hi there</div>
      <Button
        text="Add Content"
        onClick={handleClick}
        variant="secondary"
        size="lg"
        startIcon={<PlusIcon size="md" />}
      />
      <Button
        text="Add Content"
        onClick={handleClick}
        variant="primary"
        size="lg"
        startIcon={<PlusIcon size="md" />}
      />
    </>
  );
}

export default App;
