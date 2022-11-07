import {
   ChartComponent,
   SeriesCollectionDirective,
   SeriesDirective,
   Inject,
   Legend,
   Category,
   StackingColumnSeries,
   Tooltip,
   AxisModel,
} from "@syncfusion/ej2-react-charts";

import {
   stackedCustomSeries,
   stackedPrimaryXAxis,
   stackedPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../context/ContextProvider";

interface Props {
   width?: string;
   height?: string;
}

export default function Stacked({ width, height }: Props) {
   const { currentMode } = useStateContext();

   return (
      <ChartComponent
         id="charts"
         primaryXAxis={stackedPrimaryXAxis as AxisModel}
         primaryYAxis={stackedPrimaryYAxis}
         width={width}
         height={height}
         chartArea={{ border: { width: 0 } }}
         tooltip={{ enable: true }}
         background={currentMode === "Dark" ? "#33373E" : "#fff"}
         legendSettings={{ background: "white" }}
      >
         <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
         <SeriesCollectionDirective>
            {stackedCustomSeries.map((item, index) => (
               <SeriesDirective key={index} {...item} />
            ))}
         </SeriesCollectionDirective>
      </ChartComponent>
   );
}
