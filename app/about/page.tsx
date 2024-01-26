
import { Metadata } from "next";
import Div from './div'
import { Space } from "@/src/index";
export const metadata: Metadata = {
    title: "About"
}

export default function Page() {
    return (
        <Div>
            <Space>
                <span>A</span>
                <span>B</span>
                <span>C</span>
                <span>D</span>
                <span>E</span>
            </Space>
            about
        </Div>
    )
}