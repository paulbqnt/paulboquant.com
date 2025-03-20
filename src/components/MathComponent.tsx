import React, { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathComponentProps {
    expression: string;
}

const MathComponent: React.FC<MathComponentProps> = ({ expression }) => {
    const mathContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mathContainer.current) {
            katex.render(expression, mathContainer.current, {
                throwOnError: false,
            });
        }
    }, [expression]);

    return <div ref={mathContainer}></div>;
};

export default MathComponent;
