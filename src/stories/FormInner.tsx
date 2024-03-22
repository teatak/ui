import React, { useState } from 'react'
import { Button, Input, Grid } from '../components'
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form"

enum GenderEnum {
    female = "female",
    male = "male",
    other = "other",
}

interface IFormInput {
    firstName: string
    gender: GenderEnum
    password: string
}

export const FormInner = () => {
    const { register, handleSubmit, formState: { isSubmitting, errors },
    } = useForm<IFormInput>({
        mode: 'all',
        defaultValues: {
            firstName: "",
            gender: GenderEnum.male,
        },
    })
    function timeout(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        console.log('data', data)
        await timeout(3000);
        console.log('data done', data)

        // // setLoading(true)
        // setTimeout(() => {
        //     setLoading(false)
        // }, 3000)
    }

    const onError: SubmitErrorHandler<IFormInput> = (errors) => {
        console.log('errors', errors)
    }

    const [loading, setLoading] = useState(false)

    return <form onSubmit={handleSubmit(onSubmit, onError)} >
        <Grid spacing={8}>
            <Grid.Item span={{ xs: 12, sm: 3 }} styleOverrides={{
                sm: { textAlign: 'right' }
            }}>
                <label htmlFor="firstName">First Name <span style={{ color: 'red' }}>*</span></label>
            </Grid.Item>
            <Grid.Item span={{ xs: 12, sm: 9 }}>
                <Input placeholder='firstName'
                    {...register("firstName", {
                        required: 'Required',
                        minLength: {
                            value: 10,
                            message: "minLength"
                        },
                        pattern: {
                            value: /^\d+$/gi,
                            message: "pattern"
                        },
                    })}
                    startDecorator={errors.firstName ? "AA" : null}
                    color={errors.firstName ? 'danger' : 'neutral'}
                    style={{ width: 200 }} id='firstName'
                />
                {errors.firstName && <p>{errors.firstName.message}</p>}
            </Grid.Item >
            <Grid.Item span={{ xs: 12, sm: 3 }} styleOverrides={{ sm: { textAlign: 'right' } }}>
                <label htmlFor="gender">Gender Selection</label>
            </Grid.Item>
            <Grid.Item span={{ xs: 12, sm: 9 }}>
                {loading ? null : <select id='gender' {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>}
            </Grid.Item>
            <Grid.Item offset={{ xs: 0, sm: 3 }} span={{ xs: 12, sm: 9 }}>
                <Input type='password' placeholder='password'
                    {...register("password", {
                        required: 'Password Required'
                    })}
                    color={errors.password ? 'danger' : 'neutral'}
                />
                {errors.password && <p>{errors.password.message}</p>}
            </Grid.Item>
            <Grid.Item offset={{ xs: 0, sm: 3 }} span={{ xs: 12, sm: 9 }}>
                <Grid spacing={4}>
                    <Button type='submit' color='primary'
                        loading={isSubmitting}
                        onClick={(e) => {
                        }}>Submit</Button>
                    <Button type='button' variant='outlined' color='primary' onClick={() => {
                        //reset()
                        //setLoading(true)
                    }}>Reset</Button>
                </Grid>
            </Grid.Item>
        </Grid >
    </form >
}