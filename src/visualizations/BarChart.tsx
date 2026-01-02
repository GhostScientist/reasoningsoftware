import { useMemo } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface BarChartProps {
  data: number[];
  labels?: string[];
  width?: number;
  height?: number;
  barGap?: number;
  className?: string;
}

export function BarChart({
  data,
  labels,
  width = 200,
  height = 80,
  barGap = 4,
  className = '',
}: BarChartProps) {
  const prefersReducedMotion = useReducedMotion();

  const bars = useMemo(() => {
    if (data.length === 0) return [];

    const max = Math.max(...data);
    const padding = { top: 4, bottom: labels ? 20 : 4, left: 4, right: 4 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    const totalGaps = (data.length - 1) * barGap;
    const barWidth = (chartWidth - totalGaps) / data.length;

    return data.map((value, index) => {
      const normalizedHeight = max > 0 ? (value / max) * chartHeight : 0;
      const x = padding.left + index * (barWidth + barGap);
      const y = padding.top + chartHeight - normalizedHeight;

      return {
        x,
        y,
        width: barWidth,
        height: normalizedHeight,
        value,
        label: labels?.[index],
      };
    });
  }, [data, labels, width, height, barGap]);

  if (data.length === 0) {
    return null;
  }

  const labelY = height - 4;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="img"
      aria-label={`Bar chart with ${data.length} bars`}
    >
      {bars.map((bar, index) => (
        <g key={index}>
          <rect
            x={bar.x}
            y={prefersReducedMotion ? bar.y : height - 24}
            width={bar.width}
            height={prefersReducedMotion ? bar.height : 0}
            fill="currentColor"
            style={
              prefersReducedMotion
                ? undefined
                : {
                    animation: `bar-grow 0.4s ease-out ${index * 0.05}s forwards`,
                    transformOrigin: 'bottom',
                  }
            }
          >
            <animate
              attributeName="y"
              from={height - 24}
              to={bar.y}
              dur="0.4s"
              begin={`${index * 0.05}s`}
              fill="freeze"
            />
            <animate
              attributeName="height"
              from="0"
              to={bar.height}
              dur="0.4s"
              begin={`${index * 0.05}s`}
              fill="freeze"
            />
          </rect>
          {bar.label && (
            <text
              x={bar.x + bar.width / 2}
              y={labelY}
              textAnchor="middle"
              className="fill-current text-[8px] font-mono"
              style={{ opacity: 0.6 }}
            >
              {bar.label}
            </text>
          )}
        </g>
      ))}
      <style>
        {`
          @keyframes bar-grow {
            to {
              transform: scaleY(1);
            }
          }
        `}
      </style>
    </svg>
  );
}
