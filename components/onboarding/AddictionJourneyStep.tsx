'use client'

import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'

interface AddictionJourneyStepProps {
  data: {
    recoveryDuration: string
    hadRelapse: boolean
    relapseTriggers: string[]
    otherTriggers: string
  }
  updateFields: (fields: Partial<AddictionJourneyStepProps['data']>) => void
  onNext: () => void
}

export default function AddictionJourneyStep({
  data,
  updateFields,
  onNext,
}: AddictionJourneyStepProps) {
  const { register, handleSubmit } = useForm({
    defaultValues: data
  })


  const onSubmit = (formData: AddictionJourneyStepProps['data']) => {
    updateFields(formData)
    onNext()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label>How long have you been in recovery?</Label>
          <Select {...register('recoveryDuration')} className="mt-2">
            <option value="">Select duration</option>
            <option value="less-than-month">Less than a month</option>
            <option value="1-3-months">1-3 months</option>
            <option value="3-6-months">3-6 months</option>
            <option value="6-12-months">6-12 months</option>
            <option value="1-2-years">1-2 years</option>
            <option value="2-plus-years">More than 2 years</option>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            {...register('hadRelapse')}
            id="hadRelapse"
          />
          <Label htmlFor="hadRelapse">
            Have you experienced a relapse before?
          </Label>
        </div>

        <div>
          <Label>What triggers do you believe contribute to relapse for you?</Label>
          <div className="space-y-2 mt-2">
            {[
              'Stress',
              'Loneliness',
              'Social situations',
              'Financial pressure',
              'Work stress',
              'Family issues',
              'Depression',
              'Anxiety'
            ].map((trigger) => (
              <div key={trigger} className="flex items-center space-x-2">
                <Checkbox
                  {...register('relapseTriggers')}
                  value={trigger.toLowerCase()}
                  id={trigger}
                />
                <Label htmlFor={trigger}>{trigger}</Label>
              </div>
            ))}
            <Input
              {...register('otherTriggers')}
              placeholder="Other triggers - Please specify"
              className="mt-2"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        {/* <Button type="submit">Next</Button> */}
      </div>
    </form>
  )
}