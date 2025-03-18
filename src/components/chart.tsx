'use client'
import { 
  AreaChart, 
  Area, 
  XAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";

// تعریف تایپ برای پراپ‌های کامپوننت
interface ChartProps {
  title: string;
  data: Array<any>; // می‌توان نوع دقیق‌تری برای داده‌ها مشخص کرد (مثل { name: string, value: number })
  dataKey: string;
  grid?: boolean; // این پراپ اختیاری است
  classs: string;
  height1: number;
  height2: number;
  c1: string; // رنگ برای XAxis
  c2: string; // رنگ برای خط Area
  c3: string; // رنگ پر شدن Area
}

const Chart: React.FC<ChartProps> = ({
  classs,
  c1,
  c2,
  c3,
  height1,
  height2,
  data,
  title,
  grid,
  dataKey,
}) => {
  return (
    <div className={classs}>
      <h3 className="mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height="100%" aspect={height1 / height2}>
        <AreaChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          {grid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey="name" stroke={c1} />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke={c2}
            fill={c3}
            activeDot={{ r: 8 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
