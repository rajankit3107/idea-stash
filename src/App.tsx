import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { CreateContenModal } from "./components/ui/Create-Content-Modal";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <CreateContenModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      />
      <div className="flex justify-end p-2">
        <div className="pr-2">
          <Button
            text="Add Content"
            onClick={() => {
              setModalOpen(true);
            }}
            variant="secondary"
            size="lg"
            startIcon={<PlusIcon size="md" />}
          />
        </div>
        <Button
          text="Share Brain"
          variant="primary"
          size="lg"
          startIcon={<ShareIcon size="md" />}
        />
      </div>
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
