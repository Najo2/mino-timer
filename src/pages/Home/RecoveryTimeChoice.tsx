import { FormControl, FormLabel } from '@chakra-ui/core'
import { useObserver } from 'mobx-react-lite'
import React from 'react'
import { TimeSelect } from '../../components'
import { useStore } from '../../hooks/useStore'

export const RecoveryTimeChoice = () => {
  const { exercise } = useStore()

  return useObserver(() => (
    <FormControl mb='2'>
      <FormLabel htmlFor='recovery-time'>
        Recovery time: {exercise.newExercise.recoveryTime} seconds
      </FormLabel>
      <TimeSelect
        id='recovery-time'
        value={exercise.newExercise.recoveryTime}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          const parsedSeconds = parseInt(e.target.value)

          exercise.changeRecoveryTime(isNaN(parsedSeconds) ? 0 : parsedSeconds)
        }}
      />
    </FormControl>
  ))
}
