import { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

interface CountUpProps {
    to: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    decimals?: number;
    className?: string;
}

export function CountUp({
    to,
    duration = 2.5,
    suffix = '',
    prefix = '',
    decimals = 0,
    className = ''
}: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-20px" });
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!isInView || !ref.current || hasAnimated.current) return;

        hasAnimated.current = true;

        const controls = animate(0, to, {
            duration,
            ease: [0.34, 1.56, 0.64, 1], // Using the same "springy" ease we used for other elements
            onUpdate(value) {
                if (ref.current) {
                    ref.current.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
                }
            },
        });

        return () => controls.stop();
    }, [isInView, to, duration, suffix, prefix, decimals]);

    return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}
