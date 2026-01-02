import { useMemo } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SparklineProps {
  data: number[];
  width?: number;
  height?: number;
  strokeWidth?: number;
  className?: string;
}

export function Sparkline({
  data,
  width = 120,
  height = 32,
  strokeWidth = 1.5,
  className = '',
}: SparklineProps) {
  const prefersReducedMotion = useReducedMotion();

  const pathData = useMemo(() => {
    if (data.length === 0) return '';

    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;

    const padding = strokeWidth;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;

    const points = data.map((value, index) => {
      const x = padding + (index / (data.length - 1)) * chartWidth;
      const y = padding + chartHeight - ((value - min) / range) * chartHeight;
      return { x, y };
    });

    const pathParts = points.map((point, index) =>
      index === 0 ? `M ${point.x} ${point.y}` : `L ${point.x} ${point.y}`
    );

    return pathParts.join(' ');
  }, [data, width, height, strokeWidth]);

  if (data.length === 0) {
    return null;
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="img"
      aria-label={`Sparkline chart with ${data.length} data points`}
    >
      <path
        d={pathData}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={
          prefersReducedMotion
            ? undefined
            : {
                strokeDasharray: '1000',
                strokeDashoffset: '1000',
                animation: 'sparkline-draw 1s ease-out forwards',
              }
        }
      />
      <style>
        {`
          @keyframes sparkline-draw {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>
    </svg>
  );
}
