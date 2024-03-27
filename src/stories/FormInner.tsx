import React, { useState } from 'react'
import { Button, Input, Grid } from '../components'
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form"
import { _10K, Search } from '@teatak/icons'
import { ControlContext } from '../components/control'
import { SizeType } from '../components/types'
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
    const { register, handleSubmit, formState: { isValid, isSubmitting, errors },
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
    }

    const onError: SubmitErrorHandler<IFormInput> = (errors) => {
        console.log('errors', errors)
    }

    const [loading, setLoading] = useState(false)
    const [size, setSize] = useState<SizeType>('xs')

    return <form onSubmit={handleSubmit(onSubmit, onError)} >
        <ControlContext.Provider value={{ size: size }}>
            <Grid spacing={8}>
                <Grid.Item span={{ xs: 12, sm: 3 }} styleOverrides={{
                    sm: { textAlign: 'right' }
                }}>
                    <label>Size</label>
                </Grid.Item>
                <Grid.Item span={{ xs: 12, sm: 9 }}>
                    <Grid spacing={4}>
                        <Button
                            onClick={() => {
                                setSize('xs')
                            }}
                            disabled={size === "xs"}
                        >xs</Button>
                        <Button
                            onClick={() => {
                                setSize('sm')
                            }}
                            disabled={size === "sm"}
                        >sm</Button>
                        <Button
                            onClick={() => {
                                setSize('md')
                            }}
                            disabled={size === "md"}
                        >md</Button>
                        <Button
                            onClick={() => {
                                setSize('lg')
                            }}
                            disabled={size === "lg"}
                        >lg</Button>
                    </Grid>
                </Grid.Item >
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
                                value: 6,
                                message: "最小6位"
                            }
                        })}
                        startDecorator={errors.firstName ? <_10K /> : null}
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
                    <Input type='password'
                        placeholder='password'
                        startDecorator={<Button color='primary' onClick={() => {
                            console.log(111)
                        }}>Message</Button>}
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
                            loading={isValid && isSubmitting}
                            onClick={(e) => {
                            }}
                            endDecorator={<Search style={{ width: '1em', height: '1em', fill: 'currentcolor' }}
                            />}>Submit</Button>
                        <Button type='button' variant='outlined' color='primary' onClick={() => {
                            //reset()
                            //setLoading(true)
                        }}>Reset</Button>
                    </Grid>
                </Grid.Item>
            </Grid >
        </ControlContext.Provider>
    </form >
}