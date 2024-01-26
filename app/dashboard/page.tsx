import type { Metadata } from "next";
import { Suspense } from 'react'

const PostFeed = function () {
    return <div>PostFeed</div>
}

const Weather = function () {
    return <div>Weather</div>
}

export const metadata: Metadata = {
    title: "Dashboard"
}

export default function Page() {
    return <h1>
        <Suspense fallback={<p>Loading feed...</p>}>
            <PostFeed />
        </Suspense>
        <Suspense fallback={<p>Loading weather...</p>}>
            <Weather />
        </Suspense>
    </h1>
}