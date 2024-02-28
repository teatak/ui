export const isObject = (item: any) => {
    return (item && typeof item === 'object' && !Array.isArray(item))
}

export const merge: any = (target: any, ...sources: any) => {
    if (!sources.length) return target
    const source = sources.shift()
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} })
                merge(target[key], source[key])
            } else {
                Object.assign(target, { [key]: source[key] })
            }
        }
    }
    return merge(target, ...sources)
}

export type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};