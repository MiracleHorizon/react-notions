import React from 'react'
import { PlusSvg } from 'components/ui/svg'
import Bar from './CreateTaskBar.styles'

const CreateTaskBar = () => (
  <Bar>
    <PlusSvg />
    <span>New</span>
  </Bar>
)

export default CreateTaskBar
