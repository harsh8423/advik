import React from 'react';

interface CubeFaceProps {
    title: string;
    description?: string;
    icon?: React.ReactNode;
    position: 'front' | 'back' | 'right' | 'left' | 'top' | 'bottom';
}

const CubeFace: React.FC<CubeFaceProps> = ({ title, description, icon, position }) => {
    // Position-specific transforms for each face
    const positionStyles: Record<string, string> = {
        front: 'rotateY(0deg) translateZ(var(--cube-half-size))',
        back: 'rotateY(180deg) translateZ(var(--cube-half-size))',
        right: 'rotateY(90deg) translateZ(var(--cube-half-size))',
        left: 'rotateY(-90deg) translateZ(var(--cube-half-size))',
        top: 'rotateX(90deg) translateZ(var(--cube-half-size))',
        bottom: 'rotateX(-90deg) translateZ(var(--cube-half-size))',
    };

    return (
        <div
            className="absolute w-[var(--cube-size)] h-[var(--cube-size)] bg-gradient-to-br from-background via-secondary to-background border-2 border-primary flex flex-col items-center justify-center p-6 text-center"
            style={{
                transform: positionStyles[position],
                backfaceVisibility: 'hidden',
                boxShadow: '0 0 30px rgba(255, 26, 26, 0.3), inset 0 0 20px rgba(255, 26, 26, 0.1)',
            }}
        >
            {/* Icon */}
            {icon && (
                <div className="mb-4 text-primary">
                    {icon}
                </div>
            )}

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight">
                {title}
            </h3>

            {/* Description */}
            {description && (
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed hidden md:block">
                    {description}
                </p>
            )}

            {/* Decorative corner accents */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/50" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/50" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/50" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/50" />
        </div>
    );
};

export default CubeFace;
