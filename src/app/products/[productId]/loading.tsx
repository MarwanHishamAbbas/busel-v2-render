import { Loader2 } from "lucide-react"
import { FC } from "react"

interface LoadingProps {}

const Loading: FC<LoadingProps> = ({}) => {
  return (
    <div className="h-screen grid place-content-center">
      <Loader2 className="size-[150px] animate-spin" />
    </div>
  )
}

export default Loading
