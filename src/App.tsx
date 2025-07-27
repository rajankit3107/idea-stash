import "./App.css";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
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
      <div className="flex gap-6 ml-2 mt-8 p-4">
        <Card
          type="twitter"
          link="https://x.com/anxit_0731/status/1939353462745268310"
          title="Twitter Post"
        />
        <Card
          type="youtube"
          link="https://www.youtube.com/watch?v=7fDjvGFyiv4"
          title="Youtube Video"
        />
      </div>
    </>
  );
}

export default App;
