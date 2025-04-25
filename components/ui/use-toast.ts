"use client"

import type React from "react"

import { useEffect, useState } from "react"

const TOAST_LIMIT = 5
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = {
    id: string
    title?: string
    description?: string
    action?: React.ReactNode
    variant?: "default" | "destructive"
}

let count = 0

function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER
    return count.toString()
}

const toasts: ToasterToast[] = []

type Toast = Omit<ToasterToast, "id">

function useToast() {
    const [mounted, setMounted] = useState(false)
    const [localToasts, setLocalToasts] = useState<ToasterToast[]>([])

    useEffect(() => {
        setMounted(true)
        return () => {
            setMounted(false)
        }
    }, [])

    useEffect(() => {
        if (mounted) {
            setLocalToasts([...toasts])
        }
    }, [mounted])

    function toast(props: Toast) {
        const id = genId()
        const newToast = { id, ...props }
        toasts.push(newToast)
        setLocalToasts([...toasts])

        setTimeout(() => {
            toasts.splice(
                toasts.findIndex((t) => t.id === id),
                1,
            )
            setLocalToasts([...toasts])
        }, TOAST_REMOVE_DELAY)

        return {
            id,
            dismiss: () => {
                toasts.splice(
                    toasts.findIndex((t) => t.id === id),
                    1,
                )
                setLocalToasts([...toasts])
            },
            update: (props: Toast) => {
                const index = toasts.findIndex((t) => t.id === id)
                if (index !== -1) {
                    toasts[index] = { ...toasts[index], ...props }
                    setLocalToasts([...toasts])
                }
            },
        }
    }

    return {
        toast,
        toasts: localToasts.slice(0, TOAST_LIMIT),
        dismiss: (toastId?: string) => {
            if (toastId) {
                toasts.splice(
                    toasts.findIndex((t) => t.id === toastId),
                    1,
                )
            } else {
                toasts.splice(0, toasts.length)
            }
            setLocalToasts([...toasts])
        },
    }
}

export { useToast }
