import { ReactNode } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '../ui/tooltip'

function SkillCard ({
  children,
  title
}: {
  children: ReactNode
  title: string
}) {
  return (
    <TooltipProvider delayDuration={0.1}>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>{title}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default SkillCard
