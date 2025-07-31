import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { InputBox } from "./InputBox";

export function CreateContenModal({ open, onClose }) {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-200 fixed top-0 left-0 opacity-60 flex justify-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-4 rounded">
              <div className="flex justify-end cursor-pointer">
                <div onClick={onClose}>
                  <CrossIcon />
                </div>
              </div>
              <div>
                <InputBox placeholer={"Title"} />
                <InputBox placeholer={"Link"} />
              </div>
              <div className="flex justify-center m-2">
                <Button variant="primary" size="md" text="Submit" />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
