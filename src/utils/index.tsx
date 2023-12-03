import { VNode } from "vue";

export const createSide = (sides: number, current: number = 1): VNode | undefined => {
    let currentDom = <div class={`sides side-${current}`} style={`transform: rotate(${60}deg) translateX(50px)`}></div>
    if (sides === current) return currentDom
    currentDom = <currentDom>
        {createSide(sides, current + 1)}
    </currentDom>
    return currentDom
}
