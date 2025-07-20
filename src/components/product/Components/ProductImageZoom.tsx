import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Plus, Minus } from 'lucide-react';

export const ProductImageZoom = ({ product, currentImageIndex, setCurrentImageIndex }) => {
    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [lensZoomLevel, setLensZoomLevel] = useState(8); // Default zoom level
    const [showZoomControls, setShowZoomControls] = useState(false);
    const imageRef = useRef(null);

    // Zoom levels: from 4x to 25x magnification for super HD
    const minZoom = 1;
    const maxZoom = 25;
    const zoomStep = 3;

    const handleMouseMove = useCallback((e) => {
        if (!imageRef.current || !isHovering) return;

        const rect = imageRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        // Create dead zones where lens won't appear (around controls)
        const isInControlsArea = (
            (x > 70 && y < 25) || // Top right area (zoom controls)
            (x < 30 && y < 25) || // Top left area (zoom level indicator)
            (x < 50 && y > 75)    // Bottom left area (instructions)
        );

        // Only update lens position if not in control areas
        if (!isInControlsArea) {
            setZoomPosition({
                x: Math.max(0, Math.min(100, x)),
                y: Math.max(0, Math.min(100, y))
            });
        }
    }, [isHovering]);

    // Handle scroll wheel zoom
    const handleWheelZoom = useCallback((e) => {
        if (!isHovering) return;

        e.preventDefault();
        const delta = e.deltaY > 0 ? -zoomStep : zoomStep;
        const newZoom = Math.max(minZoom, Math.min(maxZoom, lensZoomLevel + delta));
        setLensZoomLevel(newZoom);
    }, [isHovering, lensZoomLevel]);

    // Handle keyboard zoom controls
    const handleKeyDown = useCallback((e) => {
        if (!isHovering) return;

        if (e.key === '+' || e.key === '=') {
            e.preventDefault();
            setLensZoomLevel(prev => Math.min(maxZoom, prev + zoomStep));
        } else if (e.key === '-' || e.key === '_') {
            e.preventDefault();
            setLensZoomLevel(prev => Math.max(minZoom, prev - zoomStep));
        }
    }, [isHovering]);

    // Add event listeners
    useEffect(() => {
        const imageElement = imageRef.current;
        if (imageElement && isHovering) {
            imageElement.addEventListener('wheel', handleWheelZoom, { passive: false });
            window.addEventListener('keydown', handleKeyDown);

            return () => {
                imageElement.removeEventListener('wheel', handleWheelZoom);
                window.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [isHovering, handleWheelZoom, handleKeyDown]);

    const handleImageClick = () => setIsZoomed(true);
    const closeZoom = () => setIsZoomed(false);

    const nextImage = () => {
        if (product.images && currentImageIndex < product.images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        } else {
            setCurrentImageIndex(0);
        }
    };

    const prevImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        } else {
            setCurrentImageIndex(product.images.length - 1);
        }
    };

    const zoomIn = () => {
        setLensZoomLevel(prev => Math.min(maxZoom, prev + zoomStep));
    };

    const zoomOut = () => {
        setLensZoomLevel(prev => Math.max(minZoom, prev - zoomStep));
    };

    const PlaceholderImage = ({ text, className, bgColor }) => (
        <div className={`${className} ${bgColor} flex items-center justify-center text-gray-500`}>
            <span className="text-sm font-medium">{text}</span>
        </div>
    );

    if (!product.images || product.images.length === 0) {
        return (
            <div className="space-y-4">
                <div className="aspect-square overflow-visible rounded-md">
                    <PlaceholderImage text={product.name} className="w-full h-full" bgColor="bg-gray-200" />
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="space-y-6">
                <div className="relative">
                    <div className="relative aspect-square">
                        {/* Show only one shadow image (prev or next) */}
                        {product.images.map((image, index) => {
                            const isBehind = Math.abs(index - currentImageIndex) === 1;

                            if (!isBehind) return null;

                            return (
                                <div
                                    key={`shadow-${index}`}
                                    className="absolute inset-0 rounded-lg overflow-hidden cursor-pointer transition-all duration-300"
                                    style={{
                                        transform: `translateX(${(index - currentImageIndex) * 60}px) scale(0.95)`,
                                        zIndex: 10,
                                        opacity: 0.25,
                                        transition: "transform 0.3s ease, opacity 0.3s ease"
                                    }}
                                    onClick={() => setCurrentImageIndex(index)}
                                >
                                    <img
                                        src={image}
                                        alt={`${product.name} - Preview ${index + 1}`}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
                                </div>
                            );
                        })}

                        {/* Main active image inside sliding container */}
                        <div className="overflow-hidden relative z-20 rounded-lg">
                            <div
                                className="flex transition-transform duration-500 ease-in-out w-full h-full"
                                style={{
                                    transform: `translateX(-${currentImageIndex * 100}%)`
                                }}
                            >
                                {product.images.map((img, index) => (
                                    <div key={index} className="w-full flex-shrink-0 aspect-square">
                                        <div
                                            className="relative w-full h-full cursor-zoom-in group"
                                            onMouseMove={handleMouseMove}
                                            onMouseEnter={() => {
                                                setIsHovering(true);
                                                setShowZoomControls(true);
                                            }}
                                            onMouseLeave={() => {
                                                setIsHovering(false);
                                                setShowZoomControls(false);
                                            }}
                                            onClick={handleImageClick}
                                        >
                                            <img
                                                ref={index === currentImageIndex ? imageRef : null}
                                                src={img}
                                                alt={`${product.name} - Image ${index + 1}`}
                                                className="w-full h-full object-cover rounded-lg shadow-2xl"
                                                style={{
                                                    imageRendering: 'crisp-edges',
                                                    imageResolution: 'from-image',
                                                    objectFit: 'cover',
                                                    backfaceVisibility: 'hidden',
                                                    transform: 'translateZ(0)', // GPU acceleration
                                                }}
                                                loading="eager"
                                                decoding="sync"
                                            />

                                            {/* Enhanced Super HD Magnifying Lens */}
                                            {isHovering && index === currentImageIndex && (
                                                <div
                                                    className="absolute pointer-events-none z-30 rounded-full border-4 border-white shadow-2xl"
                                                    style={{
                                                        width: '320px',
                                                        height: '320px',
                                                        left: `${zoomPosition.x}%`,
                                                        top: `${zoomPosition.y}%`,
                                                        transform: 'translate(-50%, -50%) translateZ(0)', // GPU acceleration
                                                        backgroundImage: `url(${product.images[currentImageIndex]})`,
                                                        backgroundSize: `${lensZoomLevel * 100}%`,
                                                        backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                                                        backgroundRepeat: 'no-repeat',
                                                        boxShadow: '0 0 0 6px rgba(0,0,0,0.5), 0 30px 100px rgba(0,0,0,0.6), inset 0 0 0 2px rgba(255,255,255,0.3)',
                                                        imageRendering: 'crisp-edges',
                                                        filter: 'contrast(1.15) brightness(1.05) saturate(1.1)',
                                                        WebkitFilter: 'contrast(1.15) brightness(1.05) saturate(1.1)',
                                                        WebkitBackfaceVisibility: 'hidden',
                                                        backfaceVisibility: 'hidden',

                                                        transition: 'background-size 0.05s ease-out',
                                                        willChange: 'background-size, background-position', // Optimize for changes
                                                        // Advanced anti-aliasing prevention
                                                        WebkitFontSmoothing: 'none',
                                                        fontSmooth: 'never',
                                                        textRendering: 'geometricPrecision',
                                                        // Hide lens when mouse is in control areas
                                                        opacity: (
                                                            (zoomPosition.x > 70 && zoomPosition.y < 25) ||
                                                            (zoomPosition.x < 30 && zoomPosition.y < 25) ||
                                                            (zoomPosition.x < 50 && zoomPosition.y > 75)
                                                        ) ? 0 : 1,
                                                    }}
                                                />
                                            )}

                                            {/* Zoom Level Indicator */}
                                            {isHovering && index === currentImageIndex && (
                                                <div className="absolute top-4 left-4 bg-black bg-opacity-80 text-white px-3 py-1 rounded-full text-xs font-medium z-40 backdrop-blur-sm border border-gray-600">
                                                    {lensZoomLevel}x
                                                </div>
                                            )}

                                            {/* Enhanced Zoom Controls */}
                                            {showZoomControls && index === currentImageIndex && (
                                                <div className="absolute top-4 right-4 z-40 flex flex-col gap-2">
                                                    <div className="flex items-center gap-1 bg-black bg-opacity-80 rounded-full px-3 py-2 backdrop-blur-sm border border-gray-600">
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                zoomOut();
                                                            }}
                                                            className="text-white hover:text-blue-300 transition-colors p-1 hover:bg-white hover:bg-opacity-20 rounded-full"
                                                            disabled={lensZoomLevel <= minZoom}
                                                        >
                                                            <Minus size={16} />
                                                        </button>
                                                        <div className="w-16 h-2 bg-gray-600 rounded-full mx-2 relative">
                                                            <div
                                                                className="h-full bg-blue-400 rounded-full transition-all duration-150"
                                                                style={{
                                                                    width: `${((lensZoomLevel - minZoom) / (maxZoom - minZoom)) * 100}%`
                                                                }}
                                                            />
                                                        </div>
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                zoomIn();
                                                            }}
                                                            className="text-white hover:text-blue-300 transition-colors p-1 hover:bg-white hover:bg-opacity-20 rounded-full"
                                                            disabled={lensZoomLevel >= maxZoom}
                                                        >
                                                            <Plus size={16} />
                                                        </button>
                                                    </div>
                                                    <div className="bg-black bg-opacity-80 rounded-full p-2 backdrop-blur-sm border border-gray-600 self-center">
                                                        <ZoomIn size={18} className="text-white" />
                                                    </div>
                                                </div>
                                            )}

                                            {/* Instructions tooltip */}
                                            {isHovering && index === currentImageIndex && (
                                                <div className="absolute bottom-4 left-4 bg-black bg-opacity-80 text-white px-3 py-2 rounded-lg text-xs z-40 max-w-xs backdrop-blur-sm border border-gray-600">
                                                    <div className="font-medium mb-1">Super HD Lens Controls:</div>
                                                    <div>• Scroll wheel: Zoom in/out</div>
                                                    <div>• Keys: + (zoom in) / - (zoom out)</div>
                                                    <div>• Click: Full screen view</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    {product.images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200"
                            >
                                <ChevronLeft size={24} className="text-gray-700" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200"
                            >
                                <ChevronRight size={24} className="text-gray-700" />
                            </button>
                        </>
                    )}

                    {/* Counter */}
                    {product.images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
                            {currentImageIndex + 1} / {product.images.length}
                        </div>
                    )}
                </div>
            </div>

            {/* Zoom Modal */}
            {isZoomed && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center p-4">
                        <button
                            onClick={closeZoom}
                            className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 text-white transition-all duration-200"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {product.images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 text-white"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 text-white"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </>
                        )}

                        <img
                            src={product.images[currentImageIndex]}
                            alt={`${product.name} - Zoomed View`}
                            className="max-w-full max-h-full object-contain cursor-move"
                            draggable={false}
                            style={{
                                imageRendering: 'crisp-edges',
                                imageResolution: 'from-image',
                                backfaceVisibility: 'hidden',
                                transform: 'translateZ(0)',
                            }}
                            loading="eager"
                            decoding="sync"
                        />

                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 rounded-full px-4 py-2 text-white text-sm">
                            {currentImageIndex + 1} of {product.images.length}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};