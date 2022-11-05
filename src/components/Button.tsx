import { useStateContext } from "../context/ContextProvider";

interface Props {
   icon?: JSX.Element;
   bgColor?: string;
   color?: string;
   bgHoverColor?: string;
   size?: string;
   text?: string;
   borderRadius?: string;
   width?: string;
}

export default function Button({
   icon,
   bgColor,
   color,
   bgHoverColor,
   size,
   text,
   borderRadius,
   width,
}: Props) {
   const { setIsClicked, initialState } = useStateContext();

   return (
      <button
         type="button"
         onClick={() => setIsClicked(initialState)}
         style={{ backgroundColor: bgColor, color, borderRadius }}
         className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
      >
         {icon} {text}
      </button>
   );
}
