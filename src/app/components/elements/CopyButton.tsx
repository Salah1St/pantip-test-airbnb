import { useNotification } from "@/context/NotificationContext";
import React, { useEffect, useState } from "react";
import { TbCopy } from "react-icons/tb";
function CopyButton({ textToCopy }: { textToCopy: string }) {
  const [text, setText] = useState("");
  useEffect(() => {
    setText(textToCopy);
  }, [textToCopy]);
  const { notify } = useNotification();
  const handleCopyClick = async () => {
    try {
      if (text) {
        await navigator.clipboard.writeText(text);

        notify({ message: `Copy : ${text}`, type: "info" });
      }
    } catch (err) {
      console.error("Unable to copy text: ", err);
    }
  };

  return (
    <div className="w-6 h-6" onClick={handleCopyClick} role="button">
      <TbCopy className="w-full h-full" />
    </div>
  );
}

export default CopyButton;
