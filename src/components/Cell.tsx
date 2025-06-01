import React, { useState } from 'react';
import '../styles/Notebook.css';

interface CellProps {
  type: 'markdown' | 'code';
  number: number;
  content?: React.ReactNode;
  codeContent?: string;
  runnable?: boolean;
  output?: React.ReactNode;
}

const Cell: React.FC<CellProps> = ({ 
  type, 
  number, 
  content, 
  codeContent,
  runnable,
  output 
}) => {
  const [isRunning, setIsRunning] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setIsDone(true);
      setShowOutput(true);
    }, 1500);
  };

  return (
    <div className="cell">
      <div className="cell-header">
        <div className="cell-type">{type}</div>
        <div className="cell-number">[{number}]</div>
      </div>
      
      <div className="cell-content">
        {runnable && (
          <button 
            className={`run-button ${isRunning ? 'loading' : ''} ${isDone ? 'done' : ''}`}
            onClick={runCode}
            disabled={isRunning}
          >
            {isRunning ? (
              <>
                <span className="button-icon loading"></span>
                <span>Running...</span>
              </>
            ) : isDone ? (
              <>
                <span className="button-icon done"></span>
                <span>Done!</span>
              </>
            ) : (
              <>
                <span className="button-icon"></span>
                <span>Run Cell</span>
              </>
            )}
          </button>
        )}
        
        {type === 'code' && codeContent && (
          <div className="code-block">
            <pre>
              <code>{codeContent}</code>
            </pre>
          </div>
        )}
        
        {type === 'markdown' && content}
        
        {output && (
          <div className={`output ${showOutput ? 'show' : ''}`}>
            {output}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cell;