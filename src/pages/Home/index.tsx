import { Box, Stack, Text } from '@chakra-ui/core'
import { useObserver } from 'mobx-react-lite'
import React from 'react'
import { useStore } from '../../hooks/useStore'
import { AddExerciseButton } from './AddExerciseButton'
import { ExerciseChoice } from './ExerciseChoice'
import { ExerciseTimeChoice } from './ExerciseTimeChoice'
import { RecoveryTimeChoice } from './RecoveryTimeChoice'
import { RoundBox } from './RoundBox'
import { RoundChoice } from './RoundChoice'
import { TimerActions } from './TimerActions'

export const Home: React.FC = () => {
  const { round } = useStore()

  return useObserver(() => (
    <Stack as='main' maxWidth='800px' mx='auto' p='4'>
      <Box>
        <Text as='h2' fontSize='2em'>
          Create your timer
        </Text>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            round.addExercise()
          }}
        >
          <ExerciseChoice />
          <ExerciseTimeChoice />
          <RecoveryTimeChoice />
          {round.rounds.size > 0 && <RoundChoice />}
          <AddExerciseButton />
        </form>
      </Box>
      <Box mt='2'>
        {[...round.rounds.keys()].map((roundId) => (
          <RoundBox
            key={`round-${roundId}`}
            round={round.rounds.get(roundId)!}
          />
        ))}
      </Box>
      <TimerActions />
    </Stack>
  ))
}
