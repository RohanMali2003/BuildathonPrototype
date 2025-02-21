'use client'

import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'

interface BasicInfoStepProps {
  data: {
    name: string
    age: string
    gender: string
    livingSituation: string
  }
  updateFields: (fields: Partial<BasicInfoStepProps['data']>) => void
  onNext: () => void
}

export default function BasicInfoStep({
  data,
  updateFields,
  onNext,
}: BasicInfoStepProps) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: data
  })

  const onSubmit = (formData: BasicInfoStepProps['data']) => {
    updateFields(formData)
    onNext()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message as string}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="age">Age</Label>
        <Input
          id="age"
          type="number"
          {...register("age", {
            required: "Age is required",
            min: { value: 18, message: "Must be 18 or older" }
          })}
        />
        {errors.age && (
          <p className="text-sm text-red-500">{errors.age.message as string}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="gender">Gender</Label>
        <Select
          id="gender"
          {...register("gender", { required: "Please select your gender" })}
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </Select>
        {errors.gender && (
          <p className="text-sm text-red-500">{errors.gender.message as string}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="livingSituation">Living Situation</Label>
        <Select
          id="livingSituation"
          {...register("livingSituation", { required: "Please select your living situation" })}
        >
          <option value="">Select living situation</option>
          <option value="alone">Living Alone</option>
          <option value="family">With Family</option>
          <option value="roommates">With Roommates</option>
          <option value="partner">With Partner</option>
          <option value="other">Other</option>
        </Select>
        {errors.livingSituation && (
          <p className="text-sm text-red-500">{errors.livingSituation.message as string}</p>
        )}
      </div>

      <div className="pt-4">
        {/* <Button type="submit" className="w-full">
          Next
        </Button> */}
      </div>
    </form>
  )
}