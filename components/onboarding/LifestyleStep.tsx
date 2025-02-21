'use client'

import { useForm } from 'react-hook-form'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select } from '@/components/ui/select'

interface LifestyleStepProps {
  data: {
    stressLevel: string
    sleepHours: string
    physicalActivity: string
    useWearables: boolean
  }
  updateFields: (fields: Partial<LifestyleStepProps['data']>) => void
  onNext: () => void
}

export default function LifestyleStep({
  data,
  updateFields,
  onNext,
}: LifestyleStepProps) {
  const { register, handleSubmit } = useForm({
    defaultValues: data
  })

  const onSubmit = (formData: LifestyleStepProps['data']) => {
    updateFields(formData)
    onNext()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label>How would you rate your average stress level?</Label>
          <RadioGroup defaultValue={data.stressLevel} className="mt-2">
            {['Low', 'Moderate', 'High'].map((level) => (
              <div key={level} className="flex items-center space-x-2">
                <RadioGroupItem
                  {...register('stressLevel')}
                  value={level.toLowerCase()}
                  id={`stress-${level}`}
                />
                <Label htmlFor={`stress-${level}`}>{level}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div>
          <Label>How many hours of sleep do you typically get each night?</Label>
          <Select {...register('sleepHours')} className="mt-2">
            <option value="">Select hours</option>
            {Array.from({ length: 12 }, (_, i) => i + 4).map((hours) => (
              <option key={hours} value={hours}>
                {hours} hours
              </option>
            ))}
          </Select>
        </div>

        <div>
          <Label>How often do you engage in physical activity?</Label>
          <RadioGroup defaultValue={data.physicalActivity} className="mt-2">
            {[
              { label: 'Daily', value: 'daily' },
              { label: 'Few times a week', value: 'few-times-week' },
              { label: 'Rarely', value: 'rarely' }
            ].map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem
                  {...register('physicalActivity')}
                  value={option.value}
                  id={`activity-${option.value}`}
                />
                <Label htmlFor={`activity-${option.value}`}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            {...register('useWearables')}
            id="useWearables"
          />
          <Label htmlFor="useWearables">
            Are you open to using wearable devices for health tracking?
          </Label>
        </div>
      </div>

      {/* <div className="flex justify-end">
        <Button type="submit">Next</Button>
      </div> */}
    </form>
  )
}