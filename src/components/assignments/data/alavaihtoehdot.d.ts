import alavaihtoehdot from "alavaihtoehdot"
import { Children } from "react"

declare module 'alavaihtoehdot' {
    export interface alavaihtoehdot {
        db: any[]
    }
    export default alavaihtoehdot
}
