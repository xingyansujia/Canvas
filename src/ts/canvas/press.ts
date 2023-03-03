//获取笔的压感
export function getPressure(event: PointerEvent): number {
    console.log(event.pointerId);
    
    if (event.pointerType === 'pen') {
        return event.pressure;
    }
    return 0.5;
}
export function detectInputType(event: PointerEvent) {
    switch(event.pointerType) {
        case "mouse":
            console.log(0.5);
            
            return 0.5;
            break;
        case "pen":
            console.log(event.clientX,event.clientY,event.pressure);
            
            return event.pressure;
            break;
        case "touch":
            console.log(0.4);
            
            return 0.4;
            break;
        default:
            console.log(-1);
            
            return -1;
            /* pointerType is empty (could not be detected)
            or UA-specific custom type */
    }
}