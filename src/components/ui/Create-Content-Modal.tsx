import { useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { InputBox } from "./InputBox";
import axios from "axios";
import { BACKEND_URl } from "../../config";

const ContentType = {
  Youtube: "youtube",
  Twitter: "twitter",
} as const;

type ContentTypeValues = (typeof ContentType)[keyof typeof ContentType];

interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
}

export function CreateContentModal({ open, onClose }: CreateContentModalProps) {
  const titleref = useRef<HTMLInputElement>(null);
  const linkref = useRef<HTMLInputElement>(null);
  const [type, setType] = useState<ContentTypeValues>(ContentType.Youtube);

  async function addContent() {
    const title = titleref.current?.value;
    const link = linkref.current?.value;

    console.log("Sending data:", { title, link, type });

    try {
      const response = await axios.post(
        `${BACKEND_URl}/api/v1/content`,
        {
          link,
          title,
          type,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      onClose();
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div>
      {open && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-auto relative">
            {/* Header with close button */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Add New Content
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-100"
              >
                <CrossIcon />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Input Fields */}
              <div className="space-y-4">
                <InputBox ref={titleref} placeholder="Enter title..." />
                <InputBox ref={linkref} placeholder="Enter link..." />
              </div>

              {/* Content Type Selection */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Content Type
                </label>
                <div className="flex gap-3">
                  <Button
                    text="YouTube"
                    size="md"
                    variant={
                      type === ContentType.Youtube ? "primary" : "secondary"
                    }
                    onClick={() => setType(ContentType.Youtube)}
                  />
                  <Button
                    text="Twitter"
                    size="md"
                    variant={
                      type === ContentType.Twitter ? "primary" : "secondary"
                    }
                    onClick={() => setType(ContentType.Twitter)}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  variant="primary"
                  size="md"
                  text="Add Content"
                  onClick={addContent}
                  fullWidth={true}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
