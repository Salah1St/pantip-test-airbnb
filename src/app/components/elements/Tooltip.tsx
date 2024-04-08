import { useLocalization } from "@/hooks/useLocalization";
interface props {
  message: string;
}

function Tooltip(props: props) {
  const { t } = useLocalization();

  return (
    <div className="absolute top-0 left-1/2 border-[1px] p-1 rounded-full rounded-bl-none bg-white  z-10">
      <div className="text-xs text-start">{props.message}</div>
    </div>
  );
}

export default Tooltip;
