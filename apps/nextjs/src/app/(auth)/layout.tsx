import { BackgroundSVGs } from "../config";

export default function AuthLayout(props: { children: React.ReactNode }) {
    return (
        <div className="h-screen flex items-center">
            <BackgroundSVGs.GradientTop />
            <BackgroundSVGs.GridTop />
                {props.children}
            <BackgroundSVGs.GradientBottom />
        </div>
    )
}