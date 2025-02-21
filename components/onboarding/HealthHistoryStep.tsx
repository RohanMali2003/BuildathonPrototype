'use client'

import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

interface HealthHistoryStepProps {
  data: {
    medicalConditions: string
    takingMedications: boolean
    hasSubstanceUseDisorder: boolean
    substanceTypes: string[]
    otherSubstance: string
  }
  updateFields: (fields: Partial<HealthHistoryStepProps['data']>) => void
  onNext: () => void
}

export default function HealthHistoryStep({
  data,
  updateFields,
  onNext,
}: HealthHistoryStepProps) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: data
  })

  const hasSubstanceUseDisorder = watch('hasSubstanceUseDisorder')

  const onSubmit = (formData: HealthHistoryStepProps['data']) => {
    updateFields(formData)
    onNext()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label>Do you have any existing medical conditions?</Label>
          <Textarea
            {...register('medicalConditions')}
            placeholder="E.g., heart disease, diabetes, mental health conditions"
            className="mt-2"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            {...register('takingMedications')}
            id="takingMedications"
          />
          <Label htmlFor="takingMedications">
            Are you currently taking any prescribed medications?
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            {...register('hasSubstanceUseDisorder')}
            id="hasSubstanceUseDisorder"
          />
          <Label htmlFor="hasSubstanceUseDisorder">
            Have you been diagnosed with a substance use disorder?
          </Label>
        </div>

        {hasSubstanceUseDisorder && (
          <div>
            <Label>What substances are you recovering from?</Label>
            <div className="space-y-2 mt-2">
              {['Alcohol', 'Opioids', 'Tobacco'].map((substance) => (
                <div key={substance} className="flex items-center space-x-2">
                  <Checkbox
                    {...register('substanceTypes')}
                    value={substance.toLowerCase()}
                    id={substance}
                  />
                  <Label htmlFor={substance}>{substance}</Label>
                </div>
              ))}
              <Input
                {...register('otherSubstance')}
                placeholder="Other - Please specify"
                className="mt-2"
              />
            </div>
          </div>
        )}
      </div>

      {/* <div className="flex justify-end"> */}
        {/* <Button type="submit">Next</Button> */}
      {/* </div> */}
    </form>
  )
}