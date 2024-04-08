import icons from "@/asset/icons";
import { useNotification } from "@/context/NotificationContext";
import Image from "next/image";
import { ChangeEvent, DragEvent, FormEvent, useState } from "react";
import { FaRegFileImage } from "react-icons/fa6";
interface props {
  id: string;
  handleFile: (files: FileList) => void;
  fileExtension: string[];
  border?: string;
  placeholder?: string;
  classNameTitle?: string;
  title?: string;
  discription?: string;
  classNameDiscription?: string;
}
function DropBox(props: props) {
  const { id, fileExtension, border, placeholder = "", classNameTitle, title, discription, classNameDiscription, handleFile } = props;
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState("");
  const { notify } = useNotification();

  const internalHandleFile = (files: FileList) => {
    if (!fileExtension.includes(files[0].name.split(".")[1])) {
      notify({ message: `โปรดใช้ไฟล์ นามสกุล ${fileExtension.join(",")}`, type: "error" });
    } else {
      setFileName(files[0].name);
      handleFile(files);
    }
  };
  const handleDrag = function (e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  const handleDrop = function (e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      internalHandleFile(e.dataTransfer.files);
    }
  };
  const handleChange = function (e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      internalHandleFile(e.target.files);
    }
  };
  return (
    <div id={id} className="relative flex flex-col py-2" onDragEnter={handleDrag}>
      <input className="hidden" type="file" name="input-file-upload" id="input-file-upload" multiple={true} onChange={handleChange} />
      {title && <p className={classNameTitle ? classNameTitle : "text-black text-base font-semibold pb-2"}>{title}</p>}
      {discription && <p className={classNameDiscription ? classNameDiscription : "text-slate-500 text-xs pb-2"}>{discription}</p>}
      <label
        htmlFor="input-file-upload"
        className={`text-center border-2 cursor-pointer bg-slate-100  rounded-xl h-56 w-full flex flex-col justify-center items-center ${
          !fileName ? " border-dotted border-primary " : ""
        } ${border ? border : ""}`}
      >
        {fileName ? (
          <FaRegFileImage className={" text-3xl my-2"} />
        ) : (
          <div className="flex items-center gap-2 py-2">
            <Image src={icons.uploadgrey} alt="" width={32} />
            <p className="text-slate-500 text-sm font-bold">{"Choose file"}</p>
          </div>
        )}
        <p className="text-slate-400 text-xs">{fileName ? fileName : placeholder}</p>
      </label>
      {dragActive && (
        <div
          className="absolute top-0 left-0 right-0 bottom-0 border w-full h-full "
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        />
      )}
    </div>
  );
}
export default DropBox;
