import { useEffect, useState } from "react";
import "../App.css";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { CreateContentModal } from "../components/ui/Create-Content-Modal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { SideBar } from "../components/ui/Sidebar";
import { useContent } from "../hooks/useContent";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { content, refresh } = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen]);

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
        <div className="grid grid-cols-3 gap-6">
          {content.map(({ link, title, type, _id }) => (
            <Card key={_id} type={type} link={link} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
}
