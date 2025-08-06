import { useState } from "react";
import "../App.css";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { CreateContentModal } from "../components/ui/Create-Content-Modal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { SideBar } from "../components/ui/Sidebar";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <SideBar />
      <div className="p-6 ml-64 min-h-screen bg-white">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        <div className="flex justify-end items-center space-x-3 mb-6">
          <Button
            text="Add Content"
            onClick={() => {
              setModalOpen(true);
            }}
            variant="secondary"
            size="lg"
            startIcon={<PlusIcon size="md" />}
          />
          <Button
            text="Share Brain"
            variant="primary"
            size="lg"
            startIcon={<ShareIcon size="md" />}
          />
        </div>
        <div className="flex gap-6">
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
      </div>
    </div>
  );
}
