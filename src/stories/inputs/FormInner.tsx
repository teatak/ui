import React, { useState } from 'react'
import { Button, ButtonGroup, Input, Checkbox, Grid, GridItem, ControlGroup, Radio, ControlLabel, Switch, ControlContext } from '@/components'
import { Size } from '@/style'
import { useForm, SubmitHandler, SubmitErrorHandler, Controller } from "react-hook-form"
import { Search, Password, Smartphone, HelpOutlineOutlined as HelpTip } from '@teatak/icons'
import { IMaskInput } from 'react-imask';

enum GenderEnum {
    female = "female",
    male = "male",
    other = "other",
}

interface IFormInput {
    mobile: string
    gender: GenderEnum
    password: string
    agree: boolean
    roles: string[]
}

const optionsGender = [
    {
        label: "Male",
        value: "male",
    },
    {
        label: "Female",
        value: "female",
    },
    {
        label: "Other",
        value: "other",
    }
]

const options = [
    {
        label: "Admin",
        value: "admin",
    },
    {
        label: "Dev",
        value: "dev",
    },
    {
        label: "Dev2",
        value: "dev2",
    },
    {
        label: "Dev3",
        value: "dev3",
    },
    {
        label: "Dev4",
        value: "dev4",
    },
    {
        label: "Dev5",
        value: "dev5",
    },
    {
        label: "Dev6",
        value: "dev6",
    },
    {
        label: "Tester",
        value: "tester",
    },
    {
        label: "Master",
        value: "master",
        disabled: true,
    },
]

const TextMaskAdapter = React.forwardRef((props: any, ref: any) => {
    const { onChange, value, ...rest } = props;
    return <IMaskInput
        mask="#00-****-0000"
        unmask={true}
        definitions={{
            '#': /[1]/,
            '*': {
                mask: '0',
                displayChar: '•',
                placeholderChar: '•',
            }
        }}
        onAccept={(value: any, mask: any) => {
            onChange(value)
        }}
        inputRef={ref}
        defaultValue={value}
        value={value}
        {...rest}
    />
})

export const FormInner = () => {
    const defaultValues = {
        mobile: "18611822358",
        gender: GenderEnum.female,
        password: "1234567",
        agree: true,
        roles: ['dev', 'master'],
    }

    const { control, handleSubmit, reset, formState: { isValid, isSubmitting, errors } } = useForm<IFormInput>({
        mode: "onSubmit",
        defaultValues: defaultValues,
    })

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            const response = await fetch(
                'https://httpbin.org/post',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            )
            if (response.ok) {
                const movies = await response.json();
                console.log(data)
            } else {
                throw `HTTP Response Code: ${response?.status}`
            }
        } catch (error) {
            if (error instanceof TypeError) {
                console.error(error)
            } else {
                console.log(error)
            }
        }
    }

    const onError: SubmitErrorHandler<IFormInput> = (errors) => {
        console.log('errors', errors)
    }

    const [size, setSize] = useState<Size>('md')
    const [disabled, setDisabled] = useState(false)

    return <form onSubmit={handleSubmit(onSubmit, onError)} >
        <ControlContext.Provider value={{ size, disabled }}>
            <Grid spacing={8}>
                <GridItem span={{ xs: 12, sm: 3 }} styleOverrides={{
                    sm: { textAlign: 'right' }
                }}>
                    <ControlLabel required htmlFor='disabled' >Disabled <HelpTip /></ControlLabel>
                </GridItem>
                <GridItem span={{ xs: 12, sm: 9 }}>
                    <Switch id='disabled' checked={disabled} disabled={false} onChange={(e) => {
                        setDisabled(e.target.checked)
                    }}></Switch>
                </GridItem >
                <GridItem span={{ xs: 12, sm: 3 }} styleOverrides={{
                    sm: { textAlign: 'right' }
                }}>
                    <ControlLabel>Size</ControlLabel>
                </GridItem>
                <GridItem span={{ xs: 12, sm: 9 }}>
                    <ButtonGroup color='primary' variant='text' outlined shape='round'>
                        <Button variant={size === 'xs' ? 'filled' : undefined}
                            endDecorator={<Search />}
                            onClick={() => {
                                setSize('xs')
                            }}
                        >xs</Button>
                        <Button variant={size === 'sm' ? 'filled' : undefined}
                            onClick={() => {
                                setSize('sm')
                            }}
                        >sm</Button>
                        <Button variant={size === 'md' ? 'filled' : undefined}
                            onClick={() => {
                                setSize('md')
                            }}
                        >md</Button>
                        <Button variant={size === 'lg' ? 'filled' : undefined} endDecorator={<Search />}
                            onClick={() => {
                                setSize('lg')
                            }}
                        >large</Button>
                    </ButtonGroup>
                </GridItem >
                <GridItem span={{ xs: 12, sm: 3 }} styleOverrides={{ sm: { textAlign: 'right' } }}>
                    <ControlLabel htmlFor="mobile" required>First Name</ControlLabel>
                </GridItem>
                <GridItem span={{ xs: 12, sm: 9 }}>
                    <Controller control={control} name="mobile"
                        rules={{
                            required: "need mobile",
                            pattern: { value: /^1\d{10}$/i, message: "invalid mobile number" }
                        }}
                        render={({ field, fieldState }) => {
                            return <Input
                                component={TextMaskAdapter}
                                startDecorator={<Smartphone />}
                                placeholder='mobile'
                                color={fieldState.error ? 'danger' : 'neutral'}
                                style={{ width: 200 }} id='mobile'
                                {...field}
                            />
                        }}
                    />
                    {errors.mobile && <p>{errors.mobile.message}</p>}
                </GridItem >
                <GridItem span={{ xs: 12, sm: 3 }} styleOverrides={{ sm: { textAlign: 'right' } }}>
                    <ControlLabel>Gender Selection</ControlLabel>
                </GridItem>
                <GridItem span={{ xs: 12, sm: 9 }}>
                    <Controller
                        control={control} name="gender"
                        render={({ field, fieldState }) => {
                            const { ref, name, ...rest } = field
                            return <ControlGroup
                                options={optionsGender}
                                {...rest}
                                render={(items) => {
                                    return <Grid spacing={4}>
                                        {items.map((item) => {
                                            const { selected, label, ...rest } = item
                                            return <Radio
                                                name={name}
                                                outlined
                                                checked={selected}
                                                {...rest}
                                            >{label}</Radio>
                                        })}
                                    </Grid>
                                }}
                            />
                        }}
                    />
                </GridItem>
                <GridItem span={{ xs: 12, sm: 3 }} styleOverrides={{ sm: { textAlign: 'right' } }}>
                    <ControlLabel htmlFor="password">Password</ControlLabel>
                </GridItem>
                <GridItem span={{ xs: 12, sm: 9 }}>
                    <Controller control={control} name="password"
                        rules={{
                            required: "Password Required",
                        }}
                        render={({ field, fieldState }) => {
                            return <Input
                                id="password"
                                type='password'
                                placeholder='password'
                                startDecorator={
                                    <Password />
                                }
                                color={fieldState.error ? 'danger' : undefined}
                                {...field}
                            />
                        }}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </GridItem>
                <GridItem span={{ xs: 12, sm: 3 }} styleOverrides={{ sm: { textAlign: 'right' } }}>
                    <ControlLabel>Roles</ControlLabel>
                </GridItem>
                <GridItem span={{ xs: 12, sm: 9 }}>
                    <Controller control={control} name="roles"
                        rules={{
                            required: "need roles",
                        }}
                        render={({ field, fieldState }) => {
                            const { ref, name, ...rest } = field
                            return <ControlGroup
                                options={options}
                                {...rest}
                                render={(items) => {
                                    return <Grid spacing={4} columns={24}>
                                        {items.map((item, i) => {
                                            const { selected, label, ...rest } = item
                                            return <GridItem span={{ xs: 6, sm: 6, md: 4, lg: 3 }}
                                                key={i}><Checkbox
                                                    name={name}
                                                    outlined
                                                    checked={selected}
                                                    {...rest}
                                                >{label}</Checkbox></GridItem>
                                        })}
                                    </Grid>
                                }}
                            />
                        }}
                    />
                    {errors.roles && <span style={{ color: 'red', marginInlineStart: '8px' }}>{errors.roles.message}</span>}
                </GridItem>
                <GridItem offset={{ xs: 0, sm: 3 }} span={{ xs: 12, sm: 9 }}>
                    <Controller control={control} name="agree"
                        rules={{
                            required: "need agree",
                        }}
                        render={({ field, fieldState }) => {
                            const { value, ...rest } = field
                            return <Checkbox
                                outlined
                                checked={value}
                                color={fieldState.error ? 'danger' : undefined}
                                {...rest}
                            >同意</Checkbox>
                        }}
                    />
                    {errors.agree && <span style={{ color: 'red', marginInlineStart: '8px' }}>{errors.agree.message}</span>}
                </GridItem>
                <GridItem offset={{ xs: 0, sm: 3 }} span={{ xs: 12, sm: 9 }}>
                    <Grid spacing={4}>
                        <Button type='submit' variant='filled' color='primary'
                            loading={isValid && isSubmitting}
                            onClick={(e) => {
                            }}
                            endDecorator={<Search />}>Submit</Button>
                        <Button type='button' onClick={() => {
                            reset(defaultValues)
                        }}>Reset</Button>
                    </Grid>
                </GridItem>
            </Grid>
        </ControlContext.Provider>
    </form >
}