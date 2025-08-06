import { useEffect, useState } from "react";
import "../App.css";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { CreateContentModal } from "../components/ui/Create-Content-Modal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { SideBar } from "../components/ui/Sidebar";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URl } from "../config";

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
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URl}/api/v1/share`,
                {
                  share: true,
                },
                {
                  headers: {
                    Authorization: localStorage.getItem("token"),
                  },
                }
              );

              const shareUrl = `http://localhost:5173/${response.data.hash}`;
              await navigator.clipboard.writeText(shareUrl);
              console.log("Text successfully copied to clipboard!");
            }}
          />
        </div>
        <div className="grid grid-cols-3 gap-6">
          {content.map(({ link, title, type, _id }) => (
            <Card
              key={_id}
              id={_id}
              type={type}
              link={link}
              title={title}
              onDelete={refresh}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
