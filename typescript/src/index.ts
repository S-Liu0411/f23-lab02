import { newRenderer } from "./renderer.js"
import { Shape } from "./shapes/shape.js";
import {Rectangle} from "./shapes/rectangle.js"

const rectangle: Shape = Rectangle(2, 3)
const renderer = newRenderer(rectangle)
renderer.draw();