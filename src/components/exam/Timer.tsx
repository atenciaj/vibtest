import React from 'react';
import { Clock } from 'lucide-react';
import { formatTime } from '../../utils/formatters';

interface TimerProps {
  timeLeft: number;
}

export const Timer: React.FC<TimerProps> = ({ timeLeft }) => {
  return (
    <div className="flex items-center">
      <Clock className="mr-2 h-5 w-5 text-blue-600" />
      <span className="font-mono">{formatTime(timeLeft)}</span>
    </div>
  );
}; 